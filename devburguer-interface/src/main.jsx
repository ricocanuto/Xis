import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

import "react-toastify/dist/ReactToastify.css";

import Login from './containers/login/index.jsx';
import GlobalStyles from './styles/globalStyles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Login />
      <ToastContainer autoClode={3000} />
      <GlobalStyles />
    </BrowserRouter>
  </StrictMode>,
);

 
