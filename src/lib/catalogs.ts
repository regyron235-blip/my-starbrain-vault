import grandeCombinazione from "@/assets/grande-combinazione.webp";
import vaccaSaturno from "@/assets/vacca-saturno.webp";
import losTralaleritos from "@/assets/los-tralaleritos.webp";
import garamaMadundung from "@/assets/garama-madundung.webp";
import chimpanziniSpiderini from "@/assets/chimpanzini-spiderini.webp";
import lasTralaleritas from "@/assets/las-tralaleritas.webp";
import nuclearoDinossauro from "@/assets/nuclearo-dinossauro.webp";
import graipussMedussi from "@/assets/graipuss-medussi.webp";
import potHotspot from "@/assets/pot-hotspot.webp";
import tortugfinni from "@/assets/tortugfinni.webp";
import lasVaquitas from "@/assets/las-vaquitas.webp";
import chicleteria from "@/assets/chicleteria.webp";
import agarrini from "@/assets/agarrini.webp";

export type Rarity = "secret";

export interface Item {
  name: string;
  rarity: Rarity;
  image: string;
  income: number;
  priceTag: string;
  category?: "brainrot" | "mm2";
}

export interface Catalog {
  id: string;
  name: string;
  items: Item[];
}

const STEAL_IN_BRAINROT_ITEMS: Item[] = [
  { name: "Garama and Madundung",      rarity: "secret", image: garamaMadundung,      income: 50_000_000, priceTag: "10B" },
  { name: "Nuclearo Dinossauro",       rarity: "secret", image: nuclearoDinossauro,   income: 15_000_000, priceTag: "2.5B" },
  { name: "La Grande Combinassion",    rarity: "secret", image: grandeCombinazione,   income: 10_000_000, priceTag: "1B" },
  { name: "Chicleteria Bicicletera",   rarity: "secret", image: chicleteria,          income: 3_500_000,  priceTag: "750M" },
  { name: "Pot Hotspot",               rarity: "secret", image: potHotspot,           income: 2_500_000,  priceTag: "500M" },
  { name: "Graipuss Medussi",          rarity: "secret", image: graipussMedussi,      income: 1_000_000,  priceTag: "250M" },
  { name: "Los Candies",               rarity: "secret", image: `${import.meta.env.BASE_URL}Gemini_Generated_Image_i6bmuei6bmuei6bm.png`, income: 23_000_000,  priceTag: "150M" },
  { name: "Las Vaquitas Saturnitas",   rarity: "secret", image: lasVaquitas,          income: 750_000,    priceTag: "160M" },
  { name: "Las Tralaleritas",          rarity: "secret", image: lasTralaleritas,      income: 650_000,    priceTag: "150M" },
  { name: "Los Tralaleritos",          rarity: "secret", image: losTralaleritos,      income: 500_000,    priceTag: "150M" },
  { name: "Agarrini la Palini",        rarity: "secret", image: agarrini,             income: 425_000,    priceTag: "80M" },
  { name: "Tortugfinni Dragonfrutini", rarity: "secret", image: tortugfinni,          income: 350_000,    priceTag: "500M" },
  { name: "Chimpanzini Spiderini",     rarity: "secret", image: chimpanziniSpiderini, income: 325_000,    priceTag: "100M" },
  { name: "La Vacca Saturno Saturnita",rarity: "secret", image: vaccaSaturno,         income: 250_000,    priceTag: "50M" },
];

const MM2_DEFAULT_IMAGE = `${import.meta.env.BASE_URL}mm2-godly-placeholder.svg`;
const MM2_CRIMSON_IMAGE = `${import.meta.env.BASE_URL}mm2-knife-crimson.svg`;
const MM2_FROST_IMAGE = `${import.meta.env.BASE_URL}mm2-knife-frost.svg`;
const MM2_SHADOW_IMAGE = `${import.meta.env.BASE_URL}mm2-knife-shadow.svg`;
const MM2_TOXIC_IMAGE = `${import.meta.env.BASE_URL}mm2-knife-toxic.svg`;
const MURDER_MYSTERY_2_ITEMS: Item[] = [
  { name: "Heartblade",      rarity: "secret", category: "mm2", image: MM2_CRIMSON_IMAGE, income: 0, priceTag: "1.59" },
  { name: "Icebeam",         rarity: "secret", category: "mm2", image: MM2_FROST_IMAGE, income: 0, priceTag: "0.44" },
  { name: "Batwing",         rarity: "secret", category: "mm2", image: MM2_SHADOW_IMAGE, income: 0, priceTag: "0.98" },
  { name: "Nebula",          rarity: "secret", category: "mm2", image: MM2_SHADOW_IMAGE, income: 0, priceTag: "0.24" },
  { name: "Bioblade",        rarity: "secret", category: "mm2", image: MM2_TOXIC_IMAGE, income: 0, priceTag: "0.17" },
  { name: "Boneblade",       rarity: "secret", category: "mm2", image: MM2_CRIMSON_IMAGE, income: 0, priceTag: "0.19" },
  { name: "Candleflame",     rarity: "secret", category: "mm2", image: MM2_CRIMSON_IMAGE, income: 0, priceTag: "3.10" },
  { name: "Cookieblade",     rarity: "secret", category: "mm2", image: MM2_DEFAULT_IMAGE, income: 0, priceTag: "0.12" },
  { name: "Deathshard",      rarity: "secret", category: "mm2", image: MM2_SHADOW_IMAGE, income: 0, priceTag: "0.16" },
  { name: "Eggblade",        rarity: "secret", category: "mm2", image: MM2_DEFAULT_IMAGE, income: 0, priceTag: "0.10" },
  { name: "Eternal",         rarity: "secret", category: "mm2", image: MM2_SHADOW_IMAGE, income: 0, priceTag: "0.13" },
  { name: "Eternal II",      rarity: "secret", category: "mm2", image: MM2_SHADOW_IMAGE, income: 0, priceTag: "0.12" },
  { name: "Eternal III",     rarity: "secret", category: "mm2", image: MM2_SHADOW_IMAGE, income: 0, priceTag: "0.10" },
  { name: "Eternal IV",      rarity: "secret", category: "mm2", image: MM2_SHADOW_IMAGE, income: 0, priceTag: "0.09" },
  { name: "Fang",            rarity: "secret", category: "mm2", image: MM2_TOXIC_IMAGE, income: 0, priceTag: "0.15" },
  { name: "Flames",          rarity: "secret", category: "mm2", image: MM2_CRIMSON_IMAGE, income: 0, priceTag: "0.18" },
  { name: "Gemstone",        rarity: "secret", category: "mm2", image: MM2_SHADOW_IMAGE, income: 0, priceTag: "0.15" },
  { name: "Ghostblade",      rarity: "secret", category: "mm2", image: MM2_FROST_IMAGE, income: 0, priceTag: "0.16" },
  { name: "Hallows Blade",   rarity: "secret", category: "mm2", image: MM2_CRIMSON_IMAGE, income: 0, priceTag: "0.12" },
  { name: "Heat",            rarity: "secret", category: "mm2", image: MM2_CRIMSON_IMAGE, income: 0, priceTag: "0.20" },
  { name: "Ice Dragon",      rarity: "secret", category: "mm2", image: MM2_FROST_IMAGE, income: 0, priceTag: "0.14" },
  { name: "Ice Shard",       rarity: "secret", category: "mm2", image: MM2_FROST_IMAGE, income: 0, priceTag: "0.15" },
  { name: "Nightblade",      rarity: "secret", category: "mm2", image: MM2_SHADOW_IMAGE, income: 0, priceTag: "0.14" },
  { name: "Orange Seer",     rarity: "secret", category: "mm2", image: MM2_CRIMSON_IMAGE, income: 0, priceTag: "0.13" },
  { name: "Peppermint",      rarity: "secret", category: "mm2", image: MM2_FROST_IMAGE, income: 0, priceTag: "0.13" },
  { name: "Pixel",           rarity: "secret", category: "mm2", image: MM2_SHADOW_IMAGE, income: 0, priceTag: "0.20" },
  { name: "Prismatic",       rarity: "secret", category: "mm2", image: MM2_DEFAULT_IMAGE, income: 0, priceTag: "0.10" },
  { name: "Purple Seer",     rarity: "secret", category: "mm2", image: MM2_SHADOW_IMAGE, income: 0, priceTag: "0.13" },
  { name: "Red Seer",        rarity: "secret", category: "mm2", image: MM2_CRIMSON_IMAGE, income: 0, priceTag: "0.14" },
  { name: "Saw",             rarity: "secret", category: "mm2", image: MM2_SHADOW_IMAGE, income: 0, priceTag: "0.18" },
  { name: "Seer",            rarity: "secret", category: "mm2", image: MM2_DEFAULT_IMAGE, income: 0, priceTag: "0.06" },
  { name: "Slasher",         rarity: "secret", category: "mm2", image: MM2_SHADOW_IMAGE, income: 0, priceTag: "0.17" },
  { name: "Spider",          rarity: "secret", category: "mm2", image: MM2_SHADOW_IMAGE, income: 0, priceTag: "0.17" },
  { name: "Tides",           rarity: "secret", category: "mm2", image: MM2_FROST_IMAGE, income: 0, priceTag: "0.17" },
  { name: "Vampire's Edge",  rarity: "secret", category: "mm2", image: MM2_CRIMSON_IMAGE, income: 0, priceTag: "0.11" },
  { name: "Virtual",         rarity: "secret", category: "mm2", image: MM2_TOXIC_IMAGE, income: 0, priceTag: "0.15" },
  { name: "Winter's Edge",   rarity: "secret", category: "mm2", image: MM2_FROST_IMAGE, income: 0, priceTag: "0.11" },
  { name: "Yellow Seer",     rarity: "secret", category: "mm2", image: MM2_TOXIC_IMAGE, income: 0, priceTag: "0.13" },
];

export const CATALOGS: Catalog[] = [
  {
    id: "steal-in-brainrot",
    name: "Steal in brainrot",
    items: STEAL_IN_BRAINROT_ITEMS,
  },
  {
    id: "murder-mystery-2",
    name: "Murder Mystery 2",
    items: MURDER_MYSTERY_2_ITEMS,
  },
];
