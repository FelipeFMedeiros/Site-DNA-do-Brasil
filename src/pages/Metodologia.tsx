import React from 'react';
import { motion } from 'framer-motion';
import ScrollToTop from '@hooks/ScrollToTop';
import MetodologiaIntro from '@components/sections/Metodologia/MetodologiaIntro';
import ComoFuncionaNaPratica from '@/components/sections/Metodologia/ComoFuncionaNaPratica';
import EncaminhamentosPraticos from '@/components/sections/Metodologia/EncaminhamentosPraticos';
import AvaliacaoContinua from '@/components/sections/Metodologia/AvaliacaoContinua';
import NiveisAprendizagem from '@/components/sections/Metodologia/NiveisAprendizagem';

const Metodologia: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <motion.div
                className="relative bg-gradient-to-r from-[#0B2545] to-[#134074] text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Animated background shapes */}
                <motion.div
                    className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full"
                    animate={{
                        x: [50, 150, 50],
                        y: [20, 100, 20],
                    }}
                    transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 opacity-20 rounded-full"
                    animate={{
                        x: [-50, -150, -50],
                        y: [-20, -100, -20],
                    }}
                    transition={{ repeat: Infinity, duration: 25, ease: 'easeInOut' }}
                />

                <div className="max-w-7xl mx-auto relative z-10 mt-8">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Metodologia
                    </motion.h1>
                    <motion.div
                        className="h-1 w-20 bg-white mb-8"
                        initial={{ width: 0 }}
                        animate={{ width: 80 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />
                    <motion.p
                        className="text-xl md:text-2xl max-w-3xl"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Conheça em detalhes como funciona nossa abordagem inovadora para o desenvolvimento integral dos
                        estudantes.
                    </motion.p>

                    <motion.a
                        href="#content"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#content')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center mt-8 px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-[#134074] transition-colors duration-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Explorar metodologia
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </motion.a>
                </div>
            </motion.div>

            {/* Main Content */}
            <div id="content">
                <MetodologiaIntro />
                <ComoFuncionaNaPratica />
                <EncaminhamentosPraticos />
                <AvaliacaoContinua />
                <NiveisAprendizagem />
            </div>

            {/* Botão de voltar ao topo */}
            <ScrollToTop showAtHeight={300} />
        </div>
    );
};

export default Metodologia;
