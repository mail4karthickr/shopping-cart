import React from "react";
import Card from "./card/card.component";
import { Container } from "./saved-cards.styles";

const cards = [
    {
        cardHolderName: 'Karthick',
        cardTitle: 'ICICI Bank Debit Card',
        maskedNum: '****6754',
        provider: 'visa',
        expiry: '08/2024',
        isRecommended: 'false',
        isSelected: true
    },
    {
        cardHolderName: 'Karthick',
        cardTitle: 'Axis Bank Debit Card',
        maskedNum: '****9090',
        provider: 'visa',
        expiry: '03/2024',
        isRecommended: 'false',
        isSelected: false
    },
    {
        cardHolderName: 'Kumar',
        cardTitle: 'Citibank Credit Card',
        maskedNum: '****7654',
        provider: 'visa',
        expiry: '08/2024',
        isRecommended: 'false',
        isSelected: false
    }
]

const SavedCards = () => {
    return (
        <Container>
            {
                cards.map(card => {
                    return <Card key={card.maskedNum} cardInfo={card} />
                })
            }
        </Container>
    );
}

export default SavedCards;