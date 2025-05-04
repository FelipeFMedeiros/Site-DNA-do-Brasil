import React from 'react';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { motion } from 'framer-motion';

const ContactHeader: React.FC = () => {
    return (
        <motion.div
            className="relative bg-gradient-to-r from-[#0B2545] to-[#134074] text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Animated background shapes */}
            <motion.div
                className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full"
                animate={{
                    x: [50, 150, 50],
                    y: [20, 100, 20],
                }}
                transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 opacity-20 rounded-full"
                animate={{
                    x: [-50, -150, -50],
                    y: [-20, -100, -20],
                }}
                transition={{ repeat: Infinity, duration: 25, ease: 'easeInOut' }}
            />

            {/* Conteúdo */}
            <div className="relative z-10 max-w-7xl mx-auto text-center">
                <motion.div
                    className="inline-block p-4 rounded-full bg-white bg-opacity-20 mb-6"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <ContactSupportIcon className="text-white text-4xl" />
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-6 text-white"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Entre em Contato
                </motion.h1>

                <motion.div
                    className="h-1 w-20 bg-white mx-auto mb-8"
                    initial={{ width: 0 }}
                    animate={{ width: 80 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                />

                <motion.p
                    className="max-w-2xl mx-auto text-lg text-white text-opacity-90"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    Estamos aqui para ajudar e responder qualquer dúvida que você possa ter. Adoraríamos ouvir de você e
                    faremos o possível para responder o mais rápido possível.
                </motion.p>

                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <a
                        href="#form"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-[#134074] transition-colors duration-200"
                    >
                        Envie sua mensagem
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ContactHeader;
