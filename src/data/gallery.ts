type DestinationStatus = "HTTCoin Accepted" | "Coming Soon" | "In Negotiation";

export type DestinationCategory =
  | "All"
  | "Beaches"
  | "Historic Sites"
  | "Cities"
  | "Adventures"
  | "Resorts"
  | "Mountains"
  | "Cultural";

export type DestinationRegion = "Global" | "Asia" | "Europe" | "Americas" | "Africa" | "Middle East" | "Oceania";

export interface DestinationAsset {
  id: string;
  src: string;
  filename: string;
  name: string;
  category: Exclude<DestinationCategory, "All">;
  region: Exclude<DestinationRegion, "Global">;
  status: DestinationStatus;
  launchDate: string;
  badge: "HTT Accepted" | "Coming Soon";
  type: "travel" | "partner";
}

const categories: Exclude<DestinationCategory, "All">[] = [
  "Beaches",
  "Historic Sites",
  "Cities",
  "Adventures",
  "Resorts",
  "Mountains",
  "Cultural",
];

const regions: Exclude<DestinationRegion, "Global">[] = ["Asia", "Europe", "Americas", "Africa", "Middle East", "Oceania"];

const statuses: DestinationStatus[] = ["HTTCoin Accepted", "Coming Soon", "In Negotiation"];

const launchWindows = ["Now Live", "Q4 2025", "Dec 1, 2025", "Q1 2026", "Q2 2026", "Q3 2026", "Q4 2026", "2027"];

const cityPool = [
  "Paris, France",
  "Rome, Italy",
  "Dubai, UAE",
  "Doha, Qatar",
  "New York, USA",
  "Tokyo, Japan",
  "Seoul, South Korea",
  "Bali, Indonesia",
  "Santorini, Greece",
  "Barcelona, Spain",
  "Marrakesh, Morocco",
  "Cape Town, South Africa",
  "Reykjavik, Iceland",
  "Sydney, Australia",
  "Queenstown, New Zealand",
  "Maldives",
  "Phuket, Thailand",
  "Bora Bora, French Polynesia",
  "Rio de Janeiro, Brazil",
  "Vancouver, Canada",
  "Chicago, USA",
  "San Francisco, USA",
  "Los Angeles, USA",
  "Lisbon, Portugal",
  "London, United Kingdom",
  "Edinburgh, Scotland",
  "Copenhagen, Denmark",
  "Stockholm, Sweden",
  "Helsinki, Finland",
  "Vienna, Austria",
  "Prague, Czech Republic",
  "Budapest, Hungary",
  "Warsaw, Poland",
  "Zurich, Switzerland",
  "Munich, Germany",
  "Frankfurt, Germany",
  "Milan, Italy",
  "Florence, Italy",
  "Istanbul, Türkiye",
  "Amman, Jordan",
  "Cairo, Egypt",
  "Nairobi, Kenya",
  "Arusha, Tanzania",
  "Victoria Falls, Zimbabwe",
  "Lima, Peru",
  "Santiago, Chile",
  "Buenos Aires, Argentina",
  "Cusco, Peru",
  "Mexico City, Mexico",
  "Cancun, Mexico",
  "Panama City, Panama",
  "Bogotá, Colombia",
  "Medellín, Colombia",
  "La Paz, Bolivia",
  "Anchorage, Alaska",
  "Honolulu, Hawaii",
  "Palawan, Philippines",
  "Siem Reap, Cambodia",
  "Kathmandu, Nepal",
  "Lucerne, Switzerland",
  "Monaco",
  "Doha Desert, Qatar",
  "Nice, France",
  "Ibiza, Spain",
];

const toUrl = (mod: unknown): string => {
  if (!mod) return "";
  if (typeof mod === "string") return mod;
  if (typeof mod === "object" && "default" in (mod as Record<string, unknown>)) {
    return String((mod as Record<string, unknown>).default);
  }
  return "";
};

const sortEntries = (entries: [string, unknown][]) => entries.sort((a, b) => a[0].localeCompare(b[0]));

const generalModules = import.meta.glob("../assets/gallery/all/*", { eager: true });
const qatarModules = import.meta.glob("../assets/gallery/qatar/*", { eager: true });

const buildAssets = (entries: [string, unknown][], type: "travel" | "partner") =>
  sortEntries(entries).map(([path, mod], index): DestinationAsset => {
    const normalizedIndex = index % cityPool.length;
    const regionIndex = index % regions.length;
    const categoryIndex = index % categories.length;
    const statusIndex = index % statuses.length;
    const launchIndex = index % launchWindows.length;

    const filename = path.split("/").pop() || `image-${index + 1}`;
    const src = toUrl(mod);

    return {
      id: `${type}-${filename}-${index}`,
      src,
      filename,
      name: cityPool[normalizedIndex],
      category: categories[categoryIndex],
      region: regions[regionIndex],
      status: statuses[statusIndex],
      launchDate: launchWindows[launchIndex],
      badge: statusIndex === 0 ? "HTT Accepted" : "Coming Soon",
      type,
    };
  });

export const destinationAssets: DestinationAsset[] = [
  ...buildAssets(Object.entries(generalModules), "travel"),
  ...buildAssets(Object.entries(qatarModules), "partner"),
];

export const destinationCategories: DestinationCategory[] = [
  "All",
  "Beaches",
  "Historic Sites",
  "Cities",
  "Adventures",
  "Resorts",
  "Mountains",
  "Cultural",
];

export const destinationRegions: DestinationRegion[] = ["Global", ...regions];

export const destinationSortOptions = ["Popular", "Alphabetical", "Coming Soon"] as const;

