'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { SearchBar } from '@/components/SearchBar';
import { WoodCatalog } from '@/components/WoodCatalog';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedWoodForQuote, setSelectedWoodForQuote] = useState('');

  const handleResetSearch = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  const handleSelectForQuote = (woodName: string) => {
    setSelectedWoodForQuote(woodName);
    // Smooth scroll to contact section
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-wood-50 text-wood-950 font-sans">
      <Navbar />
      
      <main className="flex-1">
        <Hero />

        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <WoodCatalog
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          onResetSearch={handleResetSearch}
          onSelectForQuote={handleSelectForQuote}
        />

        <AboutSection />

        <ContactSection selectedWoodForQuote={selectedWoodForQuote} />
      </main>

      <Footer />
    </div>
  );
}
