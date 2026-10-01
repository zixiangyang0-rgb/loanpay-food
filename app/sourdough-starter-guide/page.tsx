import type { Metadata } from "next";
import { ArticleShell, FaqList } from "../lib/article";
import { faqJsonLd, articleJsonLd } from "../lib/site";

export const metadata: Metadata = {
  title: "Sourdough Starter Guide: 7-Day From Scratch",
  description:
    "Sourdough starter guide: 7-day from-scratch method, feeding ratios, troubleshooting and first loaf. Grow wild yeast today!",
  alternates: { canonical: "https://food.loanpaylogic.com/sourdough-starter-guide" },
  openGraph: {
    type: "article",
    url: "https://food.loanpaylogic.com/sourdough-starter-guide",
    title: "Sourdough Starter Guide: 7-Day From Scratch",
    description:
      "Sourdough starter guide: 7-day from-scratch method, feeding ratios, troubleshooting and first loaf. Grow wild yeast today!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourdough Starter Guide: 7-Day From Scratch",
    description:
      "Sourdough starter guide: 7-day from-scratch method, feeding ratios, troubleshooting and first loaf. Grow wild yeast today!",
  },
};

const faqs = [
  {
    q: "Can you freeze sourdough starter?",
    a: "Yes — feed it to peak activity, portion into small airtight containers or ice-cube trays, and freeze up to 12 months. Thaw overnight in the fridge, then feed daily for 3 to 5 days until it doubles predictably before baking. Freezing works as backup insurance; dehydrated flakes revived over a week are even more reliable for long storage.",
  },
  {
    q: "How often should I feed my sourdough starter?",
    a: "Counter-kept starters need feeding once or twice daily at room temperature, while fridge-kept starters need only weekly feeding. Feed at peak or just after — when domed, bubbly, and starting to fall — using roughly equal weights of flour and water to starter. Consistent timing matters more than exact ratios for beginners.",
  },
  {
    q: "Why does my sourdough starter smell like alcohol?",
    a: "That boozy acetone smell means hungry starter — it has consumed its food and produced alcohol and acids. Pour off any dark hooch liquid, discard half, and feed with fresh flour and water; repeat twice daily until the smell turns yeasty-sweet again. Chronic hooch means underfeeding, so increase feeding frequency or flour amount.",
  },
  {
    q: "Can you use tap water for sourdough starter?",
    a: "Usually yes — most municipal tap water works fine, though heavily chlorinated water can slow early cultures. If your starter stalls in the first days, try filtered water or tap water left uncovered overnight to dissipate chlorine. Avoid distilled water long-term since minerals support fermentation; consistency of water matters more than perfection.",
  },
  {
    q: "How do I know when my starter is ready to bake?",
    a: "It reliably doubles within 4 to 8 hours of feeding, passes the float test (a teaspoon dropped in water floats), smells pleasantly tangy-yeasty, and is at least 7 to 14 days old with consistent rises. Young starters that rise weakly make dense loaves — give them another week of twice-daily feeds. Patience here pays in crumb.",
  },
];

export default function Page() {
  return (
    <ArticleShell
      kicker="Wild yeast"
      title="Sourdough Starter Guide"
      intro="Sourdough starter is flour, water, and patience cultivated into wild yeast. This 7-day method, feeding math, and troubleshooting turn beginners into bakers."
      related={[
        { href: "/baking-basics-guide", label: "Baking Basics Guide — flour and first loaves" },
        { href: "/pantry-staples-list", label: "Pantry Staples List — flour wisdom" },
        { href: "/food-storage-safety-guide", label: "Food Storage Safety Guide — ferment safely" },
        { href: "/recipe-cost-calculator", label: "Recipe Cost Calculator — price your loaves" },
      ]}
      sources="USDA FoodData Central flour values; university extension fermentation guidance."
    >
      <p>
        A sourdough starter is a tiny managed ecosystem — wild yeasts and friendly bacteria living in flour and water,
        leavening bread while adding the tang and keeping quality commercial yeast cannot. Creating one asks almost
        nothing: flour, water, a jar, and a week of two-minute feedings. The microbes arrive on the flour itself;
        your job is simply feeding them on schedule until the culture stabilizes into predictable doubling. This
        sourdough starter guide gives the day-by-day method, the feeding ratios that sustain it for years, the fixes
        for every classic stall and smell, and the graduation bake that proves readiness. For yeasted foundations
        first, see our <a href="/baking-basics-guide">baking basics guide</a>.
      </p>
      <h2>What do I need to start — and what flour works?</h2>
      <p>
        Equipment is minimal: a quart-size glass jar or container, a kitchen scale, a spoon or chopstick, and a loose
        lid or cloth cover — never seal airtight, since fermentation gases need escape. Whole-grain flour (whole wheat
        or dark rye) jumpstarts cultures fastest because its bran carries the most wild microbes; begin with it, then
        transition to all-purpose or bread flour for maintenance once active. Unbleached flour is preferred since
        bleaching residues can hinder microbes. Room temperature around 70 to 78°F ferments briskly; colder kitchens
        work but move slower — park the jar atop the fridge or inside the oven with the light on for gentle warmth.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Supply</th><th>Spec</th><th>Why</th></tr></thead>
        <tbody>
          <tr><td>Glass jar, 1 quart</td><td>Wide mouth, loose lid</td><td>See rise; gases escape</td></tr>
          <tr><td>Kitchen scale</td><td>Gram precision</td><td>Ratios stay consistent</td></tr>
          <tr><td>Whole-wheat or rye flour</td><td>Unbleached</td><td>Microbe-rich jumpstart</td></tr>
          <tr><td>All-purpose / bread flour</td><td>Unbleached</td><td>Maintenance after day 4</td></tr>
          <tr><td>Water</td><td>Filtered if heavily chlorinated</td><td>Steady fermentation</td></tr>
          <tr><td>Rubber band</td><td>Around jar at feed line</td><td>Tracks doubling visually</td></tr>
        </tbody>
      </table>
      <h2>How do I grow a starter in 7 days?</h2>
      <p>
        Feed roughly every 24 hours, discarding half before each feeding so the culture stays manageable and acidity
        never overwhelms young microbes. Discard is not waste early on — it goes to the compost until the culture
        matures around day 7, after which discard stars in pancakes and crackers. Expect a quiet day 2, a false
        bacterial bloom around day 3 that smells sharp and then fades, and real yeast activity from day 4 onward.
        Contains wheat throughout; sourdough fermentation reduces but does not eliminate gluten — it is not safe for
        celiac diets.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Day</th><th>Action</th><th>What to expect</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Mix 60g whole-wheat flour + 60g water. Cover loosely.</td><td>Thick paste; nothing visible</td></tr>
          <tr><td>2</td><td>Rest untouched 24 hr.</td><td>Maybe a bubble; patience</td></tr>
          <tr><td>3</td><td>Discard half; feed 60g AP flour + 60g water.</td><td>False bloom possible; sharp smell ok</td></tr>
          <tr><td>4</td><td>Discard half; feed 60g AP flour + 60g water.</td><td>Bubbles return; yeasty smell starts</td></tr>
          <tr><td>5</td><td>Discard half; feed 60g AP + 60g water, twice today.</td><td>Rising toward double</td></tr>
          <tr><td>6</td><td>Twice-daily feeds continue.</td><td>Doubling in 6–8 hr; float test near</td></tr>
          <tr><td>7</td><td>Twice-daily feeds; float test.</td><td>Doubles predictably — ready to strengthen</td></tr>
        </tbody>
      </table>
      <ol className="step-list">
        <li><strong>Day 1: mix the seed.</strong> Combine 60g whole-wheat flour and 60g water in the jar to a thick paste. Scrape walls clean, mark the level with a rubber band, cover loosely, and park at 70–78°F.</li>
        <li><strong>Day 2: wait.</strong> Do nothing except observe. A bubble or two is a good sign; silence is normal. Keep the jar warm and covered.</li>
        <li><strong>Day 3: first feeding.</strong> Discard half the mixture. Stir in 60g all-purpose flour and 60g water. If it smells sharply acidic or shows brown liquid, that is early bacteria — feed and carry on.</li>
        <li><strong>Day 4: switch grains.</strong> Repeat the discard-half and feed with all-purpose flour. Bubbles should return with a fresher, yeastier smell as wild yeast takes over.</li>
        <li><strong>Days 5–6: twice daily.</strong> Feed morning and evening. The culture should rise toward doubling between feeds; adjust to peak-to-peak timing as it accelerates.</li>
        <li><strong>Day 7: test readiness.</strong> Feed in the morning; if it doubles in 4–8 hours and a teaspoon floats in water, it is alive and ready to strengthen for another week before its first loaf.</li>
      </ol>
      <h2>How do feeding ratios keep it alive for years?</h2>
      <p>
        The standard maintenance ratio is 1:1:1 by weight — equal parts starter, flour, and water — fed at peak,
        which at room temperature means daily. Refrigerator storage slows everything: feed weekly, pulling the jar out
        the night before baking for one or two room-temperature refresh feeds. Stiff starters (less water) favor acetic
        tang and survive neglect longer; liquid starters favor milky lactic notes and rise faster. Whole-grain feeds
        boost activity when sluggish; all-purpose keeps flavor mild for weekly bread. Name your jar, log its rhythm
        for a month, and the culture becomes a pet with opinions — bakers swear each matures into distinct character.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Routine</th><th>Ratio</th><th>Schedule</th><th>Suits</th></tr></thead>
        <tbody>
          <tr><td>Counter daily</td><td>1:1:1</td><td>Feed every 12–24 hr</td><td>Daily bakers</td></tr>
          <tr><td>Fridge weekly</td><td>1:2:2</td><td>Feed weekly; refresh before bake</td><td>Weekend bakers</td></tr>
          <tr><td>Stiff backup</td><td>1:2:1</td><td>Weekly; very forgiving</td><td>Travel, neglect insurance</td></tr>
          <tr><td>Warm-boost</td><td>1:1:1 whole grain</td><td>Twice daily 3 days</td><td>Reviving sluggish jars</td></tr>
        </tbody>
      </table>
      <h2>What fixes hooch, stalls, and strange smells?</h2>
      <p>
        Dark liquid (hooch) means hunger — pour it off or stir it in for extra sour, then feed twice daily until the
        smell turns sweet. Stalls around days 3 to 5 are usually the bacterial handoff, not death; keep feeding and
        warmth steady. Zero activity past day 7 suggests cold, chlorinated water, or bleached flour — fix the variable
        and continue. Pink or orange streaks, or fuzzy mold, are the one true failure: discard and start over, since
        those contaminants are unsafe. A healthy mature starter smells like yogurt and apples, domes at peak, and
        falls with bubbles breaking the surface.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Symptom</th><th>Meaning</th><th>Fix</th></tr></thead>
        <tbody>
          <tr><td>Dark hooch liquid</td><td>Hungry</td><td>Pour off; feed 2x daily</td></tr>
          <tr><td>Alcohol smell</td><td>Underfed</td><td>Increase feed size/frequency</td></tr>
          <tr><td>No rise by day 7</td><td>Cold/chlorine/bleach</td><td>Warm spot; filtered water; unbleached flour</td></tr>
          <tr><td>Pink/orange or fuzzy mold</td><td>Contamination</td><td>Discard; sterilize; restart</td></tr>
          <tr><td>Sluggish but alive</td><td>Young or cool</td><td>Whole-grain feeds; warmth; patience</td></tr>
        </tbody>
      </table>
      <p>
        Graduate with discard pancakes first (a cup of discard plus egg, milk, flour, and leavener), then a simple
        sourdough boule once doubling is bulletproof. Freeze backup starter as insurance and dry flakes for the
        decade — both methods are detailed in our FAQ above. This is general education, not medical or nutrition
        advice — see our <a href="/disclaimer">disclaimer</a>.
      </p>
      <h2>Sourdough FAQ</h2>
      <FaqList faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ headline: "Sourdough Starter Guide: 7-Day From Scratch", description: "7-day starter method with feeding ratios and fixes.", slug: "/sourdough-starter-guide" })).replace(/</g, "\\u003c") }} />
    </ArticleShell>
  );
}
