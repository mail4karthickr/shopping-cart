import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getPaymentInfo } from "../payments.slice";
import Card from "./card/card.component";
import { Container } from "./cards.styles";

const SavedCards = () => {
    const { cards } = useSelector((store) => store.payments);

    return (
        <Container>
            {
                cards.map(card => {
                    return <Card key={card.id} cardInfo={card} />
                })
            }
        </Container>
    );
}

export default SavedCards;