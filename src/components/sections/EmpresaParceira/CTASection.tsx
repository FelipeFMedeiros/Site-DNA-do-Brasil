import React from 'react';
import { motion } from 'framer-motion';
import AssignmentIcon from '@mui/icons-material/Assignment';

const CTASection: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-[#0B2545] to-[#134074] text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Coluna de texto */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Junte-se a essa rede</h2>

                            <p className="text-xl mb-6 leading-relaxed">
                                Sua empresa pode fazer parte de um ecossistema que forma, apoia e impulsiona talentos.
                            </p>

                            <p className="mb-8 text-blue-200">
                                Preencha o formulário de interesse e nossa equipe entrará em contato para explicar todos
                                os detalhes do programa e orientar o processo de cadastro.
                            </p>

                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                                <h3 className="text-xl font-semibold mb-4">O que você receberá:</h3>

                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <svg
                                            className="w-5 h-5 text-blue-300 mr-2 mt-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <span>Acesso exclusivo à plataforma de talentos</span>
                                    </li>

                                    <li className="flex items-start">
                                        <svg
                                            className="w-5 h-5 text-blue-300 mr-2 mt-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <span>Selo de Empresa Parceira para usar em suas comunicações</span>
                                    </li>

                                    <li className="flex items-start">
                                        <svg
                                            className="w-5 h-5 text-blue-300 mr-2 mt-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <span>Divulgação da sua marca nos materiais do programa</span>
                                    </li>
                                </ul>
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block"
                            >
                                <a
                                    href="/contato"
                                    className="bg-white text-[#0B2545] px-8 py-4 rounded-lg font-semibold text-lg shadow-xl flex items-center group transition duration-300 hover:bg-blue-50"
                                >
                                    <AssignmentIcon className="mr-2" />
                                    CADASTRE SUA EMPRESA AGORA
                                    <svg
                                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Imagem ilustrativa */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="relative">
                                <img
                                    src="/images/programa-dna/educacao-profissional.webp"
                                    alt="Parceria entre empresas e escolas"
                                    className="rounded-xl shadow-2xl w-full"
                                />

                                {/* Badge flutuante */}
                                <motion.div
                                    className="absolute -top-8 -right-8 bg-white text-[#0B2545] rounded-full p-4 shadow-lg flex items-center justify-center w-24 h-24 font-bold text-center text-sm"
                                    animate={{
                                        y: [0, -10, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    Seja
                                    <br />
                                    Parceiro
                                </motion.div>
                            </div>

                            {/* Elementos decorativos */}
                            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-blue-300 rounded-full opacity-30 blur-xl"></div>
                            <div className="absolute -z-10 -top-10 -right-10 w-32 h-32 bg-blue-400 rounded-full opacity-30 blur-xl"></div>

                            {/* Selos/badges flutuantes */}
                            <motion.div
                                className="absolute top-1/4 -left-16 bg-white rounded-lg p-3 shadow-lg"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                                animate={{
                                    y: [0, 8, 0],
                                }}
                            >
                                <div className="flex items-center">
                                    <div className="bg-blue-500 text-white p-2 rounded-full mr-2">
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="text-[#0B2545] font-semibold text-sm">Selo Parceiro</div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute bottom-1/4 -right-12 bg-white rounded-lg p-3 shadow-lg"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.7 }}
                                animate={{
                                    y: [0, -8, 0],
                                }}
                            >
                                <div className="flex items-center">
                                    <div className="bg-green-500 text-white p-2 rounded-full mr-2">
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                            />
                                        </svg>
                                    </div>
                                    <div className="text-[#0B2545] font-semibold text-sm">Impacto Social</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
