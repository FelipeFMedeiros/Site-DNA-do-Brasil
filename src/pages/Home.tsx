import React from 'react';

// Importação dos componentes
import HeroCarousel from '@/components/sections/Home/HeroCarousel';
import ProgramaDnaBrasil from '@/components/sections/Home/ProgramaDnaBrasil';
import NossaMetodologia from '@/components/sections/Home/NossaMetodologia';
import PlataformaDnaBrasil from '@/components/sections/Home/PlataformaDnaBrasil';
import CarteiraEstudante from '@/components/sections/Home/CarteiraEstudante';
import EmpresaParceira from '@/components/sections/Home/EmpersaParceira';
import EspecialistaDnaBrasil from '@/components/sections/Home/EspecialistaDnaBrasil';
import ResultadosImpactos from '@/components/sections/Home/ResultadosImpactos';
import BeneficiosTalento from '@/components/sections/Home/BeneficiosTalento';
import ScrollToTop from '@hooks/ScrollToTop';

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

            {/* Benefícios de ser um talento DNA do Brasil */}
            <BeneficiosTalento />

            {/* Botão de voltar ao topo */}
            <ScrollToTop showAtHeight={500} />
        </div>
    );
};

export default Home;
