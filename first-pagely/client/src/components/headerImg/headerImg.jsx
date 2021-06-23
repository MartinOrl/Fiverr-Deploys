import React from 'react'
import styled from 'styled-components'

import headerBg from '../../assets/headerbg.png'


const Container = styled.div`
    width: 100%;
    height: 199px;
    @media screen and (max-width: 860px){
        height: 144px;
    }
`

const HeaderImg = () => {
    return (
        <Container >
            <img src={headerBg} alt="" style={{width: '100%', height:'100%'}} />
        </Container>
    )
}

export default HeaderImg
