import { CategoryTileContainer, BackgroundImage, TransBox, Title } from './category-tile.styles'
const CategoryTile = ({name}) => {
    return (
        <CategoryTileContainer to={`/products-list/${name}`}>
            <BackgroundImage name={name} />
            <TransBox></TransBox>
            <Title>{name}</Title>
        </CategoryTileContainer>
    )
}

export default CategoryTile;