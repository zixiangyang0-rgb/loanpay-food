import type { Metadata } from "next";
import { ArticleShell, FaqList } from "../lib/article";
import { faqJsonLd, articleJsonLd } from "../lib/site";

export const metadata: Metadata = {
  title: "Food Storage Safety Guide: Fridge & Freezer",
  description:
    "Food storage safety guide: fridge and freezer times, danger-zone rules, thawing methods and thermometer tips. Store food safely!",
  alternates: { canonical: "https://food.loanpaylogic.com/food-storage-safety-guide" },
  openGraph: {
    type: "article",
    url: "https://food.loanpaylogic.com/food-storage-safety-guide",
    title: "Food Storage Safety Guide: Fridge & Freezer",
    description:
      "Food storage safety guide: fridge and freezer times, danger-zone rules, thawing methods and thermometer tips. Store food safely!",
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Storage Safety Guide: Fridge & Freezer",
    description:
      "Food storage safety guide: fridge and freezer times, danger-zone rules, thawing methods and thermometer tips. Store food safely!",
  },
};

const faqs = [
  {
    q: "How long can food sit out at room temperature?",
    a: "Perishable food must be refrigerated within 2 hours, or within 1 hour when temperatures exceed 90°F, because bacteria multiply fastest between 40 and 140°F. This covers cooked meats, dairy, cut produce, and leftovers — not whole uncut fruits or bread. When in doubt about timing, throw it out; reheating cannot undo toxins some bacteria leave behind.",
  },
  {
    q: "Can you freeze milk and cheese?",
    a: "Milk freezes well for up to 3 months with headspace for expansion; shake after thawing since separation is normal. Hard cheeses freeze acceptably for cooking though texture turns crumbly; cream cheese and soft fresh cheeses separate and are best used in cooked dishes after freezing. Freeze shredded cheese flat in bags for easy portioning.",
  },
  {
    q: "How do you know if frozen food is still good?",
    a: "Food kept continuously at 0°F stays safe indefinitely, so judge quality instead: heavy ice crystals, gray-brown freezer burn patches, and stale or off odors after thawing signal quality loss. Burned spots are safe but taste papery — trim them and use the rest in soups or stews. Discard anything thawed with sliminess or sour smells.",
  },
  {
    q: "What temperature should my fridge and freezer be?",
    a: "Refrigerators at or below 40°F and freezers at 0°F, verified with appliance thermometers since built-in dials drift. Many home fridges run 42 to 44°F, quietly shortening every storage window. Check monthly, keep vents unblocked, and let hot food cool in shallow containers before shelving so one pot doesn't warm the whole fridge.",
  },
  {
    q: "Can you store raw meat above vegetables in the fridge?",
    a: "No — store raw meat, poultry, and fish on the bottom shelf in sealed containers so drips can never contaminate ready-to-eat foods below. Arrange shelves top to bottom as ready-to-eat foods, then whole produce, then raw seafood, whole cuts, ground meats, and poultry lowest. This single habit prevents the most common cross-contamination in home kitchens.",
  },
];

export default function Page() {
  return (
    <ArticleShell
      kicker="Safety first"
      title="Food Storage Safety Guide"
      intro="Food storage safety rests on four numbers: 40°F fridge, 0°F freezer, 2-hour rule, 165°F reheat. This guide expands them into every fridge, freezer, and thawing decision."
      related={[
        { href: "/leftover-safety-guide", label: "Leftover Safety Guide — reheat and reuse rules" },
        { href: "/freezer-meals-guide", label: "Freezer Meals Guide — pack for months" },
        { href: "/meal-prep-for-beginners", label: "Meal Prep for Beginners — prep within safe windows" },
        { href: "/pantry-staples-list", label: "Pantry Staples List — shelf-stable storage" },
      ]}
      sources="USDA FoodSafety.gov and FSIS cold-storage charts, danger-zone and thawing guidance."
    >
      <p>
        Food storage safety is the least glamorous cooking skill and the one that prevents the most misery. Every year,
        millions of Americans suffer foodborne illness, and the home kitchen — not restaurants — is where most
        mishandling happens: the chicken left out all afternoon, the soup cooled on the counter overnight, the
        five-day-old rice reheated on hope. The fix is four numbers and a thermometer. Keep the fridge at or below
        40°F and the freezer at 0°F. Get perishables into the cold within 2 hours (1 hour above 90°F). Reheat leftovers
        to 165°F. Everything below expands those numbers into charts, methods, and habits — cross-checked with USDA
        FoodSafety.gov guidance. For reheating specifics see our <a href="/leftover-safety-guide">leftover safety
        guide</a>.
      </p>
      <h2>What is the danger zone — and why do 2 hours matter?</h2>
      <p>
        Bacteria multiply fastest between 40°F and 140°F, doubling in as little as 20 minutes in the warm middle of
        that range. Two hours at room temperature can turn a safe dish into a risky one, and above 90°F — summer
        picnics, hot cars — the safe window shrinks to one hour. The insidious part is that some bacteria, notably
        Staphylococcus aureus and Bacillus cereus, leave behind heat-stable toxins that reheating cannot destroy. A
        pot of rice left out overnight is unsafe even after boiling, because the toxin survives the kill step. That is
        why cooling speed matters as much as cooking temperature.
      </p>
      <p>
        Fast cooling is a technique, not a wait. Divide big pots into shallow containers no more than two to three
        inches deep so heat escapes quickly; spread grains on sheet pans; use ice baths for stocks. Refrigerate once
        steaming stops — you need not wait for room temperature, and modern fridges handle the load if containers are
        shallow and spaced for airflow. Cut produce, dairy, deli meats, cooked meats, and leftovers all count as
        perishable; whole uncut fruits and vegetables, bread, and unopened canned goods do not. When timing is ever in
        doubt, the USDA rule stands: throw it out.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Situation</th><th>Safe limit</th><th>Action</th></tr></thead>
        <tbody>
          <tr><td>Room temperature (below 90°F)</td><td>2 hours</td><td>Refrigerate or discard</td></tr>
          <tr><td>Hot weather (above 90°F)</td><td>1 hour</td><td>Cooler with ice; discard after</td></tr>
          <tr><td>Cooling cooked food</td><td>2 hours to fridge</td><td>Shallow containers; ice bath</td></tr>
          <tr><td>Reheated leftovers</td><td>165°F throughout</td><td>Thermometer; stir halfway</td></tr>
          <tr><td>Picnic / lunchbox, no ice</td><td>2 hours</td><td>Freezer packs extend safely</td></tr>
        </tbody>
      </table>
      <h2>How long does everything keep in the fridge?</h2>
      <p>
        The master chart below condenses USDA cold-storage guidance for the foods home cooks actually store.
        Refrigerator means 40°F or below — verify with a thermometer, since dial settings drift and overstuffed
        fridges run warm. Dates count from cooking or opening, not from purchase, and the sniff test is not a safety
        test: pathogenic bacteria are odorless, so slime and sourness signal spoilage while danger can hide in
        normal-smelling food past its window.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Food</th><th>Fridge (≤40°F)</th><th>Freezer (0°F)</th></tr></thead>
        <tbody>
          <tr><td>Raw poultry pieces</td><td>1–2 days</td><td>9 months</td></tr>
          <tr><td>Raw ground meat</td><td>1–2 days</td><td>3–4 months</td></tr>
          <tr><td>Raw steaks, chops, roasts</td><td>3–5 days</td><td>4–12 months</td></tr>
          <tr><td>Raw fish, shellfish</td><td>1–2 days</td><td>3–8 months</td></tr>
          <tr><td>Cooked meats, leftovers</td><td>3–4 days</td><td>2–3 months</td></tr>
          <tr><td>Soups, stews, beans</td><td>3–4 days</td><td>2–3 months</td></tr>
          <tr><td>Eggs in shell</td><td>3–5 weeks</td><td>Do not freeze in shell</td></tr>
          <tr><td>Hard-boiled eggs</td><td>1 week (in shell)</td><td>Do not freeze</td></tr>
          <tr><td>Milk, yogurt (opened)</td><td>5–7 days / 1–2 weeks</td><td>Milk 3 mo; yogurt varies</td></tr>
          <tr><td>Deli meats (opened)</td><td>3–5 days</td><td>1–2 months</td></tr>
          <tr><td>Opened greens</td><td>1–3 days</td><td>Do not freeze fresh</td></tr>
          <tr><td>Pizza</td><td>3–4 days</td><td>1–2 months</td></tr>
        </tbody>
      </table>
      <h2>How should the fridge be organized?</h2>
      <p>
        Shelf order prevents drips from becoming disasters. Top shelves hold ready-to-eat foods — leftovers,
        drinks, yogurt, prepared foods — safest from contamination. Middle shelves hold dairy and eggs in their
        coldest steady zone (not the door, where temperatures swing with every opening). The bottom shelf holds raw
        meats in sealed containers, ordered with poultry lowest, then ground meats, then whole cuts and fish above
        them. Crispers hold produce with humidity set high for leafy greens and low for fruits; keep ethylene
        producers like apples and bananas away from ethylene-sensitive lettuce and herbs. Door shelves suit condiments
        only — never milk or eggs.
      </p>
      <ol className="step-list">
        <li><strong>Thermometer first.</strong> Place fridge and freezer thermometers today; adjust dials until readings hold 38–40°F and 0°F for 24 hours.</li>
        <li><strong>Zone the shelves.</strong> Ready-to-eat top, dairy middle, raw meats sealed on the bottom, produce in crispers, condiments in the door.</li>
        <li><strong>Container discipline.</strong> Shallow airtight containers, labeled with contents and date. No cans with metal lids for storage — transfer to glass or plastic.</li>
        <li><strong>Weekly audit.</strong> Every trash night, scan dates and pull use-first items into the next day&apos;s plan. Our weekly meal planning template has a use-first box for this.</li>
      </ol>
      <h2>What are the safe ways to thaw food?</h2>
      <p>
        Three methods are safe; the counter is not one of them. Refrigerator thawing is best — move tomorrow&apos;s
        protein down tonight; a pound thaws in about a day, kept safe throughout, and fridge-thawed meat may be
        refrozen without cooking. Cold-water thawing rescues forgotten mornings: sealed leak-proof packaging
        submerged with water changed every 30 minutes thaws a pound in about an hour, but cook it immediately and
        cook before any refreezing. Microwave thawing works for small portions cooked at once to 165°F. Never thaw at
        room temperature, never thaw in hot water, and never refreeze food left out over 2 hours.
      </p>
      <table className="recipe-table">
        <thead><tr><th>Method</th><th>Speed</th><th>After thawing</th></tr></thead>
        <tbody>
          <tr><td>Refrigerator</td><td>Overnight–24 hr per lb</td><td>Cook within 1–2 days (meat); may refreeze</td></tr>
          <tr><td>Cold water</td><td>~1 hr per lb</td><td>Cook immediately; cook before refreezing</td></tr>
          <tr><td>Microwave</td><td>Minutes</td><td>Cook immediately to safe temp</td></tr>
          <tr><td>Cook from frozen</td><td>+50% cook time</td><td>Thermometer confirms doneness</td></tr>
        </tbody>
      </table>
      <h2>Which safe cooking temperatures must I memorize?</h2>
      <p>
        Six numbers cover nearly everything: poultry of all kinds 165°F; ground meats 160°F; fresh pork, beef, veal,
        and lamb steaks, chops, and roasts 145°F with a 3-minute rest; fish and shellfish 145°F; eggs 160°F (cook until
        yolks and whites firm); leftovers and casseroles 165°F. Measure at the thickest point away from bone, and for
        whole birds check thigh, wing joint, and breast. Color lies — pink poultry can be safe at 165°F and brown
        burgers can be unsafe below 160°F — so the thermometer is the only verdict. More detail and reheat technique
        live in our <a href="/leftover-safety-guide">leftover safety guide</a>. This page is general education, not
        medical advice — see our <a href="/disclaimer">disclaimer</a>.
      </p>
      <h2>Food storage FAQ</h2>
      <FaqList faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ headline: "Food Storage Safety Guide: Fridge & Freezer", description: "Fridge and freezer times, danger-zone rules and thawing methods.", slug: "/food-storage-safety-guide" })).replace(/</g, "\\u003c") }} />
    </ArticleShell>
  );
}
