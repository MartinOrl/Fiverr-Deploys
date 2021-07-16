import React from 'react'

import { BackToHome, CurrentPath, Container } from './subNavigationStyles'

import arrow from '../../assets/arrow.png'
import chevron from '../../assets/chevron.png'

const SubNavigation = ({page}) => {
    return (
        <Container>
            <BackToHome to='/'>
                <img src={arrow} alt="" />
                <p>Back to homepage</p>
            </BackToHome>
            <CurrentPath>
                <p>Home</p>
                <img src={chevron} alt="" />
                <p>{page}</p>
            </CurrentPath>
        </Container>
    )
}

export default SubNavigation
