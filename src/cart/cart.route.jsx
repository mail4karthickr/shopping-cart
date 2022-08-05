import { CartContainer } from './cart.styles';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const { cartItems, count, amount } = useSelector((store) => store.cart);
    return (
        <CartContainer>{count}</CartContainer>
    );
}

export default Cart;