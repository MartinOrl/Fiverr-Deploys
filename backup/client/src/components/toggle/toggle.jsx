import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
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
    z-index: 5;
    position: relative;
    transform: ${props => props.dropdown ? '' : props.collapse ? 'rotate(270deg)' : 'rotate(90deg)' };
`

const Toggle = ({content, dropdown}) => {
    return (
        <Text dropdown={dropdown} >{content}</Text>
    )
}

export default Toggle
