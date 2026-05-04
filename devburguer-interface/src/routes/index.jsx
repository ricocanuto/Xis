import { createBrowserRouter } from 'react-router-dom';

import { Header } from '../components/Header';
import Home from '../containers/home';
import Login from '../containers/login';
import { Menu } from '../containers/menu';
import Register from '../containers/register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
      <Header />
      <Home />
      </>
    ),
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
