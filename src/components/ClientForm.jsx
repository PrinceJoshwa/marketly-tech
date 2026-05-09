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
import { toast } from "sonner";

const FIELDS = [
  { key: "name", label: "Client name", placeholder: "Acme Co", required: true },
  { key: "domain", label: "Primary domain", placeholder: "acme.com" },
  { key: "blog_target", label: "Monthly blog target", placeholder: "5", type: "number" },
  { key: "backlink_target", label: "Monthly backlink target", placeholder: "200", type: "number" },
  { key: "backlinks_sheet_url", label: "Backlinks Google Sheet URL", placeholder: "https://docs.google.com/…", full: true },
  { key: "content_sheet_url", label: "Content / Blogs Sheet URL", placeholder: "https://docs.google.com/…", full: true },
  { key: "competitors_sheet_url", label: "Competitors Sheet URL", placeholder: "https://docs.google.com/…", full: true },
  { key: "social_calendar_url", label: "Social Calendar URL", placeholder: "https://docs.google.com/…", full: true },
];

export default function ClientForm({ open, onOpenChange, initial, onSubmit, submitting }) {
  const [form, setForm] = useState(() => ({
    name: "",
    domain: "",
    blog_target: 5,
    backlink_target: 200,
    backlinks_sheet_url: "",
    content_sheet_url: "",
    competitors_sheet_url: "",
    social_calendar_url: "",
    ...(initial || {}),
  }));

  const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name?.trim()) {
      toast.error("Client name is required");
      return;
    }
    const payload = {
      ...form,
      blog_target: Number(form.blog_target) || 0,
      backlink_target: Number(form.backlink_target) || 0,
    };
    Object.keys(payload).forEach((k) => {
      if (payload[k] === "") payload[k] = null;
    });
    await onSubmit(payload);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-sm max-w-2xl" data-testid="client-form-dialog">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl tracking-tight">
            {initial?.client_id ? "Edit client" : "New client"}
          </DialogTitle>
          <DialogDescription className="text-sm text-zinc-500">
            Configure the client workspace. Sheet URLs must be shared as “Anyone with the link”.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
          {FIELDS.map((f) => (
            <div key={f.key} className={f.full ? "sm:col-span-2" : ""}>
              <Label className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
                {f.label} {f.required && <span className="text-cobalt">*</span>}
              </Label>
              <Input
                data-testid={`client-form-${f.key}`}
                type={f.type || "text"}
                placeholder={f.placeholder}
                value={form[f.key] ?? ""}
                onChange={(e) => set(f.key, e.target.value)}
                className="mt-2 rounded-sm border-zinc-200 focus-visible:ring-zinc-950"
                required={!!f.required}
              />
            </div>
          ))}

          <DialogFooter className="sm:col-span-2 mt-2 flex gap-2 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="rounded-sm border-zinc-200"
              data-testid="client-form-cancel"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={submitting}
              className="rounded-sm bg-zinc-950 hover:bg-cobalt text-white"
              data-testid="client-form-submit"
            >
              {submitting ? "Saving…" : initial?.client_id ? "Save changes" : "Create client"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
