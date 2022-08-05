import { 
    ProductTileContainer,
    InfoContainer,
    ProductImage, 
    Title, 
    Description, 
    Price, 
    Rating,
    AddToCart
} from './product-tile.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../cart/cart.slice';
 
const ProductTile = ({product}) => {
    const { id, title, price, description, image, rating } = product;
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart(product));
    };

    return (
        <ProductTileContainer>
            <ProductImage imageUrl={image} />
            <InfoContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Price>Price: {price}</Price>
                <Rating>Rating: {rating.rate}</Rating>
                <AddToCart onClick={() => addToCartHandler()}>Add To Cart</AddToCart>
            </InfoContainer>
        </ProductTileContainer>
    );
}

export default ProductTile;