import styled from "styled-components";


export const Option = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    width: max-content;
    cursor: pointer;
    img{
        margin-right: 16px;
        height: 20px;
        filter: ${props => props.active ? 'brightness(0)' : ''};
        transition: 250ms ease-in-out;
    }
    p{
        margin: 0;
        color: ${props => props.active ? '#23262f' : '#777e90'};
        transition: 250ms ease-in-out;
    }
`

export const Heading = styled.div`
    margin-bottom: 48px;
    p{
        margin: 0;
    }
    p:first-of-type{
        font-weight: 700;
        color: #777e90;
        max-width: max-content;
    }
    h1{
        font-size: 40px;
        margin: 0px 0 12px;
        color: #23262f;
        max-width: max-content;
    }
    p:last-of-type{
        max-width: 578px;
        span{
            color: #3772ff;
        }
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &>div{
        width: 55%;
    }
    &>div:first-of-type{
        min-width: 240px;
        width: 40%;
    }
`

export const QuestionContainer = styled.div`
    width: 100%;
    max-height: ${props => props.collapse ? '600px' : '32px'};
    overflow: hidden;
    transition: max-height 400ms cubic-bezier(0.42, 0, 0.39, 0.85);
    padding: 24px 0;
    border-top: 1px solid #e6e8ec;
    border-bottom: 1px solid #e6e8ec;
    h1{
        font-size: 20px;
        font-weight: 500;
        cursor: pointer;
        user-select: none;
        margin: 0;
    }
    p:last-of-type{
        padding: 8px 16px;
        border-radius: 16px;
        border: 2px solid #e6e8ec;
        max-width: max-content;
    }
    div:first-of-type{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 32px;
    }
    img{
        transition: 400ms cubic-bezier(0.42, 0, 0.39, 0.85);
        transform: ${props => props.collapse ? 'rotate(180deg)' : 'rotate(0deg)'}
    }
`