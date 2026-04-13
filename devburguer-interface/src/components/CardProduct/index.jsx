import PropTypes from "prop-types";
import { useCart } from "../../hooks/CartContext"; // CORREÇÃO 2: useCart vem dos hooks
import { formatPrice } from "../../utils/formatPrice";
import { CartButton } from "../CartButton"; // CORREÇÃO 1: Botão está na pasta components
import { CardImage, Container } from "./styles";

export function CardProduct({ product }) {
  const { putProductInCart } = useCart();
  return (
    <Container>
      <CardImage src={product.url} alt={product.name} />
      <div>
        <p>{product.name}</p>
        <strong>{formatPrice(product.price)}</strong>
      </div>
      <CartButton onClick={() => putProductInCart(product)}></CartButton>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};
