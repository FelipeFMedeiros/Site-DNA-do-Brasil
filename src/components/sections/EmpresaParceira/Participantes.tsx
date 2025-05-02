import React from 'react';
import { motion } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const Participantes: React.FC = () => {
    // Tipos de organizações que podem participar
    const participantTypes = [
        {
            id: 1,
            title: 'Empresas de qualquer porte ou setor',
            description: 'Desde grandes corporações até pequenas e médias empresas de todos os setores.',
            icon: <BusinessIcon style={{ fontSize: 48 }} />,
            color: '#3498DB',
        },
        {
            id: 2,
            title: 'Instituições públicas com programas de formação',
            description: 'Órgãos governamentais que oferecem estágios e programas de treinamento.',
            icon: <AccountBalanceIcon style={{ fontSize: 48 }} />,
            color: '#E74C3C',
        },
        {
            id: 3,
            title: 'Federações, associações e centros esportivos',
            description: 'Organizações ligadas ao esporte que buscam novos talentos e oferecem treinamento.',
            icon: <SportsSoccerIcon style={{ fontSize: 48 }} />,
            color: '#27AE60',
        },
        {
            id: 4,
            title: 'Startups e negócios de impacto social',
            description: 'Empresas inovadoras com foco em tecnologia e impacto social positivo.',
            icon: <LightbulbIcon style={{ fontSize: 48 }} />,
            color: '#F39C12',
        },
    ];

    // Variantes para animação
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B2545]">Quem pode participar?</h2>
                        <div className="w-20 h-1 bg-[#0B2545] mx-auto mb-8"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            A iniciativa Empresa Parceira da Escola está aberta a diversas organizações que desejam
                            contribuir para a formação de novos talentos.
                        </p>
                    </motion.div>

                    {/* Grid de tipos de participantes */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {participantTypes.map((type) => (
                            <motion.div
                                key={type.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                                variants={itemVariants}
                            >
                                <div className="h-2" style={{ backgroundColor: type.color }}></div>
                                <div className="p-6">
                                    <div
                                        className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4"
                                        style={{ backgroundColor: `${type.color}15` }}
                                    >
                                        <div style={{ color: type.color }}>{type.icon}</div>
                                    </div>

                                    <h3 className="text-xl font-bold text-center mb-3 text-gray-800">{type.title}</h3>

                                    <p className="text-gray-600 text-center">{type.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Chamada adicional */}
                    <motion.div
                        className="text-center mt-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-[#0B2545]">
                            Todos podem fazer parte da transformação
                        </h3>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                            Independentemente do tamanho ou setor, sua organização pode contribuir para a formação de
                            jovens talentos e se beneficiar dessa conexão.
                        </p>

                        {/* Ilustração ou imagem representativa */}
                        <div className="relative max-w-2xl mx-auto">
                            <motion.img
                                src="/images/programa-dna/empresa-2.webp"
                                alt="Diversidade de empresas e organizações parceiras"
                                className="w-full rounded-xl shadow-lg"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            />

                            {/* Elementos decorativos */}
                            <motion.div
                                className="absolute -bottom-4 -right-4 w-40 h-40 rounded-full bg-blue-200 -z-10"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 0.3 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            />

                            <motion.div
                                className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-yellow-300 -z-10"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 0.2 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Participantes;
