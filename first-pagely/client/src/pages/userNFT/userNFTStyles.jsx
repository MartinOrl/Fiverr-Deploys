import styled, {css} from 'styled-components';

const background = css`
    border: 6px solid white;
    border-radius: 16px;
    background: #f1f4f9;
    padding: 16px 24px;
    box-sizing: border-box;
`

export const ContentContainer = styled.div`
    width: 80%;
    margin: 32px auto;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 996px){
        flex-direction: column-reverse;
        width: 70%;
    }
    @media screen and (max-width: 640px){
        width: 90%;
    }
`

export const HeadingButtons = styled.div`
    width: 80%;
    justify-content: flex-end;
    display: flex;
    margin: 0 auto;
    p{
        padding: 8px 32px;
        background: linear-gradient(45deg, #8743ff, #4136f1);
        color: white;
        border-radius: 24px;
        margin: 16px 0 16px 24px;
        cursor: pointer;
    }
    @media screen and (max-width: 996px){
        width: 70%;
    }
    @media screen and (max-width: 640px){
        width: 90%;
    }
`

export const Imagecontainer = styled.div`
    ${background};
    margin-bottom: 32px;
    width: 100%;
    &>img{
        width: 100%;
    }

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        div{
            display: flex;
            align-items: center;
            &>img{
                width: 40px;
                object-fit: contain;
                margin-left: 16px;
                border-radius: 50%;
                box-shadow: 0 3px 8px rgba(0,0,0,.2);
 
                
            }
        }
        h1{
            color: #432ba6;
            @media screen and (max-width: 765px){
                font-size: 1.4rem;
            }
        }
        @media screen and (max-width: 350px){
            flex-direction: column;
            margin-bottom: 16px;
        }
    }

`

export const LeftSide = styled.div`
    width: 760px;
    @media screen and (max-width: 1850px){
        width: 55%;
    }
    @media screen and (max-width: 996px){
        width: 100%;
    }
`

export const RightSide = styled.div`
    width: 680px;
    @media screen and (max-width: 1850px){
        width: 40%;
    }
    @media screen and (max-width: 996px){
        width: 100%;
    }
    
`

export const Likes = styled.p`
    padding: 8px;
    background: ${props => props.liked ? '#8743ff' : '#f0e9ff'};
    color: ${props => props.liked ? 'white' : 'black'};
    margin: 0;
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
    min-width: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 150ms ease-in-out;
    img{
        filter: ${props => props.liked ? 'brightness(15)' : ''};
        transition: 150ms ease-in-out;
    }
`


export const Description = styled.div`
    ${background};
    color: #432ba6;
    &>p{
        padding: 8px 16px;
        border-radius: 16px;
        background: #eee9ff;
        width: max-content;
        box-sizing: border-box;
        color: #6a3df8;
        display: flex;
        span{
            border-radius: 50%;
            width: 24px;
            height: 24px;
            display: block;
            margin-right: 16px;
            img{
                width: 100%;
                object-fit: contain;
            }
        }
    }
`

export const Dropdown = styled.div`
    &>div:first-of-type{
        border-top: ${props => props.top ? 'none' : '1px solid rgba(0,0,0,.3)'};
        border-bottom: ${props => 
            props.collapse ? '1px solid rgba(0,0,0,.3)' : props.bottom ? '1px solid rgba(0,0,0,.3)' : '' 
        };

        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h1{
            margin: 0px;
            @media screen and (max-width: 1240px){
                font-size: 1.6rem;
            }
            @media screen and (max-width: 440px){
                font-size: 1.3rem;
            }
        }
        &>p:last-of-type{
            padding: 8px 16px;
            color: white;
            background: linear-gradient(45deg, #8743ff, #4136f1);
            width: max-content;
            border-radius: 50%;
            font-weight: bold;
            transform-origin: center;
            user-select: none;
            transition: 150ms ease-in-out;
            cursor: pointer;
            z-index: 1;
            position: relative;
            transform: ${props => props.collapse ? 'rotate(270deg)' : 'rotate(90deg)'}
        }
    }
    &>div:last-of-type{
        max-height: ${props => props.collapse ? '400px' : '0'};
        transition: 250ms ease-in-out;
        overflow: hidden;
        color: #3f3e5e;
        p{
            text-align: center;
        }
        img{
            margin: 24px auto;
            display: block;
        }
    }
`

export const SpecialToggle = styled.p`
    padding: 8px 24px;
    border-radius: 8px;
    border: 2px solid #1565D8;
    color: #1565D8;
    width: max-content;
    display: flex;
    align-items: center;
    font-weight: bold;
    span{
        margin-left: 8px;
        transform-origin: center;
        transform: rotate(90deg);
        display: block;
        font-weight: bold;
    }
`

export const RightHeading = styled.div`
    &>div:first-of-type{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    &>div>div>img{
        margin-left: 8px;
        cursor: pointer;
    }
    p{
        color: #432ba6;
        margin: 0;
        font-size: 1.3rem
    }
    h1{
        margin: 0px 0;
    }
    &>div:last-of-type{
        display: flex;
        margin-top: 16px;
        p{
            padding: 8px 16px;
            border-radius: 16px;
            background: #eee9ff;
            width: max-content;
            box-sizing: border-box;
            color: #6a3df8;
            display: flex;
            align-items: center;
            margin-right: 16px;
            font-size: 1rem;
            span{
                border-radius: 50%;
                width: 24px;
                height: 24px;
                display: block;
                margin-right: 8px;
                
            }
        }
    }
`

export const PriceContainer = styled.div`
margin: 32px 0;
   &>div{
       ${background};
       margin: 0 0 32px;
   }
`