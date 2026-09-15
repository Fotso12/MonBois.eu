'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { Search, X, Filter } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}) => {
  const { language } = useLanguage();
  const t = translations[language].search;

  const categories = [
    { id: 'all', label: t.allCategories },
    { id: 'hardwood', label: t.catHardwood },
    { id: 'softwood', label: t.catSoftwood },
    { id: 'exotic', label: t.catExotic },
    { id: 'construction', label: t.catConstruction },
  ];

  return (
    <section id="search" className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-wood-200 p-6 lg:p-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-wood-950">
            {t.title}
          </h2>
          <p className="text-sm text-wood-600 mt-1">
            {t.subtitle}
          </p>
        </div>

        {/* Input Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-wood-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.inputPlaceholder}
            className="w-full pl-11 pr-10 py-3.5 bg-wood-50/60 text-wood-950 rounded-xl border border-wood-300 focus:outline-none focus:ring-2 focus:ring-wood-600 focus:border-transparent text-sm sm:text-base placeholder-wood-400 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-wood-400 hover:text-wood-700"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-semibold text-wood-500 uppercase tracking-wider flex items-center gap-1 shrink-0 mr-2">
            <Filter className="w-3.5 h-3.5" />
            Catégorie:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-wood-800 text-white shadow-sm'
                  : 'bg-wood-100 text-wood-800 hover:bg-wood-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
