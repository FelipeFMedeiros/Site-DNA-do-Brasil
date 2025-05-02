import React from 'react';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';

const Beneficios: React.FC = () => {
    // Benefícios para empresas
    const companyBenefits = [
        'Cadastro gratuito na plataforma',
        'Acesso direto ao banco de talentos',
        'Selo de Empresa Parceira da Escola',
        'Divulgação da marca em materiais institucionais',
        'Fortalecimento da imagem como agente de transformação social',
        'Possibilidade de recrutar estagiários, aprendizes e futuros colaboradores alinhados com os valores da sua organização',
    ];

    // Benefícios para escolas e alunos
    const schoolBenefits = [
        'Acesso facilitado a vagas de estágio e primeiro emprego',
        'Visitas técnicas e vivências profissionais',
        'Participação em projetos conjuntos (palestras, mentorias, feiras)',
        'Reforço no projeto de vida escolar',
        'Ampliação de possibilidades para quem está em situação de vulnerabilidade social',
    ];

    // Animação para os itens
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
            },
        },
    };

    return (
        <section className="py-20 bg-white">
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0B2545]">
                            Benefícios para todos os envolvidos
                        </h2>
                        <div className="w-20 h-1 bg-[#0B2545] mx-auto mb-8"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Uma parceria onde todos ganham: empresas encontram talentos promissores e estudantes têm
                            acesso a oportunidades reais.
                        </p>
                    </motion.div>

                    {/* Cards de benefícios */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Benefícios para empresas */}
                        <motion.div
                            className="relative bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg overflow-hidden"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Cabeçalho */}
                            <div className="bg-[#0B2545] text-white p-6 flex items-center">
                                <BusinessCenterIcon style={{ fontSize: 32 }} className="mr-4" />
                                <h3 className="text-2xl font-bold">Benefícios para a empresa</h3>
                            </div>

                            {/* Lista de benefícios */}
                            <motion.ul
                                className="p-6 space-y-4"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {companyBenefits.map((benefit, index) => (
                                    <motion.li key={index} className="flex items-start" variants={itemVariants}>
                                        <CheckCircleIcon className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">{benefit}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            {/* Elemento decorativo */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-20"></div>
                        </motion.div>

                        {/* Benefícios para escolas e alunos */}
                        <motion.div
                            className="relative bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg overflow-hidden"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {/* Cabeçalho */}
                            <div className="bg-[#134074] text-white p-6 flex items-center">
                                <SchoolIcon style={{ fontSize: 32 }} className="mr-4" />
                                <h3 className="text-2xl font-bold">Benefícios para a escola e o aluno</h3>
                            </div>

                            {/* Lista de benefícios */}
                            <motion.ul
                                className="p-6 space-y-4"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {schoolBenefits.map((benefit, index) => (
                                    <motion.li key={index} className="flex items-start" variants={itemVariants}>
                                        <FiberManualRecordIcon className="text-blue-500 mr-2 flex-shrink-0 mt-1" />
                                        <span className="text-gray-700">{benefit}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            {/* Elemento decorativo */}
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200 rounded-full opacity-20"></div>
                        </motion.div>
                    </div>

                    {/* Depoimento/Destaque */}
                    <motion.div
                        className="mt-16 bg-[#0B2545] text-white p-8 rounded-xl shadow-lg relative overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full opacity-10 transform translate-x-1/3 -translate-y-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-300 rounded-full opacity-10 transform -translate-x-1/3 translate-y-1/3"></div>

                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <svg
                                className="w-12 h-12 mx-auto mb-4 text-blue-300 opacity-50"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                            </svg>

                            <p className="text-xl md:text-2xl font-light italic mb-6">
                                Uma parceria que vai além do tradicional: criamos pontes entre o presente educacional e
                                o futuro profissional dos nossos jovens.
                            </p>

                            <div className="font-semibold">Programa DNA do Brasil</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Beneficios;
