import React from "react";
import { 
    AddressContainer,
    Container,
    UserDetailsContainer
} from "./checkout.styles";
import UserDetails from "./user-details/user-details.component";

const Checkout = () => {
    return (
        <Container>
            <UserDetailsContainer>
                <UserDetails />
            </UserDetailsContainer>
            <AddressContainer>wdwd</AddressContainer>
        </Container>
    );
}

export default Checkout;