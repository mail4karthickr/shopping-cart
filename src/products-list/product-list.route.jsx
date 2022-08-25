import React from 'react';
import { useParams } from 'react-router';
import ProductsList from './products-list.component';
import { Container } from './product-list.route.styles';

const ProductsListRoute = () => {
    const { id } = useParams();
    return (
        <Container>
            <ProductsList id={id} />
        </Container>
    );
}

export default ProductsListRoute;