// // // // // // import { useState } from "react";
// // // // // // import { Link } from "react-router-dom";
// // // // // // import { motion, AnimatePresence } from "motion/react";
// // // // // // import { ArrowRight, ArrowUpRight } from "lucide-react";
// // // // // // import PublicLayout from "@/components/layout/PublicLayout";
// // // // // // import ProjectShowcase from "@/components/landing/ProjectShowcase";
// // // // // // import { CREATIVE_PORTFOLIO } from "@/data/projectShowcase";

// // // // // // export default function Portfolio() {
// // // // // //   const [active, setActive] = useState("all");
// // // // // //   const visible = active === "all"
// // // // // //     ? CREATIVE_PORTFOLIO.items
// // // // // //     : CREATIVE_PORTFOLIO.items.filter((i) => i.cat === active);

// // // // // //   return (
// // // // // //     <PublicLayout>
// // // // // //       {/* Hero */}
// // // // // //       <section className="bg-zinc-50 border-b border-zinc-200 py-16 md:py-24" data-testid="portfolio-hero">
// // // // // //         <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// // // // // //           <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Portfolio</div>
// // // // // //           <h1 className="text-[42px] sm:text-[52px] lg:text-[64px] font-extrabold leading-[1.02] tracking-[-0.02em] text-[#0F1212] max-w-4xl">
// // // // // //             Websites, brand systems, ad creative, hoardings — all the work we've shipped.
// // // // // //           </h1>
// // // // // //           <p className="mt-6 text-lg text-zinc-600 max-w-2xl leading-relaxed">
// // // // // //             Browse live client sites we've built, or scroll down into the creative gallery across brand identity, social, ads, print, and motion.
// // // // // //           </p>

// // // // // //           <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
// // // // // //             {[
// // // // // //               { k: "50+", v: "Brand projects shipped" },
// // // // // //               { k: "15+", v: "Live websites in production" },
// // // // // //               { k: "2M+", v: "Creative impressions / campaign" },
// // // // // //               { k: "60+", v: "Hoardings & OOH live" },
// // // // // //             ].map((s) => (
// // // // // //               <div key={s.v} className="p-5 bg-white border border-zinc-200 rounded-sm">
// // // // // //                 <div className="text-3xl font-extrabold text-[#134E35]">{s.k}</div>
// // // // // //                 <div className="mt-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">{s.v}</div>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* Live websites we built */}
// // // // // //       <ProjectShowcase />

// // // // // //       {/* Creative gallery */}
// // // // // //       <section className="py-20 md:py-28 bg-zinc-50 border-t border-zinc-200" data-testid="creative-gallery">
// // // // // //         <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// // // // // //           <div className="grid md:grid-cols-12 gap-8 mb-10 items-end">
// // // // // //             <div className="md:col-span-7">
// // // // // //               <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Creative gallery</div>
// // // // // //               <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">
// // // // // //                 Work from the studio.
// // // // // //               </h2>
// // // // // //             </div>
// // // // // //             <div className="md:col-span-5 md:pl-8">
// // // // // //               <p className="text-base text-zinc-600 leading-relaxed">
// // // // // //                 Filter by medium — or browse everything. All creative below was produced by our in-house studio team.
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Category filter chips */}
// // // // // //           <div className="flex flex-wrap gap-2 mb-10">
// // // // // //             {CREATIVE_PORTFOLIO.categories.map((c) => {
// // // // // //               const activeCat = c.key === active;
// // // // // //               return (
// // // // // //                 <button
// // // // // //                   key={c.key}
// // // // // //                   onClick={() => setActive(c.key)}
// // // // // //                   data-testid={`portfolio-filter-${c.key}`}
// // // // // //                   className={`px-4 py-2 text-xs font-semibold rounded-sm border transition-colors ${
// // // // // //                     activeCat ? "bg-[#0F1212] text-white border-[#0F1212]" : "bg-white border-zinc-300 text-zinc-700 hover:border-[#134E35] hover:text-[#134E35]"
// // // // // //                   }`}
// // // // // //                 >
// // // // // //                   {c.label}
// // // // // //                 </button>
// // // // // //               );
// // // // // //             })}
// // // // // //           </div>

// // // // // //           {/* Bento masonry */}
// // // // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:auto-rows-[220px]">
// // // // // //             <AnimatePresence mode="popLayout">
// // // // // //               {visible.map((item, i) => (
// // // // // //                 <motion.div
// // // // // //                   key={`${item.title}-${active}`}
// // // // // //                   layout
// // // // // //                   initial={{ opacity: 0, scale: 0.94 }}
// // // // // //                   animate={{ opacity: 1, scale: 1 }}
// // // // // //                   exit={{ opacity: 0, scale: 0.94 }}
// // // // // //                   transition={{ duration: 0.4, delay: i * 0.03 }}
// // // // // //                   className={`group relative overflow-hidden rounded-sm bg-zinc-200 ${item.span || ""}`}
// // // // // //                   data-testid={`creative-item-${i}`}
// // // // // //                 >
// // // // // //                   <img src={item.img} alt={item.title} loading="lazy"
// // // // // //                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]" />
// // // // // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
// // // // // //                   <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-between text-white">
// // // // // //                     <div className="self-end">
// // // // // //                       <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
// // // // // //                     </div>
// // // // // //                     <div>
// // // // // //                       <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C87A50]">{item.client}</div>
// // // // // //                       <div className="mt-1 text-sm md:text-base font-bold leading-tight max-w-xs">{item.title}</div>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </motion.div>
// // // // // //               ))}
// // // // // //             </AnimatePresence>
// // // // // //           </div>

// // // // // //           <div className="mt-16 text-center">
// // // // // //             <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0F1212] hover:bg-[#134E35] text-white px-6 h-12 text-sm font-semibold rounded-sm transition-colors">
// // // // // //               Commission a project <ArrowRight className="h-4 w-4" />
// // // // // //             </Link>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>
// // // // // //     </PublicLayout>
// // // // // //   );
// // // // // // }
// // // // // import { useState } from "react";
// // // // // import { Link } from "react-router-dom";
// // // // // import { motion, AnimatePresence } from "motion/react";
// // // // // import { ArrowRight, ArrowUpRight } from "lucide-react";
// // // // // import PublicLayout from "@/components/layout/PublicLayout";
// // // // // import ProjectShowcase from "@/components/landing/ProjectShowcase";
// // // // // import { CREATIVE_PORTFOLIO } from "@/data/projectShowcase";

// // // // // export default function Portfolio() {
// // // // //   const [active, setActive] = useState("all");
// // // // //   const visible = active === "all"
// // // // //     ? CREATIVE_PORTFOLIO.items
// // // // //     : CREATIVE_PORTFOLIO.items.filter((i) => i.cat === active);

// // // // //   return (
// // // // //     <PublicLayout>
// // // // //       {/* Hero */}
// // // // //       <section className="bg-[#070812] border-b border-white/10 py-16 md:py-24 text-white" data-testid="portfolio-hero">
// // // // //         <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// // // // //           <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4">Portfolio</div>
// // // // //           <h1 className="text-[42px] sm:text-[52px] lg:text-[64px] font-extrabold leading-[1.02] tracking-[-0.02em] text-white max-w-4xl">
// // // // //             Websites, brand systems, ad creative, hoardings — all the work we've shipped.
// // // // //           </h1>
// // // // //           <p className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">
// // // // //             Browse live client sites we've built, or scroll down into the creative gallery across brand identity, social, ads, print, and motion.
// // // // //           </p>

// // // // //           <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
// // // // //             {[
// // // // //               { k: "50+", v: "Brand projects shipped" },
// // // // //               { k: "15+", v: "Live websites in production" },
// // // // //               { k: "2M+", v: "Creative impressions / campaign" },
// // // // //               { k: "60+", v: "Hoardings & OOH live" },
// // // // //             ].map((s) => (
// // // // //               <div key={s.v} className="p-5 bg-white/5 border border-white/10 rounded-sm">
// // // // //                 <div className="text-3xl font-extrabold text-[#FF6A3D]">{s.k}</div>
// // // // //                 <div className="mt-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/50">{s.v}</div>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Live websites we built */}
// // // // //       <ProjectShowcase />

// // // // //       {/* Creative gallery */}
// // // // //       <section className="py-20 md:py-28 bg-[#070812] border-t border-white/10 text-white" data-testid="creative-gallery">
// // // // //         <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// // // // //           <div className="grid md:grid-cols-12 gap-8 mb-10 items-end">
// // // // //             <div className="md:col-span-7">
// // // // //               <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4">Creative gallery</div>
// // // // //               <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
// // // // //                 Work from the studio.
// // // // //               </h2>
// // // // //             </div>
// // // // //             <div className="md:col-span-5 md:pl-8">
// // // // //               <p className="text-base text-white/70 leading-relaxed">
// // // // //                 Filter by medium — or browse everything. All creative below was produced by our in-house studio team.
// // // // //               </p>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Category filter chips */}
// // // // //           <div className="flex flex-wrap gap-2 mb-10">
// // // // //             {CREATIVE_PORTFOLIO.categories.map((c) => {
// // // // //               const activeCat = c.key === active;
// // // // //               return (
// // // // //                 <button
// // // // //                   key={c.key}
// // // // //                   onClick={() => setActive(c.key)}
// // // // //                   data-testid={`portfolio-filter-${c.key}`}
// // // // //                   className={`px-4 py-2 text-xs font-semibold rounded-sm border transition-colors ${
// // // // //                     activeCat ? "bg-[#FF6A3D] text-[#070812] border-[#FF6A3D]" : "bg-white/5 border-white/10 text-white hover:border-[#FF6A3D] hover:text-[#FF6A3D]"
// // // // //                   }`}
// // // // //                 >
// // // // //                   {c.label}
// // // // //                 </button>
// // // // //               );
// // // // //             })}
// // // // //           </div>

// // // // //           {/* Bento masonry */}
// // // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:auto-rows-[220px]">
// // // // //             <AnimatePresence mode="popLayout">
// // // // //               {visible.map((item, i) => (
// // // // //                 <motion.div
// // // // //                   key={`${item.title}-${active}`}
// // // // //                   layout
// // // // //                   initial={{ opacity: 0, scale: 0.94 }}
// // // // //                   animate={{ opacity: 1, scale: 1 }}
// // // // //                   exit={{ opacity: 0, scale: 0.94 }}
// // // // //                   transition={{ duration: 0.4, delay: i * 0.03 }}
// // // // //                   className={`group relative overflow-hidden rounded-sm bg-[#0A0D14] border border-white/5 ${item.span || ""}`}
// // // // //                   data-testid={`creative-item-${i}`}
// // // // //                 >
// // // // //                   <img src={item.img} alt={item.title} loading="lazy"
// // // // //                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]" />
// // // // //                   <div className="absolute inset-0 bg-gradient-to-t from-[#070812]/90 via-[#070812]/30 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
// // // // //                   <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-between text-white">
// // // // //                     <div className="self-end">
// // // // //                       <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 text-[#FF6A3D]" />
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#FF6A3D]">{item.client}</div>
// // // // //                       <div className="mt-1 text-sm md:text-base font-bold leading-tight max-w-xs">{item.title}</div>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </motion.div>
// // // // //               ))}
// // // // //             </AnimatePresence>
// // // // //           </div>

// // // // //           <div className="mt-16 text-center">
// // // // //             <Link to="/contact" className="inline-flex items-center gap-2 bg-[#FF6A3D] hover:bg-[#E85C31] text-white px-6 h-12 text-sm font-semibold rounded-sm transition-colors">
// // // // //               Commission a project <ArrowRight className="h-4 w-4" />
// // // // //             </Link>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>
// // // // //     </PublicLayout>
// // // // //   );
// // // // // }

// // // // import { useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import { motion, AnimatePresence } from "motion/react";
// // // // import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
// // // // import PublicLayout from "@/components/layout/PublicLayout";
// // // // import ProjectShowcase from "@/components/landing/ProjectShowcase";
// // // // import { CREATIVE_PORTFOLIO, HOARDINGS, PRINTABLES, SOCIAL_ADS } from "@/data/projectShowcase";

// // // // // ─── Shared fade-in ───────────────────────────────────────────────────────────
// // // // function FadeIn({ children, delay = 0, className = "" }) {
// // // //   return (
// // // //     <motion.div
// // // //       initial={{ opacity: 0, y: 18 }}
// // // //       whileInView={{ opacity: 1, y: 0 }}
// // // //       viewport={{ once: true, margin: "-50px" }}
// // // //       transition={{ duration: 0.55, delay, ease: [0.25, 1, 0.5, 1] }}
// // // //       className={className}
// // // //     >
// // // //       {children}
// // // //     </motion.div>
// // // //   );
// // // // }

// // // // // ─── Journey badge ────────────────────────────────────────────────────────────
// // // // const BADGE = {
// // // //   design:  { label: "Design",    cls: "bg-indigo-950 text-indigo-300 border-indigo-800" },
// // // //   mockup:  { label: "Mockup",    cls: "bg-emerald-950 text-emerald-300 border-emerald-800" },
// // // //   real:    { label: "Installed", cls: "bg-orange-950 text-orange-300 border-orange-800" },
// // // // };
// // // // function Badge({ type }) {
// // // //   const b = BADGE[type] || BADGE.design;
// // // //   return (
// // // //     <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${b.cls}`}>
// // // //       {b.label}
// // // //     </span>
// // // //   );
// // // // }

// // // // // ─── Resolve image ────────────────────────────────────────────────────────────
// // // // function img(item) {
// // // //   if (item.imgKey) return `/uploads/${item.imgKey}.jpeg`;
// // // //   return item.remoteImg || "";
// // // // }
// // // // function fallback(item, e) {
// // // //   if (item.remoteImg) e.currentTarget.src = item.remoteImg;
// // // // }

// // // // // ─── Section intro ────────────────────────────────────────────────────────────
// // // // function Intro({ tag, title, sub }) {
// // // //   return (
// // // //     <FadeIn className="mb-12">
// // // //       <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-3">{tag}</p>
// // // //       <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-10">
// // // //         <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight flex-1">{title}</h2>
// // // //         {sub && <p className="text-sm text-white/50 leading-relaxed md:max-w-xs">{sub}</p>}
// // // //       </div>
// // // //     </FadeIn>
// // // //   );
// // // // }

// // // // // ─────────────────────────────────────────────────────────────────────────────
// // // // // LOGO SECTION
// // // // // ─────────────────────────────────────────────────────────────────────────────
// // // // const LOGOS = [
// // // //   { id: "rrl",    client: "RRL Builders",    industry: "Real Estate",    palette: ["#C9A84C","#070812","#FFFFFF"], deliverables: ["Wordmark","Icon","Brand Manual"],   preview: "https://images.unsplash.com/photo-1618005182384-5c39e8a6e64c?w=600&q=80" },
// // // //   { id: "rake",   client: "Rakepto",         industry: "EdTech",         palette: ["#E84A1A","#0B5BD3","#FFFFFF"], deliverables: ["Logomark","Colour System","Type"],  preview: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80" },
// // // //   { id: "dhive",  client: "Designhive",      industry: "Interior Design",palette: ["#C87A50","#1A1208","#F5ECD7"], deliverables: ["Wordmark","Monogram","Stationery"],preview: "https://images.unsplash.com/photo-1634224143538-ce0221abf732?w=600&q=80" },
// // // //   { id: "cpedia", client: "CollegePedia",    industry: "EdTech",         palette: ["#059669","#0F2040","#FFFFFF"], deliverables: ["Logomark","Guidelines"],            preview: "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=600&q=80" },
// // // // ];

// // // // function LogoSection() {
// // // //   return (
// // // //     <section id="logo-design" className="py-20 bg-[#070812] border-t border-white/8">
// // // //       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// // // //         <Intro
// // // //           tag="Logo Designing"
// // // //           title="From concept to execution, we handle everything."
// // // //           sub="Full brand identity — logo, colour system, type pairing, and usage guidelines."
// // // //         />

// // // //         {/* Process strip */}
// // // //         <FadeIn delay={0.05} className="mb-10">
// // // //           <div className="flex items-center gap-0 overflow-x-auto pb-2 scrollbar-none">
// // // //             {["Discovery","Sketches","Digital","Colour & Type","Final Delivery"].map((s, i) => (
// // // //               <div key={s} className="flex items-center shrink-0">
// // // //                 <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-white/60 whitespace-nowrap">
// // // //                   <span className="text-[#FF6A3D] mr-1.5">0{i+1}</span>{s}
// // // //                 </div>
// // // //                 {i < 4 && <span className="mx-1.5 text-white/20 text-xs">→</span>}
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </FadeIn>

// // // //         {/* Cards — compact horizontal layout */}
// // // //         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
// // // //           {LOGOS.map((l, i) => (
// // // //             <FadeIn key={l.id} delay={i * 0.06}>
// // // //               <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/40 transition-all duration-400">
// // // //                 {/* Thumbnail — fixed short height, object-cover */}
// // // //                 <div className="relative h-36 overflow-hidden bg-[#0F1220]">
// // // //                   <img
// // // //                     src={l.preview}
// // // //                     alt={l.client}
// // // //                     loading="lazy"
// // // //                     className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-[1.04] transition-all duration-500"
// // // //                   />
// // // //                   <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D18] to-transparent" />
// // // //                   {/* Palette */}
// // // //                   <div className="absolute bottom-3 left-3 flex gap-1.5">
// // // //                     {l.palette.map(hex => (
// // // //                       <span key={hex} className="h-4 w-4 rounded-full border border-white/25 shadow" style={{background:hex}} />
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>
// // // //                 {/* Info */}
// // // //                 <div className="p-4">
// // // //                   <div className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D]">{l.industry}</div>
// // // //                   <div className="mt-1 text-sm font-bold text-white">{l.client}</div>
// // // //                   <div className="mt-2.5 flex flex-wrap gap-1">
// // // //                     {l.deliverables.map(d => (
// // // //                       <span key={d} className="px-1.5 py-0.5 text-[10px] font-mono bg-white/5 text-white/40 border border-white/8 rounded">
// // // //                         {d}
// // // //                       </span>
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </FadeIn>
// // // //           ))}
// // // //         </div>
// // // //         <FadeIn delay={0.2}>
// // // //           <p className="mt-6 text-xs text-white/25 text-center">Full brand decks available on request</p>
// // // //         </FadeIn>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // // ─────────────────────────────────────────────────────────────────────────────
// // // // // HOARDINGS & BANNERS
// // // // // Design → Mockup → Installed, shown as compact cards in campaign rows
// // // // // ─────────────────────────────────────────────────────────────────────────────

// // // // /**
// // // //  * One campaign row — items shown as fixed-height thumbnail cards.
// // // //  * Aspect ratio is used only as `object-position` hint, not to set frame height.
// // // //  */
// // // // function CampaignRow({ title, client, items }) {
// // // //   return (
// // // //     <div className="mb-10">
// // // //       {/* Row header */}
// // // //       <div className="flex items-center gap-3 mb-4">
// // // //         <div>
// // // //           <span className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D]">{client}</span>
// // // //           <h3 className="text-sm font-bold text-white mt-0.5">{title}</h3>
// // // //         </div>
// // // //         {/* Journey pills */}
// // // //         <div className="ml-auto flex items-center gap-1.5">
// // // //           {items.map((item, i) => (
// // // //             <span key={item.id} className="flex items-center gap-1">
// // // //               <Badge type={item.type} />
// // // //               {i < items.length - 1 && <ArrowRight className="h-3 w-3 text-white/20" />}
// // // //             </span>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* Cards grid — all same height, images cropped */}
// // // //       <div className={`grid gap-3 ${items.length === 2 ? "grid-cols-2" : items.length === 3 ? "grid-cols-3" : "grid-cols-2 md:grid-cols-4"}`}>
// // // //         {items.map((item, i) => (
// // // //           <FadeIn key={item.id} delay={i * 0.07}>
// // // //             <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/35 transition-all duration-400">
// // // //               {/* Fixed-height thumbnail — portrait images crop from top */}
// // // //               <div className="relative h-48 overflow-hidden bg-[#0F1220]">
// // // //                 <img
// // // //                   src={img(item)}
// // // //                   alt={item.caption}
// // // //                   loading="lazy"
// // // //                   onError={(e) => fallback(item, e)}
// // // //                   className={`absolute inset-0 w-full h-full object-cover ${item.aspect === "portrait" ? "object-top" : "object-center"} group-hover:scale-[1.04] transition-transform duration-500`}
// // // //                 />
// // // //                 <div className="absolute top-2.5 left-2.5">
// // // //                   <Badge type={item.type} />
// // // //                 </div>
// // // //               </div>
// // // //               {/* Caption */}
// // // //               <div className="px-3 py-2.5">
// // // //                 <div className="text-[10px] font-semibold text-white/35 truncate">{item.project}</div>
// // // //                 <p className="mt-0.5 text-[11px] text-white/55 leading-snug line-clamp-2">{item.caption}</p>
// // // //               </div>
// // // //             </div>
// // // //           </FadeIn>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // function HoardingsSection() {
// // // //   const nc216 = HOARDINGS.filter(h => h.project.startsWith("NC216"));
// // // //   const rrlOther = HOARDINGS.filter(h => !h.project.startsWith("NC216") && !h.project.includes("Palm") && h.client === "RRL Builders & Developers");
// // // //   const palm = HOARDINGS.filter(h => h.project.includes("Palm Altezze"));
// // // //   const rakepto = HOARDINGS.filter(h => h.client === "Rakepto");

// // // //   return (
// // // //     <section id="hoardings" className="py-20 bg-[#08090F] border-t border-white/8">
// // // //       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// // // //         <Intro
// // // //           tag="Hoardings & Banners"
// // // //           title="From screen to street."
// // // //           sub="Design file → print mockup → real world installation. We handle the full chain."
// // // //         />

// // // //         {/* Legend */}
// // // //         <FadeIn delay={0.04} className="mb-10">
// // // //           <div className="flex flex-wrap items-center gap-2 text-[11px]">
// // // //             {Object.entries(BADGE).map(([k,v]) => (
// // // //               <span key={k} className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded border font-semibold ${v.cls}`}>
// // // //                 <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />{v.label}
// // // //               </span>
// // // //             ))}
// // // //             <span className="ml-1 text-white/25">shows where each piece lives in the production journey</span>
// // // //           </div>
// // // //         </FadeIn>

// // // //         <CampaignRow title="NC216 EOI Campaign" client="RRL Builders & Developers" items={nc216} />
// // // //         {rrlOther.length > 0 && <CampaignRow title="Portfolio Flyer & Event Installation" client="RRL Builders & Developers" items={rrlOther} />}
// // // //         {palm.length > 0 && <CampaignRow title="Palm Altezze — Pole Signage" client="RRL Builders & Developers" items={palm} />}
// // // //         {rakepto.length > 0 && <CampaignRow title="Brand Signage" client="Rakepto" items={rakepto} />}
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // // ─────────────────────────────────────────────────────────────────────────────
// // // // // PRINTABLES
// // // // // ─────────────────────────────────────────────────────────────────────────────
// // // // function PrintablesSection() {
// // // //   return (
// // // //     <section id="printables" className="py-20 bg-[#070812] border-t border-white/8">
// // // //       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// // // //         <Intro
// // // //           tag="Printables"
// // // //           title="Print-ready, always."
// // // //           sub="Brochures, flyers, bifolds — designed at bleed, exported at 300 DPI."
// // // //         />

// // // //         <div className="grid sm:grid-cols-3 gap-5">
// // // //           {PRINTABLES.map((item, i) => (
// // // //             <FadeIn key={item.id} delay={i * 0.08}>
// // // //               <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/35 transition-all duration-400">
// // // //                 {/* Thumbnail — fixed height, portrait images crop from top */}
// // // //                 <div className="relative h-52 overflow-hidden bg-[#0F1220]">
// // // //                   <img
// // // //                     src={img(item)}
// // // //                     alt={item.title}
// // // //                     loading="lazy"
// // // //                     onError={(e) => fallback(item, e)}
// // // //                     className={`absolute inset-0 w-full h-full object-cover ${item.aspect === "portrait" ? "object-top" : "object-center"} group-hover:scale-[1.03] transition-transform duration-500`}
// // // //                   />
// // // //                   {/* Type chip top-right */}
// // // //                   <div className="absolute top-2.5 right-2.5">
// // // //                     <span className="px-2 py-0.5 rounded bg-[#070812]/80 backdrop-blur text-[9px] font-mono text-white/60 border border-white/10">
// // // //                       {item.type}
// // // //                     </span>
// // // //                   </div>
// // // //                   {/* Print-ready bottom-left */}
// // // //                   <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-700/40 text-[9px] font-semibold text-emerald-300">
// // // //                     <CheckCircle2 className="h-2.5 w-2.5" /> Print-ready
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="px-4 py-3">
// // // //                   <div className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D]">{item.client}</div>
// // // //                   <div className="mt-0.5 text-sm font-bold text-white">{item.title}</div>
// // // //                   <p className="mt-1 text-[11px] text-white/45 leading-snug">{item.caption}</p>
// // // //                 </div>
// // // //               </div>
// // // //             </FadeIn>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // // ─────────────────────────────────────────────────────────────────────────────
// // // // // SOCIAL & ADS
// // // // // ─────────────────────────────────────────────────────────────────────────────
// // // // const PLATFORM_CLR = {
// // // //   "Meta / Instagram": "#E1306C",
// // // //   "Meta / Facebook": "#1877F2",
// // // //   "Digital Hoarding": "#FF6A3D",
// // // //   "On-site": "#059669",
// // // //   "Outdoor": "#7C3AED",
// // // //   "Retail / Showroom": "#C87A50",
// // // // };

// // // // function SocialAdsSection() {
// // // //   const squares  = SOCIAL_ADS.filter(a => a.aspect === "square");
// // // //   const landscape = SOCIAL_ADS.filter(a => a.aspect === "landscape");
// // // //   const portrait  = SOCIAL_ADS.filter(a => a.aspect === "portrait");

// // // //   const AdCard = ({ item, thumbH = "h-48" }) => (
// // // //     <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/35 transition-all duration-400">
// // // //       <div className={`relative ${thumbH} overflow-hidden bg-[#0F1220]`}>
// // // //         <img
// // // //           src={img(item)}
// // // //           alt={item.title}
// // // //           loading="lazy"
// // // //           onError={(e) => fallback(item, e)}
// // // //           className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
// // // //         />
// // // //         {/* Platform pill */}
// // // //         <div className="absolute top-2.5 left-2.5">
// // // //           <span
// // // //             className="px-2 py-0.5 rounded text-[9px] font-bold text-white uppercase tracking-wide"
// // // //             style={{ background: PLATFORM_CLR[item.platform] || "#FF6A3D" }}
// // // //           >
// // // //             {item.platform}
// // // //           </span>
// // // //         </div>
// // // //       </div>
// // // //       <div className="px-3 py-2.5">
// // // //         <div className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D] truncate">{item.client}</div>
// // // //         <div className="mt-0.5 text-sm font-bold text-white leading-tight">{item.title}</div>
// // // //         <p className="mt-0.5 text-[11px] text-white/45 leading-snug line-clamp-2">{item.caption}</p>
// // // //         <span className="mt-2 inline-block px-1.5 py-0.5 rounded bg-white/5 text-[9px] font-mono text-white/35 border border-white/8">{item.type}</span>
// // // //       </div>
// // // //     </div>
// // // //   );

// // // //   return (
// // // //     <section id="social-ads" className="py-20 bg-[#08090F] border-t border-white/8">
// // // //       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// // // //         <Intro
// // // //           tag="Social Media & Ad Posters"
// // // //           title="Creatives that stop the scroll."
// // // //           sub="Social ads, digital OOH, and campaign posters — designed to convert."
// // // //         />

// // // //         {/* Social / Meta — 2 col */}
// // // //         {squares.length > 0 && (
// // // //           <div className="mb-10">
// // // //             <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mb-4">Social Media Creatives</p>
// // // //             <div className="grid sm:grid-cols-2 gap-4">
// // // //               {squares.map((item, i) => (
// // // //                 <FadeIn key={item.id} delay={i * 0.08}>
// // // //                   <AdCard item={item} thumbH="h-56" />
// // // //                 </FadeIn>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         )}

// // // //         {/* Landscape OOH — 2 col */}
// // // //         {landscape.length > 0 && (
// // // //           <div className="mb-10">
// // // //             <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mb-4">Outdoor & Billboard Creatives</p>
// // // //             <div className="grid sm:grid-cols-2 gap-4">
// // // //               {landscape.map((item, i) => (
// // // //                 <FadeIn key={item.id} delay={i * 0.08}>
// // // //                   <AdCard item={item} thumbH="h-44" />
// // // //                 </FadeIn>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         )}

// // // //         {/* Portrait / vertical — 4 col */}
// // // //         {portrait.length > 0 && (
// // // //           <div>
// // // //             <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mb-4">Digital & Site Hoardings</p>
// // // //             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// // // //               {portrait.map((item, i) => (
// // // //                 <FadeIn key={item.id} delay={i * 0.07}>
// // // //                   <AdCard item={item} thumbH="h-48" />
// // // //                 </FadeIn>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // // ─────────────────────────────────────────────────────────────────────────────
// // // // // LEGACY CREATIVE GALLERY
// // // // // ─────────────────────────────────────────────────────────────────────────────
// // // // function CreativeGallery() {
// // // //   const [active, setActive] = useState("all");
// // // //   const visible = active === "all"
// // // //     ? CREATIVE_PORTFOLIO.items
// // // //     : CREATIVE_PORTFOLIO.items.filter(i => i.cat === active);

// // // //   return (
// // // //     <section id="gallery" className="py-20 bg-[#070812] border-t border-white/8" data-testid="creative-gallery">
// // // //       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// // // //         <FadeIn>
// // // //           <div className="grid md:grid-cols-12 gap-6 mb-10 items-end">
// // // //             <div className="md:col-span-7">
// // // //               <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-3">Creative Gallery</p>
// // // //               <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-white">Work from the studio.</h2>
// // // //             </div>
// // // //             <p className="md:col-span-5 md:pl-8 text-sm text-white/50 leading-relaxed">
// // // //               Filter by medium — all creative produced by our in-house studio team.
// // // //             </p>
// // // //           </div>
// // // //         </FadeIn>

// // // //         <div className="flex flex-wrap gap-2 mb-8">
// // // //           {CREATIVE_PORTFOLIO.categories.map(c => (
// // // //             <button
// // // //               key={c.key}
// // // //               onClick={() => setActive(c.key)}
// // // //               data-testid={`portfolio-filter-${c.key}`}
// // // //               className={`px-3.5 py-1.5 text-xs font-semibold rounded border transition-colors ${
// // // //                 c.key === active
// // // //                   ? "bg-[#FF6A3D] text-[#070812] border-[#FF6A3D]"
// // // //                   : "bg-white/5 border-white/10 text-white hover:border-[#FF6A3D] hover:text-[#FF6A3D]"
// // // //               }`}
// // // //             >
// // // //               {c.label}
// // // //             </button>
// // // //           ))}
// // // //         </div>

// // // //         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:auto-rows-[200px]">
// // // //           <AnimatePresence mode="popLayout">
// // // //             {visible.map((item, i) => (
// // // //               <motion.div
// // // //                 key={`${item.title}-${active}`}
// // // //                 layout
// // // //                 initial={{ opacity: 0, scale: 0.95 }}
// // // //                 animate={{ opacity: 1, scale: 1 }}
// // // //                 exit={{ opacity: 0, scale: 0.95 }}
// // // //                 transition={{ duration: 0.35, delay: i * 0.025 }}
// // // //                 className={`group relative overflow-hidden rounded bg-[#0A0D14] border border-white/5 ${item.span || ""}`}
// // // //                 data-testid={`creative-item-${i}`}
// // // //               >
// // // //                 <img
// // // //                   src={item.img}
// // // //                   alt={item.title}
// // // //                   loading="lazy"
// // // //                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
// // // //                 />
// // // //                 <div className="absolute inset-0 bg-gradient-to-t from-[#070812]/90 via-[#070812]/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-400" />
// // // //                 <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
// // // //                   <div className="self-end">
// // // //                     <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#FF6A3D] transition-all duration-400" />
// // // //                   </div>
// // // //                   <div>
// // // //                     <div className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D]">{item.client}</div>
// // // //                     <div className="mt-0.5 text-sm font-bold leading-tight">{item.title}</div>
// // // //                   </div>
// // // //                 </div>
// // // //               </motion.div>
// // // //             ))}
// // // //           </AnimatePresence>
// // // //         </div>

// // // //         <div className="mt-14 text-center">
// // // //           <Link
// // // //             to="/contact"
// // // //             className="inline-flex items-center gap-2 bg-[#FF6A3D] hover:bg-[#E85C31] text-white px-6 h-11 text-sm font-semibold rounded transition-colors"
// // // //           >
// // // //             Commission a project <ArrowRight className="h-4 w-4" />
// // // //           </Link>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // // ─────────────────────────────────────────────────────────────────────────────
// // // // // PAGE ROOT
// // // // // ─────────────────────────────────────────────────────────────────────────────
// // // // export default function Portfolio() {
// // // //   return (
// // // //     <PublicLayout>
// // // //       {/* Hero */}
// // // //       <section className="bg-[#070812] border-b border-white/8 py-16 md:py-24 text-white relative overflow-hidden" data-testid="portfolio-hero">
// // // //         <div className="absolute inset-0 opacity-[0.022] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
// // // //         <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative">
// // // //           <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4">Portfolio</p>
// // // //           <h1 className="text-[38px] sm:text-[52px] lg:text-[62px] font-extrabold leading-[1.02] tracking-[-0.02em] text-white max-w-4xl">
// // // //             Websites, brand systems, ad creative, hoardings — all the work we've shipped.
// // // //           </h1>
// // // //           <p className="mt-5 text-base text-white/55 max-w-xl leading-relaxed">
// // // //             Browse live client sites, then see how a design travels from screen to standee, billboard, brochure, or social post.
// // // //           </p>

// // // //           {/* Stats */}
// // // //           <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
// // // //             {[
// // // //               { k: "50+", v: "Brand projects shipped" },
// // // //               { k: "15+", v: "Live websites" },
// // // //               { k: "2M+", v: "Creative impressions / campaign" },
// // // //               { k: "60+", v: "Hoardings & OOH live" },
// // // //             ].map(s => (
// // // //               <div key={s.v} className="p-4 bg-white/5 border border-white/8 rounded-lg">
// // // //                 <div className="text-2xl font-extrabold text-[#FF6A3D]">{s.k}</div>
// // // //                 <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/35">{s.v}</div>
// // // //               </div>
// // // //             ))}
// // // //           </div>

// // // //           {/* Jump links */}
// // // //           <div className="mt-7 flex flex-wrap gap-2">
// // // //             {[
// // // //               ["#websites","Websites"],["#logo-design","Logo Design"],
// // // //               ["#hoardings","Hoardings"],["#printables","Printables"],
// // // //               ["#social-ads","Social & Ads"],["#gallery","Gallery"],
// // // //             ].map(([href, label]) => (
// // // //               <a key={href} href={href} className="px-3 py-1 text-[11px] font-semibold rounded-full border border-white/12 text-white/50 hover:border-[#FF6A3D] hover:text-[#FF6A3D] transition-colors">
// // // //                 {label}
// // // //               </a>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       <div id="websites"><ProjectShowcase /></div>
// // // //       <LogoSection />
// // // //       <HoardingsSection />
// // // //       <PrintablesSection />
// // // //       <SocialAdsSection />
// // // //       <CreativeGallery />
// // // //     </PublicLayout>
// // // //   );
// // // // }

// // // import { useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import { motion, AnimatePresence } from "motion/react";
// // // import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
// // // import PublicLayout from "@/components/layout/PublicLayout";
// // // import ProjectShowcase from "@/components/landing/ProjectShowcase";
// // // import { CREATIVE_PORTFOLIO, HOARDINGS, PRINTABLES, SOCIAL_ADS } from "@/data/projectShowcase";

// // // // ─── Shared fade-in ───────────────────────────────────────────────────────────
// // // function FadeIn({ children, delay = 0, className = "" }) {
// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0, y: 24, scale: 0.97 }}
// // //       whileInView={{ opacity: 1, y: 0, scale: 1 }}
// // //       viewport={{ once: true, margin: "-60px" }}
// // //       transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
// // //       className={className}
// // //     >
// // //       {children}
// // //     </motion.div>
// // //   );
// // // }

// // // // ─── Slide-in from left (for section headings) ────────────────────────────────
// // // function SlideIn({ children, delay = 0, className = "" }) {
// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0, x: -28 }}
// // //       whileInView={{ opacity: 1, x: 0 }}
// // //       viewport={{ once: true, margin: "-60px" }}
// // //       transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
// // //       className={className}
// // //     >
// // //       {children}
// // //     </motion.div>
// // //   );
// // // }

// // // // ─── Animated card wrapper (hover lift + glow) ────────────────────────────────
// // // function AnimCard({ children, delay = 0, className = "" }) {
// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0, y: 32 }}
// // //       whileInView={{ opacity: 1, y: 0 }}
// // //       viewport={{ once: true, margin: "-40px" }}
// // //       whileHover={{ y: -4, transition: { duration: 0.22 } }}
// // //       transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
// // //       className={className}
// // //     >
// // //       {children}
// // //     </motion.div>
// // //   );
// // // }

// // // // ─── Journey badge ────────────────────────────────────────────────────────────
// // // const BADGE = {
// // //   design:  { label: "Design",    cls: "bg-indigo-950 text-indigo-300 border-indigo-800" },
// // //   mockup:  { label: "Mockup",    cls: "bg-emerald-950 text-emerald-300 border-emerald-800" },
// // //   real:    { label: "Installed", cls: "bg-orange-950 text-orange-300 border-orange-800" },
// // // };
// // // function Badge({ type }) {
// // //   const b = BADGE[type] || BADGE.design;
// // //   return (
// // //     <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${b.cls}`}>
// // //       {b.label}
// // //     </span>
// // //   );
// // // }

// // // // ─── Resolve image ────────────────────────────────────────────────────────────
// // // // Priority: local upload (imgKey) → direct URL (img) → remote CDN (remoteImg)
// // // function img(item) {
// // //   if (item.imgKey) return `/uploads/${item.imgKey}.jpeg`;
// // //   if (item.img) return item.img;
// // //   return item.remoteImg || "";
// // // }
// // // function fallback(item, e) {
// // //   const el = e.currentTarget;
// // //   if (item.remoteImg && el.src !== item.remoteImg) {
// // //     el.src = item.remoteImg;
// // //   } else if (item.img && el.src !== item.img) {
// // //     el.src = item.img;
// // //   }
// // // }

// // // // ─── Section intro ────────────────────────────────────────────────────────────
// // // function Intro({ tag, title, sub }) {
// // //   return (
// // //     <div className="mb-12">
// // //       <SlideIn delay={0}>
// // //         <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-3">{tag}</p>
// // //       </SlideIn>
// // //       <SlideIn delay={0.07}>
// // //         <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-10">
// // //           <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight flex-1">{title}</h2>
// // //           {sub && <p className="text-sm text-white/50 leading-relaxed md:max-w-xs">{sub}</p>}
// // //         </div>
// // //       </SlideIn>
// // //     </div>
// // //   );
// // // }

// // // // ─────────────────────────────────────────────────────────────────────────────
// // // // LOGO SECTION
// // // // ─────────────────────────────────────────────────────────────────────────────
// // // const LOGOS = [
// // //   { id: "rrl",    client: "RRL Builders",    industry: "Real Estate",    palette: ["#C9A84C","#070812","#FFFFFF"], deliverables: ["Wordmark","Icon","Brand Manual"],   preview: "https://images.unsplash.com/photo-1618005182384-5c39e8a6e64c?w=600&q=80" },
// // //   { id: "rake",   client: "Rakepto",         industry: "EdTech",         palette: ["#E84A1A","#0B5BD3","#FFFFFF"], deliverables: ["Logomark","Colour System","Type"],  preview: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80" },
// // //   { id: "dhive",  client: "Designhive",      industry: "Interior Design",palette: ["#C87A50","#1A1208","#F5ECD7"], deliverables: ["Wordmark","Monogram","Stationery"],preview: "https://images.unsplash.com/photo-1634224143538-ce0221abf732?w=600&q=80" },
// // //   { id: "cpedia", client: "CollegePedia",    industry: "EdTech",         palette: ["#059669","#0F2040","#FFFFFF"], deliverables: ["Logomark","Guidelines"],            preview: "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=600&q=80" },
// // // ];

// // // function LogoSection() {
// // //   return (
// // //     <section id="logo-design" className="py-20 bg-[#070812] border-t border-white/8">
// // //       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// // //         <Intro
// // //           tag="Logo Designing"
// // //           title="From concept to execution, we handle everything."
// // //           sub="Full brand identity — logo, colour system, type pairing, and usage guidelines."
// // //         />

// // //         {/* Process strip */}
// // //         <FadeIn delay={0.05} className="mb-10">
// // //           <div className="flex items-center gap-0 overflow-x-auto pb-2 scrollbar-none">
// // //             {["Discovery","Sketches","Digital","Colour & Type","Final Delivery"].map((s, i) => (
// // //               <div key={s} className="flex items-center shrink-0">
// // //                 <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-white/60 whitespace-nowrap">
// // //                   <span className="text-[#FF6A3D] mr-1.5">0{i+1}</span>{s}
// // //                 </div>
// // //                 {i < 4 && <span className="mx-1.5 text-white/20 text-xs">→</span>}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </FadeIn>

// // //         {/* Cards — compact horizontal layout */}
// // //         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
// // //           {LOGOS.map((l, i) => (
// // //             <AnimCard key={l.id} delay={i * 0.06}>
// // //               <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/40 transition-all duration-400 h-full">
// // //                 {/* Thumbnail — fixed short height, object-cover */}
// // //                 <div className="relative h-36 overflow-hidden bg-[#0F1220]">
// // //                   <img
// // //                     src={l.preview}
// // //                     alt={l.client}
// // //                     loading="lazy"
// // //                     className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-[1.04] transition-all duration-500"
// // //                   />
// // //                   <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D18] to-transparent" />
// // //                   {/* Palette */}
// // //                   <div className="absolute bottom-3 left-3 flex gap-1.5">
// // //                     {l.palette.map(hex => (
// // //                       <span key={hex} className="h-4 w-4 rounded-full border border-white/25 shadow" style={{background:hex}} />
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //                 {/* Info */}
// // //                 <div className="p-4">
// // //                   <div className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D]">{l.industry}</div>
// // //                   <div className="mt-1 text-sm font-bold text-white">{l.client}</div>
// // //                   <div className="mt-2.5 flex flex-wrap gap-1">
// // //                     {l.deliverables.map(d => (
// // //                       <span key={d} className="px-1.5 py-0.5 text-[10px] font-mono bg-white/5 text-white/40 border border-white/8 rounded">
// // //                         {d}
// // //                       </span>
// // //                     ))}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </AnimCard>
// // //           ))}
// // //         </div>
// // //         <FadeIn delay={0.2}>
// // //           <p className="mt-6 text-xs text-white/25 text-center">Full brand decks available on request</p>
// // //         </FadeIn>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // // ─────────────────────────────────────────────────────────────────────────────
// // // // HOARDINGS & BANNERS
// // // // Design → Mockup → Installed, shown as compact cards in campaign rows
// // // // ─────────────────────────────────────────────────────────────────────────────

// // // /**
// // //  * One campaign row — items shown as fixed-height thumbnail cards.
// // //  * Aspect ratio is used only as `object-position` hint, not to set frame height.
// // //  */
// // // function CampaignRow({ title, client, items }) {
// // //   return (
// // //     <div className="mb-10">
// // //       {/* Row header */}
// // //       <div className="flex items-center gap-3 mb-4">
// // //         <div>
// // //           <span className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D]">{client}</span>
// // //           <h3 className="text-sm font-bold text-white mt-0.5">{title}</h3>
// // //         </div>
// // //         {/* Journey pills */}
// // //         <div className="ml-auto flex items-center gap-1.5">
// // //           {items.map((item, i) => (
// // //             <span key={item.id} className="flex items-center gap-1">
// // //               <Badge type={item.type} />
// // //               {i < items.length - 1 && <ArrowRight className="h-3 w-3 text-white/20" />}
// // //             </span>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* Cards grid — all same height, images cropped */}
// // //       <div className={`grid gap-3 ${items.length === 2 ? "grid-cols-2" : items.length === 3 ? "grid-cols-3" : "grid-cols-2 md:grid-cols-4"}`}>
// // //         {items.map((item, i) => (
// // //           <AnimCard key={item.id} delay={i * 0.07}>
// // //             <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/35 transition-all duration-400 h-full">
// // //               {/* Fixed-height thumbnail — portrait images crop from top */}
// // //               <div className="relative h-48 overflow-hidden bg-[#0F1220]">
// // //                 <img
// // //                   src={img(item)}
// // //                   alt={item.caption}
// // //                   loading="lazy"
// // //                   onError={(e) => fallback(item, e)}
// // //                   className={`absolute inset-0 w-full h-full object-cover ${item.aspect === "portrait" ? "object-top" : "object-center"} group-hover:scale-[1.04] transition-transform duration-500`}
// // //                 />
// // //                 <div className="absolute top-2.5 left-2.5">
// // //                   <Badge type={item.type} />
// // //                 </div>
// // //               </div>
// // //               {/* Caption */}
// // //               <div className="px-3 py-2.5">
// // //                 <div className="text-[10px] font-semibold text-white/35 truncate">{item.project}</div>
// // //                 <p className="mt-0.5 text-[11px] text-white/55 leading-snug line-clamp-2">{item.caption}</p>
// // //               </div>
// // //             </div>
// // //           </AnimCard>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function HoardingsSection() {
// // //   const nc216 = HOARDINGS.filter(h => h.project.startsWith("NC216"));
// // //   const rrlOther = HOARDINGS.filter(h => !h.project.startsWith("NC216") && !h.project.includes("Palm") && h.client === "RRL Builders & Developers");
// // //   const palm = HOARDINGS.filter(h => h.project.includes("Palm Altezze"));
// // //   const rakepto = HOARDINGS.filter(h => h.client === "Rakepto");

// // //   return (
// // //     <section id="hoardings" className="py-20 bg-[#08090F] border-t border-white/8">
// // //       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// // //         <Intro
// // //           tag="Hoardings & Banners"
// // //           title="From screen to street."
// // //           sub="Design file → print mockup → real world installation. We handle the full chain."
// // //         />

// // //         {/* Legend */}
// // //         <FadeIn delay={0.04} className="mb-10">
// // //           <div className="flex flex-wrap items-center gap-2 text-[11px]">
// // //             {Object.entries(BADGE).map(([k,v]) => (
// // //               <span key={k} className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded border font-semibold ${v.cls}`}>
// // //                 <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />{v.label}
// // //               </span>
// // //             ))}
// // //             <span className="ml-1 text-white/25">shows where each piece lives in the production journey</span>
// // //           </div>
// // //         </FadeIn>

// // //         <CampaignRow title="NC216 EOI Campaign" client="RRL Builders & Developers" items={nc216} />
// // //         {rrlOther.length > 0 && <CampaignRow title="Portfolio Flyer & Event Installation" client="RRL Builders & Developers" items={rrlOther} />}
// // //         {palm.length > 0 && <CampaignRow title="Palm Altezze — Pole Signage" client="RRL Builders & Developers" items={palm} />}
// // //         {rakepto.length > 0 && <CampaignRow title="Brand Signage" client="Rakepto" items={rakepto} />}
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // // ─────────────────────────────────────────────────────────────────────────────
// // // // PRINTABLES
// // // // ─────────────────────────────────────────────────────────────────────────────
// // // function PrintablesSection() {
// // //   return (
// // //     <section id="printables" className="py-20 bg-[#070812] border-t border-white/8">
// // //       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// // //         <Intro
// // //           tag="Printables"
// // //           title="Print-ready, always."
// // //           sub="Brochures, flyers, bifolds — designed at bleed, exported at 300 DPI."
// // //         />

// // //         <div className="grid sm:grid-cols-3 gap-5">
// // //           {PRINTABLES.map((item, i) => (
// // //             <AnimCard key={item.id} delay={i * 0.08}>
// // //               <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/35 transition-all duration-400 h-full">
// // //                 {/* Thumbnail — fixed height, portrait images crop from top */}
// // //                 <div className="relative h-52 overflow-hidden bg-[#0F1220]">
// // //                   <img
// // //                     src={img(item)}
// // //                     alt={item.title}
// // //                     loading="lazy"
// // //                     onError={(e) => fallback(item, e)}
// // //                     className={`absolute inset-0 w-full h-full object-cover ${item.aspect === "portrait" ? "object-top" : "object-center"} group-hover:scale-[1.03] transition-transform duration-500`}
// // //                   />
// // //                   {/* Type chip top-right */}
// // //                   <div className="absolute top-2.5 right-2.5">
// // //                     <span className="px-2 py-0.5 rounded bg-[#070812]/80 backdrop-blur text-[9px] font-mono text-white/60 border border-white/10">
// // //                       {item.type}
// // //                     </span>
// // //                   </div>
// // //                   {/* Print-ready bottom-left */}
// // //                   <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-700/40 text-[9px] font-semibold text-emerald-300">
// // //                     <CheckCircle2 className="h-2.5 w-2.5" /> Print-ready
// // //                   </div>
// // //                 </div>
// // //                 <div className="px-4 py-3">
// // //                   <div className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D]">{item.client}</div>
// // //                   <div className="mt-0.5 text-sm font-bold text-white">{item.title}</div>
// // //                   <p className="mt-1 text-[11px] text-white/45 leading-snug">{item.caption}</p>
// // //                 </div>
// // //               </div>
// // //             </AnimCard>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // // ─────────────────────────────────────────────────────────────────────────────
// // // // SOCIAL & ADS
// // // // ─────────────────────────────────────────────────────────────────────────────
// // // const PLATFORM_CLR = {
// // //   "Meta / Instagram": "#E1306C",
// // //   "Meta / Facebook": "#1877F2",
// // //   "Digital Hoarding": "#FF6A3D",
// // //   "On-site": "#059669",
// // //   "Outdoor": "#7C3AED",
// // //   "Retail / Showroom": "#C87A50",
// // // };

// // // function SocialAdsSection() {
// // //   const squares  = SOCIAL_ADS.filter(a => a.aspect === "square");
// // //   const landscape = SOCIAL_ADS.filter(a => a.aspect === "landscape");
// // //   const portrait  = SOCIAL_ADS.filter(a => a.aspect === "portrait");

// // //   const AdCard = ({ item, thumbH = "h-48" }) => (
// // //     <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/35 transition-all duration-400">
// // //       <div className={`relative ${thumbH} overflow-hidden bg-[#0F1220]`}>
// // //         <img
// // //           src={img(item)}
// // //           alt={item.title}
// // //           loading="lazy"
// // //           onError={(e) => fallback(item, e)}
// // //           className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
// // //         />
// // //         {/* Platform pill */}
// // //         <div className="absolute top-2.5 left-2.5">
// // //           <span
// // //             className="px-2 py-0.5 rounded text-[9px] font-bold text-white uppercase tracking-wide"
// // //             style={{ background: PLATFORM_CLR[item.platform] || "#FF6A3D" }}
// // //           >
// // //             {item.platform}
// // //           </span>
// // //         </div>
// // //       </div>
// // //       <div className="px-3 py-2.5">
// // //         <div className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D] truncate">{item.client}</div>
// // //         <div className="mt-0.5 text-sm font-bold text-white leading-tight">{item.title}</div>
// // //         <p className="mt-0.5 text-[11px] text-white/45 leading-snug line-clamp-2">{item.caption}</p>
// // //         <span className="mt-2 inline-block px-1.5 py-0.5 rounded bg-white/5 text-[9px] font-mono text-white/35 border border-white/8">{item.type}</span>
// // //       </div>
// // //     </div>
// // //   );

// // //   return (
// // //     <section id="social-ads" className="py-20 bg-[#08090F] border-t border-white/8">
// // //       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// // //         <Intro
// // //           tag="Social Media & Ad Posters"
// // //           title="Creatives that stop the scroll."
// // //           sub="Social ads, digital OOH, and campaign posters — designed to convert."
// // //         />

// // //         {/* Social / Meta — 2 col */}
// // //         {squares.length > 0 && (
// // //           <div className="mb-10">
// // //             <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mb-4">Social Media Creatives</p>
// // //             <div className="grid sm:grid-cols-2 gap-4">
// // //               {squares.map((item, i) => (
// // //                 <AnimCard key={item.id} delay={i * 0.08}>
// // //                   <AdCard item={item} thumbH="h-56" />
// // //                 </AnimCard>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Landscape OOH — 2 col */}
// // //         {landscape.length > 0 && (
// // //           <div className="mb-10">
// // //             <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mb-4">Outdoor & Billboard Creatives</p>
// // //             <div className="grid sm:grid-cols-2 gap-4">
// // //               {landscape.map((item, i) => (
// // //                 <AnimCard key={item.id} delay={i * 0.08}>
// // //                   <AdCard item={item} thumbH="h-44" />
// // //                 </AnimCard>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Portrait / vertical — 4 col */}
// // //         {portrait.length > 0 && (
// // //           <div>
// // //             <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mb-4">Digital & Site Hoardings</p>
// // //             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// // //               {portrait.map((item, i) => (
// // //                 <AnimCard key={item.id} delay={i * 0.07}>
// // //                   <AdCard item={item} thumbH="h-48" />
// // //                 </AnimCard>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // // ─────────────────────────────────────────────────────────────────────────────
// // // // LEGACY CREATIVE GALLERY
// // // // ─────────────────────────────────────────────────────────────────────────────
// // // function CreativeGallery() {
// // //   const [active, setActive] = useState("all");
// // //   const visible = active === "all"
// // //     ? CREATIVE_PORTFOLIO.items
// // //     : CREATIVE_PORTFOLIO.items.filter(i => i.cat === active);

// // //   return (
// // //     <section id="gallery" className="py-20 bg-[#070812] border-t border-white/8" data-testid="creative-gallery">
// // //       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// // //         <FadeIn>
// // //           <div className="grid md:grid-cols-12 gap-6 mb-10 items-end">
// // //             <div className="md:col-span-7">
// // //               <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-3">Creative Gallery</p>
// // //               <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-white">Work from the studio.</h2>
// // //             </div>
// // //             <p className="md:col-span-5 md:pl-8 text-sm text-white/50 leading-relaxed">
// // //               Filter by medium — all creative produced by our in-house studio team.
// // //             </p>
// // //           </div>
// // //         </FadeIn>

// // //         <div className="flex flex-wrap gap-2 mb-8">
// // //           {CREATIVE_PORTFOLIO.categories.map(c => (
// // //             <button
// // //               key={c.key}
// // //               onClick={() => setActive(c.key)}
// // //               data-testid={`portfolio-filter-${c.key}`}
// // //               className={`px-3.5 py-1.5 text-xs font-semibold rounded border transition-colors ${
// // //                 c.key === active
// // //                   ? "bg-[#FF6A3D] text-[#070812] border-[#FF6A3D]"
// // //                   : "bg-white/5 border-white/10 text-white hover:border-[#FF6A3D] hover:text-[#FF6A3D]"
// // //               }`}
// // //             >
// // //               {c.label}
// // //             </button>
// // //           ))}
// // //         </div>

// // //         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:auto-rows-[200px]">
// // //           <AnimatePresence mode="popLayout">
// // //             {visible.map((item, i) => (
// // //               <motion.div
// // //                 key={`${item.title}-${active}`}
// // //                 layout
// // //                 initial={{ opacity: 0, scale: 0.95 }}
// // //                 animate={{ opacity: 1, scale: 1 }}
// // //                 exit={{ opacity: 0, scale: 0.95 }}
// // //                 transition={{ duration: 0.35, delay: i * 0.025 }}
// // //                 className={`group relative overflow-hidden rounded bg-[#0A0D14] border border-white/5 ${item.span || ""}`}
// // //                 data-testid={`creative-item-${i}`}
// // //               >
// // //                 <img
// // //                   src={item.img}
// // //                   alt={item.title}
// // //                   loading="lazy"
// // //                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
// // //                 />
// // //                 <div className="absolute inset-0 bg-gradient-to-t from-[#070812]/90 via-[#070812]/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-400" />
// // //                 <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
// // //                   <div className="self-end">
// // //                     <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#FF6A3D] transition-all duration-400" />
// // //                   </div>
// // //                   <div>
// // //                     <div className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D]">{item.client}</div>
// // //                     <div className="mt-0.5 text-sm font-bold leading-tight">{item.title}</div>
// // //                   </div>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </AnimatePresence>
// // //         </div>

// // //         <div className="mt-14 text-center">
// // //           <Link
// // //             to="/contact"
// // //             className="inline-flex items-center gap-2 bg-[#FF6A3D] hover:bg-[#E85C31] text-white px-6 h-11 text-sm font-semibold rounded transition-colors"
// // //           >
// // //             Commission a project <ArrowRight className="h-4 w-4" />
// // //           </Link>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // // ─────────────────────────────────────────────────────────────────────────────
// // // // PAGE ROOT
// // // // ─────────────────────────────────────────────────────────────────────────────
// // // export default function Portfolio() {
// // //   return (
// // //     <PublicLayout>
// // //       {/* Hero */}
// // //       <section className="bg-[#070812] border-b border-white/8 py-16 md:py-24 text-white relative overflow-hidden" data-testid="portfolio-hero">
// // //         <div className="absolute inset-0 opacity-[0.022] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
// // //         <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative">
// // //           <motion.p
// // //             initial={{ opacity: 0, y: 12 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.45, ease: "easeOut" }}
// // //             className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4"
// // //           >Portfolio</motion.p>
// // //           <motion.h1
// // //             initial={{ opacity: 0, y: 24 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
// // //             className="text-[38px] sm:text-[52px] lg:text-[62px] font-extrabold leading-[1.02] tracking-[-0.02em] text-white max-w-4xl"
// // //           >
// // //             Websites, brand systems, ad creative, hoardings — all the work we've shipped.
// // //           </motion.h1>
// // //           <motion.p
// // //             initial={{ opacity: 0, y: 16 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
// // //             className="mt-5 text-base text-white/55 max-w-xl leading-relaxed"
// // //           >
// // //             Browse live client sites, then see how a design travels from screen to standee, billboard, brochure, or social post.
// // //           </motion.p>

// // //           {/* Stats */}
// // //           <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
// // //             {[
// // //               { k: "50+", v: "Brand projects shipped" },
// // //               { k: "15+", v: "Live websites" },
// // //               { k: "2M+", v: "Creative impressions / campaign" },
// // //               { k: "60+", v: "Hoardings & OOH live" },
// // //             ].map((s, i) => (
// // //               <motion.div
// // //                 key={s.v}
// // //                 initial={{ opacity: 0, y: 20 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
// // //                 className="p-4 bg-white/5 border border-white/8 rounded-lg hover:border-[#FF6A3D]/30 transition-colors duration-300"
// // //               >
// // //                 <div className="text-2xl font-extrabold text-[#FF6A3D]">{s.k}</div>
// // //                 <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/35">{s.v}</div>
// // //               </motion.div>
// // //             ))}
// // //           </div>

// // //           {/* Jump links */}
// // //           <div className="mt-7 flex flex-wrap gap-2">
// // //             {[
// // //               ["#websites","Websites"],["#logo-design","Logo Design"],
// // //               ["#hoardings","Hoardings"],["#printables","Printables"],
// // //               ["#social-ads","Social & Ads"],["#gallery","Gallery"],
// // //             ].map(([href, label]) => (
// // //               <a key={href} href={href} className="px-3 py-1 text-[11px] font-semibold rounded-full border border-white/12 text-white/50 hover:border-[#FF6A3D] hover:text-[#FF6A3D] transition-colors">
// // //                 {label}
// // //               </a>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       <div id="websites"><ProjectShowcase /></div>
// // //       <LogoSection />
// // //       <HoardingsSection />
// // //       <PrintablesSection />
// // //       <SocialAdsSection />
// // //       <CreativeGallery />
// // //     </PublicLayout>
// // //   );
// // // }
// // // // import { useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import { motion, AnimatePresence } from "motion/react";
// // // // import { ArrowRight, ArrowUpRight } from "lucide-react";
// // // // import PublicLayout from "@/components/layout/PublicLayout";
// // // // import ProjectShowcase from "@/components/landing/ProjectShowcase";
// // // // import { CREATIVE_PORTFOLIO } from "@/data/projectShowcase";

// // // // export default function Portfolio() {
// // // //   const [active, setActive] = useState("all");
// // // //   const visible = active === "all"
// // // //     ? CREATIVE_PORTFOLIO.items
// // // //     : CREATIVE_PORTFOLIO.items.filter((i) => i.cat === active);

// // // //   return (
// // // //     <PublicLayout>
// // // //       {/* Hero */}
// // // //       <section className="bg-zinc-50 border-b border-zinc-200 py-16 md:py-24" data-testid="portfolio-hero">
// // // //         <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// // // //           <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Portfolio</div>
// // // //           <h1 className="text-[42px] sm:text-[52px] lg:text-[64px] font-extrabold leading-[1.02] tracking-[-0.02em] text-[#0F1212] max-w-4xl">
// // // //             Websites, brand systems, ad creative, hoardings — all the work we've shipped.
// // // //           </h1>
// // // //           <p className="mt-6 text-lg text-zinc-600 max-w-2xl leading-relaxed">
// // // //             Browse live client sites we've built, or scroll down into the creative gallery across brand identity, social, ads, print, and motion.
// // // //           </p>

// // // //           <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
// // // //             {[
// // // //               { k: "50+", v: "Brand projects shipped" },
// // // //               { k: "15+", v: "Live websites in production" },
// // // //               { k: "2M+", v: "Creative impressions / campaign" },
// // // //               { k: "60+", v: "Hoardings & OOH live" },
// // // //             ].map((s) => (
// // // //               <div key={s.v} className="p-5 bg-white border border-zinc-200 rounded-sm">
// // // //                 <div className="text-3xl font-extrabold text-[#134E35]">{s.k}</div>
// // // //                 <div className="mt-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">{s.v}</div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Live websites we built */}
// // // //       <ProjectShowcase />

// // // //       {/* Creative gallery */}
// // // //       <section className="py-20 md:py-28 bg-zinc-50 border-t border-zinc-200" data-testid="creative-gallery">
// // // //         <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// // // //           <div className="grid md:grid-cols-12 gap-8 mb-10 items-end">
// // // //             <div className="md:col-span-7">
// // // //               <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Creative gallery</div>
// // // //               <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">
// // // //                 Work from the studio.
// // // //               </h2>
// // // //             </div>
// // // //             <div className="md:col-span-5 md:pl-8">
// // // //               <p className="text-base text-zinc-600 leading-relaxed">
// // // //                 Filter by medium — or browse everything. All creative below was produced by our in-house studio team.
// // // //               </p>
// // // //             </div>
// // // //           </div>

// // // //           {/* Category filter chips */}
// // // //           <div className="flex flex-wrap gap-2 mb-10">
// // // //             {CREATIVE_PORTFOLIO.categories.map((c) => {
// // // //               const activeCat = c.key === active;
// // // //               return (
// // // //                 <button
// // // //                   key={c.key}
// // // //                   onClick={() => setActive(c.key)}
// // // //                   data-testid={`portfolio-filter-${c.key}`}
// // // //                   className={`px-4 py-2 text-xs font-semibold rounded-sm border transition-colors ${
// // // //                     activeCat ? "bg-[#0F1212] text-white border-[#0F1212]" : "bg-white border-zinc-300 text-zinc-700 hover:border-[#134E35] hover:text-[#134E35]"
// // // //                   }`}
// // // //                 >
// // // //                   {c.label}
// // // //                 </button>
// // // //               );
// // // //             })}
// // // //           </div>

// // // //           {/* Bento masonry */}
// // // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:auto-rows-[220px]">
// // // //             <AnimatePresence mode="popLayout">
// // // //               {visible.map((item, i) => (
// // // //                 <motion.div
// // // //                   key={`${item.title}-${active}`}
// // // //                   layout
// // // //                   initial={{ opacity: 0, scale: 0.94 }}
// // // //                   animate={{ opacity: 1, scale: 1 }}
// // // //                   exit={{ opacity: 0, scale: 0.94 }}
// // // //                   transition={{ duration: 0.4, delay: i * 0.03 }}
// // // //                   className={`group relative overflow-hidden rounded-sm bg-zinc-200 ${item.span || ""}`}
// // // //                   data-testid={`creative-item-${i}`}
// // // //                 >
// // // //                   <img src={item.img} alt={item.title} loading="lazy"
// // // //                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]" />
// // // //                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
// // // //                   <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-between text-white">
// // // //                     <div className="self-end">
// // // //                       <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
// // // //                     </div>
// // // //                     <div>
// // // //                       <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C87A50]">{item.client}</div>
// // // //                       <div className="mt-1 text-sm md:text-base font-bold leading-tight max-w-xs">{item.title}</div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </AnimatePresence>
// // // //           </div>

// // // //           <div className="mt-16 text-center">
// // // //             <Link to="/contact" className="inline-flex items-center gap-2 bg-[#0F1212] hover:bg-[#134E35] text-white px-6 h-12 text-sm font-semibold rounded-sm transition-colors">
// // // //               Commission a project <ArrowRight className="h-4 w-4" />
// // // //             </Link>
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </PublicLayout>
// // // //   );
// // // // }
// // // import { useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import { motion, AnimatePresence } from "motion/react";
// // // import { ArrowRight, ArrowUpRight } from "lucide-react";
// // // import PublicLayout from "@/components/layout/PublicLayout";
// // // import ProjectShowcase from "@/components/landing/ProjectShowcase";
// // // import { CREATIVE_PORTFOLIO } from "@/data/projectShowcase";

// // // export default function Portfolio() {
// // //   const [active, setActive] = useState("all");
// // //   const visible = active === "all"
// // //     ? CREATIVE_PORTFOLIO.items
// // //     : CREATIVE_PORTFOLIO.items.filter((i) => i.cat === active);

// // //   return (
// // //     <PublicLayout>
// // //       {/* Hero */}
// // //       <section className="bg-[#070812] border-b border-white/10 py-16 md:py-24 text-white" data-testid="portfolio-hero">
// // //         <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// // //           <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4">Portfolio</div>
// // //           <h1 className="text-[42px] sm:text-[52px] lg:text-[64px] font-extrabold leading-[1.02] tracking-[-0.02em] text-white max-w-4xl">
// // //             Websites, brand systems, ad creative, hoardings — all the work we've shipped.
// // //           </h1>
// // //           <p className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">
// // //             Browse live client sites we've built, or scroll down into the creative gallery across brand identity, social, ads, print, and motion.
// // //           </p>

// // //           <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
// // //             {[
// // //               { k: "50+", v: "Brand projects shipped" },
// // //               { k: "15+", v: "Live websites in production" },
// // //               { k: "2M+", v: "Creative impressions / campaign" },
// // //               { k: "60+", v: "Hoardings & OOH live" },
// // //             ].map((s) => (
// // //               <div key={s.v} className="p-5 bg-white/5 border border-white/10 rounded-sm">
// // //                 <div className="text-3xl font-extrabold text-[#FF6A3D]">{s.k}</div>
// // //                 <div className="mt-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/50">{s.v}</div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Live websites we built */}
// // //       <ProjectShowcase />

// // //       {/* Creative gallery */}
// // //       <section className="py-20 md:py-28 bg-[#070812] border-t border-white/10 text-white" data-testid="creative-gallery">
// // //         <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// // //           <div className="grid md:grid-cols-12 gap-8 mb-10 items-end">
// // //             <div className="md:col-span-7">
// // //               <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4">Creative gallery</div>
// // //               <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
// // //                 Work from the studio.
// // //               </h2>
// // //             </div>
// // //             <div className="md:col-span-5 md:pl-8">
// // //               <p className="text-base text-white/70 leading-relaxed">
// // //                 Filter by medium — or browse everything. All creative below was produced by our in-house studio team.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           {/* Category filter chips */}
// // //           <div className="flex flex-wrap gap-2 mb-10">
// // //             {CREATIVE_PORTFOLIO.categories.map((c) => {
// // //               const activeCat = c.key === active;
// // //               return (
// // //                 <button
// // //                   key={c.key}
// // //                   onClick={() => setActive(c.key)}
// // //                   data-testid={`portfolio-filter-${c.key}`}
// // //                   className={`px-4 py-2 text-xs font-semibold rounded-sm border transition-colors ${
// // //                     activeCat ? "bg-[#FF6A3D] text-[#070812] border-[#FF6A3D]" : "bg-white/5 border-white/10 text-white hover:border-[#FF6A3D] hover:text-[#FF6A3D]"
// // //                   }`}
// // //                 >
// // //                   {c.label}
// // //                 </button>
// // //               );
// // //             })}
// // //           </div>

// // //           {/* Bento masonry */}
// // //           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:auto-rows-[220px]">
// // //             <AnimatePresence mode="popLayout">
// // //               {visible.map((item, i) => (
// // //                 <motion.div
// // //                   key={`${item.title}-${active}`}
// // //                   layout
// // //                   initial={{ opacity: 0, scale: 0.94 }}
// // //                   animate={{ opacity: 1, scale: 1 }}
// // //                   exit={{ opacity: 0, scale: 0.94 }}
// // //                   transition={{ duration: 0.4, delay: i * 0.03 }}
// // //                   className={`group relative overflow-hidden rounded-sm bg-[#0A0D14] border border-white/5 ${item.span || ""}`}
// // //                   data-testid={`creative-item-${i}`}
// // //                 >
// // //                   <img src={item.img} alt={item.title} loading="lazy"
// // //                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]" />
// // //                   <div className="absolute inset-0 bg-gradient-to-t from-[#070812]/90 via-[#070812]/30 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
// // //                   <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-between text-white">
// // //                     <div className="self-end">
// // //                       <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 text-[#FF6A3D]" />
// // //                     </div>
// // //                     <div>
// // //                       <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#FF6A3D]">{item.client}</div>
// // //                       <div className="mt-1 text-sm md:text-base font-bold leading-tight max-w-xs">{item.title}</div>
// // //                     </div>
// // //                   </div>
// // //                 </motion.div>
// // //               ))}
// // //             </AnimatePresence>
// // //           </div>

// // //           <div className="mt-16 text-center">
// // //             <Link to="/contact" className="inline-flex items-center gap-2 bg-[#FF6A3D] hover:bg-[#E85C31] text-white px-6 h-12 text-sm font-semibold rounded-sm transition-colors">
// // //               Commission a project <ArrowRight className="h-4 w-4" />
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </PublicLayout>
// // //   );
// // // }

// // import { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { motion, AnimatePresence } from "motion/react";
// // import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
// // import PublicLayout from "@/components/layout/PublicLayout";
// // import ProjectShowcase from "@/components/landing/ProjectShowcase";
// // import { CREATIVE_PORTFOLIO, HOARDINGS, PRINTABLES, SOCIAL_ADS } from "@/data/projectShowcase";

// // // ─── Shared fade-in ───────────────────────────────────────────────────────────
// // function FadeIn({ children, delay = 0, className = "" }) {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 24, scale: 0.97 }}
// //       whileInView={{ opacity: 1, y: 0, scale: 1 }}
// //       viewport={{ once: true, margin: "-60px" }}
// //       transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
// //       className={className}
// //     >
// //       {children}
// //     </motion.div>
// //   );
// // }

// // // ─── Slide-in from left (for section headings) ────────────────────────────────
// // function SlideIn({ children, delay = 0, className = "" }) {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, x: -28 }}
// //       whileInView={{ opacity: 1, x: 0 }}
// //       viewport={{ once: true, margin: "-60px" }}
// //       transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
// //       className={className}
// //     >
// //       {children}
// //     </motion.div>
// //   );
// // }

// // // ─── Animated card wrapper (hover lift + glow) ────────────────────────────────
// // function AnimCard({ children, delay = 0, className = "" }) {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 32 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true, margin: "-40px" }}
// //       whileHover={{ y: -4, transition: { duration: 0.22 } }}
// //       transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
// //       className={className}
// //     >
// //       {children}
// //     </motion.div>
// //   );
// // }

// // // ─── Journey badge ────────────────────────────────────────────────────────────
// // const BADGE = {
// //   design:  { label: "Design",    cls: "bg-indigo-950 text-indigo-300 border-indigo-800" },
// //   mockup:  { label: "Mockup",    cls: "bg-emerald-950 text-emerald-300 border-emerald-800" },
// //   real:    { label: "Installed", cls: "bg-orange-950 text-orange-300 border-orange-800" },
// // };
// // function Badge({ type }) {
// //   const b = BADGE[type] || BADGE.design;
// //   return (
// //     <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${b.cls}`}>
// //       {b.label}
// //     </span>
// //   );
// // }

// // // ─── Resolve image ────────────────────────────────────────────────────────────
// // // Priority: local upload (imgKey) → direct URL (img) → remote CDN (remoteImg)
// // function img(item) {
// //   if (item.imgKey) return `/uploads/${item.imgKey}.jpeg`;
// //   if (item.img) return item.img;
// //   return item.remoteImg || "";
// // }
// // function fallback(item, e) {
// //   const el = e.currentTarget;
// //   if (item.remoteImg && el.src !== item.remoteImg) {
// //     el.src = item.remoteImg;
// //   } else if (item.img && el.src !== item.img) {
// //     el.src = item.img;
// //   }
// // }

// // // ─── Section intro ────────────────────────────────────────────────────────────
// // function Intro({ tag, title, sub }) {
// //   return (
// //     <div className="mb-12">
// //       <SlideIn delay={0}>
// //         <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-3">{tag}</p>
// //       </SlideIn>
// //       <SlideIn delay={0.07}>
// //         <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-10">
// //           <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight flex-1">{title}</h2>
// //           {sub && <p className="text-sm text-white/50 leading-relaxed md:max-w-xs">{sub}</p>}
// //         </div>
// //       </SlideIn>
// //     </div>
// //   );
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // LOGO SECTION
// // // ─────────────────────────────────────────────────────────────────────────────
// // const LOGOS = [
// //   { id: "rrl",    client: "RRL Builders",    industry: "Real Estate",    palette: ["#C9A84C","#070812","#FFFFFF"], deliverables: ["Wordmark","Icon","Brand Manual"],   preview: "https://ik.imagekit.io/j0xzq9pns/marketly/company/image.png" },
// //   { id: "rake",   client: "Rakepto",         industry: "EdTech",         palette: ["#E84A1A","#0B5BD3","#FFFFFF"], deliverables: ["Logomark","Colour System","Type"],  preview: "https://ik.imagekit.io/j0xzq9pns/marketly/company/image_BHKLkoq-Q.png" },
// //   { id: "dhive",  client: "Designhive",      industry: "Interior Design",palette: ["#C87A50","#1A1208","#F5ECD7"], deliverables: ["Wordmark","Monogram","Stationery"],preview: "https://ik.imagekit.io/j0xzq9pns/marketly/company/image_cMn60WmMm.png" },
// //   { id: "cpedia", client: "CollegePedia",    industry: "EdTech",         palette: ["#059669","#0F2040","#FFFFFF"], deliverables: ["Logomark","Guidelines"],            preview: "https://ik.imagekit.io/j0xzq9pns/marketly/company/image_lSE_C0vcW.png" },
// //   { id: "nyterra", client: "Nyra Sunterra",    industry: "Interior Design",palette: ["#C87A50","#1A1208","#F5ECD7"], deliverables: ["Wordmark","Monogram","Stationery"], preview: "https://ik.imagekit.io/j0xzq9pns/marketly/company/image_RtmNSE7RH.png" },
// // ];

// // function LogoSection() {
// //   return (
// //     <section id="logo-design" className="py-20 bg-[#070812] border-t border-white/8">
// //       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// //         <Intro
// //           tag="Logo Designing"
// //           title="From concept to execution, we handle everything."
// //           sub="Full brand identity — logo, colour system, type pairing, and usage guidelines."
// //         />

// //         {/* Process strip */}
// //         <FadeIn delay={0.05} className="mb-10">
// //           <div className="flex items-center gap-0 overflow-x-auto pb-2 scrollbar-none">
// //             {["Discovery","Sketches","Digital","Colour & Type","Final Delivery"].map((s, i) => (
// //               <div key={s} className="flex items-center shrink-0">
// //                 <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-white/60 whitespace-nowrap">
// //                   <span className="text-[#FF6A3D] mr-1.5">0{i+1}</span>{s}
// //                 </div>
// //                 {i < 4 && <span className="mx-1.5 text-white/20 text-xs">→</span>}
// //               </div>
// //             ))}
// //           </div>
// //         </FadeIn>

// //         {/* Cards — compact horizontal layout */}
// //         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
// //           {LOGOS.map((l, i) => (
// //             <AnimCard key={l.id} delay={i * 0.06}>
// //               <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/40 transition-all duration-400 h-full">
// //                 {/* Thumbnail — aspect ratio so landscape previews aren't crushed */}
// //                 <div className="relative aspect-[16/9] overflow-hidden bg-[#0F1220]">
// //                   <img
// //                     src={l.preview}
// //                     alt={l.client}
// //                     loading="lazy"
// //                     className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-[1.04] transition-all duration-500"
// //                   />
// //                   <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D18] to-transparent" />
// //                   {/* Palette */}
// //                   <div className="absolute bottom-3 left-3 flex gap-1.5">
// //                     {l.palette.map(hex => (
// //                       <span key={hex} className="h-4 w-4 rounded-full border border-white/25 shadow" style={{background:hex}} />
// //                     ))}
// //                   </div>
// //                 </div>
// //                 {/* Info */}
// //                 <div className="p-4">
// //                   <div className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D]">{l.industry}</div>
// //                   <div className="mt-1 text-sm font-bold text-white">{l.client}</div>
// //                   <div className="mt-2.5 flex flex-wrap gap-1">
// //                     {l.deliverables.map(d => (
// //                       <span key={d} className="px-1.5 py-0.5 text-[10px] font-mono bg-white/5 text-white/40 border border-white/8 rounded">
// //                         {d}
// //                       </span>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             </AnimCard>
// //           ))}
// //         </div>
// //         <FadeIn delay={0.2}>
// //           <p className="mt-6 text-xs text-white/25 text-center">Full brand decks available on request</p>
// //         </FadeIn>
// //       </div>
// //     </section>
// //   );
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // HOARDINGS & BANNERS
// // // Design → Mockup → Installed, shown as compact cards in campaign rows
// // // ─────────────────────────────────────────────────────────────────────────────

// // /**
// //  * One campaign row — items shown as fixed-height thumbnail cards.
// //  * Aspect ratio is used only as `object-position` hint, not to set frame height.
// //  */
// // function CampaignRow({ title, client, items }) {
// //   return (
// //     <div className="mb-10">
// //       {/* Row header */}
// //       <div className="flex items-center gap-3 mb-4">
// //         <div>
// //           <span className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D]">{client}</span>
// //           <h3 className="text-sm font-bold text-white mt-0.5">{title}</h3>
// //         </div>
// //         {/* Journey pills */}
// //         <div className="ml-auto flex items-center gap-1.5">
// //           {items.map((item, i) => (
// //             <span key={item.id} className="flex items-center gap-1">
// //               <Badge type={item.type} />
// //               {i < items.length - 1 && <ArrowRight className="h-3 w-3 text-white/20" />}
// //             </span>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Cards grid — all same height, images cropped */}
// //       <div className={`grid gap-3 ${items.length === 2 ? "grid-cols-2" : items.length === 3 ? "grid-cols-3" : "grid-cols-2 md:grid-cols-4"}`}>
// //         {items.map((item, i) => (
// //           <AnimCard key={item.id} delay={i * 0.07}>
// //             <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/35 transition-all duration-400 h-full">
// //               {/* Thumbnail — aspect ratio matches image orientation */}
// // <div className="relative h-[320px] overflow-hidden bg-[#0F1220]">
// //                 <img
// //                   src={img(item)}
// //                   alt={item.caption}
// //                   loading="lazy"
// //                   onError={(e) => fallback(item, e)}
// //                   className={`absolute inset-0 w-full h-full object-fit ${item.aspect === "portrait" ? "object-top" : "object-center"} group-hover:scale-[1.04] transition-transform duration-500`}
// //                 />
// //                 <div className="absolute top-2.5 left-2.5">
// //                   <Badge type={item.type} />
// //                 </div>
// //               </div>
// //               {/* Caption */}
// //               <div className="px-3 py-2.5">
// //                 <div className="text-[10px] font-semibold text-white/35 truncate">{item.project}</div>
// //                 <p className="mt-0.5 text-[11px] text-white/55 leading-snug line-clamp-2">{item.caption}</p>
// //               </div>
// //             </div>
// //           </AnimCard>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // function HoardingsSection() {
// //   const nc216 = HOARDINGS.filter(h => h.project.startsWith("NC216"));
// //   const rrlOther = HOARDINGS.filter(h => !h.project.startsWith("NC216") && !h.project.includes("Palm") && h.client === "RRL Builders & Developers");
// //   const palm = HOARDINGS.filter(h => h.project.includes("Palm Altezze"));
// //   const rakepto = HOARDINGS.filter(h => h.client === "Rakepto");

// //   return (
// //     <section id="hoardings" className="py-20 bg-[#08090F] border-t border-white/8">
// //       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// //         <Intro
// //           tag="Hoardings & Banners"
// //           title="From screen to street."
// //           sub="Design file → print mockup → real world installation. We handle the full chain."
// //         />

// //         {/* Legend */}
// //         <FadeIn delay={0.04} className="mb-10">
// //           <div className="flex flex-wrap items-center gap-2 text-[11px]">
// //             {Object.entries(BADGE).map(([k,v]) => (
// //               <span key={k} className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded border font-semibold ${v.cls}`}>
// //                 <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />{v.label}
// //               </span>
// //             ))}
// //             <span className="ml-1 text-white/25">shows where each piece lives in the production journey</span>
// //           </div>
// //         </FadeIn>

// //         <CampaignRow title="NC216 EOI Campaign" client="RRL Builders & Developers" items={nc216} />
// //         {rrlOther.length > 0 && <CampaignRow title="Portfolio Flyer & Event Installation" client="RRL Builders & Developers" items={rrlOther} />}
// //         {palm.length > 0 && <CampaignRow title="Palm Altezze — Pole Signage" client="RRL Builders & Developers" items={palm} />}
// //         {rakepto.length > 0 && <CampaignRow title="Brand Signage" client="Rakepto" items={rakepto} />}
// //       </div>
// //     </section>
// //   );
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // PRINTABLES
// // // ─────────────────────────────────────────────────────────────────────────────
// // function PrintablesSection() {
// //   return (
// //     <section id="printables" className="py-20 bg-[#070812] border-t border-white/8">
// //       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// //         <Intro
// //           tag="Printables"
// //           title="Print-ready, always."
// //           sub="Brochures, flyers, bifolds — designed at bleed, exported at 300 DPI."
// //         />

// //         <div className="grid sm:grid-cols-3 gap-5">
// //           {PRINTABLES.map((item, i) => (
// //             <AnimCard key={item.id} delay={i * 0.08}>
// //               <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/35 transition-all duration-400 h-full">
// //                 {/* Thumbnail — portrait for brochures/flyers */}
// //                 <div className={`relative overflow-hidden bg-[#0F1220] ${item.aspect === "landscape" ? "aspect-video" : item.aspect === "square" ? "aspect-square" : "aspect-[3/4]"}`}>
// //                   <img
// //                     src={img(item)}
// //                     alt={item.title}
// //                     loading="lazy"
// //                     onError={(e) => fallback(item, e)}
// //                     className={`absolute inset-0 w-full h-full object-cover ${item.aspect === "portrait" ? "object-top" : "object-center"} group-hover:scale-[1.03] transition-transform duration-500`}
// //                   />
// //                   {/* Type chip top-right */}
// //                   <div className="absolute top-2.5 right-2.5">
// //                     <span className="px-2 py-0.5 rounded bg-[#070812]/80 backdrop-blur text-[9px] font-mono text-white/60 border border-white/10">
// //                       {item.type}
// //                     </span>
// //                   </div>
// //                   {/* Print-ready bottom-left */}
// //                   <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-700/40 text-[9px] font-semibold text-emerald-300">
// //                     <CheckCircle2 className="h-2.5 w-2.5" /> Print-ready
// //                   </div>
// //                 </div>
// //                 <div className="px-4 py-3">
// //                   <div className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D]">{item.client}</div>
// //                   <div className="mt-0.5 text-sm font-bold text-white">{item.title}</div>
// //                   <p className="mt-1 text-[11px] text-white/45 leading-snug">{item.caption}</p>
// //                 </div>
// //               </div>
// //             </AnimCard>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // SOCIAL & ADS
// // // ─────────────────────────────────────────────────────────────────────────────
// // const PLATFORM_CLR = {
// //   "Meta / Instagram": "#E1306C",
// //   "Meta / Facebook": "#1877F2",
// //   "Digital Hoarding": "#FF6A3D",
// //   "On-site": "#059669",
// //   "Outdoor": "#7C3AED",
// //   "Retail / Showroom": "#C87A50",
// // };

// // function SocialAdsSection() {
// //   const squares  = SOCIAL_ADS.filter(a => a.aspect === "square");
// //   const landscape = SOCIAL_ADS.filter(a => a.aspect === "landscape");
// //   const portrait  = SOCIAL_ADS.filter(a => a.aspect === "portrait");

// //   const AdCard = ({ item }) => {
// //     // const thumbCls = item.aspect === "square" ? "aspect-square" : item.aspect === "landscape" ? "aspect-video" : "aspect-[4/3]";
// //     const thumbCls = "h-[220px]";
// //     return (
// //     <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/35 transition-all duration-400 h-full">
// //       <div className={`relative ${thumbCls} overflow-hidden bg-[#0F1220]`}>
// //         <img
// //           src={img(item)}
// //           alt={item.title}
// //           loading="lazy"
// //           onError={(e) => fallback(item, e)}
// //           className="absolute inset-0 w-full h-full object-fill group-hover:scale-[1.03] transition-transform duration-500"
// //         />
// //         {/* Platform pill */}
// //         <div className="absolute top-2.5 left-2.5">
// //           <span
// //             className="px-2 py-0.5 rounded text-[9px] font-bold text-white uppercase tracking-wide"
// //             style={{ background: PLATFORM_CLR[item.platform] || "#FF6A3D" }}
// //           >
// //             {item.platform}
// //           </span>
// //         </div>
// //       </div>
// //       <div className="px-3 py-2.5">
// //         <div className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D] truncate">{item.client}</div>
// //         <div className="mt-0.5 text-sm font-bold text-white leading-tight">{item.title}</div>
// //         <p className="mt-0.5 text-[11px] text-white/45 leading-snug line-clamp-2">{item.caption}</p>
// //         <span className="mt-2 inline-block px-1.5 py-0.5 rounded bg-white/5 text-[9px] font-mono text-white/35 border border-white/8">{item.type}</span>
// //       </div>
// //     </div>
// //     );
// //   };

// //   return (
// //     <section id="social-ads" className="py-20 bg-[#08090F] border-t border-white/8">
// //       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// //         <Intro
// //           tag="Social Media & Ad Posters"
// //           title="Creatives that stop the scroll."
// //           sub="Social ads, digital OOH, and campaign posters — designed to convert."
// //         />

// //         {/* Social / Meta — 2 col */}
// //         {squares.length > 0 && (
// //           <div className="mb-10">
// //             <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mb-4">Social Media Creatives</p>
// //             <div className="grid sm:grid-cols-2 gap-4">
// //               {squares.map((item, i) => (
// //                 <AnimCard key={item.id} delay={i * 0.08}>
// //                   <AdCard item={item} />
// //                 </AnimCard>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {/* Landscape OOH — 2 col */}
// //         {landscape.length > 0 && (
// //           <div className="mb-10">
// //             <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mb-4">Outdoor & Billboard Creatives</p>
// //             <div className="grid sm:grid-cols-2 gap-4">
// //               {landscape.map((item, i) => (
// //                 <AnimCard key={item.id} delay={i * 0.08}>
// //                   <AdCard item={item} />
// //                 </AnimCard>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {/* Portrait / vertical — 4 col */}
// //         {portrait.length > 0 && (
// //           <div>
// //             <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mb-4">Digital & Site Hoardings</p>
// //             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //               {portrait.map((item, i) => (
// //                 <AnimCard key={item.id} delay={i * 0.07}>
// //                   <AdCard item={item} />
// //                 </AnimCard>
// //               ))}
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // LEGACY CREATIVE GALLERY
// // // ─────────────────────────────────────────────────────────────────────────────
// // function CreativeGallery() {
// //   const [active, setActive] = useState("all");
// //   const visible = active === "all"
// //     ? CREATIVE_PORTFOLIO.items
// //     : CREATIVE_PORTFOLIO.items.filter(i => i.cat === active);

// //   return (
// //     <section id="gallery" className="py-20 bg-[#070812] border-t border-white/8" data-testid="creative-gallery">
// //       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// //         <FadeIn>
// //           <div className="grid md:grid-cols-12 gap-6 mb-10 items-end">
// //             <div className="md:col-span-7">
// //               <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-3">Creative Gallery</p>
// //               <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-white">Work from the studio.</h2>
// //             </div>
// //             <p className="md:col-span-5 md:pl-8 text-sm text-white/50 leading-relaxed">
// //               Filter by medium — all creative produced by our in-house studio team.
// //             </p>
// //           </div>
// //         </FadeIn>

// //         <div className="flex flex-wrap gap-2 mb-8">
// //           {CREATIVE_PORTFOLIO.categories.map(c => (
// //             <button
// //               key={c.key}
// //               onClick={() => setActive(c.key)}
// //               data-testid={`portfolio-filter-${c.key}`}
// //               className={`px-3.5 py-1.5 text-xs font-semibold rounded border transition-colors ${
// //                 c.key === active
// //                   ? "bg-[#FF6A3D] text-[#070812] border-[#FF6A3D]"
// //                   : "bg-white/5 border-white/10 text-white hover:border-[#FF6A3D] hover:text-[#FF6A3D]"
// //               }`}
// //             >
// //               {c.label}
// //             </button>
// //           ))}
// //         </div>

// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:auto-rows-[260px]">
// //           <AnimatePresence mode="popLayout">
// //             {visible.map((item, i) => (
// //               <motion.div
// //                 key={`${item.title}-${active}`}
// //                 layout
// //                 initial={{ opacity: 0, scale: 0.95 }}
// //                 animate={{ opacity: 1, scale: 1 }}
// //                 exit={{ opacity: 0, scale: 0.95 }}
// //                 transition={{ duration: 0.35, delay: i * 0.025 }}
// //                 className={`group relative overflow-hidden rounded bg-[#0A0D14] border border-white/5 ${item.span || ""}`}
// //                 data-testid={`creative-item-${i}`}
// //               >
// //                 <img
// //                   src={item.img}
// //                   alt={item.title}
// //                   loading="lazy"
// //                   className="absolute inset-0 w-full h-full object-cover object-center  transition-transform duration-700 group-hover:scale-[1.06]"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-[#070812]/90 via-[#070812]/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-400" />
// //                 <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
// //                   <div className="self-end">
// //                     <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#FF6A3D] transition-all duration-400" />
// //                   </div>
// //                   <div>
// //                     <div className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D]">{item.client}</div>
// //                     <div className="mt-0.5 text-sm font-bold leading-tight">{item.title}</div>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </AnimatePresence>
// //         </div>

// //         <div className="mt-14 text-center">
// //           <Link
// //             to="/contact"
// //             className="inline-flex items-center gap-2 bg-[#FF6A3D] hover:bg-[#E85C31] text-white px-6 h-11 text-sm font-semibold rounded transition-colors"
// //           >
// //             Commission a project <ArrowRight className="h-4 w-4" />
// //           </Link>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // PAGE ROOT
// // // ─────────────────────────────────────────────────────────────────────────────
// // export default function Portfolio() {
// //   return (
// //     <PublicLayout>
// //       {/* Hero */}
// //       <section className="bg-[#070812] border-b border-white/8 py-16 md:py-24 text-white relative overflow-hidden" data-testid="portfolio-hero">
// //         <div className="absolute inset-0 opacity-[0.022] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
// //         <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative">
// //           <motion.p
// //             initial={{ opacity: 0, y: 12 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.45, ease: "easeOut" }}
// //             className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4"
// //           >Portfolio</motion.p>
// //           <motion.h1
// //             initial={{ opacity: 0, y: 24 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
// //             className="text-[38px] sm:text-[52px] lg:text-[62px] font-extrabold leading-[1.02] tracking-[-0.02em] text-white max-w-4xl"
// //           >
// //             Websites, brand systems, ad creative, hoardings — all the work we've shipped.
// //           </motion.h1>
// //           <motion.p
// //             initial={{ opacity: 0, y: 16 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
// //             className="mt-5 text-base text-white/55 max-w-xl leading-relaxed"
// //           >
// //             Browse live client sites, then see how a design travels from screen to standee, billboard, brochure, or social post.
// //           </motion.p>

// //           {/* Stats */}
// //           <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
// //             {[
// //               { k: "50+", v: "Brand projects shipped" },
// //               { k: "15+", v: "Live websites" },
// //               { k: "2M+", v: "Creative impressions / campaign" },
// //               { k: "60+", v: "Hoardings & OOH live" },
// //             ].map((s, i) => (
// //               <motion.div
// //                 key={s.v}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
// //                 className="p-4 bg-white/5 border border-white/8 rounded-lg hover:border-[#FF6A3D]/30 transition-colors duration-300"
// //               >
// //                 <div className="text-2xl font-extrabold text-[#FF6A3D]">{s.k}</div>
// //                 <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/35">{s.v}</div>
// //               </motion.div>
// //             ))}
// //           </div>

// //           {/* Jump links */}
// //           <div className="mt-7 flex flex-wrap gap-2">
// //             {[
// //               ["#websites","Websites"],["#logo-design","Logo Design"],
// //               ["#hoardings","Hoardings"],["#printables","Printables"],
// //               ["#social-ads","Social & Ads"],["#gallery","Gallery"],
// //             ].map(([href, label]) => (
// //               <a key={href} href={href} className="px-3 py-1 text-[11px] font-semibold rounded-full border border-white/12 text-white/50 hover:border-[#FF6A3D] hover:text-[#FF6A3D] transition-colors">
// //                 {label}
// //               </a>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <div id="websites"><ProjectShowcase /></div>
// //       <LogoSection />
// //       <HoardingsSection />
// //       <PrintablesSection />
// //       <SocialAdsSection />
// //       <CreativeGallery />
// //     </PublicLayout>
// //   );
// // }

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "motion/react";
// import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
// import PublicLayout from "@/components/layout/PublicLayout";
// import ProjectShowcase from "@/components/landing/ProjectShowcase";
// import { CREATIVE_PORTFOLIO, HOARDINGS, PRINTABLES, SOCIAL_ADS } from "@/data/projectShowcase";

// // ─── Shared fade-in ───────────────────────────────────────────────────────────
// function FadeIn({ children, delay = 0, className = "" }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 24, scale: 0.97 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       viewport={{ once: true, margin: "-60px" }}
//       transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

// // ─── Slide-in from left (for section headings) ────────────────────────────────
// function SlideIn({ children, delay = 0, className = "" }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -28 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true, margin: "-60px" }}
//       transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

// // ─── Animated card wrapper (hover lift + glow) ────────────────────────────────
// function AnimCard({ children, delay = 0, className = "" }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 32 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-40px" }}
//       whileHover={{ y: -4, transition: { duration: 0.22 } }}
//       transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

// // ─── Journey badge ────────────────────────────────────────────────────────────
// const BADGE = {
//   design:  { label: "Design",    cls: "bg-indigo-950 text-indigo-300 border-indigo-800" },
//   mockup:  { label: "Mockup",    cls: "bg-emerald-950 text-emerald-300 border-emerald-800" },
//   real:    { label: "Installed", cls: "bg-orange-950 text-orange-300 border-orange-800" },
// };
// function Badge({ type }) {
//   const b = BADGE[type] || BADGE.design;
//   return (
//     <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${b.cls}`}>
//       {b.label}
//     </span>
//   );
// }

// // ─── Resolve image ────────────────────────────────────────────────────────────
// // Priority: local upload (imgKey) → direct URL (img) → remote CDN (remoteImg)
// function img(item) {
//   if (item.imgKey) return `/uploads/${item.imgKey}.jpeg`;
//   if (item.img) return item.img;
//   return item.remoteImg || "";
// }
// function fallback(item, e) {
//   const el = e.currentTarget;
//   if (item.remoteImg && el.src !== item.remoteImg) {
//     el.src = item.remoteImg;
//   } else if (item.img && el.src !== item.img) {
//     el.src = item.img;
//   }
// }

// // ─── Section intro ────────────────────────────────────────────────────────────
// function Intro({ tag, title, sub }) {
//   return (
//     <div className="mb-12">
//       <SlideIn delay={0}>
//         <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-3">{tag}</p>
//       </SlideIn>
//       <SlideIn delay={0.07}>
//         <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-10">
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight flex-1">{title}</h2>
//           {sub && <p className="text-sm text-white/50 leading-relaxed md:max-w-xs">{sub}</p>}
//         </div>
//       </SlideIn>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // LOGO SECTION
// // ─────────────────────────────────────────────────────────────────────────────
// const LOGOS = [
//   { id: "rrl",    client: "RRL Builders",    industry: "Real Estate",    palette: ["#C9A84C","#070812","#FFFFFF"], deliverables: ["Wordmark","Icon","Brand Manual"],   preview: "https://ik.imagekit.io/j0xzq9pns/marketly/company/image.png" },
//   { id: "rake",   client: "Rakepto",         industry: "EdTech",         palette: ["#E84A1A","#0B5BD3","#FFFFFF"], deliverables: ["Logomark","Colour System","Type"],  preview: "https://ik.imagekit.io/j0xzq9pns/marketly/company/image_BHKLkoq-Q.png" },
//   { id: "dhive",  client: "Designhive",      industry: "Interior Design",palette: ["#C87A50","#1A1208","#F5ECD7"], deliverables: ["Wordmark","Monogram","Stationery"],preview: "https://ik.imagekit.io/j0xzq9pns/marketly/company/image_cMn60WmMm.png" },
//   { id: "cpedia", client: "CollegePedia",    industry: "EdTech",         palette: ["#059669","#0F2040","#FFFFFF"], deliverables: ["Logomark","Guidelines"],            preview: "https://ik.imagekit.io/j0xzq9pns/marketly/company/image_lSE_C0vcW.png" },
//   { id: "nyterra", client: "Nyra Sunterra",    industry: "Interior Design",palette: ["#C87A50","#1A1208","#F5ECD7"], deliverables: ["Wordmark","Monogram","Stationery"], preview: "https://ik.imagekit.io/j0xzq9pns/marketly/company/image_RtmNSE7RH.png" },
// ];

// function LogoSection() {
//   return (
//     <section id="logo-design" className="py-20 bg-[#070812] border-t border-white/8">
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//         <Intro
//           tag="Logo Designing & Photography"
//           title="From concept to execution, we handle everything."
//           sub="Full brand identity — logo, colour system, type pairing, usage guidelines, and on-site production."
//         />

//         {/* Process strip */}
//         <FadeIn delay={0.05} className="mb-10">
//           <div className="flex items-center gap-0 overflow-x-auto pb-2 scrollbar-none">
//             {["Discovery","Sketches","Digital","Colour & Type","Final Delivery"].map((s, i) => (
//               <div key={s} className="flex items-center shrink-0">
//                 <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-white/60 whitespace-nowrap">
//                   <span className="text-[#FF6A3D] mr-1.5">0{i+1}</span>{s}
//                 </div>
//                 {i < 4 && <span className="mx-1.5 text-white/20 text-xs">→</span>}
//               </div>
//             ))}
//           </div>
//         </FadeIn>

//         {/* Cards — compact horizontal layout */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {LOGOS.map((l, i) => (
//             <AnimCard key={l.id} delay={i * 0.06}>
//               <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/40 transition-all duration-400 h-full">
//                 {/* Thumbnail — aspect ratio so landscape previews aren't crushed */}
//                 <div className="relative aspect-[16/9] overflow-hidden bg-[#0F1220]">
//                   <img
//                     src={l.preview}
//                     alt={l.client}
//                     loading="lazy"
//                     className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-[1.04] transition-all duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D18] to-transparent" />
//                   {/* Palette */}
//                   <div className="absolute bottom-3 left-3 flex gap-1.5">
//                     {l.palette.map(hex => (
//                       <span key={hex} className="h-4 w-4 rounded-full border border-white/25 shadow" style={{background:hex}} />
//                     ))}
//                   </div>
//                 </div>
//                 {/* Info */}
//                 <div className="p-4">
//                   <div className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D]">{l.industry}</div>
//                   <div className="mt-1 text-sm font-bold text-white">{l.client}</div>
//                   <div className="mt-2.5 flex flex-wrap gap-1">
//                     {l.deliverables.map(d => (
//                       <span key={d} className="px-1.5 py-0.5 text-[10px] font-mono bg-white/5 text-white/40 border border-white/8 rounded">
//                         {d}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </AnimCard>
//           ))}
//         </div>

//         {/* Photography - Concept to Execution */}
//         <FadeIn delay={0.15}>
//           <div className="mt-12">
//             <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mb-4">On-Site Photography & Execution</p>
//             <div className="grid sm:grid-cols-2 gap-4">
//               <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/40 transition-all duration-400">
//                 <img 
//                   src="https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.34.44%20AM.jpeg?updatedAt=1783321553084" 
//                   alt="Photography Concept to Execution 1" 
//                   loading="lazy" 
//                   className="w-full h-72 object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500" 
//                 />
//               </div>
//               <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/40 transition-all duration-400">
//                 <img 
//                   src="https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.34.44%20AM1.jpeg?updatedAt=1783321552889" 
//                   alt="Photography Concept to Execution 2" 
//                   loading="lazy" 
//                   className="w-full h-72 object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500" 
//                 />
//               </div>
//             </div>
//           </div>
//         </FadeIn>

//         <FadeIn delay={0.2}>
//           <p className="mt-8 text-xs text-white/25 text-center">Full brand decks available on request</p>
//         </FadeIn>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // HOARDINGS & BANNERS
// // Design → Mockup → Installed, shown as compact cards in campaign rows
// // ─────────────────────────────────────────────────────────────────────────────

// /**
//  * One campaign row — items shown as fixed-height thumbnail cards.
//  * Aspect ratio is used only as `object-position` hint, not to set frame height.
//  */
// function CampaignRow({ title, client, items }) {
//   return (
//     <div className="mb-10">
//       {/* Row header */}
//       <div className="flex items-center gap-3 mb-4">
//         <div>
//           <span className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D]">{client}</span>
//           <h3 className="text-sm font-bold text-white mt-0.5">{title}</h3>
//         </div>
//         {/* Journey pills */}
//         <div className="ml-auto flex items-center gap-1.5">
//           {items.map((item, i) => (
//             <span key={item.id} className="flex items-center gap-1">
//               <Badge type={item.type} />
//               {i < items.length - 1 && <ArrowRight className="h-3 w-3 text-white/20" />}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Cards grid — all same height, images cropped */}
//       <div className={`grid gap-3 ${items.length === 2 ? "grid-cols-2" : items.length === 3 ? "grid-cols-3" : "grid-cols-2 md:grid-cols-4"}`}>
//         {items.map((item, i) => (
//           <AnimCard key={item.id} delay={i * 0.07}>
//             <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/35 transition-all duration-400 h-full">
//               {/* Thumbnail — aspect ratio matches image orientation */}
//               <div className="relative h-[320px] overflow-hidden bg-[#0F1220]">
//                 <img
//                   src={img(item)}
//                   alt={item.caption}
//                   loading="lazy"
//                   onError={(e) => fallback(item, e)}
//                   className={`absolute inset-0 w-full h-full object-fit ${item.aspect === "portrait" ? "object-top" : "object-center"} group-hover:scale-[1.04] transition-transform duration-500`}
//                 />
//                 <div className="absolute top-2.5 left-2.5">
//                   <Badge type={item.type} />
//                 </div>
//               </div>
//               {/* Caption */}
//               <div className="px-3 py-2.5">
//                 <div className="text-[10px] font-semibold text-white/35 truncate">{item.project}</div>
//                 <p className="mt-0.5 text-[11px] text-white/55 leading-snug line-clamp-2">{item.caption}</p>
//               </div>
//             </div>
//           </AnimCard>
//         ))}
//       </div>
//     </div>
//   );
// }

// function HoardingsSection() {
//   const nc216 = HOARDINGS.filter(h => h.project.startsWith("NC216"));
//   const rrlOther = HOARDINGS.filter(h => !h.project.startsWith("NC216") && !h.project.includes("Palm") && h.client === "RRL Builders & Developers");
//   const palm = HOARDINGS.filter(h => h.project.includes("Palm Altezze"));
//   const rakepto = HOARDINGS.filter(h => h.client === "Rakepto");

//   return (
//     <section id="hoardings" className="py-20 bg-[#08090F] border-t border-white/8">
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//         <Intro
//           tag="Hoardings & Banners"
//           title="From screen to street."
//           sub="Design file → print mockup → real world installation. We handle the full chain."
//         />

//         {/* Legend */}
//         <FadeIn delay={0.04} className="mb-10">
//           <div className="flex flex-wrap items-center gap-2 text-[11px]">
//             {Object.entries(BADGE).map(([k,v]) => (
//               <span key={k} className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded border font-semibold ${v.cls}`}>
//                 <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />{v.label}
//               </span>
//             ))}
//             <span className="ml-1 text-white/25">shows where each piece lives in the production journey</span>
//           </div>
//         </FadeIn>

//         <CampaignRow title="NC216 EOI Campaign" client="RRL Builders & Developers" items={nc216} />
//         {rrlOther.length > 0 && <CampaignRow title="Portfolio Flyer & Event Installation" client="RRL Builders & Developers" items={rrlOther} />}
//         {palm.length > 0 && <CampaignRow title="Palm Altezze — Pole Signage" client="RRL Builders & Developers" items={palm} />}
//         {rakepto.length > 0 && <CampaignRow title="Brand Signage" client="Rakepto" items={rakepto} />}
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // PRINTABLES
// // ─────────────────────────────────────────────────────────────────────────────
// function PrintablesSection() {
//   return (
//     <section id="printables" className="py-20 bg-[#070812] border-t border-white/8">
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//         <Intro
//           tag="Printables"
//           title="Print-ready, always."
//           sub="Brochures, flyers, bifolds — designed at bleed, exported at 300 DPI."
//         />

//         <div className="grid sm:grid-cols-3 gap-5">
//           {PRINTABLES.map((item, i) => (
//             <AnimCard key={item.id} delay={i * 0.08}>
//               <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/35 transition-all duration-400 h-full">
//                 {/* Thumbnail — portrait for brochures/flyers */}
//                 <div className={`relative overflow-hidden bg-[#0F1220] ${item.aspect === "landscape" ? "aspect-video" : item.aspect === "square" ? "aspect-square" : "aspect-[3/4]"}`}>
//                   <img
//                     src={img(item)}
//                     alt={item.title}
//                     loading="lazy"
//                     onError={(e) => fallback(item, e)}
//                     className={`absolute inset-0 w-full h-full object-cover ${item.aspect === "portrait" ? "object-top" : "object-center"} group-hover:scale-[1.03] transition-transform duration-500`}
//                   />
//                   {/* Type chip top-right */}
//                   <div className="absolute top-2.5 right-2.5">
//                     <span className="px-2 py-0.5 rounded bg-[#070812]/80 backdrop-blur text-[9px] font-mono text-white/60 border border-white/10">
//                       {item.type}
//                     </span>
//                   </div>
//                   {/* Print-ready bottom-left */}
//                   <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-700/40 text-[9px] font-semibold text-emerald-300">
//                     <CheckCircle2 className="h-2.5 w-2.5" /> Print-ready
//                   </div>
//                 </div>
//                 <div className="px-4 py-3">
//                   <div className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D]">{item.client}</div>
//                   <div className="mt-0.5 text-sm font-bold text-white">{item.title}</div>
//                   <p className="mt-1 text-[11px] text-white/45 leading-snug">{item.caption}</p>
//                 </div>
//               </div>
//             </AnimCard>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // SOCIAL & ADS
// // ─────────────────────────────────────────────────────────────────────────────
// const PLATFORM_CLR = {
//   "Meta / Instagram": "#E1306C",
//   "Meta / Facebook": "#1877F2",
//   "Digital Hoarding": "#FF6A3D",
//   "On-site": "#059669",
//   "Outdoor": "#7C3AED",
//   "Retail / Showroom": "#C87A50",
// };

// function SocialAdsSection() {
//   const squares  = SOCIAL_ADS.filter(a => a.aspect === "square");
//   const landscape = SOCIAL_ADS.filter(a => a.aspect === "landscape");
//   const portrait  = SOCIAL_ADS.filter(a => a.aspect === "portrait");

//   const AdCard = ({ item }) => {
//     const thumbCls = "h-[220px]";
//     return (
//     <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/35 transition-all duration-400 h-full">
//       <div className={`relative ${thumbCls} overflow-hidden bg-[#0F1220]`}>
//         <img
//           src={img(item)}
//           alt={item.title}
//           loading="lazy"
//           onError={(e) => fallback(item, e)}
//           className="absolute inset-0 w-full h-full object-fill group-hover:scale-[1.03] transition-transform duration-500"
//         />
//         {/* Platform pill */}
//         <div className="absolute top-2.5 left-2.5">
//           <span
//             className="px-2 py-0.5 rounded text-[9px] font-bold text-white uppercase tracking-wide"
//             style={{ background: PLATFORM_CLR[item.platform] || "#FF6A3D" }}
//           >
//             {item.platform}
//           </span>
//         </div>
//       </div>
//       <div className="px-3 py-2.5">
//         <div className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D] truncate">{item.client}</div>
//         <div className="mt-0.5 text-sm font-bold text-white leading-tight">{item.title}</div>
//         <p className="mt-0.5 text-[11px] text-white/45 leading-snug line-clamp-2">{item.caption}</p>
//         <span className="mt-2 inline-block px-1.5 py-0.5 rounded bg-white/5 text-[9px] font-mono text-white/35 border border-white/8">{item.type}</span>
//       </div>
//     </div>
//     );
//   };

//   return (
//     <section id="social-ads" className="py-20 bg-[#08090F] border-t border-white/8">
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//         <Intro
//           tag="Social Media & Ad Posters"
//           title="Creatives that stop the scroll."
//           sub="Social ads, digital OOH, and campaign posters — designed to convert."
//         />

//         {/* Social / Meta — 2 col */}
//         {squares.length > 0 && (
//           <div className="mb-10">
//             <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mb-4">Social Media Creatives</p>
//             <div className="grid sm:grid-cols-2 gap-4">
//               {squares.map((item, i) => (
//                 <AnimCard key={item.id} delay={i * 0.08}>
//                   <AdCard item={item} />
//                 </AnimCard>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Landscape OOH — 2 col */}
//         {landscape.length > 0 && (
//           <div className="mb-10">
//             <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mb-4">Outdoor & Billboard Creatives</p>
//             <div className="grid sm:grid-cols-2 gap-4">
//               {landscape.map((item, i) => (
//                 <AnimCard key={item.id} delay={i * 0.08}>
//                   <AdCard item={item} />
//                 </AnimCard>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Portrait / vertical — 4 col */}
//         {portrait.length > 0 && (
//           <div>
//             <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mb-4">Digital & Site Hoardings</p>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               {portrait.map((item, i) => (
//                 <AnimCard key={item.id} delay={i * 0.07}>
//                   <AdCard item={item} />
//                 </AnimCard>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // LEGACY CREATIVE GALLERY
// // ─────────────────────────────────────────────────────────────────────────────
// function CreativeGallery() {
//   const [active, setActive] = useState("all");
  
//   // Inject Rakepto execution images directly into the array to show up in the portfolio
//   const extendedPortfolioItems = [
//     ...CREATIVE_PORTFOLIO.items,
//     { cat: "print", title: "Rakepto Standee Display", client: "Rakepto", img: "https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.34.42%20AM.jpeg?updatedAt=1783321553668" },
//     { cat: "print", title: "Rakepto Office Exterior Wide", client: "Rakepto", img: "https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.34.43%20AM%20(1).jpeg?updatedAt=1783321553522" },
//     { cat: "print", title: "Rakepto Storefront Closer", client: "Rakepto", img: "https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.34.43%20AM.jpeg?updatedAt=1783321551968" },
//   ];

//   const visible = active === "all"
//     ? extendedPortfolioItems
//     : extendedPortfolioItems.filter(i => i.cat === active);

//   return (
//     <section id="gallery" className="py-20 bg-[#070812] border-t border-white/8" data-testid="creative-gallery">
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//         <FadeIn>
//           <div className="grid md:grid-cols-12 gap-6 mb-10 items-end">
//             <div className="md:col-span-7">
//               <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-3">Creative Gallery</p>
//               <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-white">Work from the studio.</h2>
//             </div>
//             <p className="md:col-span-5 md:pl-8 text-sm text-white/50 leading-relaxed">
//               Filter by medium — all creative produced by our in-house studio team.
//             </p>
//           </div>
//         </FadeIn>

//         <div className="flex flex-wrap gap-2 mb-8">
//           {CREATIVE_PORTFOLIO.categories.map(c => (
//             <button
//               key={c.key}
//               onClick={() => setActive(c.key)}
//               data-testid={`portfolio-filter-${c.key}`}
//               className={`px-3.5 py-1.5 text-xs font-semibold rounded border transition-colors ${
//                 c.key === active
//                   ? "bg-[#FF6A3D] text-[#070812] border-[#FF6A3D]"
//                   : "bg-white/5 border-white/10 text-white hover:border-[#FF6A3D] hover:text-[#FF6A3D]"
//               }`}
//             >
//               {c.label}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:auto-rows-[260px]">
//           <AnimatePresence mode="popLayout">
//             {visible.map((item, i) => (
//               <motion.div
//                 key={`${item.title}-${active}-${i}`}
//                 layout
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.95 }}
//                 transition={{ duration: 0.35, delay: i * 0.025 }}
//                 className={`group relative overflow-hidden rounded bg-[#0A0D14] border border-white/5 ${item.span || ""}`}
//                 data-testid={`creative-item-${i}`}
//               >
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   loading="lazy"
//                   className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.06]"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#070812]/90 via-[#070812]/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-400" />
//                 <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
//                   <div className="self-end">
//                     <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#FF6A3D] transition-all duration-400" />
//                   </div>
//                   <div>
//                     <div className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D]">{item.client}</div>
//                     <div className="mt-0.5 text-sm font-bold leading-tight">{item.title}</div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//         <div className="mt-14 text-center">
//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-2 bg-[#FF6A3D] hover:bg-[#E85C31] text-white px-6 h-11 text-sm font-semibold rounded transition-colors"
//           >
//             Commission a project <ArrowRight className="h-4 w-4" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // PAGE ROOT
// // ─────────────────────────────────────────────────────────────────────────────
// export default function Portfolio() {
//   return (
//     <PublicLayout>
//       {/* Hero */}
//       <section className="bg-[#070812] border-b border-white/8 py-16 md:py-24 text-white relative overflow-hidden" data-testid="portfolio-hero">
//         <div className="absolute inset-0 opacity-[0.022] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
//         <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative">
//           <motion.p
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.45, ease: "easeOut" }}
//             className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4"
//           >Portfolio</motion.p>
//           <motion.h1
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
//             className="text-[38px] sm:text-[52px] lg:text-[62px] font-extrabold leading-[1.02] tracking-[-0.02em] text-white max-w-4xl"
//           >
//             Websites, brand systems, ad creative, hoardings — all the work we've shipped.
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 16 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
//             className="mt-5 text-base text-white/55 max-w-xl leading-relaxed"
//           >
//             Browse live client sites, then see how a design travels from screen to standee, billboard, brochure, or social post.
//           </motion.p>

//           {/* Stats */}
//           <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
//             {[
//               { k: "50+", v: "Brand projects shipped" },
//               { k: "15+", v: "Live websites" },
//               { k: "2M+", v: "Creative impressions / campaign" },
//               { k: "60+", v: "Hoardings & OOH live" },
//             ].map((s, i) => (
//               <motion.div
//                 key={s.v}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
//                 className="p-4 bg-white/5 border border-white/8 rounded-lg hover:border-[#FF6A3D]/30 transition-colors duration-300"
//               >
//                 <div className="text-2xl font-extrabold text-[#FF6A3D]">{s.k}</div>
//                 <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/35">{s.v}</div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Jump links */}
//           <div className="mt-7 flex flex-wrap gap-2">
//             {[
//               ["#websites","Websites"],["#logo-design","Logo Design"],
//               ["#hoardings","Hoardings"],["#printables","Printables"],
//               ["#social-ads","Social & Ads"],["#gallery","Gallery"],
//             ].map(([href, label]) => (
//               <a key={href} href={href} className="px-3 py-1 text-[11px] font-semibold rounded-full border border-white/12 text-white/50 hover:border-[#FF6A3D] hover:text-[#FF6A3D] transition-colors">
//                 {label}
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       <div id="websites"><ProjectShowcase /></div>
//       <LogoSection />
//       <HoardingsSection />
//       <PrintablesSection />
//       <SocialAdsSection />
//       <CreativeGallery />
//     </PublicLayout>
//   );
// }

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import PublicLayout from "@/components/layout/PublicLayout";
import ProjectShowcase from "@/components/landing/ProjectShowcase";
import { CREATIVE_PORTFOLIO, HOARDINGS, PRINTABLES, SOCIAL_ADS } from "@/data/projectShowcase";

// ─── Shared fade-in ───────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Slide-in from left (for section headings) ────────────────────────────────
function SlideIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Animated card wrapper (hover lift + glow) ────────────────────────────────
function AnimCard({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -4, transition: { duration: 0.22 } }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Journey badge ────────────────────────────────────────────────────────────
const BADGE = {
  design:  { label: "Design",    cls: "bg-indigo-950 text-indigo-300 border-indigo-800" },
  mockup:  { label: "Mockup",    cls: "bg-emerald-950 text-emerald-300 border-emerald-800" },
  real:    { label: "Installed", cls: "bg-orange-950 text-orange-300 border-orange-800" },
};
function Badge({ type }) {
  const b = BADGE[type] || BADGE.design;
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${b.cls}`}>
      {b.label}
    </span>
  );
}

// ─── Resolve image ────────────────────────────────────────────────────────────
// Priority: local upload (imgKey) → direct URL (img) → remote CDN (remoteImg)
function img(item) {
  if (item.imgKey) return `/uploads/${item.imgKey}.jpeg`;
  if (item.img) return item.img;
  return item.remoteImg || "";
}
function fallback(item, e) {
  const el = e.currentTarget;
  if (item.remoteImg && el.src !== item.remoteImg) {
    el.src = item.remoteImg;
  } else if (item.img && el.src !== item.img) {
    el.src = item.img;
  }
}

// ─── Section intro ────────────────────────────────────────────────────────────
function Intro({ tag, title, sub }) {
  return (
    <div className="mb-12">
      <SlideIn delay={0}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-3">{tag}</p>
      </SlideIn>
      <SlideIn delay={0.07}>
        <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight flex-1">{title}</h2>
          {sub && <p className="text-sm text-white/50 leading-relaxed md:max-w-xs">{sub}</p>}
        </div>
      </SlideIn>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LOGO SECTION
// ─────────────────────────────────────────────────────────────────────────────
const LOGOS = [
  { id: "rrl",    client: "RRL Builders",    industry: "Real Estate",    palette: ["#C9A84C","#070812","#FFFFFF"], deliverables: ["Wordmark","Icon","Brand Manual"],   preview: "https://ik.imagekit.io/j0xzq9pns/marketly/company/image.png" },
  { id: "rake",   client: "Rakepto",         industry: "EdTech",         palette: ["#E84A1A","#0B5BD3","#FFFFFF"], deliverables: ["Logomark","Colour System","Type"],  preview: "https://ik.imagekit.io/j0xzq9pns/marketly/company/image_BHKLkoq-Q.png" },
  { id: "dhive",  client: "Designhive",      industry: "Interior Design",palette: ["#C87A50","#1A1208","#F5ECD7"], deliverables: ["Wordmark","Monogram","Stationery"],preview: "https://ik.imagekit.io/j0xzq9pns/marketly/company/image_cMn60WmMm.png" },
  { id: "cpedia", client: "CollegePedia",    industry: "EdTech",         palette: ["#059669","#0F2040","#FFFFFF"], deliverables: ["Logomark","Guidelines"],            preview: "https://ik.imagekit.io/j0xzq9pns/marketly/company/image_lSE_C0vcW.png" },
  { id: "nyterra", client: "Nyra Sunterra",    industry: "Interior Design",palette: ["#C87A50","#1A1208","#F5ECD7"], deliverables: ["Wordmark","Monogram","Stationery"], preview: "https://ik.imagekit.io/j0xzq9pns/marketly/company/image_RtmNSE7RH.png" },
];

function LogoSection() {
  return (
    <section id="logo-design" className="py-20 bg-[#070812] border-t border-white/8">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Intro
          tag="Logo Designing & Photography"
          title="From concept to execution, we handle everything."
          sub="Full brand identity — logo, colour system, type pairing, usage guidelines, and on-site production."
        />

        {/* Process strip */}
        <FadeIn delay={0.05} className="mb-10">
          <div className="flex items-center gap-0 overflow-x-auto pb-2 scrollbar-none">
            {["Discovery","Sketches","Digital","Colour & Type","Final Delivery"].map((s, i) => (
              <div key={s} className="flex items-center shrink-0">
                <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-white/60 whitespace-nowrap">
                  <span className="text-[#FF6A3D] mr-1.5">0{i+1}</span>{s}
                </div>
                {i < 4 && <span className="mx-1.5 text-white/20 text-xs">→</span>}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Cards — compact horizontal layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LOGOS.map((l, i) => (
            <AnimCard key={l.id} delay={i * 0.06}>
              <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/40 transition-all duration-400 h-full">
                {/* Thumbnail — aspect ratio so landscape previews aren't crushed */}
                <div className="relative aspect-[16/9] overflow-hidden bg-[#0F1220]">
                  <img
                    src={l.preview}
                    alt={l.client}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-[1.04] transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D18] to-transparent" />
                  {/* Palette */}
                  <div className="absolute bottom-3 left-3 flex gap-1.5">
                    {l.palette.map(hex => (
                      <span key={hex} className="h-4 w-4 rounded-full border border-white/25 shadow" style={{background:hex}} />
                    ))}
                  </div>
                </div>
                {/* Info */}
                <div className="p-4">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D]">{l.industry}</div>
                  <div className="mt-1 text-sm font-bold text-white">{l.client}</div>
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {l.deliverables.map(d => (
                      <span key={d} className="px-1.5 py-0.5 text-[10px] font-mono bg-white/5 text-white/40 border border-white/8 rounded">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimCard>
          ))}
        </div>

        {/* Photography - Concept to Execution */}
        <FadeIn delay={0.15}>
          <div className="mt-12">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mb-4">On-Site Photography & Execution</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/40 transition-all duration-400">
                <img 
                  src="https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.34.44%20AM.jpeg?updatedAt=1783321553084" 
                  alt="Photography Concept to Execution 1" 
                  loading="lazy" 
                  className="w-full h-72 object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500" 
                />
              </div>
              <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/40 transition-all duration-400">
                <img 
                  src="https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.34.44%20AM1.jpeg?updatedAt=1783321552889" 
                  alt="Photography Concept to Execution 2" 
                  loading="lazy" 
                  className="w-full h-72 object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500" 
                />
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-8 text-xs text-white/25 text-center">Full brand decks available on request</p>
        </FadeIn>
      </div>
    </section>
  );
}

const AWARD_IMAGES = [
  "https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.38.51%20AM.jpeg?updatedAt=1783321554375", // KSPL Award
  "https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.34.03%20AM.jpeg?updatedAt=1783321554261", // Women's Day
  "https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.34.40%20AM.jpeg?updatedAt=1783321554052", // Karnataka Award
  "https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.38.38%20AM.jpeg?updatedAt=1783321552691", // Patel Group
];
// ─────────────────────────────────────────────────────────────────────────────
// AWARDS & RECOGNITION (LEFT-TO-RIGHT MARQUEE)
// ─────────────────────────────────────────────────────────────────────────────
function AwardsSection() {
  // Tripling the array ensures we have enough content to scroll seamlessly left to right
  const marqueeImages = [...AWARD_IMAGES, ...AWARD_IMAGES, ...AWARD_IMAGES];

  return (
    <section id="awards" className="py-20 bg-[#070812] border-t border-white/8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 mb-12">
        <Intro
          tag="Recognition & Awards"
          title="Milestones & Moments."
          sub="Celebrating excellence and building meaningful connections with our partners."
        />
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden">
        {/* Edge Gradients for smooth fade effect */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#070812] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#070812] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 md:gap-6 px-3"
          // Left to Right scrolling: Start offset negatively, animate to 0
          animate={{ x: ["-33.33%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 25, // Adjust duration to control speed
            ease: "linear",
          }}
        >
          {marqueeImages.map((src, i) => (
            <div 
              key={i} 
              className="relative w-[260px] md:w-[380px] h-[340px] md:h-[480px] shrink-0 rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 group"
            >
              <img
                src={src}
                alt={`Award recognition ${i}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
// ─────────────────────────────────────────────────────────────────────────────
// STUDENT CONNECT & INDUSTRY EXPOSURE SECTION
// ─────────────────────────────────────────────────────────────────────────────
const INDUSTRY_IMAGES = [
  { id: "ie1", img: "https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.38.39%20AM.jpeg?updatedAt=1783321553751", title: "Student Cohort", desc: "Group learning and practical exposure sessions." },
  { id: "ie2", img: "https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.34.39%20AM%20(1).jpeg?updatedAt=1783321553671", title: "Campus Drive Inauguration", desc: "Connecting students with top industry leaders." },
  { id: "ie3", img: "https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.34.39%20AM.jpeg?updatedAt=1783321553527", title: "Industry Briefing", desc: "Real-world operational training for students." },
  { id: "ie4", img: "https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.34.41%20AM%20(1).jpeg?updatedAt=1783321552196", title: "Mentorship Session", desc: "Guided sessions linking academia and industry." },
  { id: "ie5", img: "https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.34.41%20AM%20(2).jpeg?updatedAt=1783321552745", title: "UG & PG Interaction", desc: "Hands-on experience beyond classroom theory." },
  { id: "ie6", img: "https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.34.41%20AM.jpeg?updatedAt=1783321552159", title: "Recognition & Awards", desc: "Celebrating student achievements and milestones." },
  { id: "ie7", img: "https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.34.42%20AM%20(1).jpeg?updatedAt=1783321553888", title: "Technical Workshop", desc: "Interactive computer lab and software training." },
  { id: "ie8", img: "https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.34.42%20AM%20(2).jpeg?updatedAt=1783321553418", title: "Certificate Course Session", desc: "Specialized skill-building and certification." },
];

function IndustryExposureSection() {
  return (
    <section id="industry-exposure" className="py-20 bg-[#08090F] border-t border-white/8">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Intro
          tag="Academia & Industry"
          title="Student Connect & Industry Exposure"
          sub="Empowering UG and PG students by bridging the gap between theoretical learning and practical industry expectations."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INDUSTRY_IMAGES.map((item, i) => (
            <AnimCard key={item.id} delay={i * 0.05}>
              <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/40 transition-all duration-400 h-full">
                <div className="relative h-48 overflow-hidden bg-[#0F1220]">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D18]/90 via-[#0A0D18]/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-400" />
                </div>
                <div className="p-4">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D]">Exposure</div>
                  <div className="mt-1 text-sm font-bold text-white leading-tight">{item.title}</div>
                  <p className="mt-1.5 text-[11px] text-white/45 leading-snug">{item.desc}</p>
                </div>
              </div>
            </AnimCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HOARDINGS & BANNERS
// Design → Mockup → Installed, shown as compact cards in campaign rows
// ─────────────────────────────────────────────────────────────────────────────

/**
 * One campaign row — items shown as fixed-height thumbnail cards.
 * Aspect ratio is used only as `object-position` hint, not to set frame height.
 */
function CampaignRow({ title, client, items }) {
  return (
    <div className="mb-10">
      {/* Row header */}
      <div className="flex items-center gap-3 mb-4">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D]">{client}</span>
          <h3 className="text-sm font-bold text-white mt-0.5">{title}</h3>
        </div>
        {/* Journey pills */}
        <div className="ml-auto flex items-center gap-1.5">
          {items.map((item, i) => (
            <span key={item.id} className="flex items-center gap-1">
              <Badge type={item.type} />
              {i < items.length - 1 && <ArrowRight className="h-3 w-3 text-white/20" />}
            </span>
          ))}
        </div>
      </div>

      {/* Cards grid — all same height, images cropped */}
      <div className={`grid gap-3 ${items.length === 2 ? "grid-cols-2" : items.length === 3 ? "grid-cols-3" : "grid-cols-2 md:grid-cols-4"}`}>
        {items.map((item, i) => (
          <AnimCard key={item.id} delay={i * 0.07}>
            <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/35 transition-all duration-400 h-full">
              {/* Thumbnail — aspect ratio matches image orientation */}
              <div className="relative h-[320px] overflow-hidden bg-[#0F1220]">
                <img
                  src={img(item)}
                  alt={item.caption}
                  loading="lazy"
                  onError={(e) => fallback(item, e)}
                  className={`absolute inset-0 w-full h-full object-fit ${item.aspect === "portrait" ? "object-top" : "object-center"} group-hover:scale-[1.04] transition-transform duration-500`}
                />
                <div className="absolute top-2.5 left-2.5">
                  <Badge type={item.type} />
                </div>
              </div>
              {/* Caption */}
              <div className="px-3 py-2.5">
                <div className="text-[10px] font-semibold text-white/35 truncate">{item.project}</div>
                <p className="mt-0.5 text-[11px] text-white/55 leading-snug line-clamp-2">{item.caption}</p>
              </div>
            </div>
          </AnimCard>
        ))}
      </div>
    </div>
  );
}

// function HoardingsSection() {
//   const nc216 = HOARDINGS.filter(h => h.project.startsWith("NC216"));
//   const rrlOther = HOARDINGS.filter(h => !h.project.startsWith("NC216") && !h.project.includes("Palm") && h.client === "RRL Builders & Developers");
//   const palm = HOARDINGS.filter(h => h.project.includes("Palm Altezze"));
//   const rakepto = HOARDINGS.filter(h => h.client === "Rakepto");

//   return (
//     <section id="hoardings" className="py-20 bg-[#08090F] border-t border-white/8">
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//         <Intro
//           tag="Hoardings & Banners"
//           title="From screen to street."
//           sub="Design file → print mockup → real world installation. We handle the full chain."
//         />

//         {/* Legend */}
//         <FadeIn delay={0.04} className="mb-10">
//           <div className="flex flex-wrap items-center gap-2 text-[11px]">
//             {Object.entries(BADGE).map(([k,v]) => (
//               <span key={k} className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded border font-semibold ${v.cls}`}>
//                 <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />{v.label}
//               </span>
//             ))}
//             <span className="ml-1 text-white/25">shows where each piece lives in the production journey</span>
//           </div>
//         </FadeIn>

//         <CampaignRow title="NC216 EOI Campaign" client="RRL Builders & Developers" items={nc216} />
//         {rrlOther.length > 0 && <CampaignRow title="Portfolio Flyer & Event Installation" client="RRL Builders & Developers" items={rrlOther} />}
//         {palm.length > 0 && <CampaignRow title="Palm Altezze — Pole Signage" client="RRL Builders & Developers" items={palm} />}
//         {rakepto.length > 0 && <CampaignRow title="Brand Signage" client="Rakepto" items={rakepto} />}
//       </div>
//     </section>
//   );
// }

// ─────────────────────────────────────────────────────────────────────────────
// PRINTABLES
// ─────────────────────────────────────────────────────────────────────────────

function HoardingsSection() {
  const nc216 = HOARDINGS.filter(h => h.project.startsWith("NC216"));
  const rrlOther = HOARDINGS.filter(h => !h.project.startsWith("NC216") && !h.project.includes("Palm") && h.client === "RRL Builders & Developers");
  const palm = HOARDINGS.filter(h => h.project.includes("Palm Altezze"));
  const rakepto = HOARDINGS.filter(h => h.client === "Rakepto");

  // Cycle through ratios for variety
  const getAspectClass = (index) => {
    const ratios = ["aspect-[4/3]", "aspect-[3/4]", "aspect-square", "aspect-video"];
    return ratios[index % ratios.length];
  };

  const CampaignGrid = ({ items, title, client }) => {
    if (items.length === 0) return null;

    return (
      <div className="mb-20">
        <div className="mb-8 border-l-2 border-[#FF6A3D] pl-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-white/50">{client}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <AnimCard key={item.id || i} delay={i * 0.05}>
              {/* Card wrapper uses flex-col to push content to bottom */}
              <div className="group flex flex-col h-full rounded-2xl bg-[#0A0D18] border border-white/5 hover:border-[#FF6A3D]/50 transition-all duration-500 overflow-hidden">
                
                {/* Image Frame */}
                <div className={`relative overflow-hidden bg-[#0F1220] w-full ${getAspectClass(i)}`}>
                  <img
                    src={item.img}
                    alt={item.title || item.project}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-fill group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D18] via-transparent to-transparent opacity-80" />
                </div>

                {/* Content Area: flex-grow ensures this pushes to the bottom of the card */}
                <div className="p-5 flex flex-col flex-grow justify-end">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6A3D] mb-1.5">
                    {item.type || "Installation"}
                  </div>
                  <h4 className="text-sm font-semibold text-white leading-snug">
                    {item.title || item.project}
                  </h4>
                </div>
              </div>
            </AnimCard>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="hoardings" className="py-24 bg-[#08090F] border-t border-white/8">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Intro
          tag="Hoardings & Banners"
          title="From screen to street."
          sub="Design file → print mockup → real world installation."
        />

        <div className="mt-16">
          <CampaignGrid items={nc216} title="NC216 EOI Campaign" client="RRL Builders & Developers" />
          <CampaignGrid items={rrlOther} title="Portfolio & Event" client="RRL Builders & Developers" />
          <CampaignGrid items={palm} title="Palm Altezze" client="RRL Builders & Developers" />
          <CampaignGrid items={rakepto} title="Brand Signage" client="Rakepto" />
        </div>
      </div>
    </section>
  );
}

function PrintablesSection() {
  return (
    <section id="printables" className="py-20 bg-[#070812] border-t border-white/8">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Intro
          tag="Printables"
          title="Print-ready, always."
          sub="Brochures, flyers, bifolds — designed at bleed, exported at 300 DPI."
        />

        <div className="grid sm:grid-cols-3 gap-5">
          {PRINTABLES.map((item, i) => (
            <AnimCard key={item.id} delay={i * 0.08}>
              <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/35 transition-all duration-400 h-full">
                {/* Thumbnail — portrait for brochures/flyers */}
                <div className={`relative overflow-hidden bg-[#0F1220] ${item.aspect === "landscape" ? "aspect-video" : item.aspect === "square" ? "aspect-square" : "aspect-[3/4]"}`}>
                  <img
                    src={img(item)}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => fallback(item, e)}
                    className={`absolute inset-0 w-full h-full object-cover ${item.aspect === "portrait" ? "object-top" : "object-center"} group-hover:scale-[1.03] transition-transform duration-500`}
                  />
                  {/* Type chip top-right */}
                  <div className="absolute top-2.5 right-2.5">
                    <span className="px-2 py-0.5 rounded bg-[#070812]/80 backdrop-blur text-[9px] font-mono text-white/60 border border-white/10">
                      {item.type}
                    </span>
                  </div>
                  {/* Print-ready bottom-left */}
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-700/40 text-[9px] font-semibold text-emerald-300">
                    <CheckCircle2 className="h-2.5 w-2.5" /> Print-ready
                  </div>
                </div>
                <div className="px-4 py-3">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D]">{item.client}</div>
                  <div className="mt-0.5 text-sm font-bold text-white">{item.title}</div>
                  <p className="mt-1 text-[11px] text-white/45 leading-snug">{item.caption}</p>
                </div>
              </div>
            </AnimCard>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL & ADS
// ─────────────────────────────────────────────────────────────────────────────
const PLATFORM_CLR = {
  "Meta / Instagram": "#E1306C",
  "Meta / Facebook": "#1877F2",
  "Digital Hoarding": "#FF6A3D",
  "On-site": "#059669",
  "Outdoor": "#7C3AED",
  "Retail / Showroom": "#C87A50",
};

function SocialAdsSection() {
  const squares  = SOCIAL_ADS.filter(a => a.aspect === "square");
  const landscape = SOCIAL_ADS.filter(a => a.aspect === "landscape");
  const portrait  = SOCIAL_ADS.filter(a => a.aspect === "portrait");

  const AdCard = ({ item }) => {
    const thumbCls = "h-[220px]";
    return (
    <div className="group rounded-xl overflow-hidden bg-[#0A0D18] border border-white/8 hover:border-[#FF6A3D]/35 transition-all duration-400 h-full">
      <div className={`relative ${thumbCls} overflow-hidden bg-[#0F1220]`}>
        <img
          src={img(item)}
          alt={item.title}
          loading="lazy"
          onError={(e) => fallback(item, e)}
          className="absolute inset-0 w-full h-full object-fill group-hover:scale-[1.03] transition-transform duration-500"
        />
        {/* Platform pill */}
        <div className="absolute top-2.5 left-2.5">
          <span
            className="px-2 py-0.5 rounded text-[9px] font-bold text-white uppercase tracking-wide"
            style={{ background: PLATFORM_CLR[item.platform] || "#FF6A3D" }}
          >
            {item.platform}
          </span>
        </div>
      </div>
      <div className="px-3 py-2.5">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D] truncate">{item.client}</div>
        <div className="mt-0.5 text-sm font-bold text-white leading-tight">{item.title}</div>
        <p className="mt-0.5 text-[11px] text-white/45 leading-snug line-clamp-2">{item.caption}</p>
        <span className="mt-2 inline-block px-1.5 py-0.5 rounded bg-white/5 text-[9px] font-mono text-white/35 border border-white/8">{item.type}</span>
      </div>
    </div>
    );
  };

  return (
    <section id="social-ads" className="py-20 bg-[#08090F] border-t border-white/8">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Intro
          tag="Social Media & Ad Posters"
          title="Creatives that stop the scroll."
          sub="Social ads, digital OOH, and campaign posters — designed to convert."
        />

        {/* Social / Meta — 2 col */}
        {squares.length > 0 && (
          <div className="mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mb-4">Social Media Creatives</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {squares.map((item, i) => (
                <AnimCard key={item.id} delay={i * 0.08}>
                  <AdCard item={item} />
                </AnimCard>
              ))}
            </div>
          </div>
        )}

        {/* Landscape OOH — 2 col */}
        {landscape.length > 0 && (
          <div className="mb-10">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mb-4">Outdoor & Billboard Creatives</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {landscape.map((item, i) => (
                <AnimCard key={item.id} delay={i * 0.08}>
                  <AdCard item={item} />
                </AnimCard>
              ))}
            </div>
          </div>
        )}

        {/* Portrait / vertical — 4 col */}
        {portrait.length > 0 && (
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mb-4">Digital & Site Hoardings</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {portrait.map((item, i) => (
                <AnimCard key={item.id} delay={i * 0.07}>
                  <AdCard item={item} />
                </AnimCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LEGACY CREATIVE GALLERY
// ─────────────────────────────────────────────────────────────────────────────
function CreativeGallery() {
  const [active, setActive] = useState("all");
  
  // Inject Rakepto execution images directly into the array to show up in the portfolio
  const extendedPortfolioItems = [
    ...CREATIVE_PORTFOLIO.items,
    { cat: "print", title: "Rakepto Standee Display", client: "Rakepto", img: "https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.34.42%20AM.jpeg?updatedAt=1783321553668" },
    { cat: "print", title: "Rakepto Office Exterior Wide", client: "Rakepto", img: "https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.34.43%20AM%20(1).jpeg?updatedAt=1783321553522" },
    { cat: "print", title: "Rakepto Storefront Closer", client: "Rakepto", img: "https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.34.43%20AM.jpeg?updatedAt=1783321551968" },
  ];

  const visible = active === "all"
    ? extendedPortfolioItems
    : extendedPortfolioItems.filter(i => i.cat === active);

  return (
    <section id="gallery" className="py-20 bg-[#070812] border-t border-white/8" data-testid="creative-gallery">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <FadeIn>
          <div className="grid md:grid-cols-12 gap-6 mb-10 items-end">
            <div className="md:col-span-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-3">Creative Gallery</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-white">Work from the studio.</h2>
            </div>
            <p className="md:col-span-5 md:pl-8 text-sm text-white/50 leading-relaxed">
              Filter by medium — all creative produced by our in-house studio team.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-wrap gap-2 mb-8">
          {CREATIVE_PORTFOLIO.categories.map(c => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              data-testid={`portfolio-filter-${c.key}`}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded border transition-colors ${
                c.key === active
                  ? "bg-[#FF6A3D] text-[#070812] border-[#FF6A3D]"
                  : "bg-white/5 border-white/10 text-white hover:border-[#FF6A3D] hover:text-[#FF6A3D]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:auto-rows-[260px]">
          <AnimatePresence mode="popLayout">
            {visible.map((item, i) => (
              <motion.div
                key={`${item.title}-${active}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.025 }}
                className={`group relative overflow-hidden rounded bg-[#0A0D14] border border-white/5 ${item.span || ""}`}
                data-testid={`creative-item-${i}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070812]/90 via-[#070812]/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                  <div className="self-end">
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-[#FF6A3D] transition-all duration-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-[#FF6A3D]">{item.client}</div>
                    <div className="mt-0.5 text-sm font-bold leading-tight">{item.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#FF6A3D] hover:bg-[#E85C31] text-white px-6 h-11 text-sm font-semibold rounded transition-colors"
          >
            Commission a project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE ROOT
// ─────────────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="bg-[#070812] border-b border-white/8 py-16 md:py-24 text-white relative overflow-hidden" data-testid="portfolio-hero">
        <div className="absolute inset-0 opacity-[0.022] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4"
          >Portfolio</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-[38px] sm:text-[52px] lg:text-[62px] font-extrabold leading-[1.02] tracking-[-0.02em] text-white max-w-4xl"
          >
            Websites, brand systems, ad creative, hoardings — all the work we've shipped.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-base text-white/55 max-w-xl leading-relaxed"
          >
            Browse live client sites, then see how a design travels from screen to standee, billboard, brochure, or social post.
          </motion.p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { k: "50+", v: "Brand projects shipped" },
              { k: "15+", v: "Live websites" },
              { k: "2M+", v: "Creative impressions / campaign" },
              { k: "60+", v: "Hoardings & OOH live" },
            ].map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-4 bg-white/5 border border-white/8 rounded-lg hover:border-[#FF6A3D]/30 transition-colors duration-300"
              >
                <div className="text-2xl font-extrabold text-[#FF6A3D]">{s.k}</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/35">{s.v}</div>
              </motion.div>
            ))}
          </div>

          {/* Jump links */}
          <div className="mt-7 flex flex-wrap gap-2">
            {[
              ["#websites","Websites"],["#logo-design","Logo Design"],
              ["#industry-exposure","Industry Exposure"],["#hoardings","Hoardings"],
              ["#printables","Printables"],["#social-ads","Social & Ads"],
              ["#gallery","Gallery"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="px-3 py-1 text-[11px] font-semibold rounded-full border border-white/12 text-white/50 hover:border-[#FF6A3D] hover:text-[#FF6A3D] transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <LogoSection />
      <AwardsSection /> 
      <IndustryExposureSection />
      <HoardingsSection />
      <PrintablesSection />
      <SocialAdsSection />
      <div id="websites"><ProjectShowcase /></div>

      {/* <CreativeGallery /> */}
    </PublicLayout>
  );
}