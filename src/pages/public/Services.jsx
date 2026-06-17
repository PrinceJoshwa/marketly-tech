// // // import { Link } from "react-router-dom";
// // // import { motion } from "motion/react";
// // // import { ArrowRight, CheckCircle2 } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
// // // import PublicLayout from "@/components/layout/PublicLayout";
// // // import { SERVICES } from "@/data/publicContent";

// // // export default function Services() {
// // //   return (
// // //     <PublicLayout>
// // //       <section className="bg-zinc-50 border-b border-zinc-200 py-16 md:py-24">
// // //         <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// // //           <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Services</div>
// // //           <h1 className="text-[42px] sm:text-[52px] lg:text-[64px] font-extrabold leading-[1.02] tracking-[-0.02em] text-[#0F1212] max-w-3xl">
// // //             Seven capabilities. One team. Zero handoffs.
// // //           </h1>
// // //           <p className="mt-6 text-lg text-zinc-600 max-w-2xl">
// // //             Paid, organic, local, creative, offline — every part of your growth stack, shipped under one roof. Scroll through, or jump to what you need.
// // //           </p>
// // //           <div className="mt-8 flex flex-wrap gap-2">
// // //             {SERVICES.map((s) => (
// // //               <a key={s.slug} href={`#${s.slug}`} className="px-3.5 py-1.5 text-xs font-semibold rounded-sm bg-white border border-zinc-300 text-zinc-700 hover:border-[#134E35] hover:text-[#134E35] transition-colors">
// // //                 {s.title}
// // //               </a>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {SERVICES.map((s, i) => (
// // //         <section
// // //           key={s.slug}
// // //           id={s.slug}
// // //           className={`py-16 md:py-24 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50"} border-b border-zinc-200`}
// // //           data-testid={`service-section-${s.slug}`}
// // //         >
// // //           <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// // //             <div className="grid md:grid-cols-12 gap-10">
// // //               <motion.div
// // //                 initial={{ opacity: 0, y: 16 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true, margin: "-80px" }}
// // //                 transition={{ duration: 0.5 }}
// // //                 className="md:col-span-5"
// // //               >
// // //                 <div className="text-sm font-mono font-semibold text-zinc-400">{s.num}</div>
// // //                 <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">{s.title}</h2>
// // //                 <p className="mt-5 text-base md:text-lg text-zinc-600 leading-relaxed">{s.desc}</p>
// // //                 <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#134E35]/5 border border-[#134E35]/15">
// // //                   <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-500">Outcome</span>
// // //                   <span className="text-sm font-bold text-[#134E35]">{s.metric}</span>
// // //                 </div>
// // //                 <div className="mt-8 flex flex-wrap gap-3">
// // //                   <Button asChild className="rounded-sm bg-[#0F1212] hover:bg-[#134E35] text-white h-11 px-5 text-sm font-semibold">
// // //                     <Link to="/contact">Talk to us <ArrowRight className="ml-2 h-4 w-4" /></Link>
// // //                   </Button>
// // //                   {s.slug === "seo" && (
// // //                     <Button asChild variant="outline" className="rounded-sm border-zinc-300 bg-white text-[#0F1212] hover:bg-zinc-50 h-11 px-5 text-sm font-semibold">
// // //                       <Link to="/services/seo">See full SEO page <ArrowRight className="ml-2 h-4 w-4" /></Link>
// // //                     </Button>
// // //                   )}
// // //                 </div>
// // //               </motion.div>
// // //               <div className="md:col-span-7">
// // //                 <div className="bg-white border border-zinc-200 rounded-sm p-8">
// // //                   <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-5">What's included</div>
// // //                   <ul className="space-y-3">
// // //                     {s.includes.map((item) => (
// // //                       <li key={item} className="flex items-start gap-3 text-base text-[#0F1212]">
// // //                         <CheckCircle2 className="h-5 w-5 text-[#134E35] shrink-0 mt-0.5" />
// // //                         <span>{item}</span>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>
// // //       ))}

// // //       <section className="py-20 bg-[#0F1212] text-white">
// // //         <div className="max-w-[1000px] mx-auto px-5 md:px-10 text-center">
// // //           <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-[1.1]">Not sure what you need?</h2>
// // //           <p className="mt-5 text-lg text-white/70">We'll audit your setup and tell you the 2–3 levers that will move the fastest for your industry.</p>
// // //           <Button asChild className="mt-8 rounded-sm bg-[#C87A50] hover:bg-[#B16840] text-white h-12 px-6 font-semibold">
// // //             <Link to="/contact">Book a strategy call <ArrowRight className="ml-2 h-4 w-4" /></Link>
// // //           </Button>
// // //         </div>
// // //       </section>
// // //     </PublicLayout>
// // //   );
// // // }
// // import { Link } from "react-router-dom";
// // import { motion } from "motion/react";
// // import { ArrowRight, CheckCircle2 } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import PublicLayout from "@/components/layout/PublicLayout";
// // import { SERVICES } from "@/data/publicContent";

// // export default function Services() {
// //   return (
// //     <PublicLayout>
// //       <section className="bg-[#070812] border-b border-white/10 py-16 md:py-24 text-white">
// //         <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// //           <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4">Services</div>
// //           <h1 className="text-[42px] sm:text-[52px] lg:text-[64px] font-extrabold leading-[1.02] tracking-[-0.02em] text-white max-w-3xl">
// //             Seven capabilities. One team. Zero handoffs.
// //           </h1>
// //           <p className="mt-6 text-lg text-white/70 max-w-2xl">
// //             Paid, organic, local, creative, offline — every part of your growth stack, shipped under one roof. Scroll through, or jump to what you need.
// //           </p>
// //           <div className="mt-8 flex flex-wrap gap-2">
// //             {SERVICES.map((s) => (
// //               <a key={s.slug} href={`#${s.slug}`} className="px-3.5 py-1.5 text-xs font-semibold rounded-sm bg-white/5 border border-white/10 text-white hover:border-[#FF6A3D] hover:text-[#FF6A3D] transition-colors">
// //                 {s.title}
// //               </a>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {SERVICES.map((s, i) => (
// //         <section
// //           key={s.slug}
// //           id={s.slug}
// //           className={`py-16 md:py-24 ${i % 2 === 0 ? "bg-white" : "bg-zinc-50"} border-b border-zinc-200`}
// //           data-testid={`service-section-${s.slug}`}
// //         >
// //           <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// //             <div className="grid md:grid-cols-12 gap-10">
// //               <motion.div
// //                 initial={{ opacity: 0, y: 16 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true, margin: "-80px" }}
// //                 transition={{ duration: 0.5 }}
// //                 className="md:col-span-5"
// //               >
// //                 <div className="text-sm font-mono font-semibold text-zinc-400">{s.num}</div>
// //                 <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#070812]">{s.title}</h2>
// //                 <p className="mt-5 text-base md:text-lg text-zinc-600 leading-relaxed">{s.desc}</p>
// //                 <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#FF6A3D]/10 border border-[#FF6A3D]/20">
// //                   <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#FF6A3D]">Outcome</span>
// //                   <span className="text-sm font-bold text-[#070812]">{s.metric}</span>
// //                 </div>
// //                 <div className="mt-8 flex flex-wrap gap-3">
// //                   <Button asChild className="rounded-sm bg-[#FF6A3D] hover:bg-[#E85C31] text-white h-11 px-5 text-sm font-semibold">
// //                     <Link to="/contact">Talk to us <ArrowRight className="ml-2 h-4 w-4" /></Link>
// //                   </Button>
// //                   {s.slug === "seo" && (
// //                     <Button asChild variant="outline" className="rounded-sm border-zinc-300 bg-white text-[#070812] hover:bg-zinc-50 h-11 px-5 text-sm font-semibold">
// //                       <Link to="/services/seo">See full SEO page <ArrowRight className="ml-2 h-4 w-4" /></Link>
// //                     </Button>
// //                   )}
// //                 </div>
// //               </motion.div>
// //               <div className="md:col-span-7">
// //                 <div className="bg-white border border-zinc-200 rounded-sm p-8 shadow-sm">
// //                   <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-5">What's included</div>
// //                   <ul className="space-y-3">
// //                     {s.includes.map((item) => (
// //                       <li key={item} className="flex items-start gap-3 text-base text-[#070812]">
// //                         <CheckCircle2 className="h-5 w-5 text-[#FF6A3D] shrink-0 mt-0.5" />
// //                         <span>{item}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       ))}

// //       <section className="py-20 bg-[#FF6A3D] text-white">
// //         <div className="max-w-[1000px] mx-auto px-5 md:px-10 text-center">
// //           <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-[1.1]">Not sure what you need?</h2>
// //           <p className="mt-5 text-lg text-white/85 font-semibold">We'll audit your setup and tell you the 2–3 levers that will move the fastest for your industry.</p>
// //           <Button asChild className="mt-8 rounded-sm bg-white hover:bg-white/90 text-[#070812] h-12 px-6 font-semibold">
// //             <Link to="/contact">Book a strategy call <ArrowRight className="ml-2 h-4 w-4" /></Link>
// //           </Button>
// //         </div>
// //       </section>
// //     </PublicLayout>
// //   );
// // }

// import { Link } from "react-router-dom";
// import { motion } from "motion/react";
// import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import PublicLayout from "@/components/layout/PublicLayout";
// import { SERVICES } from "@/data/publicContent";

// export default function Services() {
//   return (
//     <PublicLayout>
//       {/* GRAND TYPOGRAPHY HERO */}
//       <section className="relative bg-[#070812] text-white pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden border-b border-white/5">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A3D]/10 via-transparent to-transparent opacity-50 pointer-events-none" />
        
//         <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF6A3D]/10 border border-[#FF6A3D]/20 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A3D] mb-8">
//               Capabilities
//             </div>
//             <h1 className="text-[52px] sm:text-[72px] lg:text-[96px] font-extrabold leading-[0.95] tracking-[-0.03em] text-white mx-auto max-w-5xl">
//               Seven disciplines. <br/>
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">One operating system.</span>
//             </h1>
//             <p className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
//               Paid, organic, local, creative, offline — every part of your growth stack, shipped under one roof with zero handoffs.
//             </p>
//           </motion.div>
          
//           {/* ANCHOR PILLS */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="mt-14 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
//           >
//             {SERVICES.map((s) => (
//               <a 
//                 key={s.slug} 
//                 href={`#${s.slug}`} 
//                 className="px-4 py-2 text-xs font-bold rounded-full bg-white/[0.03] border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-300 backdrop-blur-md"
//               >
//                 {s.title}
//               </a>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* STICKY SCROLL ARCHITECTURE FOR SERVICES */}
//       <div className="bg-[#070812]">
//         {SERVICES.map((s, i) => (
//           <section
//             key={s.slug}
//             id={s.slug}
//             className={`relative scroll-mt-0 border-t ${i === 0 ? 'border-transparent' : 'border-white/10'}`}
//             data-testid={`service-section-${s.slug}`}
//           >
//             {/* Alternating dark panel backgrounds for subtle separation */}
//             <div className={`absolute inset-0 ${i % 2 === 0 ? "bg-[#070812]" : "bg-[#0A0D14]"}`} />
            
//             <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-32 relative z-10">
//               <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                
//                 {/* LEFT: STICKY HEADER */}
//                 <motion.div
//                   initial={{ opacity: 0, x: -30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true, margin: "-100px" }}
//                   transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
//                   className="lg:col-span-5 lg:sticky lg:top-32"
//                 >
//                   <div className="flex items-center gap-4 mb-6">
//                     <div className="text-xl font-mono font-extrabold text-[#FF6A3D]">{s.num}</div>
//                     <div className="h-px w-12 bg-white/20" />
//                   </div>
//                   <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
//                     {s.title}
//                   </h2>
//                   <p className="mt-6 text-lg text-white/60 leading-relaxed font-medium">
//                     {s.desc}
//                   </p>
                  
//                   {/* OUTCOME METRIC PILL */}
//                   <div className="mt-10 inline-flex items-center gap-4 px-5 py-3 rounded-sm bg-[#FF6A3D]/10 border border-[#FF6A3D]/20">
//                     <div className="h-8 w-8 rounded-full bg-[#FF6A3D] grid place-items-center shrink-0">
//                       <ChevronRight className="h-5 w-5 text-[#070812]" strokeWidth={3} />
//                     </div>
//                     <div>
//                       <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6A3D]">Primary Outcome</span>
//                       <span className="block text-sm font-extrabold text-white mt-0.5">{s.metric}</span>
//                     </div>
//                   </div>
                  
//                   <div className="mt-12 flex flex-wrap gap-4">
//                     <Button asChild className="rounded-sm bg-white hover:bg-zinc-200 text-[#070812] transition-colors h-12 px-7 text-sm font-extrabold group">
//                       <Link to="/contact">Start the conversation <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
//                     </Button>
//                     {s.slug === "seo" && (
//                       <Button asChild variant="outline" className="rounded-sm border-white/20 bg-transparent text-white hover:bg-white/5 h-12 px-7 text-sm font-bold">
//                         <Link to="/services/seo">View SEO playbook</Link>
//                       </Button>
//                     )}
//                   </div>
//                 </motion.div>
                
//                 {/* RIGHT: PREMIUM INCLUSIONS BENTO/LIST */}
//                 <div className="lg:col-span-7">
//                   <div className="bg-white/[0.02] border border-white/10 rounded-sm p-8 md:p-12 backdrop-blur-sm">
//                     <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-8 pb-4 border-b border-white/10">
//                       Standard Inclusions
//                     </div>
//                     <ul className="space-y-6">
//                       {s.includes.map((item, idx) => (
//                         <motion.li 
//                           key={item}
//                           initial={{ opacity: 0, y: 10 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ duration: 0.4, delay: idx * 0.1 }}
//                           className="flex items-start gap-5 group"
//                         >
//                           <div className="mt-1 h-6 w-6 rounded-full bg-white/5 border border-white/10 grid place-items-center shrink-0 group-hover:bg-[#FF6A3D]/20 group-hover:border-[#FF6A3D]/30 transition-colors">
//                             <CheckCircle2 className="h-3.5 w-3.5 text-white/50 group-hover:text-[#FF6A3D] transition-colors" strokeWidth={2.5} />
//                           </div>
//                           <span className="text-lg font-medium text-white/80 group-hover:text-white transition-colors leading-snug">
//                             {item}
//                           </span>
//                         </motion.li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
                
//               </div>
//             </div>
//           </section>
//         ))}
//       </div>

//       {/* ARCHITECTURAL CTA */}
//       <section className="py-24 md:py-32 bg-white relative overflow-hidden">
//         {/* Subtle geometric background */}
//         <div className="absolute top-0 right-0 w-[800px] h-[800px] border-[40px] border-zinc-50 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        
//         <div className="max-w-[1000px] mx-auto px-5 md:px-10 text-center relative z-10">
//           <div className="h-16 w-16 bg-[#070812] text-white rounded-sm grid place-items-center mx-auto mb-8 shadow-xl">
//             <ArrowRight className="h-8 w-8" />
//           </div>
//           <h2 className="text-[40px] md:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#070812]">
//             Not sure where to start?
//           </h2>
//           <p className="mt-6 text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto font-medium leading-relaxed">
//             We'll audit your current engineering and marketing setup and deliver the 2–3 specific structural levers that will move fastest for your brand.
//           </p>
//           <div className="mt-10">
//             <Button asChild className="rounded-sm bg-[#FF6A3D] hover:bg-[#E85C31] text-white h-14 px-8 font-extrabold text-base shadow-[0_20px_40px_-15px_rgba(255,106,61,0.5)] transition-all group">
//               <Link to="/contact">Book an architecture audit <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" /></Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </PublicLayout>
//   );
// }

import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, ChevronRight, Zap, Search, Globe2, MousePointerClick, Smartphone, BarChart3, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import PublicLayout from "@/components/layout/PublicLayout";
import { SERVICES } from "@/data/publicContent";

// Array of premium icons to cycle through for the marquee pills
const MARQUEE_ICONS = [Zap, Search, Globe2, MousePointerClick, Smartphone, BarChart3, TrendingUp];

export default function Services() {
  return (
    <PublicLayout>
      {/* GRAND TYPOGRAPHY HERO */}
      <section className="relative bg-[#070812] text-white pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A3D]/10 via-transparent to-transparent opacity-50 pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF6A3D]/10 border border-[#FF6A3D]/20 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A3D] mb-8">
              Capabilities
            </div>
            <h1 className="text-[52px] sm:text-[72px] lg:text-[96px] font-extrabold leading-[0.95] tracking-[-0.03em] text-white mx-auto max-w-5xl">
              Seven disciplines. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">One operating system.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
              Paid, organic, local, creative, offline — every part of your growth stack, shipped under one roof with zero handoffs.
            </p>
          </motion.div>
        </div>

        {/* RUNNING MARQUEE ANCHOR PILLS WITH ICONS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 w-full relative overflow-hidden group"
        >
          {/* Gradient fades for smooth entry/exit on the edges */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 z-10 bg-gradient-to-r from-[#070812] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 z-10 bg-gradient-to-l from-[#070812] to-transparent pointer-events-none" />

          <div className="flex w-max gap-4 animate-marquee group-hover:[animation-play-state:paused] px-4">
            {/* Duplicated array to create a seamless infinite loop */}
            {[...SERVICES, ...SERVICES].map((s, idx) => {
              const Icon = MARQUEE_ICONS[idx % MARQUEE_ICONS.length];
              return (
                <a 
                  key={`${s.slug}-${idx}`} 
                  href={`#${s.slug}`} 
                  className="flex items-center gap-2.5 px-6 py-3 text-sm font-bold rounded-full bg-white/[0.03] border border-white/10 text-white/80 hover:bg-white/10 hover:border-[#FF6A3D] hover:text-white transition-all duration-300 backdrop-blur-md shrink-0 whitespace-nowrap shadow-lg group/pill"
                >
                  <Icon className="h-4 w-4 text-[#FF6A3D] group-hover/pill:scale-110 transition-transform" />
                  <span>{s.title}</span>
                </a>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* STICKY SCROLL ARCHITECTURE FOR SERVICES (ZIG-ZAG LAYOUT) */}
      <div className="bg-[#070812]">
        {SERVICES.map((s, i) => {
          // Check if index is even or odd to alternate the layout
          const isEven = i % 2 === 0;

          return (
            <section
              key={s.slug}
              id={s.slug}
              className={`relative scroll-mt-0 border-t ${i === 0 ? 'border-transparent' : 'border-white/10'}`}
              data-testid={`service-section-${s.slug}`}
            >
              {/* Alternating dark panel backgrounds for subtle separation */}
              <div className={`absolute inset-0 ${isEven ? "bg-[#070812]" : "bg-[#0A0D14]"}`} />
              
              <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-32 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                  
                  {/* HEADING & TEXT BLOCK */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                    className={`lg:col-span-5 lg:sticky lg:top-32 order-1 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-xl font-mono font-extrabold text-[#FF6A3D]">{s.num}</div>
                      <div className="h-px w-12 bg-white/20" />
                    </div>
                    <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
                      {s.title}
                    </h2>
                    <p className="mt-6 text-lg text-white/60 leading-relaxed font-medium">
                      {s.desc}
                    </p>
                    
                    {/* OUTCOME METRIC PILL */}
                    <div className="mt-10 inline-flex items-center gap-4 px-5 py-3 rounded-sm bg-[#FF6A3D]/10 border border-[#FF6A3D]/20">
                      <div className="h-8 w-8 rounded-full bg-[#FF6A3D] grid place-items-center shrink-0">
                        <ChevronRight className="h-5 w-5 text-[#070812]" strokeWidth={3} />
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6A3D]">Primary Outcome</span>
                        <span className="block text-sm font-extrabold text-white mt-0.5">{s.metric}</span>
                      </div>
                    </div>
                    
                    <div className="mt-12 flex flex-wrap gap-4">
                      <Button asChild className="rounded-sm bg-white hover:bg-zinc-200 text-[#070812] transition-colors h-12 px-7 text-sm font-extrabold group">
                        <Link to="/contact">Start the conversation <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
                      </Button>
                      {s.slug === "seo" && (
                        <Button asChild variant="outline" className="rounded-sm border-white/20 bg-transparent text-white hover:bg-white/5 h-12 px-7 text-sm font-bold">
                          <Link to="/services/seo">View SEO playbook</Link>
                        </Button>
                      )}
                    </div>
                  </motion.div>
                  
                  {/* CONTENT / INCLUSIONS BLOCK */}
                  <div className={`lg:col-span-7 order-2 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="bg-white/[0.02] border border-white/10 rounded-sm p-8 md:p-12 backdrop-blur-sm">
                      <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-8 pb-4 border-b border-white/10">
                        Standard Inclusions
                      </div>
                      <ul className="space-y-6">
                        {s.includes.map((item, idx) => (
                          <motion.li 
                            key={item}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="flex items-start gap-5 group"
                          >
                            <div className="mt-1 h-6 w-6 rounded-full bg-white/5 border border-white/10 grid place-items-center shrink-0 group-hover:bg-[#FF6A3D]/20 group-hover:border-[#FF6A3D]/30 transition-colors">
                              <CheckCircle2 className="h-3.5 w-3.5 text-white/50 group-hover:text-[#FF6A3D] transition-colors" strokeWidth={2.5} />
                            </div>
                            <span className="text-lg font-medium text-white/80 group-hover:text-white transition-colors leading-snug">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ARCHITECTURAL CTA */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Subtle geometric background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] border-[40px] border-zinc-50 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        
        <div className="max-w-[1000px] mx-auto px-5 md:px-10 text-center relative z-10">
          <div className="h-16 w-16 bg-[#070812] text-white rounded-sm grid place-items-center mx-auto mb-8 shadow-xl">
            <ArrowRight className="h-8 w-8" />
          </div>
          <h2 className="text-[40px] md:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#070812]">
            Not sure where to start?
          </h2>
          <p className="mt-6 text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto font-medium leading-relaxed">
            We'll audit your current engineering and marketing setup and deliver the 2–3 specific structural levers that will move fastest for your brand.
          </p>
          <div className="mt-10">
            <Button asChild className="rounded-sm bg-[#FF6A3D] hover:bg-[#E85C31] text-white h-14 px-8 font-extrabold text-base shadow-[0_20px_40px_-15px_rgba(255,106,61,0.5)] transition-all group">
              <Link to="/contact">Book an architecture audit <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}