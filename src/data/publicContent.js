// Shared data for public pages: services, clients, testimonials, FAQs.

export const SERVICES = [
  {
    slug: "performance-marketing",
    num: "01",
    title: "Performance Marketing",
    short: "Google + Meta ads engineered around quality over quantity.",
    desc: "Every rupee tracked. Every creative tested. We run paid media that compounds — not campaigns that need resurrecting every month.",
    metric: "Avg. 4.8× ROAS",
    includes: ["Google Ads (Search / PMax / YouTube)", "Meta Ads (Facebook + Instagram)", "LinkedIn Ads", "Creative testing frameworks", "Conversion tracking + offline uploads"],
  },
  {
    slug: "seo",
    num: "02",
    title: "SEO & Content Velocity",
    short: "Honest, technical-first SEO that compounds.",
    desc: "Organic traffic that grows month over month — not a one-quarter spike. Technical SEO, programmatic content, schema, link building, the boring work done right.",
    metric: "80% avg. lift in 6 months",
    includes: ["Technical SEO audit + fixes", "Programmatic content (category/location)", "Editorial content velocity", "Schema + Core Web Vitals", "Link building + digital PR"],
  },
  {
    slug: "gmb-local",
    num: "03",
    title: "GMB & Local Ranking",
    short: "Own the 3-pack. Turn map searches into walk-ins.",
    desc: "60% of local SEO is GMB hygiene. We handle the profile, the review velocity, and the citations so your business is the default answer for local queries.",
    metric: "+200% average footfall",
    includes: ["GMB profile overhaul", "Review-generation workflows", "Citation cleanup (40+ directories)", "Multi-location management", "Local landing pages"],
  },
  {
    slug: "websites",
    num: "04",
    title: "Landing Pages & Websites",
    short: "Coded or CMS — engineered for conversions.",
    desc: "Not just pretty. Fast, schema-ready, conversion-optimized. Built on Next.js, Webflow, Shopify, or WordPress depending on what your team can maintain.",
    metric: "Avg. 3.2× conversion lift",
    includes: ["Next.js / React builds", "Webflow / WordPress / Shopify", "Landing-page CRO sprints", "Core Web Vitals optimization", "Headless commerce"],
  },
  {
    slug: "creative",
    num: "05",
    title: "Creative & Design",
    short: "One voice across social, websites, and ad creative.",
    desc: "Social content, brand systems, ad creative, video, motion — all produced by one team. Zero 'Frankenstein agency' effect.",
    metric: "2M+ impressions per campaign",
    includes: ["Brand identity & systems", "Social content (reels, carousels, posts)", "Ad creative (statics + video)", "Motion & 2D animation", "Photography & video shoots"],
  },
  {
    slug: "offline",
    num: "06",
    title: "Offline Media & OOH",
    short: "Hoardings, transit, print, retail branding.",
    desc: "Your customer doesn't live online. Neither does our creative. One campaign, shot once, shipped to Meta, Google, a 40-ft hoarding, and your storefront window.",
    metric: "60+ storefronts launched",
    includes: ["OOH / hoardings", "Transit & metro branding", "Print campaigns", "Retail / storefront branding", "Event collateral"],
  },
  {
    slug: "products",
    num: "07",
    title: "Products & Platforms",
    short: "Custom software for real estate, retail, interiors, auto.",
    desc: "E-commerce, CRMs, ERP, billing, booking. When your industry needs a tool that doesn't exist off-the-shelf, we build it.",
    metric: "15+ products shipped",
    includes: ["E-commerce platforms", "Custom CRMs", "ERP / billing / PM tools", "Mobile apps (React Native)", "API integrations"],
  },
];

export const CLIENT_LOGOS = [
  "Sunrise Designhive", "Motobay", "Craftroots", "Arina & Co.",
  "RRL Builders & Developers", "Kaya Living", "Harmony Realty", "Urbanly",
  "Nova Autos", "Terrace Retail", "Maple Interiors", "Cove Realty",
];

export const TESTIMONIALS = [
  {
    quote: "Marketly didn't sell us ads. They sold us a system that compounds every month. Twelve months in, we stopped budgeting for lead-gen — the pipeline runs itself.",
    name: "Pavan Kumar",
    title: "Director, Sunrise Designhive",
    initial: "P",
  },
  {
    quote: "Honest dashboards. Honest reporting. When something didn't work, they told us first. That's rarer than any award in this industry.",
    name: "Sunil Sharma",
    title: "CEO, Motobay",
    initial: "S",
  },
  {
    quote: "We've worked with four agencies before. Marketly is the first one where our CMO sleeps better, not worse.",
    name: "Ritika Desai",
    title: "Head of Growth, Craftroots",
    initial: "R",
  },
  {
    quote: "They walked into our showroom, shot the whole campaign, shipped hoardings and Meta creative from the same shoot. One team. Zero friction.",
    name: "Aditya Rao",
    title: "Founder, Arina & Co.",
    initial: "A",
  },
];

export const FAQS = [
  { q: "How fast can we start seeing results?", a: "For paid media, expect signal within 2–3 weeks and scale by week 6. For SEO, meaningful movement takes 90–120 days — anyone promising sooner is lying. We ship a 30-day plan on day 1." },
  { q: "Do you work with small businesses or only enterprise?", a: "Both. Our smallest active client is a two-location interior design studio; our largest does ₹180Cr+ in ARR. The approach adapts; the rigour doesn't." },
  { q: "Do you lock us into long contracts?", a: "No. 30-day notice, no hidden exit fees. We earn the retainer every month." },
  { q: "Who owns the ad accounts, content, and data?", a: "You do. Always. We operate inside your accounts. When we part ways, you keep everything." },
  { q: "Are you really a Meta + Google Ads partner?", a: "Yes — certified partner on both platforms, plus AdAsia India's Marketing Innovation Award 2024." },
  { q: "What does a typical engagement cost?", a: "Retainers start at ₹75k/month for SEO-only and ₹1.5L/month for full-stack performance. Custom scope on project builds." },
];

export const AWARDS = [
  { k: "AdAsia India 2024", v: "Marketing Innovation — Best Performance Agency" },
  { k: "Google Ads Partner", v: "Search + YouTube certified" },
  { k: "Meta Business Partner", v: "Performance tier" },
  { k: "ISO 27001", v: "Data & privacy compliant" },
];

export const HERO_STATS = [
  { v: "50+", k: "Brands served" },
  { v: "₹42Cr+", k: "Ad spend managed" },
  { v: "94%", k: "Client retention" },
  { v: "12 yrs", k: "In business" },
];
