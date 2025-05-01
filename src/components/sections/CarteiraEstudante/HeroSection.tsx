import React from 'react';
import { motion } from 'framer-motion';
import { School } from '@mui/icons-material';

const HeroSection: React.FC = () => {
    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <div className="flex items-center mb-6">
                            <div className="bg-[#134074] p-3 rounded-full text-white mr-4">
                                <School fontSize="large" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Carteirinha DNA do Brasil</h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                A Carteirinha DNA do Brasil foi criada para facilitar o acesso dos alunos às atividades
                                do programa e conectar cada estudante ao universo de experiências e benefícios
                                oferecidos.
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                Ela funciona como uma chave de identificação inteligente e personalizada, integrando as
                                ações do programa com a jornada individual de desenvolvimento de cada participante.
                            </p>

                            <motion.div
                                className="bg-[#134074] text-white p-4 rounded-lg shadow-md"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <p className="italic">
                                    "Mais que um documento, é um passaporte para experiências que vão além da sala de
                                    aula. A carteira garante entrada em eventos, descontos em cursos, acesso a conteúdos
                                    exclusivos e faz a ponte com empresas, clubes e universidades."
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:order-2 order-1 flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative w-full max-w-md">
                            {/* Efeito de destaque atrás da imagem */}
                            <div className="absolute inset-0 bg-blue-200 rounded-full filter blur-3xl opacity-30 transform -translate-y-4 translate-x-4"></div>

                            {/* Imagem principal */}
                            <motion.div
                                className="relative bg-white p-4 rounded-xl shadow-xl"
                                whileHover={{
                                    y: -10,
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src="/images/carteirinha/frente.png"
                                    alt="Carteira do Estudante DNA do Brasil"
                                    className="w-full rounded-lg"
                                />
                                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                    Official
                                </div>
                            </motion.div>

                            {/* Elementos decorativos de fundo */}
                            <motion.div
                                className="absolute -bottom-10 -left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 5, 0],
                                }}
                                transition={{ duration: 5, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute -top-12 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-20"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, -5, 0],
                                }}
                                transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Texto destaque */}
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Seu passaporte para o futuro</h3>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto italic">
                        A Carteira DNA do Brasil conecta você a um mundo de possibilidades
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
