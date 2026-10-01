import type { Metadata } from "next";
import { ArticleShell, FaqList } from "../lib/article";
import { faqJsonLd, articleJsonLd } from "../lib/site";

export const metadata: Metadata = {
  title: "Pantry Staples List: 48 Foods to Always Keep",
  description:
    "Pantry staples list: 48 shelf-stable foods ranked by use, storage times, starter kit and restocking system. Stock up smart today!",
  alternates: { canonical: "https://food.loanpaylogic.com/pantry-staples-list" },
  openGraph: {
    type: "article",
    url: "https://food.loanpaylogic.com/pantry-staples-list",
    title: "Pantry Staples List: 48 Foods to Always Keep",
    description:
      "Pantry staples list: 48 shelf-stable foods ranked by use, storage times, starter kit and restocking system. Stock up smart today!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pantry Staples List: 48 Foods to Always Keep",
    description:
      "Pantry staples list: 48 shelf-stable foods ranked by use, storage times, starter kit and restocking system. Stock up smart today!",
  },
};

const faqs = [
  {
    q: "What are the most essential pantry staples?",
    a: "Rice, pasta, oats, canned tomatoes, dried lentils and beans, cooking oil, soy sauce, canned tuna, peanut butter, flour, sugar, salt, and basic spices cover the foundation — with those, a dozen distinct dinners are possible before buying fresh food. Add eggs, onions, and garlic from the fridge and the pantry becomes a meal machine.",
  },
  {
    q: "How long do pantry staples last?",
    a: "White rice, dried beans, oats, pasta, canned goods, oil, and spices keep 1 to 3 years unopened in cool, dark storage; whole-wheat flour and nuts last 3 to 6 months at room temperature or a year refrigerated. Best-by dates mark peak quality, not safety — inspect cans for swelling or deep dents and discard compromised ones. Rotate with first-in-first-out dating.",
  },
  {
    q: "Can you stock a pantry on a budget?",
    a: "Yes — build it over 6 to 8 weeks by adding 3 to 5 staples per trip from the bottom of this list upward, prioritizing store brands and bulk bags. A $15 weekly pantry add-on assembles the full foundation in two months without a painful single bill. Start with grains, canned tomatoes, beans, oil, and spices since they unlock the most meals fastest.",
  },
  {
    q: "What pantry foods have the most protein?",
    a: "Dried lentils and beans (12 to 18g per cooked cup), canned tuna and sardines (20g+ per can), peanut butter (8g per 2 tablespoons), oats (5g per half-cup dry), and quinoa (8g per cooked cup) lead the shelf-stable proteins. Stock combinations — beans plus grains — for complete, cheap protein across the week.",
  },
  {
    q: "How should I organize a small pantry?",
    a: "Group by use — grains together, cans together, baking together, spices together — in clear containers with labels, heaviest items low and daily items at eye level. Decant open bags into airtight jars to block pests and staleness, keep a running restock list on the door, and audit quarterly for expired items. Visibility prevents duplicate buying.",
  },
];

export default function Page() {
  return (
    <ArticleShell
      kicker="Stock it"
      title="Pantry Staples List"
      intro="Pantry staples are dinner insurance: 48 shelf-stable foods that turn 'nothing to eat' into twelve different meals. Ranked by usefulness, with storage times and a starter kit."
      related={[
        { href: "/budget-grocery-guide", label: "Budget Grocery Guide — buy staples cheapest" },
        { href: "/cheap-healthy-meals", label: "Cheap Healthy Meals — cook from the shelf" },
        { href: "/weekly-meal-planning-template", label: "Weekly Meal Planning Template — plan around stock" },
        { href: "/food-storage-safety-guide", label: "Food Storage Safety Guide — store it right" },
      ]}
      sources="USDA FoodData Central values; USDA food storage references."
    >
      <p>
        A stocked pantry changes the meaning of &ldquo;we have nothing to eat&rdquo; from crisis to puzzle — rice plus
        beans plus canned tomatoes plus spices is chili, curry, soup, or bowls depending on mood. These 48 pantry
        staples are ranked by how often they rescue dinner, each with storage life and the meals it unlocks. The list
        assumes a standard household that cooks most nights; solo cooks halve the quantities, families double the
        grains and canned goods. Build it gradually with the starter kit and restocking system below, buying store
        brands per our <a href="/budget-grocery-guide">budget grocery guide</a>, and cook from it with our{" "}
        <a href="/cheap-healthy-meals">cheap healthy meals</a>.
      </p>
      <h2>Which staples matter most? The ranked 48</h2>
      <p>
        Tier one items appear in multiple dinners weekly and deserve permanent residence; tier two items appear weekly
        and round out flavors; tier three items are project players for baking and global cooking. Allergen flags mark
        wheat, soy, peanut, tree nut, fish, sesame, and milk where present. Storage assumes cool, dark, dry shelving —
        heat and light age everything faster.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Tier</th><th>Staples</th><th>Unlocks</th><th>Keeps</th></tr></thead>
        <tbody>
          <tr><td>1 — Core grains</td><td>Long-grain rice, pasta, rolled oats, flour (wheat)</td><td>Bowls, pasta, oats, flatbread</td><td>1–2 yr (flour 6–12 mo)</td></tr>
          <tr><td>1 — Core proteins</td><td>Dried lentils, black/pinto beans, canned tuna (fish), peanut butter (peanut)</td><td>Soups, chili, sandwiches</td><td>1–3 yr</td></tr>
          <tr><td>1 — Core cans/jars</td><td>Diced tomatoes, tomato paste, coconut milk, canned corn/peas</td><td>Curries, soups, pasta sauce</td><td>1–3 yr</td></tr>
          <tr><td>1 — Core fats/flavor</td><td>Olive oil, neutral oil, soy sauce (soy, wheat), vinegar, salt, black pepper</td><td>Every savory meal</td><td>1–2 yr</td></tr>
          <tr><td>2 — Weeklies</td><td>Quinoa, rice noodles (wheat opt.), canned chickpeas, canned sardines (fish), tahini (sesame)</td><td>Bowls, stir-fry, hummus</td><td>1–2 yr</td></tr>
          <tr><td>2 — Sauces</td><td>Salsa, curry paste, pesto, hot sauce, mustard, ketchup, honey</td><td>Instant flavor bases</td><td>1–2 yr unopened</td></tr>
          <tr><td>2 — Spices</td><td>Cumin, paprika, chili powder, oregano, cinnamon, garlic powder, bay, red pepper</td><td>Global seasoning</td><td>1–3 yr ground</td></tr>
          <tr><td>2 — Baking basics</td><td>Sugar, brown sugar, baking powder, baking soda, cocoa, vanilla (milk opt. choc.)</td><td>Pancakes, muffins, treats</td><td>1–2 yr</td></tr>
          <tr><td>3 — Projects</td><td>Bread flour (wheat), cornmeal, dried mushrooms, nori, rice vinegar, sesame oil (sesame)</td><td>Pizza, sushi, ramen</td><td>6 mo–2 yr</td></tr>
          <tr><td>3 — Extras</td><td>Olives, artichokes, roasted peppers, capers, dried fruit, nuts (tree nut), chocolate</td><td>Salads, snacks, gifts</td><td>1–2 yr</td></tr>
        </tbody>
      </table>
      <h2>How do I build the starter kit for $60?</h2>
      <p>
        New kitchens should buy in this order, since early items unlock the most meals per dollar. Week one ($20):
        rice, pasta, oats, canned tomatoes, lentils, black beans, oil, salt, and pepper — nine items that already make
        soup, bowls, and pasta. Week two ($20): peanut butter, canned tuna, soy sauce, vinegar, flour, sugar, cumin,
        paprika, and chili powder — protein, flavor, and baking begin. Week three ($20): oats upgrade to quinoa,
        coconut milk, curry paste, salsa, honey, oats extras, canned corn, baking powder, and cinnamon — global
        cooking opens up. Shop store brands and bulk bags throughout; the full 48-item pantry assembles over two
        months of $15 add-ons without pain.
      </p>
      <ol className="step-list">
        <li><strong>Week 1: grains + cans + salt.</strong> Rice, pasta, oats, tomatoes, lentils, beans, oil, salt, pepper. Cook soup and bowls immediately to prove the kit.</li>
        <li><strong>Week 2: protein + flavor.</strong> Peanut butter, tuna, soy sauce, vinegar, flour, sugar, three spices. Sandwiches, fried rice, and pancakes join the rotation.</li>
        <li><strong>Week 3: global + baking.</strong> Quinoa, coconut milk, curry paste, salsa, honey, baking powder, cinnamon, corn. Curries and muffins arrive.</li>
        <li><strong>Decant and label.</strong> Move open bags to airtight jars with contents and date. Pests and staleness both lose to sealed glass.</li>
        <li><strong>Start the door list.</strong> A running restock note on the pantry door captures empties the moment they happen — no more mid-recipe discoveries.</li>
      </ol>
      <h2>How long does everything keep?</h2>
      <p>
        Shelf life follows simple rules: whole and sealed lasts longest, ground and opened shortest, and fat content
        predicts rancidity — whole-wheat flour, nuts, and brown rice age faster than white flour, white rice, and
        dried beans. Store in cool darkness below 75°F; heat above the stove or beside the dishwasher halves flavor
        life. Best-by dates indicate peak quality, not safety — inspect cans for swelling, rust-through, or deep seam
        dents and discard those regardless of date. Practice first-in-first-out: new purchases slide behind, oldest
        cook first.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Item</th><th>Unopened</th><th>Opened</th></tr></thead>
        <tbody>
          <tr><td>White rice, pasta, oats</td><td>2+ years</td><td>1 year sealed</td></tr>
          <tr><td>Dried beans, lentils</td><td>2–3 years (older = slower cooking)</td><td>1 year sealed</td></tr>
          <tr><td>Canned goods</td><td>2–3 years</td><td>3–4 days refrigerated after opening</td></tr>
          <tr><td>Oils</td><td>1–2 years</td><td>3–6 months; sniff for rancidity</td></tr>
          <tr><td>Ground spices</td><td>2–3 years potent</td><td>Replace yearly for best flavor</td></tr>
          <tr><td>Flour (white / whole-wheat)</td><td>1 yr / 6 mo</td><td>Sealed; freeze whole-grain 1 yr</td></tr>
          <tr><td>Nuts, nut butters</td><td>6–9 months</td><td>Refrigerate; 6+ months</td></tr>
          <tr><td>Baking powder/soda</td><td>18 months</td><td>Test yearly (fizz in water/vinegar)</td></tr>
        </tbody>
      </table>
      <h2>What can I cook with pantry-only ingredients?</h2>
      <p>
        Twelve dinners need nothing fresh except optional onion and garlic: lentil soup, black bean chili, chickpea
        curry, tuna pasta, peanut noodles, tomato chickpea stew, rice and beans, minestrone from canned vegetables,
        oatmeal dinner bowls, pancakes, quesadillas with canned chilies, and sardine pasta. Each costs under $1.50 a
        plate and several appear in our <a href="/cheap-healthy-meals">cheap healthy meals</a> with full costing. Keep
        two emergency meals mentally loaded — for most households that is tuna pasta and lentil soup — so stormy
        nights and empty fridges never trigger takeout. This is general education, not medical or nutrition advice —
        see our <a href="/disclaimer">disclaimer</a>.
      </p>
      <h2>Pantry staples FAQ</h2>
      <FaqList faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ headline: "Pantry Staples List: 48 Foods to Always Keep", description: "48 shelf-stable foods ranked with storage and starter kit.", slug: "/pantry-staples-list" })).replace(/</g, "\\u003c") }} />
    </ArticleShell>
  );
}
