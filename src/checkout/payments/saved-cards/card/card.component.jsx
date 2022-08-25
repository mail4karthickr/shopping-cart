import React from "react";
import { CardImage, CardInfo, CardInfoContainer, CardTitle, CardTitleContainer, CheckBox, Container, CVVContainer, CVVInfo, CVVTextInput, ExpiryDate, InfoIcon, MaskedAccNumber, Name, RecommendedCardContainer, RecommendedText, SaveCardContainer, SaveCardText } from "./card.styles";

const Card = ({cardInfo}) => {
    return (
        <Container>
            <input type="radio" checked={cardInfo.default} />
            <CardInfoContainer>
                <CardTitleContainer>
                    <CardTitle>{cardInfo.cardTitle}</CardTitle>
                    <MaskedAccNumber>{cardInfo.maskedNum}</MaskedAccNumber>
                    <CardImage name="visa.png" />
                </CardTitleContainer>
                <Name>{cardInfo.cardHolderName}</Name>
                <ExpiryDate>{cardInfo.expiry}</ExpiryDate>
                <CVVContainer>
                    <CVVTextInput type="text" />
                    <CVVInfo>Whats is CVV?</CVVInfo>
                </CVVContainer>
                <RecommendedCardContainer>
                    <InfoIcon />
                    <RecommendedText>This card is recommended for you <span>Why?</span> </RecommendedText>
                </RecommendedCardContainer>
                <SaveCardContainer>
                    <CheckBox type="checkbox" name="group" />
                    <SaveCardText>Save Card as per new RBI guidelines</SaveCardText>
                </SaveCardContainer>
            </CardInfoContainer>
        </Container>
    );
}

export default Card;