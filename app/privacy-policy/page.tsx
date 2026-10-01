import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — LoanPay Kitchen",
  description:
    "How LoanPay Kitchen handles cookies, analytics and Google AdSense ads. Your privacy choices explained in plain words.",
  alternates: { canonical: "https://food.loanpaylogic.com/privacy-policy" },
  openGraph: {
    type: "article",
    url: "https://food.loanpaylogic.com/privacy-policy",
    title: "Privacy Policy — LoanPay Kitchen",
    description:
      "How LoanPay Kitchen handles cookies, analytics and Google AdSense ads. Your privacy choices explained in plain words.",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy — LoanPay Kitchen",
    description:
      "How LoanPay Kitchen handles cookies, analytics and Google AdSense ads. Your privacy choices explained in plain words.",
  },
};

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <p className="tag-chip">Legal</p>
      <h1 className="font-display mt-3 text-4xl font-bold md:text-5xl">Privacy Policy</h1>
      <p className="mt-3 text-sm font-semibold" style={{ color: "#b07a35" }}>Updated: October 2026</p>
      <div className="prose-food mt-2">
        <p>
          LoanPay Kitchen (food.loanpaylogic.com) respects your privacy. This policy explains what we collect, why we
          collect it, and the choices you have. If you have questions, contact{" "}
          <a href="mailto:privacy@loanpaylogic.com">privacy@loanpaylogic.com</a>.
        </p>
        <h2 className="font-display">What information do we collect?</h2>
        <p>
          We collect minimal information: pages you visit, approximate device and browser data from standard server logs,
          and any message you voluntarily send us by email. We do not operate accounts, do not sell personal data, and
          do not collect payment information on this site.
        </p>
        <h2 className="font-display">How do third-party ads and cookies work here?</h2>
        <p>
          We use third-party advertising, including Google AdSense, to keep LoanPay Kitchen free to read. Google and its
          partners use cookies and similar technologies to serve ads based on your prior visits to this and other
          websites, to measure ad performance, and to detect fraud and abuse. Google&apos;s use of advertising cookies
          enables it and its partners to serve ads to you based on your visit to our pages and other sites on the
          Internet. You may opt out of personalized advertising by visiting Google&apos;s Ads Settings
          (google.com/settings/ads). Some jurisdictions also offer network-wide opt-outs such as the NAI and DAA
          choice pages. You can also control cookies through your browser settings: blocking third-party cookies may
          change which ads you see but will not break the recipes. Learn more in Google&apos;s Privacy &amp; Terms and
          its &ldquo;How Google uses information from sites or apps that use our services&rdquo; page.
        </p>
        <h2 className="font-display">What about analytics and embedded content?</h2>
        <p>
          We may use privacy-conscious, aggregated analytics to understand which guides help readers most. We do not
          embed third-party comment systems, social trackers, or video players that follow you across the web. Outbound
          links to authoritative sources (such as USDA and university extension sites) are governed by those sites&apos;
          own policies once you click through.
        </p>
        <h2 className="font-display">How long do we keep data?</h2>
        <p>
          Server logs rotate automatically and are kept only as long as needed for security and debugging. Emails you
          send us are kept for correspondence and correction records. You may request access, correction, or deletion
          of correspondence data at any time by emailing privacy@loanpaylogic.com.
        </p>
        <p>
          Related reading: <Link href="/terms">terms of use</Link>, <Link href="/disclaimer">disclaimer</Link>,{" "}
          <Link href="/about">about us</Link>, <Link href="/">homepage</Link>.
        </p>
      </div>
    </div>
  );
}
