import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer — General Food Education Only",
  description:
    "LoanPay Kitchen is general food education, not medical or nutrition advice. Read our safety limits before you cook.",
  alternates: { canonical: "https://food.loanpaylogic.com/disclaimer" },
  openGraph: {
    type: "article",
    url: "https://food.loanpaylogic.com/disclaimer",
    title: "Disclaimer — General Food Education Only",
    description:
      "LoanPay Kitchen is general food education, not medical or nutrition advice. Read our safety limits before you cook.",
  },
  twitter: {
    card: "summary",
    title: "Disclaimer — General Food Education Only",
    description:
      "LoanPay Kitchen is general food education, not medical or nutrition advice. Read our safety limits before you cook.",
  },
};

export default function Disclaimer() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <p className="tag-chip">Legal</p>
      <h1 className="font-display mt-3 text-4xl font-bold md:text-5xl">Disclaimer</h1>
      <p className="mt-3 text-sm font-semibold" style={{ color: "#b07a35" }}>Updated: October 2026</p>
      <div className="prose-food mt-2">
        <p>
          Everything on LoanPay Kitchen is general education, not medical or nutrition advice. Recipes, meal plans, and
          nutrition estimates are written for healthy home cooking and cannot account for your allergies, conditions,
          medications, pregnancy, or therapeutic diet. Always consult a qualified health professional about personal
          dietary decisions.
        </p>
        <h2 className="font-display">How should I treat food-safety guidance?</h2>
        <p>
          We align storage times and cooking temperatures with USDA FoodSafety.gov guidance (for example, 165°F for
          poultry and leftovers, 160°F for ground meats, 145°F with a 3-minute rest for whole cuts, and 3–4 days for
          refrigerated leftovers). But your thermometer, fridge, and clock are the final authority. When in doubt,
          throw it out — no leftover is worth a hospital visit.
        </p>
        <h2 className="font-display">What about allergens and nutrition numbers?</h2>
        <p>
          We flag major allergens (milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, soy, sesame) where recipes
          contain or commonly contact them, and we round nutrition estimates from public USDA FoodData Central values.
          Manufacturers change formulas and kitchens cross-contact; always read your own labels.
        </p>
        <p>
          Back to the <Link href="/">homepage</Link> · <Link href="/about">about us</Link> ·{" "}
          <Link href="/contact">contact</Link> · <Link href="/privacy-policy">privacy policy</Link>.
        </p>
      </div>
    </div>
  );
}
