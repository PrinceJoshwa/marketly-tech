// // import { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { motion } from "motion/react";
// // import {
// //   ArrowRight,
// //   BarChart3,
// //   CheckCircle2,
// //   ClipboardCheck,
// //   Code,
// //   Compass,
// //   FileText,
// //   Link2,
// //   MapPin,
// //   MessageCircleQuestion,
// //   Search,
// //   Send,
// // } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import PublicLayout from "@/components/layout/PublicLayout";
// // import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// // import { toast } from "sonner";
// // import { publicContact } from "@/lib/publicApi";

// // const HERO_IMAGE = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900";

// // const SEO_SERVICES = [
// //   {
// //     Icon: Search,
// //     title: "Search Engine Optimization",
// //     bullets: [
// //       "Increase your website's visibility in search engine results pages (SERPs).",
// //       "Drive organic traffic to your website and improve your brand's online presence.",
// //       "In-depth keyword research, website content optimization, and high-quality backlinks to boost rankings.",
// //     ],
// //   },
// //   {
// //     Icon: FileText,
// //     title: "Content Optimization",
// //     bullets: [
// //       "Create high-quality, engaging content that resonates with your target audience.",
// //       "Optimize content for search engines and social media platforms.",
// //       "Develop a content strategy aligned with your business goals.",
// //     ],
// //   },
// //   {
// //     Icon: Code,
// //     title: "On-page Optimization",
// //     bullets: [
// //       "Enhance technical SEO to improve crawlability and indexability.",
// //       "Optimize title tags, meta descriptions, image alt text, headings, and internal links.",
// //       "Improve website speed and user experience for better search engine rankings.",
// //     ],
// //   },
// //   {
// //     Icon: Compass,
// //     title: "SEO Consulting",
// //     bullets: [
// //       "Get expert advice on SEO strategy and implementation.",
// //       "Run in-depth website audits with clear, actionable recommendations.",
// //       "Receive ongoing support and guidance to achieve SEO goals.",
// //     ],
// //   },
// //   {
// //     Icon: BarChart3,
// //     title: "Data Analysis",
// //     bullets: [
// //       "Track and analyze key metrics to measure SEO campaign effectiveness.",
// //       "Identify improvement areas and optimize the strategy accordingly.",
// //       "Gain insights into your target audience and their online behavior.",
// //     ],
// //   },
// //   {
// //     Icon: ClipboardCheck,
// //     title: "SEO Strategy",
// //     bullets: [
// //       "Develop a customized SEO strategy tailored to your business needs and goals.",
// //       "Set realistic and measurable targets for SEO campaigns.",
// //       "Monitor and adjust your strategy based on performance data.",
// //     ],
// //   },
// // ];

// // const SPECIALIZED_SERVICES = [
// //   {
// //     Icon: Link2,
// //     title: "Backlink Building",
// //     text: "Marketly's backlink building services focus on acquiring high-quality, relevant backlinks from reputable websites within your industry. We employ ethical, white-hat techniques to improve domain authority and search engine rankings.",
// //   },
// //   {
// //     Icon: MapPin,
// //     title: "Local Citation",
// //     text: "Marketly helps you establish a strong local online presence through accurate listings on Google Business Profile, Yelp, Bing, and other directories so potential customers in your area can find you easily.",
// //   },
// // ];

// // const HERO_STATS = [
// //   { k: "50+", v: "Satisfied clients" },
// //   { k: "80%", v: "Increased traffic" },
// //   { k: "34%", v: "Avg. conversion" },
// // ];

// // const IMPACT_STATS = [
// //   { k: "106", v: "Satisfied Clients" },
// //   { k: "120%", v: "Increased Traffic" },
// //   { k: "200%", v: "Increased engagement" },
// // ];

// // const SEO_REASONS = [
// //   {
// //     title: "You aren't targeting the right keywords.",
// //     text: "Take a look at the latest search trends in your industry every so often so you don't miss out on valuable search traffic.",
// //   },
// //   {
// //     title: "Search engines may have difficulty crawling your website",
// //     text: "A sitemap is essential for SEO. Sitemaps help search engine bots better crawl your site and reduce the risk of overlooking parts of it.",
// //   },
// //   {
// //     title: "You're Wasting Page Rank Opportunities",
// //     text: "Internal links help site visitors navigate efficiently and pass page rank along to valuable pages like product or service pages.",
// //   },
// //   {
// //     title: "Rankings disappeared after a website redesign.",
// //     text: "Have you recently relaunched your website? Create a 301 redirect plan so you do not lose traffic and value from old pages.",
// //   },
// //   {
// //     title: "The Site Is Slow and Doesn't Rank",
// //     text: "Visitors leave slow sites. Search engines do not like slow loading sites either, which makes speed a ranking factor.",
// //   },
// // ];

// // const RANKING_PROOFS = [
// //   "Ranking on top for non-branded keyword",
// //   "GMB local listing on top 4 position for a non-branded keyword",
// //   "3rd position for local non-branded keyword",
// //   "Ranking on top for non-branded keyword",
// // ];

// // const ORBIT_LABELS = [
// //   "Keyword research",
// //   "SEO audit",
// //   "Backlinks",
// //   "Technical SEO",
// //   "Local citation",
// //   "Content plan",
// //   "SERP growth",
// //   "Analytics",
// // ];

// // const FAQS = [
// //   {
// //     q: "What is an SEO expert?",
// //     a: "Search Engine Optimization (SEO) is the process of improving your website's visibility in search engine results pages like Google, Bing, and Yahoo. When people search for products or services related to your business, SEO helps ensure your website appears higher in the search results.",
// //   },
// //   {
// //     q: "What are some common SEO techniques?",
// //     a: "Common SEO techniques include keyword research, on-page optimization, off-page optimization, technical SEO, content marketing, backlinks, and local citation management.",
// //   },
// //   {
// //     q: "How long does it take to see results from SEO?",
// //     a: "SEO takes time. While results may vary, consistent effort can lead to significant improvements in search rankings over several months.",
// //   },
// //   {
// //     q: "How can I measure the success of my SEO efforts?",
// //     a: "Track key metrics like website traffic, keyword rankings, lead generation, engagement, local visibility, and conversion rates.",
// //   },
// //   {
// //     q: "What is the role of backlinks in SEO?",
// //     a: "Backlinks are links from other websites to your website. Search engines view backlinks as votes of confidence, and high-quality backlinks from reputable websites can significantly improve rankings.",
// //   },
// // ];

// // export default function SeoServices() {
// //   return (
// //     <PublicLayout>
// //       <SeoHero />
// //       <ImpactStats />
// //       <SeoServiceGrid />
// //       <SeoReasonsProof />
// //       <SpecializedSeo />
// //       <BetterTogetherShowcase />
// //       <TogetherBlock />
// //       {/* <ExpandedAnswers /> */}
// //       <SeoFaq />
// //       <SeoContactStrip />
// //     </PublicLayout>
// //   );
// // }

// // function SeoHero() {
// //   return (
// //     <section className="relative overflow-hidden bg-white pt-14 pb-16 md:pt-20 md:pb-24" data-testid="seo-hero">
// //       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_44%,rgba(200,122,80,0.11),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(19,78,53,0.09),transparent_28%)]" />
// //       <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative">
// //         <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
// //           <div className="lg:col-span-6">
// //             <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-5">SEO service Marketly</div>
// //             <h1 className="text-[42px] sm:text-[54px] lg:text-[68px] font-extrabold leading-[1.03] text-[#0F1212]">
// //               Your Business <span className="text-[#134E35]">SEO Solution</span>
// //             </h1>
// //             <p className="mt-6 text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl">
// //               Rank your business on top with ease. Marketly powers growth from start-up to scale-up through technical SEO, content optimization, backlink building, local citation, and clear data analysis.
// //             </p>

// //             <div className="mt-8 grid sm:grid-cols-3 gap-4">
// //               {HERO_STATS.map((s) => (
// //                 <div key={s.v} className="bg-[#134E35] text-white border-2 border-[#C87A50] rounded-sm p-5 shadow-[0_12px_24px_-18px_rgba(15,18,18,0.4)]">
// //                   <div className="text-3xl font-extrabold leading-none">{s.k}</div>
// //                   <div className="mt-2 text-sm text-white/85">{s.v}</div>
// //                 </div>
// //               ))}
// //             </div>

// //             <div className="mt-9 flex flex-wrap items-center gap-3">
// //               <a href="#seo-score-form" className="inline-flex items-center justify-center h-14 px-8 bg-[#C87A50] hover:bg-[#B16840] text-white rounded-full text-sm font-bold transition-colors">
// //                 Test your SEO score <ArrowRight className="ml-2 h-4 w-4" />
// //               </a>
// //               <Link to="/contact" className="inline-flex items-center justify-center h-14 px-6 border border-zinc-300 hover:border-[#134E35] rounded-full text-sm font-bold text-[#0F1212] transition-colors">
// //                 Ask a question
// //               </Link>
// //             </div>
// //           </div>

// //           <div className="lg:col-span-6">
// //             <HeroOrbit />
// //           </div>
// //         </div>

// //         <div className="mt-14" id="seo-score-form">
// //           <SeoScoreForm />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function HeroOrbit() {
// //   return (
// //     <div className="relative h-[520px] md:h-[620px]" aria-hidden="true">
// //       <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#134E35]/10" />
// //       <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C87A50]/16" />
// //       <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-100 border-[8px] border-white shadow-[0_24px_70px_-34px_rgba(15,18,18,0.45)] overflow-hidden">
// //         <img src={HERO_IMAGE} alt="" className="h-full w-full object-cover" />
// //       </div>
// //       {ORBIT_LABELS.map((label, i) => {
// //         const positions = [
// //           "left-[43%] top-[6%]",
// //           "right-[8%] top-[22%]",
// //           "right-[3%] top-[47%]",
// //           "right-[15%] bottom-[15%]",
// //           "left-[40%] bottom-[5%]",
// //           "left-[7%] bottom-[18%]",
// //           "left-[1%] top-[47%]",
// //           "left-[15%] top-[24%]",
// //         ];
// //         return (
// //           <motion.div
// //             key={label}
// //             initial={{ opacity: 0, scale: 0.92 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.45, delay: i * 0.06 }}
// //             className={`absolute ${positions[i]} rounded-sm bg-white px-3 py-2 text-xs md:text-sm text-[#0F1212] shadow-[0_10px_28px_-18px_rgba(15,18,18,0.45)] border border-zinc-100 whitespace-nowrap`}
// //           >
// //             {label}
// //           </motion.div>
// //         );
// //       })}
// //       <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-[spin_18s_linear_infinite]">
// //         <div className="absolute right-[2%] top-[41%] h-10 w-10 rounded-full bg-[#C87A50] text-white text-xs font-bold grid place-items-center shadow-[0_10px_24px_-14px_rgba(15,18,18,0.5)]">SEO</div>
// //         <div className="absolute left-[2%] top-[55%] h-10 w-10 rounded-full bg-[#134E35] text-white text-xs font-bold grid place-items-center shadow-[0_10px_24px_-14px_rgba(15,18,18,0.5)]">UX</div>
// //       </div>
// //       <div className="absolute left-[22%] top-[34%] h-4 w-4 rounded-full bg-[#C87A50]/30" />
// //       <div className="absolute right-[27%] bottom-[24%] h-5 w-5 rounded-full bg-[#C87A50]/25" />
// //     </div>
// //   );
// // }

// // function SeoScoreForm() {
// //   const [f, setF] = useState({ name: "", email: "", phone: "", website: "" });
// //   const [busy, setBusy] = useState(false);
// //   const [sent, setSent] = useState(false);

// //   const submit = async (event) => {
// //     event.preventDefault();
// //     if (!f.name.trim() || !f.email.trim() || !f.phone.trim() || !f.website.trim()) {
// //       return toast.error("Name, email, phone number, and website are required");
// //     }
// //     setBusy(true);
// //     try {
// //       await publicContact({
// //         name: f.name,
// //         email: f.email,
// //         phone: f.phone,
// //         website: f.website,
// //         service_interest: "SEO score",
// //         subject: "Test Your Website's SEO Score For Free",
// //         message: `SEO score request for website: ${f.website}`,
// //         _replyto: f.email,
// //       });
// //       setSent(true);
// //       toast.success("Thanks. Your SEO score request has been sent.");
// //     } catch (e) {
// //       toast.error(e?.message || "Could not send. Check Formspree setup.");
// //     } finally {
// //       setBusy(false);
// //     }
// //   };

// //   return (
// //     <div className="bg-[#0F1212] text-white rounded-sm border border-zinc-800 p-6 md:p-8 shadow-[0_20px_60px_-32px_rgba(15,18,18,0.5)]" data-testid="seo-score-form">
// //       <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
// //         <div className="lg:col-span-5">
// //           <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-3">Free audit</div>
// //           <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">Test Your Website's SEO Score For Free!</h2>
// //           <p className="mt-3 text-sm text-white/65 leading-relaxed">
// //             Submit your website and our team will review the main SEO signals behind crawlability, rankings, content, backlinks, and local visibility.
// //           </p>
// //         </div>

// //         <div className="lg:col-span-7">
// //           {sent ? (
// //             <div className="rounded-sm border border-[#C87A50]/40 bg-[#C87A50]/10 p-6">
// //               <CheckCircle2 className="h-8 w-8 text-[#C87A50]" />
// //               <div className="mt-4 text-xl font-bold">Request received.</div>
// //               <p className="mt-1 text-sm text-white/75">We will review <b>{f.website}</b> and reply to <b>{f.email}</b>.</p>
// //             </div>
// //           ) : (
// //             <form onSubmit={submit} className="grid sm:grid-cols-2 gap-3">
// //               <Input placeholder="Your Name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} className="rounded-sm bg-white border-white text-[#0F1212] h-12" data-testid="seo-form-name" />
// //               <Input placeholder="Email Address" type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} className="rounded-sm bg-white border-white text-[#0F1212] h-12" data-testid="seo-form-email" />
// //               <Input placeholder="Phone number" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} className="rounded-sm bg-white border-white text-[#0F1212] h-12" data-testid="seo-form-phone" />
// //               <Input placeholder="Website" value={f.website} onChange={(e) => setF({ ...f, website: e.target.value })} className="rounded-sm bg-white border-white text-[#0F1212] h-12" data-testid="seo-form-website" />
// //               <Button type="submit" disabled={busy} data-testid="seo-form-submit" className="sm:col-span-2 rounded-sm bg-[#C87A50] hover:bg-[#B16840] text-white h-12 text-sm font-semibold">
// //                 {busy ? "Submitting..." : "Submit"} <Send className="ml-2 h-4 w-4" />
// //               </Button>
// //             </form>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // function ImpactStats() {
// //   return (
// //     <section className="bg-zinc-50 py-16 md:py-20 border-y border-zinc-200" data-testid="seo-impact-stats">
// //       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// //         <div className="grid md:grid-cols-3 gap-5">
// //           {IMPACT_STATS.map((s) => (
// //             <div key={s.v} className="bg-white border border-zinc-200 rounded-sm p-6 md:p-8">
// //               <div className="text-[44px] md:text-[56px] font-extrabold leading-none text-[#134E35]">{s.k}</div>
// //               <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C87A50]">{s.v}</div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function SeoServiceGrid() {
// //   return (
// //     <section className="py-20 md:py-28 bg-white" data-testid="seo-pillars">
// //       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// //         <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
// //           <div className="md:col-span-7">
// //             <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Our SEO Services</div>
// //             <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] text-[#0F1212]">
// //               From Start-up to Scale-up. Marketly.tech Powers Growth.
// //             </h2>
// //           </div>
// //           <p className="md:col-span-5 text-base md:text-lg text-zinc-600 leading-relaxed">
// //             Every SEO program needs the basics done with discipline: technical foundations, content, measurement, backlinks, and local presence. We bring those pieces together into one clean roadmap.
// //           </p>
// //         </div>

// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
// //           {SEO_SERVICES.map((p, i) => (
// //             <motion.div
// //               key={p.title}
// //               initial={{ opacity: 0, y: 16 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true, margin: "-60px" }}
// //               transition={{ duration: 0.45, delay: i * 0.05 }}
// //               className="p-6 md:p-7 bg-white border border-zinc-200 rounded-sm hover:border-[#134E35] hover:shadow-[0_12px_32px_-20px_rgba(19,78,53,0.25)] transition-all duration-300 h-full"
// //             >
// //               <div className="h-11 w-11 rounded-sm bg-[#134E35]/10 grid place-items-center mb-5">
// //                 <p.Icon className="h-5 w-5 text-[#134E35]" strokeWidth={1.75} />
// //               </div>
// //               <h3 className="text-lg font-bold text-[#0F1212] leading-tight">{p.title}</h3>
// //               <ul className="mt-3 space-y-2.5">
// //                 {p.bullets.map((b) => (
// //                   <li key={b} className="flex items-start gap-2 text-[13px] text-zinc-600 leading-relaxed">
// //                     <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#134E35] mt-0.5" />
// //                     <span>{b}</span>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function SeoReasonsProof() {
// //   return (
// //     <section className="py-20 md:py-28 bg-zinc-50" data-testid="seo-reasons-proof">
// //       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// //         <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
// //           <div className="lg:col-span-5">
// //             <div className="lg:sticky lg:top-24">
// //               <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Why SEO matters</div>
// //               <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] text-[#0F1212]">
// //                 Five ranking leaks worth fixing first.
// //               </h2>
// //               <p className="mt-5 text-base md:text-lg text-zinc-600 leading-relaxed">
// //                 The original page called out the common SEO blockers. Here they are translated into a sharper audit checklist your team can actually act on.
// //               </p>
// //             </div>
// //           </div>

// //           <div className="lg:col-span-7">
// //             <div className="grid sm:grid-cols-2 gap-5">
// //               {SEO_REASONS.map((reason, i) => (
// //                 <div key={reason.title} className={`${i === 4 ? "sm:col-span-2" : ""} bg-white border border-zinc-200 rounded-sm p-6 md:p-7 hover:border-[#134E35] transition-colors`}>
// //                   <div className="text-sm font-mono font-semibold text-[#134E35]">0{i + 1}</div>
// //                   <h3 className="text-lg font-extrabold text-[#0F1212] leading-tight">{reason.title}</h3>
// //                   <p className="mt-4 text-sm text-zinc-600 leading-relaxed">{reason.text}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         <div className="mt-16 md:mt-20">
// //           <div className="grid md:grid-cols-12 gap-8 mb-10 items-end">
// //             <div className="md:col-span-7">
// //               <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Ranking proof</div>
// //               <h2 className="text-[30px] md:text-[42px] font-extrabold leading-tight text-[#0F1212]">
// //                 Search visibility, presented like a performance dashboard.
// //               </h2>
// //             </div>
// //             <p className="md:col-span-5 text-zinc-600 leading-relaxed">
// //               Instead of pasting raw screenshots into the UI, these proof cards summarize the same outcomes in a clean, scannable format.
// //             </p>
// //           </div>

// //           <div className="grid md:grid-cols-2 gap-5">
// //             {RANKING_PROOFS.map((proof, i) => (
// //               <div key={`${proof}-${i}`} className="bg-white border border-zinc-200 rounded-sm p-6 md:p-7">
// //                 <div className="flex items-start justify-between gap-4">
// //                   <div className="h-10 w-10 rounded-sm bg-[#134E35]/10 grid place-items-center shrink-0">
// //                     <Search className="h-5 w-5 text-[#134E35]" />
// //                   </div>
// //                   <div className="text-sm font-mono font-semibold text-zinc-400">0{i + 1}</div>
// //                 </div>
// //                 <h3 className="mt-6 text-xl font-extrabold text-[#0F1212] leading-tight">{proof}</h3>
// //                 <div className="mt-5 rounded-sm border border-zinc-200 bg-zinc-50 p-4">
// //                   <div className="h-2.5 w-2/3 bg-[#134E35]/30 rounded-full" />
// //                   <div className="mt-3 grid grid-cols-3 gap-2">
// //                     <div className="h-16 rounded-sm bg-white border border-zinc-100" />
// //                     <div className="h-16 rounded-sm bg-white border border-zinc-100" />
// //                     <div className="h-16 rounded-sm bg-white border border-zinc-100" />
// //                   </div>
// //                 </div>
// //                 <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C87A50]">Non-branded search growth</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function SpecializedSeo() {
// //   return (
// //     <section className="py-20 md:py-24 bg-zinc-50" data-testid="seo-specialized">
// //       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// //         <div className="grid md:grid-cols-2 gap-6">
// //           {SPECIALIZED_SERVICES.map(({ Icon, title, text }) => (
// //             <div key={title} className="bg-white border border-zinc-200 rounded-sm p-8 md:p-10">
// //               <div className="h-12 w-12 rounded-sm bg-[#C87A50]/10 grid place-items-center">
// //                 <Icon className="h-6 w-6 text-[#C87A50]" />
// //               </div>
// //               <h2 className="mt-6 text-2xl md:text-3xl font-extrabold text-[#0F1212]">{title}</h2>
// //               <p className="mt-4 text-zinc-600 leading-relaxed">{text}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function BetterTogetherShowcase() {
// //   return (
// //     <section className="py-20 md:py-28 bg-white" data-testid="seo-better-together-showcase">
// //       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
// //         <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
// //           <div className="lg:col-span-5">
// //             <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Better together</div>
// //             <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] font-extrabold leading-tight text-[#0F1212]">
// //               Let's Do Something Better Together!
// //             </h2>
// //             <p className="mt-5 text-zinc-600 leading-relaxed">
// //               SEO works best when strategy, content, technical fixes, and measurement move together. This section keeps the original message, but fits Marketly's cleaner page system.
// //             </p>
// //             <div className="mt-10 grid grid-cols-2 gap-4">
// //               {[
// //                 { k: "106", v: "Satisfied Clients" },
// //                 { k: "87%", v: "Avg. Conversion" },
// //               ].map((s) => (
// //                 <div key={s.v} className="border-l-2 border-[#134E35] pl-4">
// //                   <div className="text-4xl md:text-5xl font-extrabold leading-none text-[#134E35]">{s.k}</div>
// //                   <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">{s.v}</div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //           <div className="lg:col-span-7">
// //             <div className="relative rounded-sm overflow-hidden border border-zinc-200 aspect-[16/10]">
// //               <img
// //                 src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400"
// //                 alt="SEO team working on search performance"
// //                 className="absolute inset-0 h-full w-full object-cover"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function TogetherBlock() {
// //   return (
// //     <section className="py-20 md:py-28 bg-[#134E35] text-white" data-testid="seo-together">
// //       <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-10 items-center">
// //         <div className="lg:col-span-7">
// //           <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Let's Do Something Better Together!</div>
// //           <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05]">
// //             SEO that keeps working after every ad campaign stops.
// //           </h2>
// //           <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-2xl">
// //             Whether you need a one-time audit or a full SEO growth retainer, we help you build visibility that compounds with content, technical fixes, local presence, and measurable reporting.
// //           </p>
// //         </div>
// //         <div className="lg:col-span-5 grid grid-cols-2 gap-4">
// //           {[
// //             { k: "50+", v: "Satisfied Clients" },
// //             { k: "34%", v: "Avg. Conversion" },
// //             { k: "80%", v: "Traffic Growth" },
// //             { k: "12 yrs", v: "In Business" },
// //           ].map((s) => (
// //             <div key={s.v} className="bg-white/8 border border-white/15 rounded-sm p-5">
// //               <div className="text-3xl font-extrabold text-[#C87A50]">{s.k}</div>
// //               <div className="mt-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/65">{s.v}</div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function ExpandedAnswers() {
// //   return (
// //     <section className="py-20 md:py-28 bg-[#0F1212] text-white" data-testid="seo-expanded-answers">
// //       <div className="max-w-[1300px] mx-auto px-5 md:px-10">
// //         <div className="text-center max-w-3xl mx-auto">
// //           <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Answers to your questions</div>
// //           <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold">SEO questions, answered without the fluff.</h2>
// //         </div>
// //         <div className="mt-14 grid md:grid-cols-2 gap-5">
// //           {FAQS.map((f) => (
// //             <div key={f.q} className="bg-white/5 border border-white/10 rounded-sm p-6 md:p-7">
// //               <h3 className="text-xl md:text-2xl font-extrabold leading-tight">{f.q}</h3>
// //               <p className="mt-4 text-[15px] text-white/65 leading-relaxed">{f.a}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function SeoFaq() {
// //   return (
// //     <section className="py-20 md:py-28 bg-white" data-testid="seo-faq">
// //       <div className="max-w-[900px] mx-auto px-5 md:px-10">
// //         <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Answers to Your Questions</div>
// //         <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-[#0F1212]">SEO, explained.</h2>
// //         <Accordion type="single" collapsible className="mt-10">
// //           {FAQS.map((f, i) => (
// //             <AccordionItem key={f.q} value={`f-${i}`} className="border-zinc-200">
// //               <AccordionTrigger className="text-left font-bold text-base md:text-lg hover:no-underline hover:text-[#134E35] py-5">
// //                 {f.q}
// //               </AccordionTrigger>
// //               <AccordionContent className="text-zinc-600 leading-relaxed pb-5 text-[15px]">{f.a}</AccordionContent>
// //             </AccordionItem>
// //           ))}
// //         </Accordion>
// //       </div>
// //     </section>
// //   );
// // }

// // function SeoContactStrip() {
// //   return (
// //     <section className="py-16 md:py-20 bg-zinc-50" data-testid="seo-contact-strip">
// //       <div className="max-w-[1100px] mx-auto px-5 md:px-10">
// //         <div className="grid md:grid-cols-12 gap-8 items-center bg-white border border-zinc-200 rounded-sm p-8 md:p-10">
// //           <div className="md:col-span-7">
// //             <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">
// //               <MessageCircleQuestion className="h-4 w-4" /> Ask a Question
// //             </div>
// //             <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F1212]">Need help choosing the right SEO plan?</h2>
// //             <p className="mt-3 text-zinc-600 leading-relaxed">
// //               Location: Sarjapur road, Bangalore 35. Call +91 96063 34692 or email ramya@marketly.tech.
// //             </p>
// //           </div>
// //           <div className="md:col-span-5 md:text-right">
// //             <Button asChild className="rounded-sm bg-[#0F1212] hover:bg-[#134E35] text-white h-12 px-6 font-semibold">
// //               <Link to="/contact">Contact Marketly <ArrowRight className="ml-2 h-4 w-4" /></Link>
// //             </Button>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { motion, useInView } from "framer-motion";
// import {
//   ArrowRight,
//   BarChart3,
//   CheckCircle2,
//   ClipboardCheck,
//   Code,
//   Compass,
//   FileText,
//   Link2,
//   MapPin,
//   MessageCircleQuestion,
//   Search,
//   Send,
//   Map,
//   Globe
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import PublicLayout from "@/components/layout/PublicLayout";
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// import { toast } from "sonner";
// import { publicContact } from "@/lib/publicApi";

// const HERO_IMAGE = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900";

// const SEO_SERVICES = [
//   {
//     Icon: Search,
//     title: "Search Engine Optimization",
//     bullets: [
//       "Increase your website's visibility in search engine results pages (SERPs).",
//       "Drive organic traffic to your website and improve your brand's online presence.",
//       "In-depth keyword research, website content optimization, and high-quality backlinks to boost rankings.",
//     ],
//   },
//   {
//     Icon: FileText,
//     title: "Content Optimization",
//     bullets: [
//       "Create high-quality, engaging content that resonates with your target audience.",
//       "Optimize content for search engines and social media platforms.",
//       "Develop a content strategy aligned with your business goals.",
//     ],
//   },
//   {
//     Icon: Code,
//     title: "On-page Optimization",
//     bullets: [
//       "Enhance technical SEO to improve crawlability and indexability.",
//       "Optimize title tags, meta descriptions, image alt text, headings, and internal links.",
//       "Improve website speed and user experience for better search engine rankings.",
//     ],
//   },
//   {
//     Icon: Compass,
//     title: "SEO Consulting",
//     bullets: [
//       "Get expert advice on SEO strategy and implementation.",
//       "Run in-depth website audits with clear, actionable recommendations.",
//       "Receive ongoing support and guidance to achieve SEO goals.",
//     ],
//   },
//   {
//     Icon: BarChart3,
//     title: "Data Analysis",
//     bullets: [
//       "Track and analyze key metrics to measure SEO campaign effectiveness.",
//       "Identify improvement areas and optimize the strategy accordingly.",
//       "Gain insights into your target audience and their online behavior.",
//     ],
//   },
//   {
//     Icon: ClipboardCheck,
//     title: "SEO Strategy",
//     bullets: [
//       "Develop a customized SEO strategy tailored to your business needs and goals.",
//       "Set realistic and measurable targets for SEO campaigns.",
//       "Monitor and adjust your strategy based on performance data.",
//     ],
//   },
// ];

// const SPECIALIZED_SERVICES = [
//   {
//     Icon: Link2,
//     title: "Backlink Building",
//     text: "Marketly's backlink building services focus on acquiring high-quality, relevant backlinks from reputable websites within your industry. We employ ethical, white-hat techniques to improve domain authority and search engine rankings.",
//   },
//   {
//     Icon: MapPin,
//     title: "Local Citation",
//     text: "Marketly helps you establish a strong local online presence through accurate listings on Google Business Profile, Yelp, Bing, and other directories so potential customers in your area can find you easily.",
//   },
// ];

// const HERO_STATS = [
//   { k: "50+", v: "Satisfied clients" },
//   { k: "80%", v: "Increased traffic" },
//   { k: "34%", v: "Avg. conversion" },
// ];

// const IMPACT_STATS = [
//   { k: "106", v: "Satisfied Clients" },
//   { k: "120%", v: "Increased Traffic" },
//   { k: "200%", v: "Increased engagement" },
// ];

// const SEO_REASONS = [
//   {
//     title: "You aren't targeting the right keywords.",
//     text: "Take a look at the latest search trends in your industry every so often so you don't miss out on valuable search traffic.",
//   },
//   {
//     title: "Search engines may have difficulty crawling your website",
//     text: "A sitemap is essential for SEO. Sitemaps help search engine bots better crawl your site and reduce the risk of overlooking parts of it.",
//   },
//   {
//     title: "You're Wasting Page Rank Opportunities",
//     text: "Internal links help site visitors navigate efficiently and pass page rank along to valuable pages like product or service pages.",
//   },
//   {
//     title: "Rankings disappeared after a website redesign.",
//     text: "Have you recently relaunched your website? Create a 301 redirect plan so you do not lose traffic and value from old pages.",
//   },
//   {
//     title: "The Site Is Slow and Doesn't Rank",
//     text: "Visitors leave slow sites. Search engines do not like slow loading sites either, which makes speed a ranking factor.",
//   },
// ];

// const RANKING_PROOFS = [
//   "Ranking on top for non-branded keyword",
//   "GMB local listing on top 4 position for a non-branded keyword",
//   "3rd position for local non-branded keyword",
//   "Ranking on top for non-branded keyword",
// ];

// const ORBIT_LABELS = [
//   "Keyword research",
//   "SEO audit",
//   "Backlinks",
//   "Technical SEO",
//   "Local citation",
//   "Content plan",
//   "SERP growth",
//   "Analytics",
// ];

// const FAQS = [
//   {
//     q: "What is an SEO expert?",
//     a: "Search Engine Optimization (SEO) is the process of improving your website's visibility in search engine results pages like Google, Bing, and Yahoo. When people search for products or services related to your business, SEO helps ensure your website appears higher in the search results.",
//   },
//   {
//     q: "What are some common SEO techniques?",
//     a: "Common SEO techniques include keyword research, on-page optimization, off-page optimization, technical SEO, content marketing, backlinks, and local citation management.",
//   },
//   {
//     q: "How long does it take to see results from SEO?",
//     a: "SEO takes time. While results may vary, consistent effort can lead to significant improvements in search rankings over several months.",
//   },
//   {
//     q: "How can I measure the success of my SEO efforts?",
//     a: "Track key metrics like website traffic, keyword rankings, lead generation, engagement, local visibility, and conversion rates.",
//   },
//   {
//     q: "What is the role of backlinks in SEO?",
//     a: "Backlinks are links from other websites to your website. Search engines view backlinks as votes of confidence, and high-quality backlinks from reputable websites can significantly improve rankings.",
//   },
// ];

// // --- Custom Animated Counter Component ---
// function AnimatedCounter({ value }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-50px" });

//   // Parse strings like "120%", "50+", or "106"
//   const match = value.match(/^(\D*)(\d+)(\D*)$/);
//   const prefix = match ? match[1] : "";
//   const numericValue = match ? parseInt(match[2], 10) : 0;
//   const suffix = match ? match[3] : "";

//   useEffect(() => {
//     if (isInView && numericValue > 0) {
//       let start = 0;
//       const duration = 2000; // 2 seconds
//       const increment = numericValue / (duration / 16); // 60fps
//       const timer = setInterval(() => {
//         start += increment;
//         if (start >= numericValue) {
//           setCount(numericValue);
//           clearInterval(timer);
//         } else {
//           setCount(Math.floor(start));
//         }
//       }, 16);
//       return () => clearInterval(timer);
//     }
//   }, [isInView, numericValue]);

//   return (
//     <span ref={ref}>
//       {prefix}{numericValue > 0 ? count : value}{suffix}
//     </span>
//   );
// }

// export default function SeoServices() {
//   return (
//     <PublicLayout>
//       <SeoHero />
//       <ImpactStats />
//       <SeoServiceGrid />
//       <SeoReasonsProof />
//       <SpecializedSeo />
//       <BetterTogetherShowcase />
//       <TogetherBlock />
//       <SeoFaq />
//       <SeoContactStrip />
//     </PublicLayout>
//   );
// }

// function SeoHero() {
//   return (
//     <section className="relative overflow-hidden bg-white pt-14 pb-16 md:pt-20 md:pb-24" data-testid="seo-hero">
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_44%,rgba(200,122,80,0.11),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(19,78,53,0.09),transparent_28%)]" />
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative">
//         <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
//           <div className="lg:col-span-6">
//             <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-5">SEO service Marketly</div>
//             <h1 className="text-[42px] sm:text-[54px] lg:text-[68px] font-extrabold leading-[1.03] text-[#0F1212]">
//               Your Business <span className="text-[#134E35]">SEO Solution</span>
//             </h1>
//             <p className="mt-6 text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl">
//               Rank your business on top with ease. Marketly powers growth from start-up to scale-up through technical SEO, content optimization, backlink building, local citation, and clear data analysis.
//             </p>

//             <div className="mt-8 grid sm:grid-cols-3 gap-4">
//               {HERO_STATS.map((s) => (
//                 <div key={s.v} className="bg-[#134E35] text-white border-2 border-[#C87A50] rounded-sm p-5 shadow-[0_12px_24px_-18px_rgba(15,18,18,0.4)]">
//                   <div className="text-3xl font-extrabold leading-none"><AnimatedCounter value={s.k} /></div>
//                   <div className="mt-2 text-sm text-white/85">{s.v}</div>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-9 flex flex-wrap items-center gap-3">
//               <a href="#seo-score-form" className="inline-flex items-center justify-center h-14 px-8 bg-[#C87A50] hover:bg-[#B16840] text-white rounded-full text-sm font-bold transition-colors">
//                 Test your SEO score <ArrowRight className="ml-2 h-4 w-4" />
//               </a>
//               <Link to="/contact" className="inline-flex items-center justify-center h-14 px-6 border border-zinc-300 hover:border-[#134E35] rounded-full text-sm font-bold text-[#0F1212] transition-colors">
//                 Ask a question
//               </Link>
//             </div>
//           </div>

//           <div className="lg:col-span-6">
//             <HeroOrbit />
//           </div>
//         </div>

//         <div className="mt-14" id="seo-score-form">
//           <SeoScoreForm />
//         </div>
//       </div>
//     </section>
//   );
// }

// function HeroOrbit() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 640);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const angles = [0, 45, 90, 135, 180, 225, 270, 315];

//   return (
//     <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:mx-0 lg:ml-auto h-[400px] md:h-[550px]" aria-hidden="true">
//       <motion.div
//         className="absolute inset-0"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//       >
//         <div className="absolute inset-0 border border-[#134E35]/15 rounded-full" />
//         <div className="absolute inset-[15%] border border-[#C87A50]/20 rounded-full" />

//         <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
//           <div className="h-10 w-10 rounded-full bg-[#C87A50] text-white text-xs font-bold grid place-items-center shadow-[0_10px_24px_-14px_rgba(15,18,18,0.5)]">
//             SEO
//           </div>
//         </div>
//         <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
//           <div className="h-10 w-10 rounded-full bg-[#134E35] text-white text-xs font-bold grid place-items-center shadow-[0_10px_24px_-14px_rgba(15,18,18,0.5)]">
//             UX
//           </div>
//         </div>
//       </motion.div>

//       <div className="absolute inset-0 flex flex-col items-center justify-center">
//         {ORBIT_LABELS.map((label, index) => {
//           const angle = angles[index % angles.length];
//           return (
//             <div
//               key={label}
//               className="absolute z-20"
//               style={{
//                 transform: `rotate(${angle}deg) translate(${
//                   isMobile ? "160px" : "clamp(200px, 22vw, 260px)"
//                 }) rotate(-${angle}deg)`,
//               }}
//             >
//               <div
//                 className="bg-white px-3 py-2 rounded-sm shadow-[0_10px_28px_-18px_rgba(15,18,18,0.45)] border border-zinc-100 text-[11px] sm:text-xs md:text-sm whitespace-nowrap text-[#0F1212] font-medium"
//                 style={{
//                   transform: `scale(${isMobile ? 0.85 : 1})`,
//                   transformOrigin: "center",
//                 }}
//               >
//                 {label}
//               </div>
//             </div>
//           );
//         })}

//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[220px] w-[220px] md:h-[280px] md:w-[280px] rounded-full bg-zinc-100 border-[8px] border-white shadow-[0_24px_70px_-34px_rgba(15,18,18,0.45)] overflow-hidden z-10">
//           <img src={HERO_IMAGE} alt="SEO Dashboard" className="h-full w-full object-cover" />
//         </div>
//       </div>
//     </div>
//   );
// }

// function SeoScoreForm() {
//   const [f, setF] = useState({ name: "", email: "", phone: "", website: "" });
//   const [busy, setBusy] = useState(false);
//   const [sent, setSent] = useState(false);

//   const submit = async (event) => {
//     event.preventDefault();
//     if (!f.name.trim() || !f.email.trim() || !f.phone.trim() || !f.website.trim()) {
//       return toast.error("Name, email, phone number, and website are required");
//     }
//     setBusy(true);
//     try {
//       await publicContact({
//         name: f.name,
//         email: f.email,
//         phone: f.phone,
//         website: f.website,
//         service_interest: "SEO score",
//         subject: "Test Your Website's SEO Score For Free",
//         message: `SEO score request for website: ${f.website}`,
//         _replyto: f.email,
//       });
//       setSent(true);
//       toast.success("Thanks. Your SEO score request has been sent.");
//     } catch (e) {
//       toast.error(e?.message || "Could not send. Check Formspree setup.");
//     } finally {
//       setBusy(false);
//     }
//   };

//   return (
//     <div className="bg-[#0F1212] text-white rounded-sm border border-zinc-800 p-6 md:p-8 shadow-[0_20px_60px_-32px_rgba(15,18,18,0.5)]" data-testid="seo-score-form">
//       <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
//         <div className="lg:col-span-5">
//           <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-3">Free audit</div>
//           <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">Test Your Website's SEO Score For Free!</h2>
//           <p className="mt-3 text-sm text-white/65 leading-relaxed">
//             Submit your website and our team will review the main SEO signals behind crawlability, rankings, content, backlinks, and local visibility.
//           </p>
//         </div>

//         <div className="lg:col-span-7">
//           {sent ? (
//             <div className="rounded-sm border border-[#C87A50]/40 bg-[#C87A50]/10 p-6">
//               <CheckCircle2 className="h-8 w-8 text-[#C87A50]" />
//               <div className="mt-4 text-xl font-bold">Request received.</div>
//               <p className="mt-1 text-sm text-white/75">We will review <b>{f.website}</b> and reply to <b>{f.email}</b>.</p>
//             </div>
//           ) : (
//             <form onSubmit={submit} className="grid sm:grid-cols-2 gap-3">
//               <Input placeholder="Your Name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} className="rounded-sm bg-white border-white text-[#0F1212] h-12" />
//               <Input placeholder="Email Address" type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} className="rounded-sm bg-white border-white text-[#0F1212] h-12" />
//               <Input placeholder="Phone number" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} className="rounded-sm bg-white border-white text-[#0F1212] h-12" />
//               <Input placeholder="Website" value={f.website} onChange={(e) => setF({ ...f, website: e.target.value })} className="rounded-sm bg-white border-white text-[#0F1212] h-12" />
//               <Button type="submit" disabled={busy} className="sm:col-span-2 rounded-sm bg-[#C87A50] hover:bg-[#B16840] text-white h-12 text-sm font-semibold">
//                 {busy ? "Submitting..." : "Submit"} <Send className="ml-2 h-4 w-4" />
//               </Button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function ImpactStats() {
//   return (
//     <section className="bg-zinc-50 py-16 md:py-20 border-y border-zinc-200" data-testid="seo-impact-stats">
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//         <div className="grid md:grid-cols-3 gap-5">
//           {IMPACT_STATS.map((s) => (
//             <div key={s.v} className="bg-white border border-zinc-200 rounded-sm p-6 md:p-8">
//               <div className="text-[44px] md:text-[56px] font-extrabold leading-none text-[#134E35]">
//                 <AnimatedCounter value={s.k} />
//               </div>
//               <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C87A50]">{s.v}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function SeoServiceGrid() {
//   return (
//     <section className="py-20 md:py-28 bg-white" data-testid="seo-pillars">
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//         <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
//           <div className="md:col-span-7">
//             <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Our SEO Services</div>
//             <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] text-[#0F1212]">
//               From Start-up to Scale-up. Marketly.tech Powers Growth.
//             </h2>
//           </div>
//           <p className="md:col-span-5 text-base md:text-lg text-zinc-600 leading-relaxed">
//             Every SEO program needs the basics done with discipline: technical foundations, content, measurement, backlinks, and local presence. We bring those pieces together into one clean roadmap.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {SEO_SERVICES.map((p, i) => (
//             <motion.div
//               key={p.title}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-60px" }}
//               transition={{ duration: 0.45, delay: i * 0.05 }}
//               className="p-6 md:p-7 bg-white border border-zinc-200 rounded-sm hover:border-[#134E35] hover:shadow-[0_12px_32px_-20px_rgba(19,78,53,0.25)] transition-all duration-300 h-full"
//             >
//               <div className="h-11 w-11 rounded-sm bg-[#134E35]/10 grid place-items-center mb-5">
//                 <p.Icon className="h-5 w-5 text-[#134E35]" strokeWidth={1.75} />
//               </div>
//               <h3 className="text-lg font-bold text-[#0F1212] leading-tight">{p.title}</h3>
//               <ul className="mt-3 space-y-2.5">
//                 {p.bullets.map((b) => (
//                   <li key={b} className="flex items-start gap-2 text-[13px] text-zinc-600 leading-relaxed">
//                     <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#134E35] mt-0.5" />
//                     <span>{b}</span>
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

// function SeoReasonsProof() {
//   return (
//     <section className="py-20 md:py-32 bg-zinc-50 border-y border-zinc-200 overflow-hidden" data-testid="seo-reasons-proof">
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        
//         {/* TOP SECTION: Why SEO Matters (Premium Redesign) */}
//         <div className="mb-24">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Why SEO matters</div>
//             <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] text-[#0F1212]">
//               Five ranking leaks worth fixing first.
//             </h2>
//             <p className="mt-5 text-base md:text-lg text-zinc-600 leading-relaxed">
//               The original page called out the common SEO blockers. Here they are translated into a sharper audit checklist your team can actually act on.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {SEO_REASONS.map((reason, i) => (
//               <motion.div 
//                 key={reason.title} 
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 className={`relative p-8 bg-white border border-zinc-200 rounded-xl overflow-hidden group hover:border-[#134E35] hover:shadow-[0_20px_40px_-15px_rgba(19,78,53,0.15)] transition-all duration-300 ${i === 3 ? "lg:col-span-2" : ""} ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
//               >
//                 {/* Premium subtle background number */}
//                 <div className="absolute -right-4 -bottom-8 text-[140px] font-black text-zinc-50 leading-none group-hover:text-[#134E35]/5 transition-colors duration-500 pointer-events-none">
//                   0{i + 1}
//                 </div>
//                 <div className="relative z-10">
//                   <div className="h-10 w-10 rounded-full bg-zinc-100 flex items-center justify-center mb-6 group-hover:bg-[#134E35]/10 transition-colors">
//                     <CheckCircle2 className="h-5 w-5 text-zinc-400 group-hover:text-[#134E35] transition-colors" />
//                   </div>
//                   <h3 className="text-xl font-extrabold text-[#0F1212] leading-tight mb-3">{reason.title}</h3>
//                   <p className="text-sm text-zinc-600 leading-relaxed">{reason.text}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* BOTTOM SECTION: Ranking Proof (Image Mockup UI) */}
//         <div>
//           <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
//             <div className="md:col-span-7">
//               <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Ranking proof</div>
//               <h2 className="text-[30px] md:text-[42px] font-extrabold leading-tight text-[#0F1212]">
//                 Search visibility, presented like a performance dashboard.
//               </h2>
//             </div>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-8">
//             {RANKING_PROOFS.map((proof, i) => (
//               <motion.div 
//                 key={`${proof}-${i}`} 
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//                 className="relative bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-200 p-6 md:p-8 overflow-hidden"
//               >
//                 {/* Floating Highlight Badge matching the screenshot style */}
//                 <div className="absolute -right-2 top-6 bg-[#134E35] text-white px-5 py-2.5 rounded-l-full shadow-lg text-sm font-bold flex items-center gap-2 z-20">
//                   <span className="relative flex h-3 w-3">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-3 w-3 bg-green-300"></span>
//                   </span>
//                   {proof}
//                 </div>

//                 {/* Mock Browser/Search Header */}
//                 <div className="flex items-center gap-4 border-b border-zinc-100 pb-5 mb-5 pt-8">
//                   <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
//                     <Globe className="h-4 w-4 text-zinc-400" />
//                   </div>
//                   <div className="h-10 w-full max-w-[300px] bg-zinc-50 rounded-full border border-zinc-200 px-4 flex items-center">
//                     <Search className="h-3.5 w-3.5 text-zinc-400 mr-2" />
//                     <div className="h-2 w-24 bg-zinc-300 rounded-full"></div>
//                   </div>
//                 </div>

//                 {/* Mock Search Results Content */}
//                 <div className="space-y-6">
//                   {/* Result 1 (Highlighted if local) */}
//                   <div className={proof.includes("local") ? "p-4 bg-[#134E35]/5 rounded-lg border border-[#134E35]/20" : ""}>
//                     <div className="flex items-center gap-2 mb-2">
//                       <div className="w-6 h-6 rounded-full bg-zinc-200"></div>
//                       <div className="h-2 w-32 bg-zinc-200 rounded-full"></div>
//                     </div>
//                     <div className="h-5 w-3/4 bg-blue-600/80 rounded-full mb-3"></div>
//                     <div className="h-2 w-full bg-zinc-200 rounded-full mb-2"></div>
//                     <div className="h-2 w-4/5 bg-zinc-200 rounded-full"></div>
//                     {proof.includes("local") && (
//                        <div className="mt-4 flex gap-3">
//                          <div className="w-16 h-16 bg-zinc-200 rounded-md shrink-0 flex items-center justify-center"><Map className="text-zinc-400 h-6 w-6"/></div>
//                          <div className="flex-1 space-y-2 py-1">
//                             <div className="h-2 w-full bg-zinc-200 rounded-full"></div>
//                             <div className="h-2 w-2/3 bg-zinc-200 rounded-full"></div>
//                             <div className="h-2 w-1/2 bg-zinc-200 rounded-full"></div>
//                          </div>
//                        </div>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function SpecializedSeo() {
//   return (
//     <section className="py-20 md:py-24 bg-white" data-testid="seo-specialized">
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//         <div className="grid md:grid-cols-2 gap-6">
//           {SPECIALIZED_SERVICES.map(({ Icon, title, text }) => (
//             <div key={title} className="bg-zinc-50 border border-zinc-200 rounded-xl p-8 md:p-10 hover:shadow-md transition-shadow">
//               <div className="h-14 w-14 rounded-full bg-[#C87A50]/10 grid place-items-center mb-6">
//                 <Icon className="h-6 w-6 text-[#C87A50]" />
//               </div>
//               <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F1212] mb-4">{title}</h2>
//               <p className="text-zinc-600 leading-relaxed text-lg">{text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function BetterTogetherShowcase() {
//   return (
//     <section className="py-20 md:py-28 bg-white" data-testid="seo-better-together-showcase">
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//         <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
//           <div className="lg:col-span-5">
//             <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Better together</div>
//             <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] font-extrabold leading-tight text-[#0F1212]">
//               Let's Do Something Better Together!
//             </h2>
//             <p className="mt-5 text-zinc-600 leading-relaxed">
//               SEO works best when strategy, content, technical fixes, and measurement move together. This section keeps the original message, but fits Marketly's cleaner page system.
//             </p>
//             <div className="mt-10 grid grid-cols-2 gap-4">
//               {[
//                 { k: "106", v: "Satisfied Clients" },
//                 { k: "87%", v: "Avg. Conversion" },
//               ].map((s) => (
//                 <div key={s.v} className="border-l-2 border-[#134E35] pl-4">
//                   <div className="text-4xl md:text-5xl font-extrabold leading-none text-[#134E35]">
//                     <AnimatedCounter value={s.k} />
//                   </div>
//                   <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">{s.v}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="lg:col-span-7">
//             <div className="relative rounded-xl overflow-hidden border border-zinc-200 aspect-[16/10] shadow-xl">
//               <img
//                 src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400"
//                 alt="SEO team working on search performance"
//                 className="absolute inset-0 h-full w-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function TogetherBlock() {
//   return (
//     <section className="py-20 md:py-28 bg-[#134E35] text-white" data-testid="seo-together">
//       <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-10 items-center">
//         <div className="lg:col-span-7">
//           <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Let's Do Something Better Together!</div>
//           <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05]">
//             SEO that keeps working after every ad campaign stops.
//           </h2>
//           <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-2xl">
//             Whether you need a one-time audit or a full SEO growth retainer, we help you build visibility that compounds with content, technical fixes, local presence, and measurable reporting.
//           </p>
//         </div>
//         <div className="lg:col-span-5 grid grid-cols-2 gap-4">
//           {[
//             { k: "50+", v: "Satisfied Clients" },
//             { k: "34%", v: "Avg. Conversion" },
//             { k: "80%", v: "Traffic Growth" },
//             { k: "12 yrs", v: "In Business" },
//           ].map((s) => (
//             <div key={s.v} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
//               <div className="text-3xl font-extrabold text-[#C87A50]">
//                 <AnimatedCounter value={s.k} />
//               </div>
//               <div className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/65">{s.v}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function SeoFaq() {
//   return (
//     <section className="py-20 md:py-28 bg-zinc-50" data-testid="seo-faq">
//       <div className="max-w-[900px] mx-auto px-5 md:px-10">
//         <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Answers to Your Questions</div>
//         <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-[#0F1212]">SEO, explained.</h2>
//         <Accordion type="single" collapsible className="mt-10 bg-white border border-zinc-200 rounded-xl px-6">
//           {FAQS.map((f, i) => (
//             <AccordionItem key={f.q} value={`f-${i}`} className="border-zinc-100 last:border-0">
//               <AccordionTrigger className="text-left font-bold text-base md:text-lg hover:no-underline hover:text-[#134E35] py-6">
//                 {f.q}
//               </AccordionTrigger>
//               <AccordionContent className="text-zinc-600 leading-relaxed pb-6 text-[15px]">{f.a}</AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>
//       </div>
//     </section>
//   );
// }

// function SeoContactStrip() {
//   return (
//     <section className="py-16 md:py-20 bg-white border-t border-zinc-200" data-testid="seo-contact-strip">
//       <div className="max-w-[1100px] mx-auto px-5 md:px-10">
//         <div className="grid md:grid-cols-12 gap-8 items-center bg-zinc-50 border border-zinc-200 rounded-xl p-8 md:p-10">
//           <div className="md:col-span-7">
//             <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">
//               <MessageCircleQuestion className="h-4 w-4" /> Ask a Question
//             </div>
//             <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F1212]">Need help choosing the right SEO plan?</h2>
//             <p className="mt-3 text-zinc-600 leading-relaxed">
//               Location: Sarjapur road, Bangalore 35. Call +91 96063 34692 or email ramya@marketly.tech.
//             </p>
//           </div>
//           <div className="md:col-span-5 md:text-right">
//             <Button asChild className="rounded-xl bg-[#0F1212] hover:bg-[#134E35] text-white h-12 px-8 font-semibold transition-colors">
//               <Link to="/contact">Contact Marketly <ArrowRight className="ml-2 h-4 w-4" /></Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Code,
  Compass,
  FileText,
  Link2,
  MapPin,
  MessageCircleQuestion,
  Search,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PublicLayout from "@/components/layout/PublicLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";
import { publicContact } from "@/lib/publicApi";

const HERO_IMAGE = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900";

const SEO_SERVICES = [
  {
    Icon: Search,
    title: "Search Engine Optimization",
    bullets: [
      "Increase your website's visibility in search engine results pages (SERPs).",
      "Drive organic traffic to your website and improve your brand's online presence.",
      "In-depth keyword research, website content optimization, and high-quality backlinks to boost rankings.",
    ],
  },
  {
    Icon: FileText,
    title: "Content Optimization",
    bullets: [
      "Create high-quality, engaging content that resonates with your target audience.",
      "Optimize content for search engines and social media platforms.",
      "Develop a content strategy aligned with your business goals.",
    ],
  },
  {
    Icon: Code,
    title: "On-page Optimization",
    bullets: [
      "Enhance technical SEO to improve crawlability and indexability.",
      "Optimize title tags, meta descriptions, image alt text, headings, and internal links.",
      "Improve website speed and user experience for better search engine rankings.",
    ],
  },
  {
    Icon: Compass,
    title: "SEO Consulting",
    bullets: [
      "Get expert advice on SEO strategy and implementation.",
      "Run in-depth website audits with clear, actionable recommendations.",
      "Receive ongoing support and guidance to achieve SEO goals.",
    ],
  },
  {
    Icon: BarChart3,
    title: "Data Analysis",
    bullets: [
      "Track and analyze key metrics to measure SEO campaign effectiveness.",
      "Identify improvement areas and optimize the strategy accordingly.",
      "Gain insights into your target audience and their online behavior.",
    ],
  },
  {
    Icon: ClipboardCheck,
    title: "SEO Strategy",
    bullets: [
      "Develop a customized SEO strategy tailored to your business needs and goals.",
      "Set realistic and measurable targets for SEO campaigns.",
      "Monitor and adjust your strategy based on performance data.",
    ],
  },
];

const SPECIALIZED_SERVICES = [
  {
    Icon: Link2,
    title: "Backlink Building",
    text: "Marketly's backlink building services focus on acquiring high-quality, relevant backlinks from reputable websites within your industry. We employ ethical, white-hat techniques to improve domain authority and search engine rankings.",
  },
  {
    Icon: MapPin,
    title: "Local Citation",
    text: "Marketly helps you establish a strong local online presence through accurate listings on Google Business Profile, Yelp, Bing, and other directories so potential customers in your area can find you easily.",
  },
];

const HERO_STATS = [
  { k: "50+", v: "Satisfied clients" },
  { k: "80%", v: "Increased traffic" },
  { k: "34%", v: "Avg. conversion" },
];

const IMPACT_STATS = [
  { k: "106", v: "Satisfied Clients" },
  { k: "120%", v: "Increased Traffic" },
  { k: "200%", v: "Increased engagement" },
];

const SEO_REASONS = [
  {
    title: "You aren't targeting the right keywords.",
    text: "Take a look at the latest search trends in your industry every so often so you don't miss out on valuable search traffic.",
  },
  {
    title: "Search engines may have difficulty crawling your website",
    text: "A sitemap is essential for SEO. Sitemaps help search engine bots better crawl your site and reduce the risk of overlooking parts of it.",
  },
  {
    title: "You're Wasting Page Rank Opportunities",
    text: "Internal links help site visitors navigate efficiently and pass page rank along to valuable pages like product or service pages.",
  },
  {
    title: "Rankings disappeared after a website redesign.",
    text: "Have you recently relaunched your website? Create a 301 redirect plan so you do not lose traffic and value from old pages.",
  },
  {
    title: "The Site Is Slow and Doesn't Rank",
    text: "Visitors leave slow sites. Search engines do not like slow loading sites either, which makes speed a ranking factor.",
  },
];

const ORBIT_LABELS = [
  "Keyword research",
  "SEO audit",
  "Backlinks",
  "Technical SEO",
  "Local citation",
  "Content plan",
  "SERP growth",
  "Analytics",
];

const FAQS = [
  {
    q: "What is an SEO expert?",
    a: "Search Engine Optimization (SEO) is the process of improving your website's visibility in search engine results pages like Google, Bing, and Yahoo. When people search for products or services related to your business, SEO helps ensure your website appears higher in the search results.",
  },
  {
    q: "What are some common SEO techniques?",
    a: "Common SEO techniques include keyword research, on-page optimization, off-page optimization, technical SEO, content marketing, backlinks, and local citation management.",
  },
  {
    q: "How long does it take to see results from SEO?",
    a: "SEO takes time. While results may vary, consistent effort can lead to significant improvements in search rankings over several months.",
  },
  {
    q: "How can I measure the success of my SEO efforts?",
    a: "Track key metrics like website traffic, keyword rankings, lead generation, engagement, local visibility, and conversion rates.",
  },
  {
    q: "What is the role of backlinks in SEO?",
    a: "Backlinks are links from other websites to your website. Search engines view backlinks as votes of confidence, and high-quality backlinks from reputable websites can significantly improve rankings.",
  },
];

// --- Custom Animated Counter Component ---
function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  const prefix = match ? match[1] : "";
  const numericValue = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : "";

  useEffect(() => {
    if (isInView && numericValue > 0) {
      let start = 0;
      const duration = 2000; 
      const increment = numericValue / (duration / 16); 
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {prefix}{numericValue > 0 ? count : value}{suffix}
    </span>
  );
}

export default function SeoServices() {
  return (
    <PublicLayout>
      <SeoHero />
      <ImpactStats />
      <SeoServiceGrid />
      <SeoReasonsProof />
      <SpecializedSeo />
      <BetterTogetherShowcase />
      <TogetherBlock />
      <SeoFaq />
      <SeoContactStrip />
    </PublicLayout>
  );
}

function SeoHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-14 pb-16 md:pt-20 md:pb-24" data-testid="seo-hero">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_44%,rgba(200,122,80,0.11),transparent_30%),radial-gradient(circle_at_15%_80%,rgba(19,78,53,0.09),transparent_28%)]" />
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-5">SEO service Marketly</div>
            <h1 className="text-[42px] sm:text-[54px] lg:text-[68px] font-extrabold leading-[1.03] text-[#0F1212]">
              Your Business <span className="text-[#134E35]">SEO Solution</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl">
              Rank your business on top with ease. Marketly powers growth from start-up to scale-up through technical SEO, content optimization, backlink building, local citation, and clear data analysis.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {HERO_STATS.map((s) => (
                <div key={s.v} className="bg-[#134E35] text-white border-2 border-[#C87A50] rounded-sm p-5 shadow-[0_12px_24px_-18px_rgba(15,18,18,0.4)]">
                  <div className="text-3xl font-extrabold leading-none"><AnimatedCounter value={s.k} /></div>
                  <div className="mt-2 text-sm text-white/85">{s.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#seo-score-form" className="inline-flex items-center justify-center h-14 px-8 bg-[#C87A50] hover:bg-[#B16840] text-white rounded-full text-sm font-bold transition-colors">
                Test your SEO score <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center h-14 px-6 border border-zinc-300 hover:border-[#134E35] rounded-full text-sm font-bold text-[#0F1212] transition-colors">
                Ask a question
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <HeroOrbit />
          </div>
        </div>

        <div className="mt-14" id="seo-score-form">
          <SeoScoreForm />
        </div>
      </div>
    </section>
  );
}

function HeroOrbit() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const angles = [0, 45, 90, 135, 180, 225, 270, 315];

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:mx-0 lg:ml-auto h-[400px] md:h-[550px]" aria-hidden="true">
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 border border-[#134E35]/15 rounded-full" />
        <div className="absolute inset-[15%] border border-[#C87A50]/20 rounded-full" />

        <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
          <div className="h-10 w-10 rounded-full bg-[#C87A50] text-white text-xs font-bold grid place-items-center shadow-[0_10px_24px_-14px_rgba(15,18,18,0.5)]">SEO</div>
        </div>
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
          <div className="h-10 w-10 rounded-full bg-[#134E35] text-white text-xs font-bold grid place-items-center shadow-[0_10px_24px_-14px_rgba(15,18,18,0.5)]">UX</div>
        </div>
      </motion.div>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {ORBIT_LABELS.map((label, index) => {
          const angle = angles[index % angles.length];
          return (
            <div
              key={label}
              className="absolute z-20"
              style={{ transform: `rotate(${angle}deg) translate(${isMobile ? "160px" : "clamp(200px, 22vw, 260px)"}) rotate(-${angle}deg)` }}
            >
              <div
                className="bg-white px-3 py-2 rounded-sm shadow-[0_10px_28px_-18px_rgba(15,18,18,0.45)] border border-zinc-100 text-[11px] sm:text-xs md:text-sm whitespace-nowrap text-[#0F1212] font-medium"
                style={{ transform: `scale(${isMobile ? 0.85 : 1})`, transformOrigin: "center" }}
              >
                {label}
              </div>
            </div>
          );
        })}

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[220px] w-[220px] md:h-[280px] md:w-[280px] rounded-full bg-zinc-100 border-[8px] border-white shadow-[0_24px_70px_-34px_rgba(15,18,18,0.45)] overflow-hidden z-10">
          <img src={HERO_IMAGE} alt="SEO Dashboard" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

function SeoScoreForm() {
  const [f, setF] = useState({ name: "", email: "", phone: "", website: "" });
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    if (!f.name.trim() || !f.email.trim() || !f.phone.trim() || !f.website.trim()) {
      return toast.error("Name, email, phone number, and website are required");
    }
    setBusy(true);
    try {
      await publicContact({
        name: f.name,
        email: f.email,
        phone: f.phone,
        website: f.website,
        service_interest: "SEO score",
        subject: "Test Your Website's SEO Score For Free",
        message: `SEO score request for website: ${f.website}`,
        _replyto: f.email,
      });
      setSent(true);
      toast.success("Thanks. Your SEO score request has been sent.");
    } catch (e) {
      toast.error(e?.message || "Could not send. Check Formspree setup.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="bg-[#0F1212] text-white rounded-sm border border-zinc-800 p-6 md:p-8 shadow-[0_20px_60px_-32px_rgba(15,18,18,0.5)]" data-testid="seo-score-form">
      <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        <div className="lg:col-span-5">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-3">Free audit</div>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">Test Your Website's SEO Score For Free!</h2>
          <p className="mt-3 text-sm text-white/65 leading-relaxed">
            Submit your website and our team will review the main SEO signals behind crawlability, rankings, content, backlinks, and local visibility.
          </p>
        </div>

        <div className="lg:col-span-7">
          {sent ? (
            <div className="rounded-sm border border-[#C87A50]/40 bg-[#C87A50]/10 p-6">
              <CheckCircle2 className="h-8 w-8 text-[#C87A50]" />
              <div className="mt-4 text-xl font-bold">Request received.</div>
              <p className="mt-1 text-sm text-white/75">We will review <b>{f.website}</b> and reply to <b>{f.email}</b>.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid sm:grid-cols-2 gap-3">
              <Input placeholder="Your Name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} className="rounded-sm bg-white border-white text-[#0F1212] h-12" />
              <Input placeholder="Email Address" type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} className="rounded-sm bg-white border-white text-[#0F1212] h-12" />
              <Input placeholder="Phone number" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} className="rounded-sm bg-white border-white text-[#0F1212] h-12" />
              <Input placeholder="Website" value={f.website} onChange={(e) => setF({ ...f, website: e.target.value })} className="rounded-sm bg-white border-white text-[#0F1212] h-12" />
              <Button type="submit" disabled={busy} className="sm:col-span-2 rounded-sm bg-[#C87A50] hover:bg-[#B16840] text-white h-12 text-sm font-semibold">
                {busy ? "Submitting..." : "Submit"} <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function ImpactStats() {
  return (
    <section className="bg-zinc-50 py-16 md:py-20 border-y border-zinc-200" data-testid="seo-impact-stats">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-3 gap-5">
          {IMPACT_STATS.map((s) => (
            <div key={s.v} className="bg-white border border-zinc-200 rounded-sm p-6 md:p-8">
              <div className="text-[44px] md:text-[56px] font-extrabold leading-none text-[#134E35]">
                <AnimatedCounter value={s.k} />
              </div>
              <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C87A50]">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeoServiceGrid() {
  return (
    <section className="py-20 md:py-28 bg-white" data-testid="seo-pillars">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
          <div className="md:col-span-7">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Our SEO Services</div>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] text-[#0F1212]">
              From Start-up to Scale-up. Marketly.tech Powers Growth.
            </h2>
          </div>
          <p className="md:col-span-5 text-base md:text-lg text-zinc-600 leading-relaxed">
            Every SEO program needs the basics done with discipline: technical foundations, content, measurement, backlinks, and local presence. We bring those pieces together into one clean roadmap.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SEO_SERVICES.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="p-6 md:p-7 bg-white border border-zinc-200 rounded-sm hover:border-[#134E35] hover:shadow-[0_12px_32px_-20px_rgba(19,78,53,0.25)] transition-all duration-300 h-full"
            >
              <div className="h-11 w-11 rounded-sm bg-[#134E35]/10 grid place-items-center mb-5">
                <p.Icon className="h-5 w-5 text-[#134E35]" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-bold text-[#0F1212] leading-tight">{p.title}</h3>
              <ul className="mt-3 space-y-2.5">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[13px] text-zinc-600 leading-relaxed">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#134E35] mt-0.5" />
                    <span>{b}</span>
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

function SeoReasonsProof() {
  return (
    <section className="py-20 md:py-32 bg-zinc-50 border-y border-zinc-200 overflow-hidden" data-testid="seo-reasons-proof">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        
        {/* TOP SECTION: Why SEO Matters (Bento Grid) */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Why SEO matters</div>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] text-[#0F1212]">
              Five ranking leaks worth fixing first.
            </h2>
            <p className="mt-5 text-base md:text-lg text-zinc-600 leading-relaxed">
              The original page called out the common SEO blockers. Here they are translated into a sharper audit checklist your team can actually act on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEO_REASONS.map((reason, i) => (
              <motion.div 
                key={reason.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative p-8 bg-white border border-zinc-200 rounded-xl overflow-hidden group hover:border-[#134E35] hover:shadow-[0_20px_40px_-15px_rgba(19,78,53,0.15)] transition-all duration-300 ${i === 3 ? "lg:col-span-2" : ""} ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="absolute -right-4 -bottom-8 text-[140px] font-black text-zinc-50 leading-none group-hover:text-[#134E35]/5 transition-colors duration-500 pointer-events-none">
                  0{i + 1}
                </div>
                <div className="relative z-10">
                  <div className="h-10 w-10 rounded-full bg-zinc-100 flex items-center justify-center mb-6 group-hover:bg-[#134E35]/10 transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-zinc-400 group-hover:text-[#134E35] transition-colors" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0F1212] leading-tight mb-3">{reason.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{reason.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION: Ranking Proof (Full Image) */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Ranking proof</div>
            <h2 className="text-[30px] md:text-[42px] font-extrabold leading-tight text-[#0F1212]">
              Real Search Visibility Results
            </h2>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]"
          >
            {/* macOS Style Browser Header Bar */}
            <div className="bg-zinc-100 border-b border-zinc-200 px-4 py-3 flex items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
            </div>
            
            {/* IMPORTANT: Update this src path to point exactly to where 
              you placed the SEO-formarketly-website-.jpg file in your project.
              E.g., "/images/SEO-formarketly-website-.jpg" if it's in public/images
            */}
            <img 
              src="https://ik.imagekit.io/j0xzq9pns/SEO-formarketly-website-.png" 
              alt="Marketly SEO Ranking Proofs" 
              className="w-full h-auto object-cover block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SpecializedSeo() {
  return (
    <section className="py-20 md:py-24 bg-white" data-testid="seo-specialized">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-6">
          {SPECIALIZED_SERVICES.map(({ Icon, title, text }) => (
            <div key={title} className="bg-zinc-50 border border-zinc-200 rounded-xl p-8 md:p-10 hover:shadow-md transition-shadow">
              <div className="h-14 w-14 rounded-full bg-[#C87A50]/10 grid place-items-center mb-6">
                <Icon className="h-6 w-6 text-[#C87A50]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F1212] mb-4">{title}</h2>
              <p className="text-zinc-600 leading-relaxed text-lg">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BetterTogetherShowcase() {
  return (
    <section className="py-20 md:py-28 bg-white" data-testid="seo-better-together-showcase">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Better together</div>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[48px] font-extrabold leading-tight text-[#0F1212]">
              Let's Do Something Better Together!
            </h2>
            <p className="mt-5 text-zinc-600 leading-relaxed">
              SEO works best when strategy, content, technical fixes, and measurement move together. This section keeps the original message, but fits Marketly's cleaner page system.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { k: "106", v: "Satisfied Clients" },
                { k: "87%", v: "Avg. Conversion" },
              ].map((s) => (
                <div key={s.v} className="border-l-2 border-[#134E35] pl-4">
                  <div className="text-4xl md:text-5xl font-extrabold leading-none text-[#134E35]">
                    <AnimatedCounter value={s.k} />
                  </div>
                  <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="relative rounded-xl overflow-hidden border border-zinc-200 aspect-[16/10] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400"
                alt="SEO team working on search performance"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TogetherBlock() {
  return (
    <section className="py-20 md:py-28 bg-[#134E35] text-white" data-testid="seo-together">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Let's Do Something Better Together!</div>
          <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05]">
            SEO that keeps working after every ad campaign stops.
          </h2>
          <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-2xl">
            Whether you need a one-time audit or a full SEO growth retainer, we help you build visibility that compounds with content, technical fixes, local presence, and measurable reporting.
          </p>
        </div>
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {[
            { k: "50+", v: "Satisfied Clients" },
            { k: "34%", v: "Avg. Conversion" },
            { k: "80%", v: "Traffic Growth" },
            { k: "12 yrs", v: "In Business" },
          ].map((s) => (
            <div key={s.v} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <div className="text-3xl font-extrabold text-[#C87A50]">
                <AnimatedCounter value={s.k} />
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/65">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeoFaq() {
  return (
    <section className="py-20 md:py-28 bg-zinc-50" data-testid="seo-faq">
      <div className="max-w-[900px] mx-auto px-5 md:px-10">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Answers to Your Questions</div>
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-[#0F1212]">SEO, explained.</h2>
        <Accordion type="single" collapsible className="mt-10 bg-white border border-zinc-200 rounded-xl px-6">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`f-${i}`} className="border-zinc-100 last:border-0">
              <AccordionTrigger className="text-left font-bold text-base md:text-lg hover:no-underline hover:text-[#134E35] py-6">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-600 leading-relaxed pb-6 text-[15px]">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function SeoContactStrip() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-zinc-200" data-testid="seo-contact-strip">
      <div className="max-w-[1100px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 items-center bg-zinc-50 border border-zinc-200 rounded-xl p-8 md:p-10">
          <div className="md:col-span-7">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">
              <MessageCircleQuestion className="h-4 w-4" /> Ask a Question
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F1212]">Need help choosing the right SEO plan?</h2>
            <p className="mt-3 text-zinc-600 leading-relaxed">
              Location: Sarjapur road, Bangalore 35. Call +91 96063 34692 or email ramya@marketly.tech.
            </p>
          </div>
          <div className="md:col-span-5 md:text-right">
            <Button asChild className="rounded-xl bg-[#0F1212] hover:bg-[#134E35] text-white h-12 px-8 font-semibold transition-colors">
              <Link to="/contact">Contact Marketly <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}