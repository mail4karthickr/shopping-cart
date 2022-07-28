import { ProductTileContainer, ProductImage } from './product-tile.styles';

const ProductTile = ({product}) => {
    const { id, title, price, description, image, rating } = product;
    return (
        <ProductTileContainer>
            <ProductImage imageUrl={image} />
        </ProductTileContainer>
    );
}

export default ProductTile;