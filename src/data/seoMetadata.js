const SITE_URL = "https://www.marketly.tech";
const SITE_NAME = "marketly.tech";
const DEFAULT_IMAGE = "https://ik.imagekit.io/j0xzq9pns/Marketly-removebg-preview.png?updatedAt=1770099778703";
const GOOGLE_SITE_VERIFICATION = "kKlPFW_HDWscXwwFGv9humJgxe0osILmGlU2-bcoWcY";

export const seoDefaults = {
  siteUrl: SITE_URL,
  siteName: SITE_NAME,
  image: DEFAULT_IMAGE,
  googleSiteVerification: GOOGLE_SITE_VERIFICATION,
  title: "Digital Marketing Agency Bangalore | Marketly Tech",
  description:
    "Looking for a digital marketing agency in Bangalore? Marketly helps businesses grow online with SEO, Google Ads, social media, content, and smart marketing strategies.",
};

export const pageSeo = {
  "/": {
    title: "Digital Marketing Agency Bangalore | Marketly Tech",
    description:
      "Looking for a digital marketing agency in Bangalore? Marketly helps businesses grow online with SEO, Google Ads, social media, content, and smart marketing strategies.",
    canonicalPath: "/",
  },
  "/services": {
    title: "Digital Marketing Services Bangalore | SEO & Ads",
    description:
      "Digital marketing company in Bangalore offering performance marketing, SEO, local SEO, Google Ads, Facebook Ads, content marketing, web design, development and landing pages.",
    canonicalPath: "/services",
  },
  "/services/seo": {
    title: "SEO Agency Bangalore | Local SEO & GMB SEO Services",
    description:
      "Get SEO services in Bangalore and Bengaluru with local SEO, GMB SEO, Google Maps SEO and social media marketing to improve visibility and attract customers.",
    canonicalPath: "/services/seo",
  },
  "/best-seo-services": {
    title: "SEO Agency Bangalore | Local SEO & GMB SEO Services",
    description:
      "Get SEO services in Bangalore and Bengaluru with local SEO, GMB SEO, Google Maps SEO and social media marketing to improve visibility and attract customers.",
    canonicalPath: "/services/seo",
  },
  "/blog": {
    title: "Marketly Journal | Digital Marketing Insights",
    description:
      "Read Marketly's latest guides and insights on digital marketing, SEO, paid ads, and business growth.",
    canonicalPath: "/blog",
  },
  "/about": {
    title: "About Marketly Tech | Digital Marketing Agency Bangalore",
    description:
      "Meet Marketly Tech, a Bangalore digital marketing agency helping businesses grow with SEO, paid ads, social media, content, website design, and marketing strategy.",
    canonicalPath: "/about",
  },
  "/contact": {
    title: "Contact Marketly Tech | Digital Marketing Agency Bangalore",
    description:
      "Contact Marketly Tech for SEO, Google Ads, Meta Ads, website design, and digital marketing services in Bangalore.",
    canonicalPath: "/contact",
  },
  "/work": {
    title: "Marketly Tech Case Studies | Digital Marketing Results",
    description:
      "Explore Marketly Tech case studies across SEO, performance marketing, Meta Ads, Google Ads, local SEO, websites, and integrated campaigns.",
    canonicalPath: "/work",
  },
  "/portfolio": {
    title: "Marketly Tech Portfolio | Creative, Web, SEO & Campaign Work",
    description:
      "View Marketly Tech portfolio work across websites, performance marketing campaigns, social media creatives, branding, print, and offline marketing.",
    canonicalPath: "/portfolio",
  },
  "/privacy": {
    title: "Privacy Policy | Marketly Tech",
    description:
      "Read Marketly Tech's privacy policy for details on how website, marketing, and client information is handled.",
    canonicalPath: "/privacy",
  },
  "/terms": {
    title: "Terms and Conditions | Marketly Tech",
    description:
      "Read the terms and conditions for using Marketly Tech's website, services, and digital marketing resources.",
    canonicalPath: "/terms",
  },
};

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`;
}
