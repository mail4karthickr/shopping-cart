import Accordion from "../../common/components/accordion/accordion.component";
import React from "react";
import CartItems from "../../cart-dropdown/cart-items/cart-items.component";
import { Container, TotalAmountContainer } from "./shopping-cart.styles";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
    const { formattedAmount } = useSelector((store) => store.cart);
    return (
        <Accordion isOpen={true} title="Shopping cart">
            <Container>
                <CartItems />
                <TotalAmountContainer>
                    <div>Total</div>
                    <div>{formattedAmount}</div>
                </TotalAmountContainer>
            </Container>
        </Accordion>
    );
}

export default ShoppingCart;