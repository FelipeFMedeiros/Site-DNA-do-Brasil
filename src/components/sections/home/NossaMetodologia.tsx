import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Importação dos ícones do MUI
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StarIcon from '@mui/icons-material/Star';
import BarChartIcon from '@mui/icons-material/BarChart';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DataUsageIcon from '@mui/icons-material/DataUsage';

const NossaMetodologia: React.FC = () => {
  // Variantes para animações
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', damping: 25, stiffness: 200 }
    }
  };

  // Dados das dimensões de análise
  const dimensoes = [
    {
      id: 1,
      titulo: 'Saúde',
      descricao: 'Avaliação de habilidades específicas e métricas de desempenho individual.',
      icone: <FavoriteIcon style={{ fontSize: 40 }} />,
      cor: '#D2322D'
    },
    {
      id: 2,
      titulo: 'Talento Esportivo',
      icone: <EmojiEventsIcon style={{ fontSize: 40 }} />,
      cor: '#ED9C28'
    },
    {
      id: 3,
      titulo: 'Consumo Alimentar',
      icone: <RestaurantIcon style={{ fontSize: 40 }} />,
      cor: '#47A447'
    },
    {
      id: 4,
      titulo: 'Saúde Bucal',
      icone: <MedicalServicesIcon style={{ fontSize: 40 }} />,
      cor: '#5BC0DE'
    },
    {
      id: 5,
      titulo: 'Qualidade de Vida',
      icone: <ThumbUpIcon style={{ fontSize: 40 }} />,
      cor: '#00A4A9'
    },
    {
      id: 6,
      titulo: 'Vocacional',
      icone: <StarIcon style={{ fontSize: 40 }} />,
      cor: '#9C27B0'
    }
  ];

  // Dados dos infográficos
  const infograficos = [
    {
      id: 1,
      titulo: 'Encaminhamentos Práticos',
      descricao: 'Transformamos avaliações em ações concretas e resultados mensuráveis.',
      icone: <RocketLaunchIcon style={{ fontSize: 36 }} />,
    },
    {
      id: 2,
      titulo: 'Educação com Dados',
      descricao: 'Utilizamos métricas e evidências para decisões pedagógicas precisas.',
      icone: <DataUsageIcon style={{ fontSize: 36 }} />,
    },
    {
      id: 3,
      titulo: '5 Dimensões de Análise',
      descricao: 'Uma abordagem completa que contempla todos os aspectos do desenvolvimento.',
      icone: <BarChartIcon style={{ fontSize: 36 }} />,
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna esquerda: Texto e CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Nossa Metodologia
              <motion.div 
                className="absolute -bottom-2 left-0 h-1 bg-[color:var(--color-primary)]"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
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
              Mais que uma teoria, a metodologia DNA do Brasil é prática. Através de avaliações personalizadas, escuta ativa e ações direcionadas, conseguimos criar trilhas de desenvolvimento para cada aluno.
            </motion.p>
            
            <motion.p 
              className="text-lg mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Tudo isso com apoio de professores, famílias e uma equipe multidisciplinar.
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
                className="relative inline-flex items-center justify-center px-8 py-3 bg-[color:var(--color-primary)] text-white rounded-md font-medium shadow-md group overflow-hidden"
                style={{ isolation: 'isolate' }}
              >
                {/* Círculo de expansão */}
                <span
                  className="absolute w-0 h-0 rounded-full bg-[color:var(--color-primary-dark)] opacity-100 transition-all duration-700 ease-out group-hover:w-[500px] group-hover:h-[500px]"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 0,
                  }}
                />
                
                {/* Texto e ícone */}
                <span className="relative flex items-center justify-center z-10 transition-all duration-300">
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
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Coluna direita: Cards/Infográficos */}
          <div>
            {/* Infográficos */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {infograficos.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="bg-gray-50 p-4 rounded-lg shadow-sm"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                    transition: { type: 'spring', stiffness: 300 }
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      className="mb-3 text-[color:var(--color-primary)]"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.icone}
                    </motion.div>
                    <h3 className="font-bold mb-2">{item.titulo}</h3>
                    <p className="text-sm text-gray-600">{item.descricao}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* 5 Dimensões - Layout Circular/Radial */}
            <motion.div
              className="relative h-96 md:h-[400px] flex justify-center items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {/* Centro do radial */}
              <motion.div 
                className="absolute z-10 w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
                }}
              >
                <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
                  <span className="text-center font-bold text-[color:var(--color-primary)] text-lg">DNA do Brasil</span>
                </div>
              </motion.div>
              
              {/* Dimensões ao redor */}
              {dimensoes.map((dimensao, index) => {
                // Posicionar em círculo
                const angle = (index * (360 / dimensoes.length)) * (Math.PI / 180);
                const radius = 150; // Aumentado para dar mais espaço em telas grandes
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                
                return (
                  <motion.div
                    key={dimensao.id}
                    className="absolute w-20 h-20 rounded-full shadow-md flex items-center justify-center cursor-pointer"
                    style={{ backgroundColor: dimensao.cor }}
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    whileInView={{ 
                      opacity: 1, 
                      x: x, 
                      y: y,
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: 'spring', damping: 15 }}
                    whileHover={{ 
                      scale: 1.2,
                      zIndex: 20,
                      transition: { duration: 0.15, type: 'spring', stiffness: 400 }
                    }}
                  >
                    <motion.div className="text-white">
                      {dimensao.icone}
                    </motion.div>
                    
                    {/* Tooltip para mostrar detalhes */}
                    <motion.div 
                      className="absolute opacity-0 invisible bg-white p-3 rounded-lg shadow-xl w-48 z-30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ 
                        opacity: 1, 
                        scale: 1,
                        visibility: 'visible'
                      }}
                      transition={{ duration: 0.15 }}
                    >
                      <h4 className="font-bold text-gray-800 mb-1">{dimensao.titulo}</h4>
                      <p className="text-xs text-gray-600">{dimensao.descricao}</p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NossaMetodologia;