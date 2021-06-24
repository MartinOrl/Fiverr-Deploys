import styled from "styled-components";

export const PageContainer = styled.div`
    background: linear-gradient(0deg, rgba(250,251,251,0.001), rgb(237,244,255), rgba(250,251,251,.001) );
    &>img{
        position: absolute;
        top: 480px;
        left: -48px;
        filter: blur(8px)
    }
`

export const Container = styled.div`
    display: flex;
    margin: 16px auto 0;
    justify-content: space-between;
    width: 80%;
    @media screen and (max-width: 1240px){
        width: 90%;
        flex-direction: column;
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

export const ImageTitleContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    h1{
        color: #432ba9;
        margin: 0 16px;
        flex-grow: 2;
    }
    div{
        width: max-content;
        display: flex;
        &>img{
            margin-lefT: 16px;
            display: block;
            object-fit: contain;
        }
    }
`

export const SectionContainer = styled.div`
    margin: 24px;
    border-radius: 16px;
    position: relative;
    &:first-of-type{
        padding: 40px;
        background: #F4F7FC;
        border: 6px solid white;

        width: max-content;
        max-width: 60%;
        height: max-content;
        @media screen and (max-width: 1700px){
            width: 58%;
            &>img{
                width: 100%;
                height: auto;
            }
        }
        @media screen and (max-width: 1240px){
            width: 550px;
            box-sizing: border-box;
            margin: 16px auto;
            &>img{
                width: 100%;
                height: auto;
                box-sizing: border-box;
            }
        }
    }
    &>img:first-of-type{
        width: 100%;
        border-radius: 16px;
    }
    &>img:last-of-type{
        position: absolute;
        left: -48px;
        bottom: -96px;
        transform: scale(0.7);
    }
    &:last-of-type{
        &>div{
            background: linear-gradient(-135deg, #8743ff, #4136f1);
            background-size: 125%;
            padding: 24px;
            border-radius: 16px;
            width: 100%;
        }
        width: 33%;
        color: white;
        @media screen and (max-width: 1700px){
            width: 500px;
        
        }
        @media screen and (max-width: 1240px){
            width: 600px;
            margin: 16px auto;
        }
        @media screen and (max-width: 960px){
            width: 90%;
            margin: 16px auto;
            box-sizing: border-box;
        }
        

    }
`

export const SaleInfo = styled.p`
    width: 100%;
    text-align: center;
    padding: 8px 0;
    font-size: bold;
    background: #fff;
    color: black;
    border-radius: 16px;
    span{
        color: #432ba9;
    }
`

export const Tags = styled.div`
    display: flex;
    width: 100%;

    p{
        display: flex;
        align-items: center;
        background: linear-gradient(0deg, #61eef6, #44c6ce);
        padding: 8px 48px;
        border-radius: 24px;
        font-weight: bold;
        color: black;
        margin: 8px 16px 8px 0;
        span{
            margin-right: 8px;
        }
    }
`

export const Description = styled.p`
    height: max-content;
    width: 100%;
    @media screen and (max-width: 1700px){
        font-size: 1rem;
    }
`

export const CreatorInfo = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    &>div{
        width: 47%;
        border-radius: 64px;
        border: 1px solid rgba(0,0,0,.3);
        padding: 16px;
        box-sizing: border-box;
        display: flex;

        img{
            width: 56px;
            height: 56px;
            margin-right: 16px;
            border-radius: 50%;
            padding: 8px;
            box-sizing: border-box;
            background: white;
            box-shadow: 7px 7px 12px rgba(209,217,230,.9), -7px -7px 12px white;
        }
        p{
            margin: 0;
            &:last-of-type{
                margin-top: 4px;
                font-size: 1.3rem;
                font-weight: bold;
            }
        }
    }
`

export const CreatorDetails = styled.div`
    padding: 24px 16px;
    width: 100%;
    box-sizing: border-box;
    background: white;
    border-radius: 24px;
    color: black;
    &>p{
        text-align: center;
        span{
            margin-right: 8px;
        }
        margin-bottom: 0;
    }
`

export const BidContainer = styled.div`
    margin: 24px 0;
    font-size: 1.3rem;
    background: white !important;
    &>p:nth-of-type(2){
        width: 100%;
        padding: 8px 12px;
        background: #4523ce;
        box-sizing: border-box;
        border-radius: 16px;
        margin: 0px 0;
    }
    &>div:first-of-type{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    &>div:nth-of-type(2){
        color: #4523ce;
        h1{
            margin: 16px 0 0 0;
            font-size: 1.5rem;
        }
        p{
            box-sizing: border-box;
            padding: 8px 40px;
            background: linear-gradient(-135deg, #8743ff, #4136f1);
            background-size: 125%;
            width: max-content;
            border-radius: 16px;
            color: white;
            margin-top: 16px;
            cursor: pointer;
        }
    }
`

export const StyledInput = styled.input`
    width: 100%;
    outline: none;
    border: 1px solid white;
    background: #f4f7fc;
    box-shadow: 2px 4px 8px rgba(0,0,0,.15);
    padding: 16px 24px;
    box-sizing: border-box;
    display: block;
    margin: 8px 0 24px;
    border-radius: 16px;
    color: black;
    font-size: 16px;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    &:placeholder{
        font-family: Poppins, Roboto, 'Segoe UI'
    }
`

export const DropDown = styled.div`
    display: block !important;
    input{
        width: 100%;
        outline: none;
        border: 1px solid white;
        background: #7a3fe1;
        padding: 16px 24px;
        box-sizing: border-box;
        display: block;
        margin: 16px 0 8px;
        border-radius: 16px;
        color: white;
        font-size: 16px;
        -webkit-appearance: none;
        -moz-appearance: textfield;
        &:placeholder{
            font-family: Poppins, Roboto, 'Segoe UI'
        }
    }
`

export const ToggleableContainer = styled.div`
    border-radius: 16px;

    position: relative;
    margin: 64px 0 24px;

    &>div:last-of-type{
        background: linear-gradient(90deg, #8743ff, #4136f1);
        background-size: 120%;
        position: relative;
        z-index: 3;
        padding: 16px 16px;
        border-radius: 16px;
        border: 1px solid rgba(255,255,255,.8);
        box-sizing: border-box;
    }
    p{
        margin: 0;
    }
`

export const Toggles = styled.div`
    position: absolute;
    top: -32px;
    left: 16px;
    display: flex;
    width: 50%;
`

export const Toggle = styled.p`
    padding: 6px 16px;
    border-radius: 8px 8px 0 0;
    margin: 0 8px !important;
    background: ${props => props.active ? '#8743ff' : 'white'};
    position: relative;
    z-index: 1;
    color: ${props => props.active ? 'white' : 'black'};
    cursor: pointer;
    transition: 150ms ease-in-out;

`

export const Details = styled.div`
    display: flex;
    align-items: center;

    img{
        width: 48px;
        height: 48px;
        padding: 8px;
        background: white;
        border-radius: 50%;
        box-shadow: -5px -5px 13px #9076ff, 5px 5px 8px #3f2aa3;
        margin-right: 16px;
    }
`

export const Text = styled.p`
    text-decoration: ${props => props.decoration ? 'line-through' : 'none'};
`

export const InfoContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 16px 0;
    box-sizing: border-box;
    border-bottom: 2px dashed #b2a1ef;
    align-items: center;
    &:last-of-type{
        border-bottom: none;
    }
    &:first-of-type{
        padding-top: 0;
    }

    img{
        width: 48px;
        height: 48px;
        padding: 8px;
        background: white;
        border-radius: 50%;
        box-shadow: -5px -5px 13px #9076ff, 5px 5px 8px #3f2aa3;
        margin-right: 16px;
    }
    div{
        border: none;
        p{
            margin: 0 ;
        }
        p:last-of-type{
            opacity: 0.6;
        }
        
        &:last-of-type{
            padding: 0 !important;
            border: none !important;
        }
    }
`

export const Bids = styled.div`
    /* &>div{
        display: flex;
        width: 100%;
        padding: 16px 0;
        box-sizing: border-box;
        border-bottom: 2px dashed #b2a1ef;
        align-items: center;
        &:last-of-type{
            border-bottom: none;
        }
        img{
            width: 48px;
            height: 48px;
            padding: 8px;
            background: white;
            border-radius: 50%;
            box-shadow: -5px -5px 13px #9076ff, 5px 5px 8px #3f2aa3;
            margin-right: 16px;
        }
        div{
            border: none;
            p{
                margin: 0 ;
            }
            p:first-of-type{
                color: white;
                text-decoration: line-through;
                span{
                    color: black;
                }
            }
            p:last-of-type{
                opacity: 0.6;
                color: white;
            }
            &:first-of-type{
                p:first-of-type{
                    text-decoration: none;
                }
            }
            &:last-of-type{
                padding: 0 !important;
                border: none !important;
            }
        }
    } */
    p{
        color: white;
        span{
            color: black;
        }
    }
`
export const History = styled.div`
    p{
        color: #ca95ff;
        opacity: 1 !important;
        span{
            color: white;
        }
    }
`