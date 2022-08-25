import styled from "styled-components";

export const CartCountContainer = styled.div`
    position: relative;
    width: 50px;
    display: flex;
    justify-content: center;
    cursor: pointer;
`

export const Bag = styled.div`
    width: 32px;
    height: 32px;
    background-size: cover;
    background-position: center;
    background-image: url('../images/bag.png');
    position: relative;
`

export const Circle = styled.div`
    width: 22px;
    height: 22px;
    line-height: 22px;
    background: #e9eaec;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
    font-size: 15px;
`