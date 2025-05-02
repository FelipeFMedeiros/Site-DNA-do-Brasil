import React from 'react';
import ScrollToTop from '@hooks/ScrollToTop';
import HeroSection from '@components/sections/PosGraduacao/HeroSection';
import Sobre from '@components/sections/PosGraduacao/Sobre';
import Diferenciais from '@components/sections/PosGraduacao/Diferenciais';
import Oportunidades from '@components/sections/PosGraduacao/Oportunidades';
import EstruturaCurso from '@components/sections/PosGraduacao/EstruturaCurso';
import CTASection from '@components/sections/PosGraduacao/CTASection';

const PosGraduacao: React.FC = () => {
    return (
        <div className="min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <HeroSection />

            {/* About Section - Sobre o curso */}
            <Sobre />

            {/* Differentials Section - Diferenciais do curso */}
            <Diferenciais />

            {/* Career Opportunities Section - Oportunidades após conclusão */}
            <Oportunidades />

            {/* Course Structure Section - Como funciona o curso */}
            <EstruturaCurso />

            {/* CTA Section - Chamada para ação */}
            <CTASection />

            {/* Botão para voltar ao topo */}
            <ScrollToTop showAtHeight={300} />
        </div>
    );
};

export default PosGraduacao;
