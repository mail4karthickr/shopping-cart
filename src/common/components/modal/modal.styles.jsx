import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: absolute;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
`

export const Mask = styled.div`
    position: absolute;
    z-index: 200;
    background-color: black;
    opacity: 0.5;
    width: 100%;
    height: 100%;
`

export const Content = styled.div`
    position: absolute;
    z-index: 300;
`

export const Header = styled.div``

export const Body = styled.div``

export const Footer = styled.div``