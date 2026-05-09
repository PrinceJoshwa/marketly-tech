import PublicLayout from "@/components/layout/PublicLayout";

export default function Terms() {
  return (
    <PublicLayout>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[860px] mx-auto px-5 md:px-10">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Legal</div>
          <h1 className="text-[42px] sm:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-sm text-zinc-500">Last updated: 5 May 2026</p>

          <div className="mt-10 space-y-6 text-[17px] leading-[1.75] text-zinc-700" data-testid="terms-body">
            <p>These terms ("Terms") govern your use of marketly.tech and any services offered on or through it. By using the site, you agree to these Terms. If you don't agree, please don't use the site.</p>

            <H>1. About us</H>
            <p>marketly.tech is operated by Marketly Technologies Pvt. Ltd. ("Marketly"), a company registered in Bengaluru, India.</p>

            <H>2. Use of the site</H>
            <p>You agree to use the site only for lawful purposes. You won't attempt to disrupt the service, reverse-engineer it, scrape it at scale, or impersonate another user. We may refuse or terminate service for any user who violates these terms.</p>

            <H>3. Free tools (Audit, ROI Calculator, GMB Checker)</H>
            <p>The free tools on this site are provided for informational purposes only. Results are based on publicly available signals and industry benchmarks; they are not guarantees. Marketly is not liable for any decisions made based on tool output.</p>

            <H>4. Engagement contracts</H>
            <p>Any paid engagement between you and Marketly is governed by a separate written contract (SOW / MSA / retainer agreement). These Terms apply only to your use of this public website.</p>

            <H>5. Intellectual property</H>
            <p>All content on this site — copy, images, case studies, logos, graphics — is owned by Marketly or licensed to us. You may share links to our public pages, but you may not copy, republish, or use our content commercially without written permission.</p>
            <p>Client logos shown on the site are used with client permission and remain the property of their respective owners.</p>

            <H>6. Testimonials & case studies</H>
            <p>All testimonials are from actual clients. Case study metrics reflect real outcomes from specific engagements; your results will vary based on your market, budget, and execution.</p>

            <H>7. Links to third-party sites</H>
            <p>This site may link to other websites (LinkedIn, Instagram, client sites, etc.). We are not responsible for the content or practices of any third-party site.</p>

            <H>8. Disclaimer</H>
            <p>This site is provided "as-is" without warranty of any kind. While we try to keep content accurate and up to date, we make no guarantees regarding completeness, timeliness, or availability. Your use of the site is at your own risk.</p>

            <H>9. Limitation of liability</H>
            <p>To the maximum extent permitted by law, Marketly's total liability in connection with this site (not paid engagement contracts) shall not exceed ₹10,000 INR.</p>

            <H>10. Governing law</H>
            <p>These Terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.</p>

            <H>11. Changes</H>
            <p>We may update these Terms occasionally. Material changes will be reflected by the "Last updated" date above. Continued use after changes constitutes acceptance.</p>

            <H>12. Contact</H>
            <p>Questions about these Terms? Email <a href="mailto:legal@marketly.tech" className="text-[#134E35] underline">legal@marketly.tech</a>.</p>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

const H = ({ children }) => <h2 className="text-xl md:text-2xl font-bold text-[#0F1212] mt-10 tracking-[-0.01em]">{children}</h2>;
