import React from 'react';
import { motion } from 'framer-motion';
import {
    AssessmentOutlined,
    BarChartOutlined,
    CategoryOutlined,
    MonitorHeartOutlined,
    SettingsOutlined,
} from '@mui/icons-material';

interface PilarProps {
    numero: number;
    titulo: string;
    descricao: string;
    icone: React.ReactNode;
    delay: number;
}

const Pilar: React.FC<PilarProps> = ({ numero, titulo, descricao, icone, delay }) => (
    <motion.div
        className="flex items-start"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
        <div className="bg-[#134074] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
            {numero}
        </div>
        <div>
            <div className="flex items-center mb-2">
                <div className="text-[#134074] mr-2">{icone}</div>
                <h3 className="font-bold text-lg text-gray-800">{titulo}</h3>
            </div>
            <p className="text-gray-600">{descricao}</p>
        </div>
    </motion.div>
);

const AvaliacaoContinua: React.FC = () => {
    const pilares: PilarProps[] = [
        {
            numero: 1,
            titulo: 'Aplicação de avaliações diagnósticas',
            descricao: 'Baseadas nas Matrizes de Referência do Saeb e alinhadas às competências e habilidades da BNCC.',
            icone: <AssessmentOutlined />,
            delay: 0.3,
        },
        {
            numero: 2,
            titulo: 'Mapeamento dos estudantes por níveis de aprendizagem',
            descricao: 'Com base no desempenho em Leitura (Língua Portuguesa) e Matemática.',
            icone: <BarChartOutlined />,
            delay: 0.4,
        },
        {
            numero: 3,
            titulo: 'Classificação dos resultados em três níveis',
            descricao: 'Defasagem, Aprendizado Intermediário e Aprendizado Adequado.',
            icone: <CategoryOutlined />,
            delay: 0.5,
        },
        {
            numero: 4,
            titulo: 'Monitoramento contínuo',
            descricao: 'Da aprendizagem de cada aluno, considerando seu nível de desenvolvimento.',
            icone: <MonitorHeartOutlined />,
            delay: 0.6,
        },
        {
            numero: 5,
            titulo: 'Criação de estratégias pedagógicas personalizadas',
            descricao: 'Com materiais de recomposição desenvolvidos a partir das evidências de desempenho.',
            icone: <SettingsOutlined />,
            delay: 0.7,
        },
    ];

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                Avaliação Contínua da Aprendizagem: Diagnóstico e Recomposição
                            </h2>
                            <motion.div
                                className="h-1 w-32 bg-[#134074] mb-8"
                                initial={{ width: 0 }}
                                whileInView={{ width: 128 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            />

                            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    O <strong>Sistema de Avaliação da Educação Básica (Saeb)</strong> é hoje um dos
                                    principais instrumentos de diagnóstico da educação pública no Brasil. Por meio de
                                    avaliações em larga escala, o Saeb permite que o Inep — e, consequentemente, as
                                    redes de ensino — avaliem o desempenho dos estudantes e identifiquem fatores que
                                    impactam diretamente na qualidade e equidade da educação básica.
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    Foi com base nesse modelo que o IDECACE desenvolveu a{' '}
                                    <strong>Metodologia Pedagógica DNA do Brasil</strong>, voltada especialmente para
                                    apoiar escolas públicas no diagnóstico contínuo das aprendizagens e na construção de
                                    estratégias pedagógicas mais efetivas. A proposta é clara: usar dados reais para
                                    transformar a prática em sala de aula, reduzir desigualdades e ampliar o sucesso
                                    escolar.
                                </motion.p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="mt-10"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Como Funciona</h3>
                            <p className="text-lg text-gray-700 mb-8">
                                A <strong>Avaliação Contínua da Aprendizagem</strong>, aplicada no 5º e 9º anos do
                                Ensino Fundamental e na 3ª série do Ensino Médio, é organizada a partir dos seguintes
                                pilares:
                            </p>

                            <div className="space-y-6">
                                {pilares.map((pilar) => (
                                    <Pilar
                                        key={pilar.numero}
                                        numero={pilar.numero}
                                        titulo={pilar.titulo}
                                        descricao={pilar.descricao}
                                        icone={pilar.icone}
                                        delay={pilar.delay}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden relative z-10">
                            <div className="p-1 bg-gradient-to-r from-[#0B2545] to-[#134074]"></div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                    Metodologia baseada em evidências
                                </h3>

                                <div className="space-y-6">
                                    <motion.div
                                        className="rounded-lg bg-blue-50 p-6 border-l-4 border-[#134074]"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                    >
                                        <h4 className="font-bold text-gray-800 mb-2">
                                            Dados reais para decisões efetivas
                                        </h4>
                                        <p className="text-gray-600">
                                            Nossa metodologia utiliza evidências concretas para guiar o planejamento
                                            pedagógico, permitindo intervenções precisas e personalizadas para cada
                                            aluno.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        className="rounded-lg bg-blue-50 p-6 border-l-4 border-[#134074]"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                    >
                                        <h4 className="font-bold text-gray-800 mb-2">Alinhamento com a BNCC</h4>
                                        <p className="text-gray-600">
                                            Todas as avaliações e estratégias seguem as diretrizes da Base Nacional
                                            Comum Curricular, garantindo o desenvolvimento das competências e
                                            habilidades previstas para cada etapa.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        className="rounded-lg bg-blue-50 p-6 border-l-4 border-[#134074]"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                    >
                                        <h4 className="font-bold text-gray-800 mb-2">
                                            Impacto mensurável e sustentável
                                        </h4>
                                        <p className="text-gray-600">
                                            O monitoramento contínuo permite acompanhar o progresso de cada estudante,
                                            ajustando estratégias sempre que necessário para garantir resultados
                                            efetivos a longo prazo.
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Elementos decorativos */}
                        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 z-0"></div>
                        <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-300 rounded-full opacity-30 z-0"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AvaliacaoContinua;
