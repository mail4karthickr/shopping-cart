import styled from "styled-components";
import Lottie from "lottie-react";

export const Container = styled.div`
    width: 500px;
    height: 600px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const SuccessLottie = styled(Lottie)`
    width: 40%;
    height: 40%;
`

export const ContinueShoppingButton = styled.button`
    border: none;
    outline: none;
    width: 200px;
    height: 50px;
    font-size: 1rem;
    background-color: #FF5C5C;
    color: #FFFFFF;
    cursor: pointer;
    margin-top: 40px;

    &:hover {
        opacity: 0.9;
    }
`