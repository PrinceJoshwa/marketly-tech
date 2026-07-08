
// // import { Link } from "react-router-dom";
// // import { motion } from "motion/react";
// // import { Award, Users, Target, Heart, ArrowRight } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import PublicLayout from "@/components/layout/PublicLayout";
// // import { AWARDS, HERO_STATS } from "@/data/publicContent";

// // const VALUES = [
// //   { Icon: Target, title: "Honesty over hype", body: "We tell you when something doesn't work — before the invoice lands. Most agencies don't." },
// //   { Icon: Users, title: "One team, one voice", body: "Paid, SEO, creative, offline — all under one roof. Zero Frankenstein handoffs." },
// //   { Icon: Heart, title: "Compound, not spike", body: "We build systems that keep working after we leave the room. No one-quarter wonders." },
// //   { Icon: Award, title: "Boring work, done", body: "60% of wins come from the unsexy stuff — schema, GMB hygiene, Core Web Vitals. We do it all." },
// // ];

// // export default function About() {
// //   return (
// //     <PublicLayout>
// //       <section className="bg-[#070812] py-16 md:py-24 border-b border-white/10 text-white">
// //         <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-10 items-center">
// //           <div className="lg:col-span-7">
// //             <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4">About us</div>
// //             <h1 className="text-[42px] sm:text-[52px] lg:text-[64px] font-extrabold leading-[1.02] tracking-[-0.02em] text-white">
// //               We're the agency CMOs keep on speed-dial.
// //             </h1>
// //             <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">
// //               Founded in 2013 in Bengaluru by a serial entrepreneur who saw a gap between creative marketing and actual business growth. Twelve years and 50+ brands later, Marketly builds the full growth stack for companies that want to compound — not just run ads.
// //             </p>
// //             <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
// //               {HERO_STATS.map((s) => (
// //                 <div key={s.k} className="border-l-2 border-[#FF6A3D] pl-4">
// //                   <div className="text-3xl font-bold text-white leading-none">{s.v}</div>
// //                   <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/50">{s.k}</div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //           <div className="lg:col-span-5">
// //             <div className="relative rounded-sm overflow-hidden aspect-[4/5] bg-[#0A0D14] border-[6px] border-white/10 shadow-[0_30px_70px_-28px_rgba(0,0,0,0.9)]">
// //               <img src="https://customer-assets.emergentagent.com/job_rank-intel-dash/artifacts/2afpvxbt_AJP03487.JPG.jpeg" alt="Ramya Prasanna, Founder of Marketly, receiving the Marketing Innovation Award 2024" className="w-full h-full object-cover" />
// //               <div className="absolute inset-0 bg-gradient-to-t from-[#070812]/80 via-transparent to-transparent" />
// //               <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur p-4 rounded-sm">
// //                 <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#FF6A3D]">Founder · Award recipient 2024</div>
// //                 <div className="mt-1 font-bold text-[#070812] text-base">Ramya Prasanna</div>
// //                 <div className="text-xs text-zinc-600">Marketing Innovation Award, Women Achievements Summit</div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       <section className="py-16 md:py-24 bg-white">
// //         <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// //           <div className="max-w-2xl mb-12">
// //             <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4">Our values</div>
// //             <h2 className="text-3xl md:text-4xl lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#070812]">
// //               Four rules we don't break.
// //             </h2>
// //           </div>
// //           <div className="grid md:grid-cols-2 gap-5">
// //             {VALUES.map((v, i) => (
// //               <motion.div
// //                 key={v.title}
// //                 initial={{ opacity: 0, y: 16 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true, margin: "-60px" }}
// //                 transition={{ duration: 0.5, delay: i * 0.08 }}
// //                 className="p-7 bg-zinc-50 border border-zinc-200 rounded-sm hover:border-[#FF6A3D] transition-colors duration-300"
// //               >
// //                 <div className="h-11 w-11 rounded-sm bg-[#FF6A3D]/10 grid place-items-center mb-5">
// //                   <v.Icon className="h-5 w-5 text-[#FF6A3D]" strokeWidth={1.75} />
// //                 </div>
// //                 <h3 className="text-xl font-bold text-[#070812] leading-tight">{v.title}</h3>
// //                 <p className="mt-2.5 text-[15px] text-zinc-600 leading-relaxed">{v.body}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <section className="py-16 md:py-24 bg-[#070812] text-white">
// //         <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// //           <div className="max-w-2xl mb-12">
// //             <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4">Recognitions</div>
// //             <h2 className="text-3xl md:text-4xl lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
// //               Awards, partnerships, and certifications.
// //             </h2>
// //           </div>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
// //             {AWARDS.map((a) => (
// //               <div key={a.k} className="p-6 bg-white/5 border border-white/10 rounded-sm hover:border-[#FF6A3D]/50 transition-colors">
// //                 <Award className="h-5 w-5 text-[#FF6A3D]" />
// //                 <div className="mt-4 font-bold text-white">{a.k}</div>
// //                 <div className="mt-1 text-sm text-white/60">{a.v}</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       <section className="py-16 bg-[#FF6A3D] text-white">
// //         <div className="max-w-[1000px] mx-auto px-5 md:px-10 text-center">
// //           <h2 className="text-3xl md:text-[40px] font-extrabold leading-[1.1]">Want to work with us?</h2>
// //           <Button asChild className="mt-6 rounded-sm bg-white hover:bg-white/90 text-[#070812] h-12 px-6 font-semibold">
// //             <Link to="/contact">Book a strategy call <ArrowRight className="ml-2 h-4 w-4" /></Link>
// //           </Button>
// //         </div>
// //       </section>
// //     </PublicLayout>
// //   );
// // }

// import { Link } from "react-router-dom";
// import { motion, useScroll, useTransform } from "motion/react";
// import { useRef } from "react";
// import { Award, Users, Target, Heart, ArrowRight, ArrowUpRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import PublicLayout from "@/components/layout/PublicLayout";
// import { AWARDS, HERO_STATS } from "@/data/publicContent";
// import CountUp from "@/components/landing/CountUp";

// const VALUES = [
//   { Icon: Target, title: "Honesty over hype", body: "We tell you when something doesn't work — before the invoice lands. Most agencies don't.", span: "md:col-span-2" },
//   { Icon: Users, title: "One team, one voice", body: "Paid, SEO, creative, offline — all under one roof. Zero Frankenstein handoffs.", span: "md:col-span-1" },
//   { Icon: Heart, title: "Compound, not spike", body: "We build systems that keep working after we leave the room. No one-quarter wonders.", span: "md:col-span-1" },
//   { Icon: Award, title: "Boring work, done", body: "60% of wins come from the unsexy stuff — schema, GMB hygiene, Core Web Vitals. We do it all.", span: "md:col-span-2" },
// ];

// export default function About() {
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
//   const yImage = useTransform(scrollYProgress, [0, 1], [0, 100]);

//   return (
//     <PublicLayout>
//       {/* PREMIUM HERO WITH PARALLAX & COUNT-UP */}
//       <section ref={heroRef} className="relative bg-[#070812] text-white pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden border-b border-white/5">
//         <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "64px 64px"}} />
//         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF6A3D]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
//         <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10">
//           <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
//             <motion.div 
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
//               className="lg:col-span-7"
//             >
//               <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-6">
//                 <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A3D] animate-pulse" /> The Marketly Story
//               </div>
//               <h1 className="text-[48px] sm:text-[64px] lg:text-[76px] font-extrabold leading-[1.02] tracking-[-0.02em] text-white">
//                 We're the agency CMOs keep on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A3D] to-[#E85C31]">speed-dial.</span>
//               </h1>
//               <p className="mt-8 text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl font-medium">
//                 Founded in 2013 in Bengaluru by a serial entrepreneur who saw a gap between creative marketing and actual business growth. Twelve years and 50+ brands later, Marketly builds the full growth stack for companies that want to compound — not just run ads.
//               </p>
              
//               <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-white/[0.02] border border-white/10 rounded-sm backdrop-blur-md">
//                 {HERO_STATS.map((s, i) => {
//                   const numValue = parseInt(s.v.toString().replace(/[^0-9]/g, ''), 10) || 0;
//                   const suffixText = s.v.toString().replace(/[0-9]/g, '');
                  
//                   return (
//                     <motion.div 
//                       key={s.k}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
//                       className="border-l border-white/10 pl-4"
//                     >
//                       <div className="text-3xl md:text-4xl font-extrabold text-white flex items-baseline">
//                         <CountUp value={numValue} suffix={suffixText} />
//                       </div>
//                       <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#FF6A3D]">{s.k}</div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </motion.div>
            
//             <motion.div 
//               style={{ y: yImage }}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
//               className="lg:col-span-5 relative"
//             >
//               <div className="relative rounded-sm overflow-hidden aspect-[4/5] bg-[#0A0D14] border border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,1)] z-10 group">
//                 <img 
//                   // src="https://customer-assets.emergentagent.com/job_rank-intel-dash/artifacts/2afpvxbt_AJP03487.JPG.jpeg" 
//                   src="https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.38.51%20AM.jpeg" 
//                   alt="Ramya Prasanna receiving the Marketing Innovation Award" 
//                   className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" 
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#070812] via-transparent to-transparent opacity-90" />
                
//                 <div className="absolute bottom-6 left-6 right-6 bg-white/[0.08] backdrop-blur-xl border border-white/20 p-5 rounded-sm overflow-hidden">
//                   <div className="absolute top-0 left-0 w-1 h-full bg-[#FF6A3D]" />
//                   <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#FF6A3D]">Founder · Award recipient</div>
//                   <div className="mt-1.5 font-bold text-white text-lg leading-tight">Ramya Prasanna</div>
//                   <div className="mt-1 text-xs text-white/60 font-medium">Marketing Innovation Award 2024</div>
//                 </div>
//               </div>

//               <div className="absolute -inset-4 border border-white/5 bg-white/[0.01] rounded-sm -z-10 translate-x-4 translate-y-4" />
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* ASYMMETRICAL BENTO GRID FOR VALUES */}
//       <section className="py-24 md:py-32 bg-white relative">
//         <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
//             <div className="max-w-2xl">
//               <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A3D] mb-4 flex items-center gap-2">
//                 <div className="h-px w-8 bg-[#FF6A3D]" /> Core Principles
//               </div>
//               <h2 className="text-[40px] sm:text-[48px] lg:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#070812]">
//                 Four rules we don't break.
//               </h2>
//             </div>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-4 md:gap-5 auto-rows-[280px]">
//             {VALUES.map((v, i) => (
//               <motion.div
//                 key={v.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
//                 className={`group relative p-8 md:p-10 bg-[#FAFAFA] border border-zinc-200 rounded-sm hover:bg-[#070812] transition-colors duration-500 overflow-hidden flex flex-col justify-between ${v.span}`}
//               >
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none" style={{backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)", backgroundSize: "24px 24px"}} />
                
//                 <div className="relative z-10">
//                   <div className="h-14 w-14 rounded-sm bg-white border border-zinc-200 grid place-items-center mb-8 group-hover:bg-white/10 group-hover:border-white/10 transition-colors duration-500">
//                     <v.Icon className="h-6 w-6 text-[#070812] group-hover:text-[#FF6A3D] transition-colors duration-500" strokeWidth={1.5} />
//                   </div>
//                   <h3 className="text-2xl font-extrabold text-[#070812] group-hover:text-white transition-colors duration-500 leading-tight">
//                     {v.title}
//                   </h3>
//                 </div>
                
//                 <p className="relative z-10 mt-4 text-base text-zinc-600 group-hover:text-white/70 transition-colors duration-500 leading-relaxed font-medium">
//                   {v.body}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* RECOGNITIONS — MARQUEE / BADGE WALL */}
//       <section className="py-24 md:py-32 bg-[#070812] border-t border-white/5 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FF6A3D]/5 pointer-events-none" />
//         <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A3D] mb-4">Recognitions</div>
//             <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
//               Verified by the platforms that matter.
//             </h2>
//           </div>
          
//           {/* Centered 3-column grid to fix the 4th empty box issue */}
//           <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden max-w-5xl mx-auto">
//             {AWARDS.slice(0, 3).map((a, i) => (
//               <motion.div 
//                 key={a.k}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.05 }}
//                 className="p-8 md:p-10 bg-[#0A0D14] hover:bg-[#121622] transition-colors duration-300 relative group"
//               >
//                 <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <ArrowUpRight className="h-4 w-4 text-[#FF6A3D]" />
//                 </div>

//                 {/* Conditional Icon Rendering based on title */}
//                 {a.k.includes("Google") ? (
//                   <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" className="h-8 w-8 mb-6 object-contain" alt="Google Partner" />
//                 ) : a.k.includes("Meta") ? (
//                   <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" className="h-8 w-12 mb-6 object-contain" alt="Meta Business Partner" />
//                 ) : (
//                   <Award className="h-8 w-8 text-[#FF6A3D] mb-6 opacity-80" strokeWidth={1.5} />
//                 )}
                
//                 <div className="font-extrabold text-white text-xl leading-tight">{a.k}</div>
//                 <div className="mt-3 text-sm font-medium text-white/50 leading-relaxed">{a.v}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FINAL RETENTION CTA */}
//       <section className="bg-[#FF6A3D] text-[#070812] relative overflow-hidden">
//         <div className="absolute -top-[500px] -right-[500px] w-[1000px] h-[1000px] rounded-full border border-white/20 pointer-events-none opacity-50" />
//         <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full border border-white/30 pointer-events-none opacity-50" />
        
//         <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
//           <div>
//             <h2 className="text-3xl md:text-[48px] font-extrabold leading-tight tracking-[-0.02em]">Want to work with us?</h2>
//             <p className="mt-2 text-[#070812]/80 text-base font-bold uppercase tracking-widest">No obligation · 30-min strategy call</p>
//           </div>
//           <Button asChild className="rounded-sm bg-[#070812] hover:bg-[#1A1D2D] text-white h-14 px-8 font-extrabold text-sm shadow-2xl transition-all duration-300 group shrink-0">
//             <Link to="/contact">Book your strategy session <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
//           </Button>
//         </div>
//       </section>
//     </PublicLayout>
//   );
// }

import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Award, Users, Target, Heart, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PublicLayout from "@/components/layout/PublicLayout";
import { AWARDS, HERO_STATS } from "@/data/publicContent";
import CountUp from "@/components/landing/CountUp";

const VALUES = [
  { Icon: Target, title: "Honesty over hype", body: "We tell you when something doesn't work — before the invoice lands. Most agencies don't.", span: "md:col-span-2" },
  { Icon: Users, title: "One team, one voice", body: "Paid, SEO, creative, offline — all under one roof. Zero Frankenstein handoffs.", span: "md:col-span-1" },
  { Icon: Heart, title: "Compound, not spike", body: "We build systems that keep working after we leave the room. No one-quarter wonders.", span: "md:col-span-1" },
  { Icon: Award, title: "Boring work, done", body: "60% of wins come from the unsexy stuff — schema, GMB hygiene, Core Web Vitals. We do it all.", span: "md:col-span-2" },
];

export default function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <PublicLayout>
      {/* PREMIUM HERO WITH PARALLAX & COUNT-UP */}
      <section ref={heroRef} className="relative bg-[#070812] text-white pt-24 pb-20 md:pt-32 md:pb-40 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "64px 64px"}} />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF6A3D]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 md:gap-12 lg:gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-5 sm:mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A3D] animate-pulse" /> The Marketly Story
              </div>
              <h1 className="text-4xl sm:text-[48px] md:text-[64px] lg:text-[76px] font-extrabold leading-[1.1] md:leading-[1.02] tracking-[-0.02em] text-white">
                We're the agency CMOs keep on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A3D] to-[#E85C31]">speed-dial.</span>
              </h1>
              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl font-medium">
                Founded in 2013 in Bengaluru by a serial entrepreneur who saw a gap between creative marketing and actual business growth. Twelve years and 50+ brands later, Marketly builds the full growth stack for companies that want to compound — not just run ads.
              </p>
              
              <div className="mt-10 md:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 bg-white/[0.02] border border-white/10 rounded-sm backdrop-blur-md">
                {HERO_STATS.map((s, i) => {
                  const numValue = parseInt(s.v.toString().replace(/[^0-9]/g, ''), 10) || 0;
                  const suffixText = s.v.toString().replace(/[0-9]/g, '');
                  
                  return (
                    <motion.div 
                      key={s.k}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                      className="border-l border-white/10 pl-3 sm:pl-4"
                    >
                      <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white flex items-baseline">
                        <CountUp value={numValue} suffix={suffixText} />
                      </div>
                      <div className="mt-1.5 md:mt-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-[#FF6A3D]">{s.k}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            
            <motion.div 
              style={{ y: yImage }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="lg:col-span-5 relative mt-8 lg:mt-0"
            >
              <div className="relative rounded-sm overflow-hidden aspect-[4/5] bg-[#0A0D14] border border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] md:shadow-[0_40px_80px_-20px_rgba(0,0,0,1)] z-10 group">
                <img 
                  src="https://ik.imagekit.io/j0xzq9pns/marktly-image/WhatsApp%20Image%202026-07-06%20at%2011.38.51%20AM.jpeg" 
                  alt="Ramya Prasanna receiving the Marketing Innovation Award" 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070812] via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/[0.08] backdrop-blur-xl border border-white/20 p-4 sm:p-5 rounded-sm overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#FF6A3D]" />
                  <div className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#FF6A3D]">Founder · Award recipient</div>
                  <div className="mt-1 sm:mt-1.5 font-bold text-white text-base sm:text-lg leading-tight">Ramya Prasanna</div>
                  <div className="mt-1 text-[11px] sm:text-xs text-white/60 font-medium">Marketing Innovation Award 2024</div>
                </div>
              </div>

              {/* Fixed offset sizes for mobile viewport containment */}
              <div className="absolute -inset-2 md:-inset-4 border border-white/5 bg-white/[0.01] rounded-sm -z-10 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ASYMMETRICAL BENTO GRID FOR VALUES */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="max-w-2xl">
              <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A3D] mb-3 md:mb-4 flex items-center gap-2">
                <div className="h-px w-6 md:w-8 bg-[#FF6A3D]" /> Core Principles
              </div>
              <h2 className="text-3xl sm:text-[40px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.1] md:leading-[1.05] tracking-[-0.02em] text-[#070812]">
                Four rules we don't break.
              </h2>
            </div>
          </div>
          
          {/* Made rows auto on mobile to prevent vertical clipping, fixed height on desktop */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-5 auto-rows-auto md:auto-rows-[280px]">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
                className={`group relative p-6 sm:p-8 md:p-10 bg-[#FAFAFA] border border-zinc-200 rounded-sm hover:bg-[#070812] transition-colors duration-500 overflow-hidden flex flex-col justify-between ${v.span}`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none" style={{backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)", backgroundSize: "24px 24px"}} />
                
                <div className="relative z-10">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-sm bg-white border border-zinc-200 grid place-items-center mb-6 md:mb-8 group-hover:bg-white/10 group-hover:border-white/10 transition-colors duration-500">
                    <v.Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#070812] group-hover:text-[#FF6A3D] transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#070812] group-hover:text-white transition-colors duration-500 leading-tight">
                    {v.title}
                  </h3>
                </div>
                
                <p className="relative z-10 mt-3 md:mt-4 text-sm sm:text-base text-zinc-600 group-hover:text-white/70 transition-colors duration-500 leading-relaxed font-medium">
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITIONS — MARQUEE / BADGE WALL */}
      <section className="py-20 md:py-32 bg-[#070812] border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FF6A3D]/5 pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6A3D] mb-3 md:mb-4">Recognitions</div>
            <h2 className="text-3xl sm:text-[36px] md:text-[44px] lg:text-[52px] font-extrabold leading-[1.1] md:leading-[1.05] tracking-[-0.02em] text-white">
              Verified by the platforms that matter.
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden max-w-5xl mx-auto">
            {AWARDS.slice(0, 3).map((a, i) => (
              <motion.div 
                key={a.k}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="p-6 sm:p-8 md:p-10 bg-[#0A0D14] hover:bg-[#121622] transition-colors duration-300 relative group"
              >
                <div className="absolute top-0 right-0 p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#FF6A3D]" />
                </div>

                {a.k.includes("Google") ? (
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" className="h-7 w-7 sm:h-8 sm:w-8 mb-5 sm:mb-6 object-contain" alt="Google Partner" />
                ) : a.k.includes("Meta") ? (
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" className="h-7 w-10 sm:h-8 sm:w-12 mb-5 sm:mb-6 object-contain" alt="Meta Business Partner" />
                ) : (
                  <Award className="h-7 w-7 sm:h-8 sm:w-8 text-[#FF6A3D] mb-5 sm:mb-6 opacity-80" strokeWidth={1.5} />
                )}
                
                <div className="font-extrabold text-white text-lg sm:text-xl leading-tight">{a.k}</div>
                <div className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-white/50 leading-relaxed">{a.v}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL RETENTION CTA */}
      <section className="bg-[#FF6A3D] text-[#070812] relative overflow-hidden">
        <div className="absolute -top-[300px] -right-[300px] md:-top-[500px] md:-right-[500px] w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] rounded-full border border-white/20 pointer-events-none opacity-50" />
        <div className="absolute -top-[150px] -right-[150px] md:-top-[300px] md:-right-[300px] w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full border border-white/30 pointer-events-none opacity-50" />
        
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 relative z-10">
          <div>
            <h2 className="text-3xl md:text-[48px] font-extrabold leading-[1.1] md:leading-tight tracking-[-0.02em]">Want to work with us?</h2>
            <p className="mt-2 sm:mt-3 text-[#070812]/80 text-[13px] sm:text-base font-bold uppercase tracking-widest">No obligation · 30-min strategy call</p>
          </div>
          <Button asChild className="w-full md:w-auto rounded-sm bg-[#070812] hover:bg-[#1A1D2D] text-white h-12 md:h-14 px-6 md:px-8 font-extrabold text-[13px] md:text-sm shadow-2xl transition-all duration-300 group shrink-0">
            <Link to="/contact">Book your strategy session <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
          </Button>
        </div>
      </section>
    </PublicLayout>
  );
}