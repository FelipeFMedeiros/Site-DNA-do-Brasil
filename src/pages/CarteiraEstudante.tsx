import React from 'react';
import { motion } from 'framer-motion';
import ScrollToTop from '@hooks/ScrollToTop';
import HeroSection from '@components/sections/CarteiraEstudante/HeroSection';
import CarteiraInterativa from '@/components/sections/CarteiraEstudante/CarteiraInterativa';
import Beneficios from '@/components/sections/CarteiraEstudante/Beneficios';
import ComoFunciona from '@/components/sections/QuemSomos/ComoFunciona';

const CarteiraEstudante: React.FC = () => {
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
                    transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
                />
                <motion.div 
                    className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 opacity-20 rounded-full"
                    animate={{ 
                        x: [-50, -150, -50],
                        y: [-20, -100, -20],
                    }}
                    transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
                />
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.h1 
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Carteira do Estudante
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
                        Muito mais do que um documento. É o seu passaporte para oportunidades reais.
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
                        Conheça os benefícios
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </motion.a>
                </div>
            </motion.div>

            {/* Main Content */}
            <div id="content">
                <HeroSection />
                <CarteiraInterativa />
                <Beneficios />
                <ComoFunciona />
            </div>

            {/* CTA Section */}
            <motion.div 
                className="bg-gradient-to-r from-[#0B2545] to-[#134074] text-white py-16 px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Um documento, muitas possibilidades</h2>
                            <p className="text-xl opacity-90 mb-6">
                                A carteirinha não é apenas um símbolo de pertencimento — ela é parte ativa da sua 
                                caminhada no DNA do Brasil. Por meio dela, seu desenvolvimento é monitorado, seus 
                                avanços são valorizados, e suas oportunidades são ampliadas.
                            </p>
                            <p className="text-xl opacity-90 italic">
                                "Você tem nome, história e um futuro cheio de caminhos. 
                                A Carteira DNA do Brasil ajuda a abrir cada um deles."
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <a
                                        href="/contato"
                                        className="px-6 py-3 bg-white text-[#134074] rounded-lg text-lg font-medium shadow-md hover:bg-gray-100 transition duration-200 hover:cursor-pointer inline-block"
                                    >
                                        Solicitar carteira
                                    </a>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <a
                                        href="/metodologia"
                                        className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg text-lg font-medium hover:bg-white hover:text-[#134074] transition duration-200 hover:cursor-pointer inline-block"
                                    >
                                        Conhecer o programa
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="rounded-xl overflow-hidden shadow-2xl"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="h-72 bg-blue-100 flex items-center justify-center overflow-hidden">
                                <img
                                    src="/images/programa-dna/educacao-estudantes.webp"
                                    alt="Estudantes com a carteira DNA do Brasil"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Botão de voltar ao topo */}
            <ScrollToTop showAtHeight={300} />
        </div>
    );
};

export default CarteiraEstudante;