import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { metaStatus, metaStart, metaDisconnect } from "@/lib/api";
import { CheckCircle2, Plug, Unlink, RefreshCw } from "lucide-react";
import { toast } from "sonner";

export default function MetaConnectCard({ client, isAdmin, onChange }) {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [starting, setStarting] = useState(false);

  const reload = async () => {
    const s = await metaStatus(client.client_id).catch(() => null);
    setStatus(s);
  };

  useEffect(() => {
    (async () => {
      try { await reload(); } finally { setLoading(false); }
    })();
    const onMsg = (e) => {
      if (e?.data?.marketly_meta_oauth) {
        if (e.data.marketly_meta_oauth === "success") {
          toast.success("Meta connected");
          reload().then(() => onChange?.());
        } else {
          toast.error("Meta sign-in was cancelled");
        }
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client.client_id]);

  const handleConnect = async () => {
    if (!isAdmin) {
      toast.error("Only admins can connect Meta");
      return;
    }
    setStarting(true);
    try {
      const { authorization_url } = await metaStart(client.client_id);
      const w = 600, h = 720;
      const left = window.screenX + (window.outerWidth - w) / 2;
      const top = window.screenY + (window.outerHeight - h) / 2;
      window.open(
        authorization_url,
        "marketly-meta-oauth",
        `width=${w},height=${h},left=${left},top=${top}`,
      );
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Could not start Meta OAuth");
    } finally {
      setStarting(false);
    }
  };

  const handleDisconnect = async () => {
    if (!window.confirm("Disconnect Meta from this client? Reports will fall back to sample data.")) return;
    try {
      await metaDisconnect(client.client_id);
      toast.success("Disconnected");
      setStatus({ connected: false, oauth_configured: true });
      onChange?.();
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Disconnect failed");
    }
  };

  if (loading) return null;
  if (!status?.oauth_configured) return null;

  return (
    <Card className="rounded-sm border-zinc-200 bg-white p-6 shadow-none" data-testid="meta-connect-card">
      <div className="flex items-start gap-3">
        <div className={`h-9 w-9 grid place-items-center shrink-0 ${status.connected ? "bg-emerald-600" : "bg-[#1877F2]"} text-white`}>
          {status.connected ? <CheckCircle2 className="h-4 w-4" /> : <Plug className="h-4 w-4" />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Meta · Facebook & Instagram
              </div>
              <div className="mt-1 font-heading font-bold text-lg text-zinc-950">
                {status.connected ? (
                  <>Connected: <span className="font-mono text-sm">{status.page_name}</span></>
                ) : "Not connected"}
              </div>
              {status.connected && (
                <div className="mt-1 text-[11px] text-zinc-500 font-mono">
                  by {status.fb_user_name || status.connected_by} · {new Date(status.connected_at).toLocaleDateString()}
                </div>
              )}
            </div>
            <div className="flex gap-2">
              {!status.connected && isAdmin && (
                <Button
                  onClick={handleConnect}
                  disabled={starting}
                  data-testid="meta-connect-button"
                  className="rounded-sm bg-[#1877F2] hover:bg-[#0d62cc] text-white h-9"
                >
                  <Plug className="h-3.5 w-3.5 mr-1.5" /> {starting ? "Opening…" : "Connect Meta"}
                </Button>
              )}
              {status.connected && isAdmin && (
                <>
                  <Button
                    variant="outline"
                    onClick={handleConnect}
                    disabled={starting}
                    data-testid="meta-reconnect-button"
                    className="rounded-sm border-zinc-200 h-9"
                  >
                    <RefreshCw className="h-3.5 w-3.5 mr-1.5" /> Re-auth
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleDisconnect}
                    data-testid="meta-disconnect-button"
                    className="rounded-sm border-zinc-200 text-red-600 hover:text-red-700 hover:border-red-300 h-9"
                  >
                    <Unlink className="h-3.5 w-3.5 mr-1.5" /> Disconnect
                  </Button>
                </>
              )}
            </div>
          </div>

          {status.connected && (
            <div className="mt-5 flex flex-wrap gap-2 pt-3 border-t border-zinc-100">
              <Badge variant="outline" className="rounded-sm font-mono text-[11px] border-emerald-300 bg-emerald-50 text-emerald-800">
                Page · {status.page_id}
              </Badge>
              {status.ig_username && (
                <Badge variant="outline" className="rounded-sm font-mono text-[11px] border-emerald-300 bg-emerald-50 text-emerald-800">
                  IG · @{status.ig_username}
                </Badge>
              )}
              {status.needs_reauth && (
                <Badge variant="outline" className="rounded-sm font-mono text-[11px] border-amber-300 bg-amber-50 text-amber-800">
                  Token expired — please reconnect
                </Badge>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
