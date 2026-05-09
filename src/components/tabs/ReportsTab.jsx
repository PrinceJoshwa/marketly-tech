import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import InvoiceForm from "@/components/InvoiceForm";
import StorylineCard from "@/components/StorylineCard";
import {
  takeSnapshot,
  listSnapshots,
  rankGuard,
  correlation as fetchCorrelation,
  listInvoices,
  createInvoice,
  deleteInvoice,
  invoicePdfUrl,
  monthlyReportUrl,
  getMe,
} from "@/lib/api";
import {
  Camera,
  TrendingUp,
  TrendingDown,
  Sparkles,
  FileDown,
  Plus,
  Trash2,
  Receipt,
  Activity,
  ChevronRight,
} from "lucide-react";
import { toast } from "sonner";

export default function ReportsTab({ client }) {
  const [user, setUser] = useState(null);
  const [snapshots, setSnapshots] = useState([]);
  const [rg, setRg] = useState(null);
  const [corr, setCorr] = useState(null);
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [snapping, setSnapping] = useState(false);
  const [invOpen, setInvOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [confirmDel, setConfirmDel] = useState(null);

  const isAdmin = user?.role === "admin";

  const reload = async () => {
    const [u, s, r, c, inv] = await Promise.all([
      getMe().catch(() => null),
      listSnapshots(client.client_id).catch(() => []),
      rankGuard(client.client_id).catch(() => null),
      fetchCorrelation(client.client_id).catch(() => null),
      listInvoices(client.client_id).catch(() => []),
    ]);
    setUser(u);
    setSnapshots(s || []);
    setRg(r);
    setCorr(c);
    setInvoices(inv || []);
  };

  useEffect(() => {
    (async () => {
      try {
        await reload();
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client.client_id]);

  const handleSnapshot = async () => {
    setSnapping(true);
    try {
      await takeSnapshot(client.client_id);
      toast.success("Snapshot captured");
      await reload();
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Snapshot failed");
    } finally {
      setSnapping(false);
    }
  };

  const handleCreateInvoice = async (payload) => {
    setSubmitting(true);
    try {
      const inv = await createInvoice(client.client_id, payload);
      setInvoices((p) => [inv, ...p]);
      setInvOpen(false);
      toast.success(`Invoice ${inv.invoice_number} created · ₹${inv.total.toLocaleString()}`);
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Failed to create invoice");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteInvoice = async () => {
    if (!confirmDel) return;
    try {
      await deleteInvoice(client.client_id, confirmDel.invoice_id);
      setInvoices((p) => p.filter((i) => i.invoice_id !== confirmDel.invoice_id));
      toast.success("Invoice deleted");
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Delete failed");
    } finally {
      setConfirmDel(null);
    }
  };

  const monthsAvailable = useMemo(() => {
    const fromInvoices = new Set(invoices.map((i) => i.period_month));
    const now = new Date();
    const cur = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
    fromInvoices.add(cur);
    return [...fromInvoices].sort().reverse();
  }, [invoices]);

  return (
    <div className="space-y-6" data-testid="reports-tab">
      <StorylineCard client={client} isAdmin={isAdmin} />
      <CorrelationCard data={corr} loading={loading} />

      <RankGuardPanel
        rg={rg}
        snapshots={snapshots}
        snapping={snapping}
        loading={loading}
        onSnapshot={handleSnapshot}
      />

      <InvoicesPanel
        client={client}
        invoices={invoices}
        loading={loading}
        isAdmin={isAdmin}
        onNew={() => setInvOpen(true)}
        onDelete={(inv) => setConfirmDel(inv)}
        monthsAvailable={monthsAvailable}
      />

      <InvoiceForm
        open={invOpen}
        onOpenChange={setInvOpen}
        client={client}
        onSubmit={handleCreateInvoice}
        submitting={submitting}
      />

      <AlertDialog open={!!confirmDel} onOpenChange={(o) => !o && setConfirmDel(null)}>
        <AlertDialogContent className="rounded-sm">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-heading">Delete invoice {confirmDel?.invoice_number}?</AlertDialogTitle>
            <AlertDialogDescription>
              The PDF can be regenerated only if the invoice still exists. This cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-sm">Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteInvoice}
              data-testid="confirm-delete-invoice"
              className="rounded-sm bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

function CorrelationCard({ data, loading }) {
  if (loading) return <Skeleton className="h-32 rounded-sm" />;
  if (!data) return null;
  const tone = {
    positive_impact: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-900", chip: "border-emerald-300 text-emerald-800 bg-white" },
    rankings_up: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-900", chip: "border-cobalt text-cobalt bg-white" },
    negative_signal: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-900", chip: "border-amber-300 text-amber-800 bg-white" },
    neutral: { bg: "bg-zinc-50", border: "border-zinc-200", text: "text-zinc-900", chip: "border-zinc-300 text-zinc-700 bg-white" },
    insufficient_data: { bg: "bg-zinc-50", border: "border-zinc-200", text: "text-zinc-700", chip: "border-zinc-300 text-zinc-600 bg-white" },
  }[data.verdict] || { bg: "bg-zinc-50", border: "border-zinc-200", text: "text-zinc-900", chip: "border-zinc-300 text-zinc-700 bg-white" };

  return (
    <Card className={`rounded-sm border ${tone.border} ${tone.bg} p-6 shadow-none`} data-testid="correlation-card">
      <div className="flex items-start gap-4">
        <div className="h-9 w-9 grid place-items-center bg-zinc-950 text-white shrink-0">
          <Sparkles className="h-4 w-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Correlation Engine
          </div>
          <div className={`mt-2 font-heading font-bold text-2xl tracking-tight ${tone.text}`}>
            {data.headline}
          </div>
          <p className="mt-2 text-sm text-zinc-700 leading-relaxed">{data.detail}</p>
          {data.signals?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {data.signals.map((s) => (
                <Badge
                  key={s.label}
                  variant="outline"
                  className={`rounded-sm font-mono text-[11px] border ${tone.chip}`}
                  data-testid={`signal-${s.label.replace(/\s+/g, "-")}`}
                >
                  {s.label}: <span className="ml-1 font-bold">{s.value}</span>
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

function RankGuardPanel({ rg, snapshots, snapping, loading, onSnapshot }) {
  return (
    <Card className="rounded-sm border-zinc-200 bg-white p-6 shadow-none" data-testid="rank-guard-panel">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          <Activity className="h-3.5 w-3.5" /> Rank Guard
          <span className="ml-2 text-[10px] text-zinc-400 font-mono">
            {snapshots.length} snapshot{snapshots.length === 1 ? "" : "s"}
          </span>
        </div>
        <Button
          onClick={onSnapshot}
          disabled={snapping}
          data-testid="take-snapshot-button"
          className="rounded-sm bg-zinc-950 hover:bg-cobalt text-white h-9"
        >
          <Camera className={`h-4 w-4 mr-2 ${snapping ? "animate-pulse" : ""}`} />
          {snapping ? "Capturing…" : "Take snapshot"}
        </Button>
      </div>

      {loading ? (
        <Skeleton className="mt-6 h-32 rounded-sm" />
      ) : !rg ? (
        <div className="mt-6 text-sm text-zinc-500">Loading…</div>
      ) : !rg.has_baseline ? (
        <div className="mt-6 border border-dashed border-zinc-300 bg-zinc-50 p-6 rounded-sm text-center">
          <div className="text-xs uppercase tracking-widest text-zinc-400 font-mono">No baseline yet</div>
          <div className="mt-2 font-heading font-bold text-lg text-zinc-950">{rg.message}</div>
          <p className="mt-2 text-sm text-zinc-500 max-w-md mx-auto">
            Each snapshot captures the current GSC keyword positions. Two snapshots = ranking deltas + alerts on
            ±3 movement.
          </p>
        </div>
      ) : (
        <div className="mt-6">
          <div className="flex flex-wrap gap-3">
            <Stat label="Improved" value={rg.improved_count} tone="up" />
            <Stat label="Dropped" value={rg.dropped_count} tone="down" />
            <Stat label="Total alerts" value={rg.alerts.length} tone="neutral" />
          </div>
          {rg.alerts.length === 0 ? (
            <div className="mt-6 text-sm text-zinc-500 border-l-2 border-zinc-200 pl-4">
              No keyword has moved by 3 or more positions between snapshots.
            </div>
          ) : (
            <div className="mt-6 border border-zinc-200 rounded-sm overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-zinc-50 border-zinc-200 hover:bg-zinc-50">
                    <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500">Keyword</TableHead>
                    <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500">Page</TableHead>
                    <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500 text-right">Prev</TableHead>
                    <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500 text-right">Now</TableHead>
                    <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500 text-right">Δ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rg.alerts.slice(0, 20).map((a, i) => (
                    <TableRow key={i} className="border-zinc-100 hover:bg-zinc-50 fade-up" style={{ animationDelay: `${Math.min(i, 12) * 25}ms` }} data-testid={`rg-alert-${i}`}>
                      <TableCell className="py-2.5 font-medium text-zinc-900">{a.keyword}</TableCell>
                      <TableCell className="py-2.5 text-xs text-zinc-500 font-mono truncate max-w-[260px]">{a.page}</TableCell>
                      <TableCell className="py-2.5 text-right font-mono text-sm text-zinc-700">{a.previous_position.toFixed(1)}</TableCell>
                      <TableCell className="py-2.5 text-right font-mono text-sm text-zinc-900">{a.current_position.toFixed(1)}</TableCell>
                      <TableCell className="py-2.5 text-right">
                        <span
                          className={`inline-flex items-center gap-1 rounded-sm border px-1.5 py-0.5 font-mono text-[11px] ${
                            a.direction === "up"
                              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                              : "border-amber-200 bg-amber-50 text-amber-800"
                          }`}
                        >
                          {a.direction === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                          {Math.abs(a.delta).toFixed(1)}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}

function Stat({ label, value, tone }) {
  const toneClass =
    tone === "up" ? "text-emerald-700 bg-emerald-50 border-emerald-200"
    : tone === "down" ? "text-amber-700 bg-amber-50 border-amber-200"
    : "text-zinc-700 bg-zinc-50 border-zinc-200";
  return (
    <div className={`rounded-sm border ${toneClass} px-3 py-2 min-w-[110px]`}>
      <div className="text-[10px] font-mono uppercase tracking-widest opacity-80">{label}</div>
      <div className="mt-0.5 font-heading font-black text-2xl tracking-tighter">{value}</div>
    </div>
  );
}

function InvoicesPanel({ client, invoices, loading, isAdmin, onNew, onDelete, monthsAvailable }) {
  const [selectedMonth, setSelectedMonth] = useState(monthsAvailable[0] || "");
  useEffect(() => {
    if (!selectedMonth && monthsAvailable[0]) setSelectedMonth(monthsAvailable[0]);
  }, [monthsAvailable, selectedMonth]);

  const invoicesForMonth = invoices.filter((i) => i.period_month === selectedMonth);
  const invForPackage = invoicesForMonth[0] || null;

  return (
    <Card className="rounded-sm border-zinc-200 bg-white p-6 shadow-none" data-testid="invoices-panel">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            <Receipt className="h-3.5 w-3.5" /> Invoices & Monthly Package
          </div>
          <div className="mt-1 text-[11px] text-zinc-500">
            Bundle the performance report + invoice into a single PDF for the client.
          </div>
        </div>
        {isAdmin && (
          <Button
            onClick={onNew}
            data-testid="new-invoice-button"
            className="rounded-sm bg-zinc-950 hover:bg-cobalt text-white h-9"
          >
            <Plus className="h-4 w-4 mr-2" /> New invoice
          </Button>
        )}
      </div>

      {/* MONTHLY PACKAGE BUILDER */}
      <div className="mt-5 border border-zinc-200 rounded-sm p-4 bg-zinc-50">
        <div className="flex flex-col sm:flex-row gap-3 sm:items-end sm:justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Monthly client package</div>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              {monthsAvailable.map((m) => (
                <button
                  key={m}
                  onClick={() => setSelectedMonth(m)}
                  data-testid={`month-${m}`}
                  className={`rounded-sm border px-2.5 py-1 text-xs font-mono transition-colors ${
                    m === selectedMonth ? "border-cobalt text-cobalt bg-white" : "border-zinc-200 text-zinc-600 bg-white hover:border-zinc-400"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
            <div className="mt-2 text-[11px] text-zinc-500">
              {invForPackage
                ? <>Will bundle invoice <span className="font-mono">{invForPackage.invoice_number}</span> · ₹{invForPackage.total.toLocaleString()}</>
                : "No invoice for this month yet — package will include performance only."}
            </div>
          </div>
          <a
            href={monthlyReportUrl(client.client_id, selectedMonth, invForPackage?.invoice_id)}
            target="_blank"
            rel="noreferrer"
            data-testid="download-package-button"
          >
            <Button className="rounded-sm bg-zinc-950 hover:bg-cobalt text-white h-10">
              <FileDown className="h-4 w-4 mr-2" /> Download package PDF
              <ChevronRight className="h-3.5 w-3.5 ml-2 opacity-60" />
            </Button>
          </a>
        </div>
      </div>

      {/* INVOICES LIST */}
      <div className="mt-6">
        {loading ? (
          <Skeleton className="h-32 rounded-sm" />
        ) : invoices.length === 0 ? (
          <div className="border border-dashed border-zinc-300 p-8 rounded-sm text-center">
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-mono">No invoices yet</div>
            <div className="mt-2 font-heading text-lg font-bold text-zinc-950">
              {isAdmin ? "Issue the first invoice" : "Awaiting first invoice"}
            </div>
            <div className="mt-1 text-sm text-zinc-500">
              {isAdmin ? "Auto-numbered. 18% GST applied." : "Only admins can create invoices."}
            </div>
          </div>
        ) : (
          <div className="border border-zinc-200 rounded-sm overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-zinc-50 border-zinc-200 hover:bg-zinc-50">
                  <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500">Invoice #</TableHead>
                  <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500">Period</TableHead>
                  <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500">Bill to</TableHead>
                  <TableHead className="text-[10px] uppercase tracking-widest text-zinc-500 text-right">Total</TableHead>
                  <TableHead className="w-32" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((inv) => (
                  <TableRow key={inv.invoice_id} className="border-zinc-100 hover:bg-zinc-50" data-testid={`invoice-row-${inv.invoice_id}`}>
                    <TableCell className="py-3 font-mono text-sm text-zinc-900">{inv.invoice_number}</TableCell>
                    <TableCell className="py-3 text-sm text-zinc-700">{inv.period_month}</TableCell>
                    <TableCell className="py-3 text-sm text-zinc-700 truncate max-w-[200px]">{inv.bill_to_name}</TableCell>
                    <TableCell className="py-3 text-right font-mono text-sm font-bold text-zinc-900">
                      ₹{Number(inv.total).toLocaleString()}
                    </TableCell>
                    <TableCell className="py-3">
                      <div className="flex justify-end gap-1">
                        <a
                          href={invoicePdfUrl(inv.invoice_id)}
                          target="_blank"
                          rel="noreferrer"
                          data-testid={`download-invoice-${inv.invoice_id}`}
                        >
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-cobalt">
                            <FileDown className="h-3.5 w-3.5" />
                          </Button>
                        </a>
                        {isAdmin && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onDelete(inv)}
                            data-testid={`delete-invoice-${inv.invoice_id}`}
                            className="h-8 w-8 text-zinc-400 hover:text-red-600"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </Card>
  );
}
