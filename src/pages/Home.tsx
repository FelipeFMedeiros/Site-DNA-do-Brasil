import React from 'react';

// Importação dos componentes
import HeroCarousel from '@components/sections/home/HeroCarousel';
import ProgramaDnaBrasil from '@components/sections/home/ProgramaDnaBrasil';
import NossaMetodologia from '@components/sections/home/NossaMetodologia';
import PlataformaDnaBrasil from '@components/sections/home/PlataformaDnaBrasil';

const Home: React.FC = () => {
    return (
        <div className="relative" style={{ zIndex: 10 }}>
            {/* Hero Carousel */}
            <HeroCarousel />

            {/* O Programa DNA do Brasil */}
            <ProgramaDnaBrasil />

            {/* Nossa Metodologia */}
            <NossaMetodologia />
            
            {/* Plataforma DNA do Brasil */}
            <PlataformaDnaBrasil />
        </div>
    );
};

export default Home;