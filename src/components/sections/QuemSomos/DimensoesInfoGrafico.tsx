import React from 'react';
import { motion } from 'framer-motion';
import { FavoriteOutlined, EmojiEvents, Restaurant, MedicalServices, ThumbUp, StarOutline } from '@mui/icons-material';

interface DimensaoProps {
    id: number;
    titulo: string;
    descricao?: string;
    icone: React.ReactNode;
    cor: string;
}

const DimensoesInfoGrafico: React.FC = () => {
    const dimensoes: DimensaoProps[] = [
        {
            id: 1,
            titulo: 'Saúde',
            descricao: 'Avaliação de habilidades específicas e métricas de desempenho individual.',
            icone: <FavoriteOutlined style={{ fontSize: 40 }} />,
            cor: '#D2322D',
        },
        {
            id: 2,
            titulo: 'Talento Esportivo',
            descricao: 'Identificação de potenciais atletas e direcionamento para modalidades adequadas.',
            icone: <EmojiEvents style={{ fontSize: 40 }} />,
            cor: '#ED9C28',
        },
        {
            id: 3,
            titulo: 'Consumo Alimentar',
            descricao: 'Análise de hábitos alimentares e recomendações nutricionais personalizadas.',
            icone: <Restaurant style={{ fontSize: 40 }} />,
            cor: '#47A447',
        },
        {
            id: 4,
            titulo: 'Saúde Bucal',
            descricao: 'Avaliação odontológica e orientações para cuidados preventivos.',
            icone: <MedicalServices style={{ fontSize: 40 }} />,
            cor: '#5BC0DE',
        },
        {
            id: 5,
            titulo: 'Qualidade de Vida',
            descricao: 'Análise do bem-estar geral e fatores que influenciam na qualidade de vida.',
            icone: <ThumbUp style={{ fontSize: 40 }} />,
            cor: '#00A4A9',
        },
        {
            id: 6,
            titulo: 'Vocacional',
            descricao: 'Identificação de aptidões, interesses e potenciais caminhos profissionais.',
            icone: <StarOutline style={{ fontSize: 40 }} />,
            cor: '#9C27B0',
        },
    ];

    return (
        <div className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Dimensões Avaliadas</h3>
                    <div className="h-1 w-16 bg-[color:var(--color-primary)] mx-auto mt-3 mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Nosso protocolo avalia seis dimensões fundamentais para o desenvolvimento integral
                    </p>
                </motion.div>

                <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
                    {/* Círculo central */}
                    <motion.div
                        className="absolute w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center z-10 shadow-lg"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5, type: 'spring', stiffness: 200 }}
                    >
                        <span className="text-white text-center font-bold text-sm md:text-base px-2">
                            DNA <br /> do Brasil
                        </span>
                    </motion.div>

                    {/* Linhas de conexão (exibidas apenas em telas maiores) */}
                    <div className="hidden md:block">
                        {dimensoes.map((dimensao, index) => {
                            const angle = index * (360 / dimensoes.length) * (Math.PI / 180);
                            const innerRadius = 70;
                            const outerRadius = 150;
                            const innerX = innerRadius * Math.cos(angle);
                            const innerY = innerRadius * Math.sin(angle);

                            return (
                                <motion.div
                                    key={`line-${dimensao.id}`}
                                    className="absolute left-1/2 top-1/2 h-px bg-gray-300 origin-left"
                                    style={{
                                        width: outerRadius - innerRadius,
                                        transform: `translate(${innerX}px, ${innerY}px) rotate(${
                                            angle * (180 / Math.PI)
                                        }deg)`,
                                    }}
                                    initial={{ opacity: 0, scaleX: 0 }}
                                    whileInView={{ opacity: 0.6, scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                                />
                            );
                        })}
                    </div>

                    {/* Dimensões ao redor */}
                    {dimensoes.map((dimensao, index) => {
                        // Posicionar em círculo
                        const angle = index * (360 / dimensoes.length) * (Math.PI / 180);
                        const radius = 150; // Raio do círculo
                        const x = radius * Math.cos(angle);
                        const y = radius * Math.sin(angle);

                        return (
                            <motion.div
                                key={dimensao.id}
                                className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full shadow-md flex items-center justify-center cursor-pointer"
                                style={{ backgroundColor: dimensao.cor }}
                                initial={{ opacity: 0, x: 0, y: 0 }}
                                whileInView={{
                                    opacity: 1,
                                    x: x,
                                    y: y,
                                }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.1, type: 'spring', damping: 15 }}
                                whileHover={{
                                    scale: 1.2,
                                    zIndex: 20,
                                    transition: { duration: 0.15, type: 'spring', stiffness: 400 },
                                }}
                            >
                                <motion.div className="text-white">{dimensao.icone}</motion.div>

                                {/* Tooltip para mostrar detalhes */}
                                <motion.div
                                    className="absolute opacity-0 invisible bg-white p-3 rounded-lg shadow-xl w-48 z-30"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileHover={{
                                        opacity: 1,
                                        scale: 1,
                                        visibility: 'visible',
                                    }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <h4 className="font-bold text-gray-800 mb-1">{dimensao.titulo}</h4>
                                    <p className="text-xs text-gray-600">{dimensao.descricao}</p>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Versão responsiva para telas menores */}
                <div className="md:hidden mt-16">
                    <div className="grid grid-cols-2 gap-4">
                        {dimensoes.map((dimensao) => (
                            <motion.div
                                key={`mobile-${dimensao.id}`}
                                className="bg-white p-4 rounded-lg shadow-md border-l-4"
                                style={{ borderLeftColor: dimensao.cor }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.4 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="flex items-center space-x-3 mb-2">
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: dimensao.cor }}
                                    >
                                        <span className="text-white">
                                            {React.cloneElement(
                                                dimensao.icone as React.ReactElement<{ style?: React.CSSProperties }>,
                                                {
                                                    style: { fontSize: 20 },
                                                },
                                            )}
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-sm text-gray-800">{dimensao.titulo}</h4>
                                </div>
                                <p className="text-xs text-gray-600 line-clamp-3">{dimensao.descricao}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DimensoesInfoGrafico;
