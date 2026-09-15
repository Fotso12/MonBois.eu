'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { SearchBar } from '@/components/SearchBar';
import { WoodCatalog } from '@/components/WoodCatalog';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { ModernCheckoutModal } from '@/components/ModernCheckoutModal';
import { AddedToCartModal } from '@/components/AddedToCartModal';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedWoodForQuote, setSelectedWoodForQuote] = useState('');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleResetSearch = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  const handleSelectForQuote = (woodName: string) => {
    setSelectedWoodForQuote(woodName);
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

      {/* Cart Drawer */}
      <CartDrawer onProceedToCheckout={() => setIsCheckoutOpen(true)} />

      {/* Added to Cart Confirmation Modal */}
      <AddedToCartModal />

      {/* Modern Checkout Modal */}
      <ModernCheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
}
