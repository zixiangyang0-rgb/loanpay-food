import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — LoanPay Kitchen",
  description:
    "The simple rules for using LoanPay Kitchen recipes and guides: reuse, attribution, and what we promise in return.",
  alternates: { canonical: "https://food.loanpaylogic.com/terms" },
  openGraph: {
    type: "article",
    url: "https://food.loanpaylogic.com/terms",
    title: "Terms of Use — LoanPay Kitchen",
    description:
      "The simple rules for using LoanPay Kitchen recipes and guides: reuse, attribution, and what we promise in return.",
  },
  twitter: {
    card: "summary",
    title: "Terms of Use — LoanPay Kitchen",
    description:
      "The simple rules for using LoanPay Kitchen recipes and guides: reuse, attribution, and what we promise in return.",
  },
};

export default function Terms() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <p className="tag-chip">Legal</p>
      <h1 className="font-display mt-3 text-4xl font-bold md:text-5xl">Terms of Use</h1>
      <p className="mt-3 text-sm font-semibold" style={{ color: "#b07a35" }}>Updated: October 2026</p>
      <div className="prose-food mt-2">
        <p>
          Welcome to LoanPay Kitchen. By reading or cooking from this site you agree to these plain-language terms. If
          you disagree, please stop using the site — no hard feelings, and the soup will forgive you.
        </p>
        <h2 className="font-display">What may I do with these recipes?</h2>
        <p>
          Cook them, halve them, double them, and share the results at your table. You may link to any guide freely and
          quote brief excerpts with attribution to LoanPay Kitchen and a link back. You may not republish full guides
          or scrape the site&apos;s content at scale, and you may not present our work as your own.
        </p>
        <h2 className="font-display">What do we promise — and what don&apos;t we?</h2>
        <p>
          We promise original, tested, honestly described recipes. We do not promise that every dish suits every diet,
          allergy, or medical need, or that your oven behaves like ours. Cooking involves heat, knives, and judgment —
          you cook at your own risk. See the <Link href="/disclaimer">disclaimer</Link> for the full picture.
        </p>
        <h2 className="font-display">How do advertising and changes work?</h2>
        <p>
          The site is supported by third-party advertising; see the <Link href="/privacy-policy">privacy policy</Link>.
          We may update guides and these terms as recipes improve; the &ldquo;Updated&rdquo; date above shows the
          latest revision. Continued use after changes means you accept them.
        </p>
        <p>
          Questions? Reach us via the <Link href="/contact">contact page</Link>, learn <Link href="/about">about our editors</Link>,
          or return to the <Link href="/">homepage</Link>.
        </p>
      </div>
    </div>
  );
}
