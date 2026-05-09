import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

function blankItem() {
  return { description: "", qty: 1, unit_price: 0 };
}

export default function InvoiceForm({ open, onOpenChange, client, onSubmit, submitting }) {
  const today = new Date();
  const defaultMonth = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;
  const [form, setForm] = useState(() => ({
    period_month: defaultMonth,
    bill_to_name: client?.name || "",
    bill_to_address: "",
    bill_to_gstin: "",
    bill_to_email: "",
    gst_rate: 18,
    notes: "",
    items: [
      { description: "SEO service fee", qty: 1, unit_price: 20000 },
    ],
  }));

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  const setItem = (i, k, v) =>
    setForm((p) => ({ ...p, items: p.items.map((it, idx) => (idx === i ? { ...it, [k]: v } : it)) }));
  const addItem = () => setForm((p) => ({ ...p, items: [...p.items, blankItem()] }));
  const removeItem = (i) => setForm((p) => ({ ...p, items: p.items.filter((_, idx) => idx !== i) }));

  const subtotal = form.items.reduce((s, it) => s + (Number(it.qty) || 0) * (Number(it.unit_price) || 0), 0);
  const gst = subtotal * (Number(form.gst_rate) || 0) / 100;
  const total = subtotal + gst;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.bill_to_name?.trim()) {
      toast.error("Bill-to name is required");
      return;
    }
    if (!form.items.length || form.items.some((it) => !it.description?.trim())) {
      toast.error("Each line item needs a description");
      return;
    }
    const payload = {
      ...form,
      gst_rate: Number(form.gst_rate),
      items: form.items.map((it) => ({
        description: it.description.trim(),
        qty: Number(it.qty) || 1,
        unit_price: Number(it.unit_price) || 0,
      })),
    };
    Object.keys(payload).forEach((k) => {
      if (payload[k] === "") payload[k] = null;
    });
    await onSubmit(payload);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-sm max-w-3xl max-h-[90vh] overflow-y-auto" data-testid="invoice-form-dialog">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl tracking-tight">New invoice</DialogTitle>
          <DialogDescription className="text-sm text-zinc-500">
            Auto-numbered <span className="font-mono">MKT{new Date().getFullYear().toString().slice(-2)}-XXX</span>.
            18% GST applied by default. Edit bill-to and line items below.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField label="Period (YYYY-MM)" required>
              <Input
                data-testid="invoice-period"
                value={form.period_month}
                onChange={(e) => set("period_month", e.target.value)}
                placeholder="2026-04"
                className="rounded-sm border-zinc-200 focus-visible:ring-zinc-950"
              />
            </FormField>
            <FormField label="GST rate (%)">
              <Input
                data-testid="invoice-gst"
                type="number"
                value={form.gst_rate}
                onChange={(e) => set("gst_rate", e.target.value)}
                className="rounded-sm border-zinc-200 focus-visible:ring-zinc-950"
              />
            </FormField>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField label="Bill to · Name" required>
              <Input
                data-testid="invoice-bill-name"
                value={form.bill_to_name}
                onChange={(e) => set("bill_to_name", e.target.value)}
                placeholder="Acme Pvt Ltd"
                className="rounded-sm border-zinc-200 focus-visible:ring-zinc-950"
              />
            </FormField>
            <FormField label="Bill to · GSTIN">
              <Input
                data-testid="invoice-bill-gstin"
                value={form.bill_to_gstin}
                onChange={(e) => set("bill_to_gstin", e.target.value)}
                placeholder="29AAACX0000X1Z0"
                className="rounded-sm border-zinc-200 focus-visible:ring-zinc-950 font-mono"
              />
            </FormField>
            <FormField label="Bill to · Email">
              <Input
                data-testid="invoice-bill-email"
                type="email"
                value={form.bill_to_email}
                onChange={(e) => set("bill_to_email", e.target.value)}
                placeholder="finance@acme.com"
                className="rounded-sm border-zinc-200 focus-visible:ring-zinc-950"
              />
            </FormField>
            <FormField label="Bill to · Address">
              <Textarea
                data-testid="invoice-bill-address"
                value={form.bill_to_address}
                onChange={(e) => set("bill_to_address", e.target.value)}
                rows={2}
                placeholder="Street, City, State PIN"
                className="rounded-sm border-zinc-200 focus-visible:ring-zinc-950 resize-none"
              />
            </FormField>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <Label className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
                Line items
              </Label>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={addItem}
                data-testid="invoice-add-item"
                className="rounded-sm h-8 text-cobalt hover:bg-blue-50"
              >
                <Plus className="h-3.5 w-3.5 mr-1" /> Add line
              </Button>
            </div>
            <div className="space-y-2">
              {form.items.map((it, i) => (
                <div key={i} className="grid grid-cols-[1fr_70px_110px_110px_36px] gap-2 items-center" data-testid={`invoice-item-${i}`}>
                  <Input
                    placeholder="Description"
                    value={it.description}
                    onChange={(e) => setItem(i, "description", e.target.value)}
                    className="rounded-sm border-zinc-200 focus-visible:ring-zinc-950 text-sm"
                  />
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="Qty"
                    value={it.qty}
                    onChange={(e) => setItem(i, "qty", e.target.value)}
                    className="rounded-sm border-zinc-200 focus-visible:ring-zinc-950 text-sm font-mono"
                  />
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="Unit price"
                    value={it.unit_price}
                    onChange={(e) => setItem(i, "unit_price", e.target.value)}
                    className="rounded-sm border-zinc-200 focus-visible:ring-zinc-950 text-sm font-mono"
                  />
                  <div className="text-right text-sm font-mono text-zinc-700 pr-1">
                    {((Number(it.qty) || 0) * (Number(it.unit_price) || 0)).toLocaleString()}
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(i)}
                    disabled={form.items.length === 1}
                    className="h-8 w-8 text-zinc-400 hover:text-red-600"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-4 ml-auto w-full sm:w-72 border border-zinc-200 rounded-sm p-3 bg-zinc-50 text-sm font-mono">
              <Row label="Subtotal" value={subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })} />
              <Row label={`GST (${form.gst_rate}%)`} value={gst.toLocaleString(undefined, { minimumFractionDigits: 2 })} />
              <Row label="Total" value={total.toLocaleString(undefined, { minimumFractionDigits: 2 })} bold />
            </div>
          </div>

          <FormField label="Notes (optional)">
            <Textarea
              data-testid="invoice-notes"
              rows={2}
              value={form.notes}
              onChange={(e) => set("notes", e.target.value)}
              placeholder="Payment terms, references, thanks…"
              className="rounded-sm border-zinc-200 focus-visible:ring-zinc-950 resize-none"
            />
          </FormField>

          <DialogFooter className="flex gap-2 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="rounded-sm border-zinc-200"
              data-testid="invoice-form-cancel"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={submitting}
              data-testid="invoice-form-submit"
              className="rounded-sm bg-zinc-950 hover:bg-cobalt text-white"
            >
              {submitting ? "Creating…" : "Create invoice"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function FormField({ label, required, children }) {
  return (
    <div>
      <Label className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
        {label} {required && <span className="text-cobalt">*</span>}
      </Label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Row({ label, value, bold }) {
  return (
    <div className={`flex justify-between py-1 ${bold ? "border-t border-zinc-200 mt-1 pt-2 font-bold text-zinc-950" : "text-zinc-600"}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
