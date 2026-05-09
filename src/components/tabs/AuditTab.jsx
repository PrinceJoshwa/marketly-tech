import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  CheckCircle2, AlertTriangle, XCircle, ShieldCheck, Search, Zap,
  ExternalLink, Target, Sparkles, RefreshCw, FileText, History,
} from "lucide-react";
import { toast } from "sonner";
import {
  auditPage, auditSite, auditHistory,
  runCompetitorStrategy, listCompetitorStrategies,
  getMe,
} from "@/lib/api";

function bandColor(band) {
  if (band === "good") return { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-800", accent: "bg-emerald-600" };
  if (band === "warn") return { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-800", accent: "bg-amber-500" };
  return { bg: "bg-red-50", border: "border-red-200", text: "text-red-800", accent: "bg-red-600" };
}
const SevDot = ({ severity }) => {
  if (severity === "error") return <XCircle className="h-4 w-4 text-red-600 shrink-0" />;
  if (severity === "warn") return <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0" />;
  return <span className="h-2 w-2 rounded-full bg-zinc-300 shrink-0" />;
};

export default function AuditTab({ client }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getMe().then(setUser).catch(() => null);
  }, []);
  const isAdmin = user?.role === "admin";

  return (
    <div className="space-y-6" data-testid="audit-tab">
      <div>
        <h2 className="font-heading text-2xl font-bold text-zinc-950">Audit & Competitor Intel</h2>
        <p className="text-sm text-zinc-500 mt-0.5">On-page technical + content checks · AI competitor outrank roadmap</p>
      </div>

      <SinglePageAuditCard client={client} />
      {isAdmin && <SiteAuditCard client={client} />}
      {isAdmin && <CompetitorStrategyCard client={client} />}
      <AuditHistoryCard client={client} />
    </div>
  );
}

// ---------- Single page audit ----------
function SinglePageAuditCard({ client }) {
  const [url, setUrl] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState(null);

  const handleRun = async () => {
    if (!url.trim()) return toast.error("Paste a URL first");
    setBusy(true);
    try {
      const r = await auditPage(client.client_id, url.trim());
      setResult(r);
      toast.success(`Audit done — score ${r.score}/100 (${r.issue_count.error} errors, ${r.issue_count.warn} warnings)`);
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Audit failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card className="rounded-sm border-zinc-200 bg-white p-6 shadow-none" data-testid="single-page-audit-card">
      <div className="flex items-start gap-3 mb-5">
        <div className="h-9 w-9 grid place-items-center bg-cobalt text-white shrink-0">
          <Search className="h-4 w-4" />
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Single-Page Audit</div>
          <div className="font-heading font-bold text-lg text-zinc-950 mt-1">
            Check any page in ~3 seconds
          </div>
          <div className="text-[11px] text-zinc-500 mt-0.5">Technical + content checks · title/meta/H1/schema/alt/links/TTFB</div>
        </div>
      </div>

      <div className="flex gap-2">
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://yourclient.com/page-to-audit"
          data-testid="audit-page-url"
          onKeyDown={(e) => e.key === "Enter" && !busy && handleRun()}
          className="rounded-sm border-zinc-200 focus-visible:ring-zinc-950 font-mono text-xs"
        />
        <Button
          onClick={handleRun}
          disabled={busy}
          data-testid="audit-page-run"
          className="rounded-sm bg-zinc-950 hover:bg-cobalt h-10 shrink-0"
        >
          <Zap className={`h-3.5 w-3.5 mr-1.5 ${busy ? "animate-pulse" : ""}`} />
          {busy ? "Auditing…" : "Run audit"}
        </Button>
      </div>

      {result && <PageAuditResult result={result} />}
    </Card>
  );
}

function PageAuditResult({ result }) {
  const c = bandColor(result.band);
  const fetchFailed = !!result.error;
  return (
    <div className="mt-6 pt-5 border-t border-zinc-100" data-testid="page-audit-result">
      <div className={`border ${c.border} ${c.bg} rounded-sm p-5 flex items-center justify-between gap-4`}>
        <div className="flex items-center gap-4">
          <div className={`h-14 w-14 rounded-sm grid place-items-center ${c.accent} text-white font-mono font-bold text-xl`}>
            {result.score}
          </div>
          <div>
            <div className={`font-mono text-xs uppercase tracking-[0.2em] ${c.text}`}>
              {fetchFailed ? "Fetch failed" : result.band === "good" ? "Healthy" : result.band === "warn" ? "Needs work" : "Critical"}
            </div>
            <div className="font-heading font-bold text-lg text-zinc-950 mt-1 break-all max-w-[560px]">{result.url}</div>
            {fetchFailed && (
              <div className="mt-1.5 text-xs text-red-700 font-mono">{result.error}</div>
            )}
          </div>
        </div>
        <div className="text-right shrink-0">
          <div className="font-mono text-2xl font-bold text-zinc-950">{result.issue_count.error + result.issue_count.warn}</div>
          <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-500 font-semibold">issues</div>
        </div>
      </div>

      {!fetchFailed && (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-100">
          <Stat label="Title" value={`${result.title_length}/65`} good={result.title_length >= 30 && result.title_length <= 65} />
          <Stat label="Meta desc" value={`${result.description_length}/170`} good={result.description_length >= 120 && result.description_length <= 170} />
          <Stat label="H1 / H2 / H3" value={`${result.h1_count} / ${result.h2_count} / ${result.h3_count}`} good={result.h1_count === 1} />
          <Stat label="Words" value={(result.word_count || 0).toLocaleString()} good={(result.word_count || 0) >= 300} />
          <Stat label="Img alt" value={`${result.image_with_alt_count}/${result.image_count}`} good={result.image_count === 0 || result.image_with_alt_count === result.image_count} />
          <Stat label="Internal" value={result.internal_links} good={result.internal_links >= 3} />
          <Stat label="HTTPS / schema" value={`${result.is_https ? "✓" : "×"} / ${result.has_schema ? "✓" : "×"}`} good={result.is_https && result.has_schema} />
          <Stat label="TTFB" value={result.ttfb_ms ? `${Math.round(result.ttfb_ms)} ms` : "—"} good={result.ttfb_ms && result.ttfb_ms < 1500} />
        </div>
      )}

      {result.issues?.length > 0 && (
        <div className="mt-4">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-2">Issues to fix</div>
          <div className="space-y-1">
            {result.issues.map((i, idx) => (
              <div key={idx} className="flex items-start gap-2 px-3 py-2 bg-white border border-zinc-100 rounded-sm">
                <SevDot severity={i.severity} />
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-zinc-800">{i.msg}</div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-zinc-400 mt-0.5 font-semibold">{i.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({ label, value, good }) {
  return (
    <div className={`bg-white p-3 border-l-2 ${good === true ? "border-emerald-500" : good === false ? "border-red-500" : "border-zinc-200"}`}>
      <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-500 font-semibold">{label}</div>
      <div className="font-mono font-bold text-sm text-zinc-900 mt-1 truncate">{value}</div>
    </div>
  );
}

// ---------- Full site audit ----------
function SiteAuditCard({ client }) {
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState(null);

  const handleRun = async () => {
    setBusy(true);
    try {
      const r = await auditSite(client.client_id, { max_pages: 30 });
      setResult(r);
      toast.success(`Site audit done — ${r.pages_audited} pages, score ${r.site_score}/100`);
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Site audit failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card className="rounded-sm border-zinc-200 bg-white p-6 shadow-none" data-testid="site-audit-card">
      <div className="flex items-start justify-between gap-3 mb-5">
        <div className="flex items-start gap-3">
          <div className="h-9 w-9 grid place-items-center bg-zinc-950 text-white shrink-0">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Full Site Audit</div>
            <div className="font-heading font-bold text-lg text-zinc-950 mt-1">
              Walks sitemap · audits up to 30 pages
            </div>
            <div className="text-[11px] text-zinc-500 mt-0.5">
              Runs the single-page audit across the client's full sitemap and aggregates the fixes.
            </div>
          </div>
        </div>
        <Button
          onClick={handleRun}
          disabled={busy}
          data-testid="audit-site-run"
          className="rounded-sm bg-zinc-950 hover:bg-cobalt h-10 shrink-0"
        >
          <RefreshCw className={`h-3.5 w-3.5 mr-1.5 ${busy ? "animate-spin" : ""}`} />
          {busy ? "Crawling…" : "Run full audit"}
        </Button>
      </div>

      {busy && <Skeleton className="h-32 rounded-sm" />}
      {result && <SiteAuditResult result={result} />}
    </Card>
  );
}

function SiteAuditResult({ result }) {
  const c = bandColor(result.band);
  return (
    <div className="mt-2" data-testid="site-audit-result">
      <div className={`border ${c.border} ${c.bg} rounded-sm p-5 grid grid-cols-1 sm:grid-cols-4 gap-4`}>
        <div className="flex items-center gap-4">
          <div className={`h-14 w-14 rounded-sm grid place-items-center ${c.accent} text-white font-mono font-bold text-xl shrink-0`}>
            {result.site_score}
          </div>
          <div>
            <div className={`font-mono text-xs uppercase tracking-[0.2em] ${c.text}`}>Site score</div>
            <div className="text-[11px] text-zinc-600 font-mono mt-0.5">{result.pages_audited} pages</div>
          </div>
        </div>
        <HealthNum label="Errors" value={result.total_errors} color="text-red-700" />
        <HealthNum label="Warnings" value={result.total_warns} color="text-amber-700" />
        <HealthNum label="Top issues" value={result.top_issues?.length || 0} color="text-zinc-700" />
      </div>

      {result.top_issues?.length > 0 && (
        <div className="mt-5">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-2">
            Top fixable issues across the site
          </div>
          <div className="border border-zinc-200 rounded-sm overflow-hidden">
            {result.top_issues.map((i, idx) => (
              <div key={idx} className="flex items-start gap-3 px-4 py-3 border-b border-zinc-100 last:border-0 hover:bg-zinc-50">
                <SevDot severity={i.severity} />
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-zinc-800">{i.msg}</div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-zinc-400 mt-0.5 font-semibold">
                    {i.category} · affects {i.count} page{i.count > 1 ? "s" : ""}
                  </div>
                </div>
                <Badge variant="outline" className="rounded-sm font-mono text-[11px] border-zinc-200 shrink-0">
                  {i.count}×
                </Badge>
              </div>
            ))}
          </div>
        </div>
      )}

      {result.pages?.length > 0 && (
        <div className="mt-5">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-2">
            Per-page scores
          </div>
          <div className="overflow-x-auto border border-zinc-200 rounded-sm">
            <Table>
              <TableHeader>
                <TableRow className="border-zinc-200">
                  <TableHead className="text-[10px] uppercase tracking-[0.16em] font-semibold w-[60px]">Score</TableHead>
                  <TableHead className="text-[10px] uppercase tracking-[0.16em] font-semibold">URL</TableHead>
                  <TableHead className="text-[10px] uppercase tracking-[0.16em] font-semibold w-[60px] text-right">Err</TableHead>
                  <TableHead className="text-[10px] uppercase tracking-[0.16em] font-semibold w-[60px] text-right">Warn</TableHead>
                  <TableHead className="text-[10px] uppercase tracking-[0.16em] font-semibold w-[90px] text-right">TTFB</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {result.pages.map((p, i) => {
                  const pc = bandColor(p.band);
                  return (
                    <TableRow key={i} className="border-zinc-100">
                      <TableCell>
                        <span className={`inline-block px-1.5 py-0.5 font-mono text-xs font-bold rounded-sm ${pc.accent} text-white`}>
                          {p.score}
                        </span>
                      </TableCell>
                      <TableCell>
                        <a href={p.url} target="_blank" rel="noreferrer" className="text-cobalt hover:underline text-xs font-mono inline-flex items-center gap-1 truncate max-w-[480px]">
                          <span className="truncate">{p.url}</span>
                          <ExternalLink className="h-3 w-3 shrink-0" />
                        </a>
                      </TableCell>
                      <TableCell className="text-right font-mono text-xs text-red-700">{p.issue_count?.error || 0}</TableCell>
                      <TableCell className="text-right font-mono text-xs text-amber-700">{p.issue_count?.warn || 0}</TableCell>
                      <TableCell className="text-right font-mono text-xs text-zinc-600">
                        {p.ttfb_ms ? `${Math.round(p.ttfb_ms)} ms` : "—"}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
}

function HealthNum({ label, value, color }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-500 font-semibold">{label}</div>
      <div className={`font-mono text-2xl font-bold mt-0.5 ${color}`}>{value}</div>
    </div>
  );
}

// ---------- Competitor Strategy ----------
function CompetitorStrategyCard({ client }) {
  const [url, setUrl] = useState("");
  const [busy, setBusy] = useState(false);
  const [strategies, setStrategies] = useState([]);
  const [selected, setSelected] = useState(null);

  const reload = async () => {
    try {
      const r = await listCompetitorStrategies(client.client_id, 20);
      setStrategies(r.strategies || []);
      if (!selected && r.strategies?.[0]) setSelected(r.strategies[0]);
    } catch {}
  };

  useEffect(() => { reload(); /* eslint-disable-next-line */ }, [client.client_id]);

  // Listen for "Outrank" clicks from Spy Glass tab
  useEffect(() => {
    const onPrefill = (e) => {
      const target = e?.detail?.competitor_url;
      if (target) {
        setUrl(target);
        // Scroll this card into view
        document.querySelector('[data-testid="competitor-strategy-card"]')?.scrollIntoView({ behavior: "smooth", block: "start" });
        toast.info(`Prefilled competitor: ${target}. Click Generate roadmap.`, { duration: 4500 });
      }
    };
    window.addEventListener("marketly-prefill-competitor", onPrefill);
    return () => window.removeEventListener("marketly-prefill-competitor", onPrefill);
  }, []);

  const handleRun = async () => {
    if (!url.trim()) return toast.error("Paste a competitor URL");
    setBusy(true);
    try {
      const r = await runCompetitorStrategy(client.client_id, url.trim());
      setSelected(r);
      setUrl("");
      toast.success(`Content roadmap generated (${r.blog_briefs?.length || 0} briefs)`);
      reload();
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Competitor crawl failed", { duration: 6000 });
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card className="rounded-sm border-zinc-200 bg-white shadow-none overflow-hidden" data-testid="competitor-strategy-card">
      <div className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-cobalt p-6 text-white">
        <div className="flex items-start gap-3">
          <div className="h-9 w-9 grid place-items-center bg-white/10 backdrop-blur border border-white/20 shrink-0">
            <Target className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-300">
              Competitor Outrank Strategy · AI-authored
            </div>
            <div className="font-heading text-2xl font-bold mt-2 tracking-tight">
              Crawl a competitor → get a content roadmap
            </div>
            <div className="text-[11px] text-zinc-400 mt-1 font-mono">
              Walks sitemap · extracts topics · Claude writes blog briefs + technical moves
            </div>
          </div>
        </div>

        <div className="mt-5 flex gap-2">
          <Input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://competitor.com"
            data-testid="competitor-url"
            onKeyDown={(e) => e.key === "Enter" && !busy && handleRun()}
            className="rounded-sm bg-white/10 border-white/20 text-white placeholder:text-zinc-400 focus-visible:ring-white font-mono text-xs"
          />
          <Button
            onClick={handleRun}
            disabled={busy}
            data-testid="competitor-run"
            className="rounded-sm bg-white text-zinc-950 hover:bg-zinc-100 h-10 shrink-0"
          >
            <Sparkles className={`h-3.5 w-3.5 mr-1.5 ${busy ? "animate-pulse" : ""}`} />
            {busy ? "Analysing…" : "Generate roadmap"}
          </Button>
        </div>
      </div>

      {strategies.length > 1 && (
        <div className="px-6 py-3 border-b border-zinc-100 bg-zinc-50 flex flex-wrap gap-1.5">
          <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-semibold mr-2 self-center">History:</span>
          {strategies.slice(0, 8).map((s) => (
            <button
              key={s.competitor_strategy_id}
              onClick={() => setSelected(s)}
              className={`px-2 py-1 rounded-sm border font-mono text-[11px] transition ${
                selected?.competitor_strategy_id === s.competitor_strategy_id
                  ? "border-cobalt bg-blue-50 text-cobalt"
                  : "border-zinc-200 bg-white hover:border-zinc-400"
              }`}
            >
              {s.competitor_domain || s.competitor_url}
            </button>
          ))}
        </div>
      )}

      {selected && <CompetitorStrategyBody s={selected} />}
    </Card>
  );
}

function CompetitorStrategyBody({ s }) {
  return (
    <div className="p-6 space-y-6">
      {s.headline && (
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-1">Opportunity</div>
          <h3 className="font-heading text-xl font-bold text-zinc-950 leading-tight">{s.headline}</h3>
        </div>
      )}
      {s.positioning && (
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-2">Positioning</div>
          <p className="text-sm text-zinc-800 leading-relaxed">{s.positioning}</p>
        </div>
      )}

      {s.content_gaps?.length > 0 && (
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-3">Content gaps</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {s.content_gaps.map((g, i) => (
              <div key={i} className="p-3 border border-zinc-200 rounded-sm">
                <div className="font-semibold text-sm text-zinc-900">{g.cluster}</div>
                <div className="text-xs text-zinc-600 mt-1">{g.why_it_matters}</div>
                {g.primary_keyword && (
                  <Badge variant="outline" className="mt-2 rounded-sm font-mono text-[10px] border-cobalt bg-blue-50 text-cobalt">
                    {g.primary_keyword}
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {s.blog_briefs?.length > 0 && (
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-3">
            Blog briefs · {s.blog_briefs.length} total
          </div>
          <div className="space-y-2">
            {s.blog_briefs.map((b) => (
              <div key={b.id} className="p-4 border border-zinc-200 rounded-sm bg-white hover:border-cobalt transition" data-testid={`brief-${b.id}`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-zinc-950">{b.title}</div>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      <Badge variant="outline" className={`rounded-sm font-mono text-[10px] ${
                        b.priority === "P0" ? "border-red-300 bg-red-50 text-red-800" :
                        b.priority === "P1" ? "border-amber-300 bg-amber-50 text-amber-800" :
                        "border-zinc-300 bg-zinc-50 text-zinc-700"
                      }`}>{b.priority}</Badge>
                      {b.primary_keyword && (
                        <Badge variant="outline" className="rounded-sm font-mono text-[10px] border-cobalt bg-blue-50 text-cobalt">
                          {b.primary_keyword}
                        </Badge>
                      )}
                      <Badge variant="outline" className="rounded-sm font-mono text-[10px] border-zinc-200 text-zinc-600">
                        ~{b.target_word_count} words
                      </Badge>
                    </div>
                    {b.angle_vs_competitor && (
                      <div className="mt-2 text-xs text-zinc-700 italic">Angle: {b.angle_vs_competitor}</div>
                    )}
                    {b.h2_outline?.length > 0 && (
                      <details className="mt-2">
                        <summary className="text-[11px] text-cobalt cursor-pointer font-mono">H2 outline ({b.h2_outline.length})</summary>
                        <ul className="mt-1.5 text-xs text-zinc-700 list-disc ml-5 space-y-0.5">
                          {b.h2_outline.map((h, i) => <li key={i}>{h}</li>)}
                        </ul>
                      </details>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {s.technical_moves?.length > 0 && (
        <div className="bg-zinc-50 border border-zinc-200 rounded-sm p-4">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-2">
            Non-content quick wins
          </div>
          <ul className="space-y-1.5">
            {s.technical_moves.map((t, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-800">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="text-[10px] font-mono text-zinc-400 pt-3 border-t border-zinc-100">
        {s.competitor_domain} · {s.pages_crawled} pages crawled · generated {new Date(s.generated_at).toLocaleString()}
      </div>
    </div>
  );
}

// ---------- Audit history ----------
function AuditHistoryCard({ client }) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auditHistory(client.client_id, { limit: 15 }).then((r) => setHistory(r.audits || [])).catch(() => {}).finally(() => setLoading(false));
  }, [client.client_id]);

  if (loading) return null;
  if (!history.length) return null;

  return (
    <Card className="rounded-sm border-zinc-200 bg-white p-6 shadow-none" data-testid="audit-history-card">
      <div className="flex items-start gap-3 mb-4">
        <div className="h-9 w-9 grid place-items-center bg-zinc-100 text-zinc-700 shrink-0">
          <History className="h-4 w-4" />
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Audit history</div>
          <div className="font-heading font-bold text-lg text-zinc-950 mt-1">Last {history.length} audits</div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-zinc-200">
              <TableHead className="text-[10px] uppercase tracking-[0.16em] font-semibold w-[80px]">Kind</TableHead>
              <TableHead className="text-[10px] uppercase tracking-[0.16em] font-semibold w-[60px]">Score</TableHead>
              <TableHead className="text-[10px] uppercase tracking-[0.16em] font-semibold">Target</TableHead>
              <TableHead className="text-[10px] uppercase tracking-[0.16em] font-semibold">By</TableHead>
              <TableHead className="text-[10px] uppercase tracking-[0.16em] font-semibold">When</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {history.map((h, i) => (
              <TableRow key={i} className="border-zinc-100 hover:bg-zinc-50">
                <TableCell>
                  <Badge variant="outline" className="rounded-sm font-mono text-[10px] border-zinc-200">
                    {h.kind}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className={`inline-block px-1.5 py-0.5 font-mono text-xs font-bold rounded-sm ${bandColor(h.band).accent} text-white`}>
                    {h.score ?? h.site_score}
                  </span>
                </TableCell>
                <TableCell className="font-mono text-xs text-zinc-700 truncate max-w-[340px]">
                  {h.kind === "site" ? `${h.pages_audited} pages` : h.url}
                </TableCell>
                <TableCell className="text-xs text-zinc-600">{h.triggered_by || "—"}</TableCell>
                <TableCell className="text-[11px] text-zinc-500 font-mono">
                  {h.checked_at ? new Date(h.checked_at).toLocaleString() : "—"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
