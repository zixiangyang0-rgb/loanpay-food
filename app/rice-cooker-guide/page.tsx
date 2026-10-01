import type { Metadata } from "next";
import { ArticleShell, FaqList } from "../lib/article";
import { faqJsonLd, articleJsonLd } from "../lib/site";

export const metadata: Metadata = {
  title: "Rice Cooker Guide: Fluffy Rice + 6 Bonus Uses",
  description:
    "Rice cooker guide: water ratios for every grain, fluffy fixes, 6 bonus uses and cleaning tips. Perfect rice every time!",
  alternates: { canonical: "https://food.loanpaylogic.com/rice-cooker-guide" },
  openGraph: {
    type: "article",
    url: "https://food.loanpaylogic.com/rice-cooker-guide",
    title: "Rice Cooker Guide: Fluffy Rice + 6 Bonus Uses",
    description:
      "Rice cooker guide: water ratios for every grain, fluffy fixes, 6 bonus uses and cleaning tips. Perfect rice every time!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rice Cooker Guide: Fluffy Rice + 6 Bonus Uses",
    description:
      "Rice cooker guide: water ratios for every grain, fluffy fixes, 6 bonus uses and cleaning tips. Perfect rice every time!",
  },
};

const faqs = [
  {
    q: "How much water do you put in a rice cooker?",
    a: "White long-grain rice uses a 1:1.5 to 1:2 rice-to-water ratio (many cookers mark 1:1 lines that work with their calibration), brown rice needs about 1:2.25, and jasmine thrives at 1:1.25 for fragrant distinct grains. Rinse rice first unless the package says enriched-and-do-not-rinse. When in doubt, use your cooker's cup and fill to its numbered line — that calibration beats any generic ratio.",
  },
  {
    q: "Can you cook quinoa in a rice cooker?",
    a: "Yes — rinse quinoa well to remove bitter saponins, then cook 1 cup quinoa with 1.5 cups water or broth on the white-rice setting, about 15 minutes plus a 5-minute rest. Fluff with a fork and season. The same setting handles couscous (steep, don't boil), steel-cut oats (porridge setting), and lentils with extra liquid.",
  },
  {
    q: "Why does my rice cooker rice turn out mushy?",
    a: "Too much water is the top cause — measure with the cooker's cup and lines, not mugs. Skipping the 10-minute rest lets surface moisture stay gummy instead of absorbing; lifting the lid during cooking releases steam the grains need; and old or humid-stored rice absorbs unpredictably. Rinse until water runs mostly clear and fluff immediately after resting.",
  },
  {
    q: "Can you freeze rice cooker rice?",
    a: "Yes — cool within 1 hour in shallow containers (Bacillus cereus safety rule), portion into freezer bags, and freeze up to 3 months. Microwave from frozen with a water sprinkle or steam to 165°F. Frozen rice actually fries better than fresh since drying firms the grains — day-old texture on demand.",
  },
  {
    q: "What else can you cook in a rice cooker?",
    a: "Oatmeal and porridge, steamed vegetables and dumplings in the tray, hard-boiled-style eggs, lentil and bean stews, one-pot chicken and rice, pancakes, and even small cakes all work. Avoid thick sugary mixtures that scorch, oversized roasts, and anything needing crisping. Think of it as a gentle steamer-simmerer, not an oven.",
  },
];

export default function Page() {
  return (
    <ArticleShell
      kicker="Set & forget"
      title="Rice Cooker Guide"
      intro="Rice cooker success is ratios plus rest: the right water for each grain, a 10-minute steam rest, and a fluff. Plus six bonus uses that earn the counter space."
      related={[
        { href: "/meal-prep-for-beginners", label: "Meal Prep for Beginners — batch grains Sunday" },
        { href: "/food-storage-safety-guide", label: "Food Storage Safety Guide — cool rice fast" },
        { href: "/one-pot-dinners", label: "One-Pot Dinners — chicken-and-rice pots" },
        { href: "/cheap-healthy-meals", label: "Cheap Healthy Meals — rice dinners under $1" },
      ]}
      sources="USDA FoodData Central grain nutrient values; FoodSafety.gov cooked-rice guidance."
    >
      <p>
        A rice cooker does one miraculous thing: it senses when water runs out and switches from cooking to warming
        before grains can scorch — a judgment call stovetop cooks learn through years of burnt bottoms. Basic
        cookers do this with a magnet and spring; fuzzy-logic models adjust through programmed curves for porridge,
        brown rice, and quick modes. Either way, the cook&apos;s job shrinks to three decisions: rinse or not, how
        much water, and the sacred ten-minute rest with the lid shut. This rice cooker guide nails all three for
        every common grain, fixes mushy and crunchy failures, and unlocks six bonus dishes — oatmeal, steamed
        dumplings, quinoa, lentils, chicken-and-rice, and pancakes — that turn a unitasker into a weeknight workhorse.
        For grain-bowl applications see our <a href="/meal-prep-for-beginners">meal prep guide</a>.
      </p>
      <h2>What water ratio does each grain need?</h2>
      <p>
        Ratios below assume standard white-rice mode and rinsed grains; brown-rice mode extends time and heat for
        bran-coated kernels. Always use the cup that came with your cooker — it is typically ¾ of a standard US cup —
        and fill water to the matching numbered line inside the pot, which encodes the manufacturer&apos;s
        calibration better than any internet ratio. Rinse all rice except enriched varieties labeled do-not-rinse
        (rinsing washes off added nutrients) and arborio intended creamy. After the click to warm, rest a full 10
        minutes sealed, then fluff with the paddle using slicing motions — mashing smears starch and gums the batch.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Grain (1 cooker-cup)</th><th>Water</th><th>Mode + rest</th><th>Yields</th></tr></thead>
        <tbody>
          <tr><td>Jasmine / long-grain white</td><td>To line 1 (1:1–1.25)</td><td>White + 10 min rest</td><td>~3 cups; ~205 cal/cup</td></tr>
          <tr><td>Basmati</td><td>1:1.5 (soak 20 min first)</td><td>White + 10 min rest</td><td>Long, distinct, fragrant</td></tr>
          <tr><td>Brown rice</td><td>1:2–2.25</td><td>Brown mode + 10 min</td><td>~3 cups; ~215 cal/cup + fiber</td></tr>
          <tr><td>Sushi / short-grain</td><td>1:1.2</td><td>White/sushi + 10 min</td><td>Sticky; season while warm</td></tr>
          <tr><td>Quinoa (rinsed)</td><td>1:1.5</td><td>White ~15 min + 5 rest</td><td>~8g protein/cup; fluff</td></tr>
          <tr><td>Steel-cut oats</td><td>1:3</td><td>Porridge + 5 rest</td><td>Creamy; toppings after</td></tr>
          <tr><td>Red / black lentils</td><td>1:2.5</td><td>White; check tender</td><td>Dal-style; season after</td></tr>
        </tbody>
      </table>
      <h2>Why is my rice mushy, crunchy, or scorched?</h2>
      <p>
        Mushy rice means excess water, skipped resting, or lid-lifting that collapsed steam — measure precisely,
        rest sealed, and keep the lid shut. Crunchy cores mean too little water, old dried-out rice, or opening to
        check — add quarter-cup hot water and extend warming ten minutes. Scorched bottoms mean sugary additions
        cooked under pressure of expectation — coconut milk and sweeteners belong stirred in after, not cooked
        through — or a damaged nonstick pot running hot. Gummy clumps mean no rinse and mashing instead of fluffing;
        rinse till mostly clear and slice-fluff gently. A persistent metallic or off taste means the inner pot needs
        washing attention or replacement — simmer lemon water, then reassess.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Symptom</th><th>Cause</th><th>Fix</th></tr></thead>
        <tbody>
          <tr><td>Mushy, wet</td><td>Too much water; no rest</td><td>Measure; rest 10 min sealed</td></tr>
          <tr><td>Crunchy core</td><td>Too little water; old rice</td><td>+¼ cup hot water; warm 10 min</td></tr>
          <tr><td>Scorched bottom</td><td>Sugars cooked in; worn pot</td><td>Add sweeteners after; check coating</td></tr>
          <tr><td>Gummy clumps</td><td>No rinse; mashed fluff</td><td>Rinse; slice-fluff motion</td></tr>
          <tr><td>Boil-over mess</td><td>Overfilled; starchy foam</td><td>Stay under max line; rinse well</td></tr>
        </tbody>
      </table>
      <h2>What 6 bonus dishes earn the counter space?</h2>
      <p>
        Each serves three to four and uses ordinary settings. Allergen flags noted; grains keep 3 to 4 days
        refrigerated with rice-cooling rules (spread to cool within 1 hour, refrigerate within 2) and reheat to
        165°F — full protocol in our <a href="/leftover-safety-guide">leftover guide</a>.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Bonus dish</th><th>Method</th><th>Serves / note</th></tr></thead>
        <tbody>
          <tr><td>Overnight oatmeal</td><td>Oats 1:3 milk-water, porridge mode</td><td>4; toppings morning (milk)</td></tr>
          <tr><td>Steamed veg + dumplings</td><td>Rice below, tray above, one cycle</td><td>Full meal; wheat/soy typical</td></tr>
          <tr><td>Jammy-style eggs</td><td>Eggs on trivet + 1 cup water, white mode 8 min</td><td>Ice bath after (egg)</td></tr>
          <tr><td>Lentil stew</td><td>Lentils + veg + broth 1:2.5, white mode</td><td>4; finish with lemon</td></tr>
          <tr><td>Chicken + rice (claypot style)</td><td>Rice + seasoned thighs on top, white mode; verify 165°F</td><td>4; rest 10 min</td></tr>
          <tr><td>Giant pancake</td><td>Batter in oiled pot, white mode 2 cycles</td><td>6 slices (wheat, egg, milk)</td></tr>
        </tbody>
      </table>
      <ol className="step-list">
        <li><strong>Perfect jasmine (serves 4).</strong> Rinse 2 cooker-cups jasmine until mostly clear. Add water to line 2. White mode; rest 10 minutes sealed; fluff. About 6 cups, ~205 calories per cup.</li>
        <li><strong>Brown rice that works.</strong> Rinse 2 cups brown rice; add water to 1:2.25. Brown mode (longer, hotter); rest 10 minutes. Chewy-tender, ~215 calories and 3.5g fiber per cup.</li>
        <li><strong>Chicken and rice one-pot.</strong> Rinse rice, add water to line, lay seasoned thigh strips on top with ginger and soy. White mode; verify thighs 165°F; rest 10 minutes; drizzle sesame oil. Contains soy; sesame opt.</li>
        <li><strong>Morning oatmeal.</strong> Steel-cut oats with milk-water 1:3 and a pinch of salt on porridge mode before bed (delay timer if trusted, else morning). Top with fruit and nuts. Contains milk; nuts opt.</li>
      </ol>
      <h2>How do I clean and descale it?</h2>
      <p>
        Wash the inner pot with soft sponge and mild soap — never metal scouring on nonstick — and wipe the heating
        plate and rim channel where starchy drips collect and burn. Soak stubborn rings with warm vinegar water, and
        run a water-only cycle with lemon slices monthly to deodorize. Replace inner pots whose coating flakes, and
        store with the lid ajar or a cloth inside so trapped moisture never musts. This is general education, not
        medical or nutrition advice — see our <a href="/disclaimer">disclaimer</a>.
      </p>
      <h2>Rice cooker FAQ</h2>
      <FaqList faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ headline: "Rice Cooker Guide: Fluffy Rice + 6 Bonus Uses", description: "Ratios for every grain plus 6 bonus cooker dishes.", slug: "/rice-cooker-guide" })).replace(/</g, "\\u003c") }} />
    </ArticleShell>
  );
}
