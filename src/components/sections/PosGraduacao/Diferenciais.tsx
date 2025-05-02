import React from 'react';
import { motion } from 'framer-motion';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CompassCalibrationIcon from '@mui/icons-material/CompassCalibration';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';

const Diferenciais: React.FC = () => {
    // Animação para os cards
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section className="py-20 bg-gray-50">
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B2545]">
                            Por que essa pós é diferente?
                        </h2>
                        <div className="w-20 h-1 bg-[#0B2545] mx-auto mb-8"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Nosso programa oferece uma abordagem única, combinando teoria com aplicação prática e foco
                            no desenvolvimento integral dos jovens atletas.
                        </p>
                    </motion.div>

                    {/* Cards de diferenciais */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {/* Card 1 */}
                        <motion.div
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                            variants={itemVariants}
                            whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                        >
                            <div className="h-2 bg-blue-500"></div>
                            <div className="p-6 md:p-8">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                        <AssessmentIcon style={{ fontSize: 32, color: '#3B82F6' }} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-3 text-gray-800">
                                            Protocolos de avaliação completos
                                        </h3>
                                        <p className="text-gray-600">
                                            Ensinamos você a aplicar protocolos de avaliação que identificam o potencial
                                            motor, emocional e social de crianças e adolescentes. Você aprenderá métodos
                                            cientificamente validados e utilizados pelo Programa DNA do Brasil em suas
                                            avaliações.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                            variants={itemVariants}
                            whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                        >
                            <div className="h-2 bg-green-500"></div>
                            <div className="p-6 md:p-8">
                                <div className="flex items-start">
                                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                                        <CompassCalibrationIcon style={{ fontSize: 32, color: '#10B981' }} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-3 text-gray-800">
                                            Orientação esportiva responsável
                                        </h3>
                                        <p className="text-gray-600">
                                            Preparamos você para orientar jovens em suas escolhas esportivas com
                                            responsabilidade e embasamento técnico. Você aprenderá a considerar aspectos
                                            físicos, emocionais e sociais para proporcionar um desenvolvimento integral
                                            e saudável.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                            variants={itemVariants}
                            whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                        >
                            <div className="h-2 bg-purple-500"></div>
                            <div className="p-6 md:p-8">
                                <div className="flex items-start">
                                    <div className="bg-purple-100 p-3 rounded-lg mr-4">
                                        <SchoolIcon style={{ fontSize: 32, color: '#8B5CF6' }} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-3 text-gray-800">
                                            Professores com experiência prática
                                        </h3>
                                        <p className="text-gray-600">
                                            Você aprende com professores que vivem o esporte e a educação na prática,
                                            todos os dias, dentro do Programa DNA do Brasil. São profissionais que aliam
                                            conhecimento acadêmico com vivência real na detecção e desenvolvimento de
                                            talentos esportivos.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div
                            className="bg-white rounded-xl shadow-lg overflow-hidden"
                            variants={itemVariants}
                            whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                        >
                            <div className="h-2 bg-orange-500"></div>
                            <div className="p-6 md:p-8">
                                <div className="flex items-start">
                                    <div className="bg-orange-100 p-3 rounded-lg mr-4">
                                        <VerifiedIcon style={{ fontSize: 32, color: '#F59E0B' }} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-3 text-gray-800">
                                            Metodologia com resultados comprovados
                                        </h3>
                                        <p className="text-gray-600">
                                            A metodologia é aplicada em escolas públicas, clubes, federações e projetos
                                            sociais – com resultados reais e reconhecidos. Você terá acesso a estudos de
                                            caso e exemplos práticos de como a metodologia tem transformado a vida de
                                            jovens atletas em todo o Brasil.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Depoimento/Destaque */}
                    <motion.div
                        className="relative bg-[#0B2545] rounded-xl overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute top-0 right-0 w-full h-full opacity-10">
                            <img
                                src="/images/pos-graduacao/pattern-bg.svg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="relative z-10 p-8 md:p-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-white">
                                        Uma formação única no mercado
                                    </h3>
                                    <p className="text-blue-100 mb-6">
                                        Nosso programa oferece uma abordagem completa para identificação, avaliação e
                                        desenvolvimento de talentos esportivos, considerando aspectos técnicos, físicos,
                                        motores, sociais e emocionais.
                                    </p>
                                    <p className="text-white italic">
                                        "Nossa pós-graduação forma profissionais para atuar com base em evidências, com
                                        sensibilidade e técnica. Uma oportunidade de ampliar seus conhecimentos, ajudar
                                        a transformar realidades e ainda aumentar sua renda."
                                    </p>
                                    <div className="mt-4 font-semibold text-blue-300">
                                        Equipe acadêmica - Programa DNA do Brasil
                                    </div>
                                </div>

                                <div className="hidden md:block">
                                    <img
                                        src="/images/pos-graduacao/certificate-icon.webp"
                                        alt="Certificado reconhecido pelo MEC"
                                        className="w-full max-w-sm mx-auto rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Diferenciais;
