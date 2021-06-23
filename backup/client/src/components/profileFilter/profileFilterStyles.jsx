import styled from "styled-components";

export const Filter = styled.p`
    padding: 8px 32px;
    color: black;
    background: ${props => props.active ? 'linear-gradient(45deg, #8743ff, #4136f1)' : 'white'};
    color: ${props => props.active ? 'white' : 'black'};
    background-size: 130%;
    border-radius: 16px;
    box-shadow: 0 8px 15px rgba(0,0,0,.07);
    width: max-content;
    transition: 250ms ease-in-out;
    user-select: none;
`

export const FilterContainer = styled.div`
    position: relative;
    width: max-content;
    margin: 16px;
    cursor: pointer;
`

export const Count = styled.p`
    position: absolute;
    right: 0;
    top: -12px;
    padding: 2px 8px;
    background: #4c6fff;
    border-radius: 8px;
    font-size: 12px;
    color: white;
    user-select: none;
`