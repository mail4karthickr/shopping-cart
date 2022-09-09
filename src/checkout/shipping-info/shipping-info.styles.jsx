import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    background-color: #03DAC6;
`

export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const PaymentInfoContainer = styled.div``

export const Text = styled.span``

export const BoldText = styled.span`
    font-weight: bold;
    font-size: 1rem;
`

export const MakePaymentButton = styled.button`
    border: none;
    outline: none;
    width: 200px;
    height: 50px;
    margin: auto;
    font-size: 1rem;
    background-color: #FF5C5C;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`
