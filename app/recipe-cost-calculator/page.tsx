import type { Metadata } from "next";
import { ArticleShell, FaqList } from "../lib/article";
import { faqJsonLd, articleJsonLd } from "../lib/site";
import CostEstimator from "./CostEstimator";

export const metadata: Metadata = {
  title: "Recipe Cost Calculator: Price Any Dish Fast",
  description:
    "Recipe cost calculator: price any dish per serving, compare proteins, trim bills and plan budgets. Includes free estimator tool!",
  alternates: { canonical: "https://food.loanpaylogic.com/recipe-cost-calculator" },
  openGraph: {
    type: "article",
    url: "https://food.loanpaylogic.com/recipe-cost-calculator",
    title: "Recipe Cost Calculator: Price Any Dish Fast",
    description:
      "Recipe cost calculator: price any dish per serving, compare proteins, trim bills and plan budgets. Includes free estimator tool!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recipe Cost Calculator: Price Any Dish Fast",
    description:
      "Recipe cost calculator: price any dish per serving, compare proteins, trim bills and plan budgets. Includes free estimator tool!",
  },
};

const faqs = [
  {
    q: "How do you calculate cost per serving for a recipe?",
    a: "List every ingredient with the amount used, multiply each by its unit price (price per ounce, pound, or cup from the receipt or shelf tag), sum the totals, and divide by the number of servings. Count pantry staples proportionally — a quarter-cup of oil from a $10 bottle costs about $0.40. Our estimator tool above does the arithmetic instantly.",
  },
  {
    q: "Can you price recipes with a free online tool?",
    a: "Yes — the estimator on this page totals ingredient costs and divides by servings entirely in your browser, free with no signup. Save or screenshot results per recipe to build a personal cost database. For grocery-trip planning, pair it with our budget grocery guide's receipt-review habit.",
  },
  {
    q: "What is a good cost per serving for dinner?",
    a: "Home-cooked dinners typically run $1.50 to $4 per serving; under $2.50 is solidly budget-friendly, $2.50 to $4 is moderate, and above $5 deserves a deliberate occasion or cheaper protein swap. Takeout-equivalent dishes should be judged against the $10 to $14 delivery alternative — even a $4 homemade serving saves 60 percent or more.",
  },
  {
    q: "How do restaurants calculate recipe food cost?",
    a: "Restaurants cost each ingredient by weight or volume used, sum to a plate cost, and target food cost of roughly 25 to 35 percent of menu price — a $15 dish should cost $3.75 to $5.25 in ingredients. Home cooks can borrow the method without the margin pressure: costing reveals which ingredients drive bills and which swaps save most.",
  },
  {
    q: "Why does my grocery bill not match my recipe costs?",
    a: "Waste, pantry-loading, and impulse buys explain most gaps — recipe math counts food eaten while receipts count food bought. Track waste for two weeks, separate pantry stocking from weekly eating costs, and kill midweek impulse trips. When waste approaches zero, receipts and recipe totals converge.",
  },
];

export default function Page() {
  return (
    <ArticleShell
      kicker="Know your numbers"
      title="Recipe Cost Calculator"
      intro="Recipe cost math turns grocery guesses into decisions: price any dish per serving, find the expensive ingredient, and swap smartly. Try the free estimator below."
      related={[
        { href: "/budget-grocery-guide", label: "Budget Grocery Guide — lower the input prices" },
        { href: "/cheap-healthy-meals", label: "Cheap Healthy Meals — 21 plates under $2.50" },
        { href: "/meal-prep-for-beginners", label: "Meal Prep for Beginners — batch the winners" },
        { href: "/pantry-staples-list", label: "Pantry Staples List — amortize the shelf" },
      ]}
      sources="USDA Thrifty Food Plan price references; USDA FoodData Central serving data."
    >
      <p>
        Every recipe has two ingredient lists — the foods and the prices — and most cooks read only the first, then
        wonder where the money went. Recipe cost calculation fixes that blindness in five minutes with third-grade
        arithmetic: price each amount used, add them up, divide by servings. The answers rearrange priorities fast.
        That &ldquo;cheap&rdquo; chicken dinner costs $3.80 a plate once the pine nuts and parmesan weigh in; the
        &ldquo;expensive&rdquo; lentil curry lands at 80 cents. This guide teaches the method, the protein comparisons,
        the swap math, and the monthly system — with a free estimator tool that does the sums while you cook. Pair it
        with our <a href="/budget-grocery-guide">budget grocery guide</a> for buying cheaper and our{" "}
        <a href="/cheap-healthy-meals">cheap healthy meals</a> for pre-priced dinners.
      </p>
      <CostEstimator />
      <h2>How do I price any recipe in 5 minutes?</h2>
      <p>
        Work from the receipt outward. For each ingredient, note the amount the recipe uses and multiply by the unit
        price — the per-ounce or per-pound figure from the shelf tag or receipt. A recipe calling for 8 ounces of a
        $4-per-pound cheese costs $2; two tablespoons of olive oil from a $12 liter cost about $0.38; half an onion
        from a $1.50-per-pound bag costs about a quarter. Sum every line including oil, spices (estimate $0.10 to
        $0.25 per teaspoon-type addition), and broth, then divide by servings actually eaten — four, not the
        recipe&apos;s optimistic six. Round sensibly; penny precision wastes time while dollar accuracy changes
        decisions.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Ingredient (example chili)</th><th>Used</th><th>Unit price</th><th>Line cost</th></tr></thead>
        <tbody>
          <tr><td>Ground turkey</td><td>1.5 lb</td><td>$3.50/lb</td><td>$5.25</td></tr>
          <tr><td>Black beans, canned</td><td>2 cans</td><td>$1.00/can</td><td>$2.00</td></tr>
          <tr><td>Diced tomatoes</td><td>1 can</td><td>$1.20/can</td><td>$1.20</td></tr>
          <tr><td>Onion + garlic</td><td>1 + 3 cloves</td><td>~$0.40 total</td><td>$0.40</td></tr>
          <tr><td>Rice (side)</td><td>1.5 cups dry</td><td>$0.12/cup</td><td>$0.18</td></tr>
          <tr><td>Oil + spices</td><td>—</td><td>estimated</td><td>$0.35</td></tr>
          <tr><td><strong>Total ÷ 6 servings</strong></td><td></td><td></td><td><strong>$9.38 ÷ 6 = $1.56/plate</strong></td></tr>
        </tbody>
      </table>
      <p>
        Pantry amortization trips up beginners: a $9 spice jar used one teaspoon at a time costs roughly 15 cents per
        use across sixty uses — count the spoon, not the jar. Conversely, the half-bunch of cilantro used once then
        trashed costs its full price against one meal, which is why waste dominates real food costs. Price recipes as
        eaten (with waste allocated honestly), and the numbers guide genuine fixes instead of comforting fictions.
      </p>
      <h2>Which proteins cost most per serving?</h2>
      <p>
        Protein decides plate cost more than any other line, and the ranking below — cost per 30-gram protein serving
        at typical 2026 shelf prices — should steer weekly menus. Legumes and eggs cluster under a dollar; poultry
        and canned fish occupy the middle; fresh fish and beef close the list. Blending is the power move: half-beef
        half-lentil chili eats meaty at bean prices, and mushroom-extended burgers cut a third of the cost invisibly.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Protein (30g protein portion)</th><th>Cost</th><th>Use it for</th></tr></thead>
        <tbody>
          <tr><td>Dry lentils (~1.75 cups cooked)</td><td>~$0.45</td><td>Soups, dal, blended chili</td></tr>
          <tr><td>Eggs (5 large)</td><td>~$1.00</td><td>Frittatas, fried rice, breakfasts</td></tr>
          <tr><td>Chicken leg quarters (~7 oz)</td><td>~$1.10</td><td>Roasts, tacos, bowls</td></tr>
          <tr><td>Canned tuna (1.5 cans)</td><td>~$1.50</td><td>Bakes, salads, melts</td></tr>
          <tr><td>Ground turkey (~7 oz)</td><td>~$1.55</td><td>Chili, meatballs, tacos</td></tr>
          <tr><td>Chicken breast (~5 oz)</td><td>~$1.80</td><td>Meal-prep boxes</td></tr>
          <tr><td>Ground beef (~7 oz)</td><td>~$2.45</td><td>Burgers, blended dishes</td></tr>
          <tr><td>Salmon fillet (~5 oz)</td><td>~$3.50</td><td>Weekly fish night</td></tr>
        </tbody>
      </table>
      <h2>How do small swaps save the most?</h2>
      <p>
        Rank swaps by dollars saved per unit of enjoyment lost — the painless cuts first. Thighs for breasts saves
        40-plus percent with richer results. Dry beans for canned saves 70 percent with better texture after minimal
        planning. Frozen vegetables for out-of-season fresh saves 20 to 40 percent with equal nutrition. Store-brand
        staples save 15 to 30 percent indistinguishably. Parmesan rinds, chicken carcasses, and vegetable trimmings
        convert trash into free stock. Each swap compounds weekly: three painless swaps on a $150 grocery week free
        $25 to $35 — over $1,300 yearly — for zero perceived sacrifice.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Swap</th><th>Saves/week*</th><th>Taste verdict</th></tr></thead>
        <tbody>
          <tr><td>Thighs for breasts (2 lb)</td><td>~$3</td><td>Richer; most prefer blind</td></tr>
          <tr><td>Dry beans for canned (2 lb)</td><td>~$4</td><td>Better texture; plan ahead</td></tr>
          <tr><td>Frozen for fresh (3 bags)</td><td>~$3</td><td>Equal; zero waste</td></tr>
          <tr><td>Store brand (10 items)</td><td>~$5</td><td>Identical staples</td></tr>
          <tr><td>Homemade stock (1 batch)</td><td>~$4</td><td>Better; nearly free</td></tr>
        </tbody>
      </table>
      <p>*Typical family-of-four week. Verify with the estimator above and your own receipts.</p>
      <h2>How do I run a monthly food-budget review?</h2>
      <p>
        Fifteen minutes monthly beats daily anxiety. Total the month&apos;s grocery receipts (separate dining out),
        divide by household members and by 30 for daily per-person cost, and compare against your target band — $5 to
        $7 daily per person is thrifty-cooking territory, $8 to $12 moderate. Circle the five priciest receipt lines
        and attach one fix each: a swap, a bulk buy, or a waste elimination. Cost your three most-cooked recipes in
        the estimator and post the per-plate figures on the fridge; watching chili at $1.56 beats abstract resolve.
        Re-check quarterly since prices drift seasonally — the <a href="/budget-grocery-guide">budget grocery
        guide</a>&apos;s seasonal chart times produce buys. This is general education about household budgeting, not
        financial advice — see our <a href="/disclaimer">disclaimer</a>.
      </p>
      <ol className="step-list">
        <li><strong>Total the month.</strong> Groceries separate from dining out. Per-person daily cost is the headline metric.</li>
        <li><strong>Circle the 5 priciest lines.</strong> One fix each: swap, bulk, or waste cut. Small list, real dollars.</li>
        <li><strong>Cost the top-3 recipes.</strong> Estimator above; fridge-post the per-plate numbers.</li>
        <li><strong>Plan one fix into next week.</strong> The weekly meal planning template absorbs it — one new swap per week compounds.</li>
      </ol>
      <h2>Recipe costing FAQ</h2>
      <FaqList faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ headline: "Recipe Cost Calculator: Price Any Dish Fast", description: "Price any dish per serving with the free estimator.", slug: "/recipe-cost-calculator" })).replace(/</g, "\\u003c") }} />
    </ArticleShell>
  );
}
