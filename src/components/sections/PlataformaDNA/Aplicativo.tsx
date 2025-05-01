import React from 'react';
import { motion } from 'framer-motion';
import { 
    DashboardOutlined, 
    AssessmentOutlined, 
    HistoryOutlined, 
    CardMembershipOutlined,
    CalendarMonthOutlined, 
    ConnectWithoutContactOutlined, 
    SearchOutlined,
    PhoneIphoneOutlined,
    AndroidOutlined,
} from '@mui/icons-material';

interface RecursoProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    delay: number;
}

const Aplicativo: React.FC = () => {
    // Array de recursos do aplicativo
    const recursos: RecursoProps[] = [
        {
            title: 'Painel Geral',
            description: 'Visualize seu Score DNA e acompanhe sua evolução',
            icon: <DashboardOutlined />,
            delay: 0.1
        },
        {
            title: 'Laudos e Relatórios',
            description: 'Consulte seus resultados sempre que quiser',
            icon: <AssessmentOutlined />,
            delay: 0.2
        },
        {
            title: 'Histórico de Participações',
            description: 'Tenha registro das suas avaliações, oficinas e eventos',
            icon: <HistoryOutlined />,
            delay: 0.3
        },
        {
            title: 'Minha Carteirinha',
            description: 'Acesso rápido à sua identidade DNA',
            icon: <CardMembershipOutlined />,
            delay: 0.4
        },
        {
            title: 'Calendário de Atividades',
            description: 'Fique por dentro das datas de provas, oficinas e competições',
            icon: <CalendarMonthOutlined />,
            delay: 0.5
        },
        {
            title: 'Rede de Contatos',
            description: 'Conecte-se com professores, especialistas, clubes e empresas',
            icon: <ConnectWithoutContactOutlined />,
            delay: 0.6
        },
        {
            title: 'Busca de Especialistas',
            description: 'Encontre profissionais de apoio, como psicólogos, nutricionistas e treinadores',
            icon: <SearchOutlined />,
            delay: 0.7
        }
    ];

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8f9fa] to-blue-50 relative overflow-hidden" id='aplicativo'>          
            <div className="max-w-7xl mx-auto">
                {/* Cabeçalho da seção */}
                <div className="text-center mb-12 md:mb-0 relative z-10">
                    <motion.h2 
                        className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        O APLICATIVO DNA DO BRASIL
                    </motion.h2>
                    <motion.div 
                        className="h-1 w-32 bg-[#134074] mx-auto mb-8"
                        initial={{ width: 0 }}
                        whileInView={{ width: 128 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                </div>
                
                {/* Conteúdo com efeito parallax */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    {/* Coluna com texto descritivo */}
                    <motion.div 
                        className="space-y-6 mb-8 lg:mb-0"
                    >
                        <motion.p
                            className="text-lg leading-relaxed text-gray-600"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Disponível para Android e iOS, o app foi desenhado para tornar a experiência dos 
                            participantes ainda mais prática e personalizada. Ele permite o acesso direto a 
                            laudos, carteirinhas, calendários e histórico de atividades.
                        </motion.p>
                        
                        <div className="flex space-x-4 justify-center lg:justify-start">
                            <motion.a
                                href="#"
                                className="relative bg-[#134074] text-white px-4 py-2 rounded-lg flex items-center shadow-md hover:cursor-pointer overflow-hidden group"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 10px 25px -5px rgba(19, 64, 116, 0.5)",
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <AndroidOutlined className="mr-2 relative z-10 group-hover:animate-pulse" /> 
                                <span className="relative z-10">Google Play</span>
                            </motion.a>
                            <motion.a
                                href="#"
                                className="relative bg-[#134074] text-white px-4 py-2 rounded-lg flex items-center shadow-md hover:cursor-pointer overflow-hidden group"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 10px 25px -5px rgba(19, 64, 116, 0.5)",
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <PhoneIphoneOutlined className="mr-2 relative z-10 group-hover:animate-pulse" /> 
                                <span className="relative z-10">App Store</span>
                            </motion.a>
                        </div>
                    </motion.div>
                    
                    {/* Coluna com mockup do aplicativo */}
                    <motion.div 
                        className="flex justify-center"
                    >
                        <motion.div
                            className="relative w-120 h-[500px] overflow-hidden"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute inset-0 pointer-events-none">
                                <img
                                    src="/images/app/cell-img.webp"
                                    alt="Aplicativo DNA do Brasil"
                                    className="w-full h-full object-cover rounded-3xl shadow-xl"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            
            {/* Recursos do aplicativo */}
            <div className="max-w-7xl mx-auto pt-20 relative z-10">
                <motion.h3
                    className="text-2xl font-bold text-gray-800 mb-8 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Recursos do Aplicativo
                </motion.h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {recursos.map((recurso, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl shadow-md p-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: recurso.delay }}
                            viewport={{ once: true }}
                            whileHover={{ 
                                y: -5,
                                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                                transition: { duration: 0.2 }
                            }}
                        >
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                                <div className="text-[#134074] text-xl">
                                    {recurso.icon}
                                </div>
                            </div>
                            <h4 className="text-lg font-bold text-gray-800 mb-2">
                                {recurso.title}
                            </h4>
                            <p className="text-gray-600">
                                {recurso.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
                
                {/* Mais informações */}
                <motion.div 
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                        Tenha o DNA do Brasil na palma da sua mão
                    </h3>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                        Acompanhe seu desenvolvimento, gerencie suas atividades e conecte-se com 
                        oportunidades de onde estiver, quando quiser.
                    </p>
                    <motion.button
                        className="px-8 py-3 bg-[#134074] text-white rounded-lg text-lg font-medium shadow-md hover:bg-[#0B2545] transition duration-200 hover:cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                            document.getElementById('aplicativo')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Baixar o aplicativo
                    </motion.button>
                </motion.div>
            </div>
            
            {/* Como Acessar - Passos */}
            <div className="max-w-7xl mx-auto mt-24">
                <motion.h3
                    className="text-2xl font-bold text-gray-800 mb-10 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Como Acessar
                </motion.h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="bg-[#134074] text-white py-3 px-4 text-center">
                            <span className="text-2xl font-bold">1</span>
                        </div>
                        <div className="p-6 text-center">
                            <h4 className="text-lg font-bold text-gray-800 mb-3">
                                Baixe o App DNA do Brasil
                            </h4>
                            <p className="text-gray-600">
                                Na Play Store (Android) ou App Store (iOS)
                            </p>
                            <div className="mt-4 flex justify-center">
                                <AndroidOutlined className="text-4xl text-gray-700 mx-2" />
                                <PhoneIphoneOutlined className="text-4xl text-gray-700 mx-2" />
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="bg-[#134074] text-white py-3 px-4 text-center">
                            <span className="text-2xl font-bold">2</span>
                        </div>
                        <div className="p-6 text-center">
                            <h4 className="text-lg font-bold text-gray-800 mb-3">
                                Crie sua conta
                            </h4>
                            <p className="text-gray-600">
                                Com dados básicos: nome, data de nascimento, escola, e-mail e senha
                            </p>
                            <div className="mt-4 flex justify-center">
                                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        className="bg-white rounded-xl shadow-md overflow-hidden"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <div className="bg-[#134074] text-white py-3 px-4 text-center">
                            <span className="text-2xl font-bold">3</span>
                        </div>
                        <div className="p-6 text-center">
                            <h4 className="text-lg font-bold text-gray-800 mb-3">
                                Acesse seus conteúdos e laudos
                            </h4>
                            <p className="text-gray-600">
                                Tudo o que você precisa está ali: laudos, cursos, eventos, carteirinha e muito mais!
                            </p>
                            <div className="mt-4 flex justify-center">
                                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </div>
                
                <motion.div 
                    className="text-center mt-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p className="text-xl font-medium text-[#134074]">
                        A Plataforma DNA do Brasil é o seu espaço digital de crescimento. 
                        Aqui, cada passo é registrado, valorizado e transformado em oportunidade.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Aplicativo;