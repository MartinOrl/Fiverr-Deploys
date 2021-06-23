import styled from "styled-components";

export const WalletContainer = styled.div`
    width: 415px;
    text-align: center;
    background: white;
    border-radius: 16px;
    padding: 48px 16px;
    box-sizing: border-box;
    margin: 16px 16px 48px;
    position: relative;
    transition: 250ms ease-in-out;
    cursor: pointer;
    box-shadow: 0 0 80px #e3e9f1;
    img{
        margin: 0 auto 32px;
    }
    *{
        position: relative;
        z-index: 5;
    }
    &:hover{
        transform: scale(1.02);
    }
`

export const Separator = styled.span`
    display: block;
    margin: 16px auto;
    width: 48px;
    height: 2px;
    background: #40a0f0;
    border-radius: 4px;
`

export const ImageContainer = styled.div`
    height: 104px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 460px){
        height: 64px;
        img{
            height: 100%;
        }
    }
`

export const Shadow = styled.div`
    position: absolute;
    z-index: 0;
    width: 80%;
    height: 80px;
    background: #fff;
    opacity: 0.5;
    border-radius: 24px;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
`