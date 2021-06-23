import styled from "styled-components";

export const WalletCards = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 80%;
    margin: 24px auto;
    position: relative;
    &>img{
        position: absolute;
        bottom: 360px;
        right: -16px;
    }
`

export const Disclaimer = styled.p`
    font-size: 1.4rem;
    color: #808080;
    margin: 96px auto 64px;
    width: 75%;
    text-align: center;
`

export const Container = styled.div`
    background: white;
    padding-bottom: 40px;
    &>div:nth-of-type(2){
        width: 60%;
        margin: 24px auto 48px;
        position: relative;
        img{
            position: absolute;
        }
        img:first-of-type{
            right: -144px;
            bottom: -24px;
        }
        img:last-of-type{
            left: -280px;
            bottom: -80px;
            transform: scale(0.6)
        }
        @media screen and (max-width: 996px){
            width: 80%;
        }
    }
`