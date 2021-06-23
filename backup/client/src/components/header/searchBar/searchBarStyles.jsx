import styled from "styled-components";

export const SearchIcon = styled.img`
    margin-left: 16px;
    transform-origin: center;
    transition: 150ms ease-in-out;
    display: block;
`

export const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 16px;
    box-shadow: 0px 0px 21px rgba(0,0,0,.07);
`

export const StyledInput = styled.input`
    border: none;
    outline: none;
    background: none;
    padding: 16px 8px;
    color: rgba(0,0,0,.5);
    transition: 250ms ease-in-out;
    width: 180px;
    &:hover, &:focus-within, &:focus{
        color: rgba(0,0,0,.8);
        ${SearchIcon}{
            transform: rotate(90deg);
        }
    }
`



export const SearchButton = styled.img`
    position: absolute;
    right: -16px;
    padding: 8px;
    background: linear-gradient(45deg, #4136f1, #8743ff);
    border-radius: 16px;
    box-shadow: 0 15px 30px rgba(20,102,204,.16);
    cursor: pointer;
`
