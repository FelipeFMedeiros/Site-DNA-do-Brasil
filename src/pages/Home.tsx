import React from 'react';

// Importação dos componentes
import HeroCarousel from '@components/sections/home/HeroCarousel';
import ProgramaDnaBrasil from '@components/sections/home/ProgramaDnaBrasil';
import NossaMetodologia from '@components/sections/home/NossaMetodologia';
import PlataformaDnaBrasil from '@components/sections/home/PlataformaDnaBrasil';
import CarteiraEstudante from '@components/sections/home/CarteiraEstudante';
import EmpresaParceira from '@components/sections/home/EmpersaParceira';
import EspecialistaDnaBrasil from '@components/sections/home/EspecialistaDnaBrasil';
import ResultadosImpactos from '@components/sections/home/ResultadosImpactos';

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

            {/* Carteira do Estudante DNA do Brasil */}
            <CarteiraEstudante />

            {/* Empresa Parceira da Escola */}
            <EmpresaParceira />

            {/* Seja um Especialista DNA do Brasil */}
            <EspecialistaDnaBrasil />

            {/* Resultados e Impactos */}
            <ResultadosImpactos />
        </div>
    );
};

export default Home;
