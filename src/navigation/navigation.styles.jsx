import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: white;
    padding-right: 20px;
    position: sticky;
    top: 0;
`
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 100px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CartCount = styled.div`
    width: 100px;
    height: 100%;
`