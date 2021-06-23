import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    text-align: center;
    margin-top: 0;
    padding-top: 40px;
`

const HeadingText = styled.p`
    font-size: 1.4rem;
    width: 65%;
    margin: 16px auto;
    color: #808080;
    text-align: center;
    @media screen and (max-width: 540px){
        width: 90%;
    }
`

const PageHeading = ({title, text}) => {
    return (
        <div>
            <Title>{title}</Title>
            <HeadingText>{text}</HeadingText>
        </div>
    )
}

export default PageHeading
