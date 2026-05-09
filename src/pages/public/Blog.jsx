import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import PublicLayout from "@/components/layout/PublicLayout";
import { BLOG_POSTS } from "@/data/blogPosts";

const CATEGORIES = ["All", "Performance Marketing", "Local SEO", "Creative / Meta Ads", "SEO / CRO", "Integrated Campaigns"];

export default function Blog() {
  return (
    <PublicLayout>
      <section className="bg-zinc-50 border-b border-zinc-200 py-16 md:py-24" data-testid="blog-hero">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Journal</div>
          <h1 className="text-[42px] sm:text-[52px] lg:text-[64px] font-extrabold leading-[1.02] tracking-[-0.02em] text-[#0F1212] max-w-3xl">
            Playbooks, frameworks, and field notes from the team.
          </h1>
          <p className="mt-6 text-lg text-zinc-600 max-w-2xl">
            No fluff pieces. No AI-rewrites of 2019 articles. Just the actual playbooks we run on accounts — written by the people running them.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <span key={c} className={`px-3.5 py-1.5 text-xs font-semibold rounded-sm border ${c === "All" ? "bg-[#0F1212] text-white border-[#0F1212]" : "bg-white border-zinc-300 text-zinc-700"}`}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      {BLOG_POSTS[0] && (
        <section className="py-12 md:py-16 bg-white" data-testid="blog-featured">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10">
            <Link to={`/blog/${BLOG_POSTS[0].slug}`} className="group grid md:grid-cols-12 gap-8 bg-white rounded-sm overflow-hidden hover:shadow-[0_16px_40px_-20px_rgba(19,78,53,0.2)] transition-all duration-400">
              <div className="md:col-span-7 aspect-[16/10] md:aspect-auto overflow-hidden bg-zinc-100 rounded-sm">
                <img src={BLOG_POSTS[0].cover} alt={BLOG_POSTS[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <div className="md:col-span-5 md:py-8 md:pr-4 flex flex-col justify-center">
                <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C87A50]">
                  Featured · {BLOG_POSTS[0].category} · {BLOG_POSTS[0].readTime}
                </div>
                <h2 className="mt-3 text-2xl md:text-3xl lg:text-[32px] font-extrabold text-[#0F1212] leading-tight tracking-[-0.01em]">{BLOG_POSTS[0].title}</h2>
                <p className="mt-4 text-base md:text-lg text-zinc-600 leading-relaxed">{BLOG_POSTS[0].excerpt}</p>
                <div className="mt-6 flex items-center gap-3 text-sm text-zinc-500">
                  <span>{BLOG_POSTS[0].author}</span>
                  <span>·</span>
                  <span>{BLOG_POSTS[0].date}</span>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#134E35] group-hover:gap-3 transition-all">
                  Read article <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Article grid */}
      <section className="py-12 md:py-20 bg-zinc-50 border-t border-zinc-200" data-testid="blog-grid">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(1).map((b, i) => (
              <motion.div
                key={b.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Link to={`/blog/${b.slug}`} className="group block bg-white rounded-sm overflow-hidden border border-zinc-200 hover:border-[#134E35] transition-colors h-full" data-testid={`blog-card-${b.slug}`}>
                  <div className="aspect-[16/10] overflow-hidden bg-zinc-100">
                    <img src={b.cover} alt={b.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C87A50]">
                      {b.category} · {b.readTime}
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-[#0F1212] leading-snug line-clamp-2">{b.title}</h3>
                    <p className="mt-2 text-sm text-zinc-600 line-clamp-2">{b.excerpt}</p>
                    <div className="mt-4 text-xs text-zinc-500">{b.author} · {b.date}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
