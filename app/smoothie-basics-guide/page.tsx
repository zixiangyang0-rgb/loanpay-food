import type { Metadata } from "next";
import { ArticleShell, FaqList } from "../lib/article";
import { faqJsonLd, articleJsonLd } from "../lib/site";

export const metadata: Metadata = {
  title: "Smoothie Basics Guide: Ratios for Thick Blends",
  description:
    "Smoothie basics guide: liquid-fruit-protein ratios, 12 recipes, troubleshooting icy blends and prep packs. Blend thicker smoothies!",
  alternates: { canonical: "https://food.loanpaylogic.com/smoothie-basics-guide" },
  openGraph: {
    type: "article",
    url: "https://food.loanpaylogic.com/smoothie-basics-guide",
    title: "Smoothie Basics Guide: Ratios for Thick Blends",
    description:
      "Smoothie basics guide: liquid-fruit-protein ratios, 12 recipes, troubleshooting icy blends and prep packs. Blend thicker smoothies!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smoothie Basics Guide: Ratios for Thick Blends",
    description:
      "Smoothie basics guide: liquid-fruit-protein ratios, 12 recipes, troubleshooting icy blends and prep packs. Blend thicker smoothies!",
  },
};

const faqs = [
  {
    q: "Can you make smoothies without yogurt?",
    a: "Yes — replace yogurt with milk plus half a banana, silken tofu, soaked oats, or a quarter avocado for equal creaminess. Each brings body without tang: tofu adds protein silently, oats add fiber, avocado adds richness. Use frozen fruit as the chill source and add liquid slowly so the blend stays spoon-thick rather than drink-thin.",
  },
  {
    q: "How do you make smoothies thicker?",
    a: "Use frozen fruit instead of fresh plus ice, cut liquid to 1 cup per 2 cups of fruit, and add a thickener like half a banana, 3 tablespoons of oats, or 2 tablespoons of nut butter. Blend liquids and greens first, then add frozen ingredients gradually. Let the blender run a full 60 seconds — most thin smoothies are simply under-blended.",
  },
  {
    q: "Can you freeze smoothies for meal prep?",
    a: "Freeze blended smoothies in jars with headspace for up to 3 months, or prep freezer packs of portioned fruit, greens, and add-ins to blend fresh with liquid later. Thaw jars overnight in the fridge and shake well; separation is normal. Banana-heavy blends brown slightly but taste fine with a squeeze of lemon in the mix.",
  },
  {
    q: "Are fruit smoothies healthy or too much sugar?",
    a: "Whole-fruit smoothies retain fiber that slows sugar absorption, making them far better than juice — but portions and add-ins decide the verdict. Anchor with protein (yogurt, milk, tofu) and keep added sweeteners to a teaspoon of honey at most; let ripe fruit do the work. A 12 to 16-ounce smoothie built on fruit plus protein is a solid meal or snack for most people. General education, not medical advice.",
  },
  {
    q: "What liquid is best for smoothies?",
    a: "Dairy or soy milk maximizes protein and creaminess; almond and oat milks are lighter with less protein. Coconut water suits tropical blends, plain water works when fruit and yogurt carry the flavor, and kefir adds tang plus probiotics. Match liquid to goal — protein needs milk or soy, low calories need water or almond milk, dessert vibes need oat milk.",
  },
];

export default function Page() {
  return (
    <ArticleShell
      kicker="Sip it"
      title="Smoothie Basics Guide"
      intro="Smoothie basics come down to one ratio: liquid, fruit, protein, plus ice-cold thickness. Master the formula, twelve recipes, and fixes for every watery blend."
      related={[
        { href: "/healthy-snacks-guide", label: "Healthy Snacks Guide — more under-250 ideas" },
        { href: "/high-protein-meals-guide", label: "High-Protein Meals Guide — protein that satisfies" },
        { href: "/salad-meal-prep-guide", label: "Salad Meal Prep Guide — greens another way" },
        { href: "/meal-prep-for-beginners", label: "Meal Prep for Beginners — freezer packs Sunday" },
      ]}
      sources="USDA FoodData Central fruit, dairy and nut nutrient values."
    >
      <p>
        Great smoothies feel like a treat and behave like a meal, while bad ones feel like a chore and behave like
        juice — and the difference is rarely the recipe. It is the ratio, the temperature of the fruit, and the order
        things hit the blender. This smoothie basics guide teaches the universal formula first — one cup liquid, two
        cups fruit and vegetables, one protein anchor, one flavor bonus — then twelve recipes that prove its range
        from green breakfasts to dessert shakes. Frozen fruit is the non-negotiable hero: it chills and thickens
        simultaneously, where fresh fruit plus ice dilutes flavor into slush. For chewable counterparts see our{" "}
        <a href="/healthy-snacks-guide">healthy snacks guide</a>.
      </p>
      <h2>What is the universal smoothie ratio?</h2>
      <p>
        Build every smoothie in this order for the fewest chunks and least fuss. Pour in 1 cup of liquid first — milk,
        soy milk, almond milk, coconut water, or water — so the blades catch immediately instead of grinding dry fruit.
        Add soft ingredients and powders next: yogurt, nut butter, oats, cocoa, protein anchors, and fresh greens,
        which shred fully when they swim. Add 2 cups of fruit and vegetables with frozen items last and heaviest, so
        their weight pushes everything down into the blades. Blend liquids plus soft items for 20 seconds, then add
        frozen fruit and blend a full 60 seconds, tamping or pausing to redistribute once.
      </p>
      <p>
        The protein anchor decides whether your smoothie is a snack or a meal. A cup of Greek yogurt brings about
        20 grams; a cup of milk or soy milk brings 8; two tablespoons of peanut butter bring 8 plus staying power;
        half a cup of silken tofu brings 7 invisibly. Sweetness should come from ripe fruit first — a spotted banana or
        mango needs no help — with honey or dates as backup, capped at a teaspoon or two. Allergen flags follow the
        ingredients: milk (dairy yogurt, milk, kefir), peanut and tree nut (butters), soy (milk, tofu), and sesame in
        tahini-based blends.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Layer</th><th>Amount</th><th>Role</th><th>Examples</th></tr></thead>
        <tbody>
          <tr><td>Liquid</td><td>1 cup</td><td>Blade flow, base</td><td>Milk, soy milk, coconut water</td></tr>
          <tr><td>Fruit + veg</td><td>2 cups</td><td>Body, chill, fiber</td><td>Frozen berries, mango, spinach</td></tr>
          <tr><td>Protein anchor</td><td>1 serving</td><td>Satiety, meal status</td><td>Yogurt, tofu, nut butter</td></tr>
          <tr><td>Thickener</td><td>1 item</td><td>Spoon-thick texture</td><td>Banana, oats, avocado</td></tr>
          <tr><td>Flavor bonus</td><td>1–2 tsp</td><td>Character</td><td>Cocoa, cinnamon, vanilla, ginger</td></tr>
        </tbody>
      </table>
      <h2>Which 12 recipes prove the formula?</h2>
      <p>
        Each recipe makes one large (16-ounce) serving of 250 to 400 calories with 12 to 25 grams of protein. Blend
        order follows the universal method; nutrition uses USDA FoodData Central values for standard ingredients.
      </p>
      <table className="recipe-table">
        <thead><tr><th>#</th><th>Smoothie</th><th>Build</th><th>Protein</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Classic strawberry banana</td><td>Milk + yogurt + strawb. + banana (milk)</td><td>~18g</td></tr>
          <tr><td>2</td><td>Green beginner</td><td>Milk + mango + spinach + banana + PB (milk, peanut)</td><td>~16g</td></tr>
          <tr><td>3</td><td>Chocolate PB shake</td><td>Milk + cocoa + banana + PB (milk, peanut)</td><td>~18g</td></tr>
          <tr><td>4</td><td>Blueberry oat</td><td>Yogurt + milk + blueberries + oats (milk, wheat opt.)</td><td>~20g</td></tr>
          <tr><td>5</td><td>Tropical turmeric</td><td>Coconut water + mango + pineapple + ginger</td><td>Add yogurt for 15g</td></tr>
          <tr><td>6</td><td>Coffee breakfast</td><td>Milk + cold coffee + banana + oats + PB (milk, peanut)</td><td>~16g</td></tr>
          <tr><td>7</td><td>Silken tofu berry (dairy-free)</td><td>Soy milk + tofu + berries + banana (soy)</td><td>~15g</td></tr>
          <tr><td>8</td><td>Avocado lime</td><td>Milk + avocado + mango + lime + honey (milk)</td><td>Add yogurt for 16g</td></tr>
          <tr><td>9</td><td>Cherry almond</td><td>Milk + cherries + almond butter + cocoa (milk, tree nut)</td><td>~15g</td></tr>
          <tr><td>10</td><td>Kale pineapple</td><td>Coconut water + kale + pineapple + banana + yogurt (milk)</td><td>~14g</td></tr>
          <tr><td>11</td><td>Apple pie oats</td><td>Milk + apple + oats + yogurt + cinnamon (milk)</td><td>~17g</td></tr>
          <tr><td>12</td><td>Peach ginger kefir</td><td>Kefir + peach + banana + ginger (milk)</td><td>~14g</td></tr>
        </tbody>
      </table>
      <ol className="step-list">
        <li><strong>Freeze fruit right.</strong> Spread ripe chunks on a sheet pan, freeze solid, then bag. Pre-frozen store bags work equally well and waste nothing.</li>
        <li><strong>Liquids and soft first.</strong> Milk, yogurt, nut butter, oats, greens — blend 20 seconds until completely smooth and green-free.</li>
        <li><strong>Frozen fruit in stages.</strong> Add half, blend 30 seconds, tamp down, add the rest, blend 30 seconds more. Patience beats extra liquid.</li>
        <li><strong>Check the ribbon.</strong> The blend should fall off a spoon in a slow thick ribbon. Too thin: add frozen fruit. Too thick: add liquid one tablespoon at a time.</li>
        <li><strong>Serve immediately.</strong> Smoothies thicken as they sit; a squeeze of lemon keeps colors bright for packed jars. Rinse the blender right away — dried smoothie is cement.</li>
      </ol>
      <h2>Why is my smoothie watery, gritty, or brown?</h2>
      <p>
        Watery blends come from fresh fruit plus ice, too much liquid, or under-blending — switch to frozen fruit, cut
        liquid to a cup, and blend the full minute. Gritty textures come from under-ground greens, flax, or oats;
        blending liquids and soft items first, and grinding flax separately, fixes both. Brown or gray colors come from
        berry-spinach mixes oxidizing — they taste fine, but adding lemon, serving fast, or leaning into cocoa hides
        the hue. Bitter green smoothies need riper fruit, not more sweetener: a spotted banana rescues kale better
        than honey does.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Problem</th><th>Cause</th><th>Fix</th></tr></thead>
        <tbody>
          <tr><td>Watery</td><td>Fresh fruit + ice; too much liquid</td><td>Frozen fruit; 1 cup liquid; blend 60 sec</td></tr>
          <tr><td>Gritty</td><td>Greens/oats under-ground</td><td>Blend soft first; grind flax separate</td></tr>
          <tr><td>Separates fast</td><td>Thin base, long sitting</td><td>Add banana/oats; serve fresh</td></tr>
          <tr><td>Bitter</td><td>Under-ripe fruit, too many greens</td><td>Riper fruit; 1 handful greens max</td></tr>
          <tr><td>Too warm</td><td>Room-temp ingredients</td><td>All-frozen fruit; chilled liquid</td></tr>
        </tbody>
      </table>
      <h2>How do freezer packs make mornings effortless?</h2>
      <p>
        Freezer packs are Sunday prep for smoothie people: portion each recipe&apos;s fruit, vegetables, oats, and
        nut-butter dollops into bags or jars, freeze, and on busy mornings dump a pack into the blender with liquid
        and protein. They keep 3 months frozen, cost a fraction of bottled smoothies, and eliminate morning measuring
        entirely. Label each pack with its liquid and any fresh add-ins (yogurt, banana) so half-asleep cooks succeed.
        Pair the system with our <a href="/meal-prep-for-beginners">meal prep Sundays</a> — packs assemble in minutes
        alongside lunch boxes. This is general education, not medical or nutrition advice — see our{" "}
        <a href="/disclaimer">disclaimer</a>.
      </p>
      <h2>Smoothie FAQ</h2>
      <FaqList faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ headline: "Smoothie Basics Guide: Ratios for Thick Blends", description: "Ratios, 12 recipes, and fixes for thick creamy smoothies.", slug: "/smoothie-basics-guide" })).replace(/</g, "\\u003c") }} />
    </ArticleShell>
  );
}
