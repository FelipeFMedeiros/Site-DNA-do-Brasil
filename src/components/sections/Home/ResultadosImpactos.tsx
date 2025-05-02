import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence, Variants } from 'framer-motion';

// Importação dos ícones do MUI
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ResultadosImpactos: React.FC = () => {
    // Ref para detecção de quando a seção está visível
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    // Estado para rastrear qual resultado está sendo detalhado
    const [activeResult, setActiveResult] = useState<number | null>(null);

    // Estado para controlar se as animações iniciais já foram executadas
    const [animationsComplete, setAnimationsComplete] = useState(false);

    // Efeito para marcar animações como completas após a visualização inicial
    useEffect(() => {
        if (isInView && !animationsComplete) {
            // Esperamos que todas as animações terminem antes de marcar como completas
            const timer = setTimeout(() => {
                setAnimationsComplete(true);
            }, 1500); // Tempo suficiente para que todas as animações iniciais terminem

            return () => clearTimeout(timer);
        }
    }, [isInView, animationsComplete]);

    // Variantes de animação para o título
    const titleVariants: Variants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    // Variantes para os contadores
    const counterVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                type: 'spring',
                stiffness: 100,
            },
        }),
    };

    // Variantes para as descrições expandidas
    const expandVariants: Variants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: 'auto',
            transition: { duration: 0.3 },
        },
    };

    // Dados dos resultados com ícones e descrições
    const results = [
        {
            id: 1,
            icon: <PeopleIcon style={{ fontSize: 36 }} />,
            title: 'Capacitação de mais de 5 mil profissionais',
            color: '#4E67EB',
            number: 5000,
            description:
                'Professores, treinadores e especialistas em educação receberam formação específica para identificar e desenvolver talentos.',
        },
        {
            id: 2,
            icon: <SchoolIcon style={{ fontSize: 36 }} />,
            title: 'Mais de 250 mil alunos atendidos',
            color: '#FF725C',
            number: 250000,
            description:
                'Crianças e adolescentes de escolas públicas receberam acompanhamento personalizado de acordo com suas habilidades e interesses.',
        },
        {
            id: 3,
            icon: <TrendingUpIcon style={{ fontSize: 36 }} />,
            title: 'Aumento de frequência e engajamento',
            color: '#38D9A9',
            number: 100,
            suffix: '%',
            description:
                'As escolas participantes registraram melhora significativa na frequência e no engajamento dos alunos nas atividades escolares.',
        },
        {
            id: 4,
            icon: <EmojiEventsIcon style={{ fontSize: 36 }} />,
            title: 'Prêmio CIEE',
            color: '#FAB005',
            description:
                'Reconhecimento por excelência no desenvolvimento de estudantes para o mercado de trabalho, fortalecendo a conexão entre educação e oportunidades profissionais.',
        },
        {
            id: 5,
            icon: <AccessibilityNewIcon style={{ fontSize: 36 }} />,
            title: 'Acesso ampliado à cultura, ao esporte e a educação',
            color: '#9775FA',
            description:
                'Criação de novas oportunidades de acesso a atividades culturais, práticas esportivas e recursos educacionais de qualidade em regiões de vulnerabilidade social.',
        },
    ];

    // Função para renderizar um contador animado
    const AnimatedCounter = ({
        target,
        suffix = '',
        duration = 2,
    }: {
        target: number;
        suffix?: string;
        duration?: number;
    }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (isInView) {
                let start = 0;
                const increment = target / (duration * 60); // 60fps assumption

                const timer = setInterval(() => {
                    start += increment;
                    if (start > target) {
                        setCount(target);
                        clearInterval(timer);
                    } else {
                        setCount(Math.floor(start));
                    }
                }, 1000 / 60);

                return () => clearInterval(timer);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [isInView, target, duration]);

        return (
            <span className="font-bold">
                {count.toLocaleString()}
                {suffix}
            </span>
        );
    };

    return (
        <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                {/* Título da seção com animação */}
                <motion.div
                    className="text-center mb-16"
                    variants={titleVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <h2 className="text-3xl md:text-4xl font-bold">Resultados e Impactos</h2>
                    <div className="w-24 h-1 bg-[color:var(--color-primary)] mx-auto mt-4"></div>
                </motion.div>

                {/* Lista de resultados */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                    {results.map((result, index) => (
                        <motion.div
                            key={result.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
                            variants={counterVariants}
                            custom={index}
                            initial={animationsComplete ? 'visible' : 'hidden'}
                            animate={isInView || animationsComplete ? 'visible' : 'hidden'}
                            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                            onClick={() => setActiveResult(activeResult === result.id ? null : result.id)}
                        >
                            <div className="p-6">
                                <div className="flex items-start mb-4">
                                    <motion.div
                                        className="p-3 rounded-full mr-4 flex-shrink-0"
                                        style={{ backgroundColor: `${result.color}20` }}
                                        whileHover={{
                                            rotate: [0, -5, 5, -5, 0],
                                            transition: { duration: 0.5 },
                                        }}
                                    >
                                        <div style={{ color: result.color }}>{result.icon}</div>
                                    </motion.div>

                                    <div>
                                        <div className="flex items-center">
                                            <CheckCircleIcon
                                                style={{ color: result.color, fontSize: 20, marginRight: 6 }}
                                            />
                                            <h3 className="font-bold text-lg">{result.title}</h3>
                                        </div>

                                        {/* Contador animado para resultados numéricos */}
                                        {result.number && (
                                            <p className="text-2xl font-bold mt-2" style={{ color: result.color }}>
                                                {animationsComplete ? (
                                                    <span>
                                                        {result.number.toLocaleString()}
                                                        {result.suffix || ''}
                                                    </span>
                                                ) : (
                                                    <AnimatedCounter
                                                        target={result.number}
                                                        suffix={result.suffix || ''}
                                                    />
                                                )}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Área expandível com detalhes */}
                                <AnimatePresence>
                                    {activeResult === result.id && (
                                        <motion.div
                                            className="text-gray-700 mt-4 border-t pt-4"
                                            variants={expandVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                        >
                                            <p>{result.description}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Indicador de "clique para mais detalhes" */}
                                <motion.div
                                    className="mt-2 text-sm text-gray-500 flex items-center"
                                    animate={{ opacity: activeResult === result.id ? 0 : 1 }}
                                >
                                    <span>{activeResult === result.id ? 'Fechar' : 'Clique para mais detalhes'}</span>
                                    <motion.span
                                        animate={{ x: [0, 3, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                        className="ml-1"
                                    >
                                        {activeResult !== result.id && '→'}
                                    </motion.span>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mensagem conclusiva */}
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0 }}
                    animate={
                        isInView || animationsComplete ? { opacity: 1, transition: { delay: 0.8 } } : { opacity: 0 }
                    }
                >
                    <p className="text-lg text-gray-700 italic">
                        Cada resultado mostra que é possível fazer diferente quando olhamos o aluno como ele realmente
                        é: alguém com sonhos, habilidades e potencial.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ResultadosImpactos;
