import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const ComoFunciona: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);

    // Dados das etapas
    const steps = [
        {
            id: 0,
            title: '1. Empresas se cadastram na Plataforma DNA do Brasil',
            description:
                'A organização informa sua área de atuação, perfil profissional desejado, regiões de interesse e demais dados relevantes.',
            icon: <AppRegistrationIcon style={{ fontSize: 40 }} />,
            color: '#3498DB',
        },
        {
            id: 1,
            title: '2. O sistema identifica os perfis de estudantes compatíveis',
            description:
                'A partir dos dados do protocolo avaliativo (laudos vocacionais, educacionais e socioemocionais), o sistema localiza os alunos com potencial alinhado às necessidades da empresa.',
            icon: <FindInPageIcon style={{ fontSize: 40 }} />,
            color: '#E74C3C',
        },
        {
            id: 2,
            title: '3. Aproximação direta e segura',
            description:
                'O contato pode ser feito com apoio do Instituto, garantindo a responsabilidade ética e pedagógica em cada indicação.',
            icon: <ConnectWithoutContactIcon style={{ fontSize: 40 }} />,
            color: '#27AE60',
        },
        {
            id: 3,
            title: '4. Benefícios para os dois lados',
            description:
                'A empresa participa da formação de novos talentos e fortalece sua presença social. Já o aluno, ganha acesso a experiências profissionais reais.',
            icon: <WorkspacePremiumIcon style={{ fontSize: 40 }} />,
            color: '#F39C12',
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B2545]">Como funciona na prática</h2>
                        <div className="w-20 h-1 bg-[#0B2545] mx-auto mb-8"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Conheça o processo simplificado de conexão entre empresas e estudantes na plataforma DNA do
                            Brasil.
                        </p>
                    </motion.div>

                    {/* Versão mobile - Timeline vertical */}
                    <div className="md:hidden">
                        <div className="relative">
                            {/* Linha do tempo vertical */}
                            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-200"></div>

                            {/* Etapas */}
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    className="flex mb-10 relative"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    {/* Marcador da etapa */}
                                    <div
                                        className="w-8 h-8 rounded-full flex items-center justify-center z-10"
                                        style={{ backgroundColor: step.color }}
                                    >
                                        <span className="text-white font-bold">{index + 1}</span>
                                    </div>

                                    {/* Conteúdo da etapa */}
                                    <div className="ml-4">
                                        <div
                                            className="p-4 rounded-lg shadow-md bg-white border-l-4"
                                            style={{ borderLeftColor: step.color }}
                                        >
                                            <h3 className="text-lg font-bold mb-2">{step.title.split('. ')[1]}</h3>
                                            <p className="text-gray-600 text-sm">{step.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Versão desktop - Infográfico interativo */}
                    <div className="hidden md:block">
                        {/* Navegação entre etapas */}
                        <motion.div
                            className="flex justify-between mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {steps.map((step, index) => (
                                <div
                                    key={step.id}
                                    className={`relative flex-1 text-center cursor-pointer transition-all duration-300 ${
                                        index === activeStep ? 'scale-110' : 'opacity-60 hover:opacity-80'
                                    }`}
                                    onClick={() => setActiveStep(index)}
                                >
                                    {/* Barra de progresso conectando os passos */}
                                    {index < steps.length - 1 && (
                                        <div className="absolute top-1/2 left-1/2 right-0 h-1 bg-gray-200 -z-10">
                                            <div
                                                className="h-full transition-all duration-500"
                                                style={{
                                                    backgroundColor: step.color,
                                                    width: activeStep > index ? '100%' : '0%',
                                                }}
                                            ></div>
                                        </div>
                                    )}

                                    {/* Ícone do passo */}
                                    <div className="flex flex-col items-center">
                                        <div
                                            className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                                                index === activeStep ? 'shadow-lg' : ''
                                            }`}
                                            style={{
                                                backgroundColor: index === activeStep ? step.color : 'white',
                                                border: `2px solid ${step.color}`,
                                            }}
                                        >
                                            <div style={{ color: index === activeStep ? 'white' : step.color }}>
                                                {step.icon}
                                            </div>
                                        </div>
                                        <div
                                            className="mt-2 font-semibold"
                                            style={{ color: index === activeStep ? step.color : '#4B5563' }}
                                        >
                                            {index + 1}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Conteúdo detalhado da etapa selecionada */}
                        <motion.div
                            className="bg-white rounded-xl shadow-lg p-8 border-t-4"
                            style={{ borderTopColor: steps[activeStep].color }}
                            key={activeStep}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="flex flex-col lg:flex-row items-start lg:items-center">
                                <div
                                    className="w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center mb-4 lg:mb-0 lg:mr-6"
                                    style={{ backgroundColor: `${steps[activeStep].color}20` }}
                                >
                                    <div style={{ color: steps[activeStep].color }}>{steps[activeStep].icon}</div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-3">{steps[activeStep].title}</h3>
                                    <p className="text-gray-600">{steps[activeStep].description}</p>
                                </div>
                            </div>

                            {/* Ilustração correspondente à etapa */}
                            <div className="mt-8 flex justify-center">
                                <img
                                    src={`/images/empresa-parceira/step-${activeStep + 1}.svg`}
                                    alt={`Ilustração da etapa ${activeStep + 1}`}
                                    className="max-h-64"
                                />
                            </div>

                            {/* Navegação entre etapas */}
                            <div className="flex justify-between mt-8">
                                <button
                                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                                    disabled={activeStep === 0}
                                    className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                                        activeStep === 0
                                            ? 'text-gray-400 cursor-not-allowed'
                                            : 'text-[#0B2545] hover:bg-gray-100 hover:cursor-pointer'
                                    }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Anterior
                                </button>

                                <button
                                    onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                                    disabled={activeStep === steps.length - 1}
                                    className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                                        activeStep === steps.length - 1
                                            ? 'text-gray-400 cursor-not-allowed'
                                            : 'text-[#0B2545] hover:bg-gray-100 hover:cursor-pointer'
                                    }`}
                                >
                                    Próximo
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 ml-2"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComoFunciona;
