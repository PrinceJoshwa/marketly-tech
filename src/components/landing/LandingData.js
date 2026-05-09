// ============= Shared data for landing page =============

export const SERVICES = [
  { num: "01", title: "Performance Marketing", desc: "Google + Meta ads engineered around quality over quantity. Every rupee tracked, every creative tested.", metric: "Avg. 4.8x ROAS sustained", tags: ["Google Ads", "Meta Ads", "YouTube", "LinkedIn"] },
  { num: "02", title: "SEO & Content Velocity", desc: "Honest, technical-first SEO. Organic traffic that compounds month over month — not a one-quarter spike.", metric: "80% avg. organic lift in 6 months", tags: ["Technical SEO", "Content", "Link Building", "Programmatic"] },
  { num: "03", title: "GMB & Local Domination", desc: "Own the 3-pack. Turn map searches into walk-ins, calls, and bookings — across every location.", metric: "+200% average footfall", tags: ["Local SEO", "Reviews", "Citations", "Multi-location"] },
  { num: "04", title: "Landing Pages & Websites", desc: "Coded or CMS — engineered for conversions, not just aesthetics. Speed, schema, UX, CRO built-in.", metric: "Avg. 3.2x conversion lift", tags: ["Next.js", "Webflow", "WordPress", "Shopify"] },
  { num: "05", title: "Creative & Design", desc: "Social, websites, brand systems, and ad creative — one voice, zero Frankenstein handoffs.", metric: "2M+ impressions / campaign", tags: ["Brand", "Social", "Video", "Motion"] },
  { num: "06", title: "Offline & OOH", desc: "Hoardings, print, retail branding, event collateral — the surfaces your customer actually touches.", metric: "60+ storefronts launched", tags: ["Hoardings", "Print", "Retail", "Events"] },
  { num: "07", title: "Products & Platforms", desc: "E-commerce, CRMs, ERP, billing — custom software for real estate, retail, interiors, automobile.", metric: "15+ products shipped", tags: ["React", "FastAPI", "Mongo", "Shopify"] },
];

export const CASE_STUDIES = [
  {
    industry: "Real Estate",
    client: "RRL Builders & Developers",
    headline: "300% qualified site-visit uplift in one quarter",
    metric: "300% ROI",
    summary: "Switched from broad-match display to tight geo-targeted search + broker retargeting. Cost per site-visit dropped 62%.",
    img: "https://images.unsplash.com/photo-1766854268133-7ac973e1ec8a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjByZWFsJTIwZXN0YXRlJTIwYXJjaGl0ZWN0dXJlJTIwZXh0ZXJpb3J8ZW58MHx8fHwxNzc3ODEzODc4fDA&ixlib=rb-4.1.0&q=85",
    span: "md:col-span-8 md:row-span-2",
  },
  {
    industry: "Interior Design",
    client: "Sunrise Designhive",
    headline: "#1 local rank in Bengaluru within 90 days",
    metric: "#1 local",
    summary: "GMB overhaul + 30 reviews + content velocity. Now the top 3-pack result for 'interior design Bengaluru'.",
    img: "https://images.unsplash.com/photo-1679862342541-e408d4f3ab80?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwyfHxpbnRlcmlvciUyMGRlc2lnbiUyMGx1eHVyeSUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzc3ODEzODc3fDA&ixlib=rb-4.1.0&q=85",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    industry: "E-commerce",
    client: "Craftroots",
    headline: "80% traffic increase — 6x ROAS sustained",
    metric: "+80% traffic",
    summary: "Programmatic category pages + fast product schema + feed optimisation. ROAS held through the quarter.",
    img: "https://images.unsplash.com/photo-1753161029114-857c9f494ccd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBmYXNoaW9uJTIwcmV0YWlsJTIwY2xvdGhpbmd8ZW58MHx8fHwxNzc3ODEzODkxfDA&ixlib=rb-4.1.0&q=85",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    industry: "Automobile",
    client: "Motobay",
    headline: "20% lead volume jump, CPL down from ₹412 → ₹238",
    metric: "+20% leads",
    summary: "Creative-first testing framework + interest-stack segmentation on Meta. Scaled while dropping blended CPL by 42%.",
    img: "https://images.unsplash.com/photo-1556333720-fd197b661343?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBhdXRvbW90aXZlfGVufDB8fHx8MTc3NzgxMzg5MXww&ixlib=rb-4.1.0&q=85",
    span: "md:col-span-6 md:row-span-1",
  },
  {
    industry: "Retail",
    client: "Arina & Co.",
    headline: "200% foot-traffic uplift, store launched with waitlist",
    metric: "+200% footfall",
    summary: "Pre-launch lookalike audiences + opening-week GMB push + outdoor banners across three neighbourhoods.",
    img: "https://images.unsplash.com/photo-1690489965043-ec15758cce71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHw0fHxpbnRlcmlvciUyMGRlc2lnbiUyMGx1eHVyeSUyMGxpdmluZyUyMHJvb218ZW58MHx8fHwxNzc3ODEzODc3fDA&ixlib=rb-4.1.0&q=85",
    span: "md:col-span-6 md:row-span-1",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Marketly didn't sell us ads. They sold us a system that compounds every month. Twelve months in, we stopped budgeting for lead-gen — the pipeline runs itself.",
    name: "Pavan Kumar",
    title: "Director",
    company: "Sunrise Designhive",
    initial: "P",
  },
  {
    quote: "Honest dashboards. Honest reporting. When something didn't work, they told us first. That's rarer than any award in this industry.",
    name: "Sunil Sharma",
    title: "CEO",
    company: "Motobay",
    initial: "S",
  },
  {
    quote: "We've worked with four agencies before. Marketly is the first one where our CMO sleeps better, not worse.",
    name: "Ritika Desai",
    title: "Head of Growth",
    company: "Craftroots",
    initial: "R",
  },
  {
    quote: "They walked into our showroom, shot the whole campaign, shipped hoardings and Meta creative from the same shoot. One team. One invoice. Zero friction.",
    name: "Aditya Rao",
    title: "Founder",
    company: "Arina & Co.",
    initial: "A",
  },
];

export const FAQS = [
  { q: "How fast can we start seeing results?",
    a: "For paid media, expect signal within 2–3 weeks and scale by week 6. For SEO, meaningful movement takes 90–120 days — anyone promising sooner is lying. We ship a 30-day plan on day 1." },
  { q: "Do you work with small businesses or only enterprise?",
    a: "Both. Our smallest active client is a two-location interior design studio; our largest does ₹180Cr+ in ARR. The approach adapts; the rigour doesn't." },
  { q: "Do you lock us into long contracts?",
    a: "No. 30-day notice, no hidden exit fees. We earn the retainer every month — that's the only contract we care about." },
  { q: "Who owns the ad accounts, content, and data?",
    a: "You do. Always. We operate inside your accounts. When we part ways, you keep everything." },
  { q: "Do you use AI for campaigns and reports?",
    a: "Yes, extensively — for creative iteration, keyword research, competitor analysis, and reporting. But every strategy decision is made by a human senior strategist. AI doesn't buy media on its own in our shop." },
  { q: "Are you really a Meta + Google Ads partner?",
    a: "Yes — certified partner on both platforms, plus AdAsia India's Marketing Innovation Award 2024. Happy to share our certificates on request." },
  { q: "What does a typical engagement cost?",
    a: "Retainers start at ₹75k/month for SEO-only and ₹1.5L/month for full-stack performance. Custom scope on project builds (websites, ERP, custom products)." },
  { q: "Can we start with just the audit?",
    a: "Absolutely — run the free audit above, then book a 30-min call. No pressure to commit to anything." },
];

export const CLIENT_LOGOS = [
  "Sunrise Designhive", "Motobay", "Craftroots", "Arina & Co.",
  "RRL Builders & Developers", "Kaya Living", "Harmony Realty", "Urbanly",
  "Nova Autos", "Terrace Retail", "Maple Interiors", "Cove Realty",
];

export const PROBLEMS = [
  {
    pain: "Three agencies. Three dashboards. Zero story.",
    promise: "One team, one dashboard, one narrative every month.",
  },
  {
    pain: "Ad spend climbs, pipeline doesn't.",
    promise: "Quality-first media buying. We cut spend that doesn't move revenue.",
  },
  {
    pain: "You rank on page 2 while competitors own the map.",
    promise: "Technical SEO + GMB overhaul until your name is the default answer.",
  },
  {
    pain: "Great creative online. Terrible in-store.",
    promise: "Campaign shot once — shipped to Meta, Google, hoardings, retail. Same voice everywhere.",
  },
];

export const PROCESS = [
  { step: "01", title: "Diagnose", desc: "Full audit: GSC, GA4, Ads, Meta, GMB, site speed, schema, competitors. No surface-level scans." },
  { step: "02", title: "Blueprint", desc: "A 90-day plan with weekly deliverables, owner names, and the exact metric each move will influence." },
  { step: "03", title: "Ship", desc: "We run the campaigns, write the content, shoot the creative, build the pages. You approve, we execute." },
  { step: "04", title: "Compound", desc: "Nightly snapshots, monthly storylines, quarterly strategy reviews. Every month better than the last." },
];

export const CREATIVE_PORTFOLIO = [
  {
    title: "Sunrise Designhive — Brand system",
    kind: "Brand Identity",
    img: "https://images.unsplash.com/photo-1634224143538-ce0221abf732?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
  },
  {
    title: "Motobay — Showroom launch",
    kind: "Campaign",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
  },
  {
    title: "Craftroots — Festival reel series",
    kind: "Motion / Social",
    img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
  },
  {
    title: "Arina & Co. — Storefront collateral",
    kind: "Retail Design",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
  },
  {
    title: "RRL Builders & Developers — Launch film",
    kind: "Video / Ad film",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
  },
  {
    title: "Harmony Realty — Brochure",
    kind: "Print / Editorial",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
  },
];

export const OFFLINE_MEDIA = [
  {
    title: "Outer Ring Road hoarding — RRL Builders & Developers",
    city: "Bengaluru",
    type: "Hoarding · 40ft",
    scale: "4 locations · 6-week run",
    img: "https://images.unsplash.com/photo-1572177812156-58036aae439c?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200",
    span: "md:col-span-7 md:row-span-2",
  },
  {
    title: "Metro station branding — Motobay",
    city: "Bengaluru",
    type: "OOH · Transit",
    scale: "12 stations",
    img: "https://images.unsplash.com/photo-1519817650390-64a93db51149?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200",
    span: "md:col-span-5",
  },
  {
    title: "Storefront window campaign — Arina & Co.",
    city: "Indiranagar",
    type: "Retail · Print",
    scale: "3 stores",
    img: "https://images.unsplash.com/photo-1555421689-491a97ff2040?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200",
    span: "md:col-span-5",
  },
  {
    title: "Newspaper spread — Craftroots Diwali",
    city: "Pan-India",
    type: "Print · Full-page",
    scale: "Times of India, 4 cities",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200",
    span: "md:col-span-7",
  },
];
