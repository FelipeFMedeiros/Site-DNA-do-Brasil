import React from 'react';
import { motion } from 'framer-motion';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import HandshakeIcon from '@mui/icons-material/Handshake';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QrCodeIcon from '@mui/icons-material/QrCode';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';

const Beneficios: React.FC = () => {
    // Variantes de animação
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', damping: 25, stiffness: 200 },
        },
    };

    // Dados dos cards de benefícios
    const benefitCards = [
        {
            id: 1,
            title: 'Acesso a Eventos',
            description:
                'Entrada garantida em atividades esportivas, culturais, educacionais e de formação promovidas ou apoiadas pelo Programa DNA do Brasil.',
            icon: <EventAvailableIcon style={{ fontSize: 36 }} />,
            color: '#3498DB',
        },
        {
            id: 2,
            title: 'Descontos em Cursos',
            description:
                'Descontos exclusivos em cursos de formação profissional, oficinas, especializações e conteúdos online em parceria com instituições reconhecidas.',
            icon: <LocalOfferIcon style={{ fontSize: 36 }} />,
            color: '#E74C3C',
        },
        {
            id: 3,
            title: 'Prioridade nas Inscrições',
            description:
                'Nos eventos com vagas limitadas, quem possui a Carteirinha DNA tem prioridade para garantir sua participação em oficinas, workshops e competições.',
            icon: <PriorityHighIcon style={{ fontSize: 36 }} />,
            color: '#F39C12',
        },
        {
            id: 4,
            title: 'Rede de Parcerias',
            description:
                'Conexão direta com universidades, clubes esportivos, federações, empresas e instituições culturais que fazem parte da rede DNA do Brasil.',
            icon: <HandshakeIcon style={{ fontSize: 36 }} />,
            color: '#27AE60',
        },
        {
            id: 5,
            title: 'Material Educacional',
            description:
                'Acesso facilitado a e-books, simulados, conteúdos digitais e materiais voltados ao desenvolvimento acadêmico e vocacional.',
            icon: <MenuBookIcon style={{ fontSize: 36 }} />,
            color: '#8E44AD',
        },
        {
            id: 6,
            title: 'Encaminhamento Profissional',
            description:
                'O QR Code da carteirinha leva ao perfil completo do estudante no sistema DNA, conectando com empresas e instituições.',
            icon: <QrCodeIcon style={{ fontSize: 36 }} />,
            color: '#2C3E50',
        },
        {
            id: 7,
            title: 'Acompanhamento Personalizado',
            description:
                'Com base nos laudos individuais, a equipe do programa propõe ações específicas para fortalecer os pontos fortes e trabalhar os desafios.',
            icon: <AssessmentIcon style={{ fontSize: 36 }} />,
            color: '#16A085',
        },
        {
            id: 8,
            title: 'Atividades Esportivas e Culturais',
            description:
                'A carteirinha garante acesso aos núcleos do programa que promovem práticas esportivas, atividades culturais e projetos de inclusão.',
            icon: <SportsHandballIcon style={{ fontSize: 36 }} />,
            color: '#D35400',
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header da seção */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-6 inline-block relative"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        O que a Carteirinha oferece
                        <motion.div
                            className="absolute -bottom-2 left-0 right-0 mx-auto h-1 bg-[#134074]"
                            initial={{ width: 0 }}
                            whileInView={{ width: '80%' }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        />
                    </motion.h2>

                    <motion.p
                        className="text-lg max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Descubra todos os benefícios e oportunidades que a Carteira do Estudante DNA do Brasil
                        proporciona aos seus portadores.
                    </motion.p>
                </motion.div>

                {/* Grid de cards de benefícios */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {benefitCards.map((card) => (
                        <motion.div
                            key={card.id}
                            variants={itemVariants}
                            className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="h-2" style={{ backgroundColor: card.color }}></div>
                            <div className="p-6">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                    style={{ backgroundColor: `${card.color}15` }} // Cor com 15% de opacidade
                                >
                                    <div style={{ color: card.color }}>{card.icon}</div>
                                </div>

                                <h3 className="font-bold text-xl text-center mb-3">{card.title}</h3>
                                <p className="text-gray-600 text-center text-sm">{card.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Beneficios;
