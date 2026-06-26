import PublicLayout from "@/components/layout/PublicLayout";

export default function Privacy() {
  return (
    <PublicLayout>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[860px] mx-auto px-5 md:px-10">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C87A50] mb-4">Legal</div>
          <h1 className="text-[42px] sm:text-[52px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0F1212]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-zinc-500">Last updated: 5 May 2026</p>

          <div className="mt-10 space-y-6 text-[17px] leading-[1.75] text-zinc-700" data-testid="privacy-body">
            <p>At Marketly Technologies Pvt. Ltd. ("Marketly", "we", "us"), we respect your privacy and are committed to protecting the personal data you share with us through marketly.tech ("the site"). This policy explains what we collect, why, and how you can control it.</p>

            <H>1. Information we collect</H>
            <p>We collect information you voluntarily provide when you submit the contact form, audit tool, ROI calculator, GMB checker, or newsletter signup. This may include your name, work email, phone number, company name, website URL, and the content of messages you send us.</p>
            <p>We also collect technical data automatically — device type, browser, IP address (anonymised), pages visited, time on page, referral source. This is collected via standard web analytics (Google Analytics 4, PostHog) to help us understand which content is useful.</p>

            <H>2. How we use your information</H>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Respond to enquiries you send us</li>
              <li>Deliver audit / ROI / GMB reports to your inbox</li>
              <li>Send occasional newsletter updates (only if you opt in)</li>
              <li>Improve our website and services (aggregated analytics)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <H>3. What we will never do</H>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Sell your personal data to any third party.</li>
              <li>Share your audit results or enquiry details outside our internal team.</li>
              <li>Send you marketing communications without your consent.</li>
            </ul>

            <H>4. Data retention</H>
            <p>Enquiry data is kept for up to 24 months after your last interaction with us, unless you ask us to delete it sooner (see "Your rights" below).</p>

            <H>5. Cookies</H>
            <p>We use a small set of cookies for analytics and session management. You can disable cookies in your browser settings; some site functionality may be affected.</p>

            <H>6. Your rights</H>
            <p>Under the Digital Personal Data Protection Act, 2023 (India) and GDPR where applicable, you have the right to access, correct, or delete your personal data. To exercise any of these rights, email us at <a href="mailto:privacy@marketly.tech" className="text-[#134E35] underline">privacy@marketly.tech</a>.</p>

            <H>7. Third-party services</H>
            <p>We use Google Analytics, Google Workspace, PostHog, and Resend for analytics, email, and communication. These providers have their own privacy policies. We only share the minimum data required for each service.</p>

            <H>8. Changes to this policy</H>
            <p>We may update this policy from time to time. When we do, we'll update the "Last updated" date above. Material changes will be announced on this page.</p>

            <H>9. Contact</H>
            <p>Questions? Write to <a href="mailto:privacy@marketly.tech" className="text-[#134E35] underline">privacy@marketly.tech</a> or by post to Marketly Technologies Pvt. Ltd., Sarjapur Road, Bengaluru — 560 038, India.</p>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

const H = ({ children }) => <h2 className="text-xl md:text-2xl font-bold text-[#0F1212] mt-10 tracking-[-0.01em]">{children}</h2>;
