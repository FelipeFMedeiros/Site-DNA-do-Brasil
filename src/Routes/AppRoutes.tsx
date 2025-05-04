import { RouteObject } from 'react-router-dom';
import App from '@/App';

// Pages
import Home from '@/pages/Home';
import QuemSomos from '@/pages/QuemSomos';
import Metodologia from '@/pages/Metodologia';
import PlataformaDna from '@/pages/PlataformaDna';
import CarteiraEstudante from '@/pages/CarteiraEstudante';
import EmpresaParceira from '@/pages/EmpresaParceira';
import PosGraduacao from '@/pages/PosGraduacao';
import Contato from '@/pages/Contato';
import NotFound from '@/pages/NotFound';

// Rotas principais da aplicação
export const mainRoutes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        // errorElement: <ErrorBoundary />, // Componente para capturar erros em toda a aplicação
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'quem-somos',
                element: <QuemSomos />,
            },
            {
                path: 'metodologia',
                element: <Metodologia />,
            },
            {
                path: 'plataforma',
                element: <PlataformaDna />,
            },
            {
                path: 'carteira-estudante',
                element: <CarteiraEstudante />,
            },
            {
                path: 'empresa-parceira',
                element: <EmpresaParceira />,
            },
            {
                path: 'pos-graduacao',
                element: <PosGraduacao />,
            },
            {
                path: 'contato',
                element: <Contato />,
            },
        ],
    },
    // Rota de fallback para páginas não encontradas
    { path: '*', element: <NotFound /> },
];

// Combina todas as rotas
const routes: RouteObject[] = [...mainRoutes];

export default routes;
