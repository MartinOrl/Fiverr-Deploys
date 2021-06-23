import styled from "styled-components";

export const CardContainer = styled.div`
    padding: 24px 0;
    position: relative;
    background: white;
    border-radius: 16px;
    width: 580px;
    margin: 16px 24px;
    &>p:first-of-type{
        margin: 8px auto;
    }
    &>img{
        height: 300px;
        object-fit: contain;
        @media screen and (max-width: 780px){
            height: 220px;
        }
    }
    @media screen and (max-width: 780px){
        padding: 24px 0 40px;
        margin: 16px 0;
    }
    @media screen and (max-width: 640px){
        width: 80%;
        &>img{
            width: 100%;
            height: auto;
        }
        margin: 32px 0;
    }
`

export const CreateButton = styled.p`
    padding: 8px 48px;
    font-size: 16px;
    color: white;
    background: linear-gradient(45deg, #4136f1, #8743ff);
    background-size: 150%;
    border-radius: 32px;
    width: max-content;
    position: absolute;
    bottom: -32px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
`

