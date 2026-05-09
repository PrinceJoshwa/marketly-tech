import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { gscData, getMe } from "@/lib/api";
import GoogleConnectCard from "@/components/GoogleConnectCard";
import { Search, RefreshCw, Info, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const RANGES = [
  { v: 7, label: "7d" },
  { v: 28, label: "28d" },
  { v: 90, label: "90d" },
];

export default function GSCTab({ client }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState(28);
  const [q, setQ] = useState("");
  const [sort, setSort] = useState({ key: "impressions", dir: "desc" });
  const [user, setUser] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const load = async (d = days) => {
    setLoading(true);
    try {
      const r = await gscData(client.client_id, d);
      setData(r);
    } catch (e) {
      toast.error("Failed to load GSC data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMe().then(setUser).catch(() => {});
    load(days);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client.client_id, days, refreshKey]);

  const handleConnect = () => setRefreshKey((k) => k + 1);

  const filteredRows = useMemo(() => {
    if (!data) return [];
    const ql = q.toLowerCase();
    let rows = data.rows.filter(
      (r) => !ql || r.keyword.toLowerCase().includes(ql) || r.page.toLowerCase().includes(ql)
    );
    rows = [...rows].sort((a, b) => {
      const av = a[sort.key];
      const bv = b[sort.key];
      const cmp = typeof av === "string" ? av.localeCompare(bv) : av - bv;
      return sort.dir === "asc" ? cmp : -cmp;
    });
    return rows;
  }, [data, q, sort]);

  const setSortKey = (k) => {
    setSort((p) => (p.key === k ? { key: k, dir: p.dir === "asc" ? "desc" : "asc" } : { key: k, dir: "desc" }));
  };

  return (
    <div className="space-y-6" data-testid="gsc-tab">
      <GoogleConnectCard client={client} isAdmin={user?.role === "admin"} onChange={handleConnect} />

      {data && !data.is_mocked && (
        <Card className="rounded-sm border-emerald-200 bg-emerald-50 p-4 shadow-none flex items-start gap-3">
          <CheckCircle2 className="h-4 w-4 text-emerald-700 mt-0.5 shrink-0" />
          <div className="text-sm text-emerald-900">
            <div className="font-semibold">Live data from Google Search Console</div>
            <div className="mt-0.5 text-emerald-800 font-mono text-xs">{data.property} · last {data.days}d</div>
          </div>
        </Card>
      )}

      {data?.is_mocked && (
        <Card className="rounded-sm border-amber-200 bg-amber-50 p-4 shadow-none flex items-start gap-3">
          <Info className="h-4 w-4 text-amber-700 mt-0.5 shrink-0" />
          <div className="text-sm text-amber-900">
            <div className="font-semibold">Showing sample data</div>
            <div className="mt-1 text-amber-800 leading-relaxed">
              Connect Google above and pick a GSC property to see live keywords / rankings / impressions / CTR.
            </div>
          </div>
        </Card>
      )}

      {/* TOTALS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat label="Impressions" value={fmt(data?.totals?.impressions)} loading={loading} />
        <Stat label="Clicks" value={fmt(data?.totals?.clicks)} loading={loading} />
        <Stat label="Avg CTR" value={data ? `${data.totals.ctr}%` : "—"} loading={loading} />
        <Stat label="Avg Position" value={data ? data.totals.avg_position : "—"} loading={loading} />
      </div>

      {/* CONTROLS */}
      <Card className="rounded-sm border-zinc-200 bg-white p-4 shadow-none flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            data-testid="gsc-search"
            placeholder="Filter by keyword or page…"
            className="pl-9 rounded-sm border-zinc-200 focus-visible:ring-zinc-950"
          />
        </div>
        <Select value={String(days)} onValueChange={(v) => setDays(Number(v))}>
          <SelectTrigger className="w-32 rounded-sm border-zinc-200" data-testid="gsc-range">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {RANGES.map((r) => (
              <SelectItem key={r.v} value={String(r.v)}>
                Last {r.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          onClick={() => load()}
          disabled={loading}
          data-testid="gsc-refresh"
          className="rounded-sm border-zinc-200"
        >
          <RefreshCw className={`h-4 w-4 mr-1.5 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </Card>

      {/* TABLE */}
      <Card className="rounded-sm border-zinc-200 bg-white shadow-none overflow-hidden">
        {loading && !data ? (
          <Skeleton className="h-72 rounded-sm" />
        ) : (
          <div className="overflow-x-auto scrollbar-thin">
            <Table>
              <TableHeader>
                <TableRow className="bg-zinc-50 border-zinc-200 hover:bg-zinc-50">
                  <SortHead label="Keyword" k="keyword" sort={sort} onSort={setSortKey} />
                  <SortHead label="Page" k="page" sort={sort} onSort={setSortKey} />
                  <SortHead label="Position" k="position" sort={sort} onSort={setSortKey} className="text-right" />
                  <SortHead label="Impressions" k="impressions" sort={sort} onSort={setSortKey} className="text-right" />
                  <SortHead label="Clicks" k="clicks" sort={sort} onSort={setSortKey} className="text-right" />
                  <SortHead label="CTR" k="ctr" sort={sort} onSort={setSortKey} className="text-right" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRows.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="py-8 text-center text-sm text-zinc-500">
                      No rows match.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredRows.map((r, i) => (
                    <TableRow key={`${r.keyword}-${i}`} className="border-zinc-100 hover:bg-zinc-50 fade-up" style={{ animationDelay: `${Math.min(i, 12) * 20}ms` }} data-testid={`gsc-row-${i}`}>
                      <TableCell className="py-3 font-medium text-zinc-900">{r.keyword}</TableCell>
                      <TableCell className="py-3 text-xs text-zinc-500 font-mono truncate max-w-[260px]">
                        {r.page}
                      </TableCell>
                      <TableCell className="py-3 text-right">
                        <Badge
                          variant="outline"
                          className={`rounded-sm font-mono text-[11px] border ${posTone(r.position)}`}
                        >
                          {r.position.toFixed(1)}
                        </Badge>
                      </TableCell>
                      <TableCell className="py-3 text-right font-mono text-sm text-zinc-900">
                        {fmt(r.impressions)}
                      </TableCell>
                      <TableCell className="py-3 text-right font-mono text-sm text-zinc-900">
                        {fmt(r.clicks)}
                      </TableCell>
                      <TableCell className="py-3 text-right font-mono text-sm text-zinc-900">
                        {r.ctr.toFixed(2)}%
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        )}
      </Card>
    </div>
  );
}

function Stat({ label, value, loading }) {
  return (
    <Card className="rounded-sm border-zinc-200 bg-white p-5 shadow-none">
      <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">{label}</div>
      <div className="mt-3 font-heading font-black text-3xl tracking-tighter text-zinc-950">
        {loading ? "—" : value}
      </div>
    </Card>
  );
}

function SortHead({ label, k, sort, onSort, className = "" }) {
  const active = sort.key === k;
  return (
    <TableHead
      onClick={() => onSort(k)}
      data-testid={`gsc-sort-${k}`}
      className={`cursor-pointer text-[10px] uppercase tracking-widest text-zinc-500 select-none ${className} ${
        active ? "text-zinc-950" : ""
      }`}
    >
      {label} {active ? (sort.dir === "asc" ? "↑" : "↓") : ""}
    </TableHead>
  );
}

function fmt(n) {
  if (n == null) return "—";
  return Number(n).toLocaleString();
}

function posTone(pos) {
  if (pos <= 3) return "bg-emerald-50 text-emerald-800 border-emerald-200";
  if (pos <= 10) return "bg-blue-50 text-blue-800 border-blue-200";
  if (pos <= 20) return "bg-amber-50 text-amber-800 border-amber-200";
  return "bg-zinc-50 text-zinc-700 border-zinc-200";
}
