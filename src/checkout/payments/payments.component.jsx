import Accordion from "../../common/components/accordion/accordion.component";
import React from "react";
import { Container, Title } from "./payments.styles";
import SavedCards from "./saved-cards/saved-cards.component";

const Payments = () => {
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