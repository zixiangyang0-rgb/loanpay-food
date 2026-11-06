import Link from "next/link";
import type { Faq } from "./site";
import { Byline } from "../components/schema";

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
      <Byline />
      <div className="prose-food mt-2">{children}</div>
      <div className="safety-note mt-8 text-sm">
        <strong>Good to know:</strong> This guide is general education, not medical or nutrition advice. If you manage
        a health condition, food allergy, or therapeutic diet, check with a qualified professional. See our{" "}
        <Link href="/disclaimer">disclaimer</Link>.
      </div>
      {faqNote ? <p className="mt-4 text-sm italic" style={{ color: "#6f5f52" }}>{faqNote}</p> : null}
      <nav aria-label="Related guides" className="mag-card mt-8 p-6">
        <p className="text-sm font-semibold">Keep reading</p>
        <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed">
          {related.map((r) => {
            const [title, ...rest] = r.label.split(" — ");
            return (
              <li key={r.href}>
                <Link className="toc-link font-semibold" href={r.href}>{title}</Link>
                {rest.length > 0 ? ` — ${rest.join(" — ")}` : null}
              </li>
            );
          })}
        </ul>
      </nav>
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
