import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Importação do CSS para efeito parallax aprimorado
import '@styles/especialista-dna.css';

const EspecialistaDnaBrasil: React.FC = () => {

    return (
        <section className="relative min-h-screen flex items-center">
        {/* Parallax background usando Tailwind */}
        <div
            className="absolute inset-0 bg-[url('/images/profissionais-bg.jpg')] bg-cover bg-center bg-fixed"
            aria-hidden="true"
        />
        {/* Overlay para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-90 z-0" />
        <div className="relative z-10 w-full">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl ml-auto mr-4 md:mr-12 lg:mr-24">
                    {/* Conteúdo de texto */}
                    <motion.div
                        className="text-white"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                Seja um Especialista DNA do Brasil
                            </h2>

                            <p className="text-lg md:text-xl mb-8 leading-relaxed">
                                Nossa Pós-Graduação em detecção e desenvolvimento de talentos esportivos na infância e
                                adolescência forma profissionais para atuar com base em evidências, com sensibilidade e
                                técnica. Uma oportunidade de ampliar seus conhecimentos, ajudar a transformar realidades
                                e ainda aumentar sua renda.
                            </p>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mb-12">
                                <Link
                                    to="/pos-graduacao"
                                    className="cta-button inline-block bg-white text-[color:var(--color-primary)] px-8 py-4 rounded-lg font-semibold text-lg shadow-xl relative overflow-hidden group"
                                >
                                    <span className="relative z-10">Conheça o curso</span>
                                    <span className="absolute inset-0 bg-gray-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                                </Link>
                            </motion.div>

                            {/* Dados adicionais */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <motion.div
                                    className="info-card bg-white/20 p-4 rounded-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1, duration: 0.5 }}
                                >
                                    <div className="font-bold text-2xl">100%</div>
                                    <div className="text-white/90">Online e Interativo</div>
                                </motion.div>
                                <motion.div
                                    className="info-card bg-white/20 p-4 rounded-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    <div className="font-bold text-2xl">360h</div>
                                    <div className="text-white/90">Carga Horária</div>
                                </motion.div>
                                <motion.div
                                    className="info-card bg-white/20 p-4 rounded-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    <div className="font-bold text-2xl">MEC</div>
                                    <div className="text-white/90">Reconhecido</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EspecialistaDnaBrasil;
