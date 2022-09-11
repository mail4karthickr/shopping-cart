import React from "react";
import { 
    AddressContainer,
    Container,
    UserDetailsContainer
} from "./checkout.styles";
import ShippingInfo from "./shipping-info/shipping-info.component";
import UserDetails from "./user-details/user-details.component";
import { closeCart } from '../cart/cart.slice';
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Checkout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeCart());
    }, []);
    
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