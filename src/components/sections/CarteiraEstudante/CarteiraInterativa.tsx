import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';

const CarteiraInterativa: React.FC = () => {
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
                            className="absolute -bottom-2 left-0 right-0 mx-auto h-1 bg-[#134074]"
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
                            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-[#134074] text-white w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
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
                                className="relative preserve-3d mx-auto card-container"
                                style={
                                    {
                                        width: '408px',
                                        height: '260px',
                                        transformStyle: 'preserve-3d',
                                    } as React.CSSProperties
                                }
                                onClick={isFlipping ? undefined : flipCard}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            >
                                {/* Frente da carteira */}
                                <div
                                    className="backface-hidden rounded-xl shadow-xl overflow-hidden absolute w-full h-full"
                                    style={
                                        {
                                            backfaceVisibility: 'hidden',
                                            transform: 'rotateY(0deg)',
                                        } as React.CSSProperties
                                    }
                                >
                                    <img
                                        src="/images/carteirinha/frente.png"
                                        alt="Frente da Carteira do Estudante DNA do Brasil"
                                        className="w-full h-full object-cover"
                                        draggable="false"
                                    />
                                    <div
                                        className="card-shine absolute inset-0 pointer-events-none"
                                        style={{
                                            background:
                                                'linear-gradient(105deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 80%)',
                                        }}
                                    ></div>
                                </div>

                                {/* Verso da carteira */}
                                <div
                                    className="backface-hidden rounded-xl shadow-xl overflow-hidden absolute w-full h-full"
                                    style={
                                        {
                                            backfaceVisibility: 'hidden',
                                            transform: 'rotateY(180deg)',
                                        } as React.CSSProperties
                                    }
                                >
                                    <img
                                        src="/images/carteirinha/verso.png"
                                        alt="Verso da Carteira do Estudante DNA do Brasil"
                                        className="w-full h-full object-cover"
                                        draggable="false"
                                    />
                                    <div
                                        className="card-shine absolute inset-0 pointer-events-none"
                                        style={{
                                            background:
                                                'linear-gradient(105deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 80%)',
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <motion.p
                    className="text-center text-sm text-gray-500 italic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    Clique na carteira ou use o botão acima para virá-la
                </motion.p>
            </div>
        </section>
    );
};

export default CarteiraInterativa;
