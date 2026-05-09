import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import PublicLayout from "@/components/layout/PublicLayout";
import { publicContact } from "@/lib/publicApi";
import { FAQS } from "@/data/publicContent";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service_interest: "", message: "" });
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = async () => {
    if (!form.email.trim() || form.message.trim().length < 8) {
      return toast.error("Email and a short message are required");
    }
    setBusy(true);
    try {
      await publicContact(form);
      setSent(true);
      toast.success("Thanks — we'll be in touch within 24h");
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Could not send");
    } finally { setBusy(false); }
  };

  return (
    <PublicLayout>
      <section className="bg-white py-16 md:py-24 border-b border-zinc-200" data-testid="contact-hero">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Get in touch</div>
            <h1 className="text-[36px] sm:text-[44px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">
              Tell us where you want to go. We'll map the route.
            </h1>
            <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
              Free 30-minute strategy call. We'll audit your current setup, surface the 2–3 fastest levers for your industry, and you decide if we're the right fit.
            </p>

            <div className="mt-10 space-y-4">
              <ContactLine Icon={Mail} label="Email" value="ramya@marketly.tech" href="mailto:ramya@marketly.tech" />
              <ContactLine Icon={Phone} label="Phone" value="+91 96063 34692" href="tel:+919606334692" />
              <ContactLine Icon={MapPin} label="Office" value="3rd floor, Indiranagar 100ft Rd, Bengaluru — 560 038" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 bg-zinc-50 border border-zinc-200 rounded-sm" data-testid="contact-form-wrapper">
              {sent ? (
                <div className="text-center py-10" data-testid="contact-sent">
                  <div className="mx-auto h-14 w-14 rounded-full bg-[#134E35] grid place-items-center"><CheckCircle2 className="h-7 w-7 text-white" /></div>
                  <h3 className="mt-6 text-2xl font-bold text-[#0F1212]">Message received.</h3>
                  <p className="mt-2 text-zinc-600">We typically reply within 24 hours to <b className="text-[#0F1212]">{form.email}</b>.</p>
                </div>
              ) : (
                <div className="space-y-4" data-testid="contact-form">
                  <h3 className="text-2xl font-bold text-[#0F1212]">Start a conversation</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Field placeholder="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} testId="contact-name" />
                    <Field placeholder="Work email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} testId="contact-email" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Field placeholder="Phone (optional)" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} testId="contact-phone" />
                    <Select value={form.service_interest} onValueChange={(v) => setForm({ ...form, service_interest: v })}>
                      <SelectTrigger data-testid="contact-service" className="rounded-sm bg-white border-zinc-300 h-11"><SelectValue placeholder="Service interest" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="seo">SEO</SelectItem>
                        <SelectItem value="performance">Performance marketing</SelectItem>
                        <SelectItem value="landing_pages">Landing pages / websites</SelectItem>
                        <SelectItem value="products">Products (ERP / CRM / e-com)</SelectItem>
                        <SelectItem value="gmb">GMB / local ranking</SelectItem>
                        <SelectItem value="creative">Creative + social</SelectItem>
                        <SelectItem value="offline">Offline / OOH</SelectItem>
                        <SelectItem value="full_stack">Full-stack agency retainer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Textarea rows={5} placeholder="What's the challenge you want to solve?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="rounded-sm bg-white border-zinc-300" data-testid="contact-message" />
                  <Button onClick={submit} disabled={busy} data-testid="contact-submit-btn" className="w-full rounded-sm bg-[#0F1212] hover:bg-[#134E35] text-white h-12 text-sm font-semibold">
                    {busy ? "Sending…" : "Send message"} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-zinc-50" data-testid="contact-faq">
        <div className="max-w-[900px] mx-auto px-5 md:px-10">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">FAQ</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F1212] tracking-[-0.02em]">Questions you should ask.</h2>
          <Accordion type="single" collapsible className="mt-10">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="border-zinc-200">
                <AccordionTrigger className="text-left font-bold text-base md:text-lg hover:no-underline hover:text-[#134E35] py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 leading-relaxed pb-5 text-[15px]">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </PublicLayout>
  );
}

function Field({ placeholder, value, onChange, type = "text", testId }) {
  return (
    <Input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      type={type}
      data-testid={testId}
      className="rounded-sm bg-white border-zinc-300 h-11"
    />
  );
}

function ContactLine({ Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4 p-4 bg-white border border-zinc-200 rounded-sm hover:border-[#134E35] transition-colors">
      <div className="h-10 w-10 rounded-sm bg-[#134E35]/10 grid place-items-center shrink-0">
        <Icon className="h-5 w-5 text-[#134E35]" />
      </div>
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-500">{label}</div>
        <div className="mt-1 text-base font-bold text-[#0F1212]">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{content}</a> : content;
}
