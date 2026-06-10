// import { motion } from "motion/react";
// import { ExternalLink, ArrowRight, Code2, Sparkles } from "lucide-react";
// import { WEBSITE_PROJECTS } from "@/data/projectShowcase";

// /**
//  * Live-site project showcase used on Home + /work.
//  * Thumbnails pull from thum.io screenshot CDN with an Unsplash fallback on error.
//  */
// export default function ProjectShowcase({ showIntro = true, limit }) {
//   const items = limit ? WEBSITE_PROJECTS.slice(0, limit) : WEBSITE_PROJECTS;

//   return (
//     <section className="py-20 md:py-28 bg-white" data-testid="project-showcase">
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//         {showIntro && (
//           <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
//             <div className="md:col-span-7">
//               <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4 flex items-center gap-2">
//                 <Code2 className="h-3.5 w-3.5" /> Websites we designed &amp; built
//               </div>
//               <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">
//                 Websites we designed and built.
//               </h2>
//             </div>
//             <div className="md:col-span-5 md:pl-8">
//               <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
//                 Live website builds across real estate, interiors, SaaS, automobile, water treatment, e-commerce, edu-tech, and higher education.
//               </p>
//             </div>
//           </div>
//         )}

//         <div className="grid md:grid-cols-2 gap-5 md:gap-6">
//           {items.map((p, i) => (
//             <motion.a
//               key={p.slug}
//               href={p.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-80px" }}
//               transition={{ duration: 0.6, delay: i * 0.08 }}
//               className="group block bg-white rounded-sm overflow-hidden border border-zinc-200 hover:border-[#134E35] hover:shadow-[0_20px_48px_-24px_rgba(19,78,53,0.35)] transition-all duration-500"
//               data-testid={`project-${p.slug}`}
//             >
//               <div className="bg-zinc-100 border-b border-zinc-200 px-3 py-2 flex items-center gap-2">
//                 <div className="flex gap-1.5">
//                   <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
//                   <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
//                   <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
//                 </div>
//                 <div className="flex-1 flex justify-center">
//                   <div className="bg-white rounded-sm px-3 py-1 text-[11px] font-mono text-zinc-600 flex items-center gap-1.5 max-w-md w-full truncate">
//                     <span className="text-zinc-400">🔒</span>
//                     <span className="truncate">{p.url.replace(/^https?:\/\//, "")}</span>
//                   </div>
//                 </div>
//                 <ExternalLink className="h-3.5 w-3.5 text-zinc-400" />
//               </div>

//               <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
//                 <img
//                   src={p.thumb}
//                   alt={`${p.client} website preview`}
//                   loading="lazy"
//                   onError={(e) => { e.currentTarget.src = p.fallback; }}
//                   className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[1100ms] group-hover:scale-[1.03]"
//                 />
//                 <div className="absolute top-4 left-4 flex items-center gap-2">
//                   <span className="px-2.5 py-1 bg-[#134E35] text-white text-[10px] font-semibold uppercase tracking-wider rounded-sm flex items-center gap-1.5">
//                     <span className="h-1.5 w-1.5 rounded-full bg-[#C87A50] animate-pulse" /> Live
//                   </span>
//                   <span className="px-2.5 py-1 bg-white/95 backdrop-blur text-zinc-700 text-[10px] font-semibold uppercase tracking-wider rounded-sm">
//                     {p.year}
//                   </span>
//                 </div>
//               </div>

//               <div className="p-6 md:p-7">
//                 <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C87A50]">
//                   Client Website · {p.industry}
//                 </div>
//                 <h3 className="mt-2.5 text-xl md:text-2xl font-bold text-[#0F1212] leading-tight">{p.client}</h3>
//                 <p className="mt-2 text-[15px] text-zinc-600 leading-relaxed">{p.hero}</p>

//                 <div className="mt-4 p-3 rounded-sm bg-zinc-50 border border-zinc-200 flex items-start gap-2.5">
//                   <Sparkles className="h-4 w-4 shrink-0 text-[#C87A50] mt-0.5" />
//                   <div className="text-[13px] text-zinc-700 leading-relaxed">
//                     <span className="font-semibold text-[#0F1212]">Lead magnet · </span>{p.leadMagnet}
//                   </div>
//                 </div>

//                 <div className="mt-5 flex items-center justify-between gap-4">
//                   <div className="flex flex-wrap gap-1.5">
//                     {p.stack.slice(0, 3).map((s) => (
//                       <span key={s} className="px-2 py-0.5 text-[10px] font-mono bg-zinc-100 text-zinc-700 rounded-sm">{s}</span>
//                     ))}
//                   </div>
//                   <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#134E35] shrink-0 group-hover:gap-2.5 transition-all">
//                     Visit site <ArrowRight className="h-4 w-4" />
//                   </span>
//                 </div>
//               </div>
//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from "motion/react";
import { ExternalLink, ArrowRight, Code2, Sparkles, Lock } from "lucide-react";
import { WEBSITE_PROJECTS } from "@/data/projectShowcase";

/**
 * Live-site project showcase used on Home + /work.
 * Thumbnails pull from thum.io screenshot CDN with an Unsplash fallback on error.
 */
export default function ProjectShowcase({ showIntro = true, limit }) {
  const items = limit ? WEBSITE_PROJECTS.slice(0, limit) : WEBSITE_PROJECTS;

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden" data-testid="project-showcase">
      {/* Subtle light background texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{backgroundImage: "radial-gradient(circle, #070812 1px, transparent 1px)", backgroundSize: "32px 32px"}} />
      
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10">
        {showIntro && (
          <div className="grid md:grid-cols-12 gap-8 mb-16 items-end">
            <div className="md:col-span-7">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4 flex items-center gap-2">
                <Code2 className="h-3.5 w-3.5" /> Websites we designed &amp; built
              </div>
              <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#070812]">
                Systems built for scale.
              </h2>
            </div>
            <div className="md:col-span-5 md:pl-8">
              <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
                Live website builds across real estate, interiors, SaaS, automobile, water treatment, e-commerce, edu-tech, and higher education.
              </p>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {items.map((p, i) => (
            <motion.a
              key={p.slug}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-zinc-200 hover:border-[#FF6A3D]/40 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500"
              data-testid={`project-${p.slug}`}
            >
              {/* INSET IMAGE FRAME */}
              <div className="p-3 pb-0">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-200/50">
                  <img
                    src={p.thumb}
                    alt={`${p.client} website preview`}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = p.fallback; }}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[1.5s] group-hover:scale-[1.04]"
                  />
                  
                  {/* Floating Top Labels */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1.5 bg-white/95 backdrop-blur-md text-[#070812] text-[10px] font-bold uppercase tracking-wider rounded-lg flex items-center gap-1.5 shadow-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A3D] animate-pulse" /> Live
                    </span>
                  </div>

                  {/* Sleek Floating URL pill (Light Mode) */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[320px] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <div className="bg-white/95 backdrop-blur-xl border border-zinc-200 px-4 py-2.5 rounded-xl flex items-center justify-between shadow-[0_10px_30px_-10px_rgba(0,0,0,0.12)]">
                      <div className="flex items-center gap-2 overflow-hidden">
                        <Lock className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                        <span className="text-[11px] font-mono text-zinc-700 font-medium truncate">
                          {p.url.replace(/^https?:\/\//, "")}
                        </span>
                      </div>
                      <ExternalLink className="h-3.5 w-3.5 text-[#FF6A3D] shrink-0 ml-3" />
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTENT AREA */}
              <div className="p-7 md:p-9 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#FF6A3D]">
                      {p.industry}
                    </div>
                    <h3 className="mt-2 text-2xl md:text-3xl font-bold text-[#070812] leading-tight">
                      {p.client}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full border border-zinc-200 text-[10px] font-bold tracking-wider text-zinc-500 uppercase bg-zinc-50">
                    {p.year}
                  </span>
                </div>

                <p className="mt-4 text-[15px] text-zinc-600 leading-relaxed">
                  {p.hero}
                </p>

                {/* Elegant Lead Magnet Line */}
                <div className="mt-6 flex items-start gap-3 border-l-[3px] border-[#FF6A3D]/20 pl-4 py-0.5 group-hover:border-[#FF6A3D] transition-colors">
                  <Sparkles className="h-4 w-4 shrink-0 text-[#FF6A3D] mt-0.5" />
                  <div className="text-sm text-zinc-600 leading-relaxed">
                    <span className="font-semibold text-[#070812]">Lead magnet setup — </span>{p.leadMagnet}
                  </div>
                </div>

                <div className="mt-auto pt-8 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {p.stack.slice(0, 3).map((s) => (
                      <span key={s} className="px-2.5 py-1 text-[10px] font-mono font-medium bg-zinc-50 text-zinc-500 border border-zinc-200 rounded-lg">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="h-10 w-10 shrink-0 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center group-hover:bg-[#FF6A3D] group-hover:border-[#FF6A3D] transition-all duration-300 shadow-sm">
                    <ArrowRight className="h-4 w-4 text-[#070812] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}