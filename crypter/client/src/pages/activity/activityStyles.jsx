import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    &>div:first-of-type{
        flex-grow: 2;
        max-width: 60%
    }
`

export const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    *{
        width: max-content;
    }
    h1{
        font-size: 48px;
        margin: 0;
    }
    p{
        padding: 8px 20px;
        border-radius: 24px;
        border: 1px solid #e6e8ec;
        transition: 150ms ease-in-out;
        cursor: pointer;
        &:hover{
            background: #353945;
            color: #e6e8ec;
        }
    }
`

export const ActivityFilters = styled.div`
    display: flex;
    margin: 16px 0 32px;
`

export const ActivityFilter = styled.p`
    margin: 0 16px 0 0;
    padding: 4px 16px;
    border-radius: 16px;
    transition: 250ms ease-in-out;
    background: ${props => props.activeActivity ? '#353945' : 'transparent'};
    color: ${props => props.activeActivity ? '#e6e8ec' : '#777e90'};
    cursor: pointer;
    &:hover{
        color: ${props => props.activeActivity ? '#e6e8ec' : '#12141c'}
    }
`

export const Filter = styled.div`
    display: flex;
    margin: 16px 0;
    align-items: center;
    input{
        margin-right: 16px;
        padding: 8px;
    }
    p{
        margin: 0 0 0 8px;
        padding-top: 8px;
    }
`

export const SelectionToggle = styled.p`
    color: ${props => props.selector ? '#e6e8ec' : '#777e90'};
    padding: 8px 24px;
    border-radius: 24px;
    transition: 300ms ease-in-out;
    margin: 24px 16px;
    cursor: pointer;
    user-select: none;
    background: ${props => props.selector ? '#353945' : 'transparent'};
    &:hover{
        color: ${props => props.selector ? '#e6e8ec' : '#12141c'}
    }
`

export const Checkmark = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    font-size: 22px;
    user-select: none;
    margin-bottom: 16px;
    
    
    input{
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        
    }
    span{
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
        border-radius: 4px;
        transition: 150ms ease-in-out;
    }
    &:hover input ~ span{
        background-color: #ccc;
    }
    input:checked ~ span{
        background: #3772ff;
    }
    span:after{
        content: "";
        position: absolute;
        display: none;
    }
    input:checked ~ span:after{
        display: block
    }
    span:after{
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`

export const FiltersContainer = styled.div`
    padding: 16px 40px;
    border-radius: 24px;
    border: 1px solid #e6e8ec;
`