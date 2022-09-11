import { 
    ProductTileContainer,
    InfoContainer,
    ProductImage, 
    Title, 
    Price, 
    Rating,
    AddToCart,
    ProductQuantityStepper
} from './product-tile.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../cart/cart.slice';
import React, { useEffect, useState } from 'react';
import IntUtils from 'common/utils/IntUtils';
import QuantityStepper from '../../cart/cart-dropdown/quantity-stepper/quantity-stepper.component';
 
const ProductTile = ({product}) => {
    const { title, price, image, rating } = product;
    const dispatch = useDispatch();
    const { cartItems } = useSelector((store) => store.cart);
    const [itemInCart, setItemInCart] = useState(null);

    const addToCartHandler = () => {
        dispatch(addToCart(product));
    };

    useEffect(() => {
        const filteredCartItems = cartItems.filter((item) => item.item.id === product.id);
        if (filteredCartItems.length > 0) {
            const item = filteredCartItems[0];
            setItemInCart(item);
        } else {
            setItemInCart(null);
        }
    }, [cartItems])

    const AddToCartSection = () => {
        if (itemInCart !== null) {
            return (
                <ProductQuantityStepper>
                    <QuantityStepper cartItem={itemInCart} />
                </ProductQuantityStepper>
            );
        } else {
            return <AddToCart onClick={() => addToCartHandler()}>Add To Cart</AddToCart>
        }
    } 

    return (
        <ProductTileContainer>
            <ProductImage src={image}/>
            <InfoContainer>
                <Title>{title}</Title>
                <Price>{IntUtils.toUSD(price)}</Price>
                <Rating>Rating: {rating.rate}</Rating>
                <AddToCartSection />
            </InfoContainer>
        </ProductTileContainer>
    );
}

export default ProductTile;