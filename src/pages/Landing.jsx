// import { Link } from "react-router-dom";
// import { motion, useScroll, useTransform } from "motion/react";
// import { useEffect, useRef, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, ArrowUpRight, Award, CheckCircle2, Star, Sparkles, TrendingUp, Play, Pause, Volume2, VolumeX, Activity, Bot, ShieldCheck, Building2, GraduationCap, ShoppingCart, TicketCheck, Search, BarChart3, MousePointerClick, Globe2, Smartphone, LayoutDashboard } from "lucide-react";
// import PublicLayout from "@/components/layout/PublicLayout";
// import { SERVICES, CLIENT_LOGOS, TESTIMONIALS, HERO_STATS, AWARDS } from "@/data/publicContent";
// import { CASE_STUDIES } from "@/data/caseStudies";
// import { BLOG_POSTS } from "@/data/blogPosts";
// import { AuditTool } from "@/components/landing/LandingTools";
// import ProjectShowcase from "@/components/landing/ProjectShowcase";
// import { PartnerBadgeRow } from "@/components/landing/PartnerBadges";
// import CountUp from "@/components/landing/CountUp";
// import ScrollProgress from "@/components/landing/ScrollProgress";

// const AWARD_PHOTO = "https://customer-assets.emergentagent.com/job_rank-intel-dash/artifacts/2afpvxbt_AJP03487.JPG.jpeg";

// export default function Home() {
//   return (
//     <PublicLayout>
//       <ScrollProgress />
//       <Hero />
//       <FounderAward />
//       <TrustBar />
//       <AIVisibilityAudit />
//       <CertifiedExcellence />
//       {/* <AIVisibilityAudit /> */}
//       <ServicesPreview />
//       <GrowthCTA />
//       <ProductSystems />
//       <FeaturedWork />
//       <ProjectShowcase limit={8} />
//       <GrowthProofDeck />
//       <AuditCTA />
//       <WhyUs />
//       <LatestBlog />
//       <TestimonialStrip />
//       <FinalCTA />
//     </PublicLayout>
//   );
// }

// /* ========================= HERO ========================= */
// function Hero() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
//   const yImg = useTransform(scrollYProgress, [0, 1], [0, 80]);
//   const yAward = useTransform(scrollYProgress, [0, 1], [0, -60]);
//   const yCase = useTransform(scrollYProgress, [0, 1], [0, -30]);

//   return (
//     <section ref={ref} className="relative bg-[#070812] text-white overflow-hidden" data-testid="home-hero">
//       <div className="pointer-events-none absolute inset-0 opacity-[0.055]" style={{backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "52px 52px"}} />
//       <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#070812]" />

//       <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-12 pb-16 md:pt-20 md:pb-20 relative">
//         <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
//           <motion.div
//             initial={{ opacity: 0, y: 24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
//             className="lg:col-span-7"
//           >
//             {/* Trust pill row */}
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               className="flex flex-wrap items-center gap-2 mb-6"
//             >
//               <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/80 rounded-full">
//                 <Award className="h-3.5 w-3.5" /> Women Achievement Summit 
//               </span>
//               <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/75 rounded-full">
//                 <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A3D]" /> Google Partner
//               </span>
//               <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/75 rounded-full">
//                 <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A3D]" /> Meta Business Partner
//               </span>
//             </motion.div>

//             <h1 className="text-[42px] sm:text-[56px] lg:text-[76px] font-extrabold leading-[1.02] tracking-[-0.02em] text-white">
//               The growth stack for brands that want to{" "}
//               <span className="relative inline-block text-[#FF6A3D]">
//                 compound
//                 <svg className="absolute left-0 -bottom-1.5 w-full h-3" viewBox="0 0 300 12" fill="none">
//                   <motion.path
//                     d="M 2 8 Q 80 0 150 6 T 298 4"
//                     stroke="#C87A50"
//                     strokeWidth="3"
//                     strokeLinecap="round"
//                     fill="none"
//                     initial={{ pathLength: 0 }}
//                     animate={{ pathLength: 1 }}
//                     transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }}
//                   />
//                 </svg>
//               </span>
//               .
//             </h1>

//             <motion.p
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.25 }}
//               className="mt-6 text-lg md:text-xl text-white/68 max-w-2xl leading-relaxed"
//             >
//               Performance marketing, SEO, local ranking, landing pages, creative, and offline media — one team that ships every part of your growth stack, not just a single slice of it.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.35 }}
//               className="mt-8 flex flex-wrap items-center gap-3"
//             >
//               <Button asChild data-testid="hero-book-call-btn" className="group rounded-sm bg-[#FF6A3D] hover:bg-[#E85C31] text-white h-12 px-6 text-[13px] font-semibold shadow-[0_14px_34px_-18px_rgba(255,106,61,0.75)]">
//                 <Link to="/contact">Book a strategy call <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
//               </Button>
//               <Button asChild variant="outline" data-testid="hero-work-btn" className="rounded-sm border-white/15 bg-white/5 text-white hover:bg-white/10 h-12 px-6 text-[13px] font-semibold">
//                 <Link to="/work">See our work <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
//               </Button>
//               <div className="flex items-center gap-2 text-xs text-white/55 ml-2">
//                 <CheckCircle2 className="h-3.5 w-3.5 text-[#FF6A3D]" /> No-obligation · 30-min call
//               </div>
//             </motion.div>

//             {/* Animated count-up stats */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.55 }}
//               className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-6 max-w-2xl"
//               data-testid="hero-stats"
//             >
//               {[
//                 { v: 50, suffix: "+", k: "Brands served" },
//                 // { v: 42, prefix: "₹", suffix: "Cr+", k: "Ad spend managed" },
//                 { v: 94, suffix: "%", k: "Client retention" },
//                 { v: 12, suffix: " yrs", k: "In business" },
//               ].map((s) => (
//                 <div key={s.k} className="border-l border-white/15 pl-4">
//                   <div className="text-3xl md:text-[32px] font-bold text-white leading-none">
//                     <CountUp value={s.v} prefix={s.prefix || ""} suffix={s.suffix || ""} />
//                   </div>
//                   <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/42">{s.k}</div>
//                 </div>
//               ))}
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 8 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.65 }}
//               className="mt-5 text-center sm:text-left text-sm md:text-base font-semibold text-white/58"
//             >
//               15+ brands | 98% client retention | 5 years | Rs. 10+ monthly ad spends
//             </motion.div>
//           </motion.div>

//           {/* RIGHT — 3-image collage with parallax */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.96 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
//             className="lg:col-span-5 relative"
//           >
//             <div className="relative h-[540px] md:h-[620px]">
//               {/* MAIN — team image, top-right, large */}
//               <motion.div
//                 style={{ y: yImg }}
//                 className="absolute top-0 right-0 w-[78%] aspect-[4/5] rounded-sm overflow-hidden border border-white/10 shadow-[0_30px_70px_-28px_rgba(0,0,0,0.9)]"
//               >
//                 <img
//                   src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900"
//                   alt="Marketly team at work"
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0F1212]/60 via-transparent to-transparent" />
//                 <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur rounded-sm px-3 py-2">
//                   <div className="text-[9px] font-semibold uppercase tracking-[0.14em] text-zinc-500">The team</div>
//                   <div className="text-xs font-bold text-[#0F1212]">Bengaluru HQ · 22 people</div>
//                 </div>
//               </motion.div>

//               {/* REAL AWARD PHOTO — bottom-left, medium */}
//               <motion.div
//                 style={{ y: yAward }}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//                 className="absolute bottom-12 left-0 w-[58%] aspect-[4/3] rounded-sm overflow-hidden border-4 border-[#070812] shadow-[0_20px_48px_-16px_rgba(0,0,0,0.75)] z-10"
//               >
//                 <img
//                   src={AWARD_PHOTO}
//                   alt="Ramya Prasanna receiving the Marketing Innovation Award 2024"
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0F1212]/80 via-transparent to-transparent" />
//                 <div className="absolute bottom-2.5 left-3 right-3 text-white">
//                   <div className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#C87A50]">Award winner · March 2024</div>
//                   <div className="text-[13px] font-bold leading-tight mt-0.5">Ramya Prasanna · Founder</div>
//                 </div>
//               </motion.div>

//               {/* Case-study metric card — top-left floating */}
//               <motion.div
//                 style={{ y: yCase }}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.7 }}
//                 className="absolute top-6 -left-4 md:left-0 w-[46%] bg-[#171829] rounded-sm p-4 border border-white/10 shadow-[0_18px_45px_-18px_rgba(0,0,0,0.85)] z-20"
//               >
//                 <div className="flex items-center gap-2">
//                   <div className="h-7 w-7 rounded-sm bg-[#FF6A3D]/12 grid place-items-center">
//                     <TrendingUp className="h-4 w-4 text-[#FF6A3D]" />
//                   </div>
//                   <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/42">Recent outcome</div>
//                 </div>
//                 <div className="mt-3 flex items-baseline gap-2">
//                   <CountUp value={300} suffix="%" className="text-3xl font-extrabold text-[#FF6A3D] leading-none" />
//                   <span className="text-[11px] text-white/45 font-semibold">ROI</span>
//                 </div>
//                 <div className="text-xs text-white/58 mt-2 leading-snug">RRL Builders & Developers · qualified site-visits, 90 days</div>
//               </motion.div>

//               {/* Video play pill — bottom-right floating */}
//               {/* <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.9 }}
//                 className="absolute bottom-0 right-2 bg-[#0F1212] text-white px-3.5 py-2.5 rounded-sm flex items-center gap-2.5 cursor-pointer group hover:bg-[#134E35] transition-colors z-20"
//               >
//                 <div className="h-7 w-7 rounded-full bg-[#C87A50] grid place-items-center group-hover:scale-110 transition-transform">
//                   <Play className="h-3 w-3 text-white fill-white ml-0.5" />
//                 </div>
//                 <div className="text-[11px] leading-tight">
//                   <div className="font-bold">Our reel</div>
//                   <div className="text-white/60 text-[10px]">45 sec</div>
//                 </div>
//               </motion.div> */}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ========================= FOUNDER-LED AWARD STORY ========================= */
// function FounderAward() {
//   return (
//     <section className="py-20 md:py-28 bg-[#0F1212] text-white relative overflow-hidden" data-testid="founder-award">
//       <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px"}} />
//       <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none" style={{background: "radial-gradient(circle at top right, rgba(200,122,80,0.35) 0%, transparent 60%)"}} />
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative">
//         <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.96 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
//             className="lg:col-span-6 relative"
//           >
//             <div className="relative rounded-sm overflow-hidden aspect-[4/3] md:aspect-[16/11] border-[6px] border-white/90 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
//               <img src={AWARD_PHOTO} alt="Ramya Prasanna receiving the Marketing Innovation Award at the 2024 Women Achievements ceremony" className="absolute inset-0 w-full h-full object-cover" />
//             </div>
//             {/* polaroid caption */}
//             <motion.div
//               initial={{ opacity: 0, y: 12 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="absolute -bottom-6 -right-2 md:-right-6 bg-white text-[#0F1212] px-5 py-4 rounded-sm border border-zinc-200 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.4)] max-w-xs"
//             >
//               <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C87A50]">Stage photo · 10 March 2024</div>
//               <div className="text-base font-bold leading-tight mt-1">Women Achievements Summit</div>
//               <div className="text-xs text-zinc-500 mt-0.5">Founder of Marketly — award recipient</div>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.8, delay: 0.15 }}
//             className="lg:col-span-6"
//           >
//             <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4 flex items-center gap-2">
//               <Award className="h-3.5 w-3.5" /> Founder-led · Award-winning
//             </div>
//             <h2 className="text-[34px] sm:text-[42px] lg:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em]">
// Built by a Founder who prioritizes Performance over Promises.
//             </h2>
//             <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl">
//               {/* Marketly was founded by <span className="font-bold text-white">Ramya Prasanna</span> — a former in-house CMO who spent a decade on the receiving end of agency excuses. In 2024, she was recognised at the AdAsia India <span className="font-bold text-white">Marketing Innovation Awards</span> for building the very agency she wished she'd had access to. */}
//               Marketly was founded by <span className="font-bold text-white">Ramya Prasanna</span> — a serial entrepreneur who saw a gap between creative marketing and actual business growth. With a background in scaling high-impact brands at Simplilearn and Scaler, she built Marketly to deliver the transparency and data-driven results that modern founders demand. Recognized for her work in Digital Innovation, she now leads a team dedicated to transforming brands through architectural precision and marketing excellence.
//             </p>
//             <div className="mt-10 grid sm:grid-cols-3 gap-4">
//               {[
//                 { k: "2024", v: "Agency founded" },
//                 { k: "15+", v: "Brands grown" },
//                 { k: "2025", v: "Award winner" },
//               ].map((s, i) => (
//                 <motion.div
//                   key={s.v}
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
//                   className="p-5 bg-white/5 border border-white/10 rounded-sm backdrop-blur-sm"
//                 >
//                   <div className="text-3xl font-extrabold text-[#C87A50] leading-none">{s.k}</div>
//                   <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/60">{s.v}</div>
//                 </motion.div>
//               ))}
//             </div>
//             <div className="mt-10 flex flex-wrap gap-3">
//               <Button asChild className="rounded-sm bg-[#C87A50] hover:bg-[#B16840] text-white h-12 px-6 font-semibold">
//                 <Link to="/contact">Talk to Ramya's team <ArrowRight className="ml-2 h-4 w-4" /></Link>
//               </Button>
//               <Button asChild variant="outline" className="rounded-sm border-white/20 bg-transparent text-white hover:bg-white/5 h-12 px-6 font-semibold">
//                 <Link to="/about">Our story</Link>
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ========================= CERTIFIED EXCELLENCE ========================= */
// function CertifiedExcellence() {
//   const cards = [
//     {
//       title: "Google Partner",
//       status: "Search + YouTube certified",
//       desc: "Certified Google Ads execution across search, display, YouTube, conversion tracking, and transparent optimization loops.",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
//       accent: "bg-[#0B5BD3]",
//     },
//     {
//       title: "Meta Business Partner",
//       status: "Performance tier",
//       desc: "Facebook and Instagram campaign systems built around creative testing, audience strategy, and accountable reporting.",
//       logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
//       accent: "bg-[#0081FB]",
//     },
//     {
//       title: "Women Achievement Summit",
//       status: "Global Iconic Excellence 2025",
//       desc: "Recognition for building performance-led growth systems across campaigns, websites, creative, and marketing operations.",
//       Icon: Award,
//       accent: "bg-[#C87A50]",
//     },
//   ];

//   return (
//     <section className="py-20 md:py-28 bg-white" data-testid="home-certified-excellence">
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//         <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
//           <div className="md:col-span-7">
//             <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Certified excellence</div>
//             <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">
//               Platform-certified work, handled with senior discipline.
//             </h2>
//           </div>
//           <p className="md:col-span-5 text-base md:text-lg text-zinc-600 leading-relaxed">
//             Google, Meta, and AdAsia-recognised work, presented with clear proof points and senior execution discipline.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-5">
//           {cards.map((card, i) => (
//             <motion.div
//               key={card.title}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-60px" }}
//               transition={{ duration: 0.45, delay: i * 0.06 }}
//               className="group bg-white border border-zinc-200 rounded-sm p-7 md:p-8 hover:border-[#134E35] hover:shadow-[0_14px_36px_-22px_rgba(19,78,53,0.35)] transition-all duration-300"
//             >
//               <div className="flex items-start justify-between gap-4">
//                 <div className="h-14 w-14 rounded-sm bg-zinc-50 border border-zinc-200 grid place-items-center p-3">
//                   {card.logo ? (
//                     <img src={card.logo} alt={`${card.title} logo`} className="h-full w-full object-contain" />
//                   ) : (
//                     <card.Icon className="h-7 w-7 text-[#134E35]" />
//                   )}
//                 </div>
//                 <span className="inline-flex items-center gap-2 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-600 bg-zinc-50 border border-zinc-200 rounded-sm">
//                   <span className={`h-1.5 w-1.5 rounded-full ${card.accent}`} /> {card.status}
//                 </span>
//               </div>
//               <h3 className="mt-7 text-xl font-bold text-[#0F1212] leading-tight">{card.title}</h3>
//               <p className="mt-3 text-[15px] text-zinc-600 leading-relaxed">{card.desc}</p>
//               <div className="mt-7 pt-5 border-t border-zinc-100 flex items-center justify-between text-xs">
//                 <span className="text-zinc-500 font-medium">Verification</span>
//                 <span className="font-semibold text-[#134E35] flex items-center gap-1.5">
//                   <CheckCircle2 className="h-3.5 w-3.5" /> Active
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ========================= AI VISIBILITY AUDIT ========================= */
// function AIVisibilityAudit() {
//   const engines = [
//     { name: "ChatGPT", score: "85%", width: "w-[85%]" },
//     { name: "Perplexity", score: "72%", width: "w-[72%]" },
//     { name: "Gemini", score: "62%", width: "w-[62%]" },
//     { name: "Claude", score: "58%", width: "w-[58%]" },
//   ];

//   return (
//     <section className="py-20 md:py-28 bg-[#0F1212] text-white relative overflow-hidden" data-testid="home-ai-visibility-audit">
//       <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px"}} />
//       <div className="absolute top-0 right-0 w-1/2 h-full opacity-25 pointer-events-none" style={{background: "radial-gradient(circle at top right, rgba(200,122,80,0.36) 0%, transparent 62%)"}} />

//       <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative">
//         <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.65 }}
//             className="lg:col-span-6"
//           >
//             <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4 flex items-center gap-2">
//               <Sparkles className="h-3.5 w-3.5" /> Free AI visibility audit
//             </div>
//             <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em]">
//               How visible is your brand inside AI search?
//             </h2>
//             <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-2xl">
//               See how often ChatGPT, Perplexity, Gemini, and Claude understand, mention, and recommend your brand. The audit gives you a clear score and the gaps to fix next.
//             </p>

//             <div className="mt-8 grid sm:grid-cols-3 gap-3 max-w-2xl">
//               {["AI mentions", "Competitor gaps", "Content fixes"].map((item) => (
//                 <div key={item} className="rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75 flex items-center gap-2">
//                   <CheckCircle2 className="h-4 w-4 text-[#C87A50] shrink-0" />
//                   {item}
//                 </div>
//               ))}
//             </div>

//             <div className="mt-10 flex flex-wrap items-center gap-3">
//               <Button asChild className="rounded-sm bg-[#C87A50] hover:bg-[#B16840] text-white h-12 px-6 font-semibold">
//                 <Link to="/contact">Check your score for free <ArrowRight className="ml-2 h-4 w-4" /></Link>
//               </Button>
//               <div className="text-sm text-white/50 flex items-center gap-2">
//                 <CheckCircle2 className="h-4 w-4 text-[#C87A50]" /> No credit card required
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.96 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.75, delay: 0.1 }}
//             className="lg:col-span-6"
//           >
//             <div className="bg-white/[0.04] border border-white/10 rounded-sm overflow-hidden shadow-[0_28px_70px_-38px_rgba(0,0,0,0.8)]">
//               <div className="h-12 border-b border-white/10 flex items-center justify-between px-5 bg-white/[0.03]">
//                 <div className="flex gap-2">
//                   <span className="h-2.5 w-2.5 rounded-full bg-[#C87A50]" />
//                   <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
//                   <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
//                 </div>
//                 <div className="flex items-center gap-2 text-white/45 text-xs font-mono">
//                   <Activity className="h-3.5 w-3.5 text-[#C87A50]" /> Live visibility scan
//                 </div>
//               </div>

//               <div className="p-6 md:p-8">
//                 <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
//                   <div className="relative aspect-square rounded-full border border-[#C87A50]/25 bg-[#0F1212] grid place-items-center">
//                     <div className="absolute inset-6 rounded-full border border-white/10" />
//                     <div className="absolute inset-12 rounded-full border border-[#134E35]/50" />
//                     <Bot className="absolute top-8 right-10 h-7 w-7 text-[#C87A50]" />
//                     <div className="text-center">
//                       <div className="text-6xl font-extrabold text-white tracking-tight">73</div>
//                       <div className="mt-2 text-[10px] tracking-[0.2em] uppercase font-bold text-[#C87A50]">Visibility score</div>
//                     </div>
//                   </div>

//                   <div className="space-y-3">
//                     {engines.map((item) => (
//                       <div key={item.name} className="rounded-sm bg-white/[0.035] border border-white/10 p-4">
//                         <div className="flex items-center justify-between text-sm mb-3">
//                           <span className="text-white/75">{item.name}</span>
//                           <span className="text-white font-mono">{item.score}</span>
//                         </div>
//                         <div className="h-2 rounded-full bg-white/10 overflow-hidden">
//                           <div className={`${item.width} h-full rounded-full bg-[#C87A50]`} />
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="mt-7 grid grid-cols-3 gap-3">
//                   {[
//                     { k: "4", v: "AI engines" },
//                     { k: "30s", v: "scan time" },
//                     { k: "0", v: "card needed" },
//                   ].map((stat) => (
//                     <div key={stat.v} className="rounded-sm border border-white/10 bg-white/[0.035] p-4">
//                       <div className="text-2xl font-bold text-white leading-none">{stat.k}</div>
//                       <div className="mt-2 text-[10px] uppercase tracking-[0.14em] text-white/40">{stat.v}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ========================= TRUST BAR (logos + awards) ========================= */
// function TrustBar() {
//   const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
//   return (
//     <section className="bg-zinc-50 border-y border-zinc-200 py-14 md:py-16" data-testid="home-trust">
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//         {/* Partner badges — official-style SVG cards */}
//         <div className="mb-12">
//           <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-5 text-center">
//             Certified partner · Award winner
//           </div>
//           <PartnerBadgeRow />
//         </div>

//         {/* Client logos marquee */}
//         <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-6 text-center">
//           Trusted by 50+ brands across India
//         </div>
//         <div className="relative overflow-hidden">
//           <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-zinc-50 to-transparent pointer-events-none" />
//           <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-zinc-50 to-transparent pointer-events-none" />
//           <div className="flex gap-12 animate-marquee whitespace-nowrap">
//             {logos.map((name, i) => (
//               <span key={`${name}-${i}`} className="text-2xl font-semibold text-zinc-400 hover:text-[#134E35] transition-colors shrink-0">
//                 {name}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ========================= SERVICES PREVIEW ========================= */
// function ServicesPreview() {
//   const serviceColumns = [
//     {
//       Icon: Search,
//       title: "Digital marketing",
//       items: ["SEO & local ranking", "Social media marketing", "Content marketing", "Online reputation", "Brand positioning"],
//     },
//     {
//       Icon: TrendingUp,
//       title: "Performance marketing",
//       items: ["Google Ads", "Meta Ads", "Retargeting", "Landing page CRO", "Conversion tracking"],
//     },
//     {
//       Icon: Globe2,
//       title: "Website & commerce",
//       items: ["Business websites", "E-commerce stores", "CRM integrations", "Mobile app UI", "Analytics dashboards"],
//     },
//   ];

//   return (
//     <section className="py-16 md:py-20 bg-[#FAFAF8] border-t border-zinc-100" data-testid="home-services">
//       <div className="max-w-[1200px] mx-auto px-5 md:px-10">
//         <div className="max-w-4xl mb-9">
//           <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D06E42] mb-4">Result-driven services</div>
//           <h2 className="text-[30px] sm:text-[38px] lg:text-[48px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#12131D]">
//             Generate qualified leads and drive sales.
//           </h2>
//           <p className="mt-3 text-base md:text-lg text-zinc-600 leading-relaxed max-w-3xl">
//             Full-stack digital marketing services built to improve visibility, capture intent and convert traffic into measurable pipeline.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-5">
//           {serviceColumns.map(({ Icon, title, items }, i) => (
//             <motion.div
//               key={title}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-60px" }}
//               transition={{ duration: 0.5, delay: i * 0.05 }}
//               className="rounded-sm border border-zinc-200 bg-white p-7 md:p-8 shadow-[0_18px_45px_-36px_rgba(15,18,18,0.35)]"
//             >
//               <div className="h-11 w-11 rounded-sm bg-[#FFF2ED] grid place-items-center mb-6">
//                 <Icon className="h-5 w-5 text-[#D86F45]" />
//               </div>
//               <h3 className="text-lg font-bold text-[#12131D] leading-tight">{title}</h3>
//               <ul className="mt-4 space-y-2.5">
//                 {items.map((item) => (
//                   <li key={item} className="flex items-start gap-2 text-sm text-zinc-600 leading-relaxed">
//                     <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#D86F45] shrink-0" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function GrowthCTA() {
//   return (
//     <section className="bg-[#FF6A3D] text-white" data-testid="home-growth-cta">
//       <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-8 md:py-9">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
//           <div>
//             <h2 className="text-2xl md:text-[28px] font-extrabold leading-tight">Ready to compound your growth?</h2>
//             <p className="mt-1 text-sm md:text-base text-white/85 font-semibold">No obligation - 30-min strategy call - Senior team, not juniors</p>
//           </div>
//           <Button asChild className="rounded-sm bg-white text-[#12131D] hover:bg-white/90 h-12 px-6 text-sm font-bold self-start md:self-center">
//             <Link to="/contact">Book a call <ArrowRight className="ml-2 h-4 w-4" /></Link>
//           </Button>
//         </div>
//       </div>
//       <div className="h-6 bg-[#D95833]" />
//     </section>
//   );
// }

// function LegacyServicesPreview() {
//   return (
//     <section className="py-20 md:py-28 bg-white" data-testid="home-services">
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//         <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
//           <div className="md:col-span-7">
//             <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">What we do</div>
//             <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">
//               Seven capabilities. One operating system.
//             </h2>
//           </div>
//           <div className="md:col-span-5 md:pl-8">
//             <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
//               Most agencies pick a lane. We run the whole highway — so every lever moves together.
//             </p>
//             <Link to="/services" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#134E35] hover:text-[#0D3A26]">
//               Explore all services <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {SERVICES.slice(0, 6).map((s, i) => (
//             <motion.div
//               key={s.slug}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-60px" }}
//               transition={{ duration: 0.5, delay: i * 0.05 }}
//               className="group"
//             >
//               <Link
//                 to="/services"
//                 className="block p-7 md:p-8 bg-white border border-zinc-200 rounded-sm hover:border-[#134E35] hover:shadow-[0_12px_32px_-16px_rgba(19,78,53,0.25)] transition-all duration-300 h-full"
//                 data-testid={`service-${s.slug}`}
//               >
//                 <div className="flex items-start justify-between">
//                   <div className="text-sm font-mono font-semibold text-zinc-400">{s.num}</div>
//                   <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:text-[#134E35] transition-colors" />
//                 </div>
//                 <h3 className="mt-5 text-xl font-bold text-[#0F1212] leading-tight">{s.title}</h3>
//                 <p className="mt-2.5 text-[15px] text-zinc-600 leading-relaxed">{s.short}</p>
//                 <div className="mt-5 pt-5 border-t border-zinc-100 flex items-center justify-between text-xs">
//                   <span className="text-zinc-500 font-medium">Outcome</span>
//                   <span className="font-semibold text-[#134E35]">{s.metric}</span>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ========================= MOBILE APP & PRODUCT SYSTEMS ========================= */
// function ProductSystems() {
//   const products = [
//     {
//       Icon: Building2,
//       title: "CRM tool for real estate",
//       text: "Lead capture, broker follow-ups, site visits, inventory and booking-stage visibility for real-estate teams.",
//       meta: "Pipeline + CRM",
//     },
//     {
//       Icon: TicketCheck,
//       title: "Ticket management system",
//       text: "A clean tracking interface for service requests, owners, priority, SLA status and resolution history.",
//       meta: "Tracking interface",
//     },
//     {
//       Icon: ShoppingCart,
//       title: "Grocery e-commerce + mobile app",
//       text: "Catalogue, cart, payments, delivery slots and repeat-order journeys for grocery and neighbourhood retail.",
//       meta: "Store + app",
//     },
//     {
//       Icon: GraduationCap,
//       title: "School & college attendance tool",
//       text: "Class-wise attendance, admin dashboards, parent updates and daily reporting workflows for institutions.",
//       meta: "Education ops",
//     },
//   ];

//   return (
//     <section className="py-20 md:py-28 bg-white border-y border-zinc-200 overflow-hidden" data-testid="home-product-systems">
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//         <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
//           <motion.div
//             initial={{ opacity: 0, y: 18 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.6 }}
//             className="lg:col-span-5 bg-[#0F1212] text-white rounded-sm p-8 md:p-10 relative overflow-hidden min-h-[420px] flex flex-col justify-between"
//           >
//             <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px"}} />
//             <div className="relative">
//               <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-5">Marketly tech</div>
//               <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em]">
//                 Mobile apps and product systems.
//               </h2>
//               <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">
//                 Custom tools for teams that need more than a website: dashboards, apps, CRMs and workflow systems that keep operations moving.
//               </p>
//             </div>
//             <div className="relative mt-10 grid grid-cols-3 gap-3">
//               {[
//                 { k: "04", v: "product lines" },
//                 { k: "UI", v: "tracking flows" },
//                 { k: "App", v: "mobile ready" },
//               ].map((stat) => (
//                 <div key={stat.v} className="border border-white/10 bg-white/[0.035] p-4 rounded-sm">
//                   <div className="text-2xl font-extrabold text-[#C87A50]">{stat.k}</div>
//                   <div className="mt-2 text-[10px] uppercase tracking-[0.14em] text-white/45">{stat.v}</div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
//               {products.map(({ Icon, title, text }, i) => (
//                 <motion.div
//                   key={title}
//                   initial={{ opacity: 0, y: 18 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-60px" }}
//                   transition={{ duration: 0.5, delay: i * 0.06 }}
//                   className="group bg-zinc-50 border border-zinc-200 rounded-sm p-6 md:p-7 hover:bg-white hover:border-[#134E35] hover:shadow-[0_18px_44px_-26px_rgba(19,78,53,0.32)] transition-all duration-300"
//                 >
//                   <div className="flex items-start justify-between gap-5">
//                     <div className="h-12 w-12 rounded-sm bg-white border border-zinc-200 grid place-items-center group-hover:border-[#134E35]/25">
//                       <Icon className="h-5 w-5 text-[#134E35]" />
//                     </div>
//                     <div className="text-[10px] uppercase tracking-[0.14em] font-semibold text-zinc-400">{products[i].meta}</div>
//                   </div>
//                   <h3 className="mt-7 text-xl font-bold text-[#0F1212] leading-tight">{title}</h3>
//                   <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{text}</p>
//                   <div className="mt-6 h-px bg-zinc-200" />
//                   <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#134E35]">
//                     Product build <ArrowRight className="h-3.5 w-3.5" />
//                   </div>
//                 </motion.div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ========================= FEATURED WORK ========================= */
// function FeaturedWork() {
//   const featured = CASE_STUDIES.slice(0, 4);
//   return (
//     <section className="py-20 md:py-28 bg-zinc-50" data-testid="home-work">
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//         <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
//           <div className="max-w-2xl">
//             <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Selected work</div>
//             <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">
//               Website systems built to convert.
//             </h2>
//           </div>
//           <Link to="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-[#134E35] hover:text-[#0D3A26]">
//             View all case studies <ArrowRight className="h-4 w-4" />
//           </Link>
//         </div>

//         <div className="grid md:grid-cols-2 gap-6">
//           {featured.map((c, i) => (
//             <motion.div
//               key={c.slug}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-60px" }}
//               transition={{ duration: 0.6, delay: i * 0.08 }}
//             >
//               <Link
//                 to={`/work/${c.slug}`}
//                 className="group block bg-white rounded-sm overflow-hidden border border-zinc-200 hover:border-[#134E35] hover:shadow-[0_16px_40px_-20px_rgba(19,78,53,0.3)] transition-all duration-400"
//                 data-testid={`case-${c.slug}`}
//               >
//                 <div className="relative aspect-[16/10] overflow-hidden bg-zinc-200">
//                   <img
//                     src={c.cover}
//                     alt={c.client}
//                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
//                   />
//                   <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
//                     {c.tags.slice(0, 2).map((t) => (
//                       <span key={t} className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-white/95 text-[#0F1212] rounded-sm">
//                         {t}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="p-6 md:p-8">
//                   <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C87A50]">
//                     Case Study · {c.industry}
//                   </div>
//                   <h3 className="mt-3 text-xl md:text-2xl font-bold text-[#0F1212] leading-tight">{c.client}</h3>
//                   <div className="mt-3 flex items-baseline gap-3">
//                     <span className="text-3xl md:text-4xl font-extrabold text-[#134E35] leading-none">{c.heroMetric}</span>
//                     <span className="text-sm text-zinc-600">{c.heroMetricLabel}</span>
//                   </div>
//                   <p className="mt-3 text-[15px] text-zinc-600 leading-relaxed line-clamp-2">{c.summary}</p>
//                   <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#134E35] group-hover:gap-3 transition-all">
//                     Read case study <ArrowRight className="h-4 w-4" />
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ========================= FIGMA GROWTH PROOF + PRESENTATION SCROLL ========================= */
// function GrowthProofDeck() {
//   const reviewPlatforms = [
//     { name: "Google", score: "4.9", tone: "text-[#4285F4]", sub: "reviews" },
//     { name: "Clutch", score: "4.8", tone: "text-[#0F1212]", sub: "agency profile" },
//     { name: "Quora", score: "4.7", tone: "text-[#B92B27]", sub: "answers" },
//     { name: "GoodFirms", score: "4.8", tone: "text-[#2F80ED]", sub: "listed firm" },
//     { name: "Trustpilot", score: "4.9", tone: "text-[#00B67A]", sub: "trust score" },
//     { name: "Behance", score: "4.8", tone: "text-[#1769FF]", sub: "creative work" },
//   ];

//   const automationLogos = [
//     { name: "Adobe", src: "https://ik.imagekit.io/j0xzq9pns/marketly/logo/OIP.webp?updatedAt=1779005081738" },
//     { name: "Amazon", src: "https://ik.imagekit.io/j0xzq9pns/marketly/logo/amazon.webp?updatedAt=1779005081313" },
//     { name: "Google Ads", src: "https://cdn.simpleicons.org/googleads/4285F4" },
//     { name: "Meta", src: "https://cdn.simpleicons.org/meta/0866FF" },
//     { name: "WhatsApp", src: "https://cdn.simpleicons.org/whatsapp/25D366" },
//     { name: "Taboola", src: "https://ik.imagekit.io/j0xzq9pns/marketly/logo/taboola.webp?updatedAt=1779005081811" },
//     { name: "LinkedIn", src: "https://ik.imagekit.io/j0xzq9pns/marketly/logo/linkedin.png?updatedAt=1779005081867" },
//     { name: "SEMrush", src: "https://ik.imagekit.io/j0xzq9pns/marketly/logo/semrush.webp?updatedAt=1779005081842" },
//     { name: "Wati", src: "https://ik.imagekit.io/j0xzq9pns/marketly/logo/wati.jpg?updatedAt=1779005081799" },
//     { name: "Interakt", src: "https://ik.imagekit.io/j0xzq9pns/marketly/logo/interakt.png?updatedAt=1779005082154" },
//     { name: "Zoho", src: "https://ik.imagekit.io/j0xzq9pns/marketly/logo/zoho.webp?updatedAt=1779005081981" },
//     { name: "Mailchimp", src: "https://cdn.simpleicons.org/mailchimp/FFE01B" },
//     { name: "Flipkart", src: "https://ik.imagekit.io/j0xzq9pns/marketly/logo/flipkart.png?updatedAt=1779005081472" },
//     { name: "Google Analytics", src: "https://cdn.simpleicons.org/googleanalytics/E37400" },
//     { name: "Jungle Scout", src: "https://ik.imagekit.io/j0xzq9pns/marketly/logo/JUNGLE-SCOUT.webp?updatedAt=1779005081826" },
//     { name: "Microsoft", src: "https://ik.imagekit.io/j0xzq9pns/marketly/logo/microsoft-logo.png?updatedAt=1779005081969" },
//     { name: "Pinterest", src: "https://cdn.simpleicons.org/pinterest/BD081C" },
//   ];

//   const serviceColumns = [
//     {
//       title: "Digital marketing",
//       Icon: Search,
//       items: ["SEO", "Social media marketing", "Content marketing", "Online reputation", "Brand positioning"],
//     },
//     {
//       title: "Performance marketing",
//       Icon: MousePointerClick,
//       items: ["Google Ads", "Meta Ads", "Retargeting", "Landing page CRO", "Conversion tracking"],
//     },
//     {
//       title: "Website & commerce",
//       Icon: Globe2,
//       items: ["Business websites", "E-commerce stores", "CRM integrations", "Mobile app UI", "Analytics dashboards"],
//     },
//   ];

//   const deckCards = [
//     {
//       Icon: Play,
//       title: "KSPL powered by SKSCA 2024",
//       text: "A dedicated feature area for campaign videos, partner credibility and launch storytelling.",
//       stat: "Video",
//     },
//     {
//       Icon: LayoutDashboard,
//       title: "Website systems and launch stories",
//       text: "A guided story layer for websites, growth systems, lead magnets and product builds.",
//       stat: "05 sites",
//     },
//     {
//       Icon: Smartphone,
//       title: "Presentation-style scrolling",
//       text: "Horizontal snap cards give the page the clean, deck-like movement the client liked.",
//       stat: "Scroll",
//     },
//   ];

//   const ksplVideos = [
//     "https://ik.imagekit.io/j0xzq9pns/marketly/WhatsApp%20Video%202026-05-11%20at%207.38.01%20PM.mp4",
//     "https://ik.imagekit.io/j0xzq9pns/marketly/WhatsApp%20Video%202026-05-11%20at%207.38.02%20PM.mp4",
//     "https://ik.imagekit.io/j0xzq9pns/marketly/WhatsApp%20Video%202026-05-11%20at%207.38.00%20PM.mp4",
//     "https://ik.imagekit.io/j0xzq9pns/marketly/WhatsApp%20Video%202026-05-11%20at%207.38.00%20PM%20(1).mp4",
//     "https://ik.imagekit.io/j0xzq9pns/marketly/WhatsApp%20Video%202026-05-11%20at%207.37.59%20PM%20(1).mp4",
//     "https://ik.imagekit.io/j0xzq9pns/marketly/WhatsApp%20Video%202026-05-11%20at%207.38.01%20PM%20(1).mp4",
//     "https://ik.imagekit.io/j0xzq9pns/marketly/WhatsApp%20Video%202026-05-11%20at%207.38.00%20PM%20(2).mp4",
//     "https://ik.imagekit.io/j0xzq9pns/marketly/WhatsApp%20Video%202026-05-11%20at%207.38.01%20PM%20(2).mp4",
//     "https://ik.imagekit.io/j0xzq9pns/marketly/WhatsApp%20Video%202026-05-11%20at%207.37.59%20PM.mp4",
//   ];
//   const [activeVideoIndex, setActiveVideoIndex] = useState(0);
//   const [videoPlaying, setVideoPlaying] = useState(false);
//   const [videoMuted, setVideoMuted] = useState(true);
//   const activeVideo = ksplVideos[activeVideoIndex];
//   const featuredVideoRef = useRef(null);

//   useEffect(() => {
//     if (!featuredVideoRef.current) return;
//     featuredVideoRef.current.pause();
//     featuredVideoRef.current.load();
//     setVideoPlaying(false);
//   }, [activeVideoIndex]);

//   const toggleFeaturedVideo = async () => {
//     const video = featuredVideoRef.current;
//     if (!video) return;
//     if (video.paused) {
//       await video.play();
//       setVideoPlaying(true);
//     } else {
//       video.pause();
//       setVideoPlaying(false);
//     }
//   };

//   const toggleFeaturedAudio = () => {
//     setVideoMuted((current) => !current);
//   };

//   return (
//     <section className="bg-white border-y border-zinc-200" data-testid="home-growth-proof-deck">
//       <div className="py-20 md:py-28 bg-zinc-50">
//         <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//           <div className="space-y-6">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-80px" }}
//               transition={{ duration: 0.6 }}
//               className="bg-white border border-zinc-200 rounded-sm overflow-hidden shadow-[0_22px_60px_-40px_rgba(15,18,18,0.35)]"
//             >
//               <div className="grid lg:grid-cols-12 gap-px bg-zinc-200">
//                 <div className="lg:col-span-4 bg-white p-7 md:p-9 flex flex-col justify-between">
//                   <div>
//                     <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50]">Featured campaign videos</div>
//                     <h2 className="mt-3 text-3xl md:text-[44px] font-extrabold leading-tight text-[#0F1212]">
//                       KSPL powered by KSSCA 2024
//                     </h2>
//                     <p className="mt-5 text-zinc-600 leading-relaxed">
//                       Marketly featured as the marketing partner for the KSPL campaign powered by KSSCA 2024.
//                     </p>
//                   </div>
//                   <div className="mt-8 grid gap-3">
//                     {[
//                       { k: "Marketing Partner", v: "Campaign strategy, creative direction and launch communication." },
//                       { k: "Powered by KSSCA", v: "A focused 2024 sports campaign with video-led storytelling." },
//                       { k: "Campaign Reels", v: "Short-form video assets arranged for quick viewing and selection." },
//                     ].map((item) => (
//                       <div key={item.k} className="rounded-sm border border-zinc-200 bg-zinc-50 p-4">
//                         <div className="text-sm font-extrabold text-[#134E35]">{item.k}</div>
//                         <div className="mt-2 text-xs leading-relaxed text-zinc-600">{item.v}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="lg:col-span-8 bg-[#0F1212] text-white p-4 md:p-6 relative overflow-hidden">
//                   <div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "18px 18px"}} />
//                   <div className="relative">
//                     <div className="relative aspect-video overflow-hidden rounded-sm border border-white/10 bg-black shadow-[0_20px_50px_-28px_rgba(0,0,0,0.9)]">
//                       <video
//                         ref={featuredVideoRef}
//                         src={activeVideo}
//                         className="h-full w-full object-cover"
//                         muted={videoMuted}
//                         onEnded={() => setVideoPlaying(false)}
//                         onPause={() => setVideoPlaying(false)}
//                         onPlay={() => setVideoPlaying(true)}
//                         playsInline
//                         preload="metadata"
//                       />
//                       <div className="absolute inset-x-0 top-0 p-4 bg-gradient-to-b from-black/65 to-transparent">
//                         <div className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur">
//                           <span className="h-1.5 w-1.5 rounded-full bg-[#C87A50]" /> Featured video {activeVideoIndex + 1}
//                         </div>
//                       </div>
//                       {!videoPlaying && (
//                         <button
//                           type="button"
//                           onClick={toggleFeaturedVideo}
//                           className="absolute inset-0 grid place-items-center bg-black/20 hover:bg-black/10 transition-colors"
//                           aria-label="Play featured KSPL video"
//                         >
//                           <span className="h-16 w-16 rounded-full bg-[#C87A50] text-white grid place-items-center shadow-[0_18px_35px_-18px_rgba(0,0,0,0.8)]">
//                             <Play className="h-6 w-6 fill-white ml-0.5" />
//                           </span>
//                         </button>
//                       )}
//                       <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/75 to-transparent">
//                         <div className="flex items-center justify-between gap-3">
//                           <button
//                             type="button"
//                             onClick={toggleFeaturedVideo}
//                             className="inline-flex items-center gap-2 rounded-full bg-white text-[#0F1212] px-4 py-2 text-xs font-bold hover:bg-[#F4F8F1] transition-colors"
//                           >
//                             {videoPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 fill-current" />}
//                             {videoPlaying ? "Pause" : "Play"}
//                           </button>
//                           <button
//                             type="button"
//                             onClick={toggleFeaturedAudio}
//                             className="h-9 w-9 rounded-full border border-white/20 bg-white/10 grid place-items-center text-white backdrop-blur hover:bg-white/20 transition-colors"
//                             aria-label={videoMuted ? "Turn sound on" : "Turn sound off"}
//                           >
//                             {videoMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
//                           </button>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="mt-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
//                       {ksplVideos.map((src, index) => (
//                         <button
//                           key={src}
//                           type="button"
//                           onClick={() => setActiveVideoIndex(index)}
//                           className={`rounded-sm border p-1 text-left transition-all ${
//                             activeVideoIndex === index
//                               ? "border-[#C87A50] bg-[#C87A50]/15"
//                               : "border-white/10 bg-white/[0.04] hover:border-white/30"
//                           }`}
//                         >
//                           <div className="relative aspect-video overflow-hidden rounded-sm bg-black">
//                             <video
//                               src={src}
//                               className="h-full w-full object-cover"
//                               muted
//                               playsInline
//                               preload="metadata"
//                             />
//                             <div className="absolute inset-0 grid place-items-center bg-black/20">
//                               <span className="h-8 w-8 rounded-full bg-white/90 text-[#0F1212] grid place-items-center">
//                                 <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
//                               </span>
//                             </div>
//                           </div>
//                           <div className="mt-1.5 text-center text-[10px] font-semibold text-white/60">Video {index + 1}</div>
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-80px" }}
//               transition={{ duration: 0.6, delay: 0.05 }}
//               className="bg-white border border-zinc-200 rounded-sm p-6 md:p-10"
//             >
//               <div className="text-center mb-7">
//                 <h3 className="text-xl md:text-2xl font-extrabold text-[#0F1212]">
//                   Platforms we connect across campaigns.
//                 </h3>
//               </div>
//               <div className="flex flex-wrap justify-center gap-3 md:gap-4">
//                 {automationLogos.map((logo) => (
//                   <div
//                     key={logo.name}
//                     className="h-14 w-[150px] md:w-[168px] rounded-sm bg-zinc-50 px-4 flex items-center justify-center hover:bg-white hover:shadow-[0_12px_28px_-24px_rgba(15,18,18,0.45)] transition-all"
//                   >
//                     <img
//                       src={logo.src}
//                       alt={`${logo.name} logo`}
//                       loading="lazy"
//                       className="max-h-10 max-w-[138px] object-contain"
//                     />
//                     <span className="sr-only">{logo.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-80px" }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="grid sm:grid-cols-3 gap-4"
//             >
//               {deckCards.map(({ Icon, title, text, stat }) => (
//                 <div key={title} className="bg-white border border-zinc-200 rounded-sm p-5 min-h-[220px]">
//                   <div className="flex items-center justify-between gap-3">
//                     <div className="h-10 w-10 rounded-sm bg-[#134E35]/10 grid place-items-center">
//                       <Icon className="h-4 w-4 text-[#134E35]" />
//                     </div>
//                     <div className="text-[10px] uppercase tracking-[0.14em] font-bold text-[#C87A50]">{stat}</div>
//                   </div>
//                   <h4 className="mt-6 text-lg font-bold leading-tight text-[#0F1212]">{title}</h4>
//                   <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{text}</p>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       <div className="py-16 md:py-20 bg-white">
//         <div className="max-w-[1200px] mx-auto px-5 md:px-10">
//           <div className="rounded-sm border border-zinc-200 p-5 md:p-7">
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-zinc-200 border border-zinc-200">
//               {reviewPlatforms.map((platform) => (
//                 <div key={platform.name} className="bg-white p-4 md:p-5 text-center">
//                   <div className={`font-extrabold text-lg ${platform.tone}`}>{platform.name}</div>
//                   <div className="mt-2 flex justify-center gap-0.5 text-[#F5A623]">
//                     {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
//                   </div>
//                   <div className="mt-1 text-[11px] font-semibold text-zinc-500">{platform.score}/5 · {platform.sub}</div>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-5 text-center text-sm text-zinc-500">
//               Flexible, priority-driven results with ROI-focused digital marketing services.
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="py-20 md:py-28 bg-[#0F1212] text-white relative overflow-hidden">
//         <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "48px 48px"}} />
//         <div className="max-w-[1200px] mx-auto px-5 md:px-10 relative">
//           <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
//             <div className="lg:col-span-5">
//               <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Result-driven services</div>
//               <h2 className="text-[32px] md:text-[48px] font-extrabold leading-tight">
//                 Generate qualified leads and drive sales.
//               </h2>
//               <p className="mt-5 text-white/65 leading-relaxed">
//                 Full-stack digital marketing services built to improve visibility, capture intent and convert traffic into measurable pipeline.
//               </p>
//             </div>
//             <div className="lg:col-span-7 grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
//               {serviceColumns.map(({ Icon, title, items }) => (
//                 <div key={title} className="bg-[#101414] p-7">
//                   <div className="h-11 w-11 rounded-sm bg-white/5 border border-white/10 grid place-items-center mb-6">
//                     <Icon className="h-5 w-5 text-[#C87A50]" />
//                   </div>
//                   <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
//                   <ul className="mt-5 space-y-3">
//                     {items.map((item) => (
//                       <li key={item} className="flex items-start gap-2.5 text-sm text-white/65">
//                         <CheckCircle2 className="h-4 w-4 text-[#C87A50] mt-0.5 shrink-0" />
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="mt-12 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none]">
//             <div className="flex gap-4 min-w-max">
//               {deckCards.map(({ Icon, title, text, stat }) => (
//                 <div key={title} className="snap-start w-[78vw] sm:w-[420px] rounded-sm border border-white/10 bg-white/[0.035] p-6">
//                   <div className="flex items-center justify-between">
//                     <Icon className="h-5 w-5 text-[#C87A50]" />
//                     <span className="text-[10px] uppercase tracking-[0.16em] font-bold text-white/40">{stat}</span>
//                   </div>
//                   <h3 className="mt-8 text-2xl font-extrabold leading-tight">{title}</h3>
//                   <p className="mt-4 text-sm text-white/60 leading-relaxed">{text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// /* ========================= AUDIT CTA (single inline lead magnet) ========================= */
// function AuditCTA() {
//   return (
//     <section className="py-20 md:py-28 bg-[#0F1212] text-white relative overflow-hidden" data-testid="home-audit">
//       <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px"}} />
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative">
//         <div className="grid md:grid-cols-12 gap-10 items-start">
//           <div className="md:col-span-5">
//             <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4 flex items-center gap-2">
//               <Sparkles className="h-3.5 w-3.5" /> Free audit
//             </div>
//             <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold leading-[1.05] tracking-[-0.02em]">
//               See how your site stacks up — in 60 seconds.
//             </h2>
//             <p className="mt-5 text-base md:text-lg text-zinc-400 leading-relaxed">
//               A real technical + SEO audit across 20 signals — meta tags, schema, Core Web Vitals, crawl structure. PDF report lands in your inbox.
//             </p>
//             <div className="mt-8 space-y-2.5">
//               {["No credit card required", "Takes ~5 seconds", "Full PDF report by email"].map((b) => (
//                 <div key={b} className="flex items-center gap-2.5 text-sm text-zinc-300">
//                   <CheckCircle2 className="h-4 w-4 text-[#C87A50]" />
//                   {b}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="md:col-span-7">
//             <AuditTool />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ========================= WHY US — psychology block ========================= */
// function WhyUs() {
//   const points = [
//     { n: "01", t: "One team, not three agencies", d: "Paid + SEO + creative + offline — under one roof. Zero Frankenstein handoffs. One invoice." },
//     { n: "02", t: "Numbers you can verify", d: "Live dashboards, honest reporting. When something doesn't work, we tell you first." },
//     { n: "03", t: "You own everything", d: "Your ad accounts, your content, your data. Always. We operate inside your systems." },
//     { n: "04", t: "30-day notice, always", d: "No contract lock-ins. We earn the retainer every month. That's the only contract we care about." },
//   ];
//   return (
//     <section className="py-20 md:py-28 bg-white" data-testid="home-why">
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//         <div className="max-w-3xl mb-14">
//           <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Why Marketly</div>
//           <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">
//             Clients stay, because the boring stuff gets done.
//           </h2>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {points.map((p, i) => (
//             <motion.div
//               key={p.n}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-60px" }}
//               transition={{ duration: 0.5, delay: i * 0.08 }}
//               className="p-6 md:p-7 bg-white border border-zinc-200 rounded-sm hover:border-[#134E35] transition-colors"
//             >
//               <div className="text-sm font-mono font-semibold text-[#134E35]">{p.n}</div>
//               <h3 className="mt-5 text-lg font-bold text-[#0F1212] leading-tight">{p.t}</h3>
//               <p className="mt-2.5 text-[15px] text-zinc-600 leading-relaxed">{p.d}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ========================= LATEST BLOG ========================= */
// function LatestBlog() {
//   const latest = BLOG_POSTS.slice(0, 3);
//   return (
//     <section className="py-20 md:py-28 bg-zinc-50" data-testid="home-blog">
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//         <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
//           <div className="max-w-2xl">
//             <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">From the team</div>
//             <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">
//               Playbooks we actually run.
//             </h2>
//           </div>
//           <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#134E35]">
//             All articles <ArrowRight className="h-4 w-4" />
//           </Link>
//         </div>
//         <div className="grid md:grid-cols-3 gap-6">
//           {latest.map((b, i) => (
//             <motion.div
//               key={b.slug}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-60px" }}
//               transition={{ duration: 0.5, delay: i * 0.08 }}
//             >
//               <Link
//                 to={`/blog/${b.slug}`}
//                 className="group block bg-white rounded-sm overflow-hidden border border-zinc-200 hover:border-[#134E35] hover:shadow-[0_12px_32px_-16px_rgba(19,78,53,0.2)] transition-all duration-300 h-full"
//                 data-testid={`blog-${b.slug}`}
//               >
//                 <div className="aspect-[16/10] overflow-hidden bg-zinc-200">
//                   <img src={b.cover} alt={b.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C87A50]">
//                     {b.category} · {b.readTime}
//                   </div>
//                   <h3 className="mt-3 text-lg font-bold text-[#0F1212] leading-snug line-clamp-2">{b.title}</h3>
//                   <p className="mt-2 text-sm text-zinc-600 line-clamp-2">{b.excerpt}</p>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ========================= TESTIMONIAL STRIP ========================= */
// function TestimonialStrip() {
//   return (
//     <section className="py-20 md:py-28 bg-white" data-testid="home-testimonials">
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//         <div className="max-w-2xl mb-12">
//           <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Words from the room</div>
//           <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">
//             What our clients say.
//           </h2>
//         </div>
//         <div className="grid md:grid-cols-2 gap-5">
//           {TESTIMONIALS.slice(0, 2).map((t) => (
//             <div key={t.name} className="p-8 md:p-10 bg-zinc-50 rounded-sm border border-zinc-200">
//               <div className="flex items-center gap-1 mb-5 text-[#C87A50]">
//                 {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
//               </div>
//               <blockquote className="text-lg md:text-[19px] text-[#0F1212] leading-snug font-medium">
//                 "{t.quote}"
//               </blockquote>
//               <div className="mt-6 pt-6 border-t border-zinc-200 flex items-center gap-4">
//                 <div className="h-11 w-11 rounded-full bg-[#134E35] text-white font-bold grid place-items-center">{t.initial}</div>
//                 <div>
//                   <div className="font-bold text-[#0F1212]">{t.name}</div>
//                   <div className="text-sm text-zinc-500">{t.title}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ========================= FINAL CTA ========================= */
// function FinalCTA() {
//   return (
//     <section className="py-20 md:py-28 bg-[#134E35] text-white relative overflow-hidden" data-testid="home-final-cta">
//       <div className="absolute top-0 right-0 w-1/2 h-full opacity-20" style={{backgroundImage: "radial-gradient(circle at top right, #C87A50 0%, transparent 60%)"}} />
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative">
//         <div className="max-w-3xl">
//           <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em]">
//             Tell us where you want to go. We'll map the route.
//           </h2>
//           <p className="mt-6 text-lg text-white/80 max-w-xl leading-relaxed">
//             Free 30-minute strategy call. We'll audit your current setup, tell you the 2–3 levers that will move fastest, and you decide if we're the right fit.
//           </p>
//           <div className="mt-10 flex flex-wrap items-center gap-3">
//             <Button asChild data-testid="final-cta-btn" className="rounded-sm bg-[#C87A50] hover:bg-[#B16840] text-white h-12 px-6 font-semibold">
//               <Link to="/contact">Book a strategy call <ArrowRight className="ml-2 h-4 w-4" /></Link>
//             </Button>
//             <Button asChild variant="outline" className="rounded-sm border-white/30 bg-transparent text-white hover:bg-white/10 h-12 px-6 font-semibold">
//               <Link to="/work">See our work</Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Award, CheckCircle2, Star, Sparkles, TrendingUp, Play, Pause, Volume2, VolumeX, Activity, Bot, ShieldCheck, Building2, GraduationCap, ShoppingCart, TicketCheck, Search, BarChart3, MousePointerClick, Globe2, Smartphone, LayoutDashboard } from "lucide-react";
import PublicLayout from "@/components/layout/PublicLayout";
import { SERVICES, CLIENT_LOGOS, TESTIMONIALS, HERO_STATS, AWARDS } from "@/data/publicContent";
import { CASE_STUDIES } from "@/data/caseStudies";
import { BLOG_POSTS } from "@/data/blogPosts";
import { AuditTool } from "@/components/landing/LandingTools";
import ProjectShowcase from "@/components/landing/ProjectShowcase";
import { PartnerBadgeRow } from "@/components/landing/PartnerBadges";
import CountUp from "@/components/landing/CountUp";
import ScrollProgress from "@/components/landing/ScrollProgress";

const AWARD_PHOTO = "https://customer-assets.emergentagent.com/job_rank-intel-dash/artifacts/2afpvxbt_AJP03487.JPG.jpeg";

export default function Home() {
  return (
    <PublicLayout>
      <ScrollProgress />
      <Hero />
      <FounderAward />
      <TrustBar />
      <AIVisibilityAudit />
      <AuditCTA />
       <ServicesPreview />
      <CertifiedExcellence />
      {/* <AIVisibilityAudit /> */}
     
      <ProductSystems />
      <FeaturedWork />
      <ProjectShowcase limit={8} />
      <GrowthProofDeck />
      <WhyUs />
      <GrowthCTA />

      <LatestBlog />
      <TestimonialStrip />
      <FinalCTA />
    </PublicLayout>
  );
}

/* ========================= HERO (DARK) ========================= */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yAward = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yCase = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={ref} className="relative bg-[#070812] text-white overflow-hidden" data-testid="home-hero">
      <div className="pointer-events-none absolute inset-0 opacity-[0.055]" style={{backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "52px 52px"}} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#070812]" />

      <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-12 pb-16 md:pt-20 md:pb-20 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-7"
          >
            {/* Trust pill row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-2 mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/80 rounded-full">
                <Award className="h-3.5 w-3.5" /> Women Achievement Summit 
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/75 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A3D]" /> Google Partner
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/75 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A3D]" /> Meta Business Partner
              </span>
            </motion.div>

            <h1 className="text-[42px] sm:text-[56px] lg:text-[76px] font-extrabold leading-[1.02] tracking-[-0.02em] text-white">
              The growth stack for brands that want to{" "}
              <span className="relative inline-block text-[#FF6A3D]">
                compound
                <svg className="absolute left-0 -bottom-1.5 w-full h-3" viewBox="0 0 300 12" fill="none">
                  <motion.path
                    d="M 2 8 Q 80 0 150 6 T 298 4"
                    stroke="#FF6A3D"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }}
                  />
                </svg>
              </span>
              .
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-lg md:text-xl text-white/68 max-w-2xl leading-relaxed"
            >
              Performance marketing, SEO, local ranking, landing pages, creative, and offline media — one team that ships every part of your growth stack, not just a single slice of it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button asChild data-testid="hero-book-call-btn" className="group rounded-sm bg-[#FF6A3D] hover:bg-[#E85C31] text-white h-12 px-6 text-[13px] font-semibold shadow-[0_14px_34px_-18px_rgba(255,106,61,0.75)]">
                <Link to="/contact">Book a strategy call <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
              <Button asChild variant="outline" data-testid="hero-work-btn" className="rounded-sm border-white/15 bg-white/5 text-white hover:bg-white/10 h-12 px-6 text-[13px] font-semibold">
                <Link to="/work">See our work <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <div className="flex items-center gap-2 text-xs text-white/55 ml-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#FF6A3D]" /> No-obligation · 30-min call
              </div>
            </motion.div>

            {/* Animated count-up stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-6 max-w-2xl"
              data-testid="hero-stats"
            >
              {[
                { v: 50, suffix: "+", k: "Brands served" },
                { v: 94, suffix: "%", k: "Client retention" },
                { v: 12, suffix: " yrs", k: "In business" },
              ].map((s) => (
                <div key={s.k} className="border-l border-white/15 pl-4">
                  <div className="text-3xl md:text-[32px] font-bold text-white leading-none">
                    <CountUp value={s.v} prefix={s.prefix || ""} suffix={s.suffix || ""} />
                  </div>
                  <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/42">{s.k}</div>
                </div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="mt-5 text-center sm:text-left text-sm md:text-base font-semibold text-white/58"
            >
              15+ brands | 98% client retention | 5 years | Rs. 10+ monthly ad spends
            </motion.div>
          </motion.div>

          {/* RIGHT — 3-image collage with parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[540px] md:h-[620px]">
              {/* MAIN — team image, top-right, large */}
              <motion.div
                style={{ y: yImg }}
                className="absolute top-0 right-0 w-[78%] aspect-[4/5] rounded-sm overflow-hidden border border-white/10 shadow-[0_30px_70px_-28px_rgba(0,0,0,0.9)]"
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900"
                  alt="Marketly team at work"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070812]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur rounded-sm px-3 py-2">
                  <div className="text-[9px] font-semibold uppercase tracking-[0.14em] text-zinc-500">The team</div>
                  <div className="text-xs font-bold text-[#070812]">Bengaluru HQ · 22 people</div>
                </div>
              </motion.div>

              {/* REAL AWARD PHOTO — bottom-left, medium */}
              <motion.div
                style={{ y: yAward }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-12 left-0 w-[58%] aspect-[4/3] rounded-sm overflow-hidden border-4 border-[#070812] shadow-[0_20px_48px_-16px_rgba(0,0,0,0.75)] z-10"
              >
                <img
                  src={AWARD_PHOTO}
                  alt="Ramya Prasanna receiving the Marketing Innovation Award 2024"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070812]/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <div className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#FF6A3D]">Award winner · March 2024</div>
                  <div className="text-[13px] font-bold leading-tight mt-0.5">Ramya Prasanna · Founder</div>
                </div>
              </motion.div>

              {/* Case-study metric card — top-left floating */}
              <motion.div
                style={{ y: yCase }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="absolute top-6 -left-4 md:left-0 w-[46%] bg-[#171829] rounded-sm p-4 border border-white/10 shadow-[0_18px_45px_-18px_rgba(0,0,0,0.85)] z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-sm bg-[#FF6A3D]/12 grid place-items-center">
                    <TrendingUp className="h-4 w-4 text-[#FF6A3D]" />
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/42">Recent outcome</div>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <CountUp value={300} suffix="%" className="text-3xl font-extrabold text-[#FF6A3D] leading-none" />
                  <span className="text-[11px] text-white/45 font-semibold">ROI</span>
                </div>
                <div className="text-xs text-white/58 mt-2 leading-snug">RRL Builders & Developers · qualified site-visits, 90 days</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ========================= FOUNDER-LED AWARD STORY (LIGHT) ========================= */
function FounderAward() {
  return (
    <section className="py-20 md:py-28 bg-zinc-50 text-[#070812] relative overflow-hidden" data-testid="founder-award">
      <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle, #070812 1px, transparent 1px)", backgroundSize: "32px 32px"}} />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none" style={{background: "radial-gradient(circle at top right, rgba(255,106,61,0.35) 0%, transparent 60%)"}} />
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-sm overflow-hidden aspect-[4/3] md:aspect-[16/11] border-[6px] border-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.2)]">
              <img src={AWARD_PHOTO} alt="Ramya Prasanna receiving the Marketing Innovation Award at the 2024 Women Achievements ceremony" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            {/* polaroid caption */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-2 md:-right-6 bg-white text-[#070812] px-5 py-4 rounded-sm border border-zinc-200 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.1)] max-w-xs"
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#FF6A3D]">Stage photo · 10 March 2024</div>
              <div className="text-base font-bold leading-tight mt-1">Women Achievements Summit</div>
              <div className="text-xs text-zinc-500 mt-0.5">Founder of Marketly — award recipient</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4 flex items-center gap-2">
              <Award className="h-3.5 w-3.5" /> Founder-led · Award-winning
            </div>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em]">
Built by a Founder who prioritizes Performance over Promises.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl">
              Marketly was founded by <span className="font-bold text-[#070812]">Ramya Prasanna</span> — a serial entrepreneur who saw a gap between creative marketing and actual business growth. With a background in scaling high-impact brands at Simplilearn and Scaler, she built Marketly to deliver the transparency and data-driven results that modern founders demand. Recognized for her work in Digital Innovation, she now leads a team dedicated to transforming brands through architectural precision and marketing excellence.
            </p>
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { k: "2024", v: "Agency founded" },
                { k: "15+", v: "Brands grown" },
                { k: "2025", v: "Award winner" },
              ].map((s, i) => (
                <motion.div
                  key={s.v}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="p-5 bg-white border border-zinc-200 rounded-sm shadow-sm"
                >
                  <div className="text-3xl font-extrabold text-[#FF6A3D] leading-none">{s.k}</div>
                  <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">{s.v}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild className="rounded-sm bg-[#FF6A3D] hover:bg-[#E85C31] text-white h-12 px-6 font-semibold">
                <Link to="/contact">Talk to Ramya's team <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="rounded-sm border-zinc-200 bg-transparent text-[#070812] hover:bg-zinc-100 h-12 px-6 font-semibold">
                <Link to="/about">Our story</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ========================= TRUST BAR (logos + awards) (DARK) ========================= */
function TrustBar() {
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section className="bg-[#070812] border-y border-white/10 py-14 md:py-16" data-testid="home-trust">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* Partner badges — official-style SVG cards */}
        <div className="mb-12">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-5 text-center">
            Certified partner · Award winner
          </div>
          <PartnerBadgeRow />
        </div>

        {/* Client logos marquee */}
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50 mb-6 text-center">
          Trusted by 50+ brands across India
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#070812] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#070812] to-transparent pointer-events-none" />
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {logos.map((name, i) => (
              <span key={`${name}-${i}`} className="text-2xl font-semibold text-white/30 hover:text-[#FF6A3D] transition-colors shrink-0">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================= AI VISIBILITY AUDIT (LIGHT) ========================= */
function AIVisibilityAudit() {
  const engines = [
    { name: "ChatGPT", score: "85%", width: "w-[85%]" },
    { name: "Perplexity", score: "72%", width: "w-[72%]" },
    { name: "Gemini", score: "62%", width: "w-[62%]" },
    { name: "Claude", score: "58%", width: "w-[58%]" },
  ];

  return (
    <section className="py-20 md:py-28 bg-white text-[#070812] relative overflow-hidden" data-testid="home-ai-visibility-audit">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-6"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" /> Free AI visibility audit
            </div>
            <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em]">
              How visible is your brand inside AI search?
            </h2>
            <p className="mt-6 text-lg text-zinc-600 leading-relaxed max-w-2xl">
              See how often ChatGPT, Perplexity, Gemini, and Claude understand, mention, and recommend your brand. The audit gives you a clear score and the gaps to fix next.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-3 max-w-2xl">
              {["AI mentions", "Competitor gaps", "Content fixes"].map((item) => (
                <div key={item} className="rounded-sm border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FF6A3D] shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button asChild className="rounded-sm bg-[#FF6A3D] hover:bg-[#E85C31] text-white h-12 px-6 font-semibold">
                <Link to="/contact">Check your score for free <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <div className="text-sm text-zinc-500 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#FF6A3D]" /> No credit card required
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="bg-white border border-zinc-200 rounded-sm overflow-hidden shadow-xl">
              <div className="h-12 border-b border-zinc-200 flex items-center justify-between px-5 bg-zinc-50">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF6A3D]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                </div>
                <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono">
                  <Activity className="h-3.5 w-3.5 text-[#FF6A3D]" /> Live visibility scan
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                  <div className="relative aspect-square rounded-full border border-zinc-200 bg-white grid place-items-center shadow-inner">
                    <div className="absolute inset-6 rounded-full border border-zinc-100" />
                    <div className="absolute inset-12 rounded-full border border-[#FF6A3D]/30" />
                    <Bot className="absolute top-8 right-10 h-7 w-7 text-[#FF6A3D]" />
                    <div className="text-center">
                      <div className="text-6xl font-extrabold text-[#070812] tracking-tight">73</div>
                      <div className="mt-2 text-[10px] tracking-[0.2em] uppercase font-bold text-[#FF6A3D]">Visibility score</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {engines.map((item) => (
                      <div key={item.name} className="rounded-sm bg-zinc-50 border border-zinc-200 p-4">
                        <div className="flex items-center justify-between text-sm mb-3">
                          <span className="text-zinc-700">{item.name}</span>
                          <span className="text-[#070812] font-mono">{item.score}</span>
                        </div>
                        <div className="h-2 rounded-full bg-zinc-200 overflow-hidden">
                          <div className={`${item.width} h-full rounded-full bg-[#FF6A3D]`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-3 gap-3">
                  {[
                    { k: "4", v: "AI engines" },
                    { k: "30s", v: "scan time" },
                    { k: "0", v: "card needed" },
                  ].map((stat) => (
                    <div key={stat.v} className="rounded-sm border border-zinc-200 bg-zinc-50 p-4">
                      <div className="text-2xl font-bold text-[#070812] leading-none">{stat.k}</div>
                      <div className="mt-2 text-[10px] uppercase tracking-[0.14em] text-zinc-500">{stat.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ========================= CERTIFIED EXCELLENCE (DARK) ========================= */
function CertifiedExcellence() {
  const cards = [
    {
      title: "Google Partner",
      status: "Search + YouTube certified",
      desc: "Certified Google Ads execution across search, display, YouTube, conversion tracking, and transparent optimization loops.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
      accent: "bg-[#0B5BD3]",
    },
    {
      title: "Meta Business Partner",
      status: "Performance tier",
      desc: "Facebook and Instagram campaign systems built around creative testing, audience strategy, and accountable reporting.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      accent: "bg-[#0081FB]",
    },
    {
      title: "Women Achievement Summit",
      status: "Global Iconic Excellence 2025",
      desc: "Recognition for building performance-led growth systems across campaigns, websites, creative, and marketing operations.",
      Icon: Award,
      accent: "bg-[#FF6A3D]",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#070812]" data-testid="home-certified-excellence">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
          <div className="md:col-span-7">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4">Certified excellence</div>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
              Platform-certified work, handled with senior discipline.
            </h2>
          </div>
          <p className="md:col-span-5 text-base md:text-lg text-white/70 leading-relaxed">
            Google, Meta, and AdAsia-recognised work, presented with clear proof points and senior execution discipline.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group bg-white/5 border border-white/10 rounded-sm p-7 md:p-8 hover:border-[#FF6A3D] hover:shadow-[0_14px_36px_-22px_rgba(255,106,61,0.35)] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="h-14 w-14 rounded-sm bg-white/5 border border-white/10 grid place-items-center p-3">
                  {card.logo ? (
                    <img src={card.logo} alt={`${card.title} logo`} className="h-full w-full object-contain" />
                  ) : (
                    <card.Icon className="h-7 w-7 text-[#FF6A3D]" />
                  )}
                </div>
                <span className="inline-flex items-center gap-2 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70 bg-[#070812] border border-white/10 rounded-sm">
                  <span className={`h-1.5 w-1.5 rounded-full ${card.accent}`} /> {card.status}
                </span>
              </div>
              <h3 className="mt-7 text-xl font-bold text-white leading-tight">{card.title}</h3>
              <p className="mt-3 text-[15px] text-white/70 leading-relaxed">{card.desc}</p>
              <div className="mt-7 pt-5 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-white/50 font-medium">Verification</span>
                <span className="font-semibold text-[#FF6A3D] flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Active
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= SERVICES PREVIEW (LIGHT) ========================= */
function ServicesPreview() {
  const serviceColumns = [
    {
      Icon: Search,
      title: "Digital marketing",
      items: ["SEO & local ranking", "Social media marketing", "Content marketing", "Online reputation", "Brand positioning"],
    },
    {
      Icon: TrendingUp,
      title: "Performance marketing",
      items: ["Google Ads", "Meta Ads", "Retargeting", "Landing page CRO", "Conversion tracking"],
    },
    {
      Icon: Globe2,
      title: "Website & commerce",
      items: ["Business websites", "E-commerce stores", "CRM integrations", "Mobile app UI", "Analytics dashboards"],
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAFAF8] border-t border-zinc-100" data-testid="home-services">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="max-w-4xl mb-9">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4">Result-driven services</div>
          <h2 className="text-[30px] sm:text-[38px] lg:text-[48px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#070812]">
            Generate qualified leads and drive sales.
          </h2>
          <p className="mt-3 text-base md:text-lg text-zinc-600 leading-relaxed max-w-3xl">
            Full-stack digital marketing services built to improve visibility, capture intent and convert traffic into measurable pipeline.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {serviceColumns.map(({ Icon, title, items }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-sm border border-zinc-200 bg-white p-7 md:p-8 shadow-[0_18px_45px_-36px_rgba(15,18,18,0.35)]"
            >
              <div className="h-11 w-11 rounded-sm bg-[#FF6A3D]/10 grid place-items-center mb-6">
                <Icon className="h-5 w-5 text-[#FF6A3D]" />
              </div>
              <h3 className="text-lg font-bold text-[#070812] leading-tight">{title}</h3>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-600 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FF6A3D] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= GROWTH CTA (ORANGE) ========================= */
function GrowthCTA() {
  return (
    <section className="bg-[#FF6A3D] text-white" data-testid="home-growth-cta">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-8 md:py-9">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h2 className="text-2xl md:text-[28px] font-extrabold leading-tight">Ready to compound your growth?</h2>
            <p className="mt-1 text-sm md:text-base text-white/85 font-semibold">No obligation - 30-min strategy call - Senior team, not juniors</p>
          </div>
          <Button asChild className="rounded-sm bg-white text-[#070812] hover:bg-white/90 h-12 px-6 text-sm font-bold self-start md:self-center">
            <Link to="/contact">Book a call <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
      <div className="h-6 bg-[#E85C31]" />
    </section>
  );
}

/* ========================= LEGACY SERVICES PREVIEW (DARK) ========================= */
function LegacyServicesPreview() {
  return (
    <section className="py-20 md:py-28 bg-[#070812]" data-testid="home-services">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
          <div className="md:col-span-7">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4">What we do</div>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
              Seven capabilities. One operating system.
            </h2>
          </div>
          <div className="md:col-span-5 md:pl-8">
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              Most agencies pick a lane. We run the whole highway — so every lever moves together.
            </p>
            <Link to="/services" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#FF6A3D] hover:text-[#E85C31]">
              Explore all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.slice(0, 6).map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group"
            >
              <Link
                to="/services"
                className="block p-7 md:p-8 bg-white/5 border border-white/10 rounded-sm hover:border-[#FF6A3D] hover:shadow-[0_12px_32px_-16px_rgba(255,106,61,0.25)] transition-all duration-300 h-full"
                data-testid={`service-${s.slug}`}
              >
                <div className="flex items-start justify-between">
                  <div className="text-sm font-mono font-semibold text-white/50">{s.num}</div>
                  <ArrowUpRight className="h-4 w-4 text-white/50 group-hover:text-[#FF6A3D] transition-colors" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white leading-tight">{s.title}</h3>
                <p className="mt-2.5 text-[15px] text-white/70 leading-relaxed">{s.short}</p>
                <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-white/50 font-medium">Outcome</span>
                  <span className="font-semibold text-[#FF6A3D]">{s.metric}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= MOBILE APP & PRODUCT SYSTEMS (LIGHT) ========================= */
function ProductSystems() {
  const products = [
    {
      Icon: Building2,
      title: "CRM tool for real estate",
      text: "Lead capture, broker follow-ups, site visits, inventory and booking-stage visibility for real-estate teams.",
      meta: "Pipeline + CRM",
    },
    {
      Icon: TicketCheck,
      title: "Ticket management system",
      text: "A clean tracking interface for service requests, owners, priority, SLA status and resolution history.",
      meta: "Tracking interface",
    },
    {
      Icon: ShoppingCart,
      title: "Grocery e-commerce + mobile app",
      text: "Catalogue, cart, payments, delivery slots and repeat-order journeys for grocery and neighbourhood retail.",
      meta: "Store + app",
    },
    {
      Icon: GraduationCap,
      title: "School & college attendance tool",
      text: "Class-wise attendance, admin dashboards, parent updates and daily reporting workflows for institutions.",
      meta: "Education ops",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-y border-zinc-200 overflow-hidden" data-testid="home-product-systems">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#070812] text-white rounded-sm p-8 md:p-10 relative overflow-hidden min-h-[420px] flex flex-col justify-between"
          >
            <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px"}} />
            <div className="relative">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-5">Marketly tech</div>
              <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em]">
                Mobile apps and product systems.
              </h2>
              <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">
                Custom tools for teams that need more than a website: dashboards, apps, CRMs and workflow systems that keep operations moving.
              </p>
            </div>
            <div className="relative mt-10 grid grid-cols-3 gap-3">
              {[
                { k: "04", v: "product lines" },
                { k: "UI", v: "tracking flows" },
                { k: "App", v: "mobile ready" },
              ].map((stat) => (
                <div key={stat.v} className="border border-white/10 bg-white/[0.035] p-4 rounded-sm">
                  <div className="text-2xl font-extrabold text-[#FF6A3D]">{stat.k}</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.14em] text-white/45">{stat.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {products.map(({ Icon, title, text }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group bg-zinc-50 border border-zinc-200 rounded-sm p-6 md:p-7 hover:bg-white hover:border-[#FF6A3D] hover:shadow-[0_18px_44px_-26px_rgba(255,106,61,0.32)] transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="h-12 w-12 rounded-sm bg-white border border-zinc-200 grid place-items-center group-hover:border-[#FF6A3D]/25">
                      <Icon className="h-5 w-5 text-[#FF6A3D]" />
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.14em] font-semibold text-zinc-400">{products[i].meta}</div>
                  </div>
                  <h3 className="mt-7 text-xl font-bold text-[#070812] leading-tight">{title}</h3>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{text}</p>
                  <div className="mt-6 h-px bg-zinc-200" />
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#FF6A3D]">
                    Product build <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================= FEATURED WORK (DARK) ========================= */
function FeaturedWork() {
  const featured = CASE_STUDIES.slice(0, 4);
  return (
    <section className="py-20 md:py-28 bg-[#070812]" data-testid="home-work">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div className="max-w-2xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4">Selected work</div>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
              Website systems built to convert.
            </h2>
          </div>
          <Link to="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6A3D] hover:text-[#E85C31]">
            View all case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Link
                to={`/work/${c.slug}`}
                className="group block bg-white/5 rounded-sm overflow-hidden border border-white/10 hover:border-[#FF6A3D] hover:shadow-[0_16px_40px_-20px_rgba(255,106,61,0.3)] transition-all duration-400"
                data-testid={`case-${c.slug}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0D14]">
                  <img
                    src={c.cover}
                    alt={c.client}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                    {c.tags.slice(0, 2).map((t) => (
                      <span key={t} className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-white/10 text-white rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#FF6A3D]">
                    Case Study · {c.industry}
                  </div>
                  <h3 className="mt-3 text-xl md:text-2xl font-bold text-white leading-tight">{c.client}</h3>
                  <div className="mt-3 flex items-baseline gap-3">
                    <span className="text-3xl md:text-4xl font-extrabold text-[#FF6A3D] leading-none">{c.heroMetric}</span>
                    <span className="text-sm text-white/70">{c.heroMetricLabel}</span>
                  </div>
                  <p className="mt-3 text-[15px] text-white/70 leading-relaxed line-clamp-2">{c.summary}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#FF6A3D] group-hover:gap-3 transition-all">
                    Read case study <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= FIGMA GROWTH PROOF + PRESENTATION SCROLL (LIGHT) ========================= */
function GrowthProofDeck() {
  const reviewPlatforms = [
    { name: "Google", score: "4.9", tone: "text-[#4285F4]", sub: "reviews" },
    { name: "Clutch", score: "4.8", tone: "text-[#070812]", sub: "agency profile" },
    { name: "Quora", score: "4.7", tone: "text-[#B92B27]", sub: "answers" },
    { name: "GoodFirms", score: "4.8", tone: "text-[#2F80ED]", sub: "listed firm" },
    { name: "Trustpilot", score: "4.9", tone: "text-[#00B67A]", sub: "trust score" },
    { name: "Behance", score: "4.8", tone: "text-[#1769FF]", sub: "creative work" },
  ];

  const automationLogos = [
    { name: "Adobe", src: "https://ik.imagekit.io/j0xzq9pns/marketly/logo/OIP.webp?updatedAt=1779005081738" },
    { name: "Amazon", src: "https://ik.imagekit.io/j0xzq9pns/marketly/logo/amazon.webp?updatedAt=1779005081313" },
    { name: "Google Ads", src: "https://cdn.simpleicons.org/googleads/4285F4" },
    { name: "Meta", src: "https://cdn.simpleicons.org/meta/0866FF" },
    { name: "WhatsApp", src: "https://cdn.simpleicons.org/whatsapp/25D366" },
    { name: "Taboola", src: "https://ik.imagekit.io/j0xzq9pns/marketly/logo/taboola.webp?updatedAt=1779005081811" },
    { name: "LinkedIn", src: "https://ik.imagekit.io/j0xzq9pns/marketly/logo/linkedin.png?updatedAt=1779005081867" },
    { name: "SEMrush", src: "https://ik.imagekit.io/j0xzq9pns/marketly/logo/semrush.webp?updatedAt=1779005081842" },
    { name: "Wati", src: "https://ik.imagekit.io/j0xzq9pns/marketly/logo/wati.jpg?updatedAt=1779005081799" },
    { name: "Interakt", src: "https://ik.imagekit.io/j0xzq9pns/marketly/logo/interakt.png?updatedAt=1779005082154" },
    { name: "Zoho", src: "https://ik.imagekit.io/j0xzq9pns/marketly/logo/zoho.webp?updatedAt=1779005081981" },
    { name: "Mailchimp", src: "https://cdn.simpleicons.org/mailchimp/FFE01B" },
    { name: "Flipkart", src: "https://ik.imagekit.io/j0xzq9pns/marketly/logo/flipkart.png?updatedAt=1779005081472" },
    { name: "Google Analytics", src: "https://cdn.simpleicons.org/googleanalytics/E37400" },
    { name: "Jungle Scout", src: "https://ik.imagekit.io/j0xzq9pns/marketly/logo/JUNGLE-SCOUT.webp?updatedAt=1779005081826" },
    { name: "Microsoft", src: "https://ik.imagekit.io/j0xzq9pns/marketly/logo/microsoft-logo.png?updatedAt=1779005081969" },
    { name: "Pinterest", src: "https://cdn.simpleicons.org/pinterest/BD081C" },
  ];

  const serviceColumns = [
    {
      title: "Digital marketing",
      Icon: Search,
      items: ["SEO", "Social media marketing", "Content marketing", "Online reputation", "Brand positioning"],
    },
    {
      title: "Performance marketing",
      Icon: MousePointerClick,
      items: ["Google Ads", "Meta Ads", "Retargeting", "Landing page CRO", "Conversion tracking"],
    },
    {
      title: "Website & commerce",
      Icon: Globe2,
      items: ["Business websites", "E-commerce stores", "CRM integrations", "Mobile app UI", "Analytics dashboards"],
    },
  ];

  const deckCards = [
    {
      Icon: Play,
      title: "KSPL powered by SKSCA 2024",
      text: "A dedicated feature area for campaign videos, partner credibility and launch storytelling.",
      stat: "Video",
    },
    {
      Icon: LayoutDashboard,
      title: "Website systems and launch stories",
      text: "A guided story layer for websites, growth systems, lead magnets and product builds.",
      stat: "05 sites",
    },
    {
      Icon: Smartphone,
      title: "Presentation-style scrolling",
      text: "Horizontal snap cards give the page the clean, deck-like movement the client liked.",
      stat: "Scroll",
    },
  ];

  const ksplVideos = [
    "https://ik.imagekit.io/j0xzq9pns/marketly/WhatsApp%20Video%202026-05-11%20at%207.38.01%20PM.mp4",
    "https://ik.imagekit.io/j0xzq9pns/marketly/WhatsApp%20Video%202026-05-11%20at%207.38.02%20PM.mp4",
    "https://ik.imagekit.io/j0xzq9pns/marketly/WhatsApp%20Video%202026-05-11%20at%207.38.00%20PM.mp4",
    "https://ik.imagekit.io/j0xzq9pns/marketly/WhatsApp%20Video%202026-05-11%20at%207.38.00%20PM%20(1).mp4",
    "https://ik.imagekit.io/j0xzq9pns/marketly/WhatsApp%20Video%202026-05-11%20at%207.37.59%20PM%20(1).mp4",
    "https://ik.imagekit.io/j0xzq9pns/marketly/WhatsApp%20Video%202026-05-11%20at%207.38.01%20PM%20(1).mp4",
    "https://ik.imagekit.io/j0xzq9pns/marketly/WhatsApp%20Video%202026-05-11%20at%207.38.00%20PM%20(2).mp4",
    "https://ik.imagekit.io/j0xzq9pns/marketly/WhatsApp%20Video%202026-05-11%20at%207.38.01%20PM%20(2).mp4",
    "https://ik.imagekit.io/j0xzq9pns/marketly/WhatsApp%20Video%202026-05-11%20at%207.37.59%20PM.mp4",
  ];
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const activeVideo = ksplVideos[activeVideoIndex];
  const featuredVideoRef = useRef(null);

  useEffect(() => {
    if (!featuredVideoRef.current) return;
    featuredVideoRef.current.pause();
    featuredVideoRef.current.load();
    setVideoPlaying(false);
  }, [activeVideoIndex]);

  const toggleFeaturedVideo = async () => {
    const video = featuredVideoRef.current;
    if (!video) return;
    if (video.paused) {
      await video.play();
      setVideoPlaying(true);
    } else {
      video.pause();
      setVideoPlaying(false);
    }
  };

  const toggleFeaturedAudio = () => {
    setVideoMuted((current) => !current);
  };

  return (
    <section className="bg-white border-y border-zinc-200" data-testid="home-growth-proof-deck">
      <div className="py-20 md:py-28 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-zinc-200 rounded-sm overflow-hidden shadow-[0_22px_60px_-40px_rgba(15,18,18,0.35)]"
            >
              <div className="grid lg:grid-cols-12 gap-px bg-zinc-200">
                <div className="lg:col-span-4 bg-white p-7 md:p-9 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D]">Featured campaign videos</div>
                    <h2 className="mt-3 text-3xl md:text-[44px] font-extrabold leading-tight text-[#070812]">
                      KSPL powered by KSSCA 2024
                    </h2>
                    <p className="mt-5 text-zinc-600 leading-relaxed">
                      Marketly featured as the marketing partner for the KSPL campaign powered by KSSCA 2024.
                    </p>
                  </div>
                  <div className="mt-8 grid gap-3">
                    {[
                      { k: "Marketing Partner", v: "Campaign strategy, creative direction and launch communication." },
                      { k: "Powered by KSSCA", v: "A focused 2024 sports campaign with video-led storytelling." },
                      { k: "Campaign Reels", v: "Short-form video assets arranged for quick viewing and selection." },
                    ].map((item) => (
                      <div key={item.k} className="rounded-sm border border-zinc-200 bg-zinc-50 p-4">
                        <div className="text-sm font-extrabold text-[#FF6A3D]">{item.k}</div>
                        <div className="mt-2 text-xs leading-relaxed text-zinc-600">{item.v}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-8 bg-[#070812] text-white p-4 md:p-6 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "18px 18px"}} />
                  <div className="relative">
                    <div className="relative aspect-video overflow-hidden rounded-sm border border-white/10 bg-black shadow-[0_20px_50px_-28px_rgba(0,0,0,0.9)]">
                      <video
                        ref={featuredVideoRef}
                        src={activeVideo}
                        className="h-full w-full object-cover"
                        muted={videoMuted}
                        onEnded={() => setVideoPlaying(false)}
                        onPause={() => setVideoPlaying(false)}
                        onPlay={() => setVideoPlaying(true)}
                        playsInline
                        preload="metadata"
                      />
                      <div className="absolute inset-x-0 top-0 p-4 bg-gradient-to-b from-black/65 to-transparent">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#FF6A3D]" /> Featured video {activeVideoIndex + 1}
                        </div>
                      </div>
                      {!videoPlaying && (
                        <button
                          type="button"
                          onClick={toggleFeaturedVideo}
                          className="absolute inset-0 grid place-items-center bg-black/20 hover:bg-black/10 transition-colors"
                          aria-label="Play featured KSPL video"
                        >
                          <span className="h-16 w-16 rounded-full bg-[#FF6A3D] text-white grid place-items-center shadow-[0_18px_35px_-18px_rgba(0,0,0,0.8)]">
                            <Play className="h-6 w-6 fill-white ml-0.5" />
                          </span>
                        </button>
                      )}
                      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/75 to-transparent">
                        <div className="flex items-center justify-between gap-3">
                          <button
                            type="button"
                            onClick={toggleFeaturedVideo}
                            className="inline-flex items-center gap-2 rounded-full bg-white text-[#070812] px-4 py-2 text-xs font-bold hover:bg-[#F4F8F1] transition-colors"
                          >
                            {videoPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 fill-current" />}
                            {videoPlaying ? "Pause" : "Play"}
                          </button>
                          <button
                            type="button"
                            onClick={toggleFeaturedAudio}
                            className="h-9 w-9 rounded-full border border-white/20 bg-white/10 grid place-items-center text-white backdrop-blur hover:bg-white/20 transition-colors"
                            aria-label={videoMuted ? "Turn sound on" : "Turn sound off"}
                          >
                            {videoMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                      {ksplVideos.map((src, index) => (
                        <button
                          key={src}
                          type="button"
                          onClick={() => setActiveVideoIndex(index)}
                          className={`rounded-sm border p-1 text-left transition-all ${
                            activeVideoIndex === index
                              ? "border-[#FF6A3D] bg-[#FF6A3D]/15"
                              : "border-white/10 bg-white/[0.04] hover:border-white/30"
                          }`}
                        >
                          <div className="relative aspect-video overflow-hidden rounded-sm bg-black">
                            <video
                              src={src}
                              className="h-full w-full object-cover"
                              muted
                              playsInline
                              preload="metadata"
                            />
                            <div className="absolute inset-0 grid place-items-center bg-black/20">
                              <span className="h-8 w-8 rounded-full bg-white/90 text-[#070812] grid place-items-center">
                                <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                              </span>
                            </div>
                          </div>
                          <div className="mt-1.5 text-center text-[10px] font-semibold text-white/60">Video {index + 1}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="bg-white border border-zinc-200 rounded-sm p-6 md:p-10"
            >
              <div className="text-center mb-7">
                <h3 className="text-xl md:text-2xl font-extrabold text-[#070812]">
                  Platforms we connect across campaigns.
                </h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {automationLogos.map((logo) => (
                  <div
                    key={logo.name}
                    className="h-14 w-[150px] md:w-[168px] rounded-sm bg-zinc-50 px-4 flex items-center justify-center hover:bg-white hover:shadow-[0_12px_28px_-24px_rgba(15,18,18,0.45)] transition-all"
                  >
                    <img
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      loading="lazy"
                      className="max-h-10 max-w-[138px] object-contain"
                    />
                    <span className="sr-only">{logo.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid sm:grid-cols-3 gap-4"
            >
              {deckCards.map(({ Icon, title, text, stat }) => (
                <div key={title} className="bg-white border border-zinc-200 rounded-sm p-5 min-h-[220px]">
                  <div className="flex items-center justify-between gap-3">
                    <div className="h-10 w-10 rounded-sm bg-[#FF6A3D]/10 grid place-items-center">
                      <Icon className="h-4 w-4 text-[#FF6A3D]" />
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.14em] font-bold text-[#FF6A3D]">{stat}</div>
                  </div>
                  <h4 className="mt-6 text-lg font-bold leading-tight text-[#070812]">{title}</h4>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-20 bg-white">
        {/* Full-width container (no max-w, no side padding) */}
        <div className="w-full relative overflow-hidden group border-y border-zinc-200 bg-zinc-200">
          
          {/* Wider, smoother fade gradients on the screen edges */}
          <div className="absolute inset-y-0 left-0 w-20 md:w-48 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-48 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

          {/* Sliding Track */}
          <div className="flex w-max gap-px animate-marquee group-hover:[animation-play-state:paused]">
            {/* Tripled the array so it covers ultra-wide monitors without breaking the loop */}
            {[...reviewPlatforms, ...reviewPlatforms, ...reviewPlatforms].map((platform, index) => (
              <div key={`${platform.name}-${index}`} className="bg-white py-6 md:py-7 px-8 text-center w-[180px] md:w-[240px] shrink-0">
                <div className={`font-extrabold text-lg md:text-xl ${platform.tone}`}>{platform.name}</div>
                <div className="mt-2.5 flex justify-center gap-1 text-[#F5A623]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <div className="mt-1.5 text-[11px] font-semibold text-zinc-500 uppercase tracking-wide">
                  {platform.score}/5 · {platform.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Caption placed back in the center */}
        <div className="mt-6 text-center text-sm text-zinc-500 px-5 max-w-xl mx-auto">
          Flexible, priority-driven results with ROI-focused digital marketing services.
        </div>
      </div>

      <div className="py-20 md:py-28 bg-[#070812] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "48px 48px"}} />
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4">Result-driven services</div>
              <h2 className="text-[32px] md:text-[48px] font-extrabold leading-tight">
                Generate qualified leads and drive sales.
              </h2>
              <p className="mt-5 text-white/65 leading-relaxed">
                Full-stack digital marketing services built to improve visibility, capture intent and convert traffic into measurable pipeline.
              </p>
            </div>
            <div className="lg:col-span-7 grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {serviceColumns.map(({ Icon, title, items }) => (
                <div key={title} className="bg-[#0A0D14] p-7">
                  <div className="h-11 w-11 rounded-sm bg-white/5 border border-white/10 grid place-items-center mb-6">
                    <Icon className="h-5 w-5 text-[#FF6A3D]" />
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
                  <ul className="mt-5 space-y-3">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/65">
                        <CheckCircle2 className="h-4 w-4 text-[#FF6A3D] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex gap-4 min-w-max">
              {deckCards.map(({ Icon, title, text, stat }) => (
                <div key={title} className="snap-start w-[78vw] sm:w-[420px] rounded-sm border border-white/10 bg-white/[0.035] p-6">
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-[#FF6A3D]" />
                    <span className="text-[10px] uppercase tracking-[0.16em] font-bold text-white/40">{stat}</span>
                  </div>
                  <h3 className="mt-8 text-2xl font-extrabold leading-tight">{title}</h3>
                  <p className="mt-4 text-sm text-white/60 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
/* ========================= AUDIT CTA (DARK) ========================= */
function AuditCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#070812] text-white relative overflow-hidden" data-testid="home-audit">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px"}} />
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" /> Free audit
            </div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold leading-[1.05] tracking-[-0.02em]">
              See how your site stacks up — in 60 seconds.
            </h2>
            <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">
              A real technical + SEO audit across 20 signals — meta tags, schema, Core Web Vitals, crawl structure. PDF report lands in your inbox.
            </p>
            <div className="mt-8 space-y-2.5">
              {["No credit card required", "Takes ~5 seconds", "Full PDF report by email"].map((b) => (
                <div key={b} className="flex items-center gap-2.5 text-sm text-white/60">
                  <CheckCircle2 className="h-4 w-4 text-[#FF6A3D]" />
                  {b}
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-7">
            <AuditTool />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================= WHY US (LIGHT) ========================= */
function WhyUs() {
  const points = [
    { n: "01", t: "One team, not three agencies", d: "Paid + SEO + creative + offline — under one roof. Zero Frankenstein handoffs. One invoice." },
    { n: "02", t: "Numbers you can verify", d: "Live dashboards, honest reporting. When something doesn't work, we tell you first." },
    { n: "03", t: "You own everything", d: "Your ad accounts, your content, your data. Always. We operate inside your systems." },
    { n: "04", t: "30-day notice, always", d: "No contract lock-ins. We earn the retainer every month. That's the only contract we care about." },
  ];
  return (
    <section className="py-20 md:py-28 bg-white" data-testid="home-why">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="max-w-3xl mb-14">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4">Why Marketly</div>
          <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#070812]">
            Clients stay, because the boring stuff gets done.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 md:p-7 bg-white border border-zinc-200 rounded-sm hover:border-[#FF6A3D] transition-colors"
            >
              <div className="text-sm font-mono font-semibold text-[#FF6A3D]">{p.n}</div>
              <h3 className="mt-5 text-lg font-bold text-[#070812] leading-tight">{p.t}</h3>
              <p className="mt-2.5 text-[15px] text-zinc-600 leading-relaxed">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= LATEST BLOG (DARK) ========================= */
function LatestBlog() {
  const latest = BLOG_POSTS.slice(0, 3);
  return (
    <section className="py-20 md:py-28 bg-[#070812]" data-testid="home-blog">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div className="max-w-2xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4">From the team</div>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
              Playbooks we actually run.
            </h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6A3D]">
            All articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {latest.map((b, i) => (
            <motion.div
              key={b.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={`/blog/${b.slug}`}
                className="group block bg-white/5 rounded-sm overflow-hidden border border-white/10 hover:border-[#FF6A3D] hover:shadow-[0_12px_32px_-16px_rgba(255,106,61,0.2)] transition-all duration-300 h-full"
                data-testid={`blog-${b.slug}`}
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#0A0D14]">
                  <img src={b.cover} alt={b.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#FF6A3D]">
                    {b.category} · {b.readTime}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-white leading-snug line-clamp-2">{b.title}</h3>
                  <p className="mt-2 text-sm text-white/70 line-clamp-2">{b.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= TESTIMONIAL STRIP (LIGHT) ========================= */
function TestimonialStrip() {
  return (
    <section className="py-20 md:py-28 bg-zinc-50" data-testid="home-testimonials">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6A3D] mb-4">Words from the room</div>
          <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#070812]">
            What our clients say.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {TESTIMONIALS.slice(0, 2).map((t) => (
            <div key={t.name} className="p-8 md:p-10 bg-white rounded-sm border border-zinc-200">
              <div className="flex items-center gap-1 mb-5 text-[#FF6A3D]">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="text-lg md:text-[19px] text-[#070812] leading-snug font-medium">
                "{t.quote}"
              </blockquote>
              <div className="mt-6 pt-6 border-t border-zinc-200 flex items-center gap-4">
                <div className="h-11 w-11 rounded-full bg-[#070812] text-white font-bold grid place-items-center">{t.initial}</div>
                <div>
                  <div className="font-bold text-[#070812]">{t.name}</div>
                  <div className="text-sm text-zinc-500">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= FINAL CTA (DARK) ========================= */
function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#070812] text-white relative overflow-hidden" data-testid="home-final-cta">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20" style={{backgroundImage: "radial-gradient(circle at top right, #FF6A3D 0%, transparent 60%)"}} />
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative">
        <div className="max-w-3xl">
          <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em]">
            Tell us where you want to go. We'll map the route.
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-xl leading-relaxed">
            Free 30-minute strategy call. We'll audit your current setup, tell you the 2–3 levers that will move fastest, and you decide if we're the right fit.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild data-testid="final-cta-btn" className="rounded-sm bg-[#FF6A3D] hover:bg-[#E85C31] text-white h-12 px-6 font-semibold">
              <Link to="/contact">Book a strategy call <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-sm border-white/30 bg-transparent text-white hover:bg-white/10 h-12 px-6 font-semibold">
              <Link to="/work">See our work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}