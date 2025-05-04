import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InfoIcon from '@mui/icons-material/Info';

const CTASection: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-[#0B2545] to-[#134074] text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="max-w-2xl mx-auto text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Inicie sua jornada como especialista em talentos esportivos
                        </h2>

                        <p className="text-xl mb-8 leading-relaxed">
                            Entre em contato com nossa equipe acadêmica e saiba como iniciar sua formação em
                            Detecção e Desenvolvimento de Talentos Esportivos.
                        </p>

                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-10 max-w-xl mx-auto">
                            <h3 className="text-xl font-semibold mb-4 flex items-center justify-center">
                                <InfoIcon className="mr-2" />
                                Próxima turma
                            </h3>

                            <ul className="space-y-4">
                                <li className="flex items-start justify-center">
                                    <svg
                                        className="w-5 h-5 text-blue-300 mr-2 mt-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    <div>
                                        <span className="font-semibold">Início das aulas:</span>
                                        <span className="ml-2">Próximo mês</span>
                                    </div>
                                </li>

                                <li className="flex items-start justify-center">
                                    <svg
                                        className="w-5 h-5 text-blue-300 mr-2 mt-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    <div>
                                        <span className="font-semibold">Processo seletivo:</span>
                                        <span className="ml-2">Análise de currículo</span>
                                    </div>
                                </li>

                                <li className="flex items-start justify-center">
                                    <svg
                                        className="w-5 h-5 text-blue-300 mr-2 mt-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    <div>
                                        <span className="font-semibold">Vagas limitadas:</span>
                                        <span className="ml-2">Últimas vagas disponíveis</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto">
                            <motion.a
                                href="https://wa.me/61986258065?text=Olá,%20gostaria%20de%20informações%20sobre%20a%20Pós-Graduação%20em%20Detecção%20de%20Talentos%20Esportivos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg flex items-center justify-center transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <WhatsAppIcon className="mr-2" />
                                Falar por WhatsApp
                            </motion.a>

                            <motion.a
                                href="/contato"
                                className="bg-white text-[#0B2545] px-8 py-4 rounded-lg font-semibold text-lg shadow-lg flex items-center justify-center transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <MailOutlineIcon className="mr-2" />
                                Entrar em contato
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* FAQ/Perguntas frequentes simplificado */}
                    <motion.div
                        className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-center">Perguntas frequentes</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-lg font-semibold mb-2 text-blue-300">
                                    Preciso ter formação em Educação Física?
                                </h4>
                                <p className="text-blue-100">
                                    O curso é indicado principalmente para profissionais de Educação Física, mas também
                                    está aberto para gestores escolares e técnicos esportivos com formação superior em
                                    áreas correlatas.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold mb-2 text-blue-300">
                                    Como funciona o formato EAD?
                                </h4>
                                <p className="text-blue-100">
                                    Todas as aulas são gravadas e disponibilizadas na plataforma, permitindo que você
                                    estude no seu ritmo e horário. Há também atividades práticas e avaliações online.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold mb-2 text-blue-300">
                                    Qual o investimento para o curso?
                                </h4>
                                <p className="text-blue-100">
                                    Entre em contato conosco para obter informações sobre valores, formas de pagamento e
                                    possíveis descontos. Temos condições especiais para grupos e ex-alunos.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold mb-2 text-blue-300">
                                    O certificado é reconhecido pelo MEC?
                                </h4>
                                <p className="text-blue-100">
                                    Sim, nosso curso é oferecido em parceria com instituição de ensino superior
                                    credenciada pelo MEC, garantindo a validade do seu certificado em todo o território
                                    nacional.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
