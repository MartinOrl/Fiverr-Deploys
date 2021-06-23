import styled from "styled-components";

export const PageContainer = styled.div`
    width: 80%;
    margin: 24px auto;
    display: flex;
    justify-content: space-between;
`

export const LocalNav = styled.div`
    width: 80%;
    margin: 24px auto;
`

export const MethodsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const ColumnDetails = styled.div`
    width: 60%;
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
`

export const Section = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 24px 0;
    border-bottom: 3px dotted grey;
    margin: 16px 0;
    flex-wrap: wrap;
    div{
        width: 90%;
        min-width: 240px;
    }
    h1{
        margin: 0;
        margin-bottom: 8px;

    }
    p{
        width: 60%;
    }
    label{
        margin-top: 4px;
        margin-left: 16px;
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
        }
    }
    h1{
        margin: 0;
        margin-bottom: 8px;
    }
`

export const Instructions = styled.div`
    margin: 40px 0 48px;
    box-sizing: border-box;
    border: 3px solid white;
    padding: 32px 24px 24px;
    width: 100%;
    background: #f4f7fc;
    border-radius: 16px;
    div{
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;
        h1{
            color: #432ba6;
            margin: 0;
            font-size: 1.5rem
        }
        p{
            border-radius: 50%;
            background: linear-gradient(45deg, #4136f1, #8743ff);
            background-size: 130%;
            margin: 0;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            color: white;
            transform-origin: center;
            transform: rotate(90deg);
            font-size: 1.4rem;
            cursor: pointer;
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
    }
    p:last-of-type{
        padding: 8px 24px;
        background: #4ec9db;
        color: black;
        width: max-content;
        font-weight: bold;
        border-radius: 16px;
    }
`