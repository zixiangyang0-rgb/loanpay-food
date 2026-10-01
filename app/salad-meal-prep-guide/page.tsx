import type { Metadata } from "next";
import { ArticleShell, FaqList } from "../lib/article";
import { faqJsonLd, articleJsonLd } from "../lib/site";

export const metadata: Metadata = {
  title: "Salad Meal Prep Guide: Crisp Jars All Week",
  description:
    "Salad meal prep guide: jar layering that stays crisp till Friday, dressings, protein adds and safety rules. Crunch into it today!",
  alternates: { canonical: "https://food.loanpaylogic.com/salad-meal-prep-guide" },
  openGraph: {
    type: "article",
    url: "https://food.loanpaylogic.com/salad-meal-prep-guide",
    title: "Salad Meal Prep Guide: Crisp Jars All Week",
    description:
      "Salad meal prep guide: jar layering that stays crisp till Friday, dressings, protein adds and safety rules. Crunch into it today!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salad Meal Prep Guide: Crisp Jars All Week",
    description:
      "Salad meal prep guide: jar layering that stays crisp till Friday, dressings, protein adds and safety rules. Crunch into it today!",
  },
};

const faqs = [
  {
    q: "How long do mason jar salads last in the fridge?",
    a: "Properly layered mason jar salads stay crisp 4 to 5 days refrigerated at 40°F or below, with dressing on the bottom and greens on top kept dry. Add proteins like chicken within the standard 3 to 4-day leftovers window. Shake into a bowl at serving time so dressing coats everything evenly.",
  },
  {
    q: "Can you meal prep salads with chicken?",
    a: "Yes — cooked chicken holds 3 to 4 days refrigerated, so Sunday-prepped chicken salads cover Monday to Wednesday; prep a second small batch Wednesday for the week's tail. Layer chicken above wet vegetables and below greens, keep dressing separate or at the jar bottom, and reheat nothing — these are cold salads. Verify chicken reached 165°F during cooking.",
  },
  {
    q: "How do you keep meal prep salads from getting soggy?",
    a: "Layer strategically: dressing on the very bottom, then hard vegetables (carrots, peppers, cucumbers), then grains and proteins, with delicate greens and herbs on top, completely dry. Dry greens thoroughly — a salad spinner matters more than any jar trick. Add tomatoes, avocados, nuts, and cheese at serving time, not Sunday.",
  },
  {
    q: "What are the best high-protein salad toppings?",
    a: "Grilled chicken, tuna, hard-boiled eggs, chickpeas and lentils, edamame, cottage cheese, nuts, and quinoa all add 7 to 20 grams per serving. Combine two — for example chicken plus chickpeas — to clear 30 grams in a large salad. Dress with olive-oil vinaigrettes rather than creamy bottles to keep the protein-to-calorie ratio strong.",
  },
  {
    q: "Are bagged salad greens safe to eat without washing?",
    a: "Greens labeled triple-washed or ready-to-eat need no further washing, and re-washing them can add contamination from sinks and hands. Unlabeled or farmers-market greens should be washed in cold water and dried thoroughly. Discard slimy or foul-smelling leaves, refrigerate promptly, and use opened bags within 1 to 3 days for best safety and crunch.",
  },
];

export default function Page() {
  return (
    <ArticleShell
      kicker="Fresh prep"
      title="Salad Meal Prep Guide"
      intro="Salad meal prep works when layers do the engineering: dressing at the bottom, sturdy vegetables next, greens high and dry. Five days of crisp jars from one session."
      related={[
        { href: "/meal-prep-for-beginners", label: "Meal Prep for Beginners — the Sunday system" },
        { href: "/food-storage-safety-guide", label: "Food Storage Safety Guide — greens and protein times" },
        { href: "/high-protein-meals-guide", label: "High-Protein Meals Guide — 30g salad builds" },
        { href: "/budget-grocery-guide", label: "Budget Grocery Guide — greens for less" },
      ]}
      sources="USDA FoodSafety.gov leftovers and produce guidance; USDA FoodData Central values."
    >
      <p>
        Soggy day-three salads have ended more meal-prep resolutions than any other disappointment, and the tragedy is
        that sogginess is pure engineering failure — dressing touching leaves for days dissolves cell walls as surely
        as rain. Salad meal prep done right inverts the problem: wide-mouth jars layered so dressing lives at the
        bottom, a barrier of hard vegetables and grains shields the greens, and the lettuce rides on top, cool and
        completely dry, for four to five days. This guide gives you the layering physics, five weekly salad formulas
        with proteins that satisfy, dressings that keep two weeks, and the food-safety clocks that govern every
        component. For hot-prep counterparts see our <a href="/meal-prep-for-beginners">meal prep for beginners</a>.
      </p>
      <h2>How does jar layering keep salads crisp?</h2>
      <p>
        Think of the jar as a five-story building with moisture discipline. Floor one is dressing — two to three
        tablespoons at the bottom, where it flavors without touching a single leaf. Floor two is hard vegetables that
        enjoy marinating: shredded carrots, diced peppers, red onion, cucumbers, celery, and chickpeas, which actually
        improve soaking in vinaigrette. Floor three is grains and proteins — quinoa, farro, rice, lentils, chicken,
        tuna, eggs — the heavy middle that compresses the layers below and supports the leaves above. Floor four is
        delicate extras: tomatoes, corn, shredded cheese. The penthouse is greens and fresh herbs, packed loosely and
        completely dry, sealed away from all moisture by everything beneath.
      </p>
      <p>
        Dryness deserves emphasis because wet greens die first. Wash lettuce and herbs, then spin or towel until no
        droplets remain — water pooled at the jar top rots leaves within two days while dry leaves thrive for five. Use
        wide-mouth quart jars for main-dish salads so layers slide out and shaking works; pint jars suit side salads.
        At serving time, shake vigorously into a bowl so bottom dressing coats everything, or eat layered straight from
        the jar with a long fork. Never store cut tomatoes or avocado in the jar beyond a day — add them fresh, since
        tomatoes weep and avocado browns despite lemon.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Layer (bottom → top)</th><th>What goes here</th><th>Why</th></tr></thead>
        <tbody>
          <tr><td>1. Dressing</td><td>2–3 tbsp vinaigrette</td><td>Flavor base, away from leaves</td></tr>
          <tr><td>2. Hard vegetables</td><td>Carrots, peppers, onion, chickpeas</td><td>Marinate happily, form barrier</td></tr>
          <tr><td>3. Grains + protein</td><td>Quinoa, chicken, tuna, eggs, lentils</td><td>Weight, satiety, structure</td></tr>
          <tr><td>4. Delicate extras</td><td>Corn, cheese, dried fruit</td><td>Texture without moisture</td></tr>
          <tr><td>5. Greens + herbs</td><td>Lettuce, spinach, arugula, cilantro</td><td>Stay dry and crisp on top</td></tr>
        </tbody>
      </table>
      <h2>Which 5 salads cover a week of lunches?</h2>
      <p>
        Each formula fills four quart jars (four lunches), runs 450 to 600 calories with 25 to 35 grams of protein, and
        costs $2 to $3.50 per jar. Allergen flags use the common nine. Jars keep 4 to 5 days refrigerated; chicken and
        egg components set the true limit at 3 to 4 days per USDA guidance, so eat chicken jars Monday to Wednesday
        and bean-based jars later.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Salad (4 jars)</th><th>Layers</th><th>Protein/jar</th></tr></thead>
        <tbody>
          <tr><td>Southwest chicken</td><td>Lime vinaigrette, peppers, corn, black beans, chicken, cheddar, romaine (milk)</td><td>~32g</td></tr>
          <tr><td>Mediterranean chickpea</td><td>Lemon-oregano dressing, cucumber, onion, chickpeas, feta, olives, spinach (milk)</td><td>~16g; add tuna for 30g (fish)</td></tr>
          <tr><td>Cobb-style turkey</td><td>Ranch-yogurt, carrots, celery, turkey, egg, blue cheese, mixed greens (egg, milk)</td><td>~30g</td></tr>
          <tr><td>Asian edamame crunch</td><td>Sesame-ginger dressing, cabbage, carrots, edamame, chicken, mandarins, greens (soy, sesame)</td><td>~30g</td></tr>
          <tr><td>Lentil feta power</td><td>Red-wine vinaigrette, beets, lentils, walnuts, feta, arugula (milk, tree nut)</td><td>~20g</td></tr>
        </tbody>
      </table>
      <ol className="step-list">
        <li><strong>Cook proteins first (30 min).</strong> Season and bake chicken to 165°F; boil eggs 9 minutes for jammy yolks; cook lentils or quinoa. Cool all within 2 hours.</li>
        <li><strong>Shake two dressings (10 min).</strong> One vinaigrette base doubled, split and flavored two ways — lime-cumin and lemon-oregano — covers the week. Refrigerate; keeps 2 weeks.</li>
        <li><strong>Chop the barrier vegetables (15 min).</strong> Carrots, peppers, cucumbers, onions, cabbage — the hard crew that shields greens. Dice uniformly for even marinating.</li>
        <li><strong>Wash and bone-dry greens (10 min).</strong> Spin or towel-dry thoroughly. Any dampness shortens jar life by days — this step is non-negotiable.</li>
        <li><strong>Layer twenty jars in assembly line (20 min).</strong> Dressing, hard veg, grains-protein, extras, greens. Seal, label with day, refrigerate at 40°F or below.</li>
        <li><strong>Finish fresh daily (2 min).</strong> Avocado, tomatoes, nuts, crunchy toppings, and extra herbs go on at serving time. Shake into a bowl and eat.</li>
      </ol>
      <h2>Which dressings survive the week?</h2>
      <p>
        Vinaigrettes are the meal-prep dressings because oil and vinegar keep two weeks refrigerated without breaking,
        while creamy dairy dressings last about a week and need whisking. The master ratio is three parts oil to one
        part acid plus a teaspoon of mustard per half-cup as emulsifier, salt, pepper, and a touch of honey. Variations
        spin endlessly: swap red-wine vinegar for lime and add cumin for Southwest; add oregano and garlic for Greek;
        add grated ginger, soy, and sesame oil for Asian. Creamy yogurt ranch (yogurt, herbs, garlic, lemon) covers the
        Cobb-style jars. Always dress by the jar-bottom measure — two to three tablespoons — since overdressed jars
        drown even perfect layers.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Dressing (makes ~1 cup)</th><th>Base</th><th>Keeps</th><th>Pairs with</th></tr></thead>
        <tbody>
          <tr><td>Lime-cumin vinaigrette</td><td>Olive oil + lime + cumin</td><td>2 weeks</td><td>Southwest jars</td></tr>
          <tr><td>Lemon-oregano</td><td>Olive oil + lemon + oregano</td><td>2 weeks</td><td>Mediterranean jars</td></tr>
          <tr><td>Sesame-ginger</td><td>Neutral oil + rice vinegar + soy (soy, sesame)</td><td>2 weeks</td><td>Asian jars</td></tr>
          <tr><td>Yogurt ranch</td><td>Greek yogurt + herbs + lemon (milk)</td><td>1 week</td><td>Cobb jars</td></tr>
          <tr><td>Balsamic-mustard</td><td>Olive oil + balsamic + Dijon</td><td>2 weeks</td><td>Lentil jars</td></tr>
        </tbody>
      </table>
      <h2>How do food-safety clocks govern salad prep?</h2>
      <p>
        Cold food follows the same rules as hot: refrigerate at 40°F or below, get prepped components chilled within
        2 hours, and respect each ingredient&apos;s window. Cooked chicken, turkey, and eggs hold 3 to 4 days; opened
        bagged greens hold 1 to 3 days; cut tomatoes and cucumbers hold 3 to 4 days; cooked grains and beans hold 3 to
        4 days. The jar is only as fresh as its oldest layer — a five-day greens jar with four-day chicken must be
        eaten by day four. Transport jars with freezer packs if lunch sits out over 2 hours, and when in doubt consult
        our <a href="/food-storage-safety-guide">food storage safety guide</a> and <a href="/leftover-safety-guide">leftover
        guide</a>. This is general education, not medical or nutrition advice — see our{" "}
        <a href="/disclaimer">disclaimer</a>.
      </p>
      <h2>Salad prep FAQ</h2>
      <FaqList faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ headline: "Salad Meal Prep Guide: Crisp Jars All Week", description: "Jar layering, dressings, and proteins for crisp weekly salads.", slug: "/salad-meal-prep-guide" })).replace(/</g, "\\u003c") }} />
    </ArticleShell>
  );
}
