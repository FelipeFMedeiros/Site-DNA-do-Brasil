import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScrollToTopProps {
    /**
     * Altura de rolagem (em pixels) a partir da qual o botão deve ser exibido
     * @default 300
     */
    showAtHeight?: number;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ showAtHeight = 300 }) => {
    const [isVisible, setIsVisible] = useState(false);

    // Controla a visibilidade com base na posição de rolagem
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > showAtHeight);
        };

        // Verifica a posição inicial
        handleScroll();

        // Adiciona o event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup do event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [showAtHeight]);

    // Função para rolar para o topo
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 w-12 h-12 bg-blue-800 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-950 transition-colors duration-200 hover:cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
