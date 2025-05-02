import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    BusinessCenterOutlined,
    PersonOutlineOutlined,
    WorkOutlineOutlined,
    SchoolOutlined,
    AutoStoriesOutlined,
    CategoryOutlined,
    RestaurantOutlined,
    FavoriteBorderOutlined,
    PsychologyOutlined,
    HealthAndSafetyOutlined,
} from '@mui/icons-material';

interface CursoProps {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
}

const CursosEAD: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('all');
    const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

    // Array de cursos disponíveis na plataforma
    const cursos: CursoProps[] = [
        {
            id: 'oficinas',
            title: 'Oficinas Profissionalizantes',
            description: 'Iniciação Profissional e Qualificação Social para o mercado de trabalho',
            icon: <BusinessCenterOutlined />,
            color: '#1E88E5', // azul
        },
        {
            id: 'projeto-vida',
            title: 'Projeto de Vida',
            description: 'Desenvolvimento de competências socioemocionais e planejamento de futuro',
            icon: <PersonOutlineOutlined />,
            color: '#7B1FA2', // roxo
        },
        {
            id: 'projeto-profissional',
            title: 'Projeto Profissional',
            description: 'Planejamento de carreira e orientação profissional personalizada',
            icon: <WorkOutlineOutlined />,
            color: '#D81B60', // rosa
        },
        {
            id: 'enem',
            title: 'Preparatórios para o ENEM',
            description: 'Conteúdos e exercícios para vestibulares e exames nacionais',
            icon: <SchoolOutlined />,
            color: '#43A047', // verde
        },
        {
            id: 'recomposicao',
            title: 'Recomposição das Aprendizagens',
            description: 'Reforço escolar personalizado para superar defasagens',
            icon: <AutoStoriesOutlined />,
            color: '#F4511E', // laranja
        },
        {
            id: 'temas',
            title: 'Temas Transversais',
            description: 'Educação para cidadania, meio ambiente, diversidade e outros temas',
            icon: <CategoryOutlined />,
            color: '#0097A7', // ciano
        },
        {
            id: 'nutricao',
            title: 'Nutrição',
            description: 'Alimentação saudável e hábitos nutricionais para estudantes',
            icon: <RestaurantOutlined />,
            color: '#689F38', // verde lima
        },
        {
            id: 'autoestima',
            title: 'Autoestima',
            description: 'Desenvolvimento da autoconfiança e valorização pessoal',
            icon: <FavoriteBorderOutlined />,
            color: '#C2185B', // rosa escuro
        },
        {
            id: 'autocontrole',
            title: 'Autocontrole',
            description: 'Técnicas para gestão emocional e controle do estresse',
            icon: <PsychologyOutlined />,
            color: '#5E35B1', // indigo
        },
        {
            id: 'saude',
            title: 'Saúde e Bem-estar',
            description: 'Práticas para manutenção da saúde física e mental',
            icon: <HealthAndSafetyOutlined />,
            color: '#00897B', // teal
        },
    ];

    // Categorias de cursos
    const categorias = [
        { id: 'all', title: 'Todos os Cursos' },
        { id: 'profissional', title: 'Desenvolvimento Profissional' },
        { id: 'educacional', title: 'Educacional' },
        { id: 'saude', title: 'Saúde e Bem-estar' },
    ];

    // Filtra os cursos com base na categoria ativa
    const filteredCursos = cursos.filter((curso) => {
        if (activeTab === 'all') return true;
        if (activeTab === 'profissional')
            return ['oficinas', 'projeto-vida', 'projeto-profissional'].includes(curso.id);
        if (activeTab === 'educacional') return ['enem', 'recomposicao', 'temas'].includes(curso.id);
        if (activeTab === 'saude') return ['nutricao', 'autoestima', 'autocontrole', 'saude'].includes(curso.id);
        return true;
    });

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-50 rounded-full opacity-60 -z-10"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-50 rounded-full opacity-60 -z-10"></div>

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
                        Cursos EAD (Ensino a Distância)
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
                        Dentro da plataforma, os participantes têm acesso a cursos online que apoiam o crescimento
                        acadêmico e profissional.
                    </motion.p>
                </motion.div>

                {/* Tabs de categorias para desktop */}
                <div className="mb-10 hidden md:block">
                    <div className="flex justify-center flex-wrap">
                        {categorias.map((categoria) => (
                            <motion.button
                                key={categoria.id}
                                className={`px-6 py-3 mx-2 mb-2 rounded-lg transition-all duration-200 font-medium 
                                    ${
                                        activeTab === categoria.id
                                            ? 'bg-[#134074] text-white shadow-md'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:cursor-pointer'
                                    }`}
                                onClick={() => setActiveTab(categoria.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {categoria.title}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Dropdown para mobile */}
                <div className="mb-8 md:hidden">
                    <select
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white shadow-sm text-gray-700"
                        value={activeTab}
                        onChange={(e) => setActiveTab(e.target.value)}
                    >
                        {categorias.map((categoria) => (
                            <option key={categoria.id} value={categoria.id}>
                                {categoria.title}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Grade de cursos */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    {filteredCursos.map((curso, index) => (
                        <motion.div
                            key={curso.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 h-full"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -10,
                                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                                transition: { duration: 0.2 },
                            }}
                            onMouseEnter={() => setHoveredCourse(curso.id)}
                            onMouseLeave={() => setHoveredCourse(null)}
                        >
                            <div className="h-2 w-full" style={{ backgroundColor: curso.color }}></div>
                            <div className="p-6 flex flex-col h-full">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                                    style={{ backgroundColor: `${curso.color}20` }}
                                >
                                    <motion.div
                                        className="text-3xl"
                                        style={{ color: curso.color }}
                                        animate={{
                                            scale: hoveredCourse === curso.id ? 1.2 : 1,
                                            rotate: hoveredCourse === curso.id ? 10 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {curso.icon}
                                    </motion.div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{curso.title}</h3>
                                <p className="text-gray-600 flex-grow mb-4">{curso.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Chamada para ação */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-sm">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">
                            Invista no seu desenvolvimento pessoal e profissional
                        </h3>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                            Nossos cursos são projetados para contribuir com o desenvolvimento integral, contemplando
                            desde habilidades técnicas até competências socioemocionais.
                        </p>
                        <motion.a
                            className="px-8 py-3 bg-[#134074] text-white rounded-lg text-lg font-medium shadow-md hover:bg-[#0B2545] transition duration-200 hover:cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            href='pos-graduacao'
                        >
                            Ver todos os cursos disponíveis
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CursosEAD;
