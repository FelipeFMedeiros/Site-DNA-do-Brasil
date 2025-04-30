import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// Importações do Material UI Icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PersonIcon from '@mui/icons-material/Person';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-100 text-gray-700 pt-16 pb-8 relative">
      {/* Decorative Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="h-6 w-full text-white" preserveAspectRatio="none" viewBox="0 0 1440 48">
          <path 
            fill="currentColor" 
            d="M0,48 C240,16 480,32 720,32 C960,32 1200,16 1440,48 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>
      
      {/* Container principal com mais espaço nas laterais para desktop */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 2xl:px-16">
        {/* Grid de 2 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

          {/* Coluna 1: Informações e Redes Sociais */}
          <div className="md:pr-4">
            <div className="mb-8">
              <div className="flex justify-center md:justify-start">
                <img 
                  src="/images/logos/logo-dna-2.png" 
                  alt="DNA do Brasil" 
                  className="h-24 md:h-28 mb-6"
                />
              </div>
              
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                    <LocationOnIcon fontSize="small" />
                  </div>
                  <span className="ml-4 text-sm leading-tight">
                    SCES Trecho 2 - Conjunto 1 - Lote 10 Clube Asseb - Asa Sul, Brasília – DF
                  </span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                    <PhoneIcon fontSize="small" />
                  </div>
                  <span className="ml-4 text-sm">+55 (61) 3386-7087</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                    <SmartphoneIcon fontSize="small" />
                  </div>
                  <span className="ml-4 text-sm">+55 (61) 98625-8065</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                    <EmailIcon fontSize="small" />
                  </div>
                  <span className="ml-4 text-sm">contato@idecace.org.br</span>
                </div>
              </div>
              
              <div className="mt-10 flex justify-center md:justify-start space-x-5">
                <a 
                  href="https://www.instagram.com/institutoidecace/" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-sm"
                >
                  <InstagramIcon />
                </a>
                <a 
                  href="https://www.facebook.com/idecace/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-sm"
                >
                  <FacebookIcon />
                </a>
                <a 
                  href="https://www.youtube.com/channel/UCxoZjSX8ZFMX6t1b9nXjtZA" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-sm"
                >
                  <YouTubeIcon />
                </a>
                <a 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-sm"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Coluna 2: Serviços e Frase do Presidente */}
          <div className="md:px-4">
            <h3 className="text-2xl font-bold mb-8 text-gray-900 relative inline-block">
              Serviços
              <span className="absolute bottom-0 left-0 w-2/3 h-1 bg-blue-500"></span>
            </h3>
            <ul className="space-y-5">
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <DescriptionIcon fontSize="small" />
                </div>
                <Link to="#" className="ml-4 text-base text-gray-700 hover:text-blue-600 transition-colors group-hover:translate-x-1 transform duration-300">
                  Avaliação do aluno
                </Link>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <BusinessIcon fontSize="small" />
                </div>
                <Link to="#" className="ml-4 text-base text-gray-700 hover:text-blue-600 transition-colors group-hover:translate-x-1 transform duration-300">
                  Especialização de profissional
                </Link>
              </li>
              <li className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <GroupsIcon fontSize="small" />
                </div>
                <Link to="#" className="ml-4 text-base text-gray-700 hover:text-blue-600 transition-colors group-hover:translate-x-1 transform duration-300">
                  Cadastro de parceria
                </Link>
              </li>
            </ul>
            
            {/* Frase do Presidente - Ícone de aspas aumentado */}
            <div className="mt-12 bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 relative">
              <div className="absolute -top-6 -left-4 text-blue-100 transform -rotate-12">
                <FormatQuoteIcon style={{ fontSize: '4.5rem' }} /> {/* Tamanho aumentado */}
              </div>
              <p className="text-gray-700 relative z-10 text-base italic leading-relaxed">
                Existe um trabalho muito maior do que detectar que é encaminhar, que é acompanhar, e isso só se faz a través do professor e com entendimento e a participação da família. Para isso trabalhamos.
              </p>
              <div className="mt-5 flex items-center">
                <div className="flex-shrink-0 border-2 border-blue-500 rounded-full overflow-hidden w-12 h-12 bg-gray-100 flex items-center justify-center text-blue-500 shadow-sm">
                  <PersonIcon />
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-bold text-gray-800">Wilson Cardoso</h4>
                  <p className="text-sm text-gray-500">Presidente IDECACE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Container centralizado entre as duas colunas - Movido para fora do grid */}
        <div className="flex justify-center mt-16">
          <div className="flex flex-col items-center max-w-md">
            {/* Logo IDECACE - Centralizado */}
            <div className="mb-8">
              <img 
                src="/images/logos/idecace.png" 
                alt="IDECACE" 
                className="h-20 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300" 
              />
            </div>
            
            {/* Decorative pattern - Centralizado */}
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-100 to-blue-50 p-6 shadow-md w-full">
              <div className="relative z-10 text-center">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">DNA do Brasil</h4>
                <p className="text-base text-blue-700 opacity-90">Transformando vidas através da educação e do esporte</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-500">&copy; {year} <span className="text-blue-600 font-medium">DNA DO BRASIL</span>. Todos os direitos reservados.</p>
            <div className="mt-6 md:mt-0">
              <ul className="flex flex-wrap justify-center md:justify-end space-x-8 text-sm">
                <li><Link to="/politica-de-privacidade" className="text-gray-500 hover:text-blue-600 transition-colors">Política de Privacidade</Link></li>
                <li><Link to="/termos-de-uso" className="text-gray-500 hover:text-blue-600 transition-colors">Termos de Uso</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;