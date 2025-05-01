import React from 'react';
import { motion } from 'framer-motion';
import {
    SchoolOutlined,
    SportsBasketballOutlined,
    BusinessOutlined,
    FamilyRestroomOutlined,
    CloudOutlined,
    SecurityOutlined,
    DevicesOutlined,
} from '@mui/icons-material';

interface CardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    delay: number;
}

const FeatureCard: React.FC<CardProps> = ({ title, icon, description, delay }) => (
    <motion.div
        className="bg-white rounded-xl shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        whileHover={{
            y: -5,
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            transition: { duration: 0.2 },
        }}
    >
        <div className="p-6">
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <div className="text-[#134074] text-3xl">{icon}</div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </motion.div>
);

const Tecnologia: React.FC = () => {
    // Array de participantes da plataforma
    const participantes = [
        {
            title: 'Alunos',
            description: 'Acesso a laudos, cursos, encaminhamentos e acompanhamento do desenvolvimento',
            icon: <SchoolOutlined fontSize="inherit" />,
            delay: 0.3,
        },
        {
            title: 'Professores',
            description: 'Ferramentas para monitorar o desempenho dos alunos e personalizar o ensino',
            icon: <SchoolOutlined fontSize="inherit" />,
            delay: 0.4,
        },
        {
            title: 'Escolas',
            description: 'Gestão educacional integrada com relatórios e estatísticas de desempenho',
            icon: <SchoolOutlined fontSize="inherit" />,
            delay: 0.5,
        },
        {
            title: 'Clubes e Federações',
            description: 'Descoberta de talentos esportivos e acompanhamento do desenvolvimento',
            icon: <SportsBasketballOutlined fontSize="inherit" />,
            delay: 0.6,
        },
        {
            title: 'Empresas',
            description: 'Acesso a banco de talentos e oportunidades de estágio e primeiro emprego',
            icon: <BusinessOutlined fontSize="inherit" />,
            delay: 0.7,
        },
        {
            title: 'Famílias',
            description: 'Acompanhamento do desenvolvimento educacional e profissional dos filhos',
            icon: <FamilyRestroomOutlined fontSize="inherit" />,
            delay: 0.8,
        },
    ];

    // Array de características da plataforma
    const caracteristicas = [
        {
            title: 'Ambiente Digital Integrado',
            description:
                'Todas as informações centralizadas em um único sistema, facilitando o acompanhamento completo',
            icon: <CloudOutlined fontSize="inherit" />,
            delay: 0.4,
        },
        {
            title: 'Segurança de Dados',
            description: 'Sistemas robustos de proteção de informações, seguindo as melhores práticas do mercado',
            icon: <SecurityOutlined fontSize="inherit" />,
            delay: 0.5,
        },
        {
            title: 'Multiplataforma',
            description: 'Acesso via web ou aplicativo para dispositivos móveis, disponível para Android e iOS',
            icon: <DevicesOutlined fontSize="inherit" />,
            delay: 0.6,
        },
    ];

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
            {/* Elementos de fundo decorativos */}
            <div className="absolute top-20 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 -z-10 blur-3xl"></div>
            <div className="absolute bottom-20 right-0 w-80 h-80 bg-blue-200 rounded-full opacity-20 -z-10 blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Tecnologia a favor do seu desenvolvimento
                    </motion.h2>
                    <motion.div
                        className="h-1 w-32 bg-[#134074] mx-auto mb-8"
                        initial={{ width: 0 }}
                        whileInView={{ width: 128 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-gray-700 leading-relaxed">
                            A Plataforma DNA do Brasil foi pensada para integrar todos os envolvidos no processo de
                            formação de talentos — alunos, professores, escolas, clubes, federações, empresas e famílias
                            — em um único ambiente digital.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Com um sistema moderno, interativo e seguro, ela facilita o acompanhamento de cada etapa do
                            desenvolvimento educacional, esportivo e vocacional dos estudantes.
                        </p>

                        <div className="pt-6">
                            <motion.button
                                className="px-6 py-3 bg-[#134074] text-white rounded-lg font-medium shadow-md hover:bg-[#0B2545] transition duration-200 hover:cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Conheça nossa plataforma
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="rounded-xl overflow-hidden shadow-xl bg-white"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            <div className="aspect-video bg-gradient-to-br from-blue-400 to-[#134074] overflow-hidden flex items-center justify-center">
                                <img
                                    src="/images/plataforma-dna/dashboard-preview.webp"
                                    alt="Dashboard da Plataforma DNA do Brasil"
                                    className="w-full h-full object-cover mix-blend-overlay opacity-80"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        className="w-16 h-16 rounded-full bg-white flex items-center justify-center cursor-pointer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <svg
                                            className="w-6 h-6 text-[#134074] ml-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm3.5 10.7l-5 3A.83.83 0 0 1 8 14a.79.79 0 0 1-.38-.1A.8.8 0 0 1 7 13V7a.8.8 0 0 1 .62-.8.8.8 0 0 1 .88.2l5 3a.81.81 0 0 1 0 1.3z" />
                                        </svg>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-xl text-gray-800 mb-2">Plataforma Interativa</h3>
                                <p className="text-gray-600">
                                    Explore recursos avançados para o desenvolvimento integral dos estudantes, com
                                    dashboards personalizados e análises em tempo real.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Seção de Características */}
                <div className="mb-20">
                    <motion.h3
                        className="text-2xl font-bold text-gray-800 mb-8 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Características Principais
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {caracteristicas.map((caracteristica, index) => (
                            <FeatureCard
                                key={index}
                                title={caracteristica.title}
                                description={caracteristica.description}
                                icon={caracteristica.icon}
                                delay={caracteristica.delay}
                            />
                        ))}
                    </div>
                </div>

                {/* Seção de Participantes */}
                <motion.h3
                    className="text-2xl font-bold text-gray-800 mb-8 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Quem Participa da Plataforma
                </motion.h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {participantes.map((participante, index) => (
                        <FeatureCard
                            key={index}
                            title={participante.title}
                            description={participante.description}
                            icon={participante.icon}
                            delay={participante.delay}
                        />
                    ))}
                </div>

                {/* Chamada para ação */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                        A tecnologia como aliada da educação e do desenvolvimento
                    </h3>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                        Conectamos tecnologia e educação para transformar dados em oportunidades reais para estudantes
                        em todo o Brasil.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Tecnologia;
