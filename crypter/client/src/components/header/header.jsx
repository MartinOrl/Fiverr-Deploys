import React from 'react'

import { Logo, ComponentContainer, Separator, Row, StyledLink, InputContainer, StyledInput, SearchIcon, SpecialLink, Notification } from './headerStyles'

import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import bell from '../../assets/bell.png'

const Header = () => {
    return (
        <ComponentContainer>
            <Row align='center'>
                <StyledLink to='/' style={{margin: '0'}}><Logo src={logo} alt='' /></StyledLink>
                <Separator />
                <StyledLink to='' active="true">Discover</StyledLink>
                <StyledLink to=''>How it works</StyledLink>
            </Row>
            <Row align='center'>
                <InputContainer>
                    <StyledInput type='text' name='search' placeholder='Search' />
                    <SearchIcon src={search} alt='' />
                </InputContainer>
                <Notification>
                    <img src={bell} alt="" />
                    <span></span>
                </Notification>
                <SpecialLink to='/upload' color='#fff' background='#3772FF' >Upload</SpecialLink>
                <StyledLink to='/connectWallet' border="true" >Connect Wallet</StyledLink>

            </Row>
        </ComponentContainer>
    )
}

export default Header
