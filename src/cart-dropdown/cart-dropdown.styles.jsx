import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
    width: 340px;
    height: 440px;
    display: flex;
    flex-direction: column;
    background-color: cyan;
    justify-content: space-between;
    position: absolute;
    z-index: 1000;
    top: 43px;
    right: 40px;
    background-color: white;
`;

export const Divider = styled.div`
    height: 100%;
    width: 100%;
    background-color: darkGray;
`
export const DividerContainer = styled.div`
    height: 1px;
    width: 100%;
    background-color: #e9eaec;
`

export const CartItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    /* margin-bottom: 10px; */
`

export const CartItemContainer = styled.div``

export const NoCartItemsContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
`

export const NoCartMessage1 = styled.span``

export const NoCartMessage2 = styled.span``