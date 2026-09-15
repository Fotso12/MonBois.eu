'use client';

import React, { useState } from 'react';
import { woodCatalog, WoodItem } from '@/data/woods';
import { WoodCard } from './WoodCard';
import { WoodModal } from './WoodModal';
import { OrderModal } from './OrderModal';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { Trees, RotateCcw } from 'lucide-react';

interface WoodCatalogProps {
  searchQuery: string;
  selectedCategory: string;
  onResetSearch: () => void;
  onSelectForQuote: (woodName: string) => void;
}

export const WoodCatalog: React.FC<WoodCatalogProps> = ({
  searchQuery,
  selectedCategory,
  onResetSearch,
  onSelectForQuote,
}) => {
  const { language } = useLanguage();
  const t = translations[language].catalog;
  const searchT = translations[language].search;
  
  const [activeModalWood, setActiveModalWood] = useState<WoodItem | null>(null);
  const [activeOrderWood, setActiveOrderWood] = useState<WoodItem | null>(null);

  // Filter woods based on query and category
  const filteredWoods = woodCatalog.filter((wood) => {
    // Category match
    const categoryMatch = selectedCategory === 'all' || wood.category === selectedCategory;
    
    // Search query match (name, scientific name, origin, or description)
    const q = searchQuery.toLowerCase().trim();
    const nameMatch = wood.name.fr.toLowerCase().includes(q) || wood.name.en.toLowerCase().includes(q);
    const scientificMatch = wood.scientificName.toLowerCase().includes(q);
    const originMatch = wood.origin.fr.toLowerCase().includes(q) || wood.origin.en.toLowerCase().includes(q);
    const categoryLabelMatch = wood.categoryLabel.fr.toLowerCase().includes(q) || wood.categoryLabel.en.toLowerCase().includes(q);
    const usesMatch = wood.uses.fr.toLowerCase().includes(q) || wood.uses.en.toLowerCase().includes(q);

    const textMatch = !q || nameMatch || scientificMatch || originMatch || categoryLabelMatch || usesMatch;

    return categoryMatch && textMatch;
  });

  return (
    <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header & Result count */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-wood-950">
            {t.title}
          </h2>
          <p className="text-sm text-wood-600 mt-1 max-w-2xl">
            {t.subtitle}
          </p>
        </div>
        <div className="text-xs font-semibold px-3 py-1.5 bg-wood-100 text-wood-800 rounded-lg border border-wood-200 self-start md:self-auto">
          {searchT.resultsCount.replace('{count}', filteredWoods.length.toString())}
        </div>
      </div>

      {/* Grid or Empty State */}
      {filteredWoods.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredWoods.map((wood) => (
            <WoodCard
              key={wood.id}
              wood={wood}
              onOpenModal={(w) => setActiveModalWood(w)}
              onOpenOrder={(w) => setActiveOrderWood(w)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-12 text-center border border-wood-200 shadow-sm max-w-md mx-auto my-8">
          <Trees className="w-12 h-12 text-wood-400 mx-auto mb-4" />
          <h3 className="text-lg font-bold font-serif text-wood-900 mb-2">
            {searchT.noResultsTitle}
          </h3>
          <p className="text-xs text-wood-600 mb-6">
            {searchT.noResultsSub}
          </p>
          <button
            onClick={onResetSearch}
            className="inline-flex items-center gap-2 px-4 py-2 bg-wood-800 text-white rounded-lg text-sm font-semibold hover:bg-wood-900 transition-colors shadow-sm"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{searchT.resetFilter}</span>
          </button>
        </div>
      )}

      {/* Spec Modal */}
      <WoodModal
        wood={activeModalWood}
        onClose={() => setActiveModalWood(null)}
        onSelectForQuote={onSelectForQuote}
        onOpenOrder={(w) => setActiveOrderWood(w)}
      />

      {/* Order & Payment Simulation Wizard Modal */}
      <OrderModal
        wood={activeOrderWood}
        onClose={() => setActiveOrderWood(null)}
      />
    </section>
  );
};
