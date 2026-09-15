export interface WoodItem {
  id: string;
  name: { fr: string; en: string };
  scientificName: string;
  category: 'hardwood' | 'softwood' | 'exotic' | 'construction';
  categoryLabel: { fr: string; en: string };
  priceEur: number;
  priceUsd: number;
  origin: { fr: string; en: string };
  density: string; // e.g. "710 kg/m³"
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
    id: "chene-francais",
    name: { fr: "Chêne Blanc Européen", en: "European White Oak" },
    scientificName: "Quercus robur / Quercus petraea",
    category: "hardwood",
    categoryLabel: { fr: "Feuillus", en: "Hardwood" },
    priceEur: 950,
    priceUsd: 1040,
    origin: { fr: "France / Allemagne (Forêts certifiées)", en: "France / Germany (Certified Forests)" },
    density: "710 - 760 kg/m³",
    hardness: { fr: "Élevée (3.7 Monnin)", en: "High (1,360 Janka)" },
    durability: { fr: "Classe 2 - Très durable", en: "Class 2 - Very Durable" },
    uses: { fr: "Ébénisterie de luxe, parquets massifs, charpente noble, tonnellerie", en: "Luxury furniture, solid flooring, timber frames, coopering" },
    sustainability: "FSC 100% / PEFC",
    image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&q=80&w=800",
    description: {
      fr: "Le Chêne français est la référence absolue pour le mobilier haut de gamme et la parqueterie. Grain fin et teintes chaudes garantissant une beauté intemporelle et une résistance exceptionnelle.",
      en: "French Oak is the benchmark for high-end furniture and hardwood flooring. Fine grain and warm tones offer timeless beauty and outstanding structural strength."
    },
    inStock: true,
    featured: true
  },
  {
    id: "noyer-americain",
    name: { fr: "Noyer Noir d'Amérique", en: "American Black Walnut" },
    scientificName: "Juglans nigra",
    category: "hardwood",
    categoryLabel: { fr: "Feuillus", en: "Hardwood" },
    priceEur: 1850,
    priceUsd: 2020,
    origin: { fr: "Est des États-Unis (Appalaches)", en: "Eastern USA (Appalachians)" },
    density: "610 kg/m³",
    hardness: { fr: "Moyenne à élevée", en: "Medium-High (1,010 Janka)" },
    durability: { fr: "Classe 3 - Élevée", en: "Class 3 - High" },
    uses: { fr: "Mobilier design, agencement de prestige, crosses d'armes, placages", en: "Designer furniture, high-end millwork, gunstocks, veneers" },
    sustainability: "FSC Certified",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    description: {
      fr: "Prisé pour son veinage riche allant du chocolat profond au pourpre sombre. Le Noyer Noir américain s'usine facilement et offre un poli incomparable.",
      en: "Prized for its rich chocolate brown to purplish undertones. American Black Walnut machines effortlessly and takes a brilliant polished finish."
    },
    inStock: true,
    featured: true
  },
  {
    id: "teck-birmanie",
    name: { fr: "Teck de Plantation / Marine", en: "Plantation Teak Timber" },
    scientificName: "Tectona grandis",
    category: "exotic",
    categoryLabel: { fr: "Bois Tropicaux", en: "Exotic & Tropical" },
    priceEur: 2400,
    priceUsd: 2620,
    origin: { fr: "Asie du Sud / Amérique Centrale (FSC)", en: "South Asia / Central America (FSC)" },
    density: "660 kg/m³",
    hardness: { fr: "Moyenne (Huiles naturelles)", en: "Medium (1,070 Janka)" },
    durability: { fr: "Classe 1 - Imputrescible", en: "Class 1 - Rot-Proof" },
    uses: { fr: "Ponts de bateaux, terrasses extérieures premium, mobilier de jardin", en: "Yacht decking, premium outdoor decking, luxury garden furniture" },
    sustainability: "FSC 100% Plantation",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    description: {
      fr: "Riche en huiles naturelles, le Teck est totalement résistant à l'eau de mer, aux champignons et aux intempéries. L'essence idéale pour les environnements marins et extérieurs.",
      en: "Naturally high in protective oils, Teak is completely impervious to saltwater, decay, and weather extremes. Perfect for marine and outdoor applications."
    },
    inStock: true,
    featured: true
  },
  {
    id: "douglas-construction",
    name: { fr: "Douglas de Structure C24", en: "Douglas Fir Structural Timber" },
    scientificName: "Pseudotsuga menziesii",
    category: "construction",
    categoryLabel: { fr: "Construction", en: "Structural Timber" },
    priceEur: 420,
    priceUsd: 460,
    origin: { fr: "Massif Central (France) & Nord-Ouest Pacifique", en: "France & Pacific Northwest" },
    density: "530 kg/m³",
    hardness: { fr: "Résineux dur", en: "Softwood Hard (710 Janka)" },
    durability: { fr: "Classe 3 (naturel hors aubier)", en: "Class 3 (Natural heartwood)" },
    uses: { fr: "Ossatures bois, poutres de charpente, bardages extérieurs, poteaux", en: "Timber framing, structural beams, exterior siding, posts" },
    sustainability: "PEFC / FSC",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=800",
    description: {
      fr: "Un des meilleurs bois de construction. Le Douglas possède une grande résistance mécanique et un cœur naturellement résistant aux insectes et à l'humidité.",
      en: "One of the finest structural softwoods. Douglas Fir boasts superior mechanical strength and natural resistance to pests and moisture."
    },
    inStock: true,
    featured: false
  },
  {
    id: "erable-sacre",
    name: { fr: "Érable Dur Canadien", en: "Canadian Hard Maple" },
    scientificName: "Acer saccharum",
    category: "hardwood",
    categoryLabel: { fr: "Feuillus", en: "Hardwood" },
    priceEur: 1100,
    priceUsd: 1200,
    origin: { fr: "Est du Canada & Nord des États-Unis", en: "Eastern Canada & Northern USA" },
    density: "705 kg/m³",
    hardness: { fr: "Très élevée (4.2 Monnin)", en: "Very High (1,450 Janka)" },
    durability: { fr: "Classe 4 (Usage intérieur)", en: "Class 4 (Interior Use)" },
    uses: { fr: "Parquets sportifs, dalles de boucher, instruments de musique, agencement", en: "Sports flooring, butcher blocks, musical instruments, interior fittings" },
    sustainability: "FSC Certified",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800",
    description: {
      fr: "Bois très clair, dur et extrêmement résistant à l'abrasion. Idéal pour les lieux à fort trafic et l'ébénisterie exigeante.",
      en: "Light-colored timber, dense and exceptionally resistant to wear. Ideal for heavy-footprint flooring and fine woodworking."
    },
    inStock: true,
    featured: false
  },
  {
    id: "pin-silvestre",
    name: { fr: "Pin Nordique Traité Autoclave", en: "Nordic Pine Treated Timber" },
    scientificName: "Pinus sylvestris",
    category: "softwood",
    categoryLabel: { fr: "Résineux", en: "Softwood" },
    priceEur: 360,
    priceUsd: 395,
    origin: { fr: "Scandinavie & Pays Baltes", en: "Scandinavia & Baltic States" },
    density: "500 kg/m³",
    hardness: { fr: "Moyenne", en: "Medium (540 Janka)" },
    durability: { fr: "Classe 4 (après traitement)", en: "Class 4 (Post-treatment)" },
    uses: { fr: "Terrasses économiques, retenues de terre, aménagements extérieurs", en: "Decking, garden fencing, landscaping, outdoor structures" },
    sustainability: "PEFC Certified",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800",
    description: {
      fr: "Résineux à pousse lente des forêts froides du Nord. Traité autoclave classe 4 pour une longévité garantie en contact avec le sol.",
      en: "Slow-growing northern softwood. Pressure-treated for guaranteed long-term outdoor performance in direct ground contact."
    },
    inStock: true,
    featured: false
  },
  {
    id: "acajou-honduras",
    name: { fr: "Acajou de Plantation", en: "African / American Mahogany" },
    scientificName: "Khaya ivorensis / Swietenia macrophylla",
    category: "exotic",
    categoryLabel: { fr: "Bois Tropicaux", en: "Exotic & Tropical" },
    priceEur: 1650,
    priceUsd: 1800,
    origin: { fr: "Afrique de l'Ouest & Plantations d'Amérique", en: "West Africa & Central American Plantations" },
    density: "570 kg/m³",
    hardness: { fr: "Moyenne et stable", en: "Medium (830 Janka)" },
    durability: { fr: "Classe 2 - Bonne résistance", en: "Class 2 - Good Resistance" },
    uses: { fr: "Lutherie, bateaux classiques, agencement haut de gamme, sculptures", en: "Lutherie, classical boatbuilding, luxury paneling, carving" },
    sustainability: "CITES Approved / FSC",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800",
    description: {
      fr: "Acajou noble au reflet rougeâtre sublime. Excellente stabilité dimensionnelle et facilité de sculpture légendaire.",
      en: "Noble mahogany with a brilliant reddish luster. Exceptional dimensional stability and famous carving properties."
    },
    inStock: true,
    featured: true
  },
  {
    id: "cedre-rouge",
    name: { fr: "Cèdre Rouge du Canada (Western Red Cedar)", en: "Western Red Cedar" },
    scientificName: "Thuja plicata",
    category: "softwood",
    categoryLabel: { fr: "Résineux", en: "Softwood" },
    priceEur: 890,
    priceUsd: 970,
    origin: { fr: "Colombie-Britannique (Canada)", en: "British Columbia (Canada)" },
    density: "380 kg/m³",
    hardness: { fr: "Tendre et léger", en: "Soft & Lightweight (350 Janka)" },
    durability: { fr: "Classe 2 - Naturellement imputrescible", en: "Class 2 - Naturally Rot Resistant" },
    uses: { fr: "Bardages d'architecte, saunas, shingle de toiture, pergolas", en: "Architectural siding, saunas, roof shingles, pergolas" },
    sustainability: "FSC 100%",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
    description: {
      fr: "Célèbre pour son parfum envoûtant, sa légèreté et ses nuances chromatiques uniques. Imputrescible naturellement sans produit chimique.",
      en: "Famous for its aromatic fragrance, lightweight nature, and striking color variations. Naturally rot-resistant without chemical treatment."
    },
    inStock: false,
    featured: false
  }
];
