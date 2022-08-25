import React from 'react';
import { 
    Container,
    AddressContainer, 
    UpdateAddressContainer,
    SetAsDefault, 
    BoldText,
    UpdateAddressButton
} from "./address.styles";

const Address = ({address}) => {

    function updateDefaultAddress() {
    
    }

    return (
        <Container>
            <AddressContainer>
                <BoldText>{address.fullname}</BoldText>
                <BoldText>{address.mobnumber}</BoldText>
                <div>{address.flat}</div>
                <div>{address.landmark}</div>
                <div>{address.area}</div>
                <div>{address.town}</div>
                <div>{address.state}-{address.pincode}</div>
            </AddressContainer>
            <UpdateAddressContainer>
                <UpdateAddressButton>Edit</UpdateAddressButton>
                <UpdateAddressButton>Delete</UpdateAddressButton>
            </UpdateAddressContainer>
            <SetAsDefault>
                <label>
                    <input 
                        type="checkbox"
                        checked={true}
                        onChange={() => updateDefaultAddress()}
                    />
                    Set as default
                </label>
            </SetAsDefault>
        </Container>
    );
}

export default Address;