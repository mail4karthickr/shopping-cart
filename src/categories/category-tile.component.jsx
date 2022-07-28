import { CategoryTileContainer, BackgroundImage } from './category-tile.styles'
const CategoryTile = ({name}) => {
    return (
        <CategoryTileContainer to={`/products-list/${name}`}>{name}</CategoryTileContainer>
    )
}

export default CategoryTile;