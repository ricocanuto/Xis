import { createBrowserRouter } from "react-router-dom";

import Login from '../containers/login';
import Home from '../containers/home';
import Register from'../containers/register';

export const router = createBrowserRouter([
      {
        path: '/',
        element: <Home />,
    },
      {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Register />,
    },
]);


