import styled from "styled-components";

export const HeroBackground = styled.img`
    height: 680px;
    width: 100%;
    object-fit: cover;
    position: relative;
    z-index: -1;
`

export const Container = styled.div`
    width: 80%;
    margin: 32px auto 96px;
    @media screen and (max-width: 960px){
        margin: 64px auto;
    }
    h1{
        margin: 8px 0;
    }
`

export const OverflowContainer = styled.div`
    width: 100%;
    overflow-x: scroll;
`

export const RowContainer = styled.div`
    display: flex;
    flex-wrap: ${props => props.wrap ? 'wrap' : ''};
    width: ${props => props.overflow ? 'max-content' : props.width ? props.width : ''};
    margin: 16px auto;

    justify-content: ${props => props.justify};
    @media screen and (max-width: 940px){
        width: ${props => props.overflowable ? 'max-content' : props.width ? props.width : ''};
        flex-wrap: ${props => props.overflowable ? 'nowrap' : 'wrap'};
    }
    @media screen and (max-width: 922px){
        width: max-content;
        flex-direction: ${props => props.nft ? 'column' : 'row'}
    }

`

export const Toggles = styled.div`
    width: max-content;
    margin: 16px auto 48px;
    display: flex;
    p{
        background: linear-gradient(45deg, #8743ff, #4136f1);
        padding: 8px 16px;
        color: white;
        cursor: pointer;
        border-radius: 50%;
        margin: 8px 16px;
    }
`

export const NameShadow = styled.h1`
    position: absolute;
    top: -56px;
    font-size: 56px;
    opacity: 0.075;
    color: #1d5e6d;
    left: 50%;
    transform: translateX(-50%);
`

export const SectionName = styled.div`
    position: relative;
    width: max-content;
    h1{
        width: max-content;
        margin: 16px 0 8px;
    }
    margin: 24px auto;
`


export const LoadMore = styled.p`
    width: max-content;
    margin: 24px auto;
    padding: 12px 40px;
    border: 2px solid #1565d8;
    color: #1565d8;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: 250ms ease-in-out;
    span{
        margin-left: 16px;
        display: block;
    }
    &:hover{
        background: #1565d8;
        color: white;
        span{
            filter: brightness(48)
        }
    }
`

export const CollectionPreview = styled.div`
    width: 300px;
    border-radius: 16px;
    position: relative;
    padding: 24px 24px 32px;
    box-sizing: border-box;
    background: white;
    margin: 16px;
    &>img{
        width: 100%;
        height: 204px;
        border-radius: 16px;
        margin-bottom: 16px;
        object-fit: cover;
    }
    &>div:first-of-type{
        display: flex;
        justify-content: space-between;
        width: 100%;
        backdrop-filter: blur(6px);
        img{
            width: 30%;
            height: 64px;
            border-radius: 8px;
        }
    }
    &>div:nth-of-type(2){
        width: 95%;
        margin: 0 auto;
        position: absolute;
        bottom: -8px;
        z-index: -1;
        background: rgba(255,255,255,.5);
        border-radius: 16px;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
    }
    &>div:last-of-type{
        width: 105%;
        height: 100%;
        background: #e2e5e9;
        filter: blur(64px);
        position: absolute;
        z-index: -2;
        bottom: -8px;
        left: 0;
    }
`

export const Seller = styled.div`
    width: 190px;
    display: flex;
    cursor: pointer;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    flex-direction: column;
    background: white;
    border-radius: 16px;
    margin: 0 16px;
    padding: 16px 0;
    text-align: center;
    img{
        border-radius: 50%;
        margin-bottom: 16px;
    }  
    h1{
        color: black;
        font-size: 1.1rem;
        margin: 0;
    }
    p{
        color: #5039f4;
        margin: 0;
    }
`

export const LiveAuction = styled.div`
    width: 294px;
    padding: 16px 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: white;
    border-radius: 24px;
    margin: 16px 24px 16px 0;
    div:first-of-type{
        display: flex;
        justify-content: space-between;

        img{
            width: 100%;
            object-fit: cover;
            height: 220px;
        }
    }
    div:last-of-type{
        position: relative;
        border-radius: 16px;
        &>img{
            border-radius: 16px;
        }
    }
    h1{
        margin: 8px 0;
        font-size: 1.3rem
    }
    p{
        margin: 8px;
    }
    &>span{
        width: 48px;
        background: #0fd2d5;
        height: 2px;
        margin: 8px auto;
    }

    p:nth-of-type(2){
        padding: 8px 24px;
        color: #8042fe;
        font-weight: bold;
        box-sizing: border-box;
        border: 2px solid #8042fe;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span{
            display: block;
            margin-left: 16px;
        }
    }
    p:last-of-type{
        color: #583bf6;
    }
`

