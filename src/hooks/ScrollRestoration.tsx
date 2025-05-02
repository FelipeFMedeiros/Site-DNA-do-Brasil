import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollRestoration = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Quando a rota mudar, role para o topo
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // Este componente não renderiza nada
};

export default ScrollRestoration;
