import manali from "@/assets/manali.jpg";
import shimla from "@/assets/shimla.jpg";
import kasol from "@/assets/kasol.jpg";
import leh from "@/assets/leh.jpg";
import srinagar from "@/assets/srinagar.jpg";
import mussoorie from "@/assets/mussoorie.jpg";
import nainital from "@/assets/nainital.jpg";
import jaipur from "@/assets/jaipur.jpg";
import udaipur from "@/assets/udaipur.jpg";

export type Destination = {
  name: string;
  tagline: string;
  region: string;
  image: string;
  days: string;
  from: string;
};

export const destinations: Destination[] = [
  { name: "Manali", tagline: "Snowy peaks & pine forests", region: "Himachal Pradesh", image: manali, days: "4–6 Days", from: "₹12,499" },
  { name: "Shimla", tagline: "Colonial charm in the clouds", region: "Himachal Pradesh", image: shimla, days: "3–5 Days", from: "₹9,999" },
  { name: "Kasol", tagline: "Parvati valley serenity", region: "Himachal Pradesh", image: kasol, days: "3–4 Days", from: "₹8,799" },
  { name: "Leh Ladakh", tagline: "High-altitude wonder", region: "Ladakh", image: leh, days: "6–8 Days", from: "₹24,999" },
  { name: "Srinagar", tagline: "Shikaras on Dal Lake", region: "Kashmir", image: srinagar, days: "5–7 Days", from: "₹18,499" },
  { name: "Mussoorie", tagline: "Queen of the hills", region: "Uttarakhand", image: mussoorie, days: "3–4 Days", from: "₹8,499" },
  { name: "Nainital", tagline: "Lakeside escape", region: "Uttarakhand", image: nainital, days: "3–4 Days", from: "₹8,999" },
  { name: "Jaipur", tagline: "The Pink City of palaces", region: "Rajasthan", image: jaipur, days: "3–5 Days", from: "₹10,499" },
  { name: "Udaipur", tagline: "City of lakes & royalty", region: "Rajasthan", image: udaipur, days: "4–5 Days", from: "₹13,999" },
];

export type Package = {
  title: string;
  blurb: string;
  highlights: string[];
  duration: string;
  from: string;
  badge?: string;
};

export const packages: Package[] = [
  {
    title: "Mountain Escapes",
    blurb: "Snow-laced peaks, alpine air, and quiet forest stays.",
    highlights: ["Manali · Shimla · Kasol", "Premium boutique stays", "Curated viewpoints"],
    duration: "5 Nights",
    from: "₹14,999",
    badge: "Bestseller",
  },
  {
    title: "Honeymoon",
    blurb: "Intimate retreats designed for two — privacy, romance, magic.",
    highlights: ["Candle-lit dinners", "Private cabin stays", "Couple spa session"],
    duration: "6 Nights",
    from: "₹29,999",
    badge: "Romantic",
  },
  {
    title: "Family",
    blurb: "Comfortable journeys that work for grandparents and kids alike.",
    highlights: ["Step-free hotels", "Kid-friendly activities", "Private vehicle"],
    duration: "5 Nights",
    from: "₹17,499",
  },
  {
    title: "Adventure",
    blurb: "Trek, raft, ride and camp — guided by certified pros.",
    highlights: ["Hampta Pass trek", "River rafting", "Bike expeditions"],
    duration: "7 Nights",
    from: "₹22,999",
  },
  {
    title: "Spiritual",
    blurb: "Quiet journeys to sacred sites for grounding and reflection.",
    highlights: ["Char Dham circuit", "Rishikesh & Haridwar", "Guided rituals"],
    duration: "6 Nights",
    from: "₹16,499",
  },
  {
    title: "Luxury",
    blurb: "Heritage palaces, helicopter transfers, and private guides.",
    highlights: ["5-star palace stays", "Private butler", "Vintage car tours"],
    duration: "6 Nights",
    from: "₹74,999",
    badge: "Premium",
  },
];

export const routes = [
  { from: "Delhi", to: "Manali", distance: "540 km", duration: "12 hrs", price: "₹6,999" },
  { from: "Delhi", to: "Shimla", distance: "350 km", duration: "8 hrs", price: "₹5,499" },
  { from: "Delhi", to: "Kasol", distance: "520 km", duration: "11 hrs", price: "₹6,499" },
  { from: "Delhi", to: "Mussoorie", distance: "290 km", duration: "7 hrs", price: "₹4,999" },
  { from: "Delhi", to: "Nainital", distance: "300 km", duration: "7 hrs", price: "₹5,299" },
  { from: "Delhi", to: "Jaipur", distance: "280 km", duration: "5 hrs", price: "₹4,799" },
  { from: "Delhi", to: "Udaipur", distance: "660 km", duration: "10 hrs", price: "₹8,999" },
  { from: "Delhi", to: "Srinagar", distance: "830 km", duration: "16 hrs", price: "₹11,999" },
  { from: "Chandigarh", to: "Leh", distance: "750 km", duration: "18 hrs", price: "₹13,499" },
];
