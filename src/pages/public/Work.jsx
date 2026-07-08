// // import { Link } from "react-router-dom";
// // import { motion } from "motion/react";
// // import { ArrowRight, ArrowUpRight } from "lucide-react";
// // import PublicLayout from "@/components/layout/PublicLayout";
// // import { CASE_STUDIES } from "@/data/caseStudies";
// // import ProjectShowcase from "@/components/landing/ProjectShowcase";

// // const INDUSTRIES = ["All", "Real Estate", "Interior Design", "E-commerce", "Automobile", "Retail"];

// // export default function Work() {
// //   return (
// //     <PublicLayout>
// //       <section className="bg-zinc-50 border-b border-zinc-200 py-16 md:py-24" data-testid="work-hero">
// //         <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// //           <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Our work</div>
// //           <h1 className="text-[42px] sm:text-[52px] lg:text-[64px] font-extrabold leading-[1.02] tracking-[-0.02em] text-[#0F1212] max-w-3xl">
// //             Selected case studies from the Marketly team.
// //           </h1>
// //           <p className="mt-6 text-lg text-zinc-600 max-w-2xl">
// //             Every case study here is real — real client, real campaign, real numbers. Click through for the full story behind each outcome.
// //           </p>

// //           <div className="mt-10 flex flex-wrap gap-2">
// //             {INDUSTRIES.map((i) => (
// //               <span key={i} className={`px-3.5 py-1.5 text-xs font-semibold rounded-sm border ${i === "All" ? "bg-[#0F1212] text-white border-[#0F1212]" : "bg-white border-zinc-300 text-zinc-700"}`}>
// //                 {i}
// //               </span>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <section className="py-16 md:py-20 bg-white" data-testid="work-grid">
// //         <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// //           <div className="grid md:grid-cols-2 gap-6 md:gap-8">
// //             {CASE_STUDIES.map((c, i) => (
// //               <motion.div
// //                 key={c.slug}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true, margin: "-60px" }}
// //                 transition={{ duration: 0.5, delay: i * 0.06 }}
// //               >
// //                 <Link
// //                   to={`/work/${c.slug}`}
// //                   className="group block bg-white rounded-sm overflow-hidden border border-zinc-200 hover:border-[#134E35] hover:shadow-[0_16px_40px_-20px_rgba(19,78,53,0.3)] transition-all duration-400 h-full"
// //                   data-testid={`work-${c.slug}`}
// //                 >
// //                   <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
// //                     <img src={c.cover} alt={c.client} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
// //                     <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
// //                       {c.tags.slice(0, 3).map((t) => (
// //                         <span key={t} className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-white/95 text-[#0F1212] rounded-sm">{t}</span>
// //                       ))}
// //                     </div>
// //                   </div>
// //                   <div className="p-6 md:p-8">
// //                     <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C87A50]">Case Study · {c.industry}</div>
// //                     <h3 className="mt-3 text-2xl font-bold text-[#0F1212] leading-tight">{c.client}</h3>
// //                     <div className="mt-3 flex items-baseline gap-3">
// //                       <span className="text-4xl font-extrabold text-[#134E35] leading-none">{c.heroMetric}</span>
// //                       <span className="text-sm text-zinc-600">{c.heroMetricLabel}</span>
// //                     </div>
// //                     <p className="mt-3 text-[15px] text-zinc-600 leading-relaxed line-clamp-2">{c.summary}</p>
// //                     <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#134E35] group-hover:gap-3 transition-all">
// //                       Read case study <ArrowRight className="h-4 w-4" />
// //                     </div>
// //                   </div>
// //                 </Link>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <section className="py-16 bg-zinc-50 border-t border-zinc-200">
// //         <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-center">
// //           <h2 className="text-2xl md:text-3xl font-bold text-[#0F1212]">Your story could be next.</h2>
// //           <Link to="/contact" className="mt-6 inline-flex items-center gap-2 bg-[#0F1212] hover:bg-[#134E35] text-white px-6 h-12 text-sm font-semibold rounded-sm transition-colors">
// //             Start a project <ArrowUpRight className="h-4 w-4" />
// //           </Link>
// //         </div>
// //       </section>

// //       {/* Live client websites we built */}
// //       <ProjectShowcase />

// //       <section className="py-16 bg-white border-t border-zinc-200">
// //         <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-center">
// //           <h2 className="text-2xl md:text-3xl font-bold text-[#0F1212]">Want the full creative portfolio?</h2>
// //           <p className="mt-3 text-zinc-600">Brand systems, social reels, hoardings, motion — all in one gallery.</p>
// //           <Link to="/portfolio" className="mt-6 inline-flex items-center gap-2 bg-white hover:bg-zinc-50 border border-zinc-300 hover:border-[#134E35] text-[#0F1212] px-6 h-12 text-sm font-semibold rounded-sm transition-colors">
// //             Browse portfolio <ArrowRight className="h-4 w-4" />
// //           </Link>
// //         </div>
// //       </section>
// //     </PublicLayout>
// //   );
// // }
// import { Link } from "react-router-dom";
// import { motion } from "motion/react";
// import { ArrowRight, ArrowUpRight } from "lucide-react";
// import PublicLayout from "@/components/layout/PublicLayout";
// import { CASE_STUDIES } from "@/data/caseStudies";
// import ProjectShowcase from "@/components/landing/ProjectShowcase";

// const INDUSTRIES = ["All", "Real Estate", "Interior Design", "E-commerce", "Automobile", "Retail", "Technology", "Education"];

// export default function Work() {
//   return (
//     <PublicLayout>
//       {/* GRAND HERO WITH INDUSTRY TAGS */}
//       <section className="relative bg-[#070812] text-white pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden border-b border-white/5" data-testid="work-hero">
//         <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "64px 64px"}} />
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6A3D]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
//         <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="max-w-4xl"
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF6A3D]/10 border border-[#FF6A3D]/20 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A3D] mb-8">
//               Case Studies
//             </div>
//             <h1 className="text-[52px] sm:text-[64px] lg:text-[84px] font-extrabold leading-[0.95] tracking-[-0.03em] text-white">
//               Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">revenue.</span>
//             </h1>
//             <p className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl font-medium leading-relaxed">
//               Every case study here is real — real client, real campaign, real numbers. We don't just build websites; we build scalable growth engines.
//             </p>

//             {/* INDUSTRY FILTERS */}
//             <div className="mt-12 flex flex-wrap gap-2.5">
//               {INDUSTRIES.map((ind, i) => (
//                 <span 
//                   key={ind} 
//                   className={`px-4 py-2 text-xs font-bold rounded-full border transition-colors cursor-default ${
//                     i === 0 
//                       ? "bg-[#FF6A3D] text-[#070812] border-[#FF6A3D]" 
//                       : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-[#FF6A3D]"
//                   }`}
//                 >
//                   {ind}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* CASE STUDIES: ZIG-ZAG LAYOUT */}
//       <section className="py-24 md:py-32 bg-[#0A0D14]" data-testid="work-grid">
//         <div className="max-w-[1200px] mx-auto px-5 md:px-10">
//           <div className="space-y-32 md:space-y-40">
//             {CASE_STUDIES.map((c, i) => {
//               const isEven = i % 2 === 0;

//               return (
//                 <motion.div
//                   key={c.slug}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-100px" }}
//                   transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
//                   className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center group"
//                 >
//                   {/* IMAGE BLOCK */}
//                   <div className={`w-full lg:w-1/2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
//                     <Link to={`/work/${c.slug}`} className="block relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
//                       <img 
//                         src={c.cover} 
//                         alt={c.client} 
//                         className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105 opacity-80 group-hover:opacity-100" 
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-[#070812]/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
                      
//                       <div className="absolute top-5 left-5 flex flex-wrap gap-2">
//                         {c.tags.slice(0, 3).map((t) => (
//                           <span key={t} className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-[#070812]/80 backdrop-blur-md border border-white/10 text-white rounded-sm shadow-xl">
//                             {t}
//                           </span>
//                         ))}
//                       </div>
//                     </Link>
//                   </div>

//                   {/* CONTENT BLOCK */}
//                   <div className={`w-full lg:w-1/2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
//                     <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A3D] flex items-center gap-3">
//                       <span className="h-px w-8 bg-[#FF6A3D]" /> {c.industry}
//                     </div>
                    
//                     <h2 className="mt-5 text-3xl md:text-[44px] font-extrabold text-white leading-tight tracking-[-0.02em]">
//                       {c.client}
//                     </h2>
                    
//                     <p className="mt-6 text-lg text-white/60 leading-relaxed font-medium">
//                       {c.summary}
//                     </p>

//                     <div className="mt-10 pt-10 border-t border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
//                       <div>
//                         <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Primary Metric</span>
//                         <div className="flex items-baseline gap-3">
//                           <span className="text-5xl font-extrabold text-[#FF6A3D] leading-none tracking-tight">{c.heroMetric}</span>
//                           <span className="text-sm font-semibold text-white/80">{c.heroMetricLabel}</span>
//                         </div>
//                       </div>
                      
//                       <Link to={`/work/${c.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#FF6A3D] transition-colors pb-1 border-b border-white/20 hover:border-[#FF6A3D]">
//                         Read the full teardown <ArrowRight className="h-4 w-4" />
//                       </Link>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* PROJECT SHOWCASE (LIVE WEBSITES) */}
//       <div className="bg-[#070812] pt-24 pb-12 border-t border-white/5">
//         <div className="max-w-[1400px] mx-auto px-5 md:px-10 mb-10 text-center">
//           <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A3D] mb-4">Production</div>
//           <h2 className="text-3xl md:text-[40px] font-extrabold text-white tracking-[-0.02em]">Live client websites.</h2>
//         </div>
//         <ProjectShowcase />
//       </div>

//       {/* UNIFIED ARCHITECTURAL CTA (Replaces the awkward stacked white sections) */}
//       <section className="py-24 md:py-32 bg-[#0A0D14] text-white relative overflow-hidden border-t border-white/5">
//         <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none" style={{backgroundImage: "radial-gradient(circle at top right, #FF6A3D 0%, transparent 60%)"}} />
//         <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "64px 64px"}} />

//         <div className="max-w-[1000px] mx-auto px-5 md:px-10 text-center relative z-10">
//           <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A3D] mb-6">Next Steps</div>
//           <h2 className="text-[40px] md:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
//             Your story could be next.
//           </h2>
//           <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
//             Let's audit your current setup and find the leverage points. Or, keep exploring our creative archives to see more brand systems and campaigns.
//           </p>
          
//           <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
//             <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#FF6A3D] hover:bg-[#E85C31] text-white px-8 h-14 text-sm font-extrabold rounded-sm shadow-[0_20px_40px_-15px_rgba(255,106,61,0.5)] transition-all group w-full sm:w-auto">
//               Start a project <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//             </Link>
//             <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/20 hover:border-white/50 hover:bg-white/5 text-white px-8 h-14 text-sm font-bold rounded-sm transition-all w-full sm:w-auto">
//               Browse full portfolio <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </PublicLayout>
//   );
// }

import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PublicLayout from "@/components/layout/PublicLayout";
import { CASE_STUDIES } from "@/data/caseStudies";
import ProjectShowcase from "@/components/landing/ProjectShowcase";

const INDUSTRIES = ["All", "Real Estate", "Interior Design", "E-commerce", "Automobile", "Retail", "Technology", "Education"];

export default function Work() {
  return (
    <PublicLayout>
      {/* GRAND HERO WITH INDUSTRY TAGS */}
      <section className="relative bg-[#070812] text-white pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden border-b border-white/5" data-testid="work-hero">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "64px 64px"}} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6A3D]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF6A3D]/10 border border-[#FF6A3D]/20 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A3D] mb-8">
              Case Studies
            </div>
            {/* Preserved desktop scaling, added max-sm to fit mobile viewports */}
            <h1 className="max-sm:text-[44px] text-[52px] sm:text-[64px] lg:text-[84px] font-extrabold leading-[0.95] tracking-[-0.03em] text-white">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">revenue.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl font-medium leading-relaxed">
              Every case study here is real — real client, real campaign, real numbers. We don't just build websites; we build scalable growth engines.
            </p>

            {/* INDUSTRY FILTERS */}
            <div className="mt-12 flex flex-wrap gap-2.5">
              {INDUSTRIES.map((ind, i) => (
                <span 
                  key={ind} 
                  className={`px-4 py-2 text-xs font-bold rounded-full border transition-colors cursor-default ${
                    i === 0 
                      ? "bg-[#FF6A3D] text-[#070812] border-[#FF6A3D]" 
                      : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-[#FF6A3D]"
                  }`}
                >
                  {ind}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CASE STUDIES: ZIG-ZAG LAYOUT */}
      <section className="py-24 md:py-32 bg-[#0A0D14]" data-testid="work-grid">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="space-y-24 md:space-y-40">
            {CASE_STUDIES.map((c, i) => {
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={c.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                  className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center group"
                >
                  {/* IMAGE BLOCK */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <Link to={`/work/${c.slug}`} className="block relative max-sm:aspect-video aspect-[4/3] rounded-sm overflow-hidden border border-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
                      <img 
                        src={c.cover} 
                        alt={c.client} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070812]/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
                      
                      <div className="absolute top-5 left-5 pr-5 flex flex-wrap gap-2">
                        {c.tags.slice(0, 3).map((t) => (
                          <span key={t} className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider bg-[#070812]/80 backdrop-blur-md border border-white/10 text-white rounded-sm shadow-xl">
                            {t}
                          </span>
                        ))}
                      </div>
                    </Link>
                  </div>

                  {/* CONTENT BLOCK */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A3D] flex items-center gap-3">
                      <span className="h-px w-8 bg-[#FF6A3D]" /> {c.industry}
                    </div>
                    
                    <h2 className="mt-5 text-3xl md:text-[44px] font-extrabold text-white leading-tight tracking-[-0.02em]">
                      {c.client}
                    </h2>
                    
                    <p className="mt-6 text-lg text-white/60 leading-relaxed font-medium">
                      {c.summary}
                    </p>

                    <div className="mt-10 pt-8 sm:pt-10 border-t border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Primary Metric</span>
                        <div className="flex items-baseline gap-3">
                          <span className="text-4xl sm:text-5xl font-extrabold text-[#FF6A3D] leading-none tracking-tight">{c.heroMetric}</span>
                          <span className="text-sm font-semibold text-white/80">{c.heroMetricLabel}</span>
                        </div>
                      </div>
                      
                      <Link to={`/work/${c.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#FF6A3D] transition-colors pb-1 border-b border-white/20 hover:border-[#FF6A3D]">
                        Read the full teardown <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECT SHOWCASE (LIVE WEBSITES) */}
      <div className="bg-[#070812] pt-24 pb-12 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 mb-10 text-center">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A3D] mb-4">Production</div>
          <h2 className="text-3xl md:text-[40px] font-extrabold text-white tracking-[-0.02em]">Live client websites.</h2>
        </div>
        <ProjectShowcase />
      </div>

      {/* UNIFIED ARCHITECTURAL CTA */}
      <section className="py-24 md:py-32 bg-[#0A0D14] text-white relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none" style={{backgroundImage: "radial-gradient(circle at top right, #FF6A3D 0%, transparent 60%)"}} />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "64px 64px"}} />

        <div className="max-w-[1000px] mx-auto px-5 md:px-10 text-center relative z-10">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A3D] mb-6">Next Steps</div>
          <h2 className="text-[40px] md:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
            Your story could be next.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
            Let's audit your current setup and find the leverage points. Or, keep exploring our creative archives to see more brand systems and campaigns.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#FF6A3D] hover:bg-[#E85C31] text-white px-8 h-14 text-sm font-extrabold rounded-sm shadow-[0_20px_40px_-15px_rgba(255,106,61,0.5)] transition-all group max-sm:w-full">
              Start a project <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/20 hover:border-white/50 hover:bg-white/5 text-white px-8 h-14 text-sm font-bold rounded-sm transition-all max-sm:w-full">
              Browse full portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}