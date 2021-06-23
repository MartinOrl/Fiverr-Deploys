import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
    padding: 72px 0 32px;
    background-image: ${props => `url(${props.bgImg})`};
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (max-width: 920px){
        padding-top: 48px;
        width: 100%;
    }
`
export const FooterContent = styled.div`
    width: 80%;
    margin: 0 auto;
    @media screen and (max-width: 1154px){
        width: 90%;
    }
`

export const FooterTitle = styled.h1`
    font-size: 18px;
    font-weight: bold;
    color: white;
`

export const StyledFooterLink = styled(Link)`
    text-decoration: none;
    outline: none;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: regular;
    display: block;
    box-sizing: border-box;
    padding: 8px 0;
    margin: 8px 0;

`



export const LinkColumn = styled.div`
    margin: 8px 24px;
`

export const LogoText = styled.p`
    color: white;
    font-size: 16px;
    width: 240px;
    margin: 8px 0;
`

export const Copyright = styled.div`
    width: max-content;
    margin: 48px auto 0;
    color: white;
    display: flex;
    flex-direction: column;
    &>p{
        margin-top: 0;
    }
`

export const RowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1154px){
        flex-direction: ${props => props.wrap ? 'column' : 'row'};
        &>div:first-of-type{
            margin: ${props => props.wrap ? '24px auto' : ''};
            text-align: ${props => props.wrap ? 'center' : ''};
            img{
                margin: ${props => props.wrap ? '16px auto' : ''};
                display: block;
            }
        }
    }
    @media screen and (max-width: 780px){
        flex-wrap: ${props => props.rowWrap ? 'wrap' : 'nowrap'}
    }
    @media screen and (max-width: 380px){
        ${LinkColumn}{
            width: 100%;
            text-align: center;
        }
    }
`