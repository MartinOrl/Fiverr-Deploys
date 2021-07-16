import styled, { keyframes } from "styled-components";

const appear = keyframes`
    0%{
        max-height: 0;
    }
    100%{
        max-height: 100vh;
    }
`

const itemAppear = keyframes`
    0%{
        opacity: 0;
        transform: translateY(32px);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
    }
`


export const GlobalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.6);
`

export const Container = styled.div`
    padding: 32px;
    border-radius: 24px;
    background: white;
    position: absolute;
    box-sizing: border-box;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    width: 460px;
    overflow: hidden;
    animation: ${appear} 650ms ease-in-out forwards;
    &>*{
        opacity: 0;
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
        animation: ${itemAppear} 800ms ease-in-out forwards;
        animation-delay: 300ms;
        h3{
            padding: 8px 16px;
            border-radius: 50%;
            border: 1px solid #e6e8ec;
        }
    }
    h3{
        margin: 0;
        animation: ${itemAppear} 800ms ease-in-out forwards;
        animation-delay: 350ms;
    }
    h2{
        animation: ${itemAppear} 800ms ease-in-out forwards;
        animation-delay: 350ms;
    }
    h1{
        color: #23262f;
        font-size: 32px;
        margin: 0;

    }
    p:first-of-type{
        color: #777e90;
        line-height: 24px;
        font-size: 16px;
        margin-bottom: 40px;
        animation: ${itemAppear} 800ms ease-in-out forwards;
        animation-delay: 350ms;
    }
`

export const Button = styled.p`
    color: ${props => props.type === 'cancel' ? '#23262f' : '#fcfcfd'};
    border: ${props => props.type === 'cancel' ? '1px solid #e6e8ec' : '1px solid transparent'};
    background: ${props => props.type === 'burn' ? '#ef466f' : props.type === 'cancel' ? 'transparent' : '#3772ff' };
    width: 100%;
    margin: 8px 0;
    text-align: center;
    font-family: 'DM Sans', 'Poppins', sans-serif;
    font-weight: 700;
    padding: 12px 0;
    border-radius: 32px;
    cursor: pointer;
    transition: 250ms ease-in-out;
    animation: ${itemAppear} 800ms ease-in-out forwards;
    animation-delay: 400ms;
    &:hover{
        background: ${props => props.type === 'burn' ? '#941a38' : props.type === 'cancel' ? '#23262f' : '#123b9d' };
        color: ${props => props.type === 'cancel' ? '#fcfcfd' : '#fcfcfd'};
    }
`

export const StyledInput = styled.input`
    padding: 8px 0;

    color: #23262f;
    transition: 250ms ease-in-out;
    width: 100%;
    outline: none;
    margin: 8px 0 32px;
    border: none;
    border-bottom: 1px solid #e6e8ec;
    font-weight: 500;
    font-size: 16px;
    animation: ${itemAppear} 800ms ease-in-out forwards;
    animation-delay: 415ms;
    font-family: 'Poppins', 'DM Sans', sans-serif;
    &::placeholder{
        color: #777e90;
    }
`

export const StyledTextArea = styled.textarea`
    width: 100%;
    padding: 12px 16px;
    box-sizing: border-box;
    border: 1px solid #e6e8ec;
    border-radius: 16px;
    max-width: 100%;
    min-width: 100%;
    max-height: 96px;
    min-height: 96px;
    font-family: 'Poppins', 'DM Sans', sans-serif;
    margin-bottom: 32px;
    animation: ${itemAppear} 800ms ease-in-out forwards;
    animation-delay: 415ms;
`

export const Label = styled.label`
    display: block;
    margin: -8px 0 8px;
    color: #b1b5c3;
    font-size: 14px;
    font-weight: 700;
    animation: ${itemAppear} 800ms ease-in-out forwards;
    animation-delay: 415ms;
`