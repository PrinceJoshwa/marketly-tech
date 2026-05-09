import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Award, Users, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import PublicLayout from "@/components/layout/PublicLayout";
import { AWARDS, HERO_STATS } from "@/data/publicContent";

const VALUES = [
  { Icon: Target, title: "Honesty over hype", body: "We tell you when something doesn't work — before the invoice lands. Most agencies don't." },
  { Icon: Users, title: "One team, one voice", body: "Paid, SEO, creative, offline — all under one roof. Zero Frankenstein handoffs." },
  { Icon: Heart, title: "Compound, not spike", body: "We build systems that keep working after we leave the room. No one-quarter wonders." },
  { Icon: Award, title: "Boring work, done", body: "60% of wins come from the unsexy stuff — schema, GMB hygiene, Core Web Vitals. We do it all." },
];

export default function About() {
  return (
    <PublicLayout>
      <section className="bg-white py-16 md:py-24 border-b border-zinc-200">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">About us</div>
            <h1 className="text-[42px] sm:text-[52px] lg:text-[64px] font-extrabold leading-[1.02] tracking-[-0.02em] text-[#0F1212]">
              We're the agency CMOs keep on speed-dial.
            </h1>
            <p className="mt-6 text-lg text-zinc-600 leading-relaxed max-w-2xl">
              Founded in 2013 in Bengaluru by a former in-house CMO who got tired of agencies that sold campaigns instead of systems. Twelve years and 50+ brands later, Marketly builds the full growth stack for companies that want to compound — not just run ads.
            </p>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {HERO_STATS.map((s) => (
                <div key={s.k} className="border-l-2 border-[#134E35] pl-4">
                  <div className="text-3xl font-bold text-[#0F1212] leading-none">{s.v}</div>
                  <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">{s.k}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-sm overflow-hidden aspect-[4/5] bg-zinc-100 border-[6px] border-white shadow-[0_30px_60px_-20px_rgba(15,18,18,0.25)]">
              <img src="https://customer-assets.emergentagent.com/job_rank-intel-dash/artifacts/2afpvxbt_AJP03487.JPG.jpeg" alt="Ramya Prasanna, Founder of Marketly, receiving the Marketing Innovation Award 2024" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-sm">
                <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C87A50]">Founder · Award recipient 2024</div>
                <div className="mt-1 font-bold text-[#0F1212] text-base">Ramya Prasanna</div>
                <div className="text-xs text-zinc-500">Marketing Innovation Award, Women Achievements Summit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-zinc-50">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="max-w-2xl mb-12">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Our values</div>
            <h2 className="text-3xl md:text-4xl lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">
              Four rules we don't break.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-7 bg-white border border-zinc-200 rounded-sm"
              >
                <div className="h-11 w-11 rounded-sm bg-[#134E35]/10 grid place-items-center mb-5">
                  <v.Icon className="h-5 w-5 text-[#134E35]" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-bold text-[#0F1212] leading-tight">{v.title}</h3>
                <p className="mt-2.5 text-[15px] text-zinc-600 leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="max-w-2xl mb-12">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Recognitions</div>
            <h2 className="text-3xl md:text-4xl lg:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">
              Awards, partnerships, and certifications.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {AWARDS.map((a) => (
              <div key={a.k} className="p-6 bg-zinc-50 border border-zinc-200 rounded-sm">
                <Award className="h-5 w-5 text-[#C87A50]" />
                <div className="mt-4 font-bold text-[#0F1212]">{a.k}</div>
                <div className="mt-1 text-sm text-zinc-600">{a.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#134E35] text-white">
        <div className="max-w-[1000px] mx-auto px-5 md:px-10 text-center">
          <h2 className="text-3xl md:text-[40px] font-extrabold leading-[1.1]">Want to work with us?</h2>
          <Button asChild className="mt-6 rounded-sm bg-[#C87A50] hover:bg-[#B16840] text-white h-12 px-6 font-semibold">
            <Link to="/contact">Book a strategy call</Link>
          </Button>
        </div>
      </section>
    </PublicLayout>
  );
}
