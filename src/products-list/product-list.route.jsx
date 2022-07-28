import { useParams } from 'react-router';
import ProductsList from './products-list.component';

const ProductsListRoute = () => {
    const { id } = useParams();

    return <ProductsList id={id} />
}

export default ProductsListRoute;