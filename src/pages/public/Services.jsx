

// // import { Link } from "react-router-dom";
// // import { motion } from "motion/react";
// // import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import PublicLayout from "@/components/layout/PublicLayout";
// // import { SERVICES } from "@/data/publicContent";

// // export default function Services() {
// //   return (
// //     <PublicLayout>
// //       {/* GRAND TYPOGRAPHY HERO */}
// //       <section className="relative bg-[#070812] text-white pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden border-b border-white/5">
// //         <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A3D]/10 via-transparent to-transparent opacity-50 pointer-events-none" />
        
// //         <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10 text-center">
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.95 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.7, ease: "easeOut" }}
// //           >
// //             <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FF6A3D]/10 border border-[#FF6A3D]/20 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A3D] mb-8">
// //               Capabilities
// //             </div>
// //             <h1 className="text-[52px] sm:text-[72px] lg:text-[96px] font-extrabold leading-[0.95] tracking-[-0.03em] text-white mx-auto max-w-5xl">
// //               Seven disciplines. <br/>
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">One operating system.</span>
// //             </h1>
// //             <p className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
// //               Paid, organic, local, creative, offline — every part of your growth stack, shipped under one roof with zero handoffs.
// //             </p>
// //           </motion.div>
          
// //           {/* ANCHOR PILLS */}
// //           <motion.div 
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.3 }}
// //             className="mt-14 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
// //           >
// //             {SERVICES.map((s) => (
// //               <a 
// //                 key={s.slug} 
// //                 href={`#${s.slug}`} 
// //                 className="px-4 py-2 text-xs font-bold rounded-full bg-white/[0.03] border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-300 backdrop-blur-md"
// //               >
// //                 {s.title}
// //               </a>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* STICKY SCROLL ARCHITECTURE FOR SERVICES */}
// //       <div className="bg-[#070812]">
// //         {SERVICES.map((s, i) => (
// //           <section
// //             key={s.slug}
// //             id={s.slug}
// //             className={`relative scroll-mt-0 border-t ${i === 0 ? 'border-transparent' : 'border-white/10'}`}
// //             data-testid={`service-section-${s.slug}`}
// //           >
// //             {/* Alternating dark panel backgrounds for subtle separation */}
// //             <div className={`absolute inset-0 ${i % 2 === 0 ? "bg-[#070812]" : "bg-[#0A0D14]"}`} />
            
// //             <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-32 relative z-10">
// //               <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                
// //                 {/* LEFT: STICKY HEADER */}
// //                 <motion.div
// //                   initial={{ opacity: 0, x: -30 }}
// //                   whileInView={{ opacity: 1, x: 0 }}
// //                   viewport={{ once: true, margin: "-100px" }}
// //                   transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
// //                   className="lg:col-span-5 lg:sticky lg:top-32"
// //                 >
// //                   <div className="flex items-center gap-4 mb-6">
// //                     <div className="text-xl font-mono font-extrabold text-[#FF6A3D]">{s.num}</div>
// //                     <div className="h-px w-12 bg-white/20" />
// //                   </div>
// //                   <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
// //                     {s.title}
// //                   </h2>
// //                   <p className="mt-6 text-lg text-white/60 leading-relaxed font-medium">
// //                     {s.desc}
// //                   </p>
                  
// //                   {/* OUTCOME METRIC PILL */}
// //                   <div className="mt-10 inline-flex items-center gap-4 px-5 py-3 rounded-sm bg-[#FF6A3D]/10 border border-[#FF6A3D]/20">
// //                     <div className="h-8 w-8 rounded-full bg-[#FF6A3D] grid place-items-center shrink-0">
// //                       <ChevronRight className="h-5 w-5 text-[#070812]" strokeWidth={3} />
// //                     </div>
// //                     <div>
// //                       <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6A3D]">Primary Outcome</span>
// //                       <span className="block text-sm font-extrabold text-white mt-0.5">{s.metric}</span>
// //                     </div>
// //                   </div>
                  
// //                   <div className="mt-12 flex flex-wrap gap-4">
// //                     <Button asChild className="rounded-sm bg-white hover:bg-zinc-200 text-[#070812] transition-colors h-12 px-7 text-sm font-extrabold group">
// //                       <Link to="/contact">Start the conversation <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
// //                     </Button>
// //                     {s.slug === "seo" && (
// //                       <Button asChild variant="outline" className="rounded-sm border-white/20 bg-transparent text-white hover:bg-white/5 h-12 px-7 text-sm font-bold">
// //                         <Link to="/services/seo">View SEO playbook</Link>
// //                       </Button>
// //                     )}
// //                   </div>
// //                 </motion.div>
                
// //                 {/* RIGHT: PREMIUM INCLUSIONS BENTO/LIST */}
// //                 <div className="lg:col-span-7">
// //                   <div className="bg-white/[0.02] border border-white/10 rounded-sm p-8 md:p-12 backdrop-blur-sm">
// //                     <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-8 pb-4 border-b border-white/10">
// //                       Standard Inclusions
// //                     </div>
// //                     <ul className="space-y-6">
// //                       {s.includes.map((item, idx) => (
// //                         <motion.li 
// //                           key={item}
// //                           initial={{ opacity: 0, y: 10 }}
// //                           whileInView={{ opacity: 1, y: 0 }}
// //                           viewport={{ once: true }}
// //                           transition={{ duration: 0.4, delay: idx * 0.1 }}
// //                           className="flex items-start gap-5 group"
// //                         >
// //                           <div className="mt-1 h-6 w-6 rounded-full bg-white/5 border border-white/10 grid place-items-center shrink-0 group-hover:bg-[#FF6A3D]/20 group-hover:border-[#FF6A3D]/30 transition-colors">
// //                             <CheckCircle2 className="h-3.5 w-3.5 text-white/50 group-hover:text-[#FF6A3D] transition-colors" strokeWidth={2.5} />
// //                           </div>
// //                           <span className="text-lg font-medium text-white/80 group-hover:text-white transition-colors leading-snug">
// //                             {item}
// //                           </span>
// //                         </motion.li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 </div>
                
// //               </div>
// //             </div>
// //           </section>
// //         ))}
// //       </div>

// //       {/* ARCHITECTURAL CTA */}
// //       <section className="py-24 md:py-32 bg-white relative overflow-hidden">
// //         {/* Subtle geometric background */}
// //         <div className="absolute top-0 right-0 w-[800px] h-[800px] border-[40px] border-zinc-50 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        
// //         <div className="max-w-[1000px] mx-auto px-5 md:px-10 text-center relative z-10">
// //           <div className="h-16 w-16 bg-[#070812] text-white rounded-sm grid place-items-center mx-auto mb-8 shadow-xl">
// //             <ArrowRight className="h-8 w-8" />
// //           </div>
// //           <h2 className="text-[40px] md:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#070812]">
// //             Not sure where to start?
// //           </h2>
// //           <p className="mt-6 text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto font-medium leading-relaxed">
// //             We'll audit your current engineering and marketing setup and deliver the 2–3 specific structural levers that will move fastest for your brand.
// //           </p>
// //           <div className="mt-10">
// //             <Button asChild className="rounded-sm bg-[#FF6A3D] hover:bg-[#E85C31] text-white h-14 px-8 font-extrabold text-base shadow-[0_20px_40px_-15px_rgba(255,106,61,0.5)] transition-all group">
// //               <Link to="/contact">Book an architecture audit <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" /></Link>
// //             </Button>
// //           </div>
// //         </div>
// //       </section>
// //     </PublicLayout>
// //   );
// // }

// import { Link } from "react-router-dom";
// import { motion } from "motion/react";
// import { ArrowRight, CheckCircle2, ChevronRight, Zap, Search, Globe2, MousePointerClick, Smartphone, BarChart3, TrendingUp } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import PublicLayout from "@/components/layout/PublicLayout";
// import { SERVICES } from "@/data/publicContent";

// // Array of premium icons to cycle through for the marquee pills
// const MARQUEE_ICONS = [Zap, Search, Globe2, MousePointerClick, Smartphone, BarChart3, TrendingUp];

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
//         </div>

//         {/* RUNNING MARQUEE ANCHOR PILLS WITH ICONS */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="mobile-marquee-clip mt-16 w-full relative overflow-hidden group"
//         >
//           {/* Gradient fades for smooth entry/exit on the edges */}
//           <div className="absolute inset-y-0 left-0 w-24 md:w-48 z-10 bg-gradient-to-r from-[#070812] to-transparent pointer-events-none" />
//           <div className="absolute inset-y-0 right-0 w-24 md:w-48 z-10 bg-gradient-to-l from-[#070812] to-transparent pointer-events-none" />

//           <div className="mobile-marquee-track flex w-max gap-4 animate-marquee group-hover:[animation-play-state:paused] px-4">
//             {/* Duplicated array to create a seamless infinite loop */}
//             {[...SERVICES, ...SERVICES].map((s, idx) => {
//               const Icon = MARQUEE_ICONS[idx % MARQUEE_ICONS.length];
//               return (
//                 <a 
//                   key={`${s.slug}-${idx}`} 
//                   href={`#${s.slug}`} 
//                   className="flex items-center gap-2.5 px-6 py-3 text-sm font-bold rounded-full bg-white/[0.03] border border-white/10 text-white/80 hover:bg-white/10 hover:border-[#FF6A3D] hover:text-white transition-all duration-300 backdrop-blur-md shrink-0 whitespace-nowrap shadow-lg group/pill"
//                 >
//                   <Icon className="h-4 w-4 text-[#FF6A3D] group-hover/pill:scale-110 transition-transform" />
//                   <span>{s.title}</span>
//                 </a>
//               );
//             })}
//           </div>
//         </motion.div>
//       </section>

//       {/* STICKY SCROLL ARCHITECTURE FOR SERVICES (ZIG-ZAG LAYOUT) */}
//       <div className="bg-[#070812]">
//         {SERVICES.map((s, i) => {
//           // Check if index is even or odd to alternate the layout
//           const isEven = i % 2 === 0;

//           return (
//             <section
//               key={s.slug}
//               id={s.slug}
//               className={`relative scroll-mt-0 border-t ${i === 0 ? 'border-transparent' : 'border-white/10'}`}
//               data-testid={`service-section-${s.slug}`}
//             >
//               {/* Alternating dark panel backgrounds for subtle separation */}
//               <div className={`absolute inset-0 ${isEven ? "bg-[#070812]" : "bg-[#0A0D14]"}`} />
              
//               <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-24 md:py-32 relative z-10">
//                 <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                  
//                   {/* HEADING & TEXT BLOCK */}
//                   <motion.div
//                     initial={{ opacity: 0, x: isEven ? -30 : 30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true, margin: "-100px" }}
//                     transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
//                     className={`mobile-no-x-motion lg:col-span-5 lg:sticky lg:top-32 order-1 ${isEven ? "lg:order-1" : "lg:order-2"}`}
//                   >
//                     <div className="flex items-center gap-4 mb-6">
//                       <div className="text-xl font-mono font-extrabold text-[#FF6A3D]">{s.num}</div>
//                       <div className="h-px w-12 bg-white/20" />
//                     </div>
//                     <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
//                       {s.title}
//                     </h2>
//                     <p className="mt-6 text-lg text-white/60 leading-relaxed font-medium">
//                       {s.desc}
//                     </p>
                    
//                     {/* OUTCOME METRIC PILL */}
//                     <div className="mt-10 inline-flex items-center gap-4 px-5 py-3 rounded-sm bg-[#FF6A3D]/10 border border-[#FF6A3D]/20 max-w-full">
//                       <div className="h-8 w-8 rounded-full bg-[#FF6A3D] grid place-items-center shrink-0">
//                         <ChevronRight className="h-5 w-5 text-[#070812]" strokeWidth={3} />
//                       </div>
//                       <div>
//                         <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6A3D]">Primary Outcome</span>
//                         <span className="block text-sm font-extrabold text-white mt-0.5">{s.metric}</span>
//                       </div>
//                     </div>
                    
//                     <div className="mt-12 flex flex-wrap gap-4">
//                       <Button asChild className="rounded-sm bg-white hover:bg-zinc-200 text-[#070812] transition-colors h-12 px-7 text-sm font-extrabold group">
//                         <Link to="/contact">Start the conversation <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
//                       </Button>
//                       {s.slug === "seo" && (
//                         <Button asChild variant="outline" className="rounded-sm border-white/20 bg-transparent text-white hover:bg-white/5 h-12 px-7 text-sm font-bold">
//                           <Link to="/services/seo">View SEO playbook</Link>
//                         </Button>
//                       )}
//                     </div>
//                   </motion.div>
                  
//                   {/* CONTENT / INCLUSIONS BLOCK */}
//                   <div className={`lg:col-span-7 order-2 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
//                     <div className="bg-white/[0.02] border border-white/10 rounded-sm p-8 md:p-12 backdrop-blur-sm">
//                       <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-8 pb-4 border-b border-white/10">
//                         Standard Inclusions
//                       </div>
//                       <ul className="space-y-6">
//                         {s.includes.map((item, idx) => (
//                           <motion.li 
//                             key={item}
//                             initial={{ opacity: 0, y: 10 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.4, delay: idx * 0.1 }}
//                             className="flex items-start gap-5 group"
//                           >
//                             <div className="mt-1 h-6 w-6 rounded-full bg-white/5 border border-white/10 grid place-items-center shrink-0 group-hover:bg-[#FF6A3D]/20 group-hover:border-[#FF6A3D]/30 transition-colors">
//                               <CheckCircle2 className="h-3.5 w-3.5 text-white/50 group-hover:text-[#FF6A3D] transition-colors" strokeWidth={2.5} />
//                             </div>
//                             <span className="text-lg font-medium text-white/80 group-hover:text-white transition-colors leading-snug">
//                               {item}
//                             </span>
//                           </motion.li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
                  
//                 </div>
//               </div>
//             </section>
//           );
//         })}
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
      <section className="relative bg-[#070812] text-white pt-24 pb-16 sm:pb-20 md:pt-32 md:pb-28 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A3D]/10 via-transparent to-transparent opacity-50 pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-[#FF6A3D]/10 border border-[#FF6A3D]/20 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A3D] mb-6 sm:mb-8">
              Capabilities
            </div>
            <h1 className="text-4xl sm:text-[52px] md:text-[72px] lg:text-[96px] font-extrabold leading-[1.05] sm:leading-[0.95] tracking-[-0.02em] sm:tracking-[-0.03em] text-white mx-auto max-w-5xl">
              Seven disciplines. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">One operating system.</span>
            </h1>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
              Paid, organic, local, creative, offline — every part of your growth stack, shipped under one roof with zero handoffs.
            </p>
          </motion.div>
        </div>

        {/* RUNNING MARQUEE ANCHOR PILLS WITH ICONS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mobile-marquee-clip mt-10 sm:mt-16 w-full relative overflow-hidden group"
        >
          {/* Gradient fades for smooth entry/exit on the edges */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-24 md:w-48 z-10 bg-gradient-to-r from-[#070812] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-24 md:w-48 z-10 bg-gradient-to-l from-[#070812] to-transparent pointer-events-none" />

          <div className="mobile-marquee-track flex w-max gap-3 sm:gap-4 animate-marquee group-hover:[animation-play-state:paused] px-4">
            {/* Duplicated array to create a seamless infinite loop */}
            {[...SERVICES, ...SERVICES].map((s, idx) => {
              const Icon = MARQUEE_ICONS[idx % MARQUEE_ICONS.length];
              return (
                <a 
                  key={`${s.slug}-${idx}`} 
                  href={`#${s.slug}`} 
                  className="flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-sm font-bold rounded-full bg-white/[0.03] border border-white/10 text-white/80 hover:bg-white/10 hover:border-[#FF6A3D] hover:text-white transition-all duration-300 backdrop-blur-md shrink-0 whitespace-nowrap shadow-lg group/pill"
                >
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#FF6A3D] group-hover/pill:scale-110 transition-transform" />
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
              
              <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 sm:py-24 md:py-32 relative z-10">
                <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-20 items-start">
                  
                  {/* HEADING & TEXT BLOCK */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                    className={`mobile-no-x-motion lg:col-span-5 lg:sticky lg:top-32 order-1 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="text-lg sm:text-xl font-mono font-extrabold text-[#FF6A3D]">{s.num}</div>
                      <div className="h-px w-8 sm:w-12 bg-white/20" />
                    </div>
                    <h2 className="text-3xl sm:text-[36px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.1] sm:leading-[1.05] tracking-[-0.02em] text-white">
                      {s.title}
                    </h2>
                    <p className="mt-4 sm:mt-6 text-[15px] sm:text-lg text-white/60 leading-relaxed font-medium">
                      {s.desc}
                    </p>
                    
                    {/* OUTCOME METRIC PILL */}
                    <div className="mt-8 sm:mt-10 inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-2.5 sm:py-3 rounded-sm bg-[#FF6A3D]/10 border border-[#FF6A3D]/20 max-w-full">
                      <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-[#FF6A3D] grid place-items-center shrink-0">
                        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-[#070812]" strokeWidth={3} />
                      </div>
                      <div className="truncate">
                        <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6A3D] truncate">Primary Outcome</span>
                        <span className="block text-[13px] sm:text-sm font-extrabold text-white mt-0.5 truncate">{s.metric}</span>
                      </div>
                    </div>
                    
                    <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                      <Button asChild className="w-full sm:w-auto rounded-sm bg-white hover:bg-zinc-200 text-[#070812] transition-colors h-12 px-7 text-sm font-extrabold group">
                        <Link to="/contact">Start the conversation <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
                      </Button>
                      {s.slug === "seo" && (
                        <Button asChild variant="outline" className="w-full sm:w-auto rounded-sm border-white/20 bg-transparent text-white hover:bg-white/5 h-12 px-7 text-sm font-bold">
                          <Link to="/services/seo">View SEO playbook</Link>
                        </Button>
                      )}
                    </div>
                  </motion.div>
                  
                  {/* CONTENT / INCLUSIONS BLOCK */}
                  <div className={`lg:col-span-7 order-2 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="bg-white/[0.02] border border-white/10 rounded-sm p-6 sm:p-8 md:p-12 backdrop-blur-sm">
                      <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-white/10">
                        Standard Inclusions
                      </div>
                      <ul className="space-y-4 sm:space-y-6">
                        {s.includes.map((item, idx) => (
                          <motion.li 
                            key={item}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            className="flex items-start gap-3 sm:gap-5 group"
                          >
                            <div className="mt-0.5 sm:mt-1 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-white/5 border border-white/10 grid place-items-center shrink-0 group-hover:bg-[#FF6A3D]/20 group-hover:border-[#FF6A3D]/30 transition-colors">
                              <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white/50 group-hover:text-[#FF6A3D] transition-colors" strokeWidth={2.5} />
                            </div>
                            <span className="text-[15px] sm:text-lg font-medium text-white/80 group-hover:text-white transition-colors leading-snug">
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
      <section className="py-20 sm:py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Subtle geometric background */}
        <div className="absolute top-0 right-0 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] border-[20px] sm:border-[40px] border-zinc-50 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        
        <div className="max-w-[1000px] mx-auto px-5 md:px-10 text-center relative z-10">
          <div className="h-12 w-12 sm:h-16 sm:w-16 bg-[#070812] text-white rounded-sm grid place-items-center mx-auto mb-6 sm:mb-8 shadow-xl">
            <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8" />
          </div>
          <h2 className="text-3xl sm:text-[40px] md:text-[56px] font-extrabold leading-[1.1] sm:leading-[1.05] tracking-[-0.02em] text-[#070812]">
            Not sure where to start?
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto font-medium leading-relaxed">
            We'll audit your current engineering and marketing setup and deliver the 2–3 specific structural levers that will move fastest for your brand.
          </p>
          <div className="mt-8 sm:mt-10">
            <Button asChild className="w-full sm:w-auto rounded-sm bg-[#FF6A3D] hover:bg-[#E85C31] text-white h-12 sm:h-14 px-6 sm:px-8 font-extrabold text-[14px] sm:text-[15px] md:text-base shadow-[0_20px_40px_-15px_rgba(255,106,61,0.5)] transition-all group">
              <Link to="/contact">Book an architecture audit <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}