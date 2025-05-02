import React from 'react';
import { motion } from 'framer-motion';
import {
    DataUsageOutlined,
    DescriptionOutlined,
    AssignmentTurnedInOutlined,
    TimelineOutlined,
} from '@mui/icons-material';

interface EtapaProps {
    numero: number;
    titulo: string;
    descricao: string;
    icone: React.ReactNode;
    cor: string;
}

const ComoFuncionaNaPratica: React.FC = () => {
    const etapas: EtapaProps[] = [
        {
            numero: 1,
            titulo: 'Coleta de dados',
            descricao:
                'O estudante participa de testes, questionários e atividades conduzidas por uma equipe multidisciplinar.',
            icone: <DataUsageOutlined fontSize="large" />,
            cor: '#0B2545',
        },
        {
            numero: 2,
            titulo: 'Geração do laudo individual',
            descricao:
                'Os dados são processados pelo sistema DNA do Brasil, que organiza as informações e gera um laudo detalhado.',
            icone: <DescriptionOutlined fontSize="large" />,
            cor: '#13315C',
        },
        {
            numero: 3,
            titulo: 'Análise e encaminhamentos',
            descricao:
                'Com base no laudo, os alunos são encaminhados para atividades esportivas, oficinas profissionalizantes, recomposição das aprendizagens, apoio psicossocial, entre outras ações.',
            icone: <AssignmentTurnedInOutlined fontSize="large" />,
            cor: '#134074',
        },
        {
            numero: 4,
            titulo: 'Acompanhamento',
            descricao:
                'A evolução é monitorada continuamente, com reavaliações e ajustes no plano de ação sempre que necessário.',
            icone: <TimelineOutlined fontSize="large" />,
            cor: '#0F5298',
        },
    ];

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
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
                        Como funciona na prática?
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
                        Nossa metodologia segue um fluxo estruturado que garante resultados efetivos e personalizados
                        para cada estudante
                    </motion.p>
                </motion.div>

                {/* Linha do tempo para desktop */}
                <div className="hidden lg:block relative">
                    {/* Linha central */}
                    <motion.div
                        className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-[#0B2545] to-[#0F5298] rounded-full"
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                    />

                    {/* Etapas do processo */}
                    <div className="relative z-10">
                        {etapas.map((etapa, index) => (
                            <motion.div
                                key={etapa.numero}
                                className={`flex mb-20 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <div className={`w-1/2 px-8 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                    <motion.div
                                        className={`inline-block mb-3 p-4 rounded-full text-white`}
                                        style={{ backgroundColor: etapa.cor }}
                                        whileHover={{ scale: 1.1, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                                    >
                                        {etapa.icone}
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{etapa.titulo}</h3>
                                    <p className="text-gray-600">{etapa.descricao}</p>
                                </div>

                                <div className="w-8 flex items-center justify-center relative">
                                    <motion.div
                                        className="w-12 h-12 rounded-full bg-white border-4 flex items-center justify-center text-[#134074] font-bold shadow-lg"
                                        style={{ borderColor: etapa.cor }}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.4, delay: 0.5 + index * 0.15, type: 'spring' }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        {etapa.numero}
                                    </motion.div>
                                </div>

                                <div className="w-1/2 px-8" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Layout para mobile e tablet */}
                <div className="lg:hidden space-y-10">
                    {etapas.map((etapa, index) => (
                        <motion.div
                            key={etapa.numero}
                            className="flex items-start space-x-6 bg-white rounded-lg shadow-md p-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -5,
                                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                                transition: { duration: 0.2 },
                            }}
                        >
                            <div
                                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                                style={{ backgroundColor: etapa.cor }}
                            >
                                {etapa.numero}
                            </div>
                            <div>
                                <div className="flex items-center mb-2">
                                    <div className="text-[#134074] mr-2">{etapa.icone}</div>
                                    <h3 className="text-xl font-bold text-gray-800">{etapa.titulo}</h3>
                                </div>
                                <p className="text-gray-600">{etapa.descricao}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Imagem ilustrativa */}
                <motion.div
                    className="mt-16 bg-white rounded-xl overflow-hidden shadow-lg"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="aspect-video bg-blue-100 flex items-center justify-center overflow-hidden">
                        <img
                            src="/images/programa-dna/professor-ed-fisica-3.webp"
                            alt="Aplicação da metodologia DNA do Brasil"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Impacto comprovado</h3>
                        <p className="text-gray-600 text-lg mb-6">
                            Nossa metodologia já foi aplicada em diversas escolas públicas, demonstrando resultados
                            significativos na detecção de talentos, melhoria do desempenho escolar e redução da evasão.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <div className="text-3xl font-bold text-[#0B2545] mb-1">100%</div>
                                <p className="text-gray-600">dos alunos com encaminhamentos personalizados</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <div className="text-3xl font-bold text-[#0B2545] mb-1">84%</div>
                                <p className="text-gray-600">de redução na evasão escolar</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <div className="text-3xl font-bold text-[#0B2545] mb-1">76%</div>
                                <p className="text-gray-600">de aumento no engajamento em atividades esportivas</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ComoFuncionaNaPratica;
