export const SITE = "https://food.loanpaylogic.com";

export type Faq = { q: string; a: string };

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleJsonLd(opts: {
  headline: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    mainEntityOfPage: `${SITE}${opts.slug}`,
    author: { "@type": "Organization", name: "LoanPay Kitchen" },
    publisher: { "@type": "Organization", name: "LoanPay Kitchen" },
    datePublished: "2026-03-10",
    dateModified: "2026-10-01",
  };
}
