import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LoanPay Kitchen — Easy Recipes, Meal Prep & Food Guides",
  description:
    "Easy recipes, meal prep plans, kitchen skills and grocery saving guides. Browse 25 tested food guides and cook tonight.",
  alternates: { canonical: "https://food.loanpaylogic.com" },
  openGraph: {
    type: "website",
    url: "https://food.loanpaylogic.com",
    title: "LoanPay Kitchen — Easy Recipes, Meal Prep & Food Guides",
    description:
      "Easy recipes, meal prep plans, kitchen skills and grocery saving guides. Browse 25 tested food guides and cook tonight.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LoanPay Kitchen — Easy Recipes, Meal Prep & Food Guides",
    description:
      "Easy recipes, meal prep plans, kitchen skills and grocery saving guides. Browse 25 tested food guides and cook tonight.",
  },
};

const GROUPS: { name: string; blurb: string; links: { href: string; title: string; desc: string }[] }[] = [
  {
    name: "Start here: beginner wins",
    blurb: "Zero-stress guides that teach the five skills behind 80% of home cooking.",
    links: [
      { href: "/meal-prep-for-beginners", title: "Meal Prep for Beginners", desc: "A calm 2-hour Sunday system with 5 lunches." },
      { href: "/30-minute-dinners", title: "30-Minute Dinners", desc: "14 fast formulas for tired weeknights." },
      { href: "/one-pot-dinners", title: "One-Pot Dinners", desc: "Six cozy pots, one dish to wash." },
      { href: "/weekly-meal-planning-template", title: "Weekly Meal Planning Template", desc: "Copy our printable week plan." },
      { href: "/kitchen-tools-essentials", title: "Kitchen Tools Essentials", desc: "The 15 tools worth owning first." },
      { href: "/food-storage-safety-guide", title: "Food Storage Safety Guide", desc: "Fridge, freezer and danger-zone rules." },
    ],
  },
  {
    name: "Kitchen tools & techniques",
    blurb: "Master the gadgets gathering dust in your cupboards.",
    links: [
      { href: "/air-fryer-cooking-guide", title: "Air Fryer Cooking Guide", desc: "Times, temps and what NOT to cook." },
      { href: "/cast-iron-skillet-guide", title: "Cast Iron Skillet Guide", desc: "Seasoning, searing and rescue missions." },
      { href: "/slow-cooker-basics", title: "Slow Cooker Basics", desc: "Set-it-and-forget-it tender meals." },
      { href: "/pressure-cooker-basics", title: "Pressure Cooker Basics", desc: "Beans to brisket in minutes." },
      { href: "/rice-cooker-guide", title: "Rice Cooker Guide", desc: "Fluffy rice plus 6 bonus uses." },
      { href: "/pasta-cooking-guide", title: "Pasta Cooking Guide", desc: "Salt math, shapes and sauces." },
    ],
  },
  {
    name: "Meal plans & healthy eating",
    blurb: "Plans and protein math for busy, budget-minded households.",
    links: [
      { href: "/high-protein-meals-guide", title: "High-Protein Meals Guide", desc: "30g+ protein without the powder." },
      { href: "/freezer-meals-guide", title: "Freezer Meals Guide", desc: "27 dump-and-go dinners decoded." },
      { href: "/salad-meal-prep-guide", title: "Salad Meal Prep Guide", desc: "Crisp-till-Friday jar salads." },
      { href: "/smoothie-basics-guide", title: "Smoothie Basics Guide", desc: "Ratios for thick, creamy blends." },
      { href: "/healthy-snacks-guide", title: "Healthy Snacks Guide", desc: "25 snacks under 250 calories." },
      { href: "/egg-recipes-guide", title: "Egg Recipes Guide", desc: "12 ways beyond scrambled." },
    ],
  },
  {
    name: "Budget kitchen & baking",
    blurb: "Grocery math, pantry power and weekend baking projects.",
    links: [
      { href: "/cheap-healthy-meals", title: "Cheap Healthy Meals", desc: "21 dinners under $2.50 a plate." },
      { href: "/budget-grocery-guide", title: "Budget Grocery Guide", desc: "Cut bills 25% without coupons." },
      { href: "/pantry-staples-list", title: "Pantry Staples List", desc: "48 shelf-stable heroes ranked." },
      { href: "/leftover-safety-guide", title: "Leftover Safety Guide", desc: "3–4 day rules, reheating right." },
      { href: "/baking-basics-guide", title: "Baking Basics Guide", desc: "Flour, leaveners and first loaves." },
      { href: "/sourdough-starter-guide", title: "Sourdough Starter Guide", desc: "Grow your starter in 7 days." },
      { href: "/recipe-cost-calculator", title: "Recipe Cost Calculator", desc: "Price any recipe + servings tool." },
    ],
  },
];

const POPULAR = [
  { href: "/meal-prep-for-beginners", title: "Meal prep in 2 hours flat" },
  { href: "/air-fryer-cooking-guide", title: "Air fryer times cheat sheet" },
  { href: "/cheap-healthy-meals", title: "21 dinners under $2.50" },
  { href: "/sourdough-starter-guide", title: "7-day sourdough starter" },
  { href: "/food-storage-safety-guide", title: "How long do leftovers last?" },
  { href: "/recipe-cost-calculator", title: "What does this recipe cost?" },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <section className="mag-card overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-12">
            <p className="tag-chip">The weeknight food magazine</p>
            <h1 className="font-display mt-4 text-4xl font-bold leading-tight md:text-6xl">
              Dinner solved by Sunday: cook once, eat well all week.
            </h1>
            <p className="mt-4 text-lg" style={{ color: "#6f5f52" }}>
              LoanPay Kitchen is a practical food magazine: 25 deeply tested guides on meal prep, budget groceries,
              kitchen tools, food safety and baking — every one with tables, steps and real answers to the questions
              home cooks actually search.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="btn-tomato" href="/meal-prep-for-beginners">Start with meal prep</Link>
              <Link className="btn-outline" href="/budget-grocery-guide">Save on groceries</Link>
            </div>
            <p className="mt-4 text-sm" style={{ color: "#6f5f52" }}>Updated: October 2026 · 25 guides · Free forever</p>
          </div>
          <div className="p-8 md:p-12" style={{ background: "#f6e7cd" }}>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#7c5417" }}>Most loved this week</p>
            <ol className="mt-4 space-y-3">
              {POPULAR.map((p, i) => (
                <li key={p.href} className="mag-card mag-card-hover flex items-center gap-4 p-4">
                  <span className="font-display text-3xl font-bold" style={{ color: "#c93a2c" }}>{i + 1}</span>
                  <Link href={p.href} className="font-display text-lg font-bold leading-snug hover:underline">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {GROUPS.map((g) => (
        <section key={g.name} className="mt-12">
          <h2 className="font-display text-3xl font-bold">{g.name}</h2>
          <p className="mt-1" style={{ color: "#6f5f52" }}>{g.blurb}</p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {g.links.map((l) => (
              <Link key={l.href} href={l.href} className="mag-card mag-card-hover block p-6">
                <span className="font-display text-xl font-bold leading-snug">{l.title}</span>
                <span className="mt-2 block text-sm" style={{ color: "#6f5f52" }}>{l.desc}</span>
                <span className="toc-link mt-3 inline-block text-sm font-bold">Read the guide →</span>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="mag-card mt-12 p-8 md:p-10">
        <h2 className="font-display text-2xl font-bold">Why cooks trust LoanPay Kitchen</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div><h3 className="font-bold" style={{ color: "#a92c20" }}>Tested, not theorized</h3><p className="text-sm" style={{ color: "#6f5f52" }}>Times, temperatures and yields are checked against USDA FoodSafety.gov guidance and standard references like USDA FoodData Central.</p></div>
          <div><h3 className="font-bold" style={{ color: "#a92c20" }}>Budget-first</h3><p className="text-sm" style={{ color: "#6f5f52" }}>Every guide includes cost math and pantry swaps so dinner fits a real paycheck.</p></div>
          <div><h3 className="font-bold" style={{ color: "#a92c20" }}>Safety built in</h3><p className="text-sm" style={{ color: "#6f5f52" }}>Storage times, internal temperatures and allergen reminders appear where they matter, not buried in footnotes.</p></div>
        </div>
        <p className="mt-4 text-sm" style={{ color: "#6f5f52" }}>New here? Read <Link className="toc-link font-semibold" href="/about">about our editorial team</Link> or <Link className="toc-link font-semibold" href="/contact">say hello</Link>.</p>
      </section>
    </div>
  );
}
