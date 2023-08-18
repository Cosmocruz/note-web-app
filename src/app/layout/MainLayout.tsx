import { FC } from 'react';
import TopNav from '../components/TopNav/TopNav';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

interface IMainLayout {
    // children: ReactNode;
}

const MainLayout: FC<IMainLayout> = () => {
    return (
        <div className="flex flex-col  min-h-screen  bg-red-500">
            <TopNav />
            <div className="relative  grow">{<Outlet />}</div>
            <Footer />
        </div>
    );
};

export default MainLayout;
