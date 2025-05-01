import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Importação dos ícones do MUI
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import RouteIcon from '@mui/icons-material/Route';
import HubIcon from '@mui/icons-material/Hub';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BeneficiosTalento: React.FC = () => {
    // Ref para detecção de quando a seção está visível
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    // Dados dos benefícios
    const beneficios = [
        {
            id: 1,
            icon: <PersonSearchIcon fontSize="large" />,
            title: 'Acompanhamento individual',
            description: 'Em todas as áreas do desenvolvimento, garantindo uma abordagem completa para cada talento.',
            color: '#3f51b5',
        },
        {
            id: 2,
            icon: <RouteIcon fontSize="large" />,
            title: 'Encaminhamentos personalizados',
            description: 'Para esporte, educação e trabalho, de acordo com as habilidades e interesses identificados.',
            color: '#f50057',
        },
        {
            id: 3,
            icon: <HubIcon fontSize="large" />,
            title: 'Rede de oportunidades',
            description: 'Com instituições de ensino, clubes e empresas, ampliando o horizonte de possibilidades.',
            color: '#00bcd4',
        },
        {
            id: 4,
            icon: <VolunteerActivismIcon fontSize="large" />,
            title: 'Ferramentas para o bem-estar',
            description: 'Para cuidar da saúde, da autoestima e do futuro, garantindo um desenvolvimento integral.',
            color: '#4caf50',
        },
    ];

    // Variantes de animação
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12,
            },
        },
    };

    return (
        <section ref={ref} className="py-20 bg-[color:var(--color-primary)] text-white overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Título e descrição */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold">Benefícios de ser um talento DNA do Brasil</h2>
                    <div className="w-24 h-1 bg-white mx-auto mt-4 mb-6"></div>
                    <p className="max-w-2xl mx-auto text-lg text-white/90">
                        Fazemos a diferença na vida de jovens talentos fornecendo as ferramentas e oportunidades que
                        precisam para explorar todo seu potencial.
                    </p>
                </motion.div>

                {/* Cards dos benefícios */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {beneficios.map((beneficio) => (
                        <motion.div
                            key={beneficio.id}
                            className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                transition: { type: 'spring', stiffness: 400 },
                            }}
                        >
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto"
                                style={{ backgroundColor: `${beneficio.color}30` }}
                            >
                                <motion.div
                                    style={{ color: beneficio.color }}
                                    whileHover={{
                                        rotate: 360,
                                        transition: { duration: 0.8, ease: 'easeInOut' },
                                    }}
                                >
                                    {beneficio.icon}
                                </motion.div>
                            </div>

                            <h3 className="text-xl font-bold text-center mb-3">{beneficio.title}</h3>

                            <p className="text-white/80 text-center">{beneficio.description}</p>

                            <motion.div
                                className="absolute -bottom-2 -right-2 w-12 h-12"
                                initial={{ opacity: 0.3 }}
                                whileHover={{ opacity: 1, scale: 1.1 }}
                            >
                                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="50" cy="50" r="50" fill={beneficio.color} fillOpacity="0.3" />
                                </svg>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA final */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.5 } } : { opacity: 0 }
                    }
                >
                    <motion.a
                        href="/contato"
                        className="inline-flex items-center bg-white text-[color:var(--color-primary)] px-8 py-3 rounded-lg font-semibold shadow-xl group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Quero ser um talento
                        <motion.span
                            className="ml-2 inline-block"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <ArrowForwardIcon />
                        </motion.span>
                    </motion.a>

                    <p className="mt-4 text-white/80 text-sm">
                        Junte-se aos mais de 250 mil alunos que já transformaram suas vidas através do DNA do Brasil.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default BeneficiosTalento;
