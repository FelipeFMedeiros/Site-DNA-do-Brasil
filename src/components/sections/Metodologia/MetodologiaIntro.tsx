import React from 'react';
import { motion } from 'framer-motion';
import {
    SportsSoccerOutlined,
    FavoriteOutlined,
    SentimentSatisfiedAltOutlined,
    SchoolOutlined,
    WorkOutlineOutlined,
} from '@mui/icons-material';

interface DimensaoProps {
    titulo: string;
    descricao: string;
    icone: React.ReactNode;
    cor: string;
    delay: number;
}

const Dimensao: React.FC<DimensaoProps> = ({ titulo, descricao, icone, cor, delay }) => (
    <motion.div
        className="bg-white rounded-lg shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        whileHover={{
            y: -5,
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            transition: { duration: 0.2 },
        }}
    >
        <div className="h-2 w-full" style={{ backgroundColor: cor }}></div>
        <div className="p-6">
            <div className="flex items-center mb-4">
                <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: cor + '20' }}
                >
                    <div className="text-2xl" style={{ color: cor }}>
                        {icone}
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{titulo}</h3>
            </div>
            <p className="text-gray-600">{descricao}</p>
        </div>
    </motion.div>
);

const Section1MetodologiaIntro: React.FC = () => {
    const dimensoes: DimensaoProps[] = [
        {
            titulo: 'Físico-Motor',
            descricao:
                'Avalia capacidades como força, agilidade, velocidade, resistência, flexibilidade e outras habilidades importantes para a prática esportiva. Os resultados apontam para o encaminhamento adequado a modalidades que respeitam o ritmo e o potencial de cada um.',
            icone: <SportsSoccerOutlined />,
            cor: '#0B2545',
            delay: 0.3,
        },
        {
            titulo: 'Saúde',
            descricao:
                'Observa indicadores que envolvem o estado físico geral e o risco de doenças crônicas, como obesidade e diabetes, além de analisar o perfil alimentar e as condições relacionadas à rotina de autocuidado. Também inclui o rastreio de saúde bucal.',
            icone: <FavoriteOutlined />,
            cor: '#13315C',
            delay: 0.4,
        },
        {
            titulo: 'Qualidade de Vida',
            descricao:
                'Explora aspectos emocionais, familiares e sociais que influenciam a experiência escolar e o bem-estar do estudante. Aqui, aspectos como autoestima, relações interpessoais e ambiente familiar ganham destaque.',
            icone: <SentimentSatisfiedAltOutlined />,
            cor: '#134074',
            delay: 0.5,
        },
        {
            titulo: 'Educacional',
            descricao:
                'Acompanha o desempenho escolar de forma criteriosa, com base em simulados, provas, projetos e atividades. Também considera participação em cursos, olimpíadas, feiras e outras iniciativas que fortalecem a trajetória acadêmica.',
            icone: <SchoolOutlined />,
            cor: '#0F5298',
            delay: 0.6,
        },
        {
            titulo: 'Vocacional',
            descricao:
                'Aponta as áreas de interesse do aluno, ajudando na construção de um projeto de vida com sentido. A partir desses dados, o programa propõe encaminhamentos para oficinas, cursos, eventos e até oportunidades profissionais que estejam alinhadas com seu perfil.',
            icone: <WorkOutlineOutlined />,
            cor: '#1282A2',
            delay: 0.7,
        },
    ];

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 uppercase"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Uma metodologia pensada para enxergar o aluno por inteiro
                    </motion.h2>
                    <motion.div
                        className="h-1 w-32 bg-[#134074] mx-auto mb-8"
                        initial={{ width: 0 }}
                        whileInView={{ width: 128 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                <motion.div
                    className="max-w-4xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        A metodologia DNA do Brasil foi criada para dar suporte real a escolas, professores e
                        estudantes. Mais do que medir desempenho, ela permite entender o contexto, o potencial e os
                        desafios de cada aluno. Tudo isso com base em dados, mas com olhar sensível e foco no que
                        realmente importa: o desenvolvimento integral.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Ela se organiza a partir de <strong>cinco grandes dimensões</strong> de análise, que ajudam a
                        compor o perfil completo de cada estudante:
                    </p>
                </motion.div>

                {/* Círculo interativo em telas grandes */}
                <div className="w-full flex justify-center items-center mb-16">
                    <div className="relative w-full max-w-5xl mx-auto">
                        <motion.div
                            className="hidden lg:flex justify-center items-center relative"
                            style={{
                                height: 'min(680px, 90vh)',
                                width: 'min(680px, 90vw)',
                                margin: '0 auto',
                            }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            {/* Linhas de conexão */}
                            <svg className="absolute w-full h-full" viewBox="0 0 680 680" style={{ zIndex: 1 }}>
                                {dimensoes.map((dimensao, index) => {
                                    const sliceAngle = (2 * Math.PI) / dimensoes.length;
                                    const angle = -Math.PI / 2 + index * sliceAngle;
                                    const innerRadius = 70; // Raio do círculo central
                                    const outerRadius = 260; // Raio até os cards
                                    
                                    const x1 = 340 + Math.cos(angle) * innerRadius;
                                    const y1 = 340 + Math.sin(angle) * innerRadius;
                                    const x2 = 340 + Math.cos(angle) * outerRadius;
                                    const y2 = 340 + Math.sin(angle) * outerRadius;
                                    
                                    return (
                                        <motion.line
                                            key={`line-${index}`}
                                            x1={x1}
                                            y1={y1}
                                            x2={x2}
                                            y2={y2}
                                            stroke={dimensao.cor}
                                            strokeWidth="2"
                                            strokeDasharray="6,4"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            whileInView={{ pathLength: 1, opacity: 0.5 }}
                                            transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                                        />
                                    );
                                })}
                            </svg>

                            {/* Círculo central */}
                            <motion.div
                                className="absolute left-1/2 top-1/2 w-44 h-44 rounded-full bg-gradient-to-r from-[#0B2545] to-[#134074] flex items-center justify-center z-10 shadow-xl"
                                style={{ transform: 'translate(-50%, -50%)' }}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 200 }}
                                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            >
                                <div className="text-white text-center font-bold text-xl px-4 leading-tight">
                                    <span className="block text-sm text-blue-200 mb-1">A</span>
                                    Metodologia
                                    <br />
                                    DNA do Brasil
                                </div>
                            </motion.div>

                            {/* Dimensões em círculo */}
                            {dimensoes.map((dimensao, index) => {
                                const sliceAngle = (2 * Math.PI) / dimensoes.length;
                                const angle = -Math.PI / 2 + index * sliceAngle;
                                const radius = 260;
                                const x = Math.cos(angle) * radius;
                                const y = Math.sin(angle) * radius;

                                return (
                                    <motion.div
                                        key={dimensao.titulo}
                                        className="absolute z-20 w-60 bg-white rounded-lg shadow-lg p-4 border-l-4"
                                        style={{
                                            left: `calc(50% + ${x}px)`,
                                            top: `calc(50% + ${y}px)`,
                                            transform: 'translate(-50%, -50%)',
                                            borderLeftColor: dimensao.cor,
                                        }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                                        whileHover={{
                                            scale: 1.08,
                                            boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.15)',
                                            zIndex: 30,
                                            transition: { duration: 0.2 },
                                        }}
                                    >
                                        <div className="flex items-center mb-2">
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center mr-3"
                                                style={{ backgroundColor: dimensao.cor + '20' }}
                                            >
                                                <div style={{ color: dimensao.cor }}>{dimensao.icone}</div>
                                            </div>
                                            <h3 className="font-bold text-gray-800 text-lg">{dimensao.titulo}</h3>
                                        </div>
                                        <p className="text-sm text-gray-600 line-clamp-3">{dimensao.descricao}</p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>

                {/* Visualização em cards para telas menores */}
                <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
                    {dimensoes.map((dimensao) => (
                        <Dimensao
                            key={dimensao.titulo}
                            titulo={dimensao.titulo}
                            descricao={dimensao.descricao}
                            icone={dimensao.icone}
                            cor={dimensao.cor}
                            delay={dimensao.delay}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section1MetodologiaIntro;
