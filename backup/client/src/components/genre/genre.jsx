import React, { useState } from 'react'
import styled from 'styled-components'

const GenreContainer = styled.div`
    padding: 8px 40px;
    background: ${props => props.active ? '#2a1e46' : '#645587'};
    color: white;
    border-radius: 12px;
    margin: 12px;
    width: max-content;
    white-space: nowrap;
    cursor: pointer;
    transition: 250ms ease-in-out;

`

const Genre = ({name, action}) => {
    const [active, setActive] = useState(false)
    return (
        <GenreContainer active={active} onClick={() => {setActive(!active); action()}}>
            <p>{name}</p>
        </GenreContainer>
    )
}

export default Genre
