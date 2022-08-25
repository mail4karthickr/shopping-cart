import React from 'react';
import { CartCountContainer, Bag, Circle } from './cart-count.styles';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from './cart.slice';

const CartCount = () => {
    const dispatch = useDispatch();
    const { isCartOpen, count, cartItems } = useSelector((store) => store.cart);
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
    
    return (
        <CartCountContainer onClick={toggleIsCartOpen}>
            <Bag />
            { cartItems.length !== 0 && <Circle>{count}</Circle> }
        </CartCountContainer>
    );
};

export default CartCount;