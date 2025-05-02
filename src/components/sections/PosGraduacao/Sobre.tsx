import React from 'react';
import { motion } from 'framer-motion';
import { School, LocalLibrary, SportsBasketball, EmojiPeople } from '@mui/icons-material';

const Sobre: React.FC = () => {
    return (
        <section id="sobre" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Título da seção */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B2545]">Sobre o Curso</h2>
                        <div className="w-20 h-1 bg-[#0B2545] mx-auto mb-8"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Nossa formação foi criada para atender a uma demanda real do mercado: profissionais
                            capacitados para atuar com detecção de talentos esportivos e formação integral de jovens.
                        </p>
                    </motion.div>

                    {/* Grid principal */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        {/* Conteúdo à esquerda */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-[#0B2545]">Formação completa e prática</h3>

                            <p className="text-gray-700 mb-6">
                                Nossa pós-graduação em Detecção e Desenvolvimento de Talentos Esportivos na Infância e
                                Adolescência é 100% EAD e foi desenvolvida por especialistas que atuam diretamente com
                                crianças e adolescentes no Programa DNA do Brasil.
                            </p>

                            <p className="text-gray-700 mb-6">
                                O curso combina teoria e prática, com foco na aplicação real de protocolos de avaliação
                                e metodologias de desenvolvimento que consideram aspectos físicos, motores, emocionais e
                                sociais dos jovens atletas.
                            </p>

                            <div className="bg-blue-50 p-6 rounded-xl shadow-inner mb-6">
                                <h4 className="text-xl font-semibold mb-3 text-[#0B2545]">Certificação reconhecida</h4>
                                <p className="text-gray-700">
                                    Ao concluir o curso, você recebe certificação reconhecida pelo MEC, que habilita
                                    você a atuar como especialista em detecção e desenvolvimento de talentos esportivos
                                    em diversos ambientes.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                                    <School className="text-[#0B2545]" />
                                    <span className="text-gray-700">360 horas</span>
                                </div>

                                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                                    <LocalLibrary className="text-[#0B2545]" />
                                    <span className="text-gray-700">Estudo flexível</span>
                                </div>

                                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                                    <SportsBasketball className="text-[#0B2545]" />
                                    <span className="text-gray-700">100% Online</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Imagens à direita */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <motion.div
                                        className="rounded-xl overflow-hidden shadow-lg"
                                        whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                                    >
                                        <img
                                            src="/images/pos-graduacao/professor-ed-fisica-3.webp"
                                            alt="Professor com crianças em atividade esportiva"
                                            className="w-full h-70 object-cover"
                                        />
                                    </motion.div>

                                    <motion.div
                                        className="rounded-xl overflow-hidden shadow-lg"
                                        whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                                    >
                                        <img
                                            src="/images/pos-graduacao/professor-ed-fisica-2.webp"
                                            alt="Avaliação técnica de jovem atleta"
                                            className="w-full h-40 object-cover"
                                        />
                                    </motion.div>
                                </div>

                                <div className="space-y-4">
                                    <motion.div
                                        className="rounded-xl overflow-hidden shadow-lg"
                                        whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                                    >
                                        <img
                                            src="/images/pos-graduacao/protocolo-avaliativo.webp"
                                            alt="Protocolo de avaliação de talentos"
                                            className="w-full h-40 object-cover"
                                        />
                                    </motion.div>

                                    <motion.div
                                        className="rounded-xl overflow-hidden shadow-lg"
                                        whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                                    >
                                        <img
                                            src="/images/pos-graduacao/esporte-campeonatos.webp"
                                            alt="Campeonado com os alunos"
                                            className="w-full h-70 object-cover"
                                        />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Elementos decorativos */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-blue-200 -z-10"></div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-orange-200 -z-10"></div>
                        </motion.div>
                    </div>

                    {/* Para quem é o curso */}
                    <motion.div
                        className="bg-[#0B2545] text-white p-8 md:p-12 rounded-xl shadow-xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-center">Para quem é esse curso?</h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.div
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                            >
                                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <EmojiPeople fontSize="large" />
                                </div>
                                <h4 className="text-xl font-semibold mb-3 text-center">Educadores Físicos</h4>
                                <p className="text-center text-blue-100">
                                    Professores que atuam na escola ou em projetos esportivos e desejam aprimorar sua
                                    capacidade de identificar e desenvolver talentos.
                                </p>
                            </motion.div>

                            <motion.div
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <School fontSize="large" />
                                </div>
                                <h4 className="text-xl font-semibold mb-3 text-center">Gestores Escolares</h4>
                                <p className="text-center text-blue-100">
                                    Coordenadores e diretores que buscam implementar programas de desenvolvimento
                                    esportivo em suas instituições.
                                </p>
                            </motion.div>

                            <motion.div
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                            >
                                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <SportsBasketball fontSize="large" />
                                </div>
                                <h4 className="text-xl font-semibold mb-3 text-center">Técnicos Esportivos</h4>
                                <p className="text-center text-blue-100">
                                    Profissionais que trabalham com formação esportiva e querem qualificar seu trabalho
                                    com métodos científicos e abordagem integral.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Sobre;
