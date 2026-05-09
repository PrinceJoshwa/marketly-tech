import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { runSpyglass, getSpyglass, aiEditor, listAiReports } from "@/lib/api";
import {
  Eye,
  Sparkles,
  ExternalLink,
  PlayCircle,
  RefreshCw,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { toast } from "sonner";

export default function IntelligenceTab({ client }) {
  return (
    <div className="space-y-6" data-testid="intelligence-tab">
      <SpyGlassPanel client={client} />
      <AIEditorPanel client={client} />
    </div>
  );
}

function SpyGlassPanel({ client }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [running, setRunning] = useState(false);
  const [manualUrls, setManualUrls] = useState("");

  const reload = async () => {
    const r = await getSpyglass(client.client_id);
    setData(r.has_report ? r.report : null);
  };

  useEffect(() => {
    (async () => {
      try { await reload(); } finally { setLoading(false); }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client.client_id]);

  const handleRun = async () => {
    setRunning(true);
    try {
      const urls = manualUrls.split(/[\n,]/).map((s) => s.trim()).filter(Boolean);
      const payload = urls.length ? { competitor_urls: urls } : {};
      const r = await runSpyglass(client.client_id, payload);
      setData(r);
      toast.success(`Crawled ${r.competitors.length} competitor${r.competitors.length === 1 ? "" : "s"} in ${r.duration_seconds}s`);
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Spy Glass run failed");
    } finally {
      setRunning(false);
    }
  };

  return (
    <Card className="rounded-sm border-zinc-200 bg-white p-6 shadow-none" data-testid="spyglass-panel">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          <Eye className="h-3.5 w-3.5" /> Spy Glass · Competitor crawler
          {data && <span className="ml-2 text-[10px] text-zinc-400 font-mono">{data.report_id}</span>}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 items-end">
        <div>
          <Label className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-semibold">
            Competitor URLs (override) — comma or newline separated
          </Label>
          <Textarea
            data-testid="spyglass-urls"
            value={manualUrls}
            onChange={(e) => setManualUrls(e.target.value)}
            rows={2}
            placeholder={`Leave blank to use competitors_sheet_url\nhttps://moz.com\nhttps://ahrefs.com`}
            className="mt-2 rounded-sm border-zinc-200 focus-visible:ring-zinc-950 font-mono text-xs resize-none"
          />
          {!manualUrls && client.competitors_sheet_url && (
            <div className="mt-1 text-[10px] text-zinc-400 font-mono truncate">
              source: {client.competitors_sheet_url}
            </div>
          )}
        </div>
        <Button
          onClick={handleRun}
          disabled={running}
          data-testid="run-spyglass-button"
          className="rounded-sm bg-zinc-950 hover:bg-cobalt text-white h-10"
        >
          <PlayCircle className={`h-4 w-4 mr-2 ${running ? "animate-pulse" : ""}`} />
          {running ? "Crawling…" : "Run Spy Glass"}
        </Button>
      </div>

      {loading ? (
        <Skeleton className="mt-6 h-40 rounded-sm" />
      ) : !data ? (
        <div className="mt-6 border border-dashed border-zinc-300 bg-zinc-50 p-6 rounded-sm text-center">
          <div className="text-xs uppercase tracking-widest text-zinc-400 font-mono">No competitor report yet</div>
          <div className="mt-2 font-heading font-bold text-lg text-zinc-950">Run Spy Glass to see how competitors win</div>
          <p className="mt-1 text-sm text-zinc-500 max-w-md mx-auto">
            Crawls up to 15 pages per competitor (sitemap + homepage links), scores each page on content depth,
            structure and signals, and surfaces their best-performing content.
          </p>
        </div>
      ) : (
        <div className="mt-6">
          <div className="flex items-center gap-3 text-[11px] text-zinc-500 font-mono">
            <span>finished {new Date(data.finished_at).toLocaleString()}</span>
            <span>·</span>
            <span>{data.duration_seconds}s</span>
            <span>·</span>
            <span>{data.competitors.length} competitor{data.competitors.length === 1 ? "" : "s"}</span>
          </div>
          <Accordion type="single" collapsible className="mt-3">
            {data.competitors.map((c, i) => (
              <AccordionItem key={i} value={`c-${i}`} className="border-zinc-200" data-testid={`spy-competitor-${c.domain}`}>
                <AccordionTrigger className="hover:no-underline py-3">
                  <div className="flex-1 flex items-center justify-between mr-3">
                    <div className="flex items-center gap-3">
                      <span className="font-heading font-bold text-zinc-950">{c.domain || c.competitor}</span>
                      <Badge variant="outline" className="rounded-sm font-mono text-[10px] border-zinc-200">
                        {c.pages_crawled} pages
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] text-zinc-500 font-mono">avg {c.avg_word_count}w</span>
                      <span
                        role="button"
                        tabIndex={0}
                        onClick={(e) => {
                          e.stopPropagation();
                          const target = c.competitor || (c.domain ? `https://${c.domain}` : "");
                          window.dispatchEvent(new CustomEvent("marketly-goto-audit", { detail: { competitor_url: target } }));
                        }}
                        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.stopPropagation(); e.currentTarget.click(); } }}
                        data-testid={`outrank-${c.domain}`}
                        className="text-[11px] font-mono text-cobalt border border-cobalt/30 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-sm cursor-pointer"
                      >
                        Outrank →
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {c.error ? (
                    <div className="text-sm text-red-600">{c.error}</div>
                  ) : (
                    <div className="border border-zinc-200 rounded-sm overflow-hidden">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-zinc-50 border-zinc-200 hover:bg-zinc-50">
                            <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500">Page</TableHead>
                            <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500 text-right">Words</TableHead>
                            <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500 text-right">H2 / H3</TableHead>
                            <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500 text-right">Score</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {c.top_pages.map((p, j) => (
                            <TableRow key={j} className="border-zinc-100 hover:bg-zinc-50 fade-up" style={{ animationDelay: `${j * 25}ms` }}>
                              <TableCell className="py-2.5">
                                <div className="font-medium text-sm text-zinc-900 truncate max-w-[400px]">
                                  {p.title || "(no title)"}
                                </div>
                                <a href={p.url} target="_blank" rel="noreferrer" className="mt-0.5 flex items-center gap-1 text-[11px] text-zinc-500 hover:text-cobalt truncate max-w-[400px]">
                                  <ExternalLink className="h-3 w-3 shrink-0" />
                                  <span className="truncate">{p.url}</span>
                                </a>
                              </TableCell>
                              <TableCell className="py-2.5 text-right font-mono text-sm text-zinc-700">{p.word_count.toLocaleString()}</TableCell>
                              <TableCell className="py-2.5 text-right font-mono text-xs text-zinc-700">{p.h2_count} / {p.h3_count}</TableCell>
                              <TableCell className="py-2.5 text-right">
                                <span
                                  className={`inline-flex items-center gap-1 rounded-sm border px-1.5 py-0.5 font-mono text-[11px] ${
                                    p.score >= 80
                                      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                                      : p.score >= 60
                                      ? "border-cobalt text-cobalt bg-blue-50"
                                      : "border-zinc-200 bg-zinc-50 text-zinc-700"
                                  }`}
                                >
                                  <TrendingUp className="h-3 w-3" /> {p.score}
                                </span>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
    </Card>
  );
}

function AIEditorPanel({ client }) {
  const [url, setUrl] = useState("");
  const [busy, setBusy] = useState(false);
  const [latest, setLatest] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const list = await listAiReports(client.client_id);
        setHistory(list);
        if (list.length) setLatest(list[0]);
      } finally {
        setLoading(false);
      }
    })();
  }, [client.client_id]);

  const handleAnalyze = async () => {
    if (!url.trim()) {
      toast.error("Paste a blog URL to analyze");
      return;
    }
    setBusy(true);
    try {
      const r = await aiEditor(client.client_id, { url: url.trim() });
      setLatest(r);
      setHistory((p) => [r, ...p]);
      toast.success(`AI Editor scored ${r.score}/100 — ${r.verdict}`);
    } catch (e) {
      toast.error(e?.response?.data?.detail || "AI Editor failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card className="rounded-sm border-zinc-200 bg-white p-6 shadow-none" data-testid="ai-editor-panel">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          <Sparkles className="h-3.5 w-3.5" /> AI Editor · Ranking probability score
          <span className="ml-2 text-[10px] text-zinc-400 font-mono">claude-sonnet-4-5</span>
        </div>
        {history.length > 0 && (
          <span className="text-[11px] text-zinc-400 font-mono">{history.length} analysed</span>
        )}
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 items-end">
        <div>
          <Label className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-semibold">
            Blog URL to analyse
          </Label>
          <Input
            data-testid="ai-editor-url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://your-client.com/blog/best-crm-2026"
            className="mt-2 rounded-sm border-zinc-200 focus-visible:ring-zinc-950"
          />
        </div>
        <Button
          onClick={handleAnalyze}
          disabled={busy}
          data-testid="ai-editor-run"
          className="rounded-sm bg-zinc-950 hover:bg-cobalt text-white h-10"
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${busy ? "animate-spin" : ""}`} />
          {busy ? "Analysing…" : "Analyse"}
        </Button>
      </div>

      <p className="mt-2 text-[11px] text-zinc-500">
        Compared against this client&apos;s top GSC keywords + Spy Glass competitor pages.
      </p>

      {loading ? (
        <Skeleton className="mt-6 h-40 rounded-sm" />
      ) : !latest ? (
        <div className="mt-6 border border-dashed border-zinc-300 bg-zinc-50 p-6 rounded-sm text-center">
          <div className="text-xs uppercase tracking-widest text-zinc-400 font-mono">No analyses yet</div>
          <div className="mt-2 font-heading font-bold text-lg text-zinc-950">
            Drop in a blog URL to score its ranking probability
          </div>
        </div>
      ) : (
        <ReportView report={latest} />
      )}

      {history.length > 1 && (
        <div className="mt-6 border-t border-zinc-200 pt-4">
          <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-semibold mb-2">
            Recent analyses
          </div>
          <div className="space-y-1">
            {history.slice(0, 6).map((h) => (
              <button
                key={h.report_id}
                onClick={() => setLatest(h)}
                className="w-full text-left flex items-center justify-between gap-3 px-3 py-2 border border-zinc-200 rounded-sm hover:border-zinc-400 hover:bg-zinc-50 transition-colors"
                data-testid={`ai-history-${h.report_id}`}
              >
                <div className="min-w-0">
                  <div className="text-sm font-medium text-zinc-900 truncate">
                    {h.blog_title || h.url}
                  </div>
                  <div className="text-[11px] text-zinc-500 font-mono truncate">{h.url}</div>
                </div>
                <ScoreChip score={h.score} />
              </button>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}

function ReportView({ report }) {
  return (
    <div className="mt-5 space-y-5" data-testid="ai-editor-report">
      <div className="flex items-start gap-4 p-4 border border-zinc-200 rounded-sm bg-zinc-50">
        <div className="shrink-0">
          <ScoreRing score={report.score} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Verdict</div>
          <div className="mt-1 font-heading font-bold text-lg text-zinc-950 leading-tight">{report.verdict}</div>
          <p className="mt-2 text-sm text-zinc-700 leading-relaxed">{report.summary}</p>
          <div className="mt-2 text-[11px] text-zinc-500 font-mono truncate">
            {report.url} · {report.blog_word_count.toLocaleString()} words
          </div>
        </div>
      </div>

      {report.recommendations?.length > 0 && (
        <div>
          <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold mb-2">
            Recommendations · {report.recommendations.length}
          </div>
          <ol className="space-y-1.5">
            {report.recommendations.map((r, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-800 leading-relaxed">
                <span className="mt-0.5 h-5 w-5 shrink-0 grid place-items-center bg-zinc-950 text-white text-[10px] font-mono">
                  {i + 1}
                </span>
                <span className="flex-1">{r}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {report.keyword_coverage?.length > 0 && (
          <div className="border border-zinc-200 rounded-sm overflow-hidden">
            <div className="px-3 py-2 border-b border-zinc-100 text-[10px] font-semibold uppercase tracking-widest text-zinc-500 bg-zinc-50">
              Keyword coverage
            </div>
            <Table>
              <TableHeader>
                <TableRow className="border-zinc-200 hover:bg-transparent">
                  <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500">Keyword</TableHead>
                  <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500 text-right">Mentions</TableHead>
                  <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500 text-right">Covered</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {report.keyword_coverage.map((k, i) => (
                  <TableRow key={i} className="border-zinc-100 hover:bg-zinc-50">
                    <TableCell className="py-2 text-sm text-zinc-900 truncate max-w-[200px]">{k.keyword}</TableCell>
                    <TableCell className="py-2 text-right font-mono text-sm text-zinc-700">{k.mentions ?? 0}</TableCell>
                    <TableCell className="py-2 text-right">
                      {k.covered ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 ml-auto" />
                      ) : (
                        <XCircle className="h-4 w-4 text-zinc-300 ml-auto" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {report.missing_keywords?.length > 0 && (
          <div className="border border-amber-200 bg-amber-50 rounded-sm p-4">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-amber-800">
              <AlertTriangle className="h-3.5 w-3.5" /> Missing keywords · {report.missing_keywords.length}
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {report.missing_keywords.map((k, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="rounded-sm font-mono text-[11px] bg-white border-amber-300 text-amber-900"
                >
                  {k}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>

      {report.competing_pages?.length > 0 && (
        <div>
          <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold mb-2">
            Competing pages
          </div>
          <div className="space-y-2">
            {report.competing_pages.map((c, i) => (
              <div key={i} className="border border-zinc-200 rounded-sm p-3">
                <a href={c.url} target="_blank" rel="noreferrer" className="text-sm font-medium text-zinc-900 hover:text-cobalt flex items-center gap-1">
                  <ExternalLink className="h-3 w-3" /> {c.title || c.url}
                </a>
                {c.why_it_outranks && (
                  <p className="mt-1 text-xs text-zinc-600 leading-relaxed">{c.why_it_outranks}</p>
                )}
                {c.url && (
                  <div className="mt-1 text-[10px] text-zinc-400 font-mono truncate">{c.url}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ScoreChip({ score }) {
  const tone =
    score >= 75 ? "border-emerald-200 bg-emerald-50 text-emerald-800"
    : score >= 50 ? "border-cobalt text-cobalt bg-blue-50"
    : "border-amber-200 bg-amber-50 text-amber-800";
  return (
    <span className={`shrink-0 rounded-sm border px-2 py-0.5 font-mono text-xs font-bold ${tone}`}>
      {score}/100
    </span>
  );
}

function ScoreRing({ score }) {
  const tone =
    score >= 75 ? "text-emerald-700 border-emerald-300 bg-emerald-50"
    : score >= 50 ? "text-cobalt border-cobalt bg-blue-50"
    : "text-amber-700 border-amber-300 bg-amber-50";
  return (
    <div className={`h-20 w-20 rounded-sm border-2 grid place-items-center ${tone}`}>
      <div className="text-center">
        <div className="font-heading font-black text-3xl tracking-tighter leading-none">{score}</div>
        <div className="mt-0.5 text-[8px] font-mono uppercase tracking-widest opacity-70">/ 100</div>
      </div>
    </div>
  );
}
