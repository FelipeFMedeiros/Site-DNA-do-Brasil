import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center overflow-hidden">
      {/* Bolhas decorativas de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-500/10 animate-pulse"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 8 + 2}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Número 404 grande */}
      <div 
        className="relative text-[15rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 leading-none select-none z-10 transition-all duration-300 transform hover:scale-105"
        style={{ 
          textShadow: '0 10px 20px rgba(0,0,0,0.1)'
        }}
      >
        404
      </div>

      {/* Mensagem de página não encontrada */}
      <div className="text-center mb-8 z-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Página não encontrada</h1>
        <p className="text-gray-600 max-w-lg mx-auto">
          Parece que você está explorando uma parte desconhecida do nosso DNA digital.
        </p>
      </div>

      {/* Botões interativos */}
      <div className="flex flex-col sm:flex-row gap-4 z-10">
        <Link 
          to="/" 
          className="group relative overflow-hidden px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center justify-center transition-all duration-300"
        >
          <span className="relative z-10">Voltar ao Início</span>
          <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-blue-700/30"></div>
        </Link>
        
        <button 
          className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 flex items-center justify-center transition-all duration-300 group hover:cursor-pointer"
          onClick={() => window.history.back()}
        >
          <svg className="w-5 h-5 mr-2 transform transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar
        </button>
      </div>

      {/* Elemento decorativo com dupla hélice de DNA */}
      <div className="absolute bottom-10 right-10 opacity-20 z-0">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 10C40 30 80 50 60 70C40 90 80 110 60 130" stroke="#4F46E5" strokeWidth="4" strokeLinecap="round"/>
          <path d="M60 10C80 30 40 50 60 70C80 90 40 110 60 130" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round"/>
          <circle cx="60" cy="10" r="4" fill="#4F46E5"/>
          <circle cx="60" cy="70" r="4" fill="#7C3AED"/>
          <circle cx="60" cy="130" r="4" fill="#4F46E5"/>
          <circle cx="40" cy="30" r="3" fill="#4F46E5"/>
          <circle cx="80" cy="30" r="3" fill="#7C3AED"/>
          <circle cx="40" cy="50" r="3" fill="#7C3AED"/>
          <circle cx="80" cy="50" r="3" fill="#4F46E5"/>
          <circle cx="40" cy="90" r="3" fill="#4F46E5"/>
          <circle cx="80" cy="90" r="3" fill="#7C3AED"/>
          <circle cx="40" cy="110" r="3" fill="#7C3AED"/>
          <circle cx="80" cy="110" r="3" fill="#4F46E5"/>
        </svg>
      </div>
    </div>
  );
};

export default NotFound;