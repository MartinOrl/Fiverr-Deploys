import React from 'react'
import styled, {keyframes} from 'styled-components'

import HeaderImg from '../headerImg/headerImg'

const wave = keyframes`
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
`

const appear = keyframes`
    0%{
        max-width: 300px;
    }
    35%{
        max-width: 0px;
    }
    50%{
        max-width: 0px;
    }
    85%{
        max-width: 300px;
    }
    100%{
        max-width: 300px;
    }

`

const Container = styled.div`
    width: max-content;
    margin: 96px auto 16px;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    counter-reset: waves;
`

const Warning = styled.div`
    width: 300px !important;
    font-size: 1.7rem;
    margin: 16px auto;
    overflow: hidden;
    white-space: nowrap;
    animation: ${appear} 5s infinite ease-in-out;
`

const Wave = styled.div`
    width: 5px;
    height: 100px;
    background: linear-gradient(45deg, #4136f1, #8743ff);
    background-size: 130%;
    margin: 10px 16px;
    animation: ${wave} 1.5s infinite ease-in-out;
    border-radius: 20px;
    counter-increment: waves;
    &:nth-of-type(1){
        animation-delay: 0.1s;
    };
    &:nth-of-type(2){
        animation-delay: 0.2s;
    };
    &:nth-of-type(3){
        animation-delay: 0.3s;
    };
    &:nth-of-type(4){
        animation-delay: 0.4s;
    };
    &:nth-of-type(5){
        animation-delay: 0.5s;
    };
    &:nth-of-type(6){
        animation-delay: 0.6s;
    };
    &:nth-of-type(7){
        animation-delay: 0.7s;
    };
    &:nth-of-type(8){
        animation-delay: 0.8s;
    };
    &:nth-of-type(9){
        animation-delay: 0.9s;
    };
    &:nth-of-type(10){
        animation-delay: 1s;
    };
`

const Fallback = () => {
    return (
        <div>
            <HeaderImg />
            <Container>
                <Wave></Wave>
                <Wave></Wave>
                <Wave></Wave>
                <Wave></Wave>
                <Wave></Wave>
                <Wave></Wave>
                <Wave></Wave>
                <Wave></Wave>
                <Wave></Wave>
                <Wave></Wave>
            </Container>
            <Warning>Loading ... Please Wait</Warning>
        </div>
    )
}

export default Fallback
