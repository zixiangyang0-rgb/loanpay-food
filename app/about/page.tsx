import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About LoanPay Kitchen — Our Food Editors",
  description:
    "Meet the LoanPay Kitchen editorial team and our recipe testing standards. Real cooks, real kitchens, honest food guides.",
  alternates: { canonical: "https://food.loanpaylogic.com/about" },
  openGraph: {
    type: "article",
    url: "https://food.loanpaylogic.com/about",
    title: "About LoanPay Kitchen — Our Food Editors",
    description:
      "Meet the LoanPay Kitchen editorial team and our recipe testing standards. Real cooks, real kitchens, honest food guides.",
  },
  twitter: {
    card: "summary",
    title: "About LoanPay Kitchen — Our Food Editors",
    description:
      "Meet the LoanPay Kitchen editorial team and our recipe testing standards. Real cooks, real kitchens, honest food guides.",
  },
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <p className="tag-chip">Our story</p>
      <h1 className="font-display mt-3 text-4xl font-bold md:text-5xl">About LoanPay Kitchen</h1>
      <p className="mt-3 text-sm font-semibold" style={{ color: "#b07a35" }}>Updated: October 2026</p>
      <div className="prose-food mt-2">
        <p>
          LoanPay Kitchen is the food magazine of the LoanPay Logic network. We started it with a simple observation:
          most recipe sites are built for weekend projects, while most dinners happen on exhausted Tuesday nights. So
          we write for the Tuesday-night cook — the parent batch-cooking lunches, the student stretching fifty dollars,
          the beginner who just bought a first decent knife.
        </p>
        <p>
          Every guide on this site is original prose, developed and reviewed by our small editorial team. We cook the
          recipes in ordinary home kitchens with ordinary supermarket ingredients, check temperatures and storage times
          against USDA FoodSafety.gov guidance, and publish cost math we would defend at the checkout line.
        </p>
        <h2 className="font-display">Who edits LoanPay Kitchen?</h2>
        <ul>
          <li><strong>Maya Thornton, founding food editor</strong> — ten years developing weeknight recipes for community cooking classes; leads recipe testing and the meal-prep series.</li>
          <li><strong>Daniel Okafor, budget &amp; grocery analyst</strong> — tracks pantry prices across major US chains each quarter; writes our grocery math and cost guides.</li>
          <li><strong>Priya Raman, kitchen science writer</strong> — covers food safety, storage times and equipment technique, cross-checked with USDA and university extension sources.</li>
          <li><strong>June Alvarez, baking columnist</strong> — heads the baking and sourdough coverage, including starter troubleshooting from hundreds of reader loaves.</li>
        </ul>
        <h2 className="font-display">How do we test recipes?</h2>
        <p>
          Each recipe is cooked at least twice in a home kitchen, once exactly as written and once with the most common
          substitution readers ask about. We record yields by weight and volume, time every step with a running clock,
          and reheat leftovers on day three to make sure the storage advice holds. If a dish fails — and some do — we
          say what went wrong and fix it before publishing.
        </p>
        <p>
          Nutrition figures cite public USDA FoodData Central values for standard ingredients and are rounded estimates
          for home cooking, not laboratory analysis. Allergen reminders flag the top nine major allergens where relevant.
          Our content is general education, not medical or nutrition advice — see our <Link href="/disclaimer">disclaimer</Link>.
        </p>
        <h2 className="font-display">How do we make money?</h2>
        <p>
          LoanPay Kitchen is free to read and supported by advertising, including Google AdSense. Our editorial guides
          are written independently; advertisers never review or approve recipes. Read our{" "}
          <Link href="/privacy-policy">privacy policy</Link> for cookie and ads disclosure details.
        </p>
        <p>
          Questions, corrections, or a recipe rescue request? Email us at{" "}
          <a href="mailto:kitchen@loanpaylogic.com">kitchen@loanpaylogic.com</a> or use the{" "}
          <Link href="/contact">contact page</Link> — a real editor reads every note.
        </p>
      </div>
    </div>
  );
}
