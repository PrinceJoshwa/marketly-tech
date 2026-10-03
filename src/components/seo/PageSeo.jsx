import { Helmet } from "react-helmet-async";
import { useLocation, matchPath } from "react-router-dom";
import { BLOG_POSTS, getBlogPost } from "@/data/blogPosts";
import { CASE_STUDIES, getCaseStudy } from "@/data/caseStudies";
import { absoluteUrl, pageSeo, seoDefaults } from "@/data/seoMetadata";

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

function getDynamicSeo(pathname) {
  const blogMatch = matchPath({ path: "/blog/:slug", end: true }, pathname);
  if (blogMatch?.params?.slug) {
    const post = getBlogPost(blogMatch.params.slug);
    if (post) {
      return {
        title: `${post.title} | Marketly Tech`,
        description: post.excerpt || seoDefaults.description,
        canonicalPath: `/blog/${post.slug}`,
        image: post.cover,
        type: "article",
      };
    }
  }

  const caseStudyMatch = matchPath({ path: "/work/:slug", end: true }, pathname);
  if (caseStudyMatch?.params?.slug) {
    const study = getCaseStudy(caseStudyMatch.params.slug);
    if (study) {
      return {
        title: `${study.client} Case Study | Marketly Tech`,
        description: study.summary || seoDefaults.description,
        canonicalPath: `/work/${study.slug}`,
        image: study.cover,
        type: "article",
      };
    }
  }

  return null;
}

function getSeoForPath(pathname) {
  const normalizedPath = normalizePath(pathname);
  return (
    getDynamicSeo(normalizedPath) ||
    pageSeo[normalizedPath] ||
    {
      ...seoDefaults,
      canonicalPath: normalizedPath,
    }
  );
}

export default function PageSeo() {
  const location = useLocation();
  const seo = getSeoForPath(location.pathname);
  const canonicalUrl = absoluteUrl(seo.canonicalPath);
  const imageUrl = seo.image || seoDefaults.image;
  const pageType = seo.type || "website";

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:site_name" content={seoDefaults.siteName} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content={pageType} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}

export function getKnownSeoPaths() {
  return [
    ...Object.keys(pageSeo),
    ...BLOG_POSTS.map((post) => `/blog/${post.slug}`),
    ...CASE_STUDIES.map((study) => `/work/${study.slug}`),
  ];
}
