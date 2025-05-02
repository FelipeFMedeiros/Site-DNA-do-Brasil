import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    // Pré-carregamento da imagem da pessoa
    useEffect(() => {
        const img = new Image();
        img.src = '/images/empresa-parceira/executivo-hero.png';
    }, []);

    return (
        <section className="relative min-h-screen flex items-center">
            {/* Parallax background */}
            <div
                className="absolute inset-0 bg-[url('/images/background-images/empresa-bg.webp')] bg-cover bg-center bg-fixed"
                aria-hidden="true"
            />

            {/* Overlay para legibilidade */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545] to-transparent opacity-90 z-0" />

            <div className="relative z-10 w-full">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                        {/* Conteúdo de texto à esquerda */}
                        <div className="md:ml-8 lg:ml-12">
                            <motion.div
                                className="text-white"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                    Empresa Parceira da Escola
                                </h1>

                                <h2 className="text-xl md:text-2xl font-semibold mb-6">
                                    A ponte entre talentos e oportunidades reais
                                </h2>

                                <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                                    O Programa DNA do Brasil criou a iniciativa Empresa Parceira da Escola com o
                                    objetivo de aproximar o universo educacional do mercado de trabalho. Por meio dessa
                                    conexão direta, empresas podem acessar um banco de dados com jovens talentos em
                                    formação, enquanto os estudantes têm a chance de conhecer e se preparar para
                                    demandas reais de diferentes setores profissionais.
                                </p>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="cta-button inline-flex items-center bg-white text-[#0B2545] px-8 py-4 rounded-lg font-semibold text-lg shadow-xl relative overflow-hidden group hover:cursor-pointer"
                                    onClick={() => {
                                        document.querySelector('#about')?.scrollIntoView({
                                            behavior: 'smooth',
                                        });
                                    }}
                                >
                                    <span className="relative z-10">Saiba mais</span>
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

                            {/* Elementos decorativos animados - ajustados para ficarem à esquerda */}
                            <motion.div
                                className="absolute -top-10 left-32 w-32 h-32 rounded-full bg-white opacity-10"
                                animate={{
                                    y: [0, 15, 0],
                                    rotate: [0, 5, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />

                            <motion.div
                                className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-blue-300 opacity-20"
                                animate={{
                                    y: [0, -20, 0],
                                    x: [0, 10, 0],
                                    rotate: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />
                        </div>

                        {/* Imagem da pessoa à direita - visível apenas em telas md e maiores */}
                        {/*<div className="hidden md:flex justify-center items-end h-full">
                            <motion.img
                                src="/images/programa-dna/amauri.webp"
                                alt="Executivo representando as empresas parceiras"
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
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
