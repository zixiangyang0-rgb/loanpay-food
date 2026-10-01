import type { Metadata } from "next";
import { ArticleShell, FaqList } from "../lib/article";
import { faqJsonLd, articleJsonLd } from "../lib/site";

export const metadata: Metadata = {
  title: "Baking Basics Guide: Flour, Rise & First Loaf",
  description:
    "Baking basics guide: flour types, leaveners, measuring by weight and your first loaf step by step. Preheat and bake today!",
  alternates: { canonical: "https://food.loanpaylogic.com/baking-basics-guide" },
  openGraph: {
    type: "article",
    url: "https://food.loanpaylogic.com/baking-basics-guide",
    title: "Baking Basics Guide: Flour, Rise & First Loaf",
    description:
      "Baking basics guide: flour types, leaveners, measuring by weight and your first loaf step by step. Preheat and bake today!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baking Basics Guide: Flour, Rise & First Loaf",
    description:
      "Baking basics guide: flour types, leaveners, measuring by weight and finishing with your first loaf. Preheat and bake today!",
  },
};

const faqs = [
  {
    q: "Can you bake with all-purpose flour instead of bread flour?",
    a: "Yes for most beginner recipes — all-purpose flour (10 to 12 percent protein) makes tender loaves, pizza, and cookies, while bread flour (12 to 14 percent) gives chewier structure that suits artisan loaves and bagels. Expect slightly less rise and chew with all-purpose. For cakes and pastries, cake flour or a homemade blend with cornstarch works better than either.",
  },
  {
    q: "How do you tell if baking powder is still good?",
    a: "Drop half a teaspoon into hot water — vigorous bubbling means it's active, and flat fizz means replace it. Test baking soda with vinegar the same way. Replace opened leaveners yearly since humidity silently kills them, and date the can when you open it. Dead leavener is the top cause of flat beginner bakes.",
  },
  {
    q: "Why did my bread not rise?",
    a: "Dead yeast, water too hot (above 130°F kills yeast) or too cold (below 75°F stalls it), expired flour, or a cold drafty kitchen are the usual suspects. Proof yeast in warm 105 to 115°F water with a pinch of sugar — foam in 10 minutes means alive. Give dough a warm 75 to 80°F spot, full rising time, and patience; enriched doughs rise slower than lean ones.",
  },
  {
    q: "Should I measure flour by weight or cups?",
    a: "By weight — a cup of flour varies 20 percent or more with scooping style, enough to ruin hydration. A basic kitchen scale costs little and makes every bake repeatable: 120 grams per cup of all-purpose is the standard reference. If cup-measuring, spoon flour into the cup and level without packing or tapping.",
  },
  {
    q: "Can you freeze homemade bread?",
    a: "Yes — cool completely, wrap tightly in plastic plus foil or freezer bags with air pressed out, and freeze up to 3 months. Slice sandwich loaves before freezing so slices pop straight into the toaster. Thaw wrapped at room temperature to reabsorb moisture, and refresh crusty loaves 10 minutes in a 350°F oven.",
  },
];

export default function Page() {
  return (
    <ArticleShell
      kicker="From the oven"
      title="Baking Basics Guide"
      intro="Baking basics reward precision with magic: flour, water, salt, and leavening become bread. Learn ingredients, measuring, and a first loaf that works."
      related={[
        { href: "/sourdough-starter-guide", label: "Sourdough Starter Guide — your next 7-day project" },
        { href: "/pantry-staples-list", label: "Pantry Staples List — stock flour and leaveners" },
        { href: "/egg-recipes-guide", label: "Egg Recipes Guide — eggs in baking" },
        { href: "/kitchen-tools-essentials", label: "Kitchen Tools Essentials — scales and pans" },
      ]}
      sources="USDA FoodData Central flour nutrient values; standard baking references."
    >
      <p>
        Baking intimidates cooks who happily improvise dinner, because baking genuinely punishes improvisation — it is
        chemistry with a timer, where flour protein, water ratio, and oven heat decide texture before flavor enters the
        picture. But the chemistry is learnable in one afternoon, and this baking basics guide teaches exactly that
        foundation: which flours do what, how yeast versus baking powder versus soda leaven, why the scale beats the
        cup, and a first no-knead loaf engineered to succeed in ordinary kitchens. No stand mixer, no special
        equipment beyond a bowl, a scale, and a heavy pot. When the loaf bug bites harder, our{" "}
        <a href="/sourdough-starter-guide">sourdough starter guide</a> waits with a seven-day culture project.
      </p>
      <h2>What do flour, water, salt, and yeast each do?</h2>
      <p>
        Flour provides protein that hydrates into gluten — the elastic network trapping gas and building chew. Bread
        flour&apos;s 12 to 14 percent protein weaves strong networks for lofty loaves; all-purpose at 10 to 12 percent
        bakes tenderly across cookies, quick breads, and weeknight pizza; cake flour near 8 percent keeps crumbs
        delicate; whole-wheat adds bran that cuts gluten strands and drinks extra water, yielding denser, nuttier
        crumbs. Water hydrates everything and controls texture — wetter doughs (70 percent plus hydration) bake open
        and airy but handle stickily, while drier doughs shape easily and crumb tighter. Salt tightens gluten, slows
        yeast to develop flavor, and seasons the crumb — unsalted bread tastes flat no matter the technique. Yeast
        eats sugars and exhales carbon dioxide plus flavor compounds; instant yeast mixes straight into flour while
        active dry prefers proofing in warm water first.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Flour</th><th>Protein</th><th>Best for</th><th>Note</th></tr></thead>
        <tbody>
          <tr><td>Bread flour</td><td>12–14%</td><td>Loaves, bagels, pizza</td><td>Chewiest structure</td></tr>
          <tr><td>All-purpose</td><td>10–12%</td><td>Everyday baking</td><td>Most versatile first bag</td></tr>
          <tr><td>Whole wheat</td><td>~13% + bran</td><td>Hearty loaves (blended)</td><td>Absorbs more water</td></tr>
          <tr><td>Cake / pastry</td><td>7–9%</td><td>Cakes, tender pastry</td><td>Low gluten, soft crumb</td></tr>
          <tr><td>Rye</td><td>Low + pentosans</td><td>Blended loaves</td><td>Sticky; blend under 40%</td></tr>
        </tbody>
      </table>
      <p>
        Leaveners split into biological and chemical. Yeast works slowly (hours), building flavor as it raises —
        choose it for breads and pizza. Baking powder (double-acting) lifts twice, once wet and once hot, suiting
        muffins, pancakes, and cakes without acidic ingredients. Baking soda needs acid — buttermilk, yogurt, honey,
        brown sugar — and reacts immediately, so soda batters must hit the oven fast. Allergen note: nearly everything
        here contains wheat; gluten-free beginners should start with certified blends plus xanthan rather than
        improvising substitutions.
      </p>
      <h2>Why does weighing beat cup-measuring?</h2>
      <p>
        A cup of flour scooped from the bag can weigh 140 grams; spooned and leveled, 120; sifted, under 110 — a 25
        percent swing that turns dough from supple to brick. Weight erases the variance: 500 grams of flour is 500
        grams everywhere, every time, which makes recipes repeatable and troubleshooting possible. The reference
        anchors are 120 grams per cup of all-purpose flour, 200 grams per cup of water, and 5 to 7 grams (about 2
        teaspoons) of salt per 500 grams of flour. A $15 scale pays for itself in the first rescued bake. If cups are
        unavoidable, spoon flour into the cup and sweep level — never scoop, pack, or tap.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Ingredient</th><th>1 cup weight</th><th>Beginner note</th></tr></thead>
        <tbody>
          <tr><td>All-purpose flour</td><td>120g</td><td>Spoon + level if cup-using</td></tr>
          <tr><td>Bread flour</td><td>127g</td><td>Slightly denser cup</td></tr>
          <tr><td>Sugar</td><td>200g</td><td>Packs consistently</td></tr>
          <tr><td>Water / milk</td><td>240g</td><td>Milliliters equal grams</td></tr>
          <tr><td>Butter</td><td>227g (2 sticks)</td><td>Use wrapper marks or scale</td></tr>
          <tr><td>Salt (fine)</td><td>288g</td><td>Measure small amounts by weight</td></tr>
        </tbody>
      </table>
      <h2>How do I bake my first no-knead loaf?</h2>
      <p>
        This loaf needs a bowl, a spoon, a scale, and a lidded heavy pot — time does the kneading through a long slow
        ferment that also builds flavor. It contains wheat and is best eaten day one, toasted day two, and frozen
        sliced thereafter. Serving: one 1.5-pound boule, about twelve slices at roughly 160 calories each.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Ingredient</th><th>Amount</th><th>Role</th></tr></thead>
        <tbody>
          <tr><td>Bread or all-purpose flour</td><td>500g (about 4 cups)</td><td>Structure (wheat)</td></tr>
          <tr><td>Water, lukewarm</td><td>375g (1½ cups + 1 tbsp)</td><td>Hydration (75%)</td></tr>
          <tr><td>Fine sea salt</td><td>10g (2 tsp)</td><td>Flavor + gluten strength</td></tr>
          <tr><td>Instant yeast</td><td>3g (1 tsp)</td><td>Slow rise, deep flavor</td></tr>
        </tbody>
      </table>
      <ol className="step-list">
        <li><strong>Mix (5 min evening).</strong> Whisk flour, salt, yeast. Add water; stir to a shaggy sticky mass. Cover; rest 12–18 hours at room temperature until bubbly and doubled.</li>
        <li><strong>Shape (10 min).</strong> Turn onto a floured surface; fold edges to center four times into a ball. Rest seam-down on parchment 30–60 minutes while the oven heats.</li>
        <li><strong>Heat the pot (45 min).</strong> Place lidded Dutch oven inside; heat oven to 450°F a full 45 minutes. A screaming-hot pot is the rise engine.</li>
        <li><strong>Bake covered (30 min).</strong> Slash the top, lower parchment and dough into the pot, cover, bake 30 minutes. Steam trapped inside expands the loaf.</li>
        <li><strong>Bake uncovered (15 min).</strong> Remove lid; bake until deep mahogany, 15 minutes more. Internal temperature should read 200–210°F.</li>
        <li><strong>Cool fully (1 hr).</strong> Cool on a rack at least 1 hour — slicing early gums the crumb. Listen for the crackle: the sign of a great crust.</li>
      </ol>
      <h2>What fixes flat, dense, or burnt bakes?</h2>
      <p>
        Flat bread usually means dead leavener or cold rushing — test yeast and powder, then give full rise times in a
        genuinely warm spot. Dense crumbs come from too much flour (weigh it), under-proofing (the poke test: a dent
        that slowly springs halfway back is ready), or slicing hot. Pale crusts need more heat and time — bake to
        color, not the clock, and verify 200–210°F internal. Burnt bottoms need a lower rack position or a baking
        sheet shield beneath. Gummy lines through the middle mean underbaking: add five covered minutes next time even
        when the crust looks done.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Symptom</th><th>Likely cause</th><th>Fix</th></tr></thead>
        <tbody>
          <tr><td>Flat, no rise</td><td>Dead yeast/powder</td><td>Proof-test; replace yearly</td></tr>
          <tr><td>Dense brick</td><td>Too much flour; rushed rise</td><td>Weigh; poke-test proof</td></tr>
          <tr><td>Pale soft crust</td><td>Underbaked; cool oven</td><td>Thermometer-verify oven; bake darker</td></tr>
          <tr><td>Burnt bottom</td><td>Rack too low</td><td>Center rack; shield sheet below</td></tr>
          <tr><td>Gummy middle</td><td>Cut early; underbaked</td><td>Cool 1 hr; bake to 200°F+</td></tr>
        </tbody>
      </table>
      <p>
        Store bread cut-side down one day, bagged two days, refrigerated never (fridges stale bread fastest), frozen
        sliced for months per our <a href="/food-storage-safety-guide">storage guide</a>. This is general education,
        not medical or nutrition advice — see our <a href="/disclaimer">disclaimer</a>.
      </p>
      <h2>Baking FAQ</h2>
      <FaqList faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ headline: "Baking Basics Guide: Flour, Rise & First Loaf", description: "Flours, leaveners, weighing, and a first no-knead loaf.", slug: "/baking-basics-guide" })).replace(/</g, "\\u003c") }} />
    </ArticleShell>
  );
}
