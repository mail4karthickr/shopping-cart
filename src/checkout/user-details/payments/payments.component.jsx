import Accordion from "../../../common/components/accordion/accordion.component";
import React, { useEffect } from "react";
import { Container, Title } from "./payments.styles";
import SavedCards from "./cards/cards.component";
import { useDispatch } from "react-redux";
import { getPaymentInfo } from "./payments.slice";

const Payments = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPaymentInfo());
    }, []);
    
    return (
        <Accordion title="Payments">
            <Container>
                <Title>Your saved credit and debit cards</Title>
                <SavedCards />
            </Container>
        </Accordion>
    );
}

export default Payments;