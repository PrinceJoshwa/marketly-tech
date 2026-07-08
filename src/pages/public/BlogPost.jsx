// import { useParams, Link, Navigate } from "react-router-dom";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import PublicLayout from "@/components/layout/PublicLayout";
// import { getBlogPost, BLOG_POSTS } from "@/data/blogPosts";

// export default function BlogPost() {
//   const { slug } = useParams();
//   const post = getBlogPost(slug);
//   if (!post) return <Navigate to="/blog" replace />;
//   const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

//   return (
//     <PublicLayout>
//       <div className="bg-zinc-50 border-b border-zinc-200">
//         <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-4 text-sm text-zinc-500 flex items-center gap-2">
//           <Link to="/" className="hover:text-[#134E35]">Home</Link>
//           <span>/</span>
//           <Link to="/blog" className="hover:text-[#134E35]">Blog</Link>
//           <span>/</span>
//           <span className="text-[#0F1212] font-medium line-clamp-1 max-w-md">{post.title}</span>
//         </div>
//       </div>

//       <article className="bg-white py-12 md:py-20">
//         <div className="max-w-[860px] mx-auto px-5 md:px-8">
//           <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-5">
//             {post.category} · {post.readTime}
//           </div>
//           <h1 className="text-[36px] sm:text-[44px] lg:text-[52px] font-extrabold text-[#0F1212] leading-[1.05] tracking-[-0.02em]">
//             {post.title}
//           </h1>
//           <div className="mt-6 flex items-center gap-3 text-sm text-zinc-500">
//             <div className="h-10 w-10 rounded-full bg-[#134E35] text-white font-bold grid place-items-center text-sm">{post.author[0]}</div>
//             <div>
//               <div className="font-bold text-[#0F1212]">{post.author}</div>
//               <div>{post.date}</div>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-[1100px] mx-auto px-5 md:px-8 mt-10 md:mt-14">
//           <div className="aspect-[16/9] rounded-sm overflow-hidden bg-zinc-100">
//             <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
//           </div>
//         </div>

//         <div className="max-w-[720px] mx-auto px-5 md:px-8 mt-12 md:mt-16 space-y-6" data-testid="post-body">
//           {post.content.map((block, i) => {
//             if (block.type === "h2") return <h2 key={i} className="text-2xl md:text-[28px] font-bold text-[#0F1212] leading-tight mt-10 tracking-[-0.01em]">{block.text}</h2>;
//             return <p key={i} className="text-[17px] md:text-[18px] leading-[1.75] text-zinc-700">{block.text}</p>;
//           })}
//         </div>
//       </article>

//       <section className="bg-zinc-50 border-t border-zinc-200 py-16">
//         <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//           <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
//             <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F1212]">Keep reading</h2>
//             <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#134E35]">
//               All articles <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
//           <div className="grid md:grid-cols-3 gap-5">
//             {related.map((b) => (
//               <Link key={b.slug} to={`/blog/${b.slug}`} className="group block bg-white rounded-sm overflow-hidden border border-zinc-200 hover:border-[#134E35] transition-colors">
//                 <div className="aspect-[16/10] overflow-hidden bg-zinc-100">
//                   <img src={b.cover} alt={b.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
//                 </div>
//                 <div className="p-5">
//                   <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C87A50]">{b.category}</div>
//                   <h3 className="mt-2 text-base font-bold text-[#0F1212] leading-snug line-clamp-2">{b.title}</h3>
//                 </div>
//               </Link>
//             ))}
//           </div>
//           <div className="mt-10">
//             <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-[#134E35]">
//               <ArrowLeft className="h-4 w-4" /> All articles
//             </Link>
//           </div>
//         </div>
//       </section>
//     </PublicLayout>
//   );
// }

import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PublicLayout from "@/components/layout/PublicLayout";
import { getBlogPost, BLOG_POSTS } from "@/data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPost(slug);
  if (!post) return <Navigate to="/blog" replace />;
  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <PublicLayout>
      <div className="bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-3 sm:py-4 text-xs sm:text-sm text-zinc-500 flex flex-wrap items-center gap-1.5 sm:gap-2">
          <Link to="/" className="hover:text-[#134E35]">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-[#134E35]">Blog</Link>
          <span>/</span>
          <span className="text-[#0F1212] font-medium line-clamp-1 sm:line-clamp-none max-w-full sm:max-w-md">{post.title}</span>
        </div>
      </div>

      <article className="bg-white py-10 sm:py-12 md:py-20">
        <div className="max-w-[860px] mx-auto px-5 md:px-8">
          <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4 sm:mb-5">
            {post.category} · {post.readTime}
          </div>
          <h1 className="text-3xl sm:text-[44px] lg:text-[52px] font-extrabold text-[#0F1212] leading-[1.1] sm:leading-[1.05] tracking-[-0.02em]">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-zinc-500">
            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-[#134E35] text-white font-bold grid place-items-center text-xs sm:text-sm shrink-0">{post.author[0]}</div>
            <div>
              <div className="font-bold text-[#0F1212]">{post.author}</div>
              <div>{post.date}</div>
            </div>
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto px-5 md:px-8 mt-8 sm:mt-10 md:mt-14">
          <div className="aspect-[4/3] sm:aspect-[16/9] rounded-sm overflow-hidden bg-zinc-100">
            <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="max-w-[720px] mx-auto px-5 md:px-8 mt-10 md:mt-16 space-y-5 sm:space-y-6" data-testid="post-body">
          {post.content.map((block, i) => {
            if (block.type === "h2") return <h2 key={i} className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#0F1212] leading-tight mt-8 sm:mt-10 tracking-[-0.01em]">{block.text}</h2>;
            return <p key={i} className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.7] sm:leading-[1.75] text-zinc-700">{block.text}</p>;
          })}
        </div>
      </article>

      <section className="bg-zinc-50 border-t border-zinc-200 py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F1212]">Keep reading</h2>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[#134E35]">
              All articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {related.map((b) => (
              <Link key={b.slug} to={`/blog/${b.slug}`} className="group flex flex-col bg-white rounded-sm overflow-hidden border border-zinc-200 hover:border-[#134E35] transition-colors">
                <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-zinc-100 shrink-0">
                  <img src={b.cover} alt={b.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C87A50]">{b.category}</div>
                  <h3 className="mt-2 text-[15px] sm:text-base font-bold text-[#0F1212] leading-snug line-clamp-2">{b.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 sm:mt-10">
            <Link to="/blog" className="inline-flex items-center gap-2 text-[13px] sm:text-sm font-semibold text-zinc-600 hover:text-[#134E35]">
              <ArrowLeft className="h-4 w-4" /> All articles
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}