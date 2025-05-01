import React from 'react';
import { motion } from 'framer-motion';
import BadgeIcon from '@mui/icons-material/Badge';
import SyncIcon from '@mui/icons-material/Sync';
import PublicIcon from '@mui/icons-material/Public';

const ComoFunciona: React.FC = () => {
    // Animação para aparecer da esquerda
    const fromLeftVariant = {
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
    };

    // Animação para aparecer da direita
    const fromRightVariant = {
        hidden: { x: 50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
    };

    // Animação para aparecer de baixo
    const fromBottomVariant = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    };

    // Informações sobre como funciona a carteira
    const howItWorksItems = [
        {
            id: 1,
            title: 'Identificação',
            description:
                'A carteirinha contém nome completo, foto, CPF, escola, número de matrícula e um QR Code único.',
            icon: <BadgeIcon style={{ fontSize: 48 }} />,
            color: '#3498DB',
        },
        {
            id: 2,
            title: 'Integração com o Sistema DNA',
            description: 'O QR Code dá acesso a laudos, atividades, histórico de participação e cursos recomendados.',
            icon: <SyncIcon style={{ fontSize: 48 }} />,
            color: '#E74C3C',
        },
        {
            id: 3,
            title: 'Válida em todo o território nacional',
            description:
                'A carteirinha é vinculada ao sistema oficial do Programa DNA do Brasil, com reconhecimento nas instituições participantes.',
            icon: <PublicIcon style={{ fontSize: 48 }} />,
            color: '#27AE60',
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
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
                        Como Funciona
                        <motion.div
                            className="absolute -bottom-2 left-0 right-0 mx-auto h-1 bg-[#134074]"
                            initial={{ width: 0 }}
                            whileInView={{ width: '50%' }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        />
                    </motion.h2>
                </motion.div>

                {/* Conteúdo principal */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
                    {/* Imagem da carteira com anotações */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fromLeftVariant}
                        className="relative"
                    >
                        <div className="relative bg-gray-100 p-6 rounded-xl shadow-lg">
                            <img
                                src="/images/carteirinha/frente.png"
                                alt="Carteira do Estudante DNA do Brasil com detalhes"
                                className="w-full rounded-lg"
                            />

                            {/* Marcadores com anotações */}
                            <motion.div
                                className="absolute top-1/4 left-0 transform -translate-x-1/2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                <div className="bg-white px-3 py-2 rounded-lg shadow-md text-xs max-w-[140px] border-l-4 border-blue-500">
                                    <span className="font-bold">Foto de identificação</span>
                                </div>
                                <div className="w-12 h-px bg-blue-500 ml-auto mr-1 mt-1"></div>
                            </motion.div>

                            <motion.div
                                className="absolute top-1/2 right-0 transform translate-x-1/2"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                            >
                                <div className="bg-white px-3 py-2 rounded-lg shadow-md text-xs max-w-[140px] border-l-4 border-red-500">
                                    <span className="font-bold">QR Code único</span>
                                </div>
                                <div className="w-12 h-px bg-red-500 mr-auto ml-1 mt-1"></div>
                            </motion.div>

                            <motion.div
                                className="absolute bottom-12 left-1/4 transform -translate-x-1/2"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.0 }}
                            >
                                <div className="bg-white px-3 py-2 rounded-lg shadow-md text-xs max-w-[140px] border-l-4 border-green-500">
                                    <span className="font-bold">Dados do estudante</span>
                                </div>
                                <div className="w-12 h-px bg-green-500 ml-auto mr-1 mt-1"></div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Lista de funcionalidades */}
                    <div className="space-y-8">
                        {howItWorksItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="flex items-start space-x-4"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fromRightVariant}
                                transition={{ delay: 0.3 + index * 0.2 }}
                            >
                                <div
                                    className="flex-shrink-0 p-3 rounded-full"
                                    style={{ backgroundColor: `${item.color}20` }}
                                >
                                    <div style={{ color: item.color }}>{item.icon}</div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Informação adicional */}
                <motion.div
                    className="bg-blue-50 rounded-xl p-8 shadow-inner"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fromBottomVariant}
                    transition={{ delay: 0.5 }}
                >
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-[#134074] mb-4">Tecnologia a serviço da educação</h3>
                        <p className="text-gray-700 max-w-3xl mx-auto">
                            A Carteira DNA do Brasil utiliza tecnologia de ponta para facilitar a identificação,
                            garantir a segurança dos dados e proporcionar uma experiência integrada para os estudantes.
                            A partir do QR Code único, instituições e parceiros têm acesso às informações essenciais do
                            estudante, sempre respeitando a privacidade e a segurança dos dados.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ComoFunciona;
