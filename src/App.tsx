import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Menu from '@components/layout/Menu';
import Footer from '@components/layout/Footer';
import ScrollRestoration from '@hooks/ScrollRestoration';

// Você pode adicionar um spinner de carregamento
const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-32">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#134074]"></div>
    </div>
);

function App() {
    return (
        <>
            <ScrollRestoration />
            <Menu />
            <main>
                <Suspense fallback={<LoadingSpinner />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    );
}

export default App;
