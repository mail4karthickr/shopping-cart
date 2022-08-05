import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 25px;
    background-color: orange;
    position: sticky;
`
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 100px;
    background-color: cyan;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CartCount = styled.div`
    background-color: blue;
    width: 100px;
    height: 100%;
`