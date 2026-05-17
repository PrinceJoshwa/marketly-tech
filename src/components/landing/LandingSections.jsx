import { motion } from "motion/react";
import { ArrowRight, Award, Trophy, CheckCircle2, Sparkles, ArrowUpRight } from "lucide-react";
import { CREATIVE_PORTFOLIO, OFFLINE_MEDIA, PROBLEMS, PROCESS, CLIENT_LOGOS } from "./LandingData";

// ======================================================
// Reusable overline label (uppercase tiny mono text)
// ======================================================
export function Overline({ children, tone = "copper" }) {
  const c = tone === "copper" ? "text-copper" : tone === "white" ? "text-copper" : "text-copper";
  return (
    <div className={`text-[11px] font-mono font-medium uppercase tracking-[0.28em] ${c} flex items-center gap-2.5`}>
      <span className="inline-block h-px w-8 bg-copper/70" />
      {children}
    </div>
  );
}

// ======================================================
// PARTNER BAR — Big proud credibility block
// ======================================================
export function PartnerBar() {
  const items = [
    { label: "Google Ads", sub: "Certified Partner · 2024", icon: "G" },
    { label: "Meta Business", sub: "Partner · Performance", icon: "M" },
    { label: "AdAsia India", sub: "Marketing Innovation 2025", icon: "★" },
    { label: "AdAsia India", sub: "Global Iconic Excellence Award 2025", icon: "★" }
  ];
  return (
    <section className="bg-ink text-white py-16 md:py-20 border-y border-ink/80" data-testid="partner-bar">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-px bg-white/10">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] }}
              className="bg-ink p-8 md:p-10 flex items-start gap-5 group hover:bg-bottle-deep transition-colors duration-500"
            >
              <div className="h-14 w-14 shrink-0 grid place-items-center border border-copper/40 text-copper font-editorial text-3xl italic group-hover:border-copper group-hover:bg-copper/10 transition-all">
                {it.icon}
              </div>
              <div>
                <div className="font-editorial italic text-2xl md:text-[28px] text-white leading-none">{it.label}</div>
                <div className="mt-2 text-[11px] font-mono uppercase tracking-[0.2em] text-white/50">{it.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======================================================
// CLIENT MARQUEE — infinite scroll logos
// ======================================================
export function ClientMarquee() {
  const row = [...CLIENT_LOGOS, ...CLIENT_LOGOS]; // duplicate for seamless loop
  return (
    <section className="py-16 md:py-20 bg-white border-y border-bone-border overflow-hidden" data-testid="client-marquee">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <Overline>Trusted by teams at</Overline>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-editorial italic text-3xl md:text-5xl text-ink/25 hover:text-bottle transition-colors duration-300 shrink-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======================================================
// PROBLEM → PROMISE — psychological empathy section
// ======================================================
export function ProblemPromise() {
  return (
    <section className="py-24 md:py-32 bg-bone" data-testid="problem-promise">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5"
          >
            <Overline>Why Marketly</Overline>
            <h2 className="mt-6 font-display font-light text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
              You don't need another vendor.<br />
              <span className="font-editorial italic text-bottle">You need a team that compounds.</span>
            </h2>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed">
              Most agencies solve a single problem and stop. Marketly sits across your entire marketing stack — paid, organic, local, creative, offline — so every decision reinforces the next one.
            </p>
          </motion.div>
          <div className="md:col-span-7 space-y-px bg-bone-border">
            {PROBLEMS.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-white p-8 md:p-10 grid md:grid-cols-2 gap-6 md:gap-10 group hover:bg-bottle-light transition-colors duration-500"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-ink-soft mb-3">You today</div>
                  <p className="font-editorial italic text-xl md:text-2xl text-ink leading-snug">{p.pain}</p>
                </div>
                <div className="border-l border-bone-border pl-6 md:pl-10">
                  <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-bottle mb-3 flex items-center gap-1.5">
                    <ArrowRight className="h-3 w-3" /> With Marketly
                  </div>
                  <p className="font-display text-xl md:text-2xl text-ink leading-snug">{p.promise}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ======================================================
// AWARD SPOTLIGHT — dedicated section
// ======================================================
export function AwardSpotlight() {
  return (
    <section className="relative py-24 md:py-32 bg-ink text-white overflow-hidden" data-testid="award-spotlight">
      <div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: "radial-gradient(circle at 30% 30%, rgba(200,122,80,0.5) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(19,78,53,0.6) 0%, transparent 60%)"}} />
      <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "80px 80px"}} />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          className="md:col-span-5"
        >
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-copper/20 via-transparent to-bottle/30 border border-white/10 p-12 grid place-items-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px"}} />
              <Trophy className="h-40 w-40 md:h-56 md:w-56 text-copper relative z-10" strokeWidth={0.8} />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="font-editorial italic text-5xl md:text-6xl text-white/90 leading-none">2024</div>
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-copper text-right">
                  AdAsia<br />India
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="md:col-span-7"
        >
          <Overline>Recognition</Overline>
          <h2 className="mt-6 font-display font-light text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tight text-white">
            Marketing Innovation<br />
            <span className="font-editorial italic text-copper">Award Winner.</span>
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl">
            Awarded by AdAsia India at the 2024 Performance Marketing Summit for our work turning a struggling real-estate launch into a 300% qualified-lead story — using a single campaign system that spanned Meta, Google, and offline hoardings.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-px bg-white/10">
            {[
              { k: "Meta Business Partner", v: "Performance tier" },
              { k: "Google Ads Partner", v: "Search + YouTube" },
            ].map((b) => (
              <div key={b.k} className="bg-ink p-5">
                <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-copper">{b.k}</div>
                <div className="font-display text-lg text-white mt-1.5">{b.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ======================================================
// PROCESS — 4-step editorial timeline
// ======================================================
export function Process() {
  return (
    <section className="py-24 md:py-32 bg-white" data-testid="process">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16">
          <Overline>How we work</Overline>
          <h2 className="mt-6 font-display font-light text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
            Four steps. <span className="font-editorial italic text-bottle">Zero Frankenstein handoffs.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-px bg-bone-border border border-bone-border">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-8 md:p-10 group hover:bg-bottle-light transition-colors duration-500 relative"
            >
              <div className="font-editorial italic text-6xl text-bottle/20 group-hover:text-bottle transition-colors duration-500 leading-none">
                {p.step}
              </div>
              <h3 className="font-display text-2xl text-ink mt-6 leading-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">{p.desc}</p>
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="h-4 w-4 text-bottle" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======================================================
// CREATIVE PORTFOLIO — gallery
// ======================================================
export function CreativePortfolio() {
  return (
    <section className="py-24 md:py-32 bg-bone" data-testid="creative-portfolio">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
          <div className="max-w-2xl">
            <Overline>Creative showcase</Overline>
            <h2 className="mt-6 font-display font-light text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
              Brand films, motion,<br />
              <span className="font-editorial italic text-bottle">editorial, design systems.</span>
            </h2>
          </div>
          <a href="#contact" className="text-xs font-semibold uppercase tracking-[0.18em] text-bottle hover:text-bottle-hover flex items-center gap-2 font-mono">
            Commission a project <ArrowRight className="h-3 w-3" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {CREATIVE_PORTFOLIO.map((c, i) => (
            <motion.a
              key={c.title}
              href="#contact"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`relative group block overflow-hidden bg-ink aspect-[4/5] ${i === 0 ? "md:col-span-2 md:row-span-2 md:aspect-auto" : ""}`}
              data-testid={`creative-${i}`}
            >
              <img
                src={c.img}
                alt={c.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between text-white">
                <div className="self-end">
                  <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-copper">{c.kind}</div>
                  <div className="font-editorial italic text-xl md:text-2xl mt-1.5 leading-tight">{c.title}</div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======================================================
// OFFLINE MEDIA — banners, hoardings, print
// ======================================================
export function OfflineMedia() {
  return (
    <section id="offline-media" className="py-24 md:py-32 bg-white" data-testid="offline-media">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 mb-14 items-end">
          <div className="md:col-span-7">
            <Overline>Offline & Out-of-Home</Overline>
            <h2 className="mt-6 font-display font-light text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
              Hoardings, transit, print,<br />
              <span className="font-editorial italic text-bottle">retail branding.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pl-10">
            <p className="text-lg text-ink-soft leading-relaxed">
              Your customer doesn't live online. Neither does our creative. One campaign — shot once, shipped to Meta, Google, a 40ft hoarding on Outer Ring Road, and your storefront window.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[240px] gap-4">
          {OFFLINE_MEDIA.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`relative group overflow-hidden bg-ink flex items-end ${m.span}`}
              data-testid={`offline-${i}`}
            >
              <img
                src={m.img}
                alt={m.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10 p-6 md:p-8 text-white w-full">
                <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-copper mb-2">
                  <span>{m.type}</span>
                  <span className="h-px w-4 bg-copper/50" />
                  <span className="text-white/70">{m.city}</span>
                </div>
                <div className="font-editorial italic text-xl md:text-2xl leading-snug max-w-md">{m.title}</div>
                <div className="mt-3 text-xs text-white/70 font-mono">{m.scale}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 border-t border-bone-border pt-8 grid md:grid-cols-4 gap-6">
          {[
            { k: "60+", v: "Storefronts launched" },
            { k: "40+", v: "Hoardings live this year" },
            { k: "12", v: "Metro stations branded" },
            { k: "9", v: "Print titles run with" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-3xl md:text-4xl text-bottle">{s.k}</div>
              <div className="mt-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-ink-soft">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======================================================
// INLINE LEAD MAGNET WRAPPER — section label for each tool placement
// ======================================================
export function InlineLeadMagnet({ tag, title, subtitle, children, id, tone = "light" }) {
  const isDark = tone === "dark";
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${isDark ? "bg-bottle-deep text-white" : "bg-bone"} relative overflow-hidden`}
      data-testid={`inline-lm-${id}`}
    >
      {isDark && (
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px"}} />
      )}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="md:col-span-5">
            <Overline>{tag}</Overline>
            <h2 className={`mt-6 font-display font-light text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight ${isDark ? "text-white" : "text-ink"}`}>
              {title}
            </h2>
            <p className={`mt-5 text-base md:text-lg leading-relaxed ${isDark ? "text-white/70" : "text-ink-soft"}`}>
              {subtitle}
            </p>
            <div className={`mt-8 flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] ${isDark ? "text-white/60" : "text-ink-soft"}`}>
              <Sparkles className="h-3.5 w-3.5 text-copper" />
              No credit card · Report in your inbox
            </div>
          </div>
          <div className="md:col-span-7">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
