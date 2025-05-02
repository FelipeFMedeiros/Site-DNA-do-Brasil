import { Outlet } from 'react-router-dom';
import Menu from '@components/layout/Menu';
import Footer from '@components/layout/Footer';
import ScrollRestoration from '@hooks/ScrollRestoration';

function App() {
  return (
    <>
      <ScrollRestoration />
      <Menu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;