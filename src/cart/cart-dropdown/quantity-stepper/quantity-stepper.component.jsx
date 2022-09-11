import { Stepper } from '../../../common/components/stepper/stepper.component';
import React from 'react';
import {
    Container,
    Amount
} from './quantity-stepper.styles';
import { decrease, increase } from '../../cart.slice';
import { useDispatch } from 'react-redux';

const QuantityStepper = ({cartItem}) => {
    const { quantity, formattedAmount } = cartItem;
    const dispatch = useDispatch();

    const incrBtnTappedHandler = () => {
        console.log('IncrBtnTapped handler');
        dispatch(increase(cartItem));
    }

    const decrBtnTappedHandler = () => {
        console.log('decrBtnTappedHandler handler');
        dispatch(decrease(cartItem));
    }
    return (
        <Container>
            <Stepper 
                value={quantity} 
                incrBtnTapped={incrBtnTappedHandler} 
                decrBtnTapped={decrBtnTappedHandler}
            />
            <Amount>{formattedAmount}</Amount>
        </Container>
    );
}

export default QuantityStepper;