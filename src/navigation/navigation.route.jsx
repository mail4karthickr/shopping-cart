import { NavigationContainer } from './navigation.styles';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import CartCount from '../cart/cart-count/cart-count.component';
import CartDropdown from 'cart/cart-dropdown/cart-dropdown.component';

const Navigation = () => {
    const { isCartOpen } = useSelector((store) => store.cart);

    return (
        <>
            <NavigationContainer>
                <CartCount />
            </NavigationContainer>
            <Outlet />
            {isCartOpen && <CartDropdown />}
        </>
    );
}

export default Navigation;