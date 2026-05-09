import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Sparkles, RefreshCw, Plus, Trash2, RotateCw, Link2, AlertTriangle,
  CheckCircle2, MinusCircle, Activity, Target, FileSpreadsheet, ExternalLink,
  TrendingUp, TrendingDown,
} from "lucide-react";
import { toast } from "sonner";
import {
  listMonthlySheets, upsertMonthlySheet, deleteMonthlySheet, syncMonthlySheet,
  listBacklinksLog, analyseBacklinks,
  getStrategy, toggleStrategyAction,
  getMe,
} from "@/lib/api";

// ---------- helpers ----------
function fmt(n) {
  if (n === null || n === undefined || Number.isNaN(n)) return "—";
  return Number(n).toLocaleString();
}
function deltaBadge(curr, prev) {
  if (curr == null || prev == null) return null;
  const d = curr - prev;
  if (d === 0) return <span className="font-mono text-[11px] text-zinc-500">·</span>;
  const up = d > 0;
  const Icon = up ? TrendingUp : TrendingDown;
  const color = up ? "text-emerald-700" : "text-red-700";
  return (
    <span className={`inline-flex items-center gap-0.5 font-mono text-[11px] ${color}`}>
      <Icon className="h-3 w-3" /> {Math.abs(d).toLocaleString()}
    </span>
  );
}
function lastNMonths(n = 6) {
  const out = [];
  const d = new Date();
  for (let i = 0; i < n; i++) {
    const y = d.getFullYear();
    const m = (d.getMonth() + 1).toString().padStart(2, "0");
    out.push(`${y}-${m}`);
    d.setMonth(d.getMonth() - 1);
  }
  return out;
}

// ---------- Tab ----------
export default function StrategyTab({ client }) {
  const [user, setUser] = useState(null);
  const [month, setMonth] = useState(lastNMonths(1)[0]);

  useEffect(() => {
    getMe().then(setUser).catch(() => null);
  }, []);
  const isAdmin = user?.role === "admin";

  if (user && !isAdmin) {
    return (
      <Card className="rounded-sm border-zinc-200 bg-white p-12 text-center text-zinc-600 shadow-none">
        Strategy tab is admin-only.
      </Card>
    );
  }

  return (
    <div className="space-y-6" data-testid="strategy-tab">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="font-heading text-2xl font-bold text-zinc-950">Strategy</h2>
          <p className="text-sm text-zinc-500 mt-0.5">Monthly sheets · Backlink analyser · AI strategy doc</p>
        </div>
        <div className="flex items-center gap-2">
          <Label className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-semibold">Month</Label>
          <Select value={month} onValueChange={setMonth}>
            <SelectTrigger data-testid="strategy-month-select" className="w-[140px] rounded-sm border-zinc-200 font-mono text-xs h-9">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {lastNMonths(12).map((m) => (
                <SelectItem key={m} value={m} className="font-mono text-xs">{m}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <MonthlySheetsCard client={client} month={month} setMonth={setMonth} />
      <BacklinkAnalyserCard client={client} month={month} />
      <StrategyDocCard client={client} month={month} />
    </div>
  );
}

// ---------- Monthly Sheets ----------
function MonthlySheetsCard({ client, month, setMonth }) {
  const [months, setMonths] = useState([]);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState("");
  const [backlink, setBacklink] = useState("");
  const [busy, setBusy] = useState(false);

  const reload = async () => {
    setLoading(true);
    try {
      const r = await listMonthlySheets(client.client_id);
      setMonths(r.months || []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client.client_id]);

  useEffect(() => {
    const cur = months.find((m) => m.month === month);
    setContent(cur?.content_sheet_url || "");
    setBacklink(cur?.backlink_sheet_url || "");
  }, [month, months]);

  const handleSave = async () => {
    setBusy(true);
    try {
      await upsertMonthlySheet(client.client_id, month, {
        content_sheet_url: content || null,
        backlink_sheet_url: backlink || null,
      });
      toast.success(`Sheets saved for ${month}`);
      reload();
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Save failed");
    } finally {
      setBusy(false);
    }
  };

  const handleSync = async () => {
    setBusy(true);
    try {
      const r = await syncMonthlySheet(client.client_id, month);
      const s = r.summary || {};
      toast.success(
        `Synced ${month}: ${s.blogs_imported || 0} blogs, ${s.backlinks_imported || 0} backlinks` +
          (s.errors?.length ? ` (${s.errors.length} errors)` : ""),
        { duration: 5500 }
      );
      reload();
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Sync failed");
    } finally {
      setBusy(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm(`Remove sheet config for ${month}? Imported data stays.`)) return;
    try {
      await deleteMonthlySheet(client.client_id, month);
      toast.success("Removed");
      reload();
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Delete failed");
    }
  };

  if (loading) return <Skeleton className="h-48 rounded-sm" />;

  const cur = months.find((m) => m.month === month);

  return (
    <Card className="rounded-sm border-zinc-200 bg-white p-6 shadow-none" data-testid="monthly-sheets-card">
      <div className="flex items-start gap-3 mb-5">
        <div className="h-9 w-9 grid place-items-center bg-zinc-950 text-white shrink-0">
          <FileSpreadsheet className="h-4 w-4" />
        </div>
        <div className="flex-1">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Monthly Sheets</div>
          <div className="font-heading font-bold text-lg text-zinc-950 mt-1">
            {month} setup
          </div>
          {cur?.last_synced_at && (
            <div className="text-[11px] text-zinc-500 font-mono mt-1">
              last synced {new Date(cur.last_synced_at).toLocaleString()}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-semibold">
            Content sheet URL
          </Label>
          <Input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="https://docs.google.com/spreadsheets/d/..."
            data-testid="content-sheet-input"
            className="mt-2 rounded-sm border-zinc-200 focus-visible:ring-zinc-950 font-mono text-xs"
          />
          <div className="mt-1 text-[10px] text-zinc-400 font-mono">Columns: Title, URL, Status, Date</div>
        </div>
        <div>
          <Label className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-semibold">
            Backlink sheet URL
          </Label>
          <Input
            value={backlink}
            onChange={(e) => setBacklink(e.target.value)}
            placeholder="https://docs.google.com/spreadsheets/d/..."
            data-testid="backlink-sheet-input"
            className="mt-2 rounded-sm border-zinc-200 focus-visible:ring-zinc-950 font-mono text-xs"
          />
          <div className="mt-1 text-[10px] text-zinc-400 font-mono">Columns: Source URL, Anchor, Target URL</div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2 items-center">
        <Button
          onClick={handleSave}
          disabled={busy}
          data-testid="monthly-sheets-save"
          className="rounded-sm bg-zinc-950 hover:bg-cobalt h-9"
        >
          Save URLs
        </Button>
        <Button
          variant="outline"
          onClick={handleSync}
          disabled={busy || (!content && !backlink)}
          data-testid="monthly-sheets-sync"
          className="rounded-sm border-zinc-200 h-9"
        >
          <RotateCw className={`h-3.5 w-3.5 mr-1.5 ${busy ? "animate-spin" : ""}`} /> Sync now
        </Button>
        {cur && (
          <Button
            variant="ghost"
            onClick={handleDelete}
            data-testid="monthly-sheets-delete"
            className="rounded-sm text-red-600 hover:text-red-700 hover:bg-red-50 h-9 ml-auto"
          >
            <Trash2 className="h-3.5 w-3.5 mr-1.5" /> Remove month
          </Button>
        )}
      </div>

      {cur?.last_sync_summary && (
        <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-wrap gap-2">
          <Badge variant="outline" className="rounded-sm font-mono text-[11px] border-emerald-300 bg-emerald-50 text-emerald-800">
            Blogs imported · {cur.last_sync_summary.blogs_imported || 0}
          </Badge>
          <Badge variant="outline" className="rounded-sm font-mono text-[11px] border-emerald-300 bg-emerald-50 text-emerald-800">
            Backlinks imported · {cur.last_sync_summary.backlinks_imported || 0}
          </Badge>
          {cur.last_sync_summary.errors?.length > 0 && (
            <Badge variant="outline" className="rounded-sm font-mono text-[11px] border-amber-300 bg-amber-50 text-amber-800">
              {cur.last_sync_summary.errors.length} errors
            </Badge>
          )}
        </div>
      )}

      {months.length > 0 && (
        <div className="mt-5 pt-4 border-t border-zinc-100">
          <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-semibold mb-2">
            Configured months
          </div>
          <div className="flex flex-wrap gap-1.5">
            {months.map((m) => (
              <button
                key={m.month}
                onClick={() => setMonth(m.month)}
                className={`px-2 py-1 rounded-sm border font-mono text-[11px] transition ${
                  m.month === month
                    ? "border-cobalt bg-blue-50 text-cobalt"
                    : "border-zinc-200 hover:border-zinc-400"
                }`}
              >
                {m.month}
              </button>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}

// ---------- Backlink Analyser ----------
function BacklinkAnalyserCard({ client, month }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [analysing, setAnalysing] = useState(false);
  const [filter, setFilter] = useState("all");

  const reload = async () => {
    setLoading(true);
    try {
      const r = await listBacklinksLog(client.client_id, { month, limit: 200 });
      setData(r);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client.client_id, month]);

  const handleAnalyse = async () => {
    setAnalysing(true);
    try {
      const r = await analyseBacklinks(client.client_id, month);
      toast.success(`Analysed ${r.analysed} of ${r.total} backlinks`);
      reload();
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Analysis failed");
    } finally {
      setAnalysing(false);
    }
  };

  const stats = data?.stats || {};
  const rows = (data?.rows || []).filter((r) => filter === "all" || r.quality_band === filter);

  return (
    <Card className="rounded-sm border-zinc-200 bg-white shadow-none overflow-hidden" data-testid="backlink-analyser-card">
      <div className="p-6 border-b border-zinc-100">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="h-9 w-9 grid place-items-center bg-cobalt text-white shrink-0">
              <Link2 className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Backlink Analyser</div>
              <div className="font-heading font-bold text-lg text-zinc-950 mt-1">
                {stats.total || 0} backlinks · {month}
              </div>
              {stats.avg_score != null && (
                <div className="text-[11px] text-zinc-500 font-mono mt-1">
                  avg quality score · {stats.avg_score} / 100
                </div>
              )}
            </div>
          </div>
          <Button
            onClick={handleAnalyse}
            disabled={analysing || stats.total === 0}
            data-testid="run-analyser"
            className="rounded-sm bg-zinc-950 hover:bg-cobalt h-9"
          >
            <RefreshCw className={`h-3.5 w-3.5 mr-1.5 ${analysing ? "animate-spin" : ""}`} />
            {analysing ? "Crawling…" : "Analyse all"}
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="p-6"><Skeleton className="h-32 rounded-sm" /></div>
      ) : (
        <>
          {stats.total > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-px bg-zinc-100">
              <StatTile label="Good" value={stats.good} band="good" onClick={() => setFilter("good")} active={filter === "good"} />
              <StatTile label="Warn" value={stats.warn} band="warn" onClick={() => setFilter("warn")} active={filter === "warn"} />
              <StatTile label="Bad" value={stats.bad} band="bad" onClick={() => setFilter("bad")} active={filter === "bad"} />
              <StatTile label="Unanalysed" value={stats.unanalysed} band="ghost" onClick={() => setFilter("all")} active={filter === "all"} />
              <StatTile label="Dofollow" value={stats.dofollow} band="info" />
              <StatTile label="Nofollow" value={stats.nofollow} band="info" />
              <StatTile label="Broken" value={stats.broken} band="bad" />
            </div>
          ) : (
            <div className="px-6 py-10 text-center text-sm text-zinc-500">
              No backlinks for this month yet. Save the backlink sheet URL above and click <span className="font-mono">Sync now</span>.
            </div>
          )}

          {rows.length > 0 && (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-zinc-200">
                    <TableHead className="text-[10px] uppercase tracking-[0.16em] font-semibold w-[40px]">Q</TableHead>
                    <TableHead className="text-[10px] uppercase tracking-[0.16em] font-semibold">Source</TableHead>
                    <TableHead className="text-[10px] uppercase tracking-[0.16em] font-semibold">Anchor</TableHead>
                    <TableHead className="text-[10px] uppercase tracking-[0.16em] font-semibold w-[80px] text-right">Score</TableHead>
                    <TableHead className="text-[10px] uppercase tracking-[0.16em] font-semibold w-[100px]">Type</TableHead>
                    <TableHead className="text-[10px] uppercase tracking-[0.16em] font-semibold w-[100px]">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows.map((r) => (
                    <TableRow key={r.backlink_id} className="border-zinc-100 hover:bg-zinc-50" data-testid={`backlink-row-${r.backlink_id}`}>
                      <TableCell><BandDot band={r.quality_band} /></TableCell>
                      <TableCell>
                        <a href={r.source_url} target="_blank" rel="noreferrer" className="text-cobalt hover:underline inline-flex items-center gap-1">
                          <span className="font-mono text-xs truncate max-w-[320px] inline-block align-bottom">
                            {r.source_domain || r.source_url}
                          </span>
                          <ExternalLink className="h-3 w-3 shrink-0" />
                        </a>
                      </TableCell>
                      <TableCell className="font-mono text-xs text-zinc-700 max-w-[200px] truncate">
                        {r.anchor_text || <span className="text-zinc-300">—</span>}
                      </TableCell>
                      <TableCell className="text-right font-mono text-xs font-semibold">
                        {r.quality_score != null ? r.quality_score : <span className="text-zinc-300">—</span>}
                      </TableCell>
                      <TableCell className="font-mono text-[11px]">
                        {r.is_dofollow === true ? <Badge variant="outline" className="rounded-sm border-emerald-300 bg-emerald-50 text-emerald-800">dofollow</Badge>
                          : r.is_dofollow === false ? <Badge variant="outline" className="rounded-sm border-zinc-300 bg-zinc-50 text-zinc-700">nofollow</Badge>
                          : <span className="text-zinc-300">—</span>}
                      </TableCell>
                      <TableCell className="font-mono text-[11px]">
                        {r.is_alive === true ? <span className="text-emerald-700">{r.http_status}</span>
                          : r.is_alive === false ? <span className="text-red-700">{r.http_status || "fail"}</span>
                          : <span className="text-zinc-300">—</span>}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </>
      )}
    </Card>
  );
}

function StatTile({ label, value, band, onClick, active }) {
  const colors = {
    good:  { bg: active ? "bg-emerald-100" : "bg-white", border: "border-emerald-200", text: "text-emerald-800" },
    warn:  { bg: active ? "bg-amber-100" : "bg-white",   border: "border-amber-200",   text: "text-amber-800" },
    bad:   { bg: active ? "bg-red-100" : "bg-white",     border: "border-red-200",     text: "text-red-800" },
    info:  { bg: "bg-white", border: "border-zinc-200", text: "text-zinc-800" },
    ghost: { bg: active ? "bg-zinc-100" : "bg-white",    border: "border-zinc-200",    text: "text-zinc-500" },
  }[band] || { bg: "bg-white", border: "border-zinc-200", text: "text-zinc-700" };
  const Comp = onClick ? "button" : "div";
  return (
    <Comp
      onClick={onClick}
      className={`${colors.bg} p-4 text-left border ${colors.border} ${onClick ? "hover:bg-zinc-50 cursor-pointer" : ""} transition`}
    >
      <div className={`font-mono text-2xl font-bold ${colors.text}`}>{fmt(value)}</div>
      <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-500 mt-1 font-semibold">{label}</div>
    </Comp>
  );
}

function BandDot({ band }) {
  if (band === "good") return <CheckCircle2 className="h-4 w-4 text-emerald-600" />;
  if (band === "warn") return <AlertTriangle className="h-4 w-4 text-amber-600" />;
  if (band === "bad")  return <MinusCircle className="h-4 w-4 text-red-600" />;
  return <span className="inline-block h-2 w-2 rounded-full bg-zinc-300" />;
}

// ---------- AI Strategy Doc ----------
function StrategyDocCard({ client, month }) {
  const [strategy, setStrategy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);

  const load = async (regenerate = false) => {
    if (regenerate) setBusy(true); else setLoading(true);
    try {
      const s = await getStrategy(client.client_id, { month, regenerate });
      setStrategy(s);
      if (regenerate) toast.success("Strategy regenerated");
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Failed to load strategy");
    } finally {
      setLoading(false);
      setBusy(false);
    }
  };

  useEffect(() => {
    load(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client.client_id, month]);

  const toggleAction = async (actionId) => {
    try {
      const r = await toggleStrategyAction(client.client_id, month, actionId);
      setStrategy((p) => ({ ...p, actions: r.actions }));
    } catch (e) {
      toast.error("Toggle failed");
    }
  };

  if (loading) return <Skeleton className="h-72 rounded-sm" />;

  const cur = strategy?.comparison?.current || {};
  const prv = strategy?.comparison?.previous || {};
  const completed = (strategy?.actions || []).filter((a) => a.done).length;
  const total = strategy?.actions?.length || 0;

  return (
    <Card className="rounded-sm border-zinc-200 bg-white shadow-none overflow-hidden" data-testid="strategy-doc-card">
      <div className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-cobalt p-6 text-white">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-300">
              <Sparkles className="h-3.5 w-3.5" /> Next-Month Strategy · AI-authored
              <span className="font-mono normal-case text-zinc-400">· {month}</span>
            </div>
            <h2 className="mt-3 font-heading text-2xl font-bold leading-tight tracking-tight">
              {strategy?.tagline || "Generate next month's strategy"}
            </h2>
            {strategy?.generated_at && (
              <div className="mt-2 text-[11px] text-zinc-400 font-mono">
                regenerated {new Date(strategy.generated_at).toLocaleString()} · {completed} of {total} actions done
              </div>
            )}
          </div>
          <Button
            onClick={() => load(true)}
            disabled={busy}
            data-testid="strategy-regenerate"
            className="rounded-sm bg-white/10 backdrop-blur hover:bg-white/20 border border-white/20 text-white h-9 shrink-0"
          >
            <RefreshCw className={`h-3.5 w-3.5 mr-1.5 ${busy ? "animate-spin" : ""}`} />
            {busy ? "Generating…" : strategy ? "Regenerate" : "Generate"}
          </Button>
        </div>
      </div>

      {/* Comparison strip */}
      <div className="border-b border-zinc-100">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-100">
          <CompareTile label="Blogs published" cur={cur.blogs_published} prev={prv.blogs_published} />
          <CompareTile label="Backlinks logged" cur={cur.backlinks_logged} prev={prv.backlinks_logged} />
          <CompareTile label="Avg backlink quality" cur={cur.avg_quality} prev={prv.avg_quality} suffix="/100" />
          <CompareTile label="Good links" cur={cur.backlinks_good} prev={prv.backlinks_good} />
        </div>
      </div>

      {strategy && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
            <Section label="Where we stand" body={strategy.where_we_stand} />
            <Section label="Month-over-Month" body={strategy.mom} />
          </div>

          {strategy.themes?.length > 0 && (
            <div className="px-6 py-5 border-t border-zinc-100 bg-zinc-50">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-3">
                Strategy themes for next month
              </div>
              <div className="space-y-2">
                {strategy.themes.map((t, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-zinc-800">
                    <Target className="h-4 w-4 text-cobalt mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {strategy.actions?.length > 0 && (
            <div className="px-6 py-5 border-t border-zinc-100">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Action items
                </div>
                <div className="text-[11px] text-zinc-500 font-mono">
                  {completed} / {total} done
                </div>
              </div>
              <div className="space-y-1">
                {strategy.actions.map((a) => (
                  <div
                    key={a.id}
                    className={`flex items-start gap-3 p-3 rounded-sm border transition ${
                      a.done ? "bg-emerald-50/40 border-emerald-100" : "border-zinc-100 hover:border-zinc-300 bg-white"
                    }`}
                    data-testid={`action-${a.id}`}
                  >
                    <Checkbox
                      checked={!!a.done}
                      onCheckedChange={() => toggleAction(a.id)}
                      className="mt-0.5"
                      data-testid={`action-toggle-${a.id}`}
                    />
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm ${a.done ? "line-through text-zinc-500" : "text-zinc-900"}`}>
                        {a.title}
                      </div>
                      <div className="mt-1 flex flex-wrap gap-1.5">
                        <Badge variant="outline" className={`rounded-sm font-mono text-[10px] ${prioColor(a.priority)}`}>
                          {a.priority}
                        </Badge>
                        <Badge variant="outline" className="rounded-sm font-mono text-[10px] border-zinc-200 bg-white text-zinc-600">
                          {a.owner}
                        </Badge>
                        {a.done && a.done_by && (
                          <span className="text-[10px] text-zinc-500 font-mono ml-1">
                            done by {a.done_by} · {new Date(a.done_at).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
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

function CompareTile({ label, cur, prev, suffix = "" }) {
  return (
    <div className="bg-white p-4">
      <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-500 mb-1 font-semibold">{label}</div>
      <div className="flex items-baseline gap-2">
        <div className="font-mono text-2xl font-bold text-zinc-950">
          {fmt(cur)}{suffix && cur != null ? <span className="text-sm text-zinc-400 ml-0.5">{suffix}</span> : null}
        </div>
        {deltaBadge(cur, prev)}
      </div>
      <div className="mt-1 text-[10px] text-zinc-400 font-mono">prev · {fmt(prev)}</div>
    </div>
  );
}

function prioColor(p) {
  if (p === "P0") return "border-red-300 bg-red-50 text-red-800";
  if (p === "P1") return "border-amber-300 bg-amber-50 text-amber-800";
  return "border-zinc-300 bg-zinc-50 text-zinc-700";
}
