import React from "react";
import { Container } from "./user-details.styles";
import Addresses from "../../checkout/addresses/addresses.component";
import ShoppingCart from "../shopping-cart/shopping-cart.component";
import Payments from "checkout/payments/payments.component";

const UserDetails = () => {
    return (
        <Container>
            <ShoppingCart />
            <Addresses />
            <Payments />
        </Container>
    );
}

export default UserDetails;