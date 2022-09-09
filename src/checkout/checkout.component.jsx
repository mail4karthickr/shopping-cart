import React from "react";
import { 
    AddressContainer,
    Container,
    UserDetailsContainer
} from "./checkout.styles";
import ShippingInfo from "./shipping-info/shipping-info.component";
import UserDetails from "./user-details/user-details.component";

const Checkout = () => {
    return (
        <Container>
            <UserDetailsContainer>
                <UserDetails />
            </UserDetailsContainer>
            <AddressContainer>
                <ShippingInfo />
            </AddressContainer>
        </Container>
    );
}

export default Checkout;