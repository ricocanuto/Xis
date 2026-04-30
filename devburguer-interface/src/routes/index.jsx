import { createBrowserRouter } from 'react-router-dom';

import Home from '../containers/home';
import Login from '../containers/login';
import { Menu } from '../containers/menu';
import Register from '../containers/register';

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
  {
    path: '/cardapio',
    element: <Menu />,
  },
]);
