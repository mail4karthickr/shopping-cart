import styled from "styled-components";
import { Link } from 'react-router-dom';

const images = {
    'electronics': 'electronics.jpg',
    'jewelery': 'jewelery.jpg',
    'men\'s clothing': 'mens-clothing.jpg',
    'women\'s clothing': 'womens-clothing.jpg'
}

export const TransBox = styled.div`
    background-color: black;
    opacity: 0.2;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({ name }) => `url(../images/${images[name]})`};
    position: relative;
`;

export const Title = styled.div`
    color: #fff;
    position: absolute;
    width: 100%;
    height: 100%; 
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    text-align: center;
`;

export const CategoryTileContainer = styled(Link)`
    min-width: 200px;
    min-height: 150px;
    cursor: pointer;
    position: relative;

    &:hover ${TransBox} {
        opacity: 0.4;
    }
`