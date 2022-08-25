import styled from 'styled-components';

export const StepperContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    height: 25px;
    background-color: transparent;
    padding: 3px 5px;
    border: 1px solid rgba(137,142,140, 0.6);
`

export const Divider = styled.div`
    padding: 0px;
    margin: 0px;
    width: 1px;
    height: 100%;
    border-right: 1px solid rgba(137,142,140, 1);
`

export const IncrementButton = styled.button`
    background: url('../images/plus-sign.png');
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    border: none;
    cursor: pointer;
    opacity: 1;

    &:hover {
        opacity: 0.7;
    }
`

export const DecrementButton = styled.button`
    background: url('../images/minus-sign.png');
    background-repeat: no-repeat;
    width: 15px;
    height: 18px;
    border: none;
    cursor: pointer;
    opacity: 1;

    &:hover {
        opacity: 0.7;
    }
`

export const Value = styled.div`
    font-size: 1.1rem;
`