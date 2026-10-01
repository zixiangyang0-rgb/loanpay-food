import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact LoanPay Kitchen — Say Hello",
  description:
    "Contact the LoanPay Kitchen editors: corrections, recipe help and partnerships. We answer every message within days.",
  alternates: { canonical: "https://food.loanpaylogic.com/contact" },
  openGraph: {
    type: "article",
    url: "https://food.loanpaylogic.com/contact",
    title: "Contact LoanPay Kitchen — Say Hello",
    description:
      "Contact the LoanPay Kitchen editors: corrections, recipe help and partnerships. We answer every message within days.",
  },
  twitter: {
    card: "summary",
    title: "Contact LoanPay Kitchen — Say Hello",
    description:
      "Contact the LoanPay Kitchen editors: corrections, recipe help and partnerships. We answer every message within days.",
  },
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <p className="tag-chip">Contact</p>
      <h1 className="font-display mt-3 text-4xl font-bold md:text-5xl">Contact LoanPay Kitchen</h1>
      <p className="mt-3 text-sm font-semibold" style={{ color: "#b07a35" }}>Updated: October 2026</p>
      <div className="prose-food mt-2">
        <p>
          Burned the rice? Found a typo in a cooking time? Want us to cost out your family&apos;s favorite casserole?
          Write to us — a working editor, not a bot, reads the inbox.
        </p>
        <div className="mag-card p-6">
          <h2 className="font-display text-xl font-bold">Email us</h2>
          <p className="mt-2">General, corrections and recipe help: <a href="mailto:kitchen@loanpaylogic.com">kitchen@loanpaylogic.com</a></p>
          <p>Partnerships and press: <a href="mailto:partners@loanpaylogic.com">partners@loanpaylogic.com</a></p>
          <p>Privacy requests: <a href="mailto:privacy@loanpaylogic.com">privacy@loanpaylogic.com</a></p>
        </div>
        <h2 className="font-display">What to include for recipe help</h2>
        <p>
          Tell us the guide you followed, what equipment you used, and where things went sideways (with a photo if you
          can). Most rescue replies go out within three business days. For urgent food-safety questions — for example,
          whether chicken left out overnight is safe — please follow USDA guidance (when in doubt, throw it out) rather
          than waiting for our reply.
        </p>
        <p>
          Prefer browsing? Start from the <Link href="/">homepage hub</Link>, or read <Link href="/about">about our team</Link> and
          our <Link href="/privacy-policy">privacy policy</Link>.
        </p>
      </div>
    </div>
  );
}
