import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 10px;
    padding: 10px;
    align-items: center;
`

export const CardInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const CardTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const CardTitle = styled.span``

export const MaskedAccNumber = styled.span``

export const ExpiryDate = styled.span``

export const CardImage = styled.div`
    width: 20px;
    height: 20px;
    background-size: cover;
    background-position: center;
    background-image: ${({ name }) => `url(../images/${name})`};
    position: relative;
`;

export const Name = styled.span``

export const CVVContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const CVVTextInput = styled.input`
    width: 100px;
    height: 25px;
`

export const CVVInfo = styled.span`
`

export const RecommendedCardContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
    gap: 10px;
    align-items: center;
`

export const RecommendedText = styled.div``

export const InfoIcon = styled.div`
    width: 20px;
    height: 20px;
    background-size: cover;
    background-position: center;
    background-image: url('../images/info.png')
`

export const SaveCardContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
    gap: 20px;
    align-items: center;
`

export const CheckBox = styled.input`
    width: 20px;
    height: 20px;
`

export const SaveCardText = styled.div``