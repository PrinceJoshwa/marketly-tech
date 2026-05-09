import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PublicLayout from "@/components/layout/PublicLayout";
import ProjectShowcase from "@/components/landing/ProjectShowcase";
import { CREATIVE_PORTFOLIO } from "@/data/projectShowcase";

export default function Portfolio() {
  const [active, setActive] = useState("all");
  const visible = active === "all"
    ? CREATIVE_PORTFOLIO.items
    : CREATIVE_PORTFOLIO.items.filter((i) => i.cat === active);

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="bg-zinc-50 border-b border-zinc-200 py-16 md:py-24" data-testid="portfolio-hero">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Portfolio</div>
          <h1 className="text-[42px] sm:text-[52px] lg:text-[64px] font-extrabold leading-[1.02] tracking-[-0.02em] text-[#0F1212] max-w-4xl">
            Websites, brand systems, ad creative, hoardings — all the work we've shipped.
          </h1>
          <p className="mt-6 text-lg text-zinc-600 max-w-2xl leading-relaxed">
            Browse live client sites we've built, or scroll down into the creative gallery across brand identity, social, ads, print, and motion.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { k: "50+", v: "Brand projects shipped" },
              { k: "15+", v: "Live websites in production" },
              { k: "2M+", v: "Creative impressions / campaign" },
              { k: "60+", v: "Hoardings & OOH live" },
            ].map((s) => (
              <div key={s.v} className="p-5 bg-white border border-zinc-200 rounded-sm">
                <div className="text-3xl font-extrabold text-[#134E35]">{s.k}</div>
                <div className="mt-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live websites we built */}
      <ProjectShowcase />

      {/* Creative gallery */}
      <section className="py-20 md:py-28 bg-zinc-50 border-t border-zinc-200" data-testid="creative-gallery">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-12 gap-8 mb-10 items-end">
            <div className="md:col-span-7">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Creative gallery</div>
              <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">
                Work from the studio.
              </h2>
            </div>
            <div className="md:col-span-5 md:pl-8">
              <p className="text-base text-zinc-600 leading-relaxed">
                Filter by medium — or browse everything. All creative below was produced by our in-house studio team.
              </p>
            </div>
          </div>

          {/* Category filter chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CREATIVE_PORTFOLIO.categories.map((c) => {
              const activeCat = c.key === active;
              return (
                <button
                  key={c.key}
                  onClick={() => setActive(c.key)}
                  data-testid={`portfolio-filter-${c.key}`}
                  className={`px-4 py-2 text-xs font-semibold rounded-sm border transition-colors ${
                    activeCat ? "bg-[#0F1212] text-white border-[#0F1212]" : "bg-white border-zinc-300 text-zinc-700 hover:border-[#134E35] hover:text-[#134E35]"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          {/* Bento masonry */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:auto-rows-[220px]">
            <AnimatePresence mode="popLayout">
              {visible.map((item, i) => (
                <motion.div
                  key={`${item.title}-${active}`}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className={`group relative overflow-hidden rounded-sm bg-zinc-200 ${item.span || ""}`}
                  data-testid={`creative-item-${i}`}
                >
                  <img src={item.img} alt={item.title} loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-between text-white">
                    <div className="self-end">
                      <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C87A50]">{item.client}</div>
                      <div className="mt-1 text-sm md:text-base font-bold leading-tight max-w-xs">{item.title}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0F1212] hover:bg-[#134E35] text-white px-6 h-12 text-sm font-semibold rounded-sm transition-colors">
              Commission a project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
