import React from "react";
import { 
    IncrementButton, 
    StepperContainer, 
    Value,
    Divider,
    DecrementButton
} from "./stepper.styles";

export const Stepper = ({ value, incrBtnTapped, decrBtnTapped }) => {
    return (
        <StepperContainer>
            <IncrementButton onClick={() => incrBtnTapped()} />
            <Divider />
            <Value>{value}</Value>
            <Divider />
            <DecrementButton onClick={() => decrBtnTapped()} />
        </StepperContainer>
    );
}