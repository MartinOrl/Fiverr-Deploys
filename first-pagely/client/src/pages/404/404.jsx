import React from 'react'
import styled from 'styled-components'
import image from '../../assets/404.png'
import { Link } from 'react-router-dom'
import HeaderImg from '../../components/headerImg/headerImg'

const Container = styled.div`
    margin: 96px auto;
    width: max-content;
    color: #432ba6;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    outline: none;
    background: none;
    border: 2px solid #432ba6;
    border-radius: 16px;
    padding: 16px 32px;
    color: #432ba6;
    margin: 16px auto;
    width: max-content;
    font-weight: bold;
    display: block;
`


const MissingPage = () => {
    return (
        <div>
            <HeaderImg  />
            <Container>
                <img src={image} alt="404, page not found, astronaut floating to space" />
                <h1>Ooops... Looks like you got lost.</h1>
                <StyledLink to='/'>Back To Homepage &gt;</StyledLink>
            </Container>

        </div>
    )
}

export default MissingPage
