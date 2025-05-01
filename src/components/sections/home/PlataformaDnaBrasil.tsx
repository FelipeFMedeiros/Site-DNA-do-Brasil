import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Importação dos ícones do MUI
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';
import BadgeIcon from '@mui/icons-material/Badge';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Custom styles
import '@styles/plataforma-dna.css';

const PlataformaDnaBrasil: React.FC = () => {
    const [activeCardIndex, setActiveCardIndex] = useState(0);

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

    // Dados dos cards interativos
    const featureCards = [
        {
            id: 1,
            title: 'Laudos e Histórico',
            description: 'Acompanhe todo seu desenvolvimento com laudos detalhados e histórico completo.',
            icon: <DescriptionIcon style={{ fontSize: 40 }} />,
            color: '#4A6DA7',
        },
        {
            id: 2,
            title: 'Cursos EAD',
            description: 'Acesso a cursos online exclusivos para expandir seu conhecimento.',
            icon: <SchoolIcon style={{ fontSize: 40 }} />,
            color: '#50B681',
        },
        {
            id: 3,
            title: 'Carteira Estudantil Digital',
            description: 'Tenha sua identificação estudantil oficial sempre à mão no aplicativo.',
            icon: <BadgeIcon style={{ fontSize: 40 }} />,
            color: '#D86C70',
        },
    ];

    // Imagens do carrossel
    const appScreens = [
        { id: 1, image: '/images/app/1.webp', alt: 'Tela inicial do aplicativo DNA do Brasil' },
        { id: 2, image: '/images/app/2.webp', alt: 'Tela de perfil do aplicativo' },
        { id: 3, image: '/images/app/3.webp', alt: 'Tela de atividades recentes' },
        { id: 4, image: '/images/app/4.webp', alt: 'Tela de cursos disponíveis' },
        { id: 5, image: '/images/app/5.webp', alt: 'Tela de carteira estudantil' },
        { id: 6, image: '/images/app/6.webp', alt: 'Tela de resultados e métricas' },
    ];

    return (
        <section className="py-16 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Parte superior - Título, texto e cards interativos */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Coluna esquerda - Smartphone e cards interativos */}
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            {/* Smartphone base */}
                            <motion.div
                                className="relative mx-auto max-w-[280px]"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.7 }}
                            >
                                {/* <img 
                  src="/images/app/app-circle.png" 
                  alt="Smartphone" 
                  className="w-full h-auto"
                /> */}
                            </motion.div>

                            {/* Cards interativos */}
                            <motion.div
                                className="grid grid-cols-1 gap-4 mt-8"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {featureCards.map((card, index) => (
                                    <motion.div
                                        key={card.id}
                                        variants={itemVariants}
                                        className="bg-white rounded-lg shadow-sm p-4 cursor-pointer transform transition-all duration-200"
                                        whileHover={{
                                            y: -5,
                                            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
                                            transition: { duration: 0.2 },
                                        }}
                                        onClick={() => setActiveCardIndex(index)}
                                        style={{
                                            borderLeft: `4px solid ${card.color}`,
                                            backgroundColor:
                                                activeCardIndex === index ? 'rgba(242, 242, 242, 0.5)' : 'white',
                                        }}
                                    >
                                        <div className="flex items-start">
                                            <div className="p-2 rounded-full mr-4" style={{ color: card.color }}>
                                                {card.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-bold mb-1">{card.title}</h3>
                                                <p className="text-sm text-gray-600">{card.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Coluna direita - Texto e botão */}
                    <motion.div
                        className="order-1 lg:order-2"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-6 relative"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Plataforma DNA do Brasil
                            <motion.div
                                className="absolute -bottom-2 left-0 h-1 bg-[color:var(--color-primary)]"
                                initial={{ width: 0 }}
                                whileInView={{ width: '60%' }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </motion.h2>

                        <motion.p
                            className="text-lg mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Na palma da mão, o aluno tem acesso ao seu laudo, agenda, resultados e muito mais. A
                            plataforma conecta o estudante com oportunidades educacionais, esportivas e profissionais,
                            promovendo um acompanhamento real do seu crescimento.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: 'spring' }}
                            className="relative overflow-hidden inline-block"
                        >
                            <Link
                                to="#"
                                className="relative inline-block px-8 py-3 bg-[color:var(--color-primary)] text-white rounded-md font-medium shadow-md transition-all duration-300 z-10 overflow-hidden group"
                            >
                                <span className="relative z-10 flex items-center justify-center transition-all duration-300">
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
                                <motion.span
                                    className="absolute inset-0 bg-[color:var(--color-primary-dark)] transform origin-left"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Carrossel de telas do app */}
                <motion.div
                    className="mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <motion.h3
                        className="text-2xl md:text-3xl font-bold mb-10 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Explore o nosso App
                    </motion.h3>

                    <div className="relative phone-carousel">
                        {/* Carrossel de imagens */}
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            centeredSlides={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={{
                                prevEl: '.custom-prev',
                                nextEl: '.custom-next',
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="py-10"
                            onSlideChange={(swiper) => setActiveCardIndex(swiper.realIndex % featureCards.length)}
                        >
                            {appScreens.map((screen) => (
                                <SwiperSlide key={screen.id} className="flex justify-center py-4">
                                    <div className="relative mx-auto max-w-[300px] rounded-2xl">
                                        <div className="relative overflow-hidden rounded-2xl">
                                            <img
                                                src={screen.image}
                                                alt={screen.alt}
                                                className="w-full h-auto rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Botões de navegação customizados */}
                        <div className="custom-prev absolute top-1/2 left-0 z-10 transform -translate-y-1/2 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                            <KeyboardArrowLeftIcon />
                        </div>
                        <div className="custom-next absolute top-1/2 right-0 z-10 transform -translate-y-1/2 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
                            <KeyboardArrowRightIcon />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PlataformaDnaBrasil;
