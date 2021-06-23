import React from 'react'
import { Logo } from '../header/headerStyles'

import { FooterTitle, StyledFooterLink, RowContainer, FooterContainer, FooterContent, LinkColumn, LogoText, Copyright } from './footerStyles'

import logoImg from '../../assets/logo.png'
import bgImg from '../../assets/footerBG.png'
import copyright from '../../assets/copyright.png'

const Footer = () => {
    return (
        <FooterContainer bgImg={bgImg}>
            <FooterContent>
                <RowContainer wrap="true">
                    <div>
                        <Logo src={logoImg} />
                        <LogoText>Build a modern and creative website with crealand</LogoText>
                        <div id="social">
                        </div>
                    </div>
                    <RowContainer rowWrap="true">
                        <LinkColumn>
                            <FooterTitle>Product</FooterTitle>
                            <StyledFooterLink to='/'>Home</StyledFooterLink>
                            <StyledFooterLink to='/'>Features</StyledFooterLink>
                            <StyledFooterLink to='/'>Documentation</StyledFooterLink>
                            <StyledFooterLink to='/'>Refferal Program</StyledFooterLink>
                            <StyledFooterLink to='/'>Pricing</StyledFooterLink>
                        </LinkColumn>
                        <LinkColumn>
                            <FooterTitle>Services</FooterTitle>
                            <StyledFooterLink to='/'>Documentation</StyledFooterLink>
                            <StyledFooterLink to='/'>Design</StyledFooterLink>
                            <StyledFooterLink to='/'>Themes</StyledFooterLink>
                            <StyledFooterLink to='/'>Illustrations</StyledFooterLink>
                            <StyledFooterLink to='/'>UI Kit</StyledFooterLink>
                        </LinkColumn>
                        <LinkColumn>
                            <FooterTitle>Company</FooterTitle>
                            <StyledFooterLink to='/about'>About</StyledFooterLink>
                            <StyledFooterLink to='/'>Terms</StyledFooterLink>
                            <StyledFooterLink to='/'>Privacy Policy</StyledFooterLink>
                            <StyledFooterLink to='/'>Careers</StyledFooterLink>
                        </LinkColumn>
                        <LinkColumn>
                            <FooterTitle>More</FooterTitle>
                            <StyledFooterLink to='/'>Documentation</StyledFooterLink>
                            <StyledFooterLink to='/'>License</StyledFooterLink>
                            <StyledFooterLink to='/'>Changelog</StyledFooterLink>
                        </LinkColumn>
                    </RowContainer>
                </RowContainer>
                <Copyright>
                    <img src={copyright} alt="" />
                    <p>Copyright © 2021</p>
                </Copyright>
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer
