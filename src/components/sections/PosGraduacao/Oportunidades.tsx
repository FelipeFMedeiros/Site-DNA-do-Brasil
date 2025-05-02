import React from 'react';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BiotechIcon from '@mui/icons-material/Biotech';

const Oportunidades: React.FC = () => {
    // Lista de oportunidades de carreira
    const careerOpportunities = [
        {
            id: 1,
            title: 'Especialista em Detecção de Talentos',
            description:
                'Atue como um profissional especializado na identificação de potenciais talentos esportivos, utilizando protocolos científicos e metodologias avançadas.',
            icon: <WorkIcon style={{ fontSize: 36 }} />,
            color: '#3B82F6',
        },
        {
            id: 2,
            title: 'Diagnóstico Físico-Motor',
            description:
                'Trabalhe com avaliações personalizadas, criando relatórios detalhados e orientações específicas para o desenvolvimento de jovens atletas.',
            icon: <FitnessCenterIcon style={{ fontSize: 36 }} />,
            color: '#10B981',
        },
        {
            id: 3,
            title: 'Projetos do Programa DNA do Brasil',
            description:
                'Integre a equipe de projetos do Programa DNA do Brasil, atuando em escolas, clubes e federações em todo o país.',
            icon: <IntegrationInstructionsIcon style={{ fontSize: 36 }} />,
            color: '#8B5CF6',
        },
        {
            id: 4,
            title: 'Aumento de Renda',
            description:
                'Amplie suas possibilidades profissionais, agregando uma especialização valorizada e em crescimento no mercado esportivo e educacional.',
            icon: <MonetizationOnIcon style={{ fontSize: 36 }} />,
            color: '#F59E0B',
        },
        {
            id: 5,
            title: 'Tecnologia e Dados',
            description:
                'Utilize ferramentas tecnológicas e análise de dados para orientar treinos, oficinas e encaminhamentos para clubes e federações.',
            icon: <BiotechIcon style={{ fontSize: 36 }} />,
            color: '#EC4899',
        },
    ];

    // Animações
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
        },
    };

    return (
        <section className="py-20 bg-white">
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
                            Ao concluir a formação, você poderá:
                        </h2>
                        <div className="w-20 h-1 bg-[#0B2545] mx-auto mb-8"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Abra novas portas na sua carreira e torne-se um profissional diferenciado no mercado de
                            trabalho esportivo e educacional.
                        </p>
                    </motion.div>

                    {/* Grid de oportunidades */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {careerOpportunities.map((opportunity) => (
                            <motion.div
                                key={opportunity.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                                variants={itemVariants}
                            >
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div
                                            className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                                            style={{ backgroundColor: `${opportunity.color}15` }}
                                        >
                                            <div style={{ color: opportunity.color }}>{opportunity.icon}</div>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800">{opportunity.title}</h3>
                                    </div>
                                    <p className="text-gray-600">{opportunity.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Oportunidades;
