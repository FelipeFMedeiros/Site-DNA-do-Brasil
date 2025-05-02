import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

// Importação dos ícones do MUI
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';

// Importação dos estilos
import '@styles/carteira-estudante.css';

const CarteiraEstudante: React.FC = () => {
    // Estado para controlar qual lado da carteira está sendo exibido
    const [showFront, setShowFront] = useState(true);
    // Estado para controlar a animação de flip
    const [isFlipping, setIsFlipping] = useState(false);
    // Ref para o elemento do cartão
    const cardRef = useRef<HTMLDivElement>(null);

    // Função para alternar entre frente e verso da carteira
    const flipCard = () => {
        if (!isFlipping) {
            setIsFlipping(true);

            // Aplicamos a transformação diretamente para iniciar imediatamente
            if (cardRef.current) {
                const card = cardRef.current;
                const newRotation = showFront ? 180 : 0;
                card.style.transform = `perspective(1000px) rotateY(${newRotation}deg)`;
                card.style.transition = 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            }

            // Atualizamos o estado para refletir a nova face
            setShowFront(!showFront);

            // Reset do estado de animação após a conclusão
            setTimeout(() => {
                setIsFlipping(false);
            }, 600); // Duração reduzida da animação
        }
    };

    // Função para aplicar a transformação correta ao cartão
    const applyCardTransform = (rotateX: number, rotateY: number, scale: number = 1) => {
        if (cardRef.current) {
            const card = cardRef.current;
            // Invertemos a rotação Y quando estamos mostrando o verso
            const adjustedRotateY = showFront ? rotateY : -rotateY;
            // Definimos a rotação base como 0 ou 180 dependendo do lado mostrado
            const baseRotateY = showFront ? 0 : 180;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${
                baseRotateY + adjustedRotateY
            }deg) scale(${scale})`;
        }
    };

    // Função para lidar com o efeito de hover 3D que segue o cursor
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (cardRef.current && !isFlipping) {
            const card = cardRef.current;
            const rect = card.getBoundingClientRect();

            // Calculando a posição relativa do mouse dentro do elemento
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculando a rotação baseada na posição do cursor
            // Dividindo por 25 para suavizar o efeito
            const rotateY = (x / rect.width - 0.5) * 15;
            const rotateX = (y / rect.height - 0.5) * -15;

            // Aplicando a transformação
            applyCardTransform(rotateX, rotateY, 1.05);
            card.style.transition = 'transform 0.1s ease';
        }
    };

    // Função para resetar o efeito quando o mouse sai do elemento
    const handleMouseLeave = () => {
        if (cardRef.current && !isFlipping) {
            const card = cardRef.current;
            applyCardTransform(0, 0, 1); // Reseta para a posição inicial
            card.style.transition = 'transform 0.5s ease';
        }
    };

    // Efeito para garantir que a posição do cartão seja correta após uma animação
    useEffect(() => {
        if (!isFlipping && cardRef.current) {
            const card = cardRef.current;
            // Aplicar a transformação base correta
            applyCardTransform(0, 0, 1);
            card.style.transition = 'transform 0.5s ease';
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFlipping, showFront]);

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
            title: 'Descontos',
            description: 'Acesse ofertas exclusivas em produtos e serviços parceiros.',
            icon: <LocalOfferIcon style={{ fontSize: 36 }} />,
            color: '#E74C3C',
        },
        {
            id: 2,
            title: 'Acesso a Eventos',
            description: 'Participe de competições, palestras e experiências diferenciadas.',
            icon: <EventAvailableIcon style={{ fontSize: 36 }} />,
            color: '#3498DB',
        },
        {
            id: 3,
            title: 'Encaminhamento Profissional',
            description: 'Conecte-se com empresas e instituições de ensino superior.',
            icon: <BusinessCenterIcon style={{ fontSize: 36 }} />,
            color: '#2ECC71',
        },
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header com layout centralizado */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
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
                        Carteira do Estudante DNA do Brasil
                        <motion.div
                            className="absolute -bottom-2 left-0 right-0 mx-auto h-1 bg-[color:var(--color-primary)]"
                            initial={{ width: 0 }}
                            whileInView={{ width: '80%' }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        />
                    </motion.h2>

                    <motion.p
                        className="text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Mais que um documento, é um passaporte para experiências que vão além da sala de aula. A
                        carteira garante entrada em eventos, descontos em cursos, acesso a conteúdos exclusivos e faz a
                        ponte com empresas, clubes e universidades.
                    </motion.p>
                </motion.div>

                {/* Carteira Interativa */}
                <div className="mb-20">
                    <div className="relative max-w-full mx-auto flex justify-center">
                        {/* Botão de alternância */}
                        <motion.button
                            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-[color:var(--color-primary)] text-white w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
                            onClick={flipCard}
                            title={showFront ? 'Ver verso da carteira' : 'Ver frente da carteira'}
                            disabled={isFlipping}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FlipCameraAndroidIcon
                                className={isFlipping ? 'animate-spin' : ''}
                                style={{ fontSize: '1.25rem' }}
                            />
                        </motion.button>

                        {/* Carteira 3D */}
                        <div className="perspective-1000">
                            <div
                                ref={cardRef}
                                className={`relative preserve-3d mx-auto card-container ${
                                    isFlipping ? 'flipping' : ''
                                }`}
                                style={
                                    {
                                        width: '408px', // Tamanho aumentado
                                        height: '260px', // Tamanho aumentado
                                        transformStyle: 'preserve-3d',
                                    } as React.CSSProperties
                                }
                                onClick={isFlipping ? undefined : flipCard}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            >
                                {/* Frente da carteira */}
                                <div className={`backface-hidden rounded-xl shadow-xl overflow-hidden card-flip-front`}>
                                    <img
                                        src="/images/carteirinha/frente.png"
                                        alt="Frente da Carteira do Estudante DNA do Brasil"
                                        className="w-full h-full object-cover"
                                        draggable="false"
                                    />
                                    <div className="card-shine"></div>
                                </div>

                                {/* Verso da carteira */}
                                <div className={`backface-hidden rounded-xl shadow-xl overflow-hidden card-flip-back`}>
                                    <img
                                        src="/images/carteirinha/verso.png"
                                        alt="Verso da Carteira do Estudante DNA do Brasil"
                                        className="w-full h-full object-cover"
                                        draggable="false"
                                    />
                                    <div className="card-shine"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <motion.div
                    className="text-center my-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <Link to="/carteira-estudante">
                        <motion.button
                            className="bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-dark)] text-white font-bold py-4 px-8 rounded-full text-lg md:text-xl shadow-lg flex items-center justify-center mx-auto group relative overflow-hidden hover:cursor-pointer"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10">Solicite sua carteira agora</span>
                            <motion.div
                                className="absolute right-6 flex items-center"
                                initial={{ x: -5 }}
                                whileHover={{ x: 0 }}
                            >
                            </motion.div>
                            <motion.div
                                className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                style={{ borderRadius: '9999px' }}
                            />
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Cards de benefícios */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {benefitCards.map((card) => (
                        <motion.div
                            key={card.id}
                            variants={itemVariants}
                            className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl benefit-card"
                        >
                            <div className="h-2" style={{ backgroundColor: card.color }}></div>
                            <div className="p-6">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 benefit-card-icon"
                                    style={{ backgroundColor: `${card.color}15` }} // Cor com 15% de opacidade
                                >
                                    <div style={{ color: card.color }}>{card.icon}</div>
                                </div>

                                <h3 className="font-bold text-xl text-center mb-3">{card.title}</h3>
                                <p className="text-gray-600 text-center">{card.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CarteiraEstudante;
