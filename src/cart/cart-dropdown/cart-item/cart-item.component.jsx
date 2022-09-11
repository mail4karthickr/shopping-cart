import QuantityStepper from '../quantity-stepper/quantity-stepper.component';
import React from 'react';
import { 
    ImageContainer, 
    CartItemContainer,
    ItemImage,
    Title
} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
    const { item } = cartItem;

    return (
        <CartItemContainer>
            <ImageContainer>
                <ItemImage src={item.image}/>
                <Title>{item.title}</Title>
            </ImageContainer>
            <QuantityStepper cartItem={cartItem} />
        </CartItemContainer>
    );
}

export default CartItem;