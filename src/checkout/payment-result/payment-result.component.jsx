import React from "react";
import { Container, SuccessLottie } from "./payment-result.styles";
import SuccessAnimation from "./success.json";

const PaymentResult = () => {
    return (
        <Container>
            <SuccessLottie animationData={SuccessAnimation} loop={false} />
        </Container>
    );
}

export default PaymentResult;