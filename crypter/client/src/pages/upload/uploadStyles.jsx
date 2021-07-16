import { Link } from "react-router-dom";
import styled from "styled-components";

export const TitleContainer = styled.div`
    margin: 64px auto;
    width: 50%;
    text-align: center;
    h1{
        margin: 0 0 24px;
        font-size: 48px;
    }
    p{
        color: #777E91;
    }
    span{
        color: #000;
    }
`

export const StyledLink = styled(Link)`
    display: block;
    margin: 0 auto;
    background: ${props => props.type === 'Multiple' ? '#3772FF' : '#fff'};
    outline: none;
    border: none;
    padding: 12px 24px;
    color: ${props => props.type === 'Multiple' ? '#fff' : '#000'};
    border-radius: 24px;
    font-size: 16px;
    text-decoration: none;
    display: block;
    width: max-content;
    transition: 500ms ease-in-out;
`

export const CardContainer = styled.div`
    border-radius: 16px;
    width: max-content;
    margin: 0 8px 24px 0;
    transition: 300ms ease-in-out;
    padding: 24px 24px 48px;
    cursor: pointer;
    img{
        border-radius: 16px;
        margin-bottom: 16px;
    }
    &:hover{
        box-shadow: 0 3px 8px rgba(0,0,0,.3);
        transform: scale(1.008);
        transform-origin: top;
        ${StyledLink}{
            transform: translateY(8px);
        }
    }
`

export const CardsHolder = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 75%;
    margin: 0 auto;
`

export const Disclaimer = styled.p`
    text-align: center;
    margin: 64px 0 240px;
    color: #777e91;
`