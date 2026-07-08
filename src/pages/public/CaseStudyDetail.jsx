// import { useParams, Link, Navigate } from "react-router-dom";
// import { motion } from "motion/react";
// import { ArrowLeft, ArrowRight, CheckCircle2, Star } from "lucide-react";
// import PublicLayout from "@/components/layout/PublicLayout";
// import { getCaseStudy, CASE_STUDIES } from "@/data/caseStudies";

// export default function CaseStudyDetail() {
//   const { slug } = useParams();
//   const c = getCaseStudy(slug);
//   if (!c) return <Navigate to="/work" replace />;
//   const next = CASE_STUDIES.find((x) => x.slug === c.ctaNext) || CASE_STUDIES[0];

//   return (
//     <PublicLayout>
//       {/* Breadcrumb */}
//       <div className="bg-zinc-50 border-b border-zinc-200">
//         <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-4 text-sm text-zinc-500 flex items-center gap-2">
//           <Link to="/" className="hover:text-[#134E35]">Home</Link>
//           <span>/</span>
//           <Link to="/work" className="hover:text-[#134E35]">Work</Link>
//           <span>/</span>
//           <span className="text-[#0F1212] font-medium">{c.client}</span>
//         </div>
//       </div>

//       {/* Hero */}
//       <section className="bg-white py-12 md:py-20" data-testid="case-hero">
//         <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//           <div className="grid lg:grid-cols-12 gap-10 items-start">
//             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-7">
//               <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Case Study · {c.industry}</div>
//               <h1 className="text-[40px] sm:text-[52px] lg:text-[64px] font-extrabold leading-[1.02] tracking-[-0.02em] text-[#0F1212]">
//                 {c.client}
//               </h1>
//               <p className="mt-5 text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl">
//                 {c.summary}
//               </p>
//               <div className="mt-6 flex flex-wrap gap-2">
//                 {c.tags.map((t) => (
//                   <span key={t} className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-700 rounded-sm">{t}</span>
//                 ))}
//               </div>
//             </motion.div>
//             <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="lg:col-span-5">
//               <div className="bg-[#134E35] text-white p-8 md:p-10 rounded-sm">
//                 <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C87A50]">Headline Outcome</div>
//                 <div className="mt-4 text-6xl md:text-7xl font-extrabold leading-none">{c.heroMetric}</div>
//                 <div className="mt-4 text-base text-white/80">{c.heroMetricLabel}</div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Cover Image */}
//       <section className="bg-white pb-12 md:pb-16">
//         <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//           <div className="rounded-sm overflow-hidden aspect-[16/8] bg-zinc-200">
//             <img src={c.cover} alt={c.client} className="w-full h-full object-cover" />
//           </div>
//         </div>
//       </section>

//       {/* Objective / Challenge / Approach */}
//       <section className="bg-white py-16 md:py-24 border-y border-zinc-200" data-testid="case-story">
//         <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//           <div className="grid md:grid-cols-12 gap-12">
//             <div className="md:col-span-4 md:sticky md:top-24 md:self-start">
//               <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">The story</div>
//               <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F1212] leading-tight tracking-[-0.02em]">How we moved the number.</h2>
//             </div>
//             <div className="md:col-span-8 space-y-12">
//               <Block title="Objective" body={c.objective} />
//               <Block title="Challenge" body={c.challenge} />
//               <div>
//                 <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-4">Our approach</div>
//                 <ul className="space-y-4">
//                   {c.approach.map((a, i) => (
//                     <li key={i} className="flex items-start gap-3 text-base md:text-lg text-[#0F1212] leading-relaxed">
//                       <div className="h-6 w-6 shrink-0 rounded-sm bg-[#134E35]/10 grid place-items-center text-xs font-bold text-[#134E35] mt-1">{i + 1}</div>
//                       <span>{a}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Results */}
//       <section className="bg-[#0F1212] text-white py-16 md:py-24" data-testid="case-results">
//         <div className="max-w-[1400px] mx-auto px-5 md:px-10">
//           <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Results</div>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-[-0.02em] max-w-3xl">Numbers after 90 days.</h2>
//           <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
//             {c.results.map((r, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-60px" }}
//                 transition={{ duration: 0.5, delay: i * 0.08 }}
//                 className="p-8 border border-white/10 rounded-sm bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
//               >
//                 <div className="text-4xl md:text-5xl font-extrabold text-[#C87A50] leading-none">{r.k}</div>
//                 <div className="mt-4 text-sm text-white/80 leading-relaxed">{r.v}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonial */}
//       {c.testimonial && (
//         <section className="bg-white py-16 md:py-24">
//           <div className="max-w-[1000px] mx-auto px-5 md:px-10 text-center">
//             <div className="flex justify-center gap-1 mb-6 text-[#C87A50]">
//               {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
//             </div>
//             <blockquote className="text-2xl md:text-3xl lg:text-[32px] font-medium text-[#0F1212] leading-[1.3]">
//               "{c.testimonial.quote}"
//             </blockquote>
//             <div className="mt-8 text-sm">
//               <div className="font-bold text-[#0F1212]">{c.testimonial.name}</div>
//               <div className="text-zinc-500">{c.testimonial.title}</div>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Next Case */}
//       <section className="bg-zinc-50 border-t border-zinc-200 py-16">
//         <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex items-center justify-between flex-wrap gap-6">
//           <Link to="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-[#134E35]">
//             <ArrowLeft className="h-4 w-4" /> All case studies
//           </Link>
//           <Link to={`/work/${next.slug}`} className="group inline-flex items-center gap-4 bg-white border border-zinc-200 hover:border-[#134E35] p-4 rounded-sm transition-colors">
//             <div className="text-right">
//               <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500">Next case study</div>
//               <div className="font-bold text-[#0F1212] mt-0.5">{next.client}</div>
//             </div>
//             <ArrowRight className="h-5 w-5 text-[#134E35] group-hover:translate-x-1 transition-transform" />
//           </Link>
//         </div>
//       </section>
//     </PublicLayout>
//   );
// }

// function Block({ title, body }) {
//   return (
//     <div>
//       <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-3">{title}</div>
//       <p className="text-base md:text-lg text-[#0F1212] leading-relaxed">{body}</p>
//     </div>
//   );
// }
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, CheckCircle2, Star } from "lucide-react";
import PublicLayout from "@/components/layout/PublicLayout";
import { getCaseStudy, CASE_STUDIES } from "@/data/caseStudies";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const c = getCaseStudy(slug);
  if (!c) return <Navigate to="/work" replace />;
  const next = CASE_STUDIES.find((x) => x.slug === c.ctaNext) || CASE_STUDIES[0];

  return (
    <PublicLayout>
      {/* Breadcrumb */}
      <div className="bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-3 sm:py-4 text-xs sm:text-sm text-zinc-500 flex flex-wrap items-center gap-1.5 sm:gap-2">
          <Link to="/" className="hover:text-[#134E35]">Home</Link>
          <span>/</span>
          <Link to="/work" className="hover:text-[#134E35]">Work</Link>
          <span>/</span>
          <span className="text-[#0F1212] font-medium">{c.client}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white py-10 sm:py-12 md:py-20" data-testid="case-hero">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-7">
              <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-3 sm:mb-4">Case Study · {c.industry}</div>
              <h1 className="text-4xl sm:text-[44px] md:text-[52px] lg:text-[64px] font-extrabold leading-[1.05] sm:leading-[1.02] tracking-[-0.02em] text-[#0F1212]">
                {c.client}
              </h1>
              <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl">
                {c.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-700 rounded-sm">{t}</span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="lg:col-span-5 mt-4 sm:mt-8 lg:mt-0">
              <div className="bg-[#134E35] text-white p-6 sm:p-8 md:p-10 rounded-sm">
                <div className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C87A50]">Headline Outcome</div>
                <div className="mt-3 sm:mt-4 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none">{c.heroMetric}</div>
                <div className="mt-3 sm:mt-4 text-sm sm:text-base text-white/80">{c.heroMetricLabel}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="bg-white pb-10 sm:pb-12 md:pb-16">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="rounded-sm overflow-hidden aspect-video md:aspect-[16/8] bg-zinc-200">
            <img src={c.cover} alt={c.client} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Objective / Challenge / Approach */}
      <section className="bg-white py-12 sm:py-16 md:py-24 border-y border-zinc-200" data-testid="case-story">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-12">
            <div className="md:col-span-4 md:sticky md:top-24 md:self-start">
              <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-3 sm:mb-4">The story</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F1212] leading-[1.1] sm:leading-tight tracking-[-0.02em]">How we moved the number.</h2>
            </div>
            <div className="md:col-span-8 space-y-10 sm:space-y-12">
              <Block title="Objective" body={c.objective} />
              <Block title="Challenge" body={c.challenge} />
              <div>
                <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-3 sm:mb-4">Our approach</div>
                <ul className="space-y-4">
                  {c.approach.map((a, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] sm:text-base md:text-lg text-[#0F1212] leading-relaxed">
                      <div className="h-6 w-6 shrink-0 rounded-sm bg-[#134E35]/10 grid place-items-center text-[10px] sm:text-xs font-bold text-[#134E35] mt-0.5 sm:mt-1">{i + 1}</div>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-[#0F1212] text-white py-16 md:py-24" data-testid="case-results">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-3 sm:mb-4">Results</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] sm:leading-[1.05] tracking-[-0.02em] max-w-3xl">Numbers after 90 days.</h2>
          <div className="mt-8 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {c.results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 sm:p-8 border border-white/10 rounded-sm bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-[#C87A50] leading-none">{r.k}</div>
                <div className="mt-3 sm:mt-4 text-[13px] sm:text-sm text-white/80 leading-relaxed">{r.v}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {c.testimonial && (
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-[1000px] mx-auto px-5 md:px-10 text-center">
            <div className="flex justify-center gap-1 mb-5 sm:mb-6 text-[#C87A50]">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />)}
            </div>
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-medium text-[#0F1212] leading-relaxed sm:leading-[1.3]">
              "{c.testimonial.quote}"
            </blockquote>
            <div className="mt-6 sm:mt-8 text-xs sm:text-sm">
              <div className="font-bold text-[#0F1212]">{c.testimonial.name}</div>
              <div className="text-zinc-500">{c.testimonial.title}</div>
            </div>
          </div>
        </section>
      )}

      {/* Next Case */}
      <section className="bg-zinc-50 border-t border-zinc-200 py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link to="/work" className="inline-flex items-center gap-2 text-[13px] sm:text-sm font-semibold text-zinc-600 hover:text-[#134E35] order-2 sm:order-1">
            <ArrowLeft className="h-4 w-4" /> All case studies
          </Link>
          <Link to={`/work/${next.slug}`} className="group w-full sm:w-auto flex justify-between sm:inline-flex items-center gap-4 bg-white border border-zinc-200 hover:border-[#134E35] p-4 sm:p-5 rounded-sm transition-colors order-1 sm:order-2">
            <div className="text-left sm:text-right">
              <div className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500">Next case study</div>
              <div className="font-bold text-sm sm:text-base text-[#0F1212] mt-0.5">{next.client}</div>
            </div>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-[#134E35] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}

function Block({ title, body }) {
  return (
    <div>
      <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-2 sm:mb-3">{title}</div>
      <p className="text-[15px] sm:text-base md:text-lg text-[#0F1212] leading-relaxed">{body}</p>
    </div>
  );
}