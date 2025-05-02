import React from 'react';
import ScrollToTop from '@hooks/ScrollToTop';
import HeroSection from '@components/sections/EmpresaParceira/HeroSection';
import Sobre from '@components/sections/EmpresaParceira/Sobre';
import ComoFunciona from '@components/sections/EmpresaParceira/ComoFunciona';
import Beneficios from '@components/sections/EmpresaParceira/Beneficios';
import Participantes from '@components/sections/EmpresaParceira/Participantes';
import CTASection from '@components/sections/EmpresaParceira/CTASection';

// Importação do CSS para efeitos específicos
import '@styles/empresa-parceira.css';

const EmpresaParceira: React.FC = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section com efeito parallax */}
            <HeroSection />

            {/* About Section - Descrição detalhada da iniciativa */}
            <Sobre />

            {/* How It Works Section - Infográfico do processo */}
            <ComoFunciona />

            {/* Benefits Section - Benefícios para empresas e escolas/alunos */}
            <Beneficios />

            {/* Participants Section - Quem pode participar */}
            <Participantes />

            {/* CTA Section - Chamada para ação */}
            <CTASection />

            {/* Botão para voltar ao topo */}
            <ScrollToTop showAtHeight={300} />
        </div>
    );
};

export default EmpresaParceira;
