import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './products-list.slice';
import ProductTile from './product-tile.component';
import { ProductsListContainer } from './products-list.styles';
import React from 'react';

const ProductsList = ({id}) => {
    const dispatch = useDispatch();
    const { products, isLoading } = useSelector((store) => store.productsList);

    useEffect(() => {
        dispatch(getProducts(id));
    }, []);

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <ProductsListContainer> 
            {
                products.map((product) => {
                    return <ProductTile key={product.id} product={product} />
                })
            }
         </ProductsListContainer>
    );
}

export default ProductsList;