import React, { useState } from 'react'

import { Logo, HeaderContainer, HowItWorks, CustomButton, HeaderBG, Burger, Collapsible } from './headerStyles'
import SearchBar from './searchBar/searchBar'

import logoImage from '../../assets/logo.png'
import { useHistory } from 'react-router-dom'

function Header() {
    const [collapse, setCollapse] = useState(false)
    const history = useHistory()
    return (
        <HeaderBG>
            <HeaderContainer collapse={collapse}>
                <div>
                    <Logo src={logoImage} onClick={() => history.push('/')} />
                    <SearchBar />
                </div>
                <div>
                    <Burger onClick={() => setCollapse(!collapse)}><span></span><span></span><span></span></Burger>
                    <Collapsible collapse={collapse}>
                        <p onClick={() => history.push('/about')}>About Us</p>
                        <p onClick={() => history.push('/profile')}>My Items</p>
                        <HowItWorks>
                            <p>How it works</p>
                            <p>White paper</p>
                        </HowItWorks>
                        <CustomButton onClick={() => history.push('/createCollectible')}>Create</CustomButton>
                        <CustomButton onClick={() => history.push('/connectWallet')}>Connect Wallet</CustomButton>
                    </Collapsible>
                </div>
            </HeaderContainer>
        </HeaderBG>
    )
}

export default Header
