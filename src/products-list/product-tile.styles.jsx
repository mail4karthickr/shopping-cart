import styled from 'styled-components';

export const ProductTileContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    height: 400px;
    background-color: cyan;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`

export const ProductImage = styled.div`
    width: 100%;
    height: 200px;
    background-repeat:no-repeat;
    background: ${({ imageUrl }) => `url(${imageUrl})`} center/cover;
`