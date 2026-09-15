export interface WoodItem {
  id: string;
  name: { fr: string; en: string };
  scientificName: string;
  category: 'hardwood' | 'softwood' | 'exotic' | 'construction';
  categoryLabel: { fr: string; en: string };
  priceEur: number;
  priceUsd: number;
  origin: { fr: string; en: string };
  density: string;
  hardness: { fr: string; en: string };
  durability: { fr: string; en: string };
  uses: { fr: string; en: string };
  sustainability: string;
  image: string;
  description: { fr: string; en: string };
  inStock: boolean;
  featured?: boolean;
}

export const woodCatalog: WoodItem[] = [
  {
    id: "buches-chene-hetre-sec",
    name: { fr: "Bûches Chêne & Hêtre Séchées au Four (H1 < 18%)", en: "Kiln-Dried Oak & Beech Firewood Logs" },
    scientificName: "Quercus & Fagus sylvatica (Groupe G1)",
    category: "hardwood",
    categoryLabel: { fr: "Bûches Massives", en: "Kiln-Dried Logs" },
    priceEur: 240,
    priceUsd: 265,
    origin: { fr: "France / Allemagne (Forêts certifiées FSC)", en: "France / Germany (FSC Certified)" },
    density: "Humidité < 18% | 4.3 kWh/kg",
    hardness: { fr: "Bûches de 33 cm (ou 25 / 50 cm)", en: "33 cm Logs (or 25 / 50 cm)" },
    durability: { fr: "Feuillus Durs - Longue tenue au feu", en: "Hardwood G1 - Long Burn Time" },
    uses: { fr: "Cheminées, poêles à bois, inserts et foyers fermés", en: "Fireplaces, wood stoves, inserts, closed hearths" },
    sustainability: "FSC 100% / NF Bois de Chauffage",
    image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&q=80&w=800",
    description: {
      fr: "Le meilleur du bois de chauffage traditionnel. Bûches de Chêne et Hêtre refendues, séchées en séchoir pour un allumage immédiat sans fumée. Pouvoir calorifique maximal et braises durables.",
      en: "Premium traditional firewood. Split Oak & Beech logs, kiln-dried for instant smokeless ignition. Maximum heat output and long-lasting coals."
    },
    inStock: true,
    featured: true
  },
  {
    id: "buches-densifiees-jour",
    name: { fr: "Bûches Compressées Densifiées Jour (Haute Chaleur)", en: "High-Heat Densified Day Wood Logs" },
    scientificName: "100% Sciure de Bois Noble Recyclée",
    category: "exotic",
    categoryLabel: { fr: "Bois Densifié", en: "Densified Logs" },
    priceEur: 320,
    priceUsd: 350,
    origin: { fr: "Union Européenne (Fabrication Éco)", en: "European Union (Eco Processed)" },
    density: "Humidité < 8% | 4.9 kWh/kg",
    hardness: { fr: "Palette de 96 packs (960 kg)", en: "Pallet of 96 packs (960 kg)" },
    durability: { fr: "Combustion intense de 1h30 à 2h", en: "Intense 2h burn time per log" },
    uses: { fr: "Tous types de poêles, foyers et chaudières à bois", en: "All wood stoves, fireplaces, and timber boilers" },
    sustainability: "100% Naturel Sans Liant / PEFC",
    image: "https://images.unsplash.com/photo-1520114878144-6123749968dd?auto=format&fit=crop&q=80&w=800",
    description: {
      fr: "Bûches de bois densifié composées à 100% de copaux et sciures de bois durs sans aucun additif. Produit 3 à 4 fois plus de chaleur qu'une bûche classique avec très peu de cendres.",
      en: "Densified compressed logs made from 100% natural sawdust without chemicals. Produces 3-4x more heat than standard logs with minimal ash."
    },
    inStock: true,
    featured: true
  },
  {
    id: "pellets-granules-din-plus",
    name: { fr: "Granulés de Bois / Pellets Premium DIN+ (Palette 66 Sacs)", en: "DIN+ Premium Wood Pellets (66 Bags Pallet)" },
    scientificName: "100% Résineux Écorcé DIN+ / ENplus A1",
    category: "softwood",
    categoryLabel: { fr: "Granulés & Pellets", en: "Wood Pellets" },
    priceEur: 380,
    priceUsd: 415,
    origin: { fr: "France & Autriche", en: "France & Austria" },
    density: "Humidité < 7% | 5.0 kWh/kg",
    hardness: { fr: "Sacs de 15 kg (990 kg total)", en: "15 kg bags (990 kg total)" },
    durability: { fr: "Taux de cendres ultra-faible (< 0.5%)", en: "Ultra-low ash content (< 0.5%)" },
    uses: { fr: "Poêles à granulés automatisés et chaudières à pellets", en: "Automated pellet stoves and pellet boilers" },
    sustainability: "DIN+ / ENplus A1 Certified",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    description: {
      fr: "Granulés de bois de qualité supérieure DIN+ / ENplus A1. Garantit un rendement thermique maximal de votre poêle et préserve vos conduits contre l'encrassement.",
      en: "DIN+ / ENplus A1 certified top-grade wood pellets. Ensures maximum thermal yield for pellet stoves and protects chimneys from creosote build-up."
    },
    inStock: true,
    featured: true
  },
  {
    id: "buches-charme-frne-30cm",
    name: { fr: "Bûches de Charme & Frêne 30 cm (Palette Caisse 2 Stères)", en: "Hornbeam & Ash Firewood Logs 30cm (2 Steres Crate)" },
    scientificName: "Carpinus betulus & Fraxinus excelsior",
    category: "hardwood",
    categoryLabel: { fr: "Bûches Massives", en: "Kiln-Dried Logs" },
    priceEur: 280,
    priceUsd: 310,
    origin: { fr: "Forêts de l'Est de la France", en: "Eastern France Forests" },
    density: "Humidité < 15% | 4.4 kWh/kg",
    hardness: { fr: "Bûches de 30 cm en Caisse Bois", en: "30 cm Logs in Crate" },
    durability: { fr: "Groupe G1 - Braises d'enfer et belles flammes", en: "Group G1 - Superior embers & bright flame" },
    uses: { fr: "Poêles scandinaves, cheminées modernes et cuisinières à bois", en: "Scandinavian stoves, modern fireplaces, wood cookers" },
    sustainability: "FSC 100% / PEFC",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
    description: {
      fr: "Le Charme et le Frêne sont réputés pour faire les plus belles flammes du marché tout en dégageant une chaleur puissante. Livré soigneusement rangé en caisse rigide de 2 stères.",
      en: "Hornbeam and Ash are famous for producing magnificent flames and intense heat. Shipped neatly stacked in a sturdy 2-stere wooden crate."
    },
    inStock: true,
    featured: false
  },
  {
    id: "buches-nuit-longue-duree",
    name: { fr: "Bûches de Nuit Écorce Densifiée (Maintien de Chaleur 8h-10h)", en: "Long-Duration Night Logs (8-10h Ember Keep)" },
    scientificName: "100% Écorce de Bois Compressée",
    category: "exotic",
    categoryLabel: { fr: "Bois Densifié", en: "Densified Logs" },
    priceEur: 340,
    priceUsd: 375,
    origin: { fr: "Union Européenne", en: "European Union" },
    density: "Humidité < 9% | 4.6 kWh/kg",
    hardness: { fr: "Pack de 5 bûches (Palette 960 kg)", en: "Pack of 5 logs (960 kg Pallet)" },
    durability: { fr: "Maintien des braises pendant 8 à 10h la nuit", en: "Maintains glowing embers for 8 to 10 hours" },
    uses: { fr: "Maintien de la température la nuit sans recharger", en: "Overnight heat retention without reloading" },
    sustainability: "100% Recyclé / Éco-Conçu",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=800",
    description: {
      fr: "Bûches d'écorce densifiée conçues pour être placées le soir dans votre foyer. Elles se consument très lentement sans flamme violente pour garder des braises chaudes jusqu'au matin.",
      en: "Densified bark logs designed for overnight fires. Smolders slowly to keep hot embers alive for 8-10 hours until morning."
    },
    inStock: true,
    featured: false
  },
  {
    id: "bois-dallumage-filet",
    name: { fr: "Bois d'Allumage Sec & Laine de Bois (Carton Multi-Packs)", en: "Kindling Sticks & Wood Wool Starters" },
    scientificName: "Pin & Épinette Séchés (Petit Bois)",
    category: "construction",
    categoryLabel: { fr: "Allumage & Petit Bois", en: "Kindling & Starters" },
    priceEur: 120,
    priceUsd: 135,
    origin: { fr: "France", en: "France" },
    density: "Humidité < 12% | Démarrage Flash",
    hardness: { fr: "Carton de 40 Filets + Allume-feux", en: "Box of 40 Bags + Starters" },
    durability: { fr: "Prêt à l'emploi instantané", en: "Instant ready-to-use ignition" },
    uses: { fr: "Allumage rapide de tous feux de bois et poêles", en: "Fast lighting for all wood fires and stoves" },
    sustainability: "FSC 100%",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    description: {
      fr: "Bâtonnets de petit bois ultra-secs emballés en filets légers avec sachets de frisotis de bois naturel imbibé de cire végétale. Idéal pour un démarrage sans effort.",
      en: "Ultra-dry kindling sticks packed with natural wood wool starters. Ensures effortless fire starting every time."
    },
    inStock: true,
    featured: false
  }
];
