import React from 'react';
import CategoriesList from './categories-list/categories-list.component';
import { Container } from './categories.route.styles';

const CategoriesRoute = () => {
    return(
        <Container>
            <CategoriesList />
        </Container>
    );
};

export default CategoriesRoute;