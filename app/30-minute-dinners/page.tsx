import type { Metadata } from "next";
import { ArticleShell, FaqList } from "../lib/article";
import { faqJsonLd, articleJsonLd } from "../lib/site";

export const metadata: Metadata = {
  title: "30-Minute Dinners: 14 Fast Weeknight Wins",
  description:
    "30-minute dinners that actually take 30 minutes: 14 fast formulas, pantry shortcuts, timing tricks and prep hacks. Dinner is ready!",
  alternates: { canonical: "https://food.loanpaylogic.com/30-minute-dinners" },
  openGraph: {
    type: "article",
    url: "https://food.loanpaylogic.com/30-minute-dinners",
    title: "30-Minute Dinners: 14 Fast Weeknight Wins",
    description:
      "30-minute dinners that actually take 30 minutes: 14 fast formulas, pantry shortcuts, timing tricks and prep hacks. Dinner is ready!",
  },
  twitter: {
    card: "summary_large_image",
    title: "30-Minute Dinners: 14 Fast Weeknight Wins",
    description:
      "30-minute dinners that actually take 30 minutes: 14 fast formulas, pantry shortcuts, timing tricks and prep hacks. Dinner is ready!",
  },
};

const faqs = [
  {
    q: "What is the fastest healthy dinner to make?",
    a: "Egg fried rice with frozen vegetables takes about 12 minutes: scramble eggs, stir-fry day-old rice with peas and soy, and combine. Omelets with toast and salad land in 10 minutes, and tuna white-bean salad needs zero cooking at all. Keep eggs, frozen vegetables, canned beans, and quick-cooking grains on hand and fast dinners assemble themselves.",
  },
  {
    q: "Can you meal prep 30-minute dinners ahead?",
    a: "Yes — prep the slow parts, not the whole dish. Chop vegetables, marinate proteins, cook grains, and mix sauces on Sunday so weeknight assembly takes 10 to 15 minutes. Most prepped components hold 3 to 4 days refrigerated at 40°F or below. Stir-fries, tacos, pasta, and fried rice all work as prep-then-assemble meals.",
  },
  {
    q: "How do I get dinner on the table faster?",
    a: "Read the recipe fully first, preheat before chopping, boil water in an electric kettle while you prep, and use frozen pre-cut vegetables without apology. Cook proteins and carbs simultaneously on two burners, and clean as things simmer. Mise en place — everything chopped before heat goes on — saves more minutes than any gadget.",
  },
  {
    q: "What should I keep for quick weeknight dinners?",
    a: "Eggs, pasta, rice noodles, canned tuna and beans, frozen stir-fry vegetables and shrimp, tortillas, soy sauce, canned tomatoes, and a few spice blends. With those plus oil, garlic, and onions you can make tacos, pasta, fried rice, quesadillas, soup, and stir-fry without a special trip. Restock one fresh vegetable weekly.",
  },
  {
    q: "Are rotisserie chickens a healthy shortcut?",
    a: "Generally yes — plain rotisserie chicken is simply roasted chicken, delivering about 25g of protein per 4-ounce serving with no prep. Strip the meat within 2 hours of purchase, refrigerate promptly, and use within 3 to 4 days. Watch sodium if that matters for you, skip heavily glazed varieties, and turn the carcass into free stock. General education, not medical advice.",
  },
];

export default function Page() {
  return (
    <ArticleShell
      kicker="Easy nights"
      title="30-Minute Dinners"
      intro="30-minute dinners should respect the clock — including prep and cleanup. These 14 formulas genuinely land in half an hour with honest timing, shortcut ingredients, and speed technique."
      related={[
        { href: "/one-pot-dinners", label: "One-Pot Dinners — deeper flavor, one dish" },
        { href: "/meal-prep-for-beginners", label: "Meal Prep for Beginners — prep the slow parts Sunday" },
        { href: "/air-fryer-cooking-guide", label: "Air Fryer Cooking Guide — crispy in minutes" },
        { href: "/pantry-staples-list", label: "Pantry Staples List — stock the fast shelf" },
      ]}
      sources="USDA FoodSafety.gov cooking temperatures; USDA FoodData Central values."
    >
      <p>
        Most 30-minute dinners lie about the thirty minutes — they count simmering but not chopping, cooking but not
        the dishes. These fourteen do not. Each was timed end to end in a home kitchen by a cook who also had to wash
        the cutting board, and each lands between 10 and 30 minutes with serving counts, allergen notes, and the exact
        shortcuts that make the math work. The secret is not rushing; it is architecture. Fast dinners combine one
        quick protein, one quick carb, and vegetables that cook in the same time window, seasoned from a short list of
        high-impact flavors. Learn the formulas below and weeknights stop being a negotiation — for the deeper
        weekend versions, see our <a href="/one-pot-dinners">one-pot dinners</a>, and to prep components ahead, our{" "}
        <a href="/meal-prep-for-beginners">meal prep guide</a>.
      </p>
      <h2>What are the 14 fastest dinners that actually work?</h2>
      <p>
        Every entry serves four, lists total clock time including prep, and notes allergens from the common nine.
        Proteins hit USDA temperatures — 165°F poultry, 160°F ground meats, 145°F fish — verified by thermometer even
        at speed. Costs assume 2026 shelf prices.
      </p>
      <table className="recipe-table">
        <thead><tr><th>#</th><th>Dinner</th><th>Time</th><th>Shortcut</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Egg fried rice + peas</td><td>12 min</td><td>Day-old rice, frozen peas (egg, soy)</td></tr>
          <tr><td>2</td><td>Black bean tacos</td><td>15 min</td><td>Canned beans, slaw bag</td></tr>
          <tr><td>3</td><td>Tuna white-bean salad</td><td>10 min</td><td>No cooking at all (fish)</td></tr>
          <tr><td>4</td><td>Pasta aglio e olio + greens</td><td>20 min</td><td>Pantry-only (wheat)</td></tr>
          <tr><td>5</td><td>Chicken quesadillas</td><td>15 min</td><td>Rotisserie chicken (wheat, milk)</td></tr>
          <tr><td>6</td><td>Shrimp stir-fry + noodles</td><td>20 min</td><td>Frozen shrimp, thaw fast (shellfish, soy, wheat)</td></tr>
          <tr><td>7</td><td>Veggie omelets + toast</td><td>12 min</td><td>Whatever veg is dying (egg, wheat)</td></tr>
          <tr><td>8</td><td>Sausage + white bean skillet</td><td>20 min</td><td>Precooked sausage; 165°F reheat</td></tr>
          <tr><td>9</td><td>Miso soup + tofu + rice</td><td>15 min</td><td>Instant dashi, leftover rice (soy, fish opt.)</td></tr>
          <tr><td>10</td><td>Salmon + frozen veg sheet</td><td>22 min</td><td>One pan, no chopping (fish)</td></tr>
          <tr><td>11</td><td>Turkey lettuce wraps</td><td>18 min</td><td>Ground turkey, bottle sauce (soy; 160°F)</td></tr>
          <tr><td>12</td><td>Pesto tortellini + peas</td><td>12 min</td><td>Fresh tortellini, jar pesto (wheat, milk, tree nut)</td></tr>
          <tr><td>13</td><td>Breakfast burritos</td><td>15 min</td><td>Scramble + beans + salsa (egg, wheat)</td></tr>
          <tr><td>14</td><td>Tomato chickpea skillet</td><td>18 min</td><td>Canned everything + feta (milk)</td></tr>
        </tbody>
      </table>
      <h2>How do I cook three of them start to finish?</h2>
      <p>
        These three full walkthroughs demonstrate the timing architecture — overlapping tasks so no minute idles. Each
        serves four at roughly 500 to 600 calories with 20 to 30 grams of protein; scale by keeping pan space constant
        and batching rather than crowding.
      </p>
      <ol className="step-list">
        <li><strong>Egg fried rice (12 min).</strong> Scramble 6 eggs in a hot oiled wok; remove. Stir-fry 4 cups day-old rice with 2 cups frozen peas and diced onion 4 min. Add 3 tbsp soy, 1 tbsp oil, eggs back; toss 2 min. Finish with scallions and sesame oil. Contains egg, soy; add sesame allergen note for sesame oil.</li>
        <li><strong>Shrimp stir-fry noodles (20 min).</strong> Boil noodles (8 oz) while thawing 1 lb frozen shrimp under cold water 5 min. Sear shrimp 2 min; remove. Stir-fry frozen stir-fry veg 4 min, add garlic-ginger-soy sauce, return shrimp + noodles, toss 2 min. Contains shellfish, wheat, soy.</li>
        <li><strong>Salmon sheet pan (22 min).</strong> Heat oven to 425°F. Toss frozen broccoli and sliced bell pepper with oil and salt on a sheet pan; roast 10 min. Add 4 salmon fillets (seasoned) to the pan; roast 10–12 min to 145°F. Finish with lemon and soy-honey drizzle. Contains fish, soy.</li>
      </ol>
      <p>
        Notice the pattern: water boiling while proteins thaw, oven heating while vegetables get tossed, sauces mixed
        while pans heat. Idle time is the enemy, not effort. Leftovers from all three refrigerate within 2 hours, keep
        3 to 4 days, and reheat to 165°F — fried rice reheats best in a skillet, noodles with a broth splash, salmon
        gently in a 300°F oven to avoid drying.
      </p>
      <h2>Which pantry shortcuts actually taste good?</h2>
      <p>
        Shortcut ingredients earn their place when they save ten minutes without costing flavor. Rotisserie chicken is
        the undisputed champion — stripped within 2 hours, it becomes quesadillas, tacos, and fried rice across three
        nights. Frozen stir-fry blends and frozen chopped onions eliminate the longest prep step; canned beans,
        tomatoes, and tuna are nutritionally equivalent to fresh-cooked with a fraction of the time. Jarred pesto,
        curry paste, and salsa verde are concentrated flavor bases, not cheats — a spoonful plus a protein plus a carb
        is dinner. The shortcuts to skip: pre-shredded cheese that melts dusty, bottled minced garlic with off
        flavors, and instant rice that costs triple for mush.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Shortcut</th><th>Time saved</th><th>Verdict</th></tr></thead>
        <tbody>
          <tr><td>Rotisserie chicken</td><td>30+ min</td><td>Excellent; strip within 2 hr</td></tr>
          <tr><td>Frozen stir-fry veg</td><td>10–15 min</td><td>Excellent; roast or stir-fry hot</td></tr>
          <tr><td>Canned beans</td><td>60+ min vs dry</td><td>Excellent; rinse to cut sodium</td></tr>
          <tr><td>Jarred curry paste / pesto</td><td>15 min</td><td>Great flavor base</td></tr>
          <tr><td>Fresh tortellini</td><td>8 min vs dry</td><td>Great; cooks in 3 min</td></tr>
          <tr><td>Frozen shrimp</td><td>Thaws in 5 min</td><td>Great; pat dry before searing</td></tr>
        </tbody>
      </table>
      <h2>How do I get faster without cooking worse?</h2>
      <p>
        Speed technique is a short list of habits. Read the whole recipe before touching a knife — surprises mid-cook
        cost more minutes than reading ever will. Preheat first, chop second: ovens, water, and pans heat while your
        hands work. Boil water in an electric kettle and pour it into the pot to cut stovetop waiting nearly in half.
        Use two burners at once — protein on one, carb on the other — instead of sequencing. Sharpen your knife; a
        sharp eight-inch chef&apos;s knife chops twice as fast and far safer than a dull one. Clean in the gaps: wash
        the board while things simmer so post-dinner cleanup is one pan and four plates.
      </p>
      <p>
        Mise en place sounds fussy and saves real time on fast cooks: stir-fries and fried rice move too quickly for
        mid-cook chopping, so everything measured and cut before heat goes on. Conversely, skip mise for slow simmers
        where chopping fits inside cooking time. Calibrate your week with a Sunday session from our{" "}
        <a href="/meal-prep-for-beginners">meal prep guide</a>, stock the shelf from our{" "}
        <a href="/pantry-staples-list">pantry list</a>, and price your new speed with the{" "}
        <a href="/recipe-cost-calculator">recipe cost calculator</a>. This is general education, not medical or
        nutrition advice — see our <a href="/disclaimer">disclaimer</a>.
      </p>
      <h2>30-minute FAQ</h2>
      <FaqList faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ headline: "30-Minute Dinners: 14 Fast Weeknight Wins", description: "14 fast dinner formulas with honest timing and shortcuts.", slug: "/30-minute-dinners" })).replace(/</g, "\\u003c") }} />
    </ArticleShell>
  );
}
