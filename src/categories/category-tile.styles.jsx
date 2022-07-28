import styled from "styled-components";
import { Link } from 'react-router-dom';

export const CategoryTileContainer = styled(Link)`
    min-height: 150px;
    min-width: 200px;
    background-color: blue;
    cursor: pointer;
`

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-color: orange;
`;