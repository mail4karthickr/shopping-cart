import React from 'react';
import { useSelector } from 'react-redux';
import CartCheckOut from './cart-checkout/cart-checkout.component';
import { 
    CartDropdownContainer,
    NoCartItemsContainer,
    NoCartMessage1,
    NoCartMessage2
} from './cart-dropdown.styles';
import CartItems from './cart-items/cart-items.component';

const CartDropdown = () => {
    const { cartItems } = useSelector((store) => store.cart);

    const NoCartItems = () => {
        return (
            <NoCartItemsContainer>
                <NoCartMessage1>No Items In Your Cart.</NoCartMessage1>
                <NoCartMessage2>Please add items.</NoCartMessage2>
            </NoCartItemsContainer>
        );
    }

    return (
        <CartDropdownContainer>
            { cartItems.length === 0 ? <NoCartItems /> : <CartItems /> }
            { cartItems.length !== 0 && <CartCheckOut /> }
        </CartDropdownContainer>
    );
}

export default CartDropdown;