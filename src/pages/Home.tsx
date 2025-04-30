import React from 'react';

// Importação dos componentes
import HeroCarousel from '@components/sections/home/HeroCarousel';
import ProgramDnaBrasil from '@components/sections/home/ProgramDnaBrasil';

const Home: React.FC = () => {
  return (
    <div className="relative" style={{ zIndex: 10 }}>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* O Programa DNA do Brasil */}
      <ProgramDnaBrasil />
    </div>
  );
};

export default Home;