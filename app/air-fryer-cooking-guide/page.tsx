import type { Metadata } from "next";
import { ArticleShell, FaqList } from "../lib/article";
import { faqJsonLd, articleJsonLd } from "../lib/site";

export const metadata: Metadata = {
  title: "Air Fryer Cooking Guide: Times, Temps & Tips",
  description:
    "Air fryer cooking guide with times, temperatures, shake rules and foods to avoid. Crispy results with less oil — start cooking tonight!",
  alternates: { canonical: "https://food.loanpaylogic.com/air-fryer-cooking-guide" },
  openGraph: {
    type: "article",
    url: "https://food.loanpaylogic.com/air-fryer-cooking-guide",
    title: "Air Fryer Cooking Guide: Times, Temps & Tips",
    description:
      "Air fryer cooking guide with times, temperatures, shake rules and foods to avoid. Crispy results with less oil — start cooking tonight!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Air Fryer Cooking Guide: Times, Temps & Tips",
    description:
      "Air fryer cooking guide with times, temperatures, shake rules and foods to avoid. Crispy results with less oil — start cooking tonight!",
  },
};

const faqs = [
  {
    q: "What temperature do you cook chicken in an air fryer?",
    a: "Cook chicken breasts at 375°F for 16 to 20 minutes and thighs or drumsticks at 380°F for 18 to 22 minutes, always verifying 165°F internal with a thermometer. Flip or shake halfway for even browning. Because models vary by 25 degrees or more, start checking 3 minutes early on your first batch and note your machine's offset.",
  },
  {
    q: "Can you put aluminum foil in an air fryer?",
    a: "Yes, small amounts of foil in the basket are safe as long as foil is weighed down by food and never blocks all airflow or touches the heating element. Slings under meatloaf or fish make lifting easy. Avoid loose sheets that can blow into the heater, skip foil for acidic marinades on long cooks, and never line the outer drawer beneath the basket where grease pools.",
  },
  {
    q: "Why is my air fryer food soggy instead of crispy?",
    a: "Overcrowding is the top cause — piled food steams instead of crisping, so cook in a single layer with space between pieces. Wet batter drips through the basket instead of setting, excess oil pools rather than mists, and skipping the preheat adds minutes of steaming. Pat foods dry, mist lightly with oil, preheat 3 minutes, and batch-cook instead of cramming.",
  },
  {
    q: "Can you cook frozen foods directly in the air fryer?",
    a: "Yes — frozen fries, nuggets, fish sticks, and vegetables cook directly from frozen and often crisp better than thawed because surface ice evaporates fast. Add roughly 3 to 5 minutes to fresh-food times and shake halfway. Thaw thick raw meats like chicken breasts first for even doneness, and always verify poultry reaches 165°F and ground meats 160°F.",
  },
  {
    q: "Is air fryer cooking healthier than deep frying?",
    a: "Air frying uses roughly 70 to 80 percent less oil than deep frying while delivering similar crispness, which cuts significant calories per serving. The food itself matters more than the method — air-fried vegetables stay lean while air-fried processed snacks remain processed snacks. Use it to make whole foods craveable with a light oil mist rather than to justify extra breaded foods. General education, not medical advice.",
  },
];

export default function Page() {
  return (
    <ArticleShell
      kicker="Gadget mastery"
      title="Air Fryer Cooking Guide"
      intro="Air fryer cooking is convection heat plus a smart basket — small, fierce, and fast. This guide gives you times, temperatures, shake rules, and the short list of foods to never air-fry."
      related={[
        { href: "/30-minute-dinners", label: "30-Minute Dinners — weeknight formulas that love the air fryer" },
        { href: "/kitchen-tools-essentials", label: "Kitchen Tools Essentials — where the air fryer fits" },
        { href: "/food-storage-safety-guide", label: "Food Storage Safety Guide — keep the leftovers safe" },
        { href: "/healthy-snacks-guide", label: "Healthy Snacks Guide — crispy snacks under 250 calories" },
      ]}
      sources="USDA FoodSafety.gov safe cooking temperatures; USDA FoodData Central values; manufacturer guidance aggregates."
    >
      <p>
        An air fryer is a small convection oven that blows very hot air very fast around food in a perforated basket,
        and understanding that sentence is 80 percent of air fryer cooking mastery. The fierce circulating heat —
        typically 350°F to 400°F — crisps surfaces while the basket holes let rendered fat drip away, producing
        roast-chicken skin and potato edges with a teaspoon of oil instead of a quart. It preheats in three minutes,
        cooks single-layer batches 20 to 30 percent faster than a big oven, and keeps the kitchen cool in August. The
        tradeoff is capacity: most baskets hold dinner for two, not a crowd, so weeknight cooking for families means
        batching or pairing the fryer with the oven. This guide covers the times, the technique, and the honest limits.
      </p>
      <h2>How does an air fryer actually cook food?</h2>
      <p>
        The heating element sits inches above the food, and a fan drives that heat down and around at high velocity.
        Because the chamber is tiny, temperatures recover almost instantly when you open the drawer — unlike a big oven
        that sulks for minutes. That recovery speed is why frozen fries turn shatteringly crisp: surface moisture
        flashes off before starches can go gummy. Patting foods dry before oiling amplifies the effect, since the
        machine spends its energy browning instead of steaming. A light oil mist helps heat transfer and browning;
        a heavy pour pools, smokes, and softens — the single most common beginner error after overcrowding.
      </p>
      <p>
        Size shapes everything. A 4-quart basket fits about a pound of wings or two chicken breasts in one layer; a
        6-to-8-quart model handles four servings of vegetables or a small whole chicken. Fill past a single crowded
        layer and the center pieces steam while edges scorch, which is why batch-cooking beats cramming every time.
        Keep the first batch warm in a 200°F oven while the second crisps. For full dinners, let the fryer handle the
        crispy component — nuggets, roasted broccoli, potato wedges — while the stove or a pot from our{" "}
        <a href="/one-pot-dinners">one-pot dinners</a> handles grains and sauces.
      </p>
      <p>
        Safety basics deserve thirty seconds. Place the fryer with clearance on all sides since it vents hot air,
        never leave it running unattended around curious pets or kids, and clean dripped grease from the drawer after
        fatty cooks to prevent smoke. Use tongs rather than shaking hot baskets barehanded, and verify doneness with a
        thermometer — poultry 165°F, ground meats 160°F, fish 145°F — because golden color is not a thermometer. Our{" "}
        <a href="/food-storage-safety-guide">food storage safety guide</a> covers what happens after cooking.
      </p>
      <h2>What are the exact times and temperatures?</h2>
      <p>
        The chart below reflects mid-size basket models at the stated temperatures; check early the first time since
        machines vary. Shake the basket or flip pieces at halftime for every entry, and rest meats a few minutes so
        juices redistribute. Allergen notes flag wheat (breaded items), egg (nuggets, wash), fish, milk (cheese
        toppings), and soy (marinades) where typical.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Food</th><th>Temp</th><th>Time</th><th>Doneness cue</th></tr></thead>
        <tbody>
          <tr><td>Chicken breasts (8 oz)</td><td>375°F</td><td>16–20 min</td><td>165°F internal; juices clear</td></tr>
          <tr><td>Chicken thighs/drumsticks</td><td>380°F</td><td>18–22 min</td><td>165°F; skin crisp</td></tr>
          <tr><td>Chicken wings, fresh</td><td>400°F</td><td>20–25 min</td><td>165°F; deeply browned</td></tr>
          <tr><td>Frozen fries / tots</td><td>400°F</td><td>14–18 min</td><td>Golden, sizzling edges</td></tr>
          <tr><td>Salmon fillets (1-inch)</td><td>390°F</td><td>7–9 min</td><td>145°F; flakes easily</td></tr>
          <tr><td>Shrimp, large</td><td>390°F</td><td>5–7 min</td><td>Pink, opaque, curled</td></tr>
          <tr><td>Broccoli / cauliflower</td><td>390°F</td><td>8–12 min</td><td>Charred tips, tender stems</td></tr>
          <tr><td>Potato wedges</td><td>390°F</td><td>15–20 min</td><td>Crisp outside, fluffy inside</td></tr>
          <tr><td>Pork chops (1-inch)</td><td>380°F</td><td>12–15 min</td><td>145°F + 3-min rest</td></tr>
          <tr><td>Meatballs (1.5-inch)</td><td>380°F</td><td>10–13 min</td><td>160°F center</td></tr>
          <tr><td>Grilled cheese</td><td>370°F</td><td>6–8 min</td><td>Golden, cheese molten</td></tr>
          <tr><td>Reheating pizza slices</td><td>375°F</td><td>3–4 min</td><td>Crust crisp, cheese bubbles</td></tr>
        </tbody>
      </table>
      <p>
        Two technique upgrades separate good from great. First, brine or salt-ahead proteins: even 30 minutes of salt
        on chicken breasts improves juiciness more than any gadget trick. Second, finish with acid and fat — lemon,
        vinegar, or a yogurt drizzle over hot vegetables tastes restaurant-made. Batch-sequence smartly when cooking
        full meals: start the longest item (potatoes), hold it warm, then flash the quick item (shrimp) so everything
        lands hot together. Our <a href="/30-minute-dinners">30-minute dinners</a> collection marks which formulas are
        fryer-friendly.
      </p>
      <h2>What should you NEVER put in an air fryer?</h2>
      <p>
        The short blacklist saves messes and hazards. Wet batters (tempura, beer batter) drip through the basket and
        burn instead of setting — bread crumbs or panko are the fryer&apos;s language. Loose leafy greens fly into the
        heating element and scorch; roast kale as chips only weighed under a trivet. Large whole roasts block airflow
        and cook unevenly; popcorn kernels scatter and bounce unpopped; cheese alone melts through the grate into a
        smoking puddle. Very fatty bacon in big batches can smoke as rendered fat hits hot surfaces — cook small
        batches and drain between them.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Avoid or adapt</th><th>Why</th><th>Do this instead</th></tr></thead>
        <tbody>
          <tr><td>Wet batter coatings</td><td>Drips, burns, never sets</td><td>Bread with flour-egg-panko</td></tr>
          <tr><td>Loose greens (kale, spinach)</td><td>Fly into heater, scorch</td><td>Dense veg; greens in oven</td></tr>
          <tr><td>Oversized roasts</td><td>Raw center, burnt outside</td><td>Spatchcock or halve first</td></tr>
          <tr><td>Cheese solo (no carrier)</td><td>Melts through grate</td><td>Cheese inside breaded items</td></tr>
          <tr><td>Popcorn kernels</td><td>Uneven heat, unpopped</td><td>Stovetop or microwave popper</td></tr>
          <tr><td>Saucy marinades, pooled</td><td>Sugar burns, smokes</td><td>Pat dry; sauce after cooking</td></tr>
        </tbody>
      </table>
      <h2>How do I convert oven recipes to the air fryer?</h2>
      <p>
        The reliable rule: drop the oven temperature by 25°F and check at 75 percent of the oven time. A 425°F
        30-minute oven roast becomes roughly 400°F checked at 22 minutes. Halve the oil, keep everything in one layer,
        and shake halfway. Dense items (bone-in thighs, thick pork chops) need the full conversion plus thermometer
        confirmation; delicate items (fish, grilled cheese) need watching in the final minutes because browning
        accelerates. Write your machine&apos;s offset on painter&apos;s tape inside a cupboard door — after three cooks
        you will convert instinctively.
      </p>
      <ol className="step-list">
        <li><strong>Preheat 3 minutes.</strong> Run empty at cook temperature while you season. Food hitting hot metal sears instead of steaming.</li>
        <li><strong>Pat dry, then oil lightly.</strong> Moisture off, then 1–2 teaspoons oil or a mister pass per pound. Season after oiling so spices stick.</li>
        <li><strong>Load one layer.</strong> Space between pieces matters more than perfect arrangement. Batch rather than stack.</li>
        <li><strong>Shake or flip at halftime.</strong> Set a timer for half the expected time. Redistribute for even browning.</li>
        <li><strong>Thermometer, then rest.</strong> Verify 165°F poultry, 160°F ground meat, 145°F fish. Rest meats 3–5 minutes.</li>
        <li><strong>Sauce after, not during.</strong> Toss hot wings in sauce post-cook; sugary glazes burn under fryer heat.</li>
      </ol>
      <p>
        Serving notes: a 4-quart batch feeds two generously; scale by batching, not stuffing, and hold finished
        batches in a warm oven. Leftovers refrigerate within 2 hours, keep 3 to 4 days, and re-crisp in the fryer at
        375°F for 3 to 4 minutes — far better than the microwave per our{" "}
        <a href="/leftover-safety-guide">leftover guide</a>. For snack batches that fit the machine perfectly, see the{" "}
        <a href="/healthy-snacks-guide">healthy snacks guide</a>.
      </p>
      <h2>How do I clean and maintain it?</h2>
      <p>
        Wash the basket and drawer with hot soapy water after most cooks; soak ten minutes when cheese or sugar
        caramelizes on. Skip metal scouring pads that strip nonstick — a baking-soda paste with a soft sponge lifts
        stubborn spots. Wipe the heating element area monthly with a damp cloth once fully cool, and empty drawer
        grease before it smokes. Replace flaking nonstick baskets rather than cooking on bare damaged coating, and run
        the machine empty for two minutes after washing parts so everything dries before storage.
      </p>
      <h2>Air fryer FAQ</h2>
      <FaqList faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ headline: "Air Fryer Cooking Guide: Times, Temps & Tips", description: "Times, temperatures, shake rules and foods to avoid for crispy results.", slug: "/air-fryer-cooking-guide" })).replace(/</g, "\\u003c") }} />
    </ArticleShell>
  );
}
