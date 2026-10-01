import type { Metadata } from "next";
import { ArticleShell, FaqList } from "../lib/article";
import { faqJsonLd, articleJsonLd } from "../lib/site";

export const metadata: Metadata = {
  title: "Weekly Meal Planning Template (Free + Easy)",
  description:
    "A weekly meal planning template that cuts waste and stress: printable layout, 5-step method, sample week and shopping tips. Plan tonight!",
  alternates: { canonical: "https://food.loanpaylogic.com/weekly-meal-planning-template" },
  openGraph: {
    type: "article",
    url: "https://food.loanpaylogic.com/weekly-meal-planning-template",
    title: "Weekly Meal Planning Template (Free + Easy)",
    description:
      "A weekly meal planning template that cuts waste and stress: printable layout, 5-step method, sample week and shopping tips. Plan tonight!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weekly Meal Planning Template (Free + Easy)",
    description:
      "A weekly meal planning template that cuts waste and stress: printable layout, 5-step method, sample week and shopping tips. Plan tonight!",
  },
};

const faqs = [
  {
    q: "How do I start meal planning for beginners?",
    a: "Start with dinners only for one week: check your calendar, pick 4 to 5 dinners with 2 using leftovers or freezer meals, write the ingredient list, and shop once. Repeat the same skeleton for 3 weeks so it becomes habit before adding lunches and breakfasts. Planning dinners first captures most of the savings and stress relief with the least effort.",
  },
  {
    q: "What is the 5-4-3-2-1 meal planning method?",
    a: "It is a grocery framework: 5 vegetables, 4 fruits, 3 proteins, 2 sauces, and 1 fun item per week, which guarantees variety without overbuying. The numbers flex with household size — a family of five buys more of each category, not more categories. Use it as a cart checklist so impulse buys stay in the fun slot instead of multiplying across the store.",
  },
  {
    q: "Can you meal plan on a tight budget?",
    a: "Yes — planning is the highest-leverage budget habit because it attacks waste, the average household's biggest food cost. Plan around store flyers and pantry inventory, schedule one clean-out meal weekly, and repeat a two-week rotation of cheap dinners. Most households save 20 to 30 percent in the first month, which our budget grocery guide documents in detail.",
  },
  {
    q: "How long should meal prep last when you plan weekly?",
    a: "Plan cooked components for 3 to 4 days per USDA leftovers guidance, then bridge the week's tail with freezer meals, eggs, or pantry dinners. A common rhythm is Sunday prep for Monday to Wednesday, a small Wednesday refresh cook, and freezer or fresh-assembly meals Thursday to Friday. Never stretch refrigerated cooked food past 4 days — freeze it instead.",
  },
  {
    q: "What app is best for weekly meal planning?",
    a: "The best app is the one you already open: a phone notes list or simple spreadsheet beats a fancy app you abandon by February. Paper templates on the fridge win for households because everyone sees the plan. If you want digital, pick any free tool with recipe saving plus auto grocery lists, and keep a two-week rotation of proven meals pinned for busy weeks.",
  },
];

export default function Page() {
  return (
    <ArticleShell
      kicker="Plan it"
      title="Weekly Meal Planning Template"
      intro="Weekly meal planning turns chaotic weeknights into a calm routine: one 20-minute session, one grocery trip, five dinners that cook themselves into your schedule."
      related={[
        { href: "/meal-prep-for-beginners", label: "Meal Prep for Beginners — cook the plan on Sunday" },
        { href: "/budget-grocery-guide", label: "Budget Grocery Guide — shop the plan for less" },
        { href: "/freezer-meals-guide", label: "Freezer Meals Guide — your backup dinners" },
        { href: "/pantry-staples-list", label: "Pantry Staples List — stock the foundation" },
      ]}
      sources="USDA Thrifty Food Plan; FoodSafety.gov leftovers guidance; USDA FoodData Central values."
    >
      <p>
        Weekly meal planning sounds like something organized people do, but it is really something tired people do so
        they can stay tired in peace. Twenty focused minutes with this weekly meal planning template replaces five
        evenings of fridge-staring, three impulse takeout orders, and the Sunday discovery of liquefied lettuce you
        paid good money for. The method below works for solo cooks, couples, and families — it scales by portions, not
        complexity — and it assumes real life: late meetings, picky kids, and at least one night when cereal is dinner
        and that is fine. Pair it with our <a href="/meal-prep-for-beginners">meal prep Sundays</a> to cook what you
        plan, and our <a href="/budget-grocery-guide">budget grocery guide</a> to buy it for less.
      </p>
      <h2>Why does meal planning save money and sanity?</h2>
      <p>
        The money math is blunt: unplanned households waste far more food and order far more takeout. Federal estimates
        attribute roughly a third of the food supply to loss and waste, and household studies consistently find that
        planned shoppers throw away less produce, use up proteins before they expire, and make fewer midweek
        store runs — each of which historically adds $10 to $20 of impulse spending. A planned week also collapses
        decision fatigue: choosing dinner once on Sunday beats negotiating it nightly with hungry stakeholders. The
        sanity dividend compounds — knowing Thursday is soup night frees Wednesday-you from any thought at all.
      </p>
      <p>
        Planning also improves nutrition without a single lecture about kale. When the week holds a balance of proteins,
        grains, and vegetables on paper, the cart follows, and the cart becomes the diet. Planned weeks naturally
        include the high-protein anchors from our <a href="/high-protein-meals-guide">protein guide</a> and the
        vegetable variety dietitians praise, because intention beats willpower at 6 p.m. every time. Kids benefit too:
        a posted plan ends the nightly negotiation, and a standing taco or pasta night gives them something to
        anticipate. This is general education about household patterns, not medical or nutrition advice — see our{" "}
        <a href="/disclaimer">disclaimer</a>.
      </p>
      <p>
        Start small enough to succeed. Plan dinners only for the first two weeks, keep breakfasts and lunches on
        autopilot repeats (oats, yogurt, leftovers), and schedule one deliberately easy night — rotisserie chicken,
        frozen potstickers, or breakfast-for-dinner — so the plan survives your worst day. A plan followed 80 percent
        beats a perfect plan abandoned by Wednesday.
      </p>
      <h2>How do I use the 5-step planning method?</h2>
      <p>
        Do these steps in order every week — calendar first, recipes second, list last — and the whole ritual fits in
        twenty minutes with practice. Skipping the calendar check is the classic failure: a beautiful plan dies when
        Tuesday turns out to hold soccer practice and a late meeting.
      </p>
      <ol className="step-list">
        <li><strong>Check the week (3 min).</strong> Note late nights, guests, and evenings out. Mark one easy night and one leftover night. Count mouths per dinner — kids home or away changes portions.</li>
        <li><strong>Inventory first (4 min).</strong> Scan fridge, freezer, and pantry. List proteins and produce that must be used, and build at least two meals around them. Check our pantry staples list for what should always be there.</li>
        <li><strong>Pick 4–5 dinners (5 min).</strong> Choose two anchor recipes, one 30-minute fast meal, one slow-cooker or freezer meal, and one clean-out soup, stir-fry, or frittata. Repeat favorites freely — rotation beats novelty.</li>
        <li><strong>Write the list by store zone (5 min).</strong> Group items as produce, meat, dairy, dry goods, frozen. Add quantities tied to recipes so you buy three carrots, not a vague bunch-plus.</li>
        <li><strong>Schedule the cooking (3 min).</strong> Assign Sunday prep, the Wednesday refresh, and which night uses leftovers. Post the plan where the household sees it.</li>
      </ol>
      <table className="recipe-table">
        <thead><tr><th>Night</th><th>Role</th><th>Example</th><th>Effort</th></tr></thead>
        <tbody>
          <tr><td>Monday</td><td>Anchor cook</td><td>Turkey chili, rice</td><td>35 min</td></tr>
          <tr><td>Tuesday</td><td>Fast fresh</td><td>Egg fried rice</td><td>15 min</td></tr>
          <tr><td>Wednesday</td><td>Slow / freezer</td><td>Slow-cooker pulled chicken</td><td>10 min + wait</td></tr>
          <tr><td>Thursday</td><td>Leftovers, styled</td><td>Chili tacos + slaw</td><td>15 min</td></tr>
          <tr><td>Friday</td><td>Clean-out</td><td>Minestrone from stragglers</td><td>25 min</td></tr>
          <tr><td>Weekend</td><td>Flexible / prep</td><td>Sunday 2-hour prep session</td><td>2 hours</td></tr>
        </tbody>
      </table>
      <h2>What does a finished week look like?</h2>
      <p>
        Here is a complete sample week for a household of four, built from the template above with a $120 to $140
        grocery total at typical 2026 prices. Breakfasts repeat on autopilot — overnight oats, yogurt, eggs and toast —
        and lunches are deliberate leftovers plus one sandwich day. Every dinner notes its safety handling: cool within
        2 hours, refrigerate at 40°F or below, eat within 3 to 4 days, reheat to 165°F. Full storage tables live in our{" "}
        <a href="/food-storage-safety-guide">food storage safety guide</a>.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Day</th><th>Dinner</th><th>Lunch next day</th><th>Prep note</th></tr></thead>
        <tbody>
          <tr><td>Mon</td><td>Turkey chili + rice (35 min)</td><td>Chili bowls</td><td>Double batch; freeze half</td></tr>
          <tr><td>Tue</td><td>Egg fried rice + peas (15 min)</td><td>Fried-rice boxes</td><td>Uses Sunday rice</td></tr>
          <tr><td>Wed</td><td>Slow-cooker salsa chicken (10 min)</td><td>Chicken wraps</td><td>Start at lunch; 165°F</td></tr>
          <tr><td>Thu</td><td>Chili tacos + cabbage slaw</td><td>Taco leftovers</td><td>Restyles Monday, zero waste</td></tr>
          <tr><td>Fri</td><td>Minestrone clean-out (25 min)</td><td>Soup jars</td><td>All stragglers in</td></tr>
          <tr><td>Sat</td><td>Homemade pizza night</td><td>—</td><td>Fun; kids assemble</td></tr>
          <tr><td>Sun</td><td>Roast chicken + veg (prep)</td><td>—</td><td>2-hour session for next week</td></tr>
        </tbody>
      </table>
      <p>
        Grocery list for this week (grouped): produce — onions, carrots, cabbage, lettuce, tomatoes, limes, bananas,
        apples; meat and dairy — ground turkey, chicken leg quarters, eggs, cheese, yogurt, milk; dry goods — rice,
        oats, pasta, black beans, canned tomatoes, taco shells, pizza dough; frozen — peas, corn, berries. That is the
        whole trip. Notice the list reuses ingredients across meals — cabbage appears in tacos and soup, rice spans
        three days — which is the anti-waste engine. Price the week with our{" "}
        <a href="/recipe-cost-calculator">recipe cost calculator</a> and compare against your pre-planning baseline.
      </p>
      <h2>How do I build the printable template?</h2>
      <p>
        Draw or print a single page with three zones. The top zone is the week grid: seven columns for dinner, each
        with a small line for the lunch plan beneath. The middle zone is the grocery list in store-zone columns so one
        pass through the shop collects everything. The bottom zone is the use-first box — the three items that must be
        cooked this week — plus a freezer inventory corner so buried meals get eaten. Laminate it or slip it in a sheet
        protector and use dry-erase markers; the reusable ritual beats reprinting.
      </p>
      <p>
        Digital households can mirror the same three zones in a shared note: week grid, grouped list, and use-first
        reminder. The tool matters less than the visibility — whoever cooks must see the plan without asking. Keep a
        hall of fame of two weekly rotations that everyone liked; on chaotic weeks, run a proven rotation instead of
        inventing. Archive seasonal favorites (hearty soups for winter, grills for summer) and rotate them back like
        old friends.
      </p>
      <h2>What breaks plans — and how do I fix it?</h2>
      <p>
        Four failure modes cover nearly every abandoned plan. Over-ambition — seven new recipes — collapses by
        Wednesday; fix it with the anchor-plus-easy structure above. Missing ingredients kill momentum; fix it with a
        substitution list on the template (Greek yogurt for sour cream, any bean for any bean, frozen for fresh).
        Schedule surprises derail cooking nights; fix it with a freezer meal always ready, per our{" "}
        <a href="/freezer-meals-guide">freezer meals guide</a>. And picky-eater vetoes sour the cook; fix it with
        deconstructed serving — tacos, bowls, and pasta where each person assembles their own from shared components.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Problem</th><th>Symptom</th><th>Fix</th></tr></thead>
        <tbody>
          <tr><td>Over-ambition</td><td>Wednesday burnout</td><td>2 new + 3 repeat meals max</td></tr>
          <tr><td>Missing ingredient</td><td>Mid-recipe stall</td><td>Substitution list on template</td></tr>
          <tr><td>Schedule surprise</td><td>No time to cook</td><td>Freezer meal backup always</td></tr>
          <tr><td>Picky vetoes</td><td>Resentful cook</td><td>Deconstructed bowls and tacos</td></tr>
          <tr><td>Produce waste</td><td>Slimy greens Friday</td><td>Use-first box + clean-out night</td></tr>
        </tbody>
      </table>
      <p>
        Review monthly, not weekly: note which meals earned seconds, which produced waste, and what the grocery total
        averaged. Adjust the rotation, not your character. Planning is a skill that compounds — month three feels
        effortless in a way week one cannot promise.
      </p>
      <h2>Meal planning FAQ</h2>
      <FaqList faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ headline: "Weekly Meal Planning Template (Free + Easy)", description: "Printable layout, 5-step method, sample week and shopping tips.", slug: "/weekly-meal-planning-template" })).replace(/</g, "\\u003c") }} />
    </ArticleShell>
  );
}
