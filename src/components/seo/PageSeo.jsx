import { Helmet } from "react-helmet-async";
import { useLocation, matchPath } from "react-router-dom";
import { getBlogPost, useBlogPost } from "@/data/blogPosts";
import { CASE_STUDIES, getCaseStudy } from "@/data/caseStudies";
import { absoluteUrl, pageSeo, seoDefaults } from "@/data/seoMetadata";

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

function getDynamicSeo(pathname, blogPost) {
  const blogMatch = matchPath({ path: "/blog/:slug", end: true }, pathname);
  if (blogMatch?.params?.slug) {
    if (blogPost && Array.isArray(blogPost.content)) {
      return {
        title: `${blogPost.title} | Marketly Tech`,
        description: blogPost.excerpt || seoDefaults.description,
        canonicalPath: `/blog/${blogPost.slug}`,
        image: blogPost.cover,
        type: "article",
      };
    }
    return {
      title: blogPost ? `${blogPost.title} | Marketly Tech` : "Marketly Journal",
      description: blogPost?.seoDescription || pageSeo["/blog"].description,
      canonicalUrl: blogPost?.canonicalUrl || `https://blog.marketly.tech/${blogMatch.params.slug}/`,
      image: blogPost?.cover,
      type: "article",
    };
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

function getSeoForPath(pathname, blogPost) {
  const normalizedPath = normalizePath(pathname);
  return (
    getDynamicSeo(normalizedPath, blogPost) ||
    pageSeo[normalizedPath] ||
    {
      ...seoDefaults,
      canonicalPath: normalizedPath,
    }
  );
}

export default function PageSeo() {
  const location = useLocation();
  const blogMatch = matchPath({ path: "/blog/:slug", end: true }, normalizePath(location.pathname));
  const { post: blogPost } = useBlogPost(blogMatch?.params?.slug);
  const seo = getSeoForPath(location.pathname, blogPost || getBlogPost(blogMatch?.params?.slug));
  const canonicalUrl = absoluteUrl(seo.canonicalUrl || seo.canonicalPath);
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
    ...CASE_STUDIES.map((study) => `/work/${study.slug}`),
  ];
}
