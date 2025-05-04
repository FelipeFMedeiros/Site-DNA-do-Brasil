import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import MobileMenu from './MobileMenu';

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProgramOpen, setIsProgramOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const programButtonRef = useRef<HTMLDivElement | null>(null);
    const location = useLocation();

    // Timer para evitar que o menu feche imediatamente
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Fechar o menu quando clicar fora dele
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                programButtonRef.current &&
                !programButtonRef.current.contains(event.target as Node)
            ) {
                setIsProgramOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Fechar o menu mobile ao navegar
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Impedir rolagem quando o menu mobile está aberto
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    // Limpar timeout ao desmontar o componente
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    // Verificar se o link está ativo
    const isActive = (path: string) => {
        return location.pathname === path;
    };

    // Verificar se algum submenu do programa está ativo
    const isProgramActive = () => {
        return (
            isActive('/quem-somos') ||
            isActive('/metodologia') ||
            isActive('/plataforma') ||
            isActive('/carteira-estudante')
        );
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProgram = () => {
        setIsProgramOpen(!isProgramOpen);
    };

    const handleProgramMouseEnter = () => {
        // Limpa qualquer timeout existente
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setIsProgramOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsProgramOpen(false);
        }, 150);
    };

    // Função para cancelar o fechamento quando o mouse entra novamente
    const handleCancelClose = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };

    return (
        <>
            <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-40">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <img src="/images/logos/logo-dna.png" alt="DNA do Brasil" className="h-10" />
                        </Link>

                        {/* Menu desktop */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            <div
                                className="relative group"
                                ref={programButtonRef}
                                onMouseEnter={handleProgramMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button
                                    className={`flex items-center space-x-2 font-medium transition-colors duration-300 pb-2 border-b-2 ${
                                        isProgramActive()
                                            ? 'text-[color:var(--color-primary)] border-[color:var(--color-primary)]'
                                            : 'text-gray-800 hover:text-[color:var(--color-primary)] border-transparent hover:border-[color:var(--color-primary-light)]'
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

                                {/* Dropdown submenu com transição suave */}
                                <div
                                    ref={dropdownRef}
                                    className={`absolute left-0 mt-1 w-64 bg-white rounded-md py-1 shadow-lg z-50 transform transition-all duration-300 origin-top-left
                                        ${
                                            isProgramOpen
                                                ? 'opacity-100 scale-100'
                                                : 'opacity-0 scale-95 pointer-events-none'
                                        }`}
                                    onMouseEnter={handleCancelClose}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link
                                        to="/quem-somos"
                                        className={`block px-4 py-3 transition-all duration-200 ${
                                            isActive('/quem-somos')
                                                ? 'text-[color:var(--color-primary)] font-medium bg-gray-50 border-l-4 border-[color:var(--color-primary)]'
                                                : 'text-gray-800 border-l-4 border-transparent hover:text-[color:var(--color-primary)] hover:bg-gray-50 hover:border-l-4 hover:border-[color:var(--color-primary-light)]'
                                        }`}
                                    >
                                        Quem Somos
                                    </Link>
                                    <Link
                                        to="/metodologia"
                                        className={`block px-4 py-3 transition-all duration-200 ${
                                            isActive('/metodologia')
                                                ? 'text-[color:var(--color-primary)] font-medium bg-gray-50 border-l-4 border-[color:var(--color-primary)]'
                                                : 'text-gray-800 border-l-4 border-transparent hover:text-[color:var(--color-primary)] hover:bg-gray-50 hover:border-l-4 hover:border-[color:var(--color-primary-light)]'
                                        }`}
                                    >
                                        Metodologia
                                    </Link>
                                    <Link
                                        to="/plataforma"
                                        className={`block px-4 py-3 transition-all duration-200 ${
                                            isActive('/plataforma')
                                                ? 'text-[color:var(--color-primary)] font-medium bg-gray-50 border-l-4 border-[color:var(--color-primary)]'
                                                : 'text-gray-800 border-l-4 border-transparent hover:text-[color:var(--color-primary)] hover:bg-gray-50 hover:border-l-4 hover:border-[color:var(--color-primary-light)]'
                                        }`}
                                    >
                                        Plataforma DNA do Brasil
                                    </Link>
                                    <Link
                                        to="/carteira-estudante"
                                        className={`block px-4 py-3 transition-all duration-200 ${
                                            isActive('/carteira-estudante')
                                                ? 'text-[color:var(--color-primary)] font-medium bg-gray-50 border-l-4 border-[color:var(--color-primary)]'
                                                : 'text-gray-800 border-l-4 border-transparent hover:text-[color:var(--color-primary)] hover:bg-gray-50 hover:border-l-4 hover:border-[color:var(--color-primary-light)]'
                                        }`}
                                    >
                                        Carteira do Estudante
                                    </Link>
                                </div>
                            </div>

                            <Link
                                to="/empresa-parceira"
                                className={`font-medium transition-colors duration-300 pb-2 border-b-2 ${
                                    isActive('/empresa-parceira')
                                        ? 'text-[color:var(--color-primary)] border-[color:var(--color-primary)]'
                                        : 'text-gray-800 hover:text-[color:var(--color-primary)] border-transparent hover:border-[color:var(--color-primary-light)]'
                                }`}
                            >
                                Empresa Parceira da Escola
                            </Link>

                            <Link
                                to="/pos-graduacao"
                                className={`font-medium transition-colors duration-300 pb-2 border-b-2 ${
                                    isActive('/pos-graduacao')
                                        ? 'text-[color:var(--color-primary)] border-[color:var(--color-primary)]'
                                        : 'text-gray-800 hover:text-[color:var(--color-primary)] border-transparent hover:border-[color:var(--color-primary-light)]'
                                }`}
                            >
                                Pós-Graduação
                            </Link>

                            <a
                                href="https://loja.dnadobrasil.com.br"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-gray-800 hover:text-[color:var(--color-primary)] transition-colors duration-300 pb-2 border-b-2 border-transparent hover:border-[color:var(--color-primary-light)]"
                            >
                                Loja
                            </a>

                            <a
                                href="https://olimpiada.dnadobrasil.com.br"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-gray-800 hover:text-[color:var(--color-primary)] transition-colors duration-300 pb-2 border-b-2 border-transparent hover:border-[color:var(--color-primary-light)]"
                            >
                                Olimpíada
                            </a>

                            <a
                                href="https://adoteumatleta.dnadobrasil.com.br"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-gray-800 hover:text-[color:var(--color-primary)] transition-colors duration-300 pb-2 border-b-2 border-transparent hover:border-[color:var(--color-primary-light)]"
                            >
                                Adote um Atleta
                            </a>
                        </nav>

                        {/* Botão Entrar - Desktop */}
                        <div className="hidden lg:flex items-center">
                            <Link
                                to="/Identity/Account/Login"
                                className="group relative overflow-hidden bg-[color:var(--color-primary)] text-white px-6 py-2 rounded-md font-medium hover:bg-[color:var(--color-primary-dark)] transition-all duration-300 mr-2"
                            >
                                <span className="relative z-10">ENTRAR</span>
                                <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-white transform -translate-x-1/2 group-hover:w-11/12 transition-all duration-300 ease-out"></div>
                            </Link>
                        </div>

                        {/* Botão do menu mobile */}
                        <div className="lg:hidden flex items-center">
                            <Link
                                to="/login"
                                className="mr-4 bg-[color:var(--color-primary)] text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-[color:var(--color-primary-dark)] transition-colors duration-300"
                            >
                                ENTRAR
                            </Link>

                            <button
                                className="lg:hidden p-2 text-gray-800 hover:text-[color:var(--color-primary)] transition-colors z-50 relative"
                                onClick={toggleMenu}
                                aria-expanded={isMenuOpen}
                                aria-label="Menu principal"
                            >
                                {!isMenuOpen ? (
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
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
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
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Renderizar o componente MobileMenu */}
            <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} isActive={isActive} />
        </>
    );
};

export default Menu;
