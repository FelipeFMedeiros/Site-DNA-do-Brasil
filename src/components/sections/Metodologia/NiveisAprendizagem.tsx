import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    TrendingDownOutlined,
    TrendingFlatOutlined,
    TrendingUpOutlined,
    CheckCircleOutline,
    ListAltOutlined,
    SchoolOutlined,
} from '@mui/icons-material';

interface NivelProps {
    id: string;
    titulo: string;
    descricao: string;
    cor: string;
    icone: React.ReactNode;
    posicao: number; // 0 para baixo, 1 para meio, 2 para topo
    bgColor: string;
}

const Section5NiveisAprendizagem: React.FC = () => {
    const [activeNivel, setActiveNivel] = useState<string>('intermediario');

    const niveis: NivelProps[] = [
        {
            id: 'defasagem',
            titulo: 'Defasagem',
            descricao:
                'O aluno apresenta dificuldades significativas, especialmente em habilidades básicas que deveriam ter sido consolidadas em anos anteriores. Aqui, as ações pedagógicas precisam focar na reconstrução de fundamentos essenciais.',
            cor: '#E53935', // vermelho
            icone: <TrendingDownOutlined fontSize="large" />,
            posicao: 0,
            bgColor: 'rgba(229, 57, 53, 0.1)',
        },
        {
            id: 'intermediario',
            titulo: 'Aprendizado Intermediário',
            descricao:
                'O estudante já desenvolveu parte das habilidades esperadas, mas ainda precisa fortalecer pré-requisitos importantes para avançar em conteúdos mais complexos. A estratégia deve equilibrar revisão e avanço.',
            cor: '#FB8C00', // laranja
            icone: <TrendingFlatOutlined fontSize="large" />,
            posicao: 1,
            bgColor: 'rgba(251, 140, 0, 0.1)',
        },
        {
            id: 'adequado',
            titulo: 'Aprendizado Adequado',
            descricao:
                'O aluno está pronto para avançar com mais profundidade. A escola pode propor atividades que estimulem o pensamento crítico, a resolução de problemas e a ampliação das competências já consolidadas.',
            cor: '#43A047', // verde
            icone: <TrendingUpOutlined fontSize="large" />,
            posicao: 2,
            bgColor: 'rgba(67, 160, 71, 0.1)',
        },
    ];

    const beneficios = [
        {
            titulo: 'Melhoria da qualidade da educação ofertada',
            icone: <SchoolOutlined />,
            descricao: 'Baseada em dados precisos e alinhados com padrões nacionais de qualidade.',
        },
        {
            titulo: 'Fortalecimento das condicionalidades do VAAR',
            icone: <ListAltOutlined />,
            descricao: 'Valor Aluno Ano por Resultado, ampliando o acesso a recursos federais.',
        },
        {
            titulo: 'Redução das desigualdades de aprendizagem',
            icone: <CheckCircleOutline />,
            descricao: 'Garantindo que todos os estudantes tenham oportunidades de desenvolvimento.',
        },
    ];

    const activeNivelData = niveis.find((n) => n.id === activeNivel) || niveis[1];

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
                        O Que Significam os Níveis de Aprendizagem?
                    </motion.h2>
                    <motion.div
                        className="h-1 w-32 bg-[#134074] mx-auto mb-8"
                        initial={{ width: 0 }}
                        whileInView={{ width: 128 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
                    {/* Termômetro para desktop */}
                    <div className="hidden lg:block col-span-2 relative">
                        <h4 className="text-center font-semibold text-gray-700 mb-6">Níveis de Aprendizagem</h4>

                        {/* Nova implementação com botões e termômetro claramente visíveis */}
                        <div className="flex justify-center mb-4">
                            <div className="flex space-x-4">
                                {niveis.map((nivel) => (
                                    <button
                                        key={nivel.id}
                                        onClick={() => setActiveNivel(nivel.id)}
                                        className={`px-4 py-3 rounded-lg transition-all duration-200 shadow-md flex items-center space-x-2 
                                            ${
                                                activeNivel === nivel.id
                                                    ? 'bg-white border-2 font-bold scale-110 z-10'
                                                    : 'bg-gray-50 hover:bg-white hover:cursor-pointer'
                                            }`}
                                        style={{
                                            borderColor: activeNivel === nivel.id ? nivel.cor : 'transparent',
                                            color: activeNivel === nivel.id ? nivel.cor : 'gray',
                                        }}
                                    >
                                        <div className="text-xl" style={{ color: nivel.cor }}>
                                            {nivel.icone}
                                        </div>
                                        <span>{nivel.titulo}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Termômetro redesenhado para maior clareza */}
                        <div className="relative mx-auto w-64 h-[400px] bg-gray-100 rounded-full overflow-hidden border-2 border-gray-300 shadow-lg">
                            {/* Cores de fundo do termômetro */}
                            <div className="absolute bottom-0 left-0 right-0 bg-[#E53935] h-[30%] z-10 flex items-center justify-center">
                                <div className={`px-3 py-1 rounded-lg transition-all duration-300 ${activeNivel === 'defasagem' ? 'bg-white' : ''}`}>
                                    <span className={`font-bold text-xl ${activeNivel === 'defasagem' ? 'text-[#E53935]' : 'text-white'}`}>
                                        Defasagem
                                    </span>
                                </div>
                            </div>
                            <div className="absolute bottom-[30%] left-0 right-0 bg-[#FB8C00] h-[30%] z-20 flex items-center justify-center">
                                <div className={`px-3 py-1 rounded-lg transition-all duration-300 ${activeNivel === 'intermediario' ? 'bg-white' : ''}`}>
                                    <span className={`font-bold text-xl ${activeNivel === 'intermediario' ? 'text-[#FB8C00]' : 'text-white'}`}>
                                        Intermediário
                                    </span>
                                </div>
                            </div>
                            <div className="absolute bottom-[60%] left-0 right-0 bg-[#43A047] h-[40%] z-30 flex items-center justify-center">
                                <div className={`px-3 py-1 rounded-lg transition-all duration-300 ${activeNivel === 'adequado' ? 'bg-white' : ''}`}>
                                    <span className={`font-bold text-xl ${activeNivel === 'adequado' ? 'text-[#43A047]' : 'text-white'}`}>
                                        Adequado
                                    </span>
                                </div>
                            </div>

                            {/* Marcadores de nível */}
                            <div className="absolute bottom-[30%] left-0 right-0 h-[2px] bg-white z-40"></div>
                            <div className="absolute bottom-[60%] left-0 right-0 h-[2px] bg-white z-40"></div>

                            {/* Novo indicador de nível selecionado */}
                            <motion.div
                                className="absolute right-0 w-8 h-[40px] z-50 flex items-center"
                                style={{
                                    bottom: `${
                                        activeNivelData.posicao === 0
                                            ? '15%'
                                            : activeNivelData.posicao === 1
                                            ? '45%'
                                            : '75%'
                                    }`,
                                }}
                                initial={{ right: -20 }}
                                animate={{ 
                                    right: 0,
                                    bottom: `${
                                        activeNivelData.posicao === 0
                                            ? '15%'
                                            : activeNivelData.posicao === 1
                                            ? '45%'
                                            : '75%'
                                    }`
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            >
                                <div 
                                    className="w-0 h-0 border-solid border-transparent border-l-[20px] border-r-0" 
                                    style={{ borderLeftColor: activeNivelData.cor }}
                                ></div>
                                <div 
                                    className="h-[30px] w-[20px]" 
                                    style={{ backgroundColor: activeNivelData.cor }}
                                ></div>
                            </motion.div>
                        </div>

                        {/* Instruções explícitas */}
                        <div className="text-center mt-6 bg-blue-50 p-3 rounded-lg border border-blue-200">
                            <p className="text-blue-800 font-medium">Selecione um nível acima para ver detalhes</p>
                        </div>
                    </div>

                    {/* Conteúdo do nível ativo */}
                    <motion.div
                        key={activeNivel}
                        className="col-span-3 bg-white rounded-xl shadow-lg overflow-hidden self-center"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="h-2 w-full" style={{ backgroundColor: activeNivelData.cor }}></div>
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                                    style={{ backgroundColor: activeNivelData.bgColor }}
                                >
                                    <div style={{ color: activeNivelData.cor }}>{activeNivelData.icone}</div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">{activeNivelData.titulo}</h3>
                            </div>
                            <p className="text-gray-600 text-base leading-relaxed mb-4">{activeNivelData.descricao}</p>

                            <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: activeNivelData.bgColor }}>
                                <h4 className="font-bold text-gray-800 mb-2">Estratégias de intervenção:</h4>
                                <ul className="space-y-1">
                                    {activeNivelData.id === 'defasagem' && (
                                        <>
                                            <li className="flex items-start">
                                                <div className="text-[#E53935] mr-2">•</div>
                                                <span>Recomposição focada em habilidades básicas não consolidadas</span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="text-[#E53935] mr-2">•</div>
                                                <span>Atendimento individual ou em pequenos grupos</span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="text-[#E53935] mr-2">•</div>
                                                <span>Material didático adaptado para o nível de compreensão</span>
                                            </li>
                                        </>
                                    )}
                                    {activeNivelData.id === 'intermediario' && (
                                        <>
                                            <li className="flex items-start">
                                                <div className="text-[#FB8C00] mr-2">•</div>
                                                <span>Balanceamento entre revisão e avanço em conteúdos</span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="text-[#FB8C00] mr-2">•</div>
                                                <span>
                                                    Abordagem mista com atividades de reforço e desafios moderados
                                                </span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="text-[#FB8C00] mr-2">•</div>
                                                <span>
                                                    Monitoramento regular do progresso em habilidades específicas
                                                </span>
                                            </li>
                                        </>
                                    )}
                                    {activeNivelData.id === 'adequado' && (
                                        <>
                                            <li className="flex items-start">
                                                <div className="text-[#43A047] mr-2">•</div>
                                                <span>Atividades desafiadoras que estimulem raciocínio avançado</span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="text-[#43A047] mr-2">•</div>
                                                <span>Projetos interdisciplinares com aplicação prática</span>
                                            </li>
                                            <li className="flex items-start">
                                                <div className="text-[#43A047] mr-2">•</div>
                                                <span>Oportunidades de mentoria a colegas com mais dificuldades</span>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Seleção de níveis para mobile */}
                <div className="lg:hidden flex mb-12 border-b">
                    {niveis.map((nivel) => (
                        <button
                            key={nivel.id}
                            className={`flex-1 py-3 px-2 text-center focus:outline-none transition-colors duration-200 relative 
                                ${
                                    activeNivel === nivel.id
                                        ? 'text-gray-800 font-bold'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            onClick={() => setActiveNivel(nivel.id)}
                        >
                            <div className="flex flex-col items-center">
                                <span style={{ color: nivel.cor }}>{nivel.icone}</span>
                                <span className="text-sm mt-1">{nivel.id.charAt(0).toUpperCase() + nivel.id.slice(1)}</span>
                            </div>
                            {activeNivel === nivel.id && (
                                <motion.div
                                    className="absolute bottom-0 left-0 w-full h-1"
                                    style={{ backgroundColor: nivel.cor }}
                                    layoutId="activeNivel"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Por que isso importa */}
                <motion.div
                    className="mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                        Por Que Isso Importa?
                    </h3>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-10 text-center">
                        Com base nos níveis de desempenho, a equipe pedagógica pode tomar decisões mais seguras,
                        planejar intervenções com mais foco e alcançar resultados concretos na aprendizagem. Ao
                        identificar estudantes com defasagens, por exemplo, é possível desenvolver
                        <strong> materiais personalizados de recomposição</strong>, organizados por tema, dificuldade e
                        habilidade-alvo.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {beneficios.map((beneficio, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -5,
                                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                                    transition: { duration: 0.2 },
                                }}
                            >
                                <div className="w-12 h-12 rounded-full bg-[#134074] text-white flex items-center justify-center mb-4">
                                    {beneficio.icone}
                                </div>
                                <h4 className="text-lg font-bold text-gray-800 mb-2">{beneficio.titulo}</h4>
                                <p className="text-gray-600">{beneficio.descricao}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Transformando Dados em Oportunidades</h3>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                        Nossa metodologia de avaliação contínua cria um ciclo virtuoso de diagnóstico, intervenção e
                        acompanhamento que fortalece toda a comunidade escolar.
                    </p>
                    <motion.button
                        className="px-8 py-3 bg-[#134074] text-white rounded-lg text-lg font-medium shadow-md hover:bg-[#0B2545] transition duration-200 hover:cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                            window.location.href = '/plataforma';
                        }}
                    >
                        Conheça nossa plataforma de avaliação
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Section5NiveisAprendizagem;
