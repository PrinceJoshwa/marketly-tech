import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
export { BLOG_POSTS, getBlogPost } from "./legacyBlogPosts";

const WORDPRESS_API = "https://blog.marketly.tech/wp-json/wp/v2/posts";
const WORDPRESS_ORIGIN = "https://blog.marketly.tech";

let cachedPosts = null;
let postsRequest = null;
const postCache = new Map();
const postRequests = new Map();

function plainText(html = "") {
  if (typeof document === "undefined") return html.replace(/<[^>]*>/g, " ").trim();
  const doc = new DOMParser().parseFromString(html, "text/html");
  return (doc.body.textContent || "").replace(/\s+/g, " ").trim();
}

function normalizePost(post) {
  const content = post.content?.rendered || "";
  const excerpt = plainText(post.excerpt?.rendered || content);
  const categories = post._embedded?.["wp:term"]?.[0] || [];
  const category = categories[0]?.name;
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  const words = plainText(content).split(/\s+/).filter(Boolean).length;

  return {
    id: post.id,
    slug: post.slug,
    title: plainText(post.title?.rendered),
    category: !category || category === "Uncategorized" ? "Journal" : category,
    readTime: `${Math.max(1, Math.ceil(words / 225))} min read`,
    date: post.date?.slice(0, 10) || "",
    author: post._embedded?.author?.[0]?.name || "Marketly",
    excerpt,
    seoDescription: excerpt.length > 160 ? `${excerpt.slice(0, 157).trimEnd()}...` : excerpt,
    cover: media?.source_url || "",
    content,
    canonicalUrl: post.link || `${WORDPRESS_ORIGIN}/${post.slug}/`,
  };
}

async function requestPosts(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`WordPress returned ${response.status}`);
  return response.json();
}

export async function fetchBlogPosts() {
  if (cachedPosts) return cachedPosts;
  if (!postsRequest) {
    postsRequest = (async () => {
      const posts = [];
      let page = 1;
      let totalPages = 1;

      do {
        const response = await fetch(`${WORDPRESS_API}?per_page=100&page=${page}&_embed`);
        if (!response.ok) throw new Error(`WordPress returned ${response.status}`);
        totalPages = Number(response.headers.get("X-WP-TotalPages")) || 1;
        posts.push(...(await response.json()));
        page += 1;
      } while (page <= totalPages);

      cachedPosts = posts.map(normalizePost);
      cachedPosts.forEach((post) => postCache.set(post.slug, post));
      return cachedPosts;
    })().catch((error) => {
      postsRequest = null;
      throw error;
    });
  }
  return postsRequest;
}

export async function fetchBlogPost(slug) {
  if (postCache.has(slug)) return postCache.get(slug);
  if (!postRequests.has(slug)) {
    const url = `${WORDPRESS_API}?slug=${encodeURIComponent(slug)}&_embed`;
    postRequests.set(slug, requestPosts(url).then((posts) => {
      const post = posts[0] ? normalizePost(posts[0]) : null;
      if (post) postCache.set(slug, post);
      return post;
    }).catch((error) => {
      postRequests.delete(slug);
      throw error;
    }));
  }
  return postRequests.get(slug);
}

export function useBlogPosts() {
  const [posts, setPosts] = useState(cachedPosts || []);
  const [loading, setLoading] = useState(!cachedPosts);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    fetchBlogPosts().then((nextPosts) => {
      if (active) {
        setPosts(nextPosts);
        setLoading(false);
      }
    }).catch((reason) => {
      if (active) {
        setError(reason);
        setLoading(false);
      }
    });
    return () => { active = false; };
  }, []);

  return { posts, loading, error };
}

export function useBlogPost(slug) {
  const [post, setPost] = useState(() => postCache.get(slug) || null);
  const [loading, setLoading] = useState(() => Boolean(slug && !postCache.has(slug)));
  const [error, setError] = useState(null);
  const [resolvedSlug, setResolvedSlug] = useState(slug);

  useEffect(() => {
    let active = true;
    if (!slug) return undefined;
    setResolvedSlug(slug);
    setPost(postCache.get(slug) || null);
    setLoading(!postCache.has(slug));
    setError(null);
    fetchBlogPost(slug).then((nextPost) => {
      if (active) {
        setPost(nextPost);
        setLoading(false);
      }
    }).catch((reason) => {
      if (active) {
        setError(reason);
        setLoading(false);
      }
    });
    return () => { active = false; };
  }, [slug]);

  const isCurrent = resolvedSlug === slug;
  return {
    post: isCurrent ? post : null,
    loading: isCurrent ? loading : Boolean(slug),
    error: isCurrent ? error : null,
  };
}

export function sanitizeBlogContent(html) {
  const clean = DOMPurify.sanitize(html || "");
  const container = document.createElement("div");
  container.innerHTML = clean;

  container.querySelectorAll("a[href]").forEach((link) => {
    const url = new URL(link.getAttribute("href"), WORDPRESS_ORIGIN);
    if (url.origin === WORDPRESS_ORIGIN) {
      const path = url.pathname.replace(/^\/+|\/+$/g, "");
      if (path && !path.includes("/")) link.href = `/blog/${path}${url.hash}`;
      else link.href = url.href;
    } else {
      link.rel = "noopener noreferrer";
    }
  });

  container.querySelectorAll("img[src]").forEach((image) => {
    image.loading = "lazy";
    const src = image.getAttribute("src");
    if (src.startsWith("/")) image.src = `${WORDPRESS_ORIGIN}${src}`;
  });

  return container.innerHTML;
}
