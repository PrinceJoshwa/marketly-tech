import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PublicLayout from "@/components/layout/PublicLayout";
import { CASE_STUDIES } from "@/data/caseStudies";
import ProjectShowcase from "@/components/landing/ProjectShowcase";

const INDUSTRIES = ["All", "Real Estate", "Interior Design", "E-commerce", "Automobile", "Retail"];

export default function Work() {
  return (
    <PublicLayout>
      <section className="bg-zinc-50 border-b border-zinc-200 py-16 md:py-24" data-testid="work-hero">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Our work</div>
          <h1 className="text-[42px] sm:text-[52px] lg:text-[64px] font-extrabold leading-[1.02] tracking-[-0.02em] text-[#0F1212] max-w-3xl">
            Selected case studies from the Marketly team.
          </h1>
          <p className="mt-6 text-lg text-zinc-600 max-w-2xl">
            Every case study here is real — real client, real campaign, real numbers. Click through for the full story behind each outcome.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {INDUSTRIES.map((i) => (
              <span key={i} className={`px-3.5 py-1.5 text-xs font-semibold rounded-sm border ${i === "All" ? "bg-[#0F1212] text-white border-[#0F1212]" : "bg-white border-zinc-300 text-zinc-700"}`}>
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white" data-testid="work-grid">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {CASE_STUDIES.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Link
                  to={`/work/${c.slug}`}
                  className="group block bg-white rounded-sm overflow-hidden border border-zinc-200 hover:border-[#134E35] hover:shadow-[0_16px_40px_-20px_rgba(19,78,53,0.3)] transition-all duration-400 h-full"
                  data-testid={`work-${c.slug}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                    <img src={c.cover} alt={c.client} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                      {c.tags.slice(0, 3).map((t) => (
                        <span key={t} className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-white/95 text-[#0F1212] rounded-sm">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C87A50]">Case Study · {c.industry}</div>
                    <h3 className="mt-3 text-2xl font-bold text-[#0F1212] leading-tight">{c.client}</h3>
                    <div className="mt-3 flex items-baseline gap-3">
                      <span className="text-4xl font-extrabold text-[#134E35] leading-none">{c.heroMetric}</span>
                      <span className="text-sm text-zinc-600">{c.heroMetricLabel}</span>
                    </div>
                    <p className="mt-3 text-[15px] text-zinc-600 leading-relaxed line-clamp-2">{c.summary}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#134E35] group-hover:gap-3 transition-all">
                      Read case study <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F1212]">Your story could be next.</h2>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 bg-[#0F1212] hover:bg-[#134E35] text-white px-6 h-12 text-sm font-semibold rounded-sm transition-colors">
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Live client websites we built */}
      <ProjectShowcase />

      <section className="py-16 bg-white border-t border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F1212]">Want the full creative portfolio?</h2>
          <p className="mt-3 text-zinc-600">Brand systems, social reels, hoardings, motion — all in one gallery.</p>
          <Link to="/portfolio" className="mt-6 inline-flex items-center gap-2 bg-white hover:bg-zinc-50 border border-zinc-300 hover:border-[#134E35] text-[#0F1212] px-6 h-12 text-sm font-semibold rounded-sm transition-colors">
            Browse portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}
