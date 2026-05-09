import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PublicLayout from "@/components/layout/PublicLayout";
import { SERVICES } from "@/data/publicContent";

export default function Services() {
  return (
    <PublicLayout>
      <section className="bg-zinc-50 border-b border-zinc-200 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Services</div>
          <h1 className="text-[42px] sm:text-[52px] lg:text-[64px] font-extrabold leading-[1.02] tracking-[-0.02em] text-[#0F1212] max-w-3xl">
            Seven capabilities. One team. Zero handoffs.
          </h1>
          <p className="mt-6 text-lg text-zinc-600 max-w-2xl">
            Paid, organic, local, creative, offline — every part of your growth stack, shipped under one roof. Scroll through, or jump to what you need.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <a key={s.slug} href={`#${s.slug}`} className="px-3.5 py-1.5 text-xs font-semibold rounded-sm bg-white border border-zinc-300 text-zinc-700 hover:border-[#134E35] hover:text-[#134E35] transition-colors">
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {SERVICES.map((s, i) => (
        <section
          key={s.slug}
          id={s.slug}
          className={`py-16 md:py-24 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50"} border-b border-zinc-200`}
          data-testid={`service-section-${s.slug}`}
        >
          <div className="max-w-[1400px] mx-auto px-5 md:px-10">
            <div className="grid md:grid-cols-12 gap-10">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="md:col-span-5"
              >
                <div className="text-sm font-mono font-semibold text-zinc-400">{s.num}</div>
                <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">{s.title}</h2>
                <p className="mt-5 text-base md:text-lg text-zinc-600 leading-relaxed">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#134E35]/5 border border-[#134E35]/15">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-500">Outcome</span>
                  <span className="text-sm font-bold text-[#134E35]">{s.metric}</span>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild className="rounded-sm bg-[#0F1212] hover:bg-[#134E35] text-white h-11 px-5 text-sm font-semibold">
                    <Link to="/contact">Talk to us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                  {s.slug === "seo" && (
                    <Button asChild variant="outline" className="rounded-sm border-zinc-300 bg-white text-[#0F1212] hover:bg-zinc-50 h-11 px-5 text-sm font-semibold">
                      <Link to="/services/seo">See full SEO page <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  )}
                </div>
              </motion.div>
              <div className="md:col-span-7">
                <div className="bg-white border border-zinc-200 rounded-sm p-8">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-5">What's included</div>
                  <ul className="space-y-3">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base text-[#0F1212]">
                        <CheckCircle2 className="h-5 w-5 text-[#134E35] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-[#0F1212] text-white">
        <div className="max-w-[1000px] mx-auto px-5 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-[1.1]">Not sure what you need?</h2>
          <p className="mt-5 text-lg text-white/70">We'll audit your setup and tell you the 2–3 levers that will move the fastest for your industry.</p>
          <Button asChild className="mt-8 rounded-sm bg-[#C87A50] hover:bg-[#B16840] text-white h-12 px-6 font-semibold">
            <Link to="/contact">Book a strategy call <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </PublicLayout>
  );
}
