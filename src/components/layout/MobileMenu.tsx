import { Link } from 'react-router-dom';
import { useState } from 'react';

interface MobileMenuProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    isActive: (path: string) => boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, toggleMenu, isActive }) => {
    // Adicionar estado para controlar a exibição do submenu
    const [isProgramOpen, setIsProgramOpen] = useState(false);

    // Função para verificar se algum submenu do programa está ativo
    const isProgramActive = () => {
        return (
            isActive('/quem-somos') ||
            isActive('/metodologia') ||
            isActive('/plataforma') ||
            isActive('/carteira-estudante')
        );
    };

    // Função para alternar o estado do submenu
    const toggleProgram = () => {
        setIsProgramOpen(!isProgramOpen);
    };

    return (
        <>
            {/* Mobile sidebar overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-50 lg:hidden ${
                    isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={toggleMenu}
                style={{ transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out' }}
            />

            {/* Mobile sidebar menu */}
            <div
                className={`lg:hidden fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } flex flex-col`}
            >
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-[color:var(--color-primary)]">Menu</h2>
                    <button
                        type="button"
                        className="p-2 text-gray-800 hover:text-[color:var(--color-primary)] transition-colors"
                        onClick={toggleMenu}
                        aria-label="Fechar menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <div className="flex-grow overflow-y-auto py-6 px-5">
                    <div className="space-y-1">
                        <Link
                            to="/"
                            className={`block py-3 px-4 rounded-lg ${
                                isActive('/')
                                    ? 'text-[color:var(--color-primary)] font-medium bg-gray-50 border-l-4 border-[color:var(--color-primary)]'
                                    : 'text-gray-800 hover:bg-gray-50 border-l-4 border-transparent'
                            }`}
                        >
                            Inicio
                        </Link>
                        {/* Dropdown "O Programa" com setinha */}
                        <div className="block">
                            <button
                                className={`flex items-center justify-between w-full py-3 px-4 rounded-lg ${
                                    isProgramActive()
                                        ? 'text-[color:var(--color-primary)] font-medium bg-gray-50 border-l-4 border-[color:var(--color-primary)]'
                                        : 'text-gray-800 hover:bg-gray-50 border-l-4 border-transparent'
                                }`}
                                onClick={toggleProgram}
                            >
                                <span>O Programa</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-4 w-4 transition-transform duration-300 ${
                                        isProgramOpen ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {/* Submenu com transição suave */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    isProgramOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="pl-5 mt-1 space-y-1">
                                    <Link
                                        to="/quem-somos"
                                        className={`block py-2 px-4 rounded-lg ${
                                            isActive('/quem-somos')
                                                ? 'text-[color:var(--color-primary)] font-medium bg-gray-50 border-l-4 border-[color:var(--color-primary)]'
                                                : 'text-gray-700 hover:bg-gray-50 border-l-4 border-transparent'
                                        }`}
                                    >
                                        Quem Somos
                                    </Link>
                                    <Link
                                        to="/metodologia"
                                        className={`block py-2 px-4 rounded-lg ${
                                            isActive('/metodologia')
                                                ? 'text-[color:var(--color-primary)] font-medium bg-gray-50 border-l-4 border-[color:var(--color-primary)]'
                                                : 'text-gray-700 hover:bg-gray-50 border-l-4 border-transparent'
                                        }`}
                                    >
                                        Metodologia
                                    </Link>
                                    <Link
                                        to="/plataforma"
                                        className={`block py-2 px-4 rounded-lg ${
                                            isActive('/plataforma')
                                                ? 'text-[color:var(--color-primary)] font-medium bg-gray-50 border-l-4 border-[color:var(--color-primary)]'
                                                : 'text-gray-700 hover:bg-gray-50 border-l-4 border-transparent'
                                        }`}
                                    >
                                        Plataforma DNA do Brasil
                                    </Link>
                                    <Link
                                        to="/carteira-estudante"
                                        className={`block py-2 px-4 rounded-lg ${
                                            isActive('/carteira-estudante')
                                                ? 'text-[color:var(--color-primary)] font-medium bg-gray-50 border-l-4 border-[color:var(--color-primary)]'
                                                : 'text-gray-700 hover:bg-gray-50 border-l-4 border-transparent'
                                        }`}
                                    >
                                        Carteira do Estudante
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/empresa-parceira"
                            className={`block py-3 px-4 rounded-lg ${
                                isActive('/empresa-parceira')
                                    ? 'text-[color:var(--color-primary)] font-medium bg-gray-50 border-l-4 border-[color:var(--color-primary)]'
                                    : 'text-gray-800 hover:bg-gray-50 border-l-4 border-transparent'
                            }`}
                        >
                            Empresa Parceira da Escola
                        </Link>

                        <Link
                            to="/pos-graduacao"
                            className={`block py-3 px-4 rounded-lg ${
                                isActive('/pos-graduacao')
                                    ? 'text-[color:var(--color-primary)] font-medium bg-gray-50 border-l-4 border-[color:var(--color-primary)]'
                                    : 'text-gray-800 hover:bg-gray-50 border-l-4 border-transparent'
                            }`}
                        >
                            Pós-Graduação
                        </Link>

                        <a
                            href="https://loja.dnadobrasil.com.br"
                            className="block py-3 px-4 rounded-lg text-gray-800 hover:bg-gray-50 border-l-4 border-transparent"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Loja
                        </a>

                        <a
                            href="https://olimpiada.dnadobrasil.com.br"
                            className="block py-3 px-4 rounded-lg text-gray-800 hover:bg-gray-50 border-l-4 border-transparent"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Olimpíada
                        </a>

                        <a
                            href="https://adoteumatleta.dnadobrasil.com.br"
                            className="block py-3 px-4 rounded-lg text-gray-800 hover:bg-gray-50 border-l-4 border-transparent"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Adote um Atleta
                        </a>
                    </div>
                </div>

                <div className="p-4 border-t border-gray-200">
                    <a
                        href="/Identity/Account/Login"
                        className="group relative overflow-hidden flex items-center justify-center w-full px-4 py-3 text-white bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-dark)] transition-colors font-medium rounded-lg"
                    >
                        <span className="relative z-10">ENTRAR</span>
                        <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-white transform -translate-x-1/2 group-hover:w-11/12 transition-all duration-300 ease-out"></div>
                    </a>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
