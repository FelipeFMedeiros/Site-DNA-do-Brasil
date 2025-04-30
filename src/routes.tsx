import { createBrowserRouter } from 'react-router-dom';
import App from './App';

// Pages
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Metodologia from './pages/Metodologia';
import PlataformaDna from './pages/PlataformaDna';
import CarteiraEstudante from './pages/CarteiraEstudante';
import EmpresaParceira from './pages/EmpresaParceira';
import PosGraduacao from './pages/PosGraduacao';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'quem-somos', element: <QuemSomos /> },
      { path: 'metodologia', element: <Metodologia /> },
      { path: 'plataforma', element: <PlataformaDna /> },
      { path: 'carteira-estudante', element: <CarteiraEstudante /> },
      { path: 'empresa-parceira', element: <EmpresaParceira /> },
      { path: 'pos-graduacao', element: <PosGraduacao /> },
    ],
  },
]);

export default router;