import { Container } from "./categories-list.styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from './categories.slice';
import CategoryTile from './category-tile.component'

const CategoriesList = () => {
    const dispatch = useDispatch();
    const { items, isLoading } = useSelector((store) => store.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <Container>
            {
                items.map((item) => {
                    return (<CategoryTile key={item} name={item} />);
                })
            }
        </Container>
    );
}

export default CategoriesList;