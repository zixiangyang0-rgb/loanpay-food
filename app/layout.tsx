import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://food.loanpaylogic.com"),
  title: {
    default: "LoanPay Kitchen — Easy Recipes, Meal Prep & Food Guides",
    template: "%s | LoanPay Kitchen",
  },
  description:
    "LoanPay Kitchen: practical recipes, meal prep plans, kitchen guides and food safety tips for busy home cooks. Start cooking smarter today.",
  alternates: { canonical: "https://food.loanpaylogic.com" },
  openGraph: {
    type: "website",
    siteName: "LoanPay Kitchen",
    url: "https://food.loanpaylogic.com",
    title: "LoanPay Kitchen — Easy Recipes, Meal Prep & Food Guides",
    description:
      "Practical recipes, meal prep plans, kitchen guides and food safety tips for busy home cooks. Start cooking smarter today.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoanPay Kitchen — Easy Recipes, Meal Prep & Food Guides",
    description:
      "Practical recipes, meal prep plans, kitchen guides and food safety tips for busy home cooks. Start cooking smarter today.",
  },
};

const NAV = [
  { href: "/meal-prep-for-beginners", label: "Meal Prep" },
  { href: "/budget-grocery-guide", label: "Budget Groceries" },
  { href: "/food-storage-safety-guide", label: "Food Safety" },
  { href: "/kitchen-tools-essentials", label: "Kitchen Tools" },
  { href: "/baking-basics-guide", label: "Baking" },
  { href: "/30-minute-dinners", label: "Quick Dinners" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script
          async
          strategy="lazyOnload"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4906207495792820"
          crossOrigin="anonymous"
        />
        <header className="border-b" style={{ borderColor: "#ead9bd", background: "#fffdf8" }}>
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link href="/" className="flex items-center gap-3">
                <span
                  className="font-display flex h-11 w-11 items-center justify-center rounded-full text-xl font-bold text-white"
                  style={{ background: "#c93a2c" }}
                >
                  LK
                </span>
                <span>
                  <span className="font-display block text-2xl font-bold leading-none" style={{ color: "#2f2620" }}>
                    LoanPay Kitchen
                  </span>
                  <span className="block text-xs font-semibold uppercase tracking-widest" style={{ color: "#b07a35" }}>
                    Cook more · Spend less · Waste nothing
                  </span>
                </span>
              </Link>
              <nav className="flex flex-wrap gap-2">
                {NAV.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    className="rounded-full border px-3 py-1.5 text-sm font-semibold hover:text-white"
                    style={{ borderColor: "#e3c98f", color: "#7c5417", background: "#fff" }}
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="masthead-rule" />
        </header>
        <main>{children}</main>
        <footer style={{ background: "#2f2620" }} className="mt-16 text-sm text-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <p className="font-display text-xl font-bold">LoanPay Kitchen</p>
                <p className="mt-2 text-white/80">
                  A practical food magazine from the LoanPay Logic network: tested recipes, honest grocery math, and
                  kitchen skills for real weeknights.
                </p>
              </div>
              <div>
                <p className="font-bold uppercase tracking-widest text-xs" style={{ color: "#f3e3c8" }}>
                  Explore
                </p>
                <ul className="mt-3 space-y-2">
                  {NAV.map((n) => (
                    <li key={n.href}>
                      <Link className="text-white/85 underline-offset-4 hover:underline" href={n.href}>
                        {n.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-bold uppercase tracking-widest text-xs" style={{ color: "#f3e3c8" }}>
                  Our pages
                </p>
                <ul className="mt-3 space-y-2">
                  <li><Link className="text-white/85 hover:underline" href="/about">About us</Link></li>
                  <li><Link className="text-white/85 hover:underline" href="/contact">Contact</Link></li>
                  <li><Link className="text-white/85 hover:underline" href="/privacy-policy">Privacy policy</Link></li>
                  <li><Link className="text-white/85 hover:underline" href="/terms">Terms of use</Link></li>
                  <li><Link className="text-white/85 hover:underline" href="/disclaimer">Disclaimer</Link></li>
                </ul>
              </div>
            </div>
            <p className="mt-8 border-t border-white/20 pt-4 text-white/70">
              © 2026 LoanPay Kitchen · food.loanpaylogic.com · General education only — see our{" "}
              <Link className="underline" href="/disclaimer">disclaimer</Link>.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
