import { Outlet } from 'react-router-dom';
import Menu from '@components/layout/Menu';
import Footer from '@components/layout/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Menu />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;