import React from 'react';
import { motion } from 'framer-motion';
import {
    TrackChangesOutlined,
    SchoolOutlined,
    TrendingUpOutlined,
    PsychologyOutlined,
    MenuBookOutlined,
} from '@mui/icons-material';

interface BeneficioProps {
    icon: React.ReactNode;
    title: string;
    delay: number;
}

const Beneficio: React.FC<BeneficioProps> = ({ icon, title, delay }) => (
    <motion.div
        className="flex flex-col items-center text-center p-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        whileHover={{
            y: -10,
            transition: { duration: 0.2 },
        }}
    >
        <motion.div
            className="bg-blue-100 text-[#134074] w-16 h-16 rounded-full flex items-center justify-center mb-4"
            whileHover={{
                scale: 1.1,
                backgroundColor: '#134074',
                color: '#ffffff',
                transition: { duration: 0.2 },
            }}
        >
            {icon}
        </motion.div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </motion.div>
);

const OQueOferecemos: React.FC = () => {
    const beneficios = [
        {
            icon: <TrackChangesOutlined style={{ fontSize: 36 }} />,
            title: 'Detecção de talentos em diferentes áreas',
        },
        {
            icon: <SchoolOutlined style={{ fontSize: 36 }} />,
            title: 'Encaminhamento para clubes, federações e universidades',
        },
        {
            icon: <TrendingUpOutlined style={{ fontSize: 36 }} />,
            title: 'Redução da evasão escolar e aumento do engajamento',
        },
        {
            icon: <PsychologyOutlined style={{ fontSize: 36 }} />,
            title: 'Desenvolvimento de habilidades socioemocionais',
        },
        {
            icon: <MenuBookOutlined style={{ fontSize: 36 }} />,
            title: 'Alinhamento com a BNCC e formação para professores',
        },
    ];

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-[#f0f4f8]">
            <motion.div
                className="max-w-7xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="text-center mb-16"
                    initial={{ y: -30 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        O que oferecemos?
                    </motion.h2>
                    <motion.div
                        className="h-1 w-20 bg-[color:var(--color-primary)] mx-auto mb-6"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Nossa abordagem integral proporciona diversos benefícios para o desenvolvimento dos estudantes
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {beneficios.map((beneficio, index) => (
                        <Beneficio
                            key={index}
                            icon={beneficio.icon}
                            title={beneficio.title}
                            delay={0.3 + index * 0.1}
                        />
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <motion.div
                        className="rounded-xl overflow-hidden shadow-lg max-w-3xl w-full"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    >
                        <div className="h-72 bg-blue-100 flex items-center justify-center overflow-hidden">
                            <img
                                src="/images/programa-dna/professor-ed-fisica.webp"
                                alt="Professional de Educação Física"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-8 bg-white">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Atividades práticas</h3>
                            <p className="text-gray-600 text-lg">
                                Proporcionamos experiências enriquecedoras que combinam aprendizado e desenvolvimento em
                                ambientes estimulantes e inclusivos. Nosso programa foi desenhado para potencializar os
                                talentos e habilidades de cada estudante.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.a
                        className="px-8 py-3 bg-[#134074] text-white rounded-lg text-lg font-medium shadow-md hover:bg-[#0B2545] transition duration-200 hover:cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        href="/contato"
                    >
                        Faça parte do nosso programa
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default OQueOferecemos;
