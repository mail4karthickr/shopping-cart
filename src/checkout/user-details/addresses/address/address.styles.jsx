import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const UpdateAddressContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const UpdateAddressButton = styled.button`
    width: 50px;
    height: 20px;
    border: none;
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }
`

export const SetAsDefault = styled.div``

export const BoldText = styled.div`
    font-weight: bold;
`