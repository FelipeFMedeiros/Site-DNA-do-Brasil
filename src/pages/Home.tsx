import React from 'react';

// Importação dos componentes
import HeroCarousel from '@components/sections/home/HeroCarousel';
import ProgramaDnaBrasil from '@/components/sections/home/ProgramaDnaBrasil';

const Home: React.FC = () => {
  return (
    <div className="relative" style={{ zIndex: 10 }}>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* O Programa DNA do Brasil */}
      <ProgramaDnaBrasil />
    </div>
  );
};

export default Home;