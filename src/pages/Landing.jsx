import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Award, CheckCircle2, Star, Sparkles, TrendingUp, Play, Activity, Bot, ShieldCheck } from "lucide-react";
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
      <TrustBar />
      <FounderAward />
      <CertifiedExcellence />
      <AIVisibilityAudit />
      <ServicesPreview />
      <FeaturedWork />
      <ProjectShowcase limit={4} />
      <AuditCTA />
      <WhyUs />
      <LatestBlog />
      <TestimonialStrip />
      <FinalCTA />
    </PublicLayout>
  );
}

/* ========================= HERO ========================= */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yAward = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yCase = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={ref} className="relative bg-white overflow-hidden" data-testid="home-hero">
      {/* decorative grid + gradient */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{backgroundImage: "linear-gradient(#0F1212 1px, transparent 1px), linear-gradient(90deg, #0F1212 1px, transparent 1px)", backgroundSize: "48px 48px"}} />
      <div className="pointer-events-none absolute -top-20 -right-20 w-[720px] h-[720px] rounded-full opacity-40 blur-3xl" style={{background: "radial-gradient(closest-side, rgba(200,122,80,0.18), transparent)"}} />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-[640px] h-[640px] rounded-full opacity-40 blur-3xl" style={{background: "radial-gradient(closest-side, rgba(19,78,53,0.18), transparent)"}} />

      <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-10 pb-20 md:pt-20 md:pb-28 relative">
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
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#134E35]/5 border border-[#134E35]/15 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#134E35] rounded-sm">
                <Award className="h-3.5 w-3.5" /> AdAsia Winner 2024
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-zinc-200 text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-700 rounded-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0B5BD3]" /> Google Partner
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-zinc-200 text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-700 rounded-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0081FB]" /> Meta Business Partner
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-zinc-200 text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-700 rounded-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#134E35]" /> ISO 27001
              </span>
            </motion.div>

            <h1 className="text-[40px] sm:text-[52px] lg:text-[68px] font-extrabold leading-[1.02] tracking-[-0.02em] text-[#0F1212]">
              The growth stack for brands that want to{" "}
              <span className="relative inline-block text-[#134E35]">
                compound
                <svg className="absolute left-0 -bottom-1.5 w-full h-3" viewBox="0 0 300 12" fill="none">
                  <motion.path
                    d="M 2 8 Q 80 0 150 6 T 298 4"
                    stroke="#C87A50"
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
              className="mt-6 text-lg md:text-xl text-zinc-600 max-w-2xl leading-relaxed"
            >
              Performance marketing, SEO, local ranking, landing pages, creative, and offline media — one team that ships every part of your growth stack, not just a single slice of it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button asChild data-testid="hero-book-call-btn" className="group rounded-sm bg-[#0F1212] hover:bg-[#134E35] text-white h-12 px-6 text-[13px] font-semibold shadow-[0_8px_24px_-10px_rgba(19,78,53,0.5)]">
                <Link to="/contact">Book a strategy call <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
              <Button asChild variant="outline" data-testid="hero-work-btn" className="rounded-sm border-zinc-300 bg-white text-[#0F1212] hover:bg-zinc-50 h-12 px-6 text-[13px] font-semibold">
                <Link to="/work">See our work <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <div className="flex items-center gap-2 text-xs text-zinc-500 ml-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#134E35]" /> No-obligation · 30-min call
              </div>
            </motion.div>

            {/* Animated count-up stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6"
              data-testid="hero-stats"
            >
              {[
                { v: 50, suffix: "+", k: "Brands served" },
                { v: 42, prefix: "₹", suffix: "Cr+", k: "Ad spend managed" },
                { v: 94, suffix: "%", k: "Client retention" },
                { v: 12, suffix: " yrs", k: "In business" },
              ].map((s) => (
                <div key={s.k} className="border-l-2 border-[#134E35] pl-4">
                  <div className="text-3xl md:text-[32px] font-bold text-[#0F1212] leading-none">
                    <CountUp value={s.v} prefix={s.prefix || ""} suffix={s.suffix || ""} />
                  </div>
                  <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">{s.k}</div>
                </div>
              ))}
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
                className="absolute top-0 right-0 w-[78%] aspect-[4/5] rounded-sm overflow-hidden shadow-[0_30px_60px_-20px_rgba(15,18,18,0.35)]"
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900"
                  alt="Marketly team at work"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1212]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur rounded-sm px-3 py-2">
                  <div className="text-[9px] font-semibold uppercase tracking-[0.14em] text-zinc-500">The team</div>
                  <div className="text-xs font-bold text-[#0F1212]">Bengaluru HQ · 22 people</div>
                </div>
              </motion.div>

              {/* REAL AWARD PHOTO — bottom-left, medium */}
              <motion.div
                style={{ y: yAward }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-12 left-0 w-[58%] aspect-[4/3] rounded-sm overflow-hidden border-4 border-white shadow-[0_20px_48px_-16px_rgba(15,18,18,0.4)] z-10"
              >
                <img
                  src={AWARD_PHOTO}
                  alt="Ramya Prasanna receiving the Marketing Innovation Award 2024"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1212]/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <div className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#C87A50]">Award winner · March 2024</div>
                  <div className="text-[13px] font-bold leading-tight mt-0.5">Ramya Prasanna · Founder</div>
                </div>
              </motion.div>

              {/* Case-study metric card — top-left floating */}
              <motion.div
                style={{ y: yCase }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="absolute top-6 -left-4 md:left-0 w-[46%] bg-white rounded-sm p-4 border border-zinc-200 shadow-[0_16px_40px_-16px_rgba(19,78,53,0.35)] z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-sm bg-[#134E35]/10 grid place-items-center">
                    <TrendingUp className="h-4 w-4 text-[#134E35]" />
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Recent outcome</div>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <CountUp value={300} suffix="%" className="text-3xl font-extrabold text-[#134E35] leading-none" />
                  <span className="text-[11px] text-zinc-500 font-semibold">ROI</span>
                </div>
                <div className="text-xs text-zinc-600 mt-2 leading-snug">RRL Builders & Developers · qualified site-visits, 90 days</div>
              </motion.div>

              {/* Video play pill — bottom-right floating */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute bottom-0 right-2 bg-[#0F1212] text-white px-3.5 py-2.5 rounded-sm flex items-center gap-2.5 cursor-pointer group hover:bg-[#134E35] transition-colors z-20"
              >
                <div className="h-7 w-7 rounded-full bg-[#C87A50] grid place-items-center group-hover:scale-110 transition-transform">
                  <Play className="h-3 w-3 text-white fill-white ml-0.5" />
                </div>
                <div className="text-[11px] leading-tight">
                  <div className="font-bold">Our reel</div>
                  <div className="text-white/60 text-[10px]">45 sec</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ========================= FOUNDER-LED AWARD STORY ========================= */
function FounderAward() {
  return (
    <section className="py-20 md:py-28 bg-[#0F1212] text-white relative overflow-hidden" data-testid="founder-award">
      <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px"}} />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none" style={{background: "radial-gradient(circle at top right, rgba(200,122,80,0.35) 0%, transparent 60%)"}} />
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-sm overflow-hidden aspect-[4/3] md:aspect-[16/11] border-[6px] border-white/90 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
              <img src={AWARD_PHOTO} alt="Ramya Prasanna receiving the Marketing Innovation Award at the 2024 Women Achievements ceremony" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            {/* polaroid caption */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-2 md:-right-6 bg-white text-[#0F1212] px-5 py-4 rounded-sm border border-zinc-200 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.4)] max-w-xs"
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C87A50]">Stage photo · 10 March 2024</div>
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
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4 flex items-center gap-2">
              <Award className="h-3.5 w-3.5" /> Founder-led · Award-winning
            </div>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em]">
              Built by a CMO who got tired of agencies.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl">
              Marketly was founded by <span className="font-bold text-white">Ramya Prasanna</span> — a former in-house CMO who spent a decade on the receiving end of agency excuses. In 2024, she was recognised at the AdAsia India <span className="font-bold text-white">Marketing Innovation Awards</span> for building the very agency she wished she'd had access to.
            </p>
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { k: "2013", v: "Agency founded" },
                { k: "2024", v: "Award winner" },
                { k: "50+", v: "Brands grown" },
              ].map((s, i) => (
                <motion.div
                  key={s.v}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="p-5 bg-white/5 border border-white/10 rounded-sm backdrop-blur-sm"
                >
                  <div className="text-3xl font-extrabold text-[#C87A50] leading-none">{s.k}</div>
                  <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/60">{s.v}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild className="rounded-sm bg-[#C87A50] hover:bg-[#B16840] text-white h-12 px-6 font-semibold">
                <Link to="/contact">Talk to Ramya's team <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="rounded-sm border-white/20 bg-transparent text-white hover:bg-white/5 h-12 px-6 font-semibold">
                <Link to="/about">Our story</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ========================= CERTIFIED EXCELLENCE ========================= */
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
      title: "Privacy-first operations",
      status: "ISO 27001 aligned",
      desc: "Your ad accounts, customer lists, dashboards, and business data stay protected inside clean operating workflows.",
      Icon: ShieldCheck,
      accent: "bg-[#134E35]",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white" data-testid="home-certified-excellence">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
          <div className="md:col-span-7">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Certified excellence</div>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">
              Platform-certified work, handled with senior discipline.
            </h2>
          </div>
          <p className="md:col-span-5 text-base md:text-lg text-zinc-600 leading-relaxed">
            Adapted from the reference section, but designed for the current Marketly system: crisp cards, restrained badges, and clear proof points.
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
              className="group bg-white border border-zinc-200 rounded-sm p-7 md:p-8 hover:border-[#134E35] hover:shadow-[0_14px_36px_-22px_rgba(19,78,53,0.35)] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="h-14 w-14 rounded-sm bg-zinc-50 border border-zinc-200 grid place-items-center p-3">
                  {card.logo ? (
                    <img src={card.logo} alt={`${card.title} logo`} className="h-full w-full object-contain" />
                  ) : (
                    <card.Icon className="h-7 w-7 text-[#134E35]" />
                  )}
                </div>
                <span className="inline-flex items-center gap-2 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-600 bg-zinc-50 border border-zinc-200 rounded-sm">
                  <span className={`h-1.5 w-1.5 rounded-full ${card.accent}`} /> {card.status}
                </span>
              </div>
              <h3 className="mt-7 text-xl font-bold text-[#0F1212] leading-tight">{card.title}</h3>
              <p className="mt-3 text-[15px] text-zinc-600 leading-relaxed">{card.desc}</p>
              <div className="mt-7 pt-5 border-t border-zinc-100 flex items-center justify-between text-xs">
                <span className="text-zinc-500 font-medium">Verification</span>
                <span className="font-semibold text-[#134E35] flex items-center gap-1.5">
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

/* ========================= AI VISIBILITY AUDIT ========================= */
function AIVisibilityAudit() {
  const engines = [
    { name: "ChatGPT", score: "85%", width: "w-[85%]" },
    { name: "Perplexity", score: "72%", width: "w-[72%]" },
    { name: "Gemini", score: "62%", width: "w-[62%]" },
    { name: "Claude", score: "58%", width: "w-[58%]" },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0F1212] text-white relative overflow-hidden" data-testid="home-ai-visibility-audit">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px"}} />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-25 pointer-events-none" style={{background: "radial-gradient(circle at top right, rgba(200,122,80,0.36) 0%, transparent 62%)"}} />

      <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-6"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" /> Free AI visibility audit
            </div>
            <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em]">
              How visible is your brand inside AI search?
            </h2>
            <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-2xl">
              See how often ChatGPT, Perplexity, Gemini, and Claude understand, mention, and recommend your brand. The audit gives you a clear score and the gaps to fix next.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-3 max-w-2xl">
              {["AI mentions", "Competitor gaps", "Content fixes"].map((item) => (
                <div key={item} className="rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#C87A50] shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button asChild className="rounded-sm bg-[#C87A50] hover:bg-[#B16840] text-white h-12 px-6 font-semibold">
                <Link to="/contact">Check your score for free <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <div className="text-sm text-white/50 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#C87A50]" /> No credit card required
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
            <div className="bg-white/[0.04] border border-white/10 rounded-sm overflow-hidden shadow-[0_28px_70px_-38px_rgba(0,0,0,0.8)]">
              <div className="h-12 border-b border-white/10 flex items-center justify-between px-5 bg-white/[0.03]">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#C87A50]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                </div>
                <div className="flex items-center gap-2 text-white/45 text-xs font-mono">
                  <Activity className="h-3.5 w-3.5 text-[#C87A50]" /> Live visibility scan
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                  <div className="relative aspect-square rounded-full border border-[#C87A50]/25 bg-[#0F1212] grid place-items-center">
                    <div className="absolute inset-6 rounded-full border border-white/10" />
                    <div className="absolute inset-12 rounded-full border border-[#134E35]/50" />
                    <Bot className="absolute top-8 right-10 h-7 w-7 text-[#C87A50]" />
                    <div className="text-center">
                      <div className="text-6xl font-extrabold text-white tracking-tight">73</div>
                      <div className="mt-2 text-[10px] tracking-[0.2em] uppercase font-bold text-[#C87A50]">Visibility score</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {engines.map((item) => (
                      <div key={item.name} className="rounded-sm bg-white/[0.035] border border-white/10 p-4">
                        <div className="flex items-center justify-between text-sm mb-3">
                          <span className="text-white/75">{item.name}</span>
                          <span className="text-white font-mono">{item.score}</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                          <div className={`${item.width} h-full rounded-full bg-[#C87A50]`} />
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
                    <div key={stat.v} className="rounded-sm border border-white/10 bg-white/[0.035] p-4">
                      <div className="text-2xl font-bold text-white leading-none">{stat.k}</div>
                      <div className="mt-2 text-[10px] uppercase tracking-[0.14em] text-white/40">{stat.v}</div>
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

/* ========================= TRUST BAR (logos + awards) ========================= */
function TrustBar() {
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section className="bg-zinc-50 border-y border-zinc-200 py-14 md:py-16" data-testid="home-trust">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* Partner badges — official-style SVG cards */}
        <div className="mb-12">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-5 text-center">
            Certified partner · Award winner
          </div>
          <PartnerBadgeRow />
        </div>

        {/* Client logos marquee */}
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-6 text-center">
          Trusted by 50+ brands across India
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-zinc-50 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-zinc-50 to-transparent pointer-events-none" />
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {logos.map((name, i) => (
              <span key={`${name}-${i}`} className="text-2xl font-semibold text-zinc-400 hover:text-[#134E35] transition-colors shrink-0">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================= SERVICES PREVIEW ========================= */
function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 bg-white" data-testid="home-services">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
          <div className="md:col-span-7">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">What we do</div>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">
              Seven capabilities. One operating system.
            </h2>
          </div>
          <div className="md:col-span-5 md:pl-8">
            <p className="text-base md:text-lg text-zinc-600 leading-relaxed">
              Most agencies pick a lane. We run the whole highway — so every lever moves together.
            </p>
            <Link to="/services" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#134E35] hover:text-[#0D3A26]">
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
                className="block p-7 md:p-8 bg-white border border-zinc-200 rounded-sm hover:border-[#134E35] hover:shadow-[0_12px_32px_-16px_rgba(19,78,53,0.25)] transition-all duration-300 h-full"
                data-testid={`service-${s.slug}`}
              >
                <div className="flex items-start justify-between">
                  <div className="text-sm font-mono font-semibold text-zinc-400">{s.num}</div>
                  <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:text-[#134E35] transition-colors" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#0F1212] leading-tight">{s.title}</h3>
                <p className="mt-2.5 text-[15px] text-zinc-600 leading-relaxed">{s.short}</p>
                <div className="mt-5 pt-5 border-t border-zinc-100 flex items-center justify-between text-xs">
                  <span className="text-zinc-500 font-medium">Outcome</span>
                  <span className="font-semibold text-[#134E35]">{s.metric}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= FEATURED WORK ========================= */
function FeaturedWork() {
  const featured = CASE_STUDIES.slice(0, 4);
  return (
    <section className="py-20 md:py-28 bg-zinc-50" data-testid="home-work">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div className="max-w-2xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Selected work</div>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">
              Numbers the board actually reads.
            </h2>
          </div>
          <Link to="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-[#134E35] hover:text-[#0D3A26]">
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
                className="group block bg-white rounded-sm overflow-hidden border border-zinc-200 hover:border-[#134E35] hover:shadow-[0_16px_40px_-20px_rgba(19,78,53,0.3)] transition-all duration-400"
                data-testid={`case-${c.slug}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-200">
                  <img
                    src={c.cover}
                    alt={c.client}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                    {c.tags.slice(0, 2).map((t) => (
                      <span key={t} className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-white/95 text-[#0F1212] rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C87A50]">
                    Case Study · {c.industry}
                  </div>
                  <h3 className="mt-3 text-xl md:text-2xl font-bold text-[#0F1212] leading-tight">{c.client}</h3>
                  <div className="mt-3 flex items-baseline gap-3">
                    <span className="text-3xl md:text-4xl font-extrabold text-[#134E35] leading-none">{c.heroMetric}</span>
                    <span className="text-sm text-zinc-600">{c.heroMetricLabel}</span>
                  </div>
                  <p className="mt-3 text-[15px] text-zinc-600 leading-relaxed line-clamp-2">{c.summary}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#134E35] group-hover:gap-3 transition-all">
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

/* ========================= AUDIT CTA (single inline lead magnet) ========================= */
function AuditCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#0F1212] text-white relative overflow-hidden" data-testid="home-audit">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px"}} />
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" /> Free audit
            </div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold leading-[1.05] tracking-[-0.02em]">
              See how your site stacks up — in 60 seconds.
            </h2>
            <p className="mt-5 text-base md:text-lg text-zinc-400 leading-relaxed">
              A real technical + SEO audit across 20 signals — meta tags, schema, Core Web Vitals, crawl structure. PDF report lands in your inbox.
            </p>
            <div className="mt-8 space-y-2.5">
              {["No credit card required", "Takes ~5 seconds", "Full PDF report by email"].map((b) => (
                <div key={b} className="flex items-center gap-2.5 text-sm text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-[#C87A50]" />
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

/* ========================= WHY US — psychology block ========================= */
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
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Why Marketly</div>
          <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">
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
              className="p-6 md:p-7 bg-white border border-zinc-200 rounded-sm hover:border-[#134E35] transition-colors"
            >
              <div className="text-sm font-mono font-semibold text-[#134E35]">{p.n}</div>
              <h3 className="mt-5 text-lg font-bold text-[#0F1212] leading-tight">{p.t}</h3>
              <p className="mt-2.5 text-[15px] text-zinc-600 leading-relaxed">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= LATEST BLOG ========================= */
function LatestBlog() {
  const latest = BLOG_POSTS.slice(0, 3);
  return (
    <section className="py-20 md:py-28 bg-zinc-50" data-testid="home-blog">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div className="max-w-2xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">From the team</div>
            <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">
              Playbooks we actually run.
            </h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#134E35]">
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
                className="group block bg-white rounded-sm overflow-hidden border border-zinc-200 hover:border-[#134E35] hover:shadow-[0_12px_32px_-16px_rgba(19,78,53,0.2)] transition-all duration-300 h-full"
                data-testid={`blog-${b.slug}`}
              >
                <div className="aspect-[16/10] overflow-hidden bg-zinc-200">
                  <img src={b.cover} alt={b.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C87A50]">
                    {b.category} · {b.readTime}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-[#0F1212] leading-snug line-clamp-2">{b.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 line-clamp-2">{b.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================= TESTIMONIAL STRIP ========================= */
function TestimonialStrip() {
  return (
    <section className="py-20 md:py-28 bg-white" data-testid="home-testimonials">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Words from the room</div>
          <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">
            What our clients say.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {TESTIMONIALS.slice(0, 2).map((t) => (
            <div key={t.name} className="p-8 md:p-10 bg-zinc-50 rounded-sm border border-zinc-200">
              <div className="flex items-center gap-1 mb-5 text-[#C87A50]">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="text-lg md:text-[19px] text-[#0F1212] leading-snug font-medium">
                "{t.quote}"
              </blockquote>
              <div className="mt-6 pt-6 border-t border-zinc-200 flex items-center gap-4">
                <div className="h-11 w-11 rounded-full bg-[#134E35] text-white font-bold grid place-items-center">{t.initial}</div>
                <div>
                  <div className="font-bold text-[#0F1212]">{t.name}</div>
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

/* ========================= FINAL CTA ========================= */
function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#134E35] text-white relative overflow-hidden" data-testid="home-final-cta">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20" style={{backgroundImage: "radial-gradient(circle at top right, #C87A50 0%, transparent 60%)"}} />
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative">
        <div className="max-w-3xl">
          <h2 className="text-[34px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.05] tracking-[-0.02em]">
            Tell us where you want to go. We'll map the route.
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-xl leading-relaxed">
            Free 30-minute strategy call. We'll audit your current setup, tell you the 2–3 levers that will move fastest, and you decide if we're the right fit.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild data-testid="final-cta-btn" className="rounded-sm bg-[#C87A50] hover:bg-[#B16840] text-white h-12 px-6 font-semibold">
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
