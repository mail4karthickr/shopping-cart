import PaymentResult from "checkout/payment-result/payment-result.component";
import Modal from "common/components/modal/modal.component";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Container, AddressContainer, Text, BoldText, MakePaymentButton } from './shipping-info.styles';

const ShippingInfo = () => {
    const { defaultAddress } = useSelector((store) => store.addresses);
    const { defaultCard } = useSelector((store) => store.payments);
    const { formattedAmount } = useSelector((store) => store.cart);
    const [makePayment, setMakePayment] = useState(false);

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
            <MakePaymentButton onClick={() => setMakePayment(true)}>Make Payment</MakePaymentButton>
        </Container>
    );
}

export default ShippingInfo;