import type { MetadataRoute } from "next";

const SITE = "https://food.loanpaylogic.com";

const SLUGS = [
  "",
  "/meal-prep-for-beginners",
  "/high-protein-meals-guide",
  "/cheap-healthy-meals",
  "/air-fryer-cooking-guide",
  "/cast-iron-skillet-guide",
  "/weekly-meal-planning-template",
  "/freezer-meals-guide",
  "/one-pot-dinners",
  "/30-minute-dinners",
  "/healthy-snacks-guide",
  "/smoothie-basics-guide",
  "/salad-meal-prep-guide",
  "/budget-grocery-guide",
  "/pantry-staples-list",
  "/food-storage-safety-guide",
  "/leftover-safety-guide",
  "/slow-cooker-basics",
  "/pressure-cooker-basics",
  "/baking-basics-guide",
  "/sourdough-starter-guide",
  "/egg-recipes-guide",
  "/pasta-cooking-guide",
  "/rice-cooker-guide",
  "/kitchen-tools-essentials",
  "/recipe-cost-calculator",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return SLUGS.map((s) => ({
    url: `${SITE}${s}`,
    lastModified: new Date("2026-10-01"),
    changeFrequency: s === "" ? "daily" : "monthly",
    priority: s === "" ? 1 : s.startsWith("/about") || s.startsWith("/contact") || s.startsWith("/privacy") || s.startsWith("/terms") || s.startsWith("/disclaimer") ? 0.4 : 0.8,
  }));
}
