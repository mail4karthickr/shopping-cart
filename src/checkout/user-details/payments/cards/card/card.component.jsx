import React from "react";
import { CardImage, CardInfoContainer, CardTitle, CardTitleContainer, CheckBox, Container, CVVContainer, CVVInfo, CVVTextInput, ExpiryDate, InfoIcon, MaskedAccNumber, Name, RecommendedCardContainer, RecommendedText, SaveCardContainer, SaveCardText } from "./card.styles";
import { removeDefaultCard, updateDefaultCard } from '../../payments.slice';
import { useDispatch, useSelector } from "react-redux";
const Card = ({cardInfo}) => {
    const { defaultCard } = useSelector((store) => store.payments);
    const dispatch = useDispatch();
    
    function updateDefaultCardHandler() {
        if (defaultCard.id === cardInfo.id) {
            dispatch(removeDefaultCard());
        } else {
            dispatch(updateDefaultCard({card: cardInfo}));
        }
    }
    
    return (
        <Container>
            <input 
                type="radio" 
                checked={defaultCard.id === cardInfo.id} 
                onChange={() => updateDefaultCardHandler()} 
            />
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