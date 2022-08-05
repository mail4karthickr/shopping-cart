import styled from 'styled-components';

export const ProductTileContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 400px;
    background-color: cyan;
`

export const InfoContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
`
export const ProductImage = styled.div`
    width: 100%;
    height: 200px;
    background-repeat:no-repeat;
    background: ${({ imageUrl }) => `url(${imageUrl})`} center/cover;
`
export const Title = styled.div`
    width: 100%;
`

export const Description = styled.div`
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

export const Price = styled.span`
    font-weight: bold;
`

export const Rating = styled.div`
    font-weight: bold;
`
export const AddToCart = styled.button`
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`