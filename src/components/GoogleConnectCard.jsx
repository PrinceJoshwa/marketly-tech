import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { googleStatus, googleStart, googleDisconnect, gscSites, adsCustomers, googleSelect } from "@/lib/api";
import { CheckCircle2, Plug, Unlink, Save, RefreshCw } from "lucide-react";
import { toast } from "sonner";

export default function GoogleConnectCard({ client, isAdmin, onChange }) {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [starting, setStarting] = useState(false);
  const [sites, setSites] = useState([]);
  const [siteLoading, setSiteLoading] = useState(false);
  const [site, setSite] = useState("");
  const [propId, setPropId] = useState("");
  const [adsCusts, setAdsCusts] = useState([]);
  const [adsCustLoading, setAdsCustLoading] = useState(false);
  const [adsCust, setAdsCust] = useState("");
  const [saving, setSaving] = useState(false);

  const reload = async () => {
    const s = await googleStatus(client.client_id).catch(() => null);
    setStatus(s);
    if (s?.connected) {
      setSite(s.gsc_site_url || "");
      setPropId(s.ga4_property_id || "");
      setAdsCust(s.ads_customer_id || "");
    }
  };

  useEffect(() => {
    (async () => {
      try { await reload(); } finally { setLoading(false); }
    })();
    const onMsg = (e) => {
      if (e?.data?.marketly_google_oauth) {
        if (e.data.marketly_google_oauth === "success") {
          toast.success("Google connected");
          reload().then(() => onChange?.());
        } else {
          toast.error("Google sign-in was cancelled");
        }
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client.client_id]);

  const handleConnect = async () => {
    if (!isAdmin) {
      toast.error("Only admins can connect Google");
      return;
    }
    setStarting(true);
    try {
      const { authorization_url } = await googleStart(client.client_id);
      const w = 520, h = 640;
      const left = window.screenX + (window.outerWidth - w) / 2;
      const top = window.screenY + (window.outerHeight - h) / 2;
      window.open(
        authorization_url,
        "marketly-google-oauth",
        `width=${w},height=${h},left=${left},top=${top}`,
      );
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Could not start OAuth");
    } finally {
      setStarting(false);
    }
  };

  const handleDisconnect = async () => {
    if (!window.confirm("Disconnect Google from this client? Reports will fall back to sample data.")) return;
    try {
      await googleDisconnect(client.client_id);
      toast.success("Disconnected");
      setStatus({ connected: false, oauth_configured: true });
      onChange?.();
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Disconnect failed");
    }
  };

  const loadSites = async () => {
    setSiteLoading(true);
    try {
      const r = await gscSites(client.client_id);
      setSites(r.sites || []);
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Could not load sites");
    } finally {
      setSiteLoading(false);
    }
  };

  const loadAdsCustomers = async () => {
    setAdsCustLoading(true);
    try {
      const r = await adsCustomers(client.client_id);
      setAdsCusts(r.customers || []);
      if (!r.customers?.length) toast.info("No Google Ads accounts accessible by this Google account");
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Could not load Ads accounts");
    } finally {
      setAdsCustLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await googleSelect(client.client_id, {
        gsc_site_url: site || null,
        ga4_property_id: propId?.replace("properties/", "") || null,
        ads_customer_id: (adsCust || "").replace(/-/g, "") || null,
      });
      toast.success("Properties saved");
      onChange?.();
      await reload();
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Save failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return null;
  if (!status?.oauth_configured) return null;

  return (
    <Card className="rounded-sm border-zinc-200 bg-white p-6 shadow-none" data-testid="google-connect-card">
      <div className="flex items-start gap-3">
        <div className={`h-9 w-9 grid place-items-center shrink-0 ${status.connected ? "bg-emerald-600" : "bg-zinc-950"} text-white`}>
          {status.connected ? <CheckCircle2 className="h-4 w-4" /> : <Plug className="h-4 w-4" />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Google · Search Console & Analytics 4
              </div>
              <div className="mt-1 font-heading font-bold text-lg text-zinc-950">
                {status.connected ? (
                  <>Connected as <span className="font-mono text-sm">{status.google_email}</span></>
                ) : "Not connected"}
              </div>
              {status.connected && (
                <div className="mt-1 text-[11px] text-zinc-500 font-mono">
                  by {status.connected_by} · {new Date(status.connected_at).toLocaleDateString()}
                </div>
              )}
              {status.connected && status.needs_reauth && (
                <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 border border-amber-300 bg-amber-50 rounded-sm text-[11px] text-amber-900 font-mono">
                  <RefreshCw className="h-3 w-3" /> Token expired — click Re-auth to refresh
                </div>
              )}
            </div>
            <div className="flex gap-2">
              {!status.connected && isAdmin && (
                <Button
                  onClick={handleConnect}
                  disabled={starting}
                  data-testid="google-connect-button"
                  className="rounded-sm bg-zinc-950 hover:bg-cobalt text-white h-9"
                >
                  <Plug className="h-3.5 w-3.5 mr-1.5" /> {starting ? "Opening…" : "Connect Google"}
                </Button>
              )}
              {status.connected && isAdmin && (
                <>
                  <Button
                    variant="outline"
                    onClick={handleConnect}
                    disabled={starting}
                    data-testid="google-reconnect-button"
                    className="rounded-sm border-zinc-200 h-9"
                  >
                    <RefreshCw className="h-3.5 w-3.5 mr-1.5" /> Re-auth
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleDisconnect}
                    data-testid="google-disconnect-button"
                    className="rounded-sm border-zinc-200 text-red-600 hover:text-red-700 hover:border-red-300 h-9"
                  >
                    <Unlink className="h-3.5 w-3.5 mr-1.5" /> Disconnect
                  </Button>
                </>
              )}
            </div>
          </div>

          {status.connected && (
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center justify-between">
                  <Label className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-semibold">
                    GSC site
                  </Label>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={loadSites}
                    disabled={siteLoading}
                    data-testid="gsc-load-sites"
                    className="h-6 text-[11px] text-cobalt hover:bg-blue-50"
                  >
                    {siteLoading ? "…" : "List sites"}
                  </Button>
                </div>
                {sites.length > 0 ? (
                  <Select value={site} onValueChange={setSite}>
                    <SelectTrigger data-testid="gsc-site-select" className="mt-2 rounded-sm border-zinc-200 font-mono text-xs">
                      <SelectValue placeholder="Select a GSC property" />
                    </SelectTrigger>
                    <SelectContent>
                      {sites.map((s) => (
                        <SelectItem key={s.site_url} value={s.site_url} className="font-mono text-xs">
                          {s.site_url} <span className="ml-2 text-zinc-400">· {s.permission}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <Input
                    data-testid="gsc-site-input"
                    value={site}
                    onChange={(e) => setSite(e.target.value)}
                    placeholder="sc-domain:nhancesmart.in  or  https://nhancesmart.in/"
                    className="mt-2 rounded-sm border-zinc-200 focus-visible:ring-zinc-950 font-mono text-xs"
                    disabled={!isAdmin}
                  />
                )}
              </div>
              <div>
                <Label className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-semibold">
                  GA4 Property ID
                </Label>
                <Input
                  data-testid="ga4-prop-input"
                  value={propId}
                  onChange={(e) => setPropId(e.target.value)}
                  placeholder="487123456"
                  className="mt-2 rounded-sm border-zinc-200 focus-visible:ring-zinc-950 font-mono text-xs"
                  disabled={!isAdmin}
                />
                <div className="mt-1 text-[10px] text-zinc-400 font-mono">GA4 → Admin → Property Settings</div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex items-center justify-between">
                  <Label className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-semibold">
                    Google Ads customer
                  </Label>
                  {(status.scopes || []).includes("https://www.googleapis.com/auth/adwords") ? (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={loadAdsCustomers}
                      disabled={adsCustLoading}
                      data-testid="ads-load-customers"
                      className="h-6 text-[11px] text-cobalt hover:bg-blue-50"
                    >
                      {adsCustLoading ? "…" : "List accounts"}
                    </Button>
                  ) : (
                    <span className="text-[10px] text-amber-700 font-mono">
                      Reconnect Google and tick the Ads box to enable
                    </span>
                  )}
                </div>
                {adsCusts.length > 0 ? (
                  <Select value={adsCust} onValueChange={setAdsCust}>
                    <SelectTrigger data-testid="ads-cust-select" className="mt-2 rounded-sm border-zinc-200 font-mono text-xs">
                      <SelectValue placeholder="Select a Google Ads account" />
                    </SelectTrigger>
                    <SelectContent>
                      {adsCusts.map((c) => (
                        <SelectItem key={c.customer_id} value={c.customer_id} className="font-mono text-xs">
                          {c.descriptive_name} <span className="ml-2 text-zinc-400">· {c.customer_id}{c.currency_code ? ` · ${c.currency_code}` : ""}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <Input
                    data-testid="ads-cust-input"
                    value={adsCust}
                    onChange={(e) => setAdsCust(e.target.value)}
                    placeholder="1234567890  (10 digits, no hyphens)"
                    className="mt-2 rounded-sm border-zinc-200 focus-visible:ring-zinc-950 font-mono text-xs"
                    disabled={!isAdmin}
                  />
                )}
              </div>
              <div className="sm:col-span-2 flex justify-end">
                {isAdmin && (
                  <Button
                    onClick={handleSave}
                    disabled={saving}
                    data-testid="google-save-props"
                    className="rounded-sm bg-zinc-950 hover:bg-cobalt text-white h-9"
                  >
                    <Save className="h-3.5 w-3.5 mr-1.5" /> {saving ? "Saving…" : "Save properties"}
                  </Button>
                )}
              </div>
              {(status.gsc_site_url || status.ga4_property_id || status.ads_customer_id) && (
                <div className="sm:col-span-2 flex flex-wrap gap-2 pt-2 border-t border-zinc-100">
                  {status.gsc_site_url && (
                    <Badge variant="outline" className="rounded-sm font-mono text-[11px] border-emerald-300 bg-emerald-50 text-emerald-800">
                      GSC: {status.gsc_site_url}
                    </Badge>
                  )}
                  {status.ga4_property_id && (
                    <Badge variant="outline" className="rounded-sm font-mono text-[11px] border-emerald-300 bg-emerald-50 text-emerald-800">
                      GA4: properties/{status.ga4_property_id}
                    </Badge>
                  )}
                  {status.ads_customer_id && (
                    <Badge variant="outline" className="rounded-sm font-mono text-[11px] border-emerald-300 bg-emerald-50 text-emerald-800">
                      Ads: {status.ads_customer_id}
                    </Badge>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
