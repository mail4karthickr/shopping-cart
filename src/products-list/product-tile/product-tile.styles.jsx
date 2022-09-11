import styled from 'styled-components';

export const ProductTileContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 450px;
    background-color: #F5F5F5;
`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 10px;
    gap: 3px;
    height: 100%;
`
export const ProductImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: top;
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
    font-size: 1.1rem;
`

export const Rating = styled.div`
    font-weight: bold;
`
export const AddToCart = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    height: 30px;

    &:hover {
        font-weight: bold;
    }
`
export const ProductQuantityStepper = styled.div`
    margin-top: auto;
`