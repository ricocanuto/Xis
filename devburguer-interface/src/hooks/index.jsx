import { CartProvider } from './CartContext';
import { UserProvider } from './UserContext'; // Se você já tiver o UserContext

export const AppProvider = ({ children }) => (
  <UserProvider>
    <CartProvider>{children}</CartProvider>
  </UserProvider>
);