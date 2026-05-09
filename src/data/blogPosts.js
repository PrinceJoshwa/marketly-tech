// Blog post library for the public site.
// Content is hardcoded for now; when the team wants to publish from Admin,
// wire to an /api/public/blog endpoint — keep this shape as the contract.

export const BLOG_POSTS = [
  {
    slug: "how-we-dropped-cpl-for-a-real-estate-client",
    title: "How we dropped CPL 62% for a real-estate client in one quarter",
    category: "Performance Marketing",
    readTime: "6 min read",
    date: "2026-04-18",
    author: "Ramya Iyer",
    excerpt: "The full playbook: from scrapping broad-match display to broker retargeting, landing page rebuilds, and weekly creative rotation.",
    cover: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600",
    content: [
      { type: "p", text: "Most real-estate digital campaigns die the same death: broad-match display, bloated lookalikes, and zero post-lead attribution. Here's how we rebuilt the pipeline for RRL Builders & Developers in 90 days." },
      { type: "h2", text: "The diagnosis" },
      { type: "p", text: "When we took over the account, the client was spending ₹14L/month on display. Cost per site-visit was ₹4,200. Conversion rate at site was 6.1%. We turned off 40% of spend in week 1." },
      { type: "h2", text: "What we changed" },
      { type: "p", text: "Three things: (1) locked-geo intent campaigns on Google Search + Meta; (2) broker retargeting audiences pulled from CRM stage data; (3) landing pages rebuilt with sub-2s LCP." },
      { type: "h2", text: "The outcome" },
      { type: "p", text: "90 days later: 300% uplift in qualified site-visits, CPL down 62%, ROAS stabilized at 4.6x, walk-in-to-booking conversion jumped to 18%." },
    ],
  },
  {
    slug: "owning-the-3-pack-local-seo",
    title: "Owning the 3-pack: a 90-day local SEO blueprint",
    category: "Local SEO",
    readTime: "5 min read",
    date: "2026-03-27",
    author: "Karthik Menon",
    excerpt: "GMB-first playbook we use for every local client. Includes review-velocity workflow, citation cleanup, and category tuning.",
    cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600",
    content: [
      { type: "p", text: "Local SEO is 60% GMB hygiene, 30% review velocity, 10% on-page. Get those right, the 3-pack is yours." },
      { type: "h2", text: "Step 1: audit the profile" },
      { type: "p", text: "Category, service areas, photos (120+ ideal), posts cadence, Q&A, attributes. If any of these are stale, you're losing points you don't need to lose." },
      { type: "h2", text: "Step 2: fix review velocity" },
      { type: "p", text: "Post-delivery WhatsApp flow with a direct review link is the single highest-ROI workflow we've shipped. Expect 40%+ review conversion." },
    ],
  },
  {
    slug: "creative-rotation-framework-meta-ads",
    title: "The weekly creative-rotation framework we run on every Meta account",
    category: "Creative / Meta Ads",
    readTime: "7 min read",
    date: "2026-03-12",
    author: "Aisha Verma",
    excerpt: "Why 5 new variants a Monday isn't overkill. A practical framework for creative testing with 72-hour performance gates.",
    cover: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600",
    content: [
      { type: "p", text: "Creative fatigue is the #1 reason Meta accounts plateau. We built a framework to prevent it." },
      { type: "h2", text: "The weekly cadence" },
      { type: "p", text: "Every Monday: 5 new variants per active ad set. Not 5 tweaks — 5 genuinely different hooks. Test for 72 hours, scale winners, kill the rest." },
    ],
  },
  {
    slug: "offline-meets-online-one-campaign",
    title: "Shoot once, ship everywhere: offline + online from a single campaign",
    category: "Integrated Campaigns",
    readTime: "4 min read",
    date: "2026-02-22",
    author: "Ramya Iyer",
    excerpt: "How we design campaigns so one shoot feeds hoardings, Meta, Google, reels, and retail — without the 'Frankenstein agency' effect.",
    cover: "https://images.unsplash.com/photo-1572177812156-58036aae439c?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600",
    content: [
      { type: "p", text: "When your agencies are siloed, your brand looks like three different companies. Here's the playbook we use to avoid that." },
    ],
  },
  {
    slug: "the-honest-audit-framework",
    title: "The 20-signal website audit we run before every proposal",
    category: "SEO / CRO",
    readTime: "8 min read",
    date: "2026-02-04",
    author: "Karthik Menon",
    excerpt: "Title, meta, H1, schema, OG, Core Web Vitals, internal links, word count, image alts, TTFB — here's what each signal means and how we score it.",
    cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600",
    content: [
      { type: "p", text: "We run the same 20-signal audit on every new prospect. It's boring. It works." },
    ],
  },
  {
    slug: "ad-spend-vs-pipeline-why-they-diverge",
    title: "Ad spend climbs, pipeline doesn't: why the two diverge",
    category: "Performance Marketing",
    readTime: "6 min read",
    date: "2026-01-15",
    author: "Aisha Verma",
    excerpt: "A tour through the 6 most common reasons your budget is going up and your pipeline isn't — and how to fix each one.",
    cover: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600",
    content: [
      { type: "p", text: "If you've raised ad spend this quarter but pipeline is flat, one of these six things is almost certainly true." },
    ],
  },
];

export const getBlogPost = (slug) => BLOG_POSTS.find((b) => b.slug === slug);
