import { motion } from "motion/react";
import { ArrowRight, Code2 } from "lucide-react";
import { WEBSITE_PROJECTS } from "@/data/projectShowcase";

export default function ProjectShowcase({ showIntro = true, limit }) {
  const items = limit ? WEBSITE_PROJECTS.slice(0, limit) : WEBSITE_PROJECTS;

  return (
    <section className="py-20 md:py-28 bg-white" data-testid="project-showcase">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {showIntro && (
          <div className="grid md:grid-cols-12 gap-8 mb-8 items-end">
            <div className="md:col-span-7">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4 flex items-center gap-2">
                <Code2 className="h-3.5 w-3.5" /> Websites we designed &amp; built
              </div>
              <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">
                Websites we designed and built.
              </h2>
            </div>
            <div className="md:col-span-5 md:pl-8">
              <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
                Live website builds across real estate, interiors, SaaS, automobile, water treatment, e-commerce, edu-tech, and higher education.
              </p>
            </div>
          </div>
        )}

        <div className="rounded-sm border border-zinc-200 bg-[#181A1A] p-5 md:p-8 shadow-[0_24px_70px_-42px_rgba(15,18,18,0.55)]">
          <div className="text-center mb-7">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">Our Portfolio</h3>
            <p className="mt-1 text-sm text-white/60">Explore our recent projects</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((p, i) => (
              <motion.a
                key={p.slug}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group relative block aspect-[16/10] overflow-hidden rounded-sm border border-white/10 bg-zinc-900"
                data-testid={`project-${p.slug}`}
              >
                <img
                  src={p.thumb}
                  alt={`${p.client} website preview`}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = p.fallback; }}
                  className="absolute inset-0 h-full w-full object-cover object-top opacity-80 transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
                <div className="absolute left-3 right-3 top-3 flex items-center justify-between gap-2">
                  <span className="rounded-sm bg-white/90 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#0F1212]">
                    {p.industry.split("·")[0].trim()}
                  </span>
                  <span className="rounded-sm bg-[#F5D400] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#0F1212]">
                    {p.year}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h4 className="text-base font-extrabold leading-tight">{p.client}</h4>
                  <p className="mt-1 line-clamp-2 text-xs text-white/65">{p.hero}</p>
                  <span className="mt-3 inline-flex items-center rounded-sm bg-[#F5D400] px-4 py-2 text-xs font-extrabold text-[#0F1212] transition-transform group-hover:-translate-y-0.5">
                    View More <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
