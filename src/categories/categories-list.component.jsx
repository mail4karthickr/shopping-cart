import { Container } from "./categories-list.styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from './categories.slice';
import CategoryTile from './category-tile.component'
import React from "react";
import PageSpinner from "../common/components/page-spinner.component";

const CategoriesList = () => {
    const dispatch = useDispatch();
    const { items, isLoading } = useSelector((store) => store.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const Categories = () => {
        return items.map((item) => {
            return (<CategoryTile key={item} name={item} />);
        })
    }

    const Loader = () => {
        return (
            <PageSpinner message="Please wait..." />
        );
    }

    return (
        <Container>
            <Categories />
            {isLoading && <Loader />}
        </Container>
    );
}

export default CategoriesList;