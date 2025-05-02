import React from 'react';
import { motion } from 'framer-motion';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VerifiedIcon from '@mui/icons-material/Verified';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';

const EstruturaCurso: React.FC = () => {
    // Componentes da estrutura do curso
    const courseComponents = [
        {
            id: 1,
            title: 'Aulas gravadas',
            description:
                'Acesso a videoaulas com professores especialistas e materiais complementares para aprofundamento.',
            icon: <OndemandVideoIcon style={{ fontSize: 40 }} />,
            color: '#3B82F6',
        },
        {
            id: 2,
            title: 'Atividades práticas',
            description: 'Estudos de caso reais e exercícios práticos para aplicar os conhecimentos adquiridos.',
            icon: <MenuBookIcon style={{ fontSize: 40 }} />,
            color: '#10B981',
        },
        {
            id: 3,
            title: 'Avaliações online',
            description:
                'Sistema de avaliação flexível, permitindo que você organize seus estudos conforme sua disponibilidade.',
            icon: <AssignmentIcon style={{ fontSize: 40 }} />,
            color: '#F59E0B',
        },
        {
            id: 4,
            title: 'Acompanhamento',
            description:
                'Tutores e especialistas do programa disponíveis para esclarecer dúvidas e orientar seu aprendizado.',
            icon: <SupportAgentIcon style={{ fontSize: 40 }} />,
            color: '#8B5CF6',
        },
        {
            id: 5,
            title: 'Certificação MEC',
            description: 'Ao concluir o curso, você recebe um certificado reconhecido pelo Ministério da Educação.',
            icon: <VerifiedIcon style={{ fontSize: 40 }} />,
            color: '#EC4899',
        },
    ];

    // Configuração da timeline com ícones numéricos para mobile
    const timelineSteps = [
        {
            id: 1,
            title: 'Fundamentos e Conceitos',
            description:
                'Introdução aos principais conceitos sobre detecção de talentos, desenvolvimento esportivo e bases científicas da avaliação.',
            detailText:
                'Aprenda sobre desenvolvimento motor, psicologia do esporte e as bases científicas para detecção de talentos.',
            color: '#3B82F6',
            icon: <LooksOneIcon style={{ fontSize: 24 }} />,
            mobileModuleTitle: 'Módulo 1',
        },
        {
            id: 2,
            title: 'Protocolos de Avaliação',
            description:
                'Aprenda a aplicar e interpretar protocolos de avaliação física, motora, técnica e socioemocional.',
            detailText:
                'Conheça os protocolos utilizados pelo Programa DNA do Brasil e aprenda a aplicá-los em diferentes contextos.',
            color: '#10B981',
            icon: <LooksTwoIcon style={{ fontSize: 24 }} />,
            mobileModuleTitle: 'Módulo 2',
        },
        {
            id: 3,
            title: 'Análise e Interpretação de Dados',
            description:
                'Desenvolvimento de habilidades para análise dos resultados e elaboração de relatórios personalizados.',
            detailText:
                'Aprenda a interpretar os dados coletados e transformá-los em informações úteis para o desenvolvimento do atleta.',
            color: '#8B5CF6',
            icon: <Looks3Icon style={{ fontSize: 24 }} />,
            mobileModuleTitle: 'Módulo 3',
        },
        {
            id: 4,
            title: 'Desenvolvimento e Orientação',
            description:
                'Estratégias para orientação esportiva, desenvolvimento de potencialidades e acompanhamento de jovens atletas.',
            detailText:
                'Aprenda a criar planos de desenvolvimento personalizados e a orientar jovens em suas trajetórias esportivas.',
            color: '#F59E0B',
            icon: <Looks4Icon style={{ fontSize: 24 }} />,
            mobileModuleTitle: 'Módulo 4',
        },
        {
            id: 5,
            title: 'Trabalho de Conclusão',
            description:
                'Desenvolvimento de um projeto final prático, aplicando os conhecimentos adquiridos em um caso real.',
            detailText:
                'Coloque em prática todo o conhecimento adquirido, com orientação dos professores e feedback personalizado.',
            color: '#EC4899',
            icon: <Looks5Icon style={{ fontSize: 24 }} />,
            mobileModuleTitle: 'Módulo 5',
        },
    ];

    return (
        <section id="estrutura" className="py-20 bg-gray-50">
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B2545]">Como funciona?</h2>
                        <div className="w-20 h-1 bg-[#0B2545] mx-auto mb-8"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Conheça a estrutura do nosso curso, pensada para proporcionar uma experiência de aprendizado
                            completa e flexível.
                        </p>
                    </motion.div>

                    {/* Preview da plataforma */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-[#0B2545]">Plataforma intuitiva e completa</h3>

                            <p className="text-gray-700 mb-6">
                                Nossa plataforma EAD foi desenvolvida para oferecer a melhor experiência de aprendizado,
                                com interface intuitiva e todos os recursos necessários para seus estudos.
                            </p>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Acesso 24/7:</span> Estude no seu ritmo e
                                        horário, de qualquer dispositivo.
                                    </p>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Material complementar:</span> E-books, artigos
                                        científicos e recursos didáticos exclusivos.
                                    </p>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Fóruns de discussão:</span> Interaja com colegas
                                        e professores, compartilhando experiências e tirando dúvidas.
                                    </p>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Feedback personalizado:</span> Receba
                                        orientações específicas sobre suas atividades e avaliações.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-6 rounded-xl shadow-inner">
                                <h4 className="text-xl font-semibold mb-3 text-[#0B2545]">Carga horária</h4>
                                <p className="text-gray-700 mb-2">
                                    O curso possui <span className="font-semibold">360 horas</span> de duração, com
                                    previsão de conclusão em 6 meses, podendo ser estendido conforme sua
                                    disponibilidade.
                                </p>
                                <p className="text-gray-700">
                                    Todas as atividades são assíncronas, permitindo que você organize seus estudos de
                                    acordo com sua rotina.
                                </p>
                            </div>
                        </motion.div>

                        {/* Imagem da plataforma */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <img
                                src="/images/pos-graduacao/plataforma.png"
                                alt="Preview da plataforma EAD"
                                className="w-full rounded-xl shadow-xl"
                            />

                            {/* Destaque de funcionalidades */}
                            <motion.div
                                className="absolute -top-4 -right-4 bg-white px-4 py-3 rounded-lg shadow-lg max-w-xs"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.6 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-center text-[#0B2545] font-bold">
                                    <OndemandVideoIcon className="mr-2 text-blue-500" />
                                    Videoaulas em HD
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-4 -left-4 bg-white px-4 py-3 rounded-lg shadow-lg max-w-xs"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.8 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-center text-[#0B2545] font-bold">
                                    <SupportAgentIcon className="mr-2 text-purple-500" />
                                    Suporte exclusivo
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Componentes do curso */}
                    <div className="mb-16">
                        <motion.h3
                            className="text-2xl font-bold mb-8 text-center text-[#0B2545]"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        >
                            Estrutura do curso
                        </motion.h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {courseComponents.map((component, index) => (
                                <motion.div
                                    key={component.id}
                                    className="bg-white rounded-xl shadow-md overflow-hidden"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    whileHover={{
                                        y: -5,
                                        boxShadow:
                                            '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                                    }}
                                >
                                    <div className="h-2" style={{ backgroundColor: component.color }}></div>
                                    <div className="p-6">
                                        <div
                                            className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                                            style={{ backgroundColor: `${component.color}15` }}
                                        >
                                            <div style={{ color: component.color }}>{component.icon}</div>
                                        </div>

                                        <h4 className="text-xl font-bold text-center mb-3 text-gray-800">
                                            {component.title}
                                        </h4>

                                        <p className="text-gray-600 text-center">{component.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline do curso */}
                    <motion.div
                        className="bg-white rounded-xl shadow-lg p-8 md:p-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-8 text-center text-[#0B2545]">Percurso de aprendizagem</h3>

                        {/* Timeline - Desktop */}
                        <div className="hidden md:block relative">
                            {/* Linha do tempo */}
                            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>

                            <div className="space-y-20">
                                {timelineSteps.map((step) => (
                                    <div key={step.id} className="grid grid-cols-2 gap-16 relative">
                                        <motion.div
                                            className="text-right pr-8"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <h4 className="text-xl font-bold mb-2 text-[#0B2545]">{step.title}</h4>
                                            <p className="text-gray-600">{step.description}</p>
                                        </motion.div>

                                        <div
                                            className="absolute left-1/2 top-5 w-10 h-10 rounded-full shadow-lg transform -translate-x-1/2 flex items-center justify-center"
                                            style={{ backgroundColor: step.color }}
                                        >
                                            <span className="text-white font-bold">{step.id}</span>
                                        </div>

                                        <motion.div
                                            className="pl-8"
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <p className="text-gray-600">{step.detailText}</p>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Timeline - Mobile (Otimizada) */}
                        <div className="md:hidden">
                            {timelineSteps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    className="mb-8 last:mb-0"
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    {/* Card de módulo com estilo melhorado */}
                                    <div
                                        className="rounded-lg shadow-md overflow-hidden border-l-4"
                                        style={{ borderLeftColor: step.color }}
                                    >
                                        {/* Cabeçalho do módulo */}
                                        <div
                                            className="flex items-center p-4"
                                            style={{ backgroundColor: `${step.color}10` }}
                                        >
                                            <div
                                                className="w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                                                style={{ backgroundColor: step.color }}
                                            >
                                                <span className="text-white font-bold">{step.id}</span>
                                            </div>

                                            <div>
                                                <h5 className="text-sm text-gray-500 font-medium">
                                                    {step.mobileModuleTitle}
                                                </h5>
                                                <h4 className="text-lg font-bold text-[#0B2545]">{step.title}</h4>
                                            </div>
                                        </div>

                                        {/* Conteúdo do módulo */}
                                        <div className="p-4 bg-white">
                                            <p className="text-gray-600 mb-3">{step.description}</p>
                                            <p className="text-gray-700 text-sm border-t pt-3 border-gray-100">
                                                {step.detailText}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Conectores entre os módulos */}
                                    {index < timelineSteps.length - 1 && (
                                        <div className="flex justify-center my-4">
                                            <div className="w-0.5 h-6 bg-gray-200"></div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EstruturaCurso;
