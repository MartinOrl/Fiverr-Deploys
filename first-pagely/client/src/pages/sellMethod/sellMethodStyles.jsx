import styled from "styled-components";

export const PageContainer = styled.div`
    width: 80%;
    margin: 24px auto;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1140px){
        width: 90%;
    }
    @media screen and (max-width: 940px){
        flex-direction: column;
        justify-content: space-around;
        width: 70%;
    }
    @media screen and (max-width: 480px){
        width: 85%;
    }
`

export const LocalNav = styled.div`
    width: 80%;
    margin: 24px auto;

    &>div{
        display: flex;
        align-items: center;
        padding: 16px 8px;
        border-radius: 8px;
        border: 4px solid white;
        width: max-content;
        cursor: pointer;
        &>p{
            font-weight: bold;
        }
        img{
            object-fit: contain;
            margin: 0 16px;
            display: block;
        }
        h1, p{
            margin: 0;
        }
        p{
            color: #693EF9;
        }
        h1{
            font-size: 20px;
        }
    }

    @media screen and (max-width: 1140px){
        width: 90%;
    }
    @media screen and (max-width: 940px){
        width: 70%;
    }
`

export const MethodsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media screen and (max-width: 1140px){
        flex-wrap: wrap;
        justify-content: space-around;
        div{
            width: 45% !important;
            margin-bottom: 16px;
        }
    }
    @media screen and (max-width: 940px){
        div{
            width: 80% !important;
        }
    }
    @media screen and (max-width: 720px){
        div{
            width: 100% !important;
        }
    }
`

export const ColumnDetails = styled.div`
    width: 60%;
    padding: 16px 0;
    box-sizing: border-box;
    @media screen and (max-width: 1140px){
        width: 52%;
        &>h1{
            font-size: 1.85rem;
        }
    }
    @media screen and (max-width: 940px){
        width: 100% !important;
    }
`

export const Summary = styled.div`
    width: 35%;
    background: linear-gradient(45deg, #4136f1, #8743ff);
    background-size: 130%;
    box-sizing: border-box;
    padding: 16px 24px;
    border-radius: 16px;
    color: white;
    height: max-content;
    @media screen and (max-width: 1140px){
        width: 44%;
        h1{
            font-size: 1.85rem;
        }
    }
    @media screen and (max-width: 940px){
        width: 100% !important;
    }
`

export const Section = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 24px 0;
    border-bottom: 3px dotted grey;
    margin: 16px 0;
    flex-wrap: wrap;
    div{
        width: 75%;
        min-width: 240px;
    }
    h1{
        margin: 0;
        margin-bottom: 8px;
        @media screen and (max-width: 1140px){
            font-size: 1.6rem;
        }

    }
    p{
        width: 75%;
    }
    label{
        margin-top: 4px;
        margin-left: 16px;
    }
    @media screen and (max-width: 940px){
        div{
            width: 80% !important;
            p{
                width: 100%;
            }
        }
    }
`

export const SummarySection = styled.div`
    width: 100%;
    padding: 24px 0;
    margin: 16px 0;
    border-top: 3px dotted white;
    
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            margin: 0;
            margin-bottom: 8px;
            padding: 8px 24px;
            border-radius: 24px;
            background: white;
            color: black;
            cursor: pointer;
            @media screen and (max-width: 1140px){
                padding: 4px 24px;
                box-sizing: border-box;
            }
        }
    }
    h1{
        margin: 0;
        margin-bottom: 8px;
        @media screen and (max-width: 1140px){
            font-size: 1.6rem;
        }
    }
    
`

export const Instructions = styled.div`
    margin: 40px 0 48px;
    box-sizing: border-box;
    border: 3px solid white;
    padding: 0 24px 0;
    width: 100%;
    background: #f4f7fc;
    border-radius: 16px;
    max-height: ${props => props.collapse ? '400px' : '72px'};
    overflow: hidden;
    transition: 250ms ease-in-out;
    &>p{
        padding-bottom: 24px;
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        h1{
            color: #432ba6;
            margin: 0;
            font-size: 1.5rem
        }
        p{
            padding: 6px 14px;
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

`

export const Listening = styled.div`
    width: 100%;
    border-radius: 16px;
    margin: 16px 0 24px;
    background: white;
    position: relative;
    box-sizing: border-box;
    padding: 16px 24px;
    h1{
        font-size: 1.3rem;
        color: #422baa;
    }
    p:first-of-type{
        color: #407aff;
        margin: 8px 0;
       
        
        span{
            margin-top: 2px;
        }
    }
    p:last-of-type{
        padding: 8px 24px;
        background: #4ec9db;
        color: black;
        width: max-content;
        font-weight: bold;
        border-radius: 16px;
        @media screen and (max-width: 440px){
            font-size: 16px !important;
        }
    }
    @media screen and (max-width: 4400px){
        padding: 16px;
    }
`