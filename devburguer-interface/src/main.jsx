import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Login from './containers/login/index.jsx'
import GlobalStyles from'./styles/globalstyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <GlobalStyles />  
  </StrictMode>,
)
