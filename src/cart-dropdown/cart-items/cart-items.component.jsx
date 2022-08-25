import CartItem from "../cart-item/cart-item.component";
import React from "react";
import { useSelector } from "react-redux";
import { CartItemContainer, CartItemsContainer, Divider, DividerContainer } from "./cart-items.styles";

const CartItems = () => {
    const { cartItems } = useSelector((store) => store.cart);
    
    return (
        <CartItemsContainer>
            {cartItems.map((cartItem) => {
                return (
                        <CartItemContainer>
                            <CartItem key={cartItem.item.id} cartItem={cartItem} />
                            <DividerContainer>
                                <Divider />
                            </DividerContainer>
                        </CartItemContainer>
                    );
                }
            )}
        </CartItemsContainer>
    );
}

export default CartItems;