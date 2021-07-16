import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 24px;
    border-bottom: 2px solid #e6e8ec;
    margin-top: -48px;
    margin-bottom: 64px;
`

export const BackToHome = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 12px 24px;
    border-radius: 24px;
    border: 1px solid #e6e8ec;
    width: max-content;
    color: #23262f;
    transition: 250ms ease-in-out;
    img{
        margin-right: 16px;
        transform-origin: center;
        transform: rotate(180deg);
    }
    p{
        margin: 0;
    }
    &:hover{
        background: #23262f;
        color: #f1f7fc;
        border: 1px solid transparent;
        img{
            filter: brightness(100);
        }
    }
`

export const CurrentPath = styled.div`
    display: flex;
    align-items: center;
    img{
        margin: 0 32px;
        transform-origin: center;
        transform: rotate(-90deg) scale(1.2);
    }
    p{
        margin: 0;
        font-size: 18px;
        font-weight: 700;
        &:first-of-type{
            color: #777e91;
        }
    }
`