import type { Metadata } from "next";
import { ArticleShell, FaqList } from "../lib/article";
import { faqJsonLd, articleJsonLd } from "../lib/site";

export const metadata: Metadata = {
  title: "Budget Grocery Guide: Cut Your Bill by 25%",
  description:
    "Budget grocery guide: unit-price math, store tactics, seasonal charts and waste fixes that cut bills 25%. Shop smarter this week!",
  alternates: { canonical: "https://food.loanpaylogic.com/budget-grocery-guide" },
  openGraph: {
    type: "article",
    url: "https://food.loanpaylogic.com/budget-grocery-guide",
    title: "Budget Grocery Guide: Cut Your Bill by 25%",
    description:
      "Budget grocery guide: unit-price math, store tactics, seasonal charts and waste fixes that cut bills 25%. Shop smarter this week!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Budget Grocery Guide: Cut Your Bill by 25%",
    description:
      "Budget grocery guide: unit-price math, store tactics, seasonal charts and waste fixes that cut bills 25%. Shop smarter this week!",
  },
};

const faqs = [
  {
    q: "How can I cut my grocery bill in half?",
    a: "Halving is ambitious but directionally possible: plan every dinner, eliminate waste with a clean-out night, switch proteins to legumes plus leg quarters and eggs, buy store brands and bulk staples, and quit midweek impulse trips. Most households realistically cut 25 to 40 percent in two months. Track spending weekly — what gets measured gets managed.",
  },
  {
    q: "Is Aldi cheaper than Walmart for groceries?",
    a: "Basket comparisons vary by region and year, but limited-assortment stores like Aldi typically beat supercenters on pantry staples, dairy, and produce while Walmart wins on national-brand variety and online pickup convenience. The cheapest strategy uses both: Aldi or Lidl for the base basket, plus a supercenter or warehouse club for bulk proteins and household goods. Compare your own 20-item basket quarterly.",
  },
  {
    q: "What is the cheapest day to buy groceries?",
    a: "Midweek — Wednesday and Thursday — is often cheapest because new weekly flyers overlap with clearance of prior-week perishables, and markdowns on meat and bakery appear mornings. Sunday evenings can yield manager's-special produce, while Saturday mornings offer the worst crowds and thinnest clearance. Your store's rhythm matters more than any rule, so ask the meat and produce staff when they mark down.",
  },
  {
    q: "Are store brand foods as good as name brands?",
    a: "For staples — canned tomatoes, beans, oats, frozen vegetables, flour, sugar, dairy — store brands are frequently identical products from the same manufacturers at 15 to 30 percent less. Blind tests favor store brands surprisingly often on basics. National brands can win on condiments, snacks, and specialty items where recipes differ, so test category by category and keep winners on your list.",
  },
  {
    q: "How much should a family of 4 spend on groceries?",
    a: "USDA food plans peg a family of four's monthly grocery spending roughly from $1,000 (thrifty) to $1,500+ (liberal) in recent years, varying with ages and location. A realistic budget target for a cost-conscious household cooking mostly at home is $150 to $200 per person monthly. Track your own baseline for a month, then trim waste and protein costs first — the two biggest levers.",
  },
];

export default function Page() {
  return (
    <ArticleShell
      kicker="Budget kitchen"
      title="Budget Grocery Guide"
      intro="Budget grocery shopping is a skill with a 25-percent payoff: unit-price math, store tactics, seasonal buying, and waste elimination that keep quality high and bills low."
      related={[
        { href: "/cheap-healthy-meals", label: "Cheap Healthy Meals — dinners under $2.50" },
        { href: "/pantry-staples-list", label: "Pantry Staples List — buy the base in bulk" },
        { href: "/weekly-meal-planning-template", label: "Weekly Meal Planning Template — plan, then shop" },
        { href: "/recipe-cost-calculator", label: "Recipe Cost Calculator — price your plates" },
      ]}
      sources="USDA Thrifty and Low-Cost Food Plans; USDA seasonal produce references; FoodSafety.gov storage guidance."
    >
      <p>
        Budget grocery shopping rewards systems, not suffering. The households spending $600 a month instead of $900
        are not eating sadder food — they plan dinners before shopping, buy proteins and staples at their cheapest
        form, waste almost nothing, and make one trip instead of four. This budget grocery guide builds that system in
        four layers: the math that reveals true prices, the store tactics that defeat marketing, the seasonal calendar
        that times produce, and the waste war that rescues the third of food average households trash. Combine it with
        our <a href="/weekly-meal-planning-template">meal planning template</a> for the list and our{" "}
        <a href="/cheap-healthy-meals">cheap healthy meals</a> for what to cook.
      </p>
      <h2>How does unit-price math reveal the real cheapest?</h2>
      <p>
        Shelf tags lie by package while the small print tells the truth: price per ounce, per pound, or per 100 count
        is the only fair comparison across sizes and brands. A $4.99 family pack of chicken thighs at $1.20 per pound
        demolishes $3.49 small packs at $2.80 per pound; a 42-ounce oat canister at eleven cents per ounce halves the
        instant packets at twenty-plus cents. Train your eye to read the unit price first and the big number second,
        and re-check quarterly since manufacturers shrink packages — same price, fewer ounces — hoping you notice the
        big number only.
      </p>
      <p>
        Bulk logic needs boundaries. Warehouse clubs win on proteins, cheese, butter, frozen goods, and household
        staples you will definitely finish; they lose on perishable variety packs that spoil before Friday and on
        snacks that get eaten faster simply because the box is enormous. The rule: bulk-buy what you already consume
        steadily and can store safely, never a speculative fifteen pounds of a new-to-you grain. Split bulk meats
        into meal-size freezer packs the day you shop — labeled with dates per our{" "}
        <a href="/freezer-meals-guide">freezer meals guide</a> — so savings do not become freezer-burned waste.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Comparison</th><th>Typical unit winner</th><th>Saving</th></tr></thead>
        <tbody>
          <tr><td>Family-pack thighs vs small pack</td><td>Family pack</td><td>~50% per lb</td></tr>
          <tr><td>Oat canister vs instant packets</td><td>Canister</td><td>~50% per oz</td></tr>
          <tr><td>Dry beans vs canned</td><td>Dry bags</td><td>~70% per serving</td></tr>
          <tr><td>Block cheese vs shredded</td><td>Block</td><td>~25% per lb</td></tr>
          <tr><td>Whole carrots vs baby-cut</td><td>Whole bunch</td><td>~40% per lb</td></tr>
          <tr><td>Store brand vs national (staples)</td><td>Store brand</td><td>15–30%</td></tr>
        </tbody>
      </table>
      <h2>Which store tactics beat the marketing?</h2>
      <p>
        Stores are engineered to raise your ticket: staples at the back force a gauntlet of temptation, eye-level
        shelves rent for premium placement, endcaps shout deals that often are not, and the bakery&apos;s smell is
        deliberate atmosphere. Counter with structure. Shop with a zone-ordered list and buy produce and meat last so
        cold items stay cold and impulse exposure shrinks. Eat before going — hungry shoppers buy measurably more.
        Check the markdown racks first for same-day proteins and bakery you will cook or freeze tonight. Question
        every endcap against the unit price, and treat &ldquo;10 for $10&rdquo; as $1 each unless the fine print
        demands the quantity.
      </p>
      <ol className="step-list">
        <li><strong>Plan from flyers + inventory.</strong> Build 4–5 dinners around sale proteins and what must be used. The weekly meal planning template runs this in 20 minutes.</li>
        <li><strong>Write the zone-ordered list.</strong> Dry goods, frozen, produce, meat-dairy last. Quantities per recipe, not vibes.</li>
        <li><strong>Hit markdowns first.</strong> Morning meat and bakery markdowns, plus the produce rack, before the main shop. Cook or freeze same-day finds tonight.</li>
        <li><strong>One trip, full cart discipline.</strong> No midweek improvisation runs — each adds $10–$20 of impulse. Forgotten milk waits until next week or a corner shop.</li>
        <li><strong>Check out with the receipt review.</strong> Photograph or save receipts; monthly, circle the 5 priciest lines and swap one. Run plates through the recipe cost calculator.</li>
      </ol>
      <p>
        Loyalty programs and store apps are worth the two-minute signup when they discount staples you already buy —
        never buy extra to &ldquo;earn&rdquo; rewards. Cash-back cards add 2 to 5 percent on groceries only if paid in
        full monthly; interest instantly erases food savings. For pantry loading strategy, our{" "}
        <a href="/pantry-staples-list">pantry staples list</a> ranks the 48 items worth owning.
      </p>
      <h2>When is produce cheapest through the year?</h2>
      <p>
        In-season produce routinely costs half of out-of-season imports while tasting twice as good — the single
        easiest quality-plus-savings win. Spring brings asparagus, peas, and strawberries; summer overflows with corn,
        tomatoes, zucchini, berries, and stone fruit at their cheapest; fall delivers apples, squash, sweet potatoes,
        and cabbage; winter favors citrus, kale, and stored root vegetables. Frozen fills every gap: picked ripe and
        frozen within hours, it matches fresh nutritionally and wastes nothing.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Season</th><th>Buy fresh</th><th>Buy frozen/canned</th></tr></thead>
        <tbody>
          <tr><td>Spring</td><td>Asparagus, peas, spinach, strawberries</td><td>Corn, green beans</td></tr>
          <tr><td>Summer</td><td>Corn, tomatoes, zucchini, berries, peaches</td><td>Peas, spinach</td></tr>
          <tr><td>Fall</td><td>Apples, squash, sweet potatoes, cabbage</td><td>Berries, asparagus</td></tr>
          <tr><td>Winter</td><td>Citrus, kale, carrots, potatoes, onions</td><td>Tomatoes (canned), corn</td></tr>
        </tbody>
      </table>
      <h2>How do I stop throwing money in the trash?</h2>
      <p>
        Waste is the stealth grocery bill — the lettuce liquefied, the leftovers forgotten, the giant pack half-used.
        The fixes are structural, not moral. Store produce correctly: herbs in water like flowers, greens dry with a
        towel in the container, onions and potatoes apart in the dark, berries unwashed until eating. Practice
        first-in-first-out with a use-first shelf or box. Schedule the Friday clean-out meal — soup, fried rice,
        frittata, or tacos — that converts stragglers into dinner before they turn. Freeze bread, shredded cheese,
        and cooked grains before they stale; they all thaw beautifully.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Waste culprit</th><th>Annual-ish cost</th><th>Fix</th></tr></thead>
        <tbody>
          <tr><td>Spoiled produce</td><td>High</td><td>Buy less more often; store right; clean-out night</td></tr>
          <tr><td>Forgotten leftovers</td><td>High</td><td>Label + date; lunch-plan them; freeze by day 3</td></tr>
          <tr><td>Impulse extras</td><td>Medium</td><td>One trip; list discipline; eat first</td></tr>
          <tr><td>Oversized perishables</td><td>Medium</td><td>Split + freeze day one; share bulk</td></tr>
          <tr><td>Stale bread/grains</td><td>Low-medium</td><td>Freeze half the loaf; revive with heat</td></tr>
        </tbody>
      </table>
      <p>
        Full storage clocks live in our <a href="/food-storage-safety-guide">food storage safety guide</a>, and
        reheating rescue in the <a href="/leftover-safety-guide">leftover guide</a>. This is general education about
        household economics, not financial or medical advice — see our <a href="/disclaimer">disclaimer</a>.
      </p>
      <h2>Budget grocery FAQ</h2>
      <FaqList faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ headline: "Budget Grocery Guide: Cut Your Bill by 25%", description: "Unit-price math, store tactics, seasonal charts and waste fixes.", slug: "/budget-grocery-guide" })).replace(/</g, "\\u003c") }} />
    </ArticleShell>
  );
}
