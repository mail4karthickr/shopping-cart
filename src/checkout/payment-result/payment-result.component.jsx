import React from "react";
import { useNavigate } from "react-router";
import { 
    Container, 
    SuccessLottie, 
    ContinueShoppingButton 
} from "./payment-result.styles";
import SuccessAnimation from "./success.json";

const PaymentResult = () => {
    const navigate = useNavigate();

    const continueShoppingHandler = () => {
        navigate("/")
    }

    return (
        <Container>
            <SuccessLottie animationData={SuccessAnimation} loop={false} />
            <div>Your items will be delivered on 22/9/2022</div>
            <ContinueShoppingButton type="button" onClick={() => continueShoppingHandler()}>Continue Shopping</ContinueShoppingButton>
        </Container>
    );
}

export default PaymentResult;