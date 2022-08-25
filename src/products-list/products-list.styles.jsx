import styled from 'styled-components';

export const ProductsListContainer = styled.div`
    justify-content: center;
    align-items: center;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
    column-gap: 10px;
    row-gap: 10px;
`