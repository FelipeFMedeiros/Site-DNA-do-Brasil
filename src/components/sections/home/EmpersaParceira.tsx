import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Importação dos ícones do MUI
import BusinessIcon from '@mui/icons-material/Business';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import GroupIcon from '@mui/icons-material/Group';

const EmpresaParceira: React.FC = () => {
    // Animação para elementos que entram na tela
    const fadeInUpVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    // Animação para cards que entram na tela em sequência
    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    // Dados dos cards de benefícios
    const benefitCards = [
        {
            id: 1,
            title: 'Benefícios para empresas',
            description: 'Acesse talentos alinhados com sua cultura e necessidades específicas.',
            icon: <BusinessIcon fontSize="large" />,
            color: '#1A76D2',
        },
        {
            id: 2,
            title: 'Cadastro gratuito',
            description: 'Processo simples e sem custos para iniciar sua participação.',
            icon: <CardMembershipIcon fontSize="large" />,
            color: '#4CAF50',
        },
        {
            id: 3,
            title: 'Talentos prontos',
            description: 'Encontre jovens já preparados para os desafios do mercado de trabalho.',
            icon: <GroupIcon fontSize="large" />,
            color: '#FF9800',
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Coluna esquerda - Texto e botão */}
                    <motion.div
                        className="lg:col-span-5 order-2 lg:order-1"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        variants={fadeInUpVariant}
                    >
                        <div className="pr-0 lg:pr-8">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
                                Empresa Parceira da Escola
                                <div className="w-24 h-1 bg-[color:var(--color-primary)] mt-3"></div>
                            </h2>

                            <p className="text-lg text-gray-700 mb-8">
                                Empresas podem participar ativamente da formação dos alunos, oferecendo oportunidades
                                alinhadas aos perfis identificados. A iniciativa aproxima o mundo do trabalho da
                                realidade escolar e fortalece a responsabilidade social empresarial.
                            </p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, type: 'spring' }}
                                className="relative overflow-hidden inline-block"
                            >
                                <Link
                                    to="#"
                                    className="relative inline-flex items-center justify-center px-8 py-3 bg-[color:var(--color-primary)] text-white rounded-md font-medium shadow-md group overflow-hidden"
                                    style={{ isolation: 'isolate' }}
                                >
                                    {/* Círculo de expansão */}
                                    <span
                                        className="absolute w-0 h-0 rounded-full bg-[color:var(--color-primary-dark)] opacity-100 transition-all duration-700 ease-out group-hover:w-[500px] group-hover:h-[500px]"
                                        style={{
                                            left: '50%',
                                            top: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            zIndex: 0,
                                        }}
                                    />

                                    {/* Texto e ícone */}
                                    <span className="relative flex items-center justify-center z-10 transition-all duration-300">
                                        <span>SAIBA MAIS</span>
                                        <svg
                                            className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </span>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Coluna direita - Ilustração */}
                    <motion.div
                        className="lg:col-span-7 order-1 lg:order-2"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="rounded-lg overflow-hidden shadow-xl">
                            <img
                                src="/images/empersaparceira.png"
                                alt="Empresa e escola conectadas por uma ponte"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Cards de benefícios em formato diagonal */}
                <motion.div
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                    variants={containerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {benefitCards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className="relative bg-white rounded-lg shadow-lg overflow-hidden transform md:translate-y-0"
                            style={{ transform: `translateY(${index * 20}px)` }}
                            variants={fadeInUpVariant}
                            whileHover={{
                                y: -10,
                                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                            }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="h-2" style={{ backgroundColor: card.color }}></div>
                            <div className="p-6 md:p-8">
                                <div
                                    className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                                    style={{ backgroundColor: `${card.color}15` }}
                                >
                                    <div style={{ color: card.color }}>{card.icon}</div>
                                </div>

                                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                                <p className="text-gray-600">{card.description}</p>
                            </div>

                            {/* Decorative diagonal line */}
                            <div
                                className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none"
                                style={{
                                    background: `linear-gradient(-45deg, ${card.color}20 50%, transparent 50%)`,
                                }}
                            ></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default EmpresaParceira;
