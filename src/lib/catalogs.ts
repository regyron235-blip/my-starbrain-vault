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

const MURDER_MYSTERY_2_ITEMS: Item[] = [
  { name: "Heartblade",                rarity: "secret", image: `${import.meta.env.BASE_URL}Gemini_Generated_Image_p6mfssp6mfssp6mf.png`, income: 0, priceTag: "1.59" },
  { name: "Icebeam",                   rarity: "secret", image: `${import.meta.env.BASE_URL}Gemini_Generated_Image_icebeam.png`, income: 0, priceTag: "18" },
  { name: "Luger",                     rarity: "secret", image: `${import.meta.env.BASE_URL}Gemini_Generated_Image_luger.png`, income: 0, priceTag: "35" },
  { name: "Batwing",                   rarity: "secret", image: `${import.meta.env.BASE_URL}Gemini_Generated_Image_batwing.png`, income: 0, priceTag: "40" },
  { name: "Darkbringer",               rarity: "secret", image: `${import.meta.env.BASE_URL}Gemini_Generated_Image_darkbringer.png`, income: 0, priceTag: "30" },
  { name: "Nebula",                    rarity: "secret", image: `${import.meta.env.BASE_URL}Gemini_Generated_Image_nebula.png`, income: 0, priceTag: "10" },
  { name: "Bioblade",                  rarity: "secret", image: `${import.meta.env.BASE_URL}Gemini_Generated_Image_bioblade.png`, income: 0, priceTag: "7" },
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
