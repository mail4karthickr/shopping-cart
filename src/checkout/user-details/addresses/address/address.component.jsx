import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    Container,
    AddressContainer, 
    UpdateAddressContainer,
    SetAsDefault, 
    BoldText,
    UpdateAddressButton
} from "./address.styles";
import { updateDefaultAddress, removeDefaultAddress } from '../addresses.slice';

const Address = ({address}) => {
    const { defaultAddress } = useSelector((store) => store.addresses);
    const dispatch = useDispatch();
    
    function updateDefaultAddressHandler() {
        if (defaultAddress.id !== address.id) {
            dispatch(updateDefaultAddress({address}));
        }
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
                        checked={ defaultAddress.id === address.id }
                        onChange={() => updateDefaultAddressHandler()}
                    />
                    Shipping address
                </label>
            </SetAsDefault>
        </Container>
    );
}

export default Address;