import React from 'react';
import { motion } from 'framer-motion';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';

const Sobre: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-white">
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B2545]">Sobre a Iniciativa</h2>
                        <div className="w-20 h-1 bg-[#0B2545] mx-auto mb-8"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Essa parceria fortalece a missão do programa: transformar educação, esporte e vocação em
                            ferramentas concretas para a construção de projetos de vida.
                        </p>
                    </motion.div>

                    {/* Cards de conceitos principais */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {/* Card 1 */}
                        <motion.div
                            className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border border-blue-100"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}
                        >
                            <div className="flex justify-center mb-5">
                                <div className="w-16 h-16 rounded-full bg-[#0B2545] text-white flex items-center justify-center">
                                    <HandshakeIcon style={{ fontSize: 32 }} />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4 text-[#0B2545]">Conexão Direta</h3>
                            <p className="text-gray-600 text-center">
                                Estabelecemos uma ponte eficiente entre empresas que buscam talentos e estudantes em
                                busca de oportunidades de desenvolvimento profissional.
                            </p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border border-blue-100"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}
                        >
                            <div className="flex justify-center mb-5">
                                <div className="w-16 h-16 rounded-full bg-[#0B2545] text-white flex items-center justify-center">
                                    <SchoolIcon style={{ fontSize: 32 }} />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4 text-[#0B2545]">Formação Orientada</h3>
                            <p className="text-gray-600 text-center">
                                Ajudamos os estudantes a desenvolverem habilidades que são realmente valorizadas no
                                mercado, orientando sua formação com base em necessidades reais.
                            </p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border border-blue-100"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}
                        >
                            <div className="flex justify-center mb-5">
                                <div className="w-16 h-16 rounded-full bg-[#0B2545] text-white flex items-center justify-center">
                                    <BusinessIcon style={{ fontSize: 32 }} />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-center mb-4 text-[#0B2545]">Impacto Social</h3>
                            <p className="text-gray-600 text-center">
                                Promovemos transformação social ao criar oportunidades concretas para jovens,
                                especialmente aqueles em situação de vulnerabilidade social.
                            </p>
                        </motion.div>
                    </div>

                    {/* Descrição adicional com imagem */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold mb-5 text-[#0B2545]">
                                Uma abordagem inovadora para conectar educação e mercado
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Nossa plataforma utiliza tecnologia de ponta para fazer o match perfeito entre o perfil
                                dos estudantes e as necessidades das empresas, garantindo que ambos os lados se
                                beneficiem.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Através dos dados coletados no protocolo avaliativo do Programa DNA do Brasil,
                                conseguimos identificar potenciais talentos com muito mais precisão, levando em
                                consideração competências técnicas, habilidades socioemocionais e outras características
                                importantes.
                            </p>
                            <p className="text-gray-600">
                                Todo o processo é conduzido com responsabilidade ética e pedagógica, garantindo que a
                                formação dos jovens seja sempre a prioridade.
                            </p>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="aspect-video overflow-hidden rounded-xl shadow-xl">
                                <img
                                    src="/images/programa-dna/reuniao-empresa.webp"
                                    alt="Reunião entre empresa e estudantes"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#0B2545] opacity-10"></div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#134074] opacity-10"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sobre;
