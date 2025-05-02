import React from 'react';
import { motion } from 'framer-motion';
import { School, Verified, FitnessCenter } from '@mui/icons-material';

const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center">
            {/* Background com efeito parallax */}
            <div
                className="absolute inset-0 bg-[url('/images/background-images/pos-graduacao-bg.webp')] bg-cover bg-center bg-fixed"
                aria-hidden="true"
            />

            {/* Overlay para aumentar legibilidade */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545] to-transparent opacity-85 z-0" />

            <div className="relative z-10 w-full mt-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                        {/* Conteúdo de texto à esquerda */}
                        <div className="md:ml-8 lg:ml-12">
                            <motion.div
                                className="text-white"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center mb-4">
                                    <School className="text-blue-300 mr-2" fontSize="large" />
                                    <span className="text-blue-300 font-semibold">PÓS-GRADUAÇÃO</span>
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                    Detecção e Desenvolvimento de Talentos Esportivos
                                </h1>

                                <h2 className="text-xl md:text-2xl font-medium mb-6 text-blue-200">
                                    na Infância e Adolescência
                                </h2>

                                <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                                    A formação que prepara você para enxergar além do desempenho: identificar talentos,
                                    desenvolver habilidades e transformar realidades.
                                </p>

                                <div className="flex flex-wrap gap-4 mb-8">
                                    <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                                        <Verified className="text-green-400 mr-2" />
                                        <span>Certificação MEC</span>
                                    </div>

                                    <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                                        <FitnessCenter className="text-orange-400 mr-2" />
                                        <span>100% EAD</span>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="cta-button inline-flex items-center bg-white text-[#0B2545] px-8 py-4 rounded-lg font-semibold text-lg shadow-xl relative overflow-hidden group hover:cursor-pointer"
                                    onClick={() => {
                                        document.querySelector('#sobre')?.scrollIntoView({
                                            behavior: 'smooth',
                                        });
                                    }}
                                >
                                    <span className="relative z-10">Conhecer o curso</span>
                                    <svg
                                        className="w-5 h-5 ml-2 relative z-10"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="absolute inset-0 bg-gray-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                                </motion.button>
                            </motion.div>

                            {/* Elementos decorativos animados */}
                            <motion.div
                                className="absolute -bottom-20 left-10 w-32 h-32 rounded-full bg-blue-500 opacity-10"
                                animate={{
                                    y: [0, 15, 0],
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />
                        </div>

                        {/* Imagem à direita - visível apenas em telas md e maiores */}
                        {/*<div className="hidden md:flex justify-center items-end h-full">
                            <motion.img
                                src="/images/pos-graduacao/professor-hero.png"
                                alt="Professor analisando desempenho esportivo"
                                className="max-h-[80vh] object-contain z-10"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.4,
                                }}
                            />
                        </div>*/}
                    </div>

                    {/* Públicos-alvo embaixo */}
                    <motion.div
                        className="relative flex justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 max-w-2xl w-full shadow-lg">
                            <p className="text-center text-white text-base md:text-lg">
                                <span className="font-semibold">Para:</span> Profissionais de Educação Física, Gestores Escolares e Técnicos Esportivos
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
