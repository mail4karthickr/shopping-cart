import PaymentResult from "checkout/payment-result/payment-result.component";
import Modal from "common/components/modal/modal.component";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, AddressContainer, Text, BoldText, MakePaymentButton } from './shipping-info.styles';
import { clearCart } from '../../cart/cart.slice';
const ShippingInfo = () => {
    const dispatch = useDispatch();
    const { defaultAddress } = useSelector((store) => store.addresses);
    const { defaultCard } = useSelector((store) => store.payments);
    const { formattedAmount } = useSelector((store) => store.cart);
    const [makePayment, setMakePayment] = useState(false);

    const makePaymentHandler = () => {
        setMakePayment(true)
        dispatch(clearCart());
    }

    return (
        <Container>
            {makePayment && 
                <Modal onClose={() => setMakePayment(false)}>
                    <PaymentResult />
                </Modal>
            }
            <AddressContainer>
                <BoldText>Shipping Address</BoldText>
                <Text>{defaultAddress.fullname}</Text>
                <Text>{defaultAddress.mobnumber}</Text>
                <Text>{defaultAddress.flat}</Text>
                <Text>{defaultAddress.area}</Text>
                <Text>{defaultAddress.landmark}</Text>
                <Text>{defaultAddress.town}</Text>
                <Text>{`${defaultAddress.state} - ${defaultAddress.pincode}`}</Text>
            </AddressContainer>
            <AddressContainer>
                <BoldText>Payment</BoldText>
                <Text>{defaultCard.cardHolderName}</Text>
                <Text>{defaultCard.cardTitle}</Text>
                <Text>{defaultCard.maskedNum}</Text>
                <Text>{defaultCard.expiry}</Text>
            </AddressContainer>
            <BoldText>{`Total - ${formattedAmount}`}</BoldText>
            <MakePaymentButton onClick={() => makePaymentHandler()}>Make Payment</MakePaymentButton>
        </Container>
    );
}

export default ShippingInfo;