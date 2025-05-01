import React from 'react';
import { motion } from 'framer-motion';
import {
    AssessmentOutlined,
    GroupsOutlined,
    PersonOutlined,
    LaptopOutlined,
    CardMembershipOutlined,
} from '@mui/icons-material';

const ComoFuncionaItem: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    delay: number;
}> = ({ icon, title, description, delay }) => (
    <motion.div
        className="flex space-x-4 items-start"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
        }}
    >
        <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 flex-shrink-0">{icon}</div>
        <div>
            <h4 className="font-bold text-lg text-gray-800 mb-1">{title}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    </motion.div>
);

const ComoFunciona: React.FC = () => {
    const items = [
        {
            icon: <AssessmentOutlined fontSize="medium" />,
            title: 'Avaliação individualizada',
            description:
                'Aplicamos um protocolo com testes e formulários que geram um laudo completo do aluno, envolvendo dimensões como vocação, saúde, aptidão esportiva, qualidade de vida e desempenho educacional.',
        },
        {
            icon: <GroupsOutlined fontSize="medium" />,
            title: 'Equipe multidisciplinar',
            description:
                'Professores, psicólogos, pedagogos, assistentes sociais e profissionais de saúde acompanham o estudante ao longo do percurso.',
        },
        {
            icon: <PersonOutlined fontSize="medium" />,
            title: 'Encaminhamentos personalizados',
            description:
                'Com base no laudo, o estudante pode ser direcionado a oficinas, reforço escolar, atividades esportivas, atendimento emocional, cursos profissionalizantes e muito mais.',
        },
        {
            icon: <LaptopOutlined fontSize="medium" />,
            title: 'Uso de tecnologia',
            description:
                'A plataforma DNA do Brasil facilita o acesso a relatórios, cursos, comunicações e controle de frequência.',
        },
        {
            icon: <CardMembershipOutlined fontSize="medium" />,
            title: 'Carteira do Estudante DNA',
            description:
                'Um documento que identifica o aluno, oferece acesso a benefícios e conecta com empresas e instituições parceiras.',
        },
    ];

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
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
                        Como funciona na prática?
                    </motion.h2>
                    <motion.div
                        className="h-1 w-20 bg-indigo-500 mx-auto mb-6"
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
                        Nosso programa é estruturado em etapas que garantem um acompanhamento completo e personalizado
                        para cada estudante.
                    </motion.p>
                </motion.div>

                <div className="space-y-10 md:space-y-12">
                    {items.map((item, index) => (
                        <ComoFuncionaItem
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            delay={0.3 + index * 0.1}
                        />
                    ))}
                </div>

                <motion.div
                    className="mt-16 md:mt-20 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.a
                        className="px-8 py-3 bg-indigo-600 text-white rounded-lg text-lg font-medium shadow-md hover:bg-indigo-800 transition duration-200 hover:cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        href='/metodologia'
                    >
                        Saiba mais sobre nossa metodologia
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ComoFunciona;
