import Link from "next/link";
import type { Faq } from "./site";

export function ArticleShell({
  kicker,
  title,
  intro,
  updated = "Updated: October 2026",
  children,
  related,
  sources,
  faqNote,
}: {
  kicker: string;
  title: string;
  intro: string;
  updated?: string;
  children: React.ReactNode;
  related: { href: string; label: string }[];
  sources: string;
  faqNote?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <p className="tag-chip">{kicker}</p>
      <h1 className="font-display mt-3 text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
      <p className="mt-4 text-lg" style={{ color: "#6f5f52" }}>{intro}</p>
      <p className="mt-3 text-sm font-semibold" style={{ color: "#b07a35" }}>{updated} · 12-minute read</p>
      <div className="prose-food mt-2">{children}</div>
      <div className="safety-note mt-8 text-sm">
        <strong>Good to know:</strong> This guide is general education, not medical or nutrition advice. If you manage
        a health condition, food allergy, or therapeutic diet, check with a qualified professional. See our{" "}
        <Link href="/disclaimer">disclaimer</Link>.
      </div>
      {faqNote ? <p className="mt-4 text-sm italic" style={{ color: "#6f5f52" }}>{faqNote}</p> : null}
      <div className="mag-card mt-8 p-6">
        <h2 className="font-display text-xl font-bold">Keep reading in the Kitchen</h2>
        <ul className="mt-3 space-y-2">
          {related.map((r) => (
            <li key={r.href}>
              <Link className="toc-link font-semibold" href={r.href}>{r.label}</Link>
            </li>
          ))}
          <li>
            <Link className="toc-link font-semibold" href="/">← Back to the LoanPay Kitchen homepage</Link>
          </li>
        </ul>
      </div>
      <p className="mt-6 text-xs" style={{ color: "#6f5f52" }}>Sources: {sources}</p>
    </div>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="mt-4">
      {faqs.map((f) => (
        <div className="faq-box" key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}
    </div>
  );
}
