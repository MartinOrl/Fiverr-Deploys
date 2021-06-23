import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    border: 2px solid #432ba6;
    border-radius: 8px;
    width: ${props =>  `${95/props.count}%`};
    padding: 32px 0;
    font-weight: bold;
    background: ${props => props.active ? 'linear-gradient(45deg, #4136f1, #8743ff)' : 'transparent'};
    color: ${props => props.active ? 'white' : '#432ba6'};
    background-size: 130%;
    cursor: pointer;
    transition: 250ms ease-in-out;
    h1{
        margin: 0;
        margin-bottom: 8px;
        font-size: 1.5rem
    }
`

const SelectableContainer = ({children, count, active, action}) => {
    return (
        <StyledDiv count={count} active={active} onClick={action}>
            {children}
        </StyledDiv>
    )
}

export default SelectableContainer
