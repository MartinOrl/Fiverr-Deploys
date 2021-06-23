import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    background: #EDF4FF;
    padding-bottom: 64px;
`

export const HeadingContainer = styled.div`
    background: white;
    padding: 0 0 32px;
    border-radius: 0 0 50% 50%;
    position: relative;
    &>img{
        position: absolute;
        right: 96px;
        bottom: 32px;
    }
    @media screen and (max-width: 780px){
        border-radius: 0 0 35% 35%;
    }
`

export const Title = styled.h1`

`



export const Disclaimer = styled.p`
    font-size: 1.4rem;
    color: #808080;
    margin: 96px auto 0;
    width: 60%;
`

export const CardHolder = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 75%;
    margin: 32px auto;
    position: relative;
    &>img{
        position: absolute;
        right: 0;
        bottom: -48px;
        transform: scale(0.8);
    }
`