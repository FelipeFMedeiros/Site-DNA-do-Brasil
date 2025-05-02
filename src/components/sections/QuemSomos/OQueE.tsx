import React from 'react';
import { motion } from 'framer-motion';
import { InfoOutlined } from '@mui/icons-material';

const OQueE: React.FC = () => {
    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
            <motion.div
                className="max-w-7xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="flex items-center mb-8 space-x-3"
                    initial={{ x: -50 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <InfoOutlined className="text-blue-600 text-3xl" />
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">O que é o DNA do Brasil?</h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                    initial={{ y: 50 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="space-y-4">
                        <motion.p
                            className="text-lg text-gray-700 leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            O DNA do Brasil é um programa que acredita que cada estudante carrega um potencial único,
                            que merece ser descoberto, valorizado e direcionado. Atuamos na formação integral de
                            crianças e adolescentes por meio da educação, do esporte, da cultura e do cuidado com a
                            saúde. Tudo isso com apoio de uma equipe multidisciplinar e da comunidade escolar.
                        </motion.p>

                        <motion.p
                            className="text-lg text-gray-700 leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Trabalhamos com escolas públicas, especialmente nas regiões Norte e Centro-Oeste, oferecendo
                            suporte pedagógico, esportivo e socioemocional. Utilizamos uma metodologia própria que
                            permite conhecer melhor cada aluno e construir, junto com ele, um caminho de oportunidades
                            reais.
                        </motion.p>
                    </div>

                    <motion.div
                        className="bg-white p-6 rounded-xl shadow-lg"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                            y: -5,
                            transition: { duration: 0.2 },
                        }}
                    >
                        <div className="h-85 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                            <img
                                src="/images/programa-dna/esporte-futebol.webp"
                                alt="Professional de Educação Física"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Nossa Missão</h3>
                        <p className="text-gray-700">
                            Desenvolver o potencial de cada criança e adolescente através de uma abordagem
                            multidisciplinar, conectando talentos com oportunidades.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default OQueE;
