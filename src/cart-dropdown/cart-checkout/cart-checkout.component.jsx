import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { 
    CartCheckOutContainer,
    CheckOutButton,
    Total
} from './cart-checkout.styles';

const CartCheckOut = () => {
    const { formattedAmount } = useSelector((store) => store.cart);
    const navigate = useNavigate();

    const checkoutBtnTappedHandler = () => {
        navigate('/checkout');
    }

    return (
        <CartCheckOutContainer>
            <CheckOutButton onClick={checkoutBtnTappedHandler}>CheckOut</CheckOutButton>
            <Total>Total: {formattedAmount}</Total>
        </CartCheckOutContainer>
    );
}

export default CartCheckOut;