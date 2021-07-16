import React, { useState } from 'react'

import { Logo, Heading, StyledLink, InputContainer, StyledInput, SendButton, Row, Description, Copyright, AcceptButton, NewsletterText } from './footerStyles'

import logo from '../../assets/logo.png'
import arrow from '../../assets/arrow.png'


const Footer = () => {
    const [clicked, setClicked] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleClick = () => {
        setClicked(true)
        setTimeout(() => {
            setClicked(false)
        },290)
    }

    return (
        <div style={{marginTop: '96px'}}>
            <Row>
                <div style={{marginRight: '144px'}}>
                    <Logo src={logo} alt="" />
                    <Description>The New Creative Economy.</Description>
                </div>
                <div>
                    <Heading>Crypter.</Heading>
                    <StyledLink to=''>Discover</StyledLink>
                    <StyledLink to='/connectWallet'>Connect Wallet</StyledLink>
                    <StyledLink to=''>Create Item</StyledLink>
                </div>
                <div>
                    <Heading>Info</Heading>
                    <StyledLink to=''>Download</StyledLink>
                    <StyledLink to=''>Demos</StyledLink>
                    <StyledLink to='/faq'>Support</StyledLink>
                </div>
                <div>
                    <Heading>Join Newsletter</Heading>
                    <NewsletterText>Subscribe our newsletter to get more free design course and resource</NewsletterText>
                    <InputContainer onSubmit={handleSubmit}>
                        <StyledInput type="email" name="email" id="email" placeholder='Enter your email' />
                        <SendButton clicked={clicked} onClick={() => handleClick()} ><img src={arrow} alt="arrow" /></SendButton>
                    </InputContainer>
                </div>

            </Row>
            <Row margin='48px 0 16px 0'>
                <Copyright>Copyright © 2021 UI8 LLC. All rights reserved</Copyright>
                <Row align='center'>
                    <p>We use cookies for better service.</p>
                    <AcceptButton to="#">Accept</AcceptButton>
                </Row>
            </Row>
        </div>
    )
}

export default Footer
