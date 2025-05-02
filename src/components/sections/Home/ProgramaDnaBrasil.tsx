import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Importação dos ícones do MUI
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PaletteIcon from '@mui/icons-material/Palette';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Importação dos estilos
import '@styles/program-dna.css';

const ProgramaDnaBrasil: React.FC = () => {
    // Variantes de animação para o container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    // Variantes de animação para os itens
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 300, damping: 24 },
        },
    };

    // Variantes de animação para os ícones
    const iconVariants = {
        hover: {
            scale: 1.1,
            rotate: 5,
            transition: { type: 'spring', stiffness: 400, damping: 10 },
        },
        tap: { scale: 0.95 },
    };

    // Variantes de animação para o card
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100, damping: 15 },
        },
        hover: {
            y: -10,
            boxShadow: '0px 10px 20px rgba(0,0,0,0.1)',
            transition: { type: 'spring', stiffness: 400, damping: 10 },
        },
    };

    // Array com os pilares do programa
    const pillars = [
        {
            id: 1,
            name: 'Educação',
            icon: <MenuBookIcon className="w-10 h-10 text-[color:var(--color-primary)]" fontSize="large" />,
        },
        {
            id: 2,
            name: 'Esporte',
            icon: <EmojiEventsIcon className="w-10 h-10 text-[color:var(--color-primary)]" fontSize="large" />,
        },
        {
            id: 3,
            name: 'Saúde',
            icon: <FavoriteIcon className="w-10 h-10 text-[color:var(--color-primary)]" fontSize="large" />,
        },
        {
            id: 4,
            name: 'Cultura',
            icon: <PaletteIcon className="w-10 h-10 text-[color:var(--color-primary)]" fontSize="large" />,
        },
        {
            id: 5,
            name: 'Tecnologia',
            icon: <DeveloperBoardIcon className="w-10 h-10 text-[color:var(--color-primary)]" fontSize="large" />,
        },
    ];

    return (
        <section className="py-16 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Título e Texto da Seção */}
                <motion.div
                    className="max-w-3xl mx-auto mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.h2
                        className="text-3xl font-bold mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        O Programa DNA do Brasil
                    </motion.h2>
                    <motion.p
                        className="text-lg tracking-wide"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        O DNA do Brasil é um programa que acredita na força da{' '}
                        <motion.span
                            className="font-bold highlight-text px-1 mx-0.5 inline-block"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 400 }}
                        >
                            educação e do esporte
                        </motion.span>{' '}
                        para transformar vidas. Atuamos diretamente com escolas públicas e comunidades, levando
                        ferramentas que ajudam estudantes, professores e famílias a descobrirem talentos, superarem
                        desafios e ampliarem suas possibilidades de futuro.
                    </motion.p>
                </motion.div>

                {/* Pilares do Programa */}
                <motion.div
                    className="flex flex-wrap justify-center gap-8 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {pillars.map((pillar) => (
                        <motion.div
                            key={pillar.id}
                            className="flex flex-col items-center"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.div
                                className="pillar-icon p-4 bg-white rounded-full shadow-md mb-2"
                                variants={iconVariants}
                                whileTap="tap"
                                initial={{ boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }}
                                whileHover={{ boxShadow: '0px 8px 16px rgba(0,0,0,0.2)' }}
                            >
                                {pillar.icon}
                            </motion.div>
                            <motion.span
                                className="font-semibold"
                                whileHover={{
                                    color: 'var(--color-primary)',
                                    transition: { duration: 0.2 },
                                }}
                            >
                                {pillar.name}
                            </motion.span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Card único com CTA */}
                <div className="flex justify-center mt-12">
                    <motion.div
                        className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl w-full"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <div className="p-8">
                            <motion.h3
                                className="text-2xl font-bold mb-4 text-[color:var(--color-primary)]"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                Conheça nosso programa completo
                            </motion.h3>
                            <motion.p
                                className="mb-6 text-gray-600 text-lg"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                Descubra como nossa metodologia integra avaliação personalizada, formação de professores
                                e encaminhamento profissional para criar um ecossistema completo de desenvolvimento de
                                talentos.
                            </motion.p>
                            <motion.div
                                className="flex justify-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/quem-somos"
                                    className="inline-flex items-center px-6 py-3 bg-[color:var(--color-primary)] text-white rounded-md hover:bg-[color:var(--color-primary-dark)] transition text-lg font-medium"
                                >
                                    Saiba mais
                                    <ArrowForwardIcon className="ml-2" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProgramaDnaBrasil;
