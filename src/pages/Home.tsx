import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative" style={{ zIndex: 10 }}>
      {/* Banner Hero */}
      <section className="bg-[color:var(--color-primary)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              O Programa DNA do Brasil
            </h1>
            <p className="text-xl mb-8">
              Acreditamos na força da educação e do esporte para transformar vidas.
              Atuamos diretamente com escolas públicas e comunidades, desenvolvendo talentos e ampliando possibilidades.
            </p>
            <Link to="/quem-somos" className="bg-white text-[color:var(--color-primary)] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition">
              Saiba Mais
            </Link>
          </div>
        </div>
      </section>

      {/* Espaço para os Banners */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Conheça Nossas Iniciativas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Banner 1 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Empresa Parceira da Escola</h3>
                <p className="mb-4">Enriqueça os Recursos Humanos do seu negócio, monitore políticas públicas, renove a base esportiva.</p>
                <Link to="/empresa-parceira" className="text-[color:var(--color-primary)] font-medium hover:underline">SAIBA MAIS</Link>
              </div>
            </div>
            
            {/* Banner 2 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Seja um especialista DNA do Brasil</h3>
                <p className="mb-4">Transforme sua carreira e aumente sua renda.</p>
                <Link to="/pos-graduacao" className="text-[color:var(--color-primary)] font-medium hover:underline">SAIBA MAIS</Link>
              </div>
            </div>
            
            {/* Banner 3 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">A gente planta, educa, treina e você colhe no futuro!</h3>
                <p className="mb-4">Descubra o maior programa de inclusão social por meio do esporte e educação.</p>
                <Link to="/quem-somos" className="text-[color:var(--color-primary)] font-medium hover:underline">SAIBA MAIS</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Metodologia */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Nossa Metodologia</h2>
              <p className="mb-4">
                Mais que uma teoria, a metodologia DNA do Brasil é prática. Através de avaliações
                personalizadas, escuta ativa e ações direcionadas, conseguimos criar trilhas de
                desenvolvimento para cada aluno.
              </p>
              <p className="mb-6">
                Tudo isso com apoio de professores, famílias e uma equipe multidisciplinar.
              </p>
              <Link to="/metodologia" className="bg-[color:var(--color-primary)] text-white px-6 py-2 rounded-md font-medium hover:bg-[color:var(--color-primary-dark)] transition">
                SAIBA MAIS
              </Link>
            </div>
            <div className="md:w-1/2 bg-gray-200 h-64 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Seção de Resultados */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Resultados e Impactos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[color:var(--color-primary)] mb-2">5.000+</div>
              <p>Profissionais capacitados</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[color:var(--color-primary)] mb-2">250.000+</div>
              <p>Alunos atendidos</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[color:var(--color-primary)] mb-2">100%</div>
              <p>Aumento de frequência e engajamento</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[color:var(--color-primary)] mb-2">Prêmio CIEE</div>
              <p>No desenvolvimento de estudantes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;