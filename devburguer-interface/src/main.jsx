import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { CartProvider } from './hooks/CartContext';
import { router } from './routes';
import GlobalStyles from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <RouterProvider router={router} />
    <GlobalStyles />
    <ToastContainer autoClose={2080} theme="colored" />
    </CartProvider>
  </React.StrictMode>,
);

 
