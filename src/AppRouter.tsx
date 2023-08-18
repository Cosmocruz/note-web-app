import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './app/layout/MainLayout';
import { ListNotes } from './app/pages/ListNotes/ListNotes';

interface IAppRouter {}

const AppRouter: FC<IAppRouter> = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '',
                    element: <ListNotes />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default AppRouter;
