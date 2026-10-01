import type { Metadata } from "next";
import { ArticleShell, FaqList } from "../lib/article";
import { faqJsonLd, articleJsonLd } from "../lib/site";

export const metadata: Metadata = {
  title: "Pasta Cooking Guide: Shapes, Salt & Sauces",
  description:
    "Pasta cooking guide: shapes matched to sauces, salt ratios, al dente timing and 6 weeknight recipes. Twirl better pasta tonight!",
  alternates: { canonical: "https://food.loanpaylogic.com/pasta-cooking-guide" },
  openGraph: {
    type: "article",
    url: "https://food.loanpaylogic.com/pasta-cooking-guide",
    title: "Pasta Cooking Guide: Shapes, Salt & Sauces",
    description:
      "Pasta cooking guide: shapes matched to sauces, salt ratios, al dente timing and 6 weeknight recipes. Twirl better pasta tonight!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pasta Cooking Guide: Shapes, Salt & Sauces",
    description:
      "Pasta cooking guide: shapes matched to sauces, salt ratios, al dente timing and 6 weeknight recipes. Twirl better pasta tonight!",
  },
};

const faqs = [
  {
    q: "How much salt should you put in pasta water?",
    a: "Salt generously — about 1 tablespoon of kosher salt per 4 quarts (1 gallon) of water, which should taste like mild seawater. Most salt stays in the water; the pasta absorbs just enough to season from within. Under-salted water makes bland noodles no sauce can fully rescue, so salt before the pasta goes in.",
  },
  {
    q: "Can you cook pasta in sauce instead of water?",
    a: "Yes for one-pot pastas — simmer dry pasta directly in broth or thin sauce with about 3.5 to 4 cups of liquid per 12 ounces of pasta, stirring often. The released starch thickens the sauce beautifully. It works best for short shapes and soupy sauces; delicate long pastas and precise Italian classics still prefer the big boiling pot.",
  },
  {
    q: "How do you keep pasta from sticking together?",
    a: "Use plenty of rapidly boiling water (4 quarts per pound), stir during the first two minutes when starch is stickiest, and never add oil to the water — it makes sauce slide off. Sauce immediately after draining instead of letting noodles sit, and save a cup of starchy pasta water to bind sauce to noodles.",
  },
  {
    q: "Can you freeze cooked pasta?",
    a: "Yes — freeze slightly undercooked pasta tossed lightly in sauce for up to 3 months; baked dishes like lasagna freeze best of all. Plain unsauced noodles clump and turn mushy, so always sauce before freezing. Thaw overnight in the fridge and reheat with a splash of water or broth to 165°F.",
  },
  {
    q: "Is whole wheat pasta healthier than white pasta?",
    a: "Whole-wheat pasta offers roughly triple the fiber (about 6g versus 2g per serving) plus more magnesium and B vitamins for similar calories, which extends fullness. Taste and texture differ — nuttier and firmer — so blend half-and-half while adjusting. Either fits a balanced diet paired with vegetables and protein. General education, not medical advice.",
  },
];

export default function Page() {
  return (
    <ArticleShell
      kicker="Pantry hero"
      title="Pasta Cooking Guide"
      intro="Pasta cooking is water, salt, timing, and sauce marriage. Match shapes to sauces, nail al dente, save the pasta water — six weeknight recipes included."
      related={[
        { href: "/one-pot-dinners", label: "One-Pot Dinners — pasta pots included" },
        { href: "/30-minute-dinners", label: "30-Minute Dinners — 20-minute pasta nights" },
        { href: "/cheap-healthy-meals", label: "Cheap Healthy Meals — pasta under $1.50" },
        { href: "/pantry-staples-list", label: "Pantry Staples List — the pasta shelf" },
      ]}
      sources="USDA FoodData Central pasta nutrient values; standard Italian technique references."
    >
      <p>
        Pasta is the world&apos;s most democratic dinner — a pound feeds four for about a dollar — yet the gap between
        gummy cafeteria noodles and restaurant silk comes down to four details home cooks routinely skip: abundant
        water, aggressive salt, shape-sauce matching, and the cup of starchy water saved before draining. This pasta
        cooking guide fixes all four, then hands you six weeknight recipes from pantry aglio e olio to baked tuna
        casserole. Nearly every recipe here contains wheat (gluten-free brown-rice or chickpea pastas substitute with
        adjusted timing); dairy appears in creamy entries and is flagged. For one-pot variants see our{" "}
        <a href="/one-pot-dinners">one-pot dinners</a>; for speed versions, <a href="/30-minute-dinners">30-minute
        dinners</a>.
      </p>
      <h2>How much water, salt, and time does pasta need?</h2>
      <p>
        The pot should be the biggest you own: 4 quarts of water per pound of pasta gives noodles room to move instead
        of sticking in a starchy crowd. Salt it once boiling — a tablespoon of kosher salt per 4 quarts — tasting like
        pleasant seawater; the noodles absorb seasoning no surface salt can replicate. Boil hard before the pasta
        enters, stir for the first two minutes to defeat sticking, and start tasting two minutes before the package
        time. Al dente means tender with a firm white-pinhead core — it finishes in hot sauce, so pull it one minute
        early whenever saucing. Reserve a full cup of pasta water before draining; its dissolved starch emulsifies
        sauce into clinging silk rather than an oily puddle.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Shape class</th><th>Time (dry)</th><th>Water</th><th>Al dente cue</th></tr></thead>
        <tbody>
          <tr><td>Long thin (spaghetti, linguine)</td><td>8–10 min</td><td>4 qt per lb</td><td>Bends without snapping; firm bite</td></tr>
          <tr><td>Short tubes (penne, rigatoni)</td><td>10–12 min</td><td>4 qt per lb</td><td>White pinhead at core</td></tr>
          <tr><td>Small soup (orzo, ditalini)</td><td>7–9 min</td><td>4 qt per lb</td><td>Tender, distinct grains</td></tr>
          <tr><td>Filled (tortellini, ravioli fresh)</td><td>3–5 min</td><td>Gentle boil</td><td>Floats + 1 minute</td></tr>
          <tr><td>Whole-wheat dry</td><td>9–12 min</td><td>4 qt per lb</td><td>Nutty firm; test early</td></tr>
          <tr><td>Chickpea / lentil GF</td><td>6–9 min</td><td>Extra water; stir often</td><td>Foams more; rinse after</td></tr>
        </tbody>
      </table>
      <h2>Which shapes go with which sauces?</h2>
      <p>
        Matching is physics: ridges and tubes trap chunky sauces, flat ribbons carry creamy coatings, tiny shapes
        swim in broth, and delicate strands suit light oil. Rigatoni and penne grip ragù and chunky vegetable sauces
        in their hollows; spaghetti and linguine shine with olive-oil, carbonara-style, and smooth tomato sauces that
        coat evenly; farfalle and fusilli catch peas, corn, and crumbled sausage in their folds; orzo and ditalini
        belong in soups; lasagna sheets and cannelloni exist for layering and stuffing. When substituting, stay within
        the family — tubes for tubes, strands for strands — and adjust timing by testing, not by package alone.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Shape</th><th>Best sauces</th><th>Avoid</th></tr></thead>
        <tbody>
          <tr><td>Spaghetti / linguine</td><td>Aglio e olio, carbonara, smooth marinara</td><td>Heavy meat chunks (slide off)</td></tr>
          <tr><td>Penne / rigatoni</td><td>Ragù, vodka sauce, baked dishes</td><td>Thin broths</td></tr>
          <tr><td>Fusilli / farfalle</td><td>Pesto, primavera, sausage + greens</td><td>Delicate butter sauces</td></tr>
          <tr><td>Orzo / ditalini</td><td>Soups, pilaf-style, lemon-herb</td><td>Heavy ragù</td></tr>
          <tr><td>Lasagna / shells</td><td>Layered bakes, stuffed fillings</td><td>Quick oil tosses</td></tr>
        </tbody>
      </table>
      <h2>What are 6 weeknight pasta recipes worth repeating?</h2>
      <p>
        Each serves four, costs $1 to $2 per plate, and lands in 12 to 40 minutes. All contain wheat; dairy and other
        allergens flagged per recipe. Leftovers refrigerate within 2 hours, keep 3 to 4 days, and reheat with
        splashed water to 165°F.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Recipe</th><th>Time</th><th>Cost/plate</th><th>Allergens</th></tr></thead>
        <tbody>
          <tr><td>Aglio e olio + greens</td><td>20 min</td><td>~$0.90</td><td>Wheat</td></tr>
          <tr><td>Pantry marinara + penne</td><td>25 min</td><td>~$1.10</td><td>Wheat (cheese opt. milk)</td></tr>
          <tr><td>Tuna pasta bake</td><td>35 min</td><td>~$1.40</td><td>Wheat, fish, milk</td></tr>
          <tr><td>Lemon ricotta spaghetti</td><td>20 min</td><td>~$1.50</td><td>Wheat, milk</td></tr>
          <tr><td>Sausage + broccoli orecchiette</td><td>30 min</td><td>~$1.80</td><td>Wheat (cheese opt.)</td></tr>
          <tr><td>Chickpea tomato pasta</td><td>25 min</td><td>~$1.10</td><td>Wheat</td></tr>
        </tbody>
      </table>
      <ol className="step-list">
        <li><strong>Aglio e olio (serves 4).</strong> Boil 12 oz spaghetti in well-salted water. Meanwhile gently sizzle 6 sliced garlic cloves and ½ tsp red pepper in ⅓ cup olive oil until pale gold — never brown. Toss pasta with oil, 1 cup pasta water, parsley, and lemon. Greens wilted in at the end make it dinner.</li>
        <li><strong>Lemon ricotta spaghetti.</strong> Whisk 1 cup ricotta with lemon zest + juice, parmesan, and black pepper. Toss with hot spaghetti and pasta water until glossy. Peas or asparagus join in spring. Contains wheat, milk.</li>
        <li><strong>Sausage broccoli pasta.</strong> Brown sliced Italian sausage (160°F); remove. Sizzle broccoli florets in the fat, add garlic, then ½ cup pasta water. Toss with orecchiette and parmesan. Contains wheat; milk opt.</li>
        <li><strong>Tuna bake (feeds 6).</strong> Mix cooked penne with 2 cans tuna, peas, creamy sauce, and breadcrumbs. Bake 375°F for 20 minutes to a 165°F center. Freezes in portions 3 months. Contains wheat, fish, milk.</li>
      </ol>
      <h2>How do restaurants get sauce to cling like that?</h2>
      <p>
        The move is finishing: transfer nearly-done pasta directly into the simmering sauce with a half-cup of pasta
        water and toss vigorously over heat for one to two minutes. Starch thickens, oil emulsifies, and noodles
        absorb flavor instead of wearing sauce like a coat. Cheese goes in off-heat to melt creamy rather than
        stringy; butter swirled in at the end adds restaurant gloss; acid — lemon or a vinegar splash — lifts rich
        sauces at the table. Plate in warm bowls so dinner stays hot, and serve extra cheese and pepper at the table
        rather than in the pot. This is general education, not medical or nutrition advice — see our{" "}
        <a href="/disclaimer">disclaimer</a>.
      </p>
      <h2>Pasta FAQ</h2>
      <FaqList faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ headline: "Pasta Cooking Guide: Shapes, Salt & Sauces", description: "Shape-sauce matching, salting, timing and 6 recipes.", slug: "/pasta-cooking-guide" })).replace(/</g, "\\u003c") }} />
    </ArticleShell>
  );
}
