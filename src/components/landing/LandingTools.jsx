// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Slider } from "@/components/ui/slider";
// import {
//   Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
// } from "@/components/ui/select";
// import { motion } from "motion/react";
// import {
//   Zap, Gauge, MapPin, CheckCircle2, AlertTriangle, XCircle, ArrowRight,
//   TrendingUp,
// } from "lucide-react";
// import { toast } from "sonner";
// import { publicAudit, publicRoi, publicGmb } from "@/lib/publicApi";

// // ================= Free Website Audit =================
// export function AuditTool() {
//   const [url, setUrl] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [busy, setBusy] = useState(false);
//   const [result, setResult] = useState(null);

//   const run = async () => {
//     if (!url.trim() || !email.trim()) {
//       return toast.error("URL and email are required");
//     }
//     setBusy(true);
//     try {
//       const r = await publicAudit({ url: url.trim(), name, email: email.trim() });
//       setResult(r);
//       toast.success("Audit complete — full report emailed");
//     } catch (e) {
//       toast.error(e?.response?.data?.detail || "Audit failed");
//     } finally {
//       setBusy(false);
//     }
//   };

//   return (
//     <div className="rounded-none bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10" data-testid="tool-audit">
//       <div className="flex items-center gap-3 mb-6">
//         <div className="h-10 w-10 grid place-items-center bg-white/10 border border-white/20">
//           <Zap className="h-5 w-5 text-[#C87A50]" />
//         </div>
//         <div>
//           <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C87A50]">Tool 01</div>
//           <h3 className="font-display text-2xl text-white mt-1 leading-tight">Free Website Audit</h3>
//         </div>
//       </div>
//       {!result ? (
//         <div className="space-y-3">
//           <Input
//             value={url} onChange={(e) => setUrl(e.target.value)}
//             placeholder="yourwebsite.com"
//             data-testid="audit-tool-url"
//             className="rounded-none bg-white/5 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-[#C87A50] h-11 font-mono text-sm"
//           />
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//             <Input
//               value={name} onChange={(e) => setName(e.target.value)}
//               placeholder="Your name"
//               data-testid="audit-tool-name"
//               className="rounded-none bg-white/5 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-[#C87A50] h-11"
//             />
//             <Input
//               value={email} onChange={(e) => setEmail(e.target.value)}
//               type="email" placeholder="Work email"
//               data-testid="audit-tool-email"
//               className="rounded-none bg-white/5 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-[#C87A50] h-11"
//             />
//           </div>
//           <Button
//             onClick={run}
//             disabled={busy}
//             data-testid="lm-website-audit-submit"
//             className="w-full rounded-none bg-[#C87A50] hover:bg-[#B16840] text-white h-12 font-semibold uppercase tracking-[0.15em] text-xs"
//           >
//             {busy ? "Analysing…" : "Run Free Audit"} <ArrowRight className="h-3.5 w-3.5 ml-2" />
//           </Button>
//           <p className="text-[11px] text-white/50 font-mono">Takes ~5 seconds · full PDF report lands in your inbox.</p>
//         </div>
//       ) : (
//         <AuditResult r={result} onReset={() => { setResult(null); setUrl(""); setName(""); setEmail(""); }} />
//       )}
//     </div>
//   );
// }

// function AuditResult({ r, onReset }) {
//   const bandBg = r.band === "good" ? "bg-emerald-500" : r.band === "warn" ? "bg-amber-500" : "bg-red-500";
//   return (
//     <div className="space-y-4" data-testid="audit-result">
//       <div className="border border-white/10 p-6 flex items-center gap-5">
//         <div className={`h-20 w-20 grid place-items-center ${bandBg} text-white font-display text-4xl`}>
//           {r.score}
//         </div>
//         <div>
//           <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/50">Score</div>
//           <div className="font-display text-2xl text-white mt-1">
//             {r.band === "good" ? "Healthy" : r.band === "warn" ? "Needs work" : "Critical"}
//           </div>
//           <div className="text-xs text-white/60 font-mono mt-1 break-all max-w-[320px]">{r.url}</div>
//         </div>
//       </div>
//       <div className="grid grid-cols-4 gap-px bg-white/10">
//         <Stat label="Errors" value={r.issue_count?.error || 0} />
//         <Stat label="Warnings" value={r.issue_count?.warn || 0} />
//         <Stat label="Words" value={(r.word_count || 0).toLocaleString()} />
//         <Stat label="Title chars" value={r.title_length || 0} />
//       </div>
//       {r.issues?.length > 0 && (
//         <div>
//           <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/50 mb-2">Top findings</div>
//           <ul className="space-y-1.5">
//             {r.issues.slice(0, 6).map((i, idx) => (
//               <li key={idx} className="flex items-start gap-2 text-sm text-white/90 py-1.5 border-b border-white/5">
//                 {i.severity === "error" ? <XCircle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" /> :
//                  i.severity === "warn" ? <AlertTriangle className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" /> :
//                  <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />}
//                 <span>{i.msg}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <div className="pt-2 flex gap-3">
//         <Button
//           onClick={onReset}
//           variant="outline"
//           data-testid="audit-run-again"
//           className="rounded-none border-white/20 bg-transparent text-white hover:bg-white/10 h-11"
//         >
//           Audit another URL
//         </Button>
//         <Button
//           onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
//           className="rounded-none bg-[#C87A50] hover:bg-[#B16840] text-white h-11 font-semibold uppercase tracking-[0.15em] text-xs"
//         >
//           Get a fix roadmap <ArrowRight className="h-3.5 w-3.5 ml-2" />
//         </Button>
//       </div>
//     </div>
//   );
// }

// function Stat({ label, value }) {
//   return (
//     <div className="bg-[#0B2D21] p-3">
//       <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/40">{label}</div>
//       <div className="font-display text-xl text-white mt-1">{value}</div>
//     </div>
//   );
// }

// // ================= ROI Calculator =================
// export function RoiTool() {
//   const [spend, setSpend] = useState([100000]);
//   const [industry, setIndustry] = useState("ecommerce");
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [result, setResult] = useState(null);
//   const [busy, setBusy] = useState(false);

//   const calc = async () => {
//     if (!email.trim()) return toast.error("Email required to see your ROI breakdown");
//     setBusy(true);
//     try {
//       const r = await publicRoi({ email: email.trim(), name, monthly_spend: spend[0], industry });
//       setResult(r);
//       toast.success("ROI projection ready");
//     } catch (e) {
//       toast.error(e?.response?.data?.detail || "Calculation failed");
//     } finally {
//       setBusy(false);
//     }
//   };

//   return (
//     <div className="rounded-none bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10" data-testid="tool-roi">
//       <div className="flex items-center gap-3 mb-6">
//         <div className="h-10 w-10 grid place-items-center bg-white/10 border border-white/20">
//           <Gauge className="h-5 w-5 text-[#C87A50]" />
//         </div>
//         <div>
//           <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C87A50]">Tool 02</div>
//           <h3 className="font-display text-2xl text-white mt-1 leading-tight">Marketing ROI Calculator</h3>
//         </div>
//       </div>
//       <div className="space-y-5">
//         <div>
//           <div className="flex items-baseline justify-between mb-2">
//             <Label className="text-[10px] uppercase tracking-[0.18em] text-white/70 font-semibold">Monthly ad spend</Label>
//             <span className="font-display text-2xl text-white">₹{spend[0].toLocaleString()}</span>
//           </div>
//           <Slider
//             value={spend}
//             onValueChange={setSpend}
//             min={10000}
//             max={2000000}
//             step={5000}
//             data-testid="lm-roi-calc-slider"
//             className="[&>*]:bg-white/10 [&_[role=slider]]:bg-[#C87A50] [&_[role=slider]]:border-[#C87A50]"
//           />
//           <div className="flex justify-between text-[10px] font-mono text-white/40 mt-1.5">
//             <span>₹10K</span><span>₹20L</span>
//           </div>
//         </div>
//         <div>
//           <Label className="text-[10px] uppercase tracking-[0.18em] text-white/70 font-semibold">Industry</Label>
//           <Select value={industry} onValueChange={setIndustry}>
//             <SelectTrigger data-testid="roi-tool-industry" className="mt-2 rounded-none bg-white/5 border-white/20 text-white h-11">
//               <SelectValue />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="ecommerce">E-commerce</SelectItem>
//               <SelectItem value="real_estate">Real Estate</SelectItem>
//               <SelectItem value="interior_design">Interior Design</SelectItem>
//               <SelectItem value="automobile">Automobile</SelectItem>
//               <SelectItem value="retail">Retail</SelectItem>
//               <SelectItem value="saas_b2b">SaaS / B2B</SelectItem>
//               <SelectItem value="generic">Other</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         <div className="grid grid-cols-2 gap-3">
//           <Input
//             value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
//             data-testid="roi-tool-name"
//             className="rounded-none bg-white/5 border-white/20 text-white placeholder:text-white/50 h-11"
//           />
//           <Input
//             value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Work email"
//             data-testid="roi-tool-email"
//             className="rounded-none bg-white/5 border-white/20 text-white placeholder:text-white/50 h-11"
//           />
//         </div>
//         <Button
//           onClick={calc}
//           disabled={busy}
//           data-testid="lm-roi-calc-submit"
//           className="w-full rounded-none bg-[#C87A50] hover:bg-[#B16840] text-white h-12 font-semibold uppercase tracking-[0.15em] text-xs"
//         >
//           {busy ? "Calculating…" : "Show me the numbers"} <ArrowRight className="h-3.5 w-3.5 ml-2" />
//         </Button>

//         {result && (
//           <div className="pt-4 mt-4 border-t border-white/10 grid grid-cols-2 gap-4" data-testid="roi-result">
//             <KpiBig label="Projected leads / mo" value={result.outputs.estimated_leads.toLocaleString()} />
//             <KpiBig label="Projected revenue" value={`₹${(result.outputs.estimated_revenue / 100000).toFixed(1)}L`} />
//             <KpiBig label="Cost per lead" value={`₹${result.outputs.cost_per_lead.toLocaleString()}`} />
//             <KpiBig label="Projected ROI" value={`${result.outputs.roi_percent}%`} accent />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// function KpiBig({ label, value, accent }) {
//   return (
//     <div className={`p-4 border ${accent ? "border-[#C87A50] bg-[#C87A50]/10" : "border-white/10"}`}>
//       <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/50">{label}</div>
//       <div className={`font-display text-2xl mt-1 ${accent ? "text-[#C87A50]" : "text-white"}`}>{value}</div>
//     </div>
//   );
// }

// // ================= GMB Checker =================
// export function GmbTool() {
//   const [business, setBusiness] = useState("");
//   const [city, setCity] = useState("");
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [result, setResult] = useState(null);
//   const [busy, setBusy] = useState(false);

//   const check = async () => {
//     if (!business.trim() || !city.trim() || !email.trim()) {
//       return toast.error("Business name, city, and email are required");
//     }
//     setBusy(true);
//     try {
//       const r = await publicGmb({ email: email.trim(), name, business_name: business.trim(), city: city.trim() });
//       setResult(r);
//       toast.success("Checklist emailed");
//     } catch (e) {
//       toast.error(e?.response?.data?.detail || "Check failed");
//     } finally {
//       setBusy(false);
//     }
//   };

//   return (
//     <div className="rounded-none bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10" data-testid="tool-gmb">
//       <div className="flex items-center gap-3 mb-6">
//         <div className="h-10 w-10 grid place-items-center bg-white/10 border border-white/20">
//           <MapPin className="h-5 w-5 text-[#C87A50]" />
//         </div>
//         <div>
//           <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C87A50]">Tool 03</div>
//           <h3 className="font-display text-2xl text-white mt-1 leading-tight">GMB Local Ranking Checker</h3>
//         </div>
//       </div>
//       {!result ? (
//         <div className="space-y-3">
//           <Input
//             value={business} onChange={(e) => setBusiness(e.target.value)}
//             placeholder="Your business name"
//             data-testid="gmb-tool-business"
//             className="rounded-none bg-white/5 border-white/20 text-white placeholder:text-white/50 h-11"
//           />
//           <Input
//             value={city} onChange={(e) => setCity(e.target.value)}
//             placeholder="City (e.g. Bengaluru)"
//             data-testid="gmb-tool-city"
//             className="rounded-none bg-white/5 border-white/20 text-white placeholder:text-white/50 h-11"
//           />
//           <div className="grid grid-cols-2 gap-3">
//             <Input
//               value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
//               data-testid="gmb-tool-name"
//               className="rounded-none bg-white/5 border-white/20 text-white placeholder:text-white/50 h-11"
//             />
//             <Input
//               value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Work email"
//               data-testid="gmb-tool-email"
//               className="rounded-none bg-white/5 border-white/20 text-white placeholder:text-white/50 h-11"
//             />
//           </div>
//           <Button
//             onClick={check}
//             disabled={busy}
//             data-testid="lm-gmb-checker-submit"
//             className="w-full rounded-none bg-[#C87A50] hover:bg-[#B16840] text-white h-12 font-semibold uppercase tracking-[0.15em] text-xs"
//           >
//             {busy ? "Checking…" : "Check visibility"} <ArrowRight className="h-3.5 w-3.5 ml-2" />
//           </Button>
//         </div>
//       ) : (
//         <div data-testid="gmb-result">
//           <div className="mb-3 text-sm text-white/80">
//             Here are 10 signals Google uses to rank <b className="text-white">{business}</b> in {city}.
//             Full checklist emailed.
//           </div>
//           <ul className="space-y-1.5">
//             {result.checks.slice(0, 6).map((c, i) => (
//               <li key={i} className="flex items-start gap-2 py-2 border-b border-white/5 last:border-0">
//                 <CheckCircle2 className="h-4 w-4 text-[#C87A50] mt-0.5 shrink-0" />
//                 <div className="text-sm text-white/90">
//                   <div className="font-semibold">{c.label}</div>
//                   <div className="text-xs text-white/50 mt-0.5">{c.hint}</div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <Button
//             onClick={() => { setResult(null); setBusiness(""); setCity(""); setName(""); setEmail(""); }}
//             variant="outline"
//             className="mt-4 rounded-none border-white/20 bg-transparent text-white hover:bg-white/10"
//           >
//             Check another business
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { motion } from "motion/react";
import {
  Zap, Gauge, MapPin, CheckCircle2, AlertTriangle, XCircle, ArrowRight,
  TrendingUp,
} from "lucide-react";
import { toast } from "sonner";
import { publicAudit, publicRoi, publicGmb } from "@/lib/publicApi";

// ================= Free Website Audit =================
export function AuditTool() {
  const [url, setUrl] = useState("");
  const [brandName, setBrandName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState(null);

  const run = async () => {
    if (!url.trim() || !email.trim()) {
      return toast.error("URL and email are required");
    }
    setBusy(true);
    try {
      // Passing brandName as name to support existing API structure, and including phone
      const r = await publicAudit({ url: url.trim(), name: brandName, phone: phone.trim(), email: email.trim() });
      setResult(r);
      toast.success("Audit complete — full report emailed");
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Audit failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="rounded-none bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10" data-testid="tool-audit">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 grid place-items-center bg-white/10 border border-white/20">
          <Zap className="h-5 w-5 text-[#C87A50]" />
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C87A50]">Tool 01</div>
          <h3 className="font-display text-2xl text-white mt-1 leading-tight">Free Website Audit</h3>
        </div>
      </div>
      {!result ? (
        <div className="space-y-4">
          <Input
            value={url} onChange={(e) => setUrl(e.target.value)}
            placeholder="Website URL (e.g., yourwebsite.com)"
            data-testid="audit-tool-url"
            className="rounded-none bg-white/5 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-[#C87A50] h-11 font-mono text-sm"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Input
              value={brandName} onChange={(e) => setBrandName(e.target.value)}
              placeholder="Brand name"
              data-testid="audit-tool-brand-name"
              className="rounded-none bg-white/5 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-[#C87A50] h-11"
            />
            <Input
              value={phone} onChange={(e) => setPhone(e.target.value)}
              type="tel" placeholder="Phone number"
              data-testid="audit-tool-phone"
              className="rounded-none bg-white/5 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-[#C87A50] h-11"
            />
          </div>
          <Input
            value={email} onChange={(e) => setEmail(e.target.value)}
            type="email" placeholder="Work email"
            data-testid="audit-tool-email"
            className="rounded-none bg-white/5 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-[#C87A50] h-11"
          />
          <Button
            onClick={run}
            disabled={busy}
            data-testid="lm-website-audit-submit"
            className="w-full rounded-none bg-[#C87A50] hover:bg-[#B16840] text-white h-12 font-semibold uppercase tracking-[0.15em] text-xs mt-2"
          >
            {busy ? "Analysing…" : "Run Free Audit"} <ArrowRight className="h-3.5 w-3.5 ml-2" />
          </Button>
          <p className="text-[11px] text-center text-white/50 font-mono mt-2">Takes ~5 seconds · Full PDF report lands in your inbox.</p>
        </div>
      ) : (
        <AuditResult r={result} onReset={() => { setResult(null); setUrl(""); setBrandName(""); setPhone(""); setEmail(""); }} />
      )}
    </div>
  );
}

function AuditResult({ r, onReset }) {
  const bandBg = r.band === "good" ? "bg-emerald-500" : r.band === "warn" ? "bg-amber-500" : "bg-red-500";
  return (
    <div className="space-y-4" data-testid="audit-result">
      <div className="border border-white/10 p-6 flex items-center gap-5">
        <div className={`h-20 w-20 grid place-items-center ${bandBg} text-white font-display text-4xl`}>
          {r.score}
        </div>
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/50">Score</div>
          <div className="font-display text-2xl text-white mt-1">
            {r.band === "good" ? "Healthy" : r.band === "warn" ? "Needs work" : "Critical"}
          </div>
          <div className="text-xs text-white/60 font-mono mt-1 break-all max-w-[320px]">{r.url}</div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-px bg-white/10">
        <Stat label="Errors" value={r.issue_count?.error || 0} />
        <Stat label="Warnings" value={r.issue_count?.warn || 0} />
        <Stat label="Words" value={(r.word_count || 0).toLocaleString()} />
        <Stat label="Title chars" value={r.title_length || 0} />
      </div>
      {r.issues?.length > 0 && (
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/50 mb-2">Top findings</div>
          <ul className="space-y-1.5">
            {r.issues.slice(0, 6).map((i, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-white/90 py-1.5 border-b border-white/5">
                {i.severity === "error" ? <XCircle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" /> :
                 i.severity === "warn" ? <AlertTriangle className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" /> :
                 <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />}
                <span>{i.msg}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="pt-2 flex gap-3">
        <Button
          onClick={onReset}
          variant="outline"
          data-testid="audit-run-again"
          className="rounded-none border-white/20 bg-transparent text-white hover:bg-white/10 h-11"
        >
          Audit another URL
        </Button>
        <Button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="rounded-none bg-[#C87A50] hover:bg-[#B16840] text-white h-11 font-semibold uppercase tracking-[0.15em] text-xs"
        >
          Get a fix roadmap <ArrowRight className="h-3.5 w-3.5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-[#0B2D21] p-3">
      <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/40">{label}</div>
      <div className="font-display text-xl text-white mt-1">{value}</div>
    </div>
  );
}

// ================= ROI Calculator =================
export function RoiTool() {
  const [spend, setSpend] = useState([100000]);
  const [industry, setIndustry] = useState("ecommerce");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [result, setResult] = useState(null);
  const [busy, setBusy] = useState(false);

  const calc = async () => {
    if (!email.trim()) return toast.error("Email required to see your ROI breakdown");
    setBusy(true);
    try {
      const r = await publicRoi({ email: email.trim(), name, monthly_spend: spend[0], industry });
      setResult(r);
      toast.success("ROI projection ready");
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Calculation failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="rounded-none bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10" data-testid="tool-roi">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 grid place-items-center bg-white/10 border border-white/20">
          <Gauge className="h-5 w-5 text-[#C87A50]" />
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C87A50]">Tool 02</div>
          <h3 className="font-display text-2xl text-white mt-1 leading-tight">Marketing ROI Calculator</h3>
        </div>
      </div>
      <div className="space-y-5">
        <div>
          <div className="flex items-baseline justify-between mb-2">
            <Label className="text-[10px] uppercase tracking-[0.18em] text-white/70 font-semibold">Monthly ad spend</Label>
            <span className="font-display text-2xl text-white">₹{spend[0].toLocaleString()}</span>
          </div>
          <Slider
            value={spend}
            onValueChange={setSpend}
            min={10000}
            max={2000000}
            step={5000}
            data-testid="lm-roi-calc-slider"
            className="[&>*]:bg-white/10 [&_[role=slider]]:bg-[#C87A50] [&_[role=slider]]:border-[#C87A50]"
          />
          <div className="flex justify-between text-[10px] font-mono text-white/40 mt-1.5">
            <span>₹10K</span><span>₹20L</span>
          </div>
        </div>
        <div>
          <Label className="text-[10px] uppercase tracking-[0.18em] text-white/70 font-semibold">Industry</Label>
          <Select value={industry} onValueChange={setIndustry}>
            <SelectTrigger data-testid="roi-tool-industry" className="mt-2 rounded-none bg-white/5 border-white/20 text-white h-11">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ecommerce">E-commerce</SelectItem>
              <SelectItem value="real_estate">Real Estate</SelectItem>
              <SelectItem value="interior_design">Interior Design</SelectItem>
              <SelectItem value="automobile">Automobile</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="saas_b2b">SaaS / B2B</SelectItem>
              <SelectItem value="generic">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Input
            value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
            data-testid="roi-tool-name"
            className="rounded-none bg-white/5 border-white/20 text-white placeholder:text-white/50 h-11"
          />
          <Input
            value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Work email"
            data-testid="roi-tool-email"
            className="rounded-none bg-white/5 border-white/20 text-white placeholder:text-white/50 h-11"
          />
        </div>
        <Button
          onClick={calc}
          disabled={busy}
          data-testid="lm-roi-calc-submit"
          className="w-full rounded-none bg-[#C87A50] hover:bg-[#B16840] text-white h-12 font-semibold uppercase tracking-[0.15em] text-xs"
        >
          {busy ? "Calculating…" : "Show me the numbers"} <ArrowRight className="h-3.5 w-3.5 ml-2" />
        </Button>

        {result && (
          <div className="pt-4 mt-4 border-t border-white/10 grid grid-cols-2 gap-4" data-testid="roi-result">
            <KpiBig label="Projected leads / mo" value={result.outputs.estimated_leads.toLocaleString()} />
            <KpiBig label="Projected revenue" value={`₹${(result.outputs.estimated_revenue / 100000).toFixed(1)}L`} />
            <KpiBig label="Cost per lead" value={`₹${result.outputs.cost_per_lead.toLocaleString()}`} />
            <KpiBig label="Projected ROI" value={`${result.outputs.roi_percent}%`} accent />
          </div>
        )}
      </div>
    </div>
  );
}

function KpiBig({ label, value, accent }) {
  return (
    <div className={`p-4 border ${accent ? "border-[#C87A50] bg-[#C87A50]/10" : "border-white/10"}`}>
      <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/50">{label}</div>
      <div className={`font-display text-2xl mt-1 ${accent ? "text-[#C87A50]" : "text-white"}`}>{value}</div>
    </div>
  );
}

// ================= GMB Checker =================
export function GmbTool() {
  const [business, setBusiness] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [result, setResult] = useState(null);
  const [busy, setBusy] = useState(false);

  const check = async () => {
    if (!business.trim() || !city.trim() || !email.trim()) {
      return toast.error("Business name, city, and email are required");
    }
    setBusy(true);
    try {
      const r = await publicGmb({ email: email.trim(), name, business_name: business.trim(), city: city.trim() });
      setResult(r);
      toast.success("Checklist emailed");
    } catch (e) {
      toast.error(e?.response?.data?.detail || "Check failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="rounded-none bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10" data-testid="tool-gmb">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 grid place-items-center bg-white/10 border border-white/20">
          <MapPin className="h-5 w-5 text-[#C87A50]" />
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C87A50]">Tool 03</div>
          <h3 className="font-display text-2xl text-white mt-1 leading-tight">GMB Local Ranking Checker</h3>
        </div>
      </div>
      {!result ? (
        <div className="space-y-3">
          <Input
            value={business} onChange={(e) => setBusiness(e.target.value)}
            placeholder="Your business name"
            data-testid="gmb-tool-business"
            className="rounded-none bg-white/5 border-white/20 text-white placeholder:text-white/50 h-11"
          />
          <Input
            value={city} onChange={(e) => setCity(e.target.value)}
            placeholder="City (e.g. Bengaluru)"
            data-testid="gmb-tool-city"
            className="rounded-none bg-white/5 border-white/20 text-white placeholder:text-white/50 h-11"
          />
          <div className="grid grid-cols-2 gap-3">
            <Input
              value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
              data-testid="gmb-tool-name"
              className="rounded-none bg-white/5 border-white/20 text-white placeholder:text-white/50 h-11"
            />
            <Input
              value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Work email"
              data-testid="gmb-tool-email"
              className="rounded-none bg-white/5 border-white/20 text-white placeholder:text-white/50 h-11"
            />
          </div>
          <Button
            onClick={check}
            disabled={busy}
            data-testid="lm-gmb-checker-submit"
            className="w-full rounded-none bg-[#C87A50] hover:bg-[#B16840] text-white h-12 font-semibold uppercase tracking-[0.15em] text-xs"
          >
            {busy ? "Checking…" : "Check visibility"} <ArrowRight className="h-3.5 w-3.5 ml-2" />
          </Button>
        </div>
      ) : (
        <div data-testid="gmb-result">
          <div className="mb-3 text-sm text-white/80">
            Here are 10 signals Google uses to rank <b className="text-white">{business}</b> in {city}.
            Full checklist emailed.
          </div>
          <ul className="space-y-1.5">
            {result.checks.slice(0, 6).map((c, i) => (
              <li key={i} className="flex items-start gap-2 py-2 border-b border-white/5 last:border-0">
                <CheckCircle2 className="h-4 w-4 text-[#C87A50] mt-0.5 shrink-0" />
                <div className="text-sm text-white/90">
                  <div className="font-semibold">{c.label}</div>
                  <div className="text-xs text-white/50 mt-0.5">{c.hint}</div>
                </div>
              </li>
            ))}
          </ul>
          <Button
            onClick={() => { setResult(null); setBusiness(""); setCity(""); setName(""); setEmail(""); }}
            variant="outline"
            className="mt-4 rounded-none border-white/20 bg-transparent text-white hover:bg-white/10"
          >
            Check another business
          </Button>
        </div>
      )}
    </div>
  );
}