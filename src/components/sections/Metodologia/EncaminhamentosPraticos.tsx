import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    WorkOutlineOutlined,
    PsychologyOutlined,
    SchoolOutlined,
    FavoriteOutlined,
    SportsSoccerOutlined,
    RestaurantOutlined,
} from '@mui/icons-material';

interface EncaminhamentoProps {
    id: string;
    titulo: string;
    descricao: string;
    icone: React.ReactNode;
    cor: string;
    itens: string[];
}

const EncaminhamentosPraticos: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('vocacional');

    const encaminhamentos: EncaminhamentoProps[] = [
        {
            id: 'vocacional',
            titulo: 'Vocacional',
            descricao: 'Orientação para escolhas profissionais e desenvolvimento de habilidades específicas',
            icone: <WorkOutlineOutlined style={{ fontSize: 28 }} />,
            cor: '#9C27B0',
            itens: [
                'Oficinas profissionalizantes',
                'Projeto de vida e profissional',
                'Cadastro em banco de talentos para vagas de estágio e primeiro emprego',
            ],
        },
        {
            id: 'psicossocial',
            titulo: 'Psicossocial',
            descricao: 'Suporte emocional e social para o bem-estar e desenvolvimento integral',
            icone: <PsychologyOutlined style={{ fontSize: 28 }} />,
            cor: '#E91E63',
            itens: [
                'Cursos de autoestima',
                'Apoio com psicólogo ou assistente social',
                'Orientação familiar',
                'Articulação com a rede socioassistencial',
            ],
        },
        {
            id: 'educacional',
            titulo: 'Educacional',
            descricao: 'Apoio pedagógico focado na aprendizagem e desenvolvimento acadêmico',
            icone: <SchoolOutlined style={{ fontSize: 28 }} />,
            cor: '#3F51B5',
            itens: [
                'Indicação de cursos preparatórios',
                'Recomposição das aprendizagens',
                'Participação em olimpíadas acadêmicas',
                'Monitorias',
            ],
        },
        {
            id: 'saude',
            titulo: 'Saúde',
            descricao: 'Cuidados preventivos e orientações para uma vida saudável',
            icone: <FavoriteOutlined style={{ fontSize: 28 }} />,
            cor: '#F44336',
            itens: [
                'Palestras de orientação',
                'Acompanhamento com profissionais de saúde',
                'Incentivo à prática de hábitos saudáveis',
            ],
        },
        {
            id: 'esporte',
            titulo: 'Esporte',
            descricao: 'Desenvolvimento de aptidões esportivas e encaminhamento para oportunidades',
            icone: <SportsSoccerOutlined style={{ fontSize: 28 }} />,
            cor: '#03A9F4',
            itens: [
                'Aperfeiçoamento de talento',
                'Encaminhamento para projetos de iniciação esportiva',
                'Clubes e federações',
                'Participação em torneios',
                'Seleção de atletas monitores',
            ],
        },
        {
            id: 'nutricao',
            titulo: 'Nutrição',
            descricao: 'Orientação alimentar e desenvolvimento de hábitos alimentares saudáveis',
            icone: <RestaurantOutlined style={{ fontSize: 28 }} />,
            cor: '#4CAF50',
            itens: ['Oficinas de alimentação', 'Cursos de nutrição', 'Acompanhamento alimentar familiar'],
        },
    ];

    const activeEncaminhamento = encaminhamentos.find((e) => e.id === activeTab) || encaminhamentos[0];

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-7xl mx-auto">
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
                        Encaminhamentos Práticos
                    </motion.h2>
                    <motion.div
                        className="h-1 w-32 bg-[#134074] mx-auto mb-8"
                        initial={{ width: 0 }}
                        whileInView={{ width: 128 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                    <motion.p
                        className="text-lg text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Com base no laudo individual, oferecemos diversos caminhos de desenvolvimento personalizados
                        para cada estudante
                    </motion.p>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-wrap border-b">
                        {encaminhamentos.map((encaminhamento) => (
                            <button
                                key={encaminhamento.id}
                                className={`py-4 px-6 focus:outline-none transition-colors duration-200 relative
                                    ${
                                        activeTab === encaminhamento.id
                                            ? 'text-gray-800 font-bold'
                                            : 'text-gray-500 hover:text-gray-700 hover:cursor-pointer'
                                    }`}
                                onClick={() => setActiveTab(encaminhamento.id)}
                            >
                                <div className="flex items-center">
                                    <span className="mr-2" style={{ color: encaminhamento.cor }}>
                                        {encaminhamento.icone}
                                    </span>
                                    <span>{encaminhamento.titulo}</span>
                                </div>
                                {activeTab === encaminhamento.id && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 w-full h-1"
                                        style={{ backgroundColor: encaminhamento.cor }}
                                        layoutId="activeTab"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="p-8">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col md:flex-row gap-8"
                        >
                            <div className="md:w-1/3">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                                    style={{ backgroundColor: activeEncaminhamento.cor + '20' }}
                                >
                                    <div className="text-3xl" style={{ color: activeEncaminhamento.cor }}>
                                        {activeEncaminhamento.icone}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{activeEncaminhamento.titulo}</h3>
                                <p className="text-gray-600 mb-4">{activeEncaminhamento.descricao}</p>
                            </div>
                            <div className="md:w-2/3 bg-gray-50 rounded-lg p-6">
                                <h4 className="font-bold text-gray-700 mb-4">Ações e oportunidades:</h4>
                                <ul className="space-y-3">
                                    {activeEncaminhamento.itens.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-start"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: 0.1 + index * 0.08 }}
                                        >
                                            <div
                                                className="w-6 h-6 rounded-full mr-3 flex-shrink-0 flex items-center justify-center mt-0.5"
                                                style={{ backgroundColor: activeEncaminhamento.cor }}
                                            >
                                                <svg
                                                    className="w-4 h-4 text-white"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Chamada para ação */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Construindo futuros com propósito</h3>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                        Nossa metodologia não apenas identifica talentos e potenciais, mas oferece caminhos concretos
                        para que cada estudante possa se desenvolver de forma integral
                    </p>
                    <motion.button
                        className="px-8 py-3 bg-[#134074] text-white rounded-lg text-lg font-medium shadow-md hover:bg-[#0B2545] transition duration-200 hover:cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Saiba mais sobre nossos resultados
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default EncaminhamentosPraticos;
