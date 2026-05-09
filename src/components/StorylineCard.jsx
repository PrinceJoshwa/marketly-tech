import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Sparkles, RefreshCw, FileText, AlertCircle } from "lucide-react";
import { getStoryline } from "@/lib/api";
import { toast } from "sonner";

export default function StorylineCard({ client, isAdmin }) {
  const [storyline, setStoryline] = useState(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(null);

  const load = async (regenerate = false) => {
    if (regenerate) setBusy(true); else setLoading(true);
    try {
      const sl = await getStoryline(client.client_id, { regenerate });
      setStoryline(sl);
      setErr(null);
      if (regenerate) toast.success("Storyline regenerated");
    } catch (e) {
      const msg = e?.response?.data?.detail || "Failed to load storyline";
      setErr(msg);
      if (regenerate) toast.error(msg);
    } finally {
      setLoading(false);
      setBusy(false);
    }
  };

  useEffect(() => {
    if (!isAdmin) return;
    load(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client.client_id, isAdmin]);

  if (!isAdmin) return null;
  if (loading) return <Skeleton className="h-64 rounded-sm" />;

  const sources = storyline?.data_sources || {};
  const liveCount = ["gsc_live", "ga4_live", "ads_live", "meta_live"].filter((k) => sources[k]).length;

  return (
    <Card className="rounded-sm border-zinc-200 bg-white shadow-none overflow-hidden" data-testid="storyline-card">
      <div className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-cobalt p-6 text-white">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-300">
              <Sparkles className="h-3.5 w-3.5" /> Monthly Storyline · AI-authored
              {storyline?.month && <span className="font-mono normal-case text-zinc-400">· {storyline.month}</span>}
            </div>
            {storyline?.tagline ? (
              <h2 className="mt-3 font-heading text-2xl font-bold leading-tight tracking-tight">
                {storyline.tagline}
              </h2>
            ) : (
              <h2 className="mt-3 font-heading text-2xl font-bold leading-tight">Generate this month's narrative</h2>
            )}
            {storyline?.generated_at && (
              <div className="mt-2 text-[11px] text-zinc-400 font-mono">
                {liveCount} of 4 sources live · regenerated {new Date(storyline.generated_at).toLocaleString()}
              </div>
            )}
          </div>
          <Button
            onClick={() => load(true)}
            disabled={busy}
            data-testid="storyline-regenerate"
            className="rounded-sm bg-white/10 backdrop-blur hover:bg-white/20 border border-white/20 text-white h-9 shrink-0"
          >
            <RefreshCw className={`h-3.5 w-3.5 mr-1.5 ${busy ? "animate-spin" : ""}`} />
            {busy ? "Generating…" : storyline ? "Regenerate" : "Generate"}
          </Button>
        </div>
      </div>

      {err && (
        <div className="px-6 py-4 border-b border-zinc-100 bg-red-50 flex items-start gap-2">
          <AlertCircle className="h-4 w-4 text-red-700 mt-0.5 shrink-0" />
          <div className="text-sm text-red-900">{err}</div>
        </div>
      )}

      {storyline && (
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
          <Section label="What we shipped" body={storyline.shipped} />
          <Section label="What moved" body={storyline.moved} />
          <Section label="What's next" body={storyline.next} />
        </div>
      )}

      <div className="px-6 py-3 bg-zinc-50 border-t border-zinc-200 flex flex-wrap items-center gap-2">
        <FileText className="h-3.5 w-3.5 text-zinc-400" />
        <span className="text-[11px] text-zinc-600 font-mono mr-2">Goes on page 1 of the monthly PDF</span>
        <SourceBadge label="GSC" live={sources.gsc_live} />
        <SourceBadge label="GA4" live={sources.ga4_live} />
        <SourceBadge label="Ads" live={sources.ads_live} />
        <SourceBadge label="Meta" live={sources.meta_live} />
      </div>
    </Card>
  );
}

function Section({ label, body }) {
  return (
    <div className="p-6">
      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-2">{label}</div>
      <p className="text-sm text-zinc-800 leading-relaxed whitespace-pre-line">{body}</p>
    </div>
  );
}

function SourceBadge({ label, live }) {
  return (
    <Badge
      variant="outline"
      className={`rounded-sm font-mono text-[10px] ${
        live
          ? "border-emerald-300 bg-emerald-50 text-emerald-800"
          : "border-zinc-300 bg-white text-zinc-500"
      }`}
    >
      {label} · {live ? "live" : "sample"}
    </Badge>
  );
}
