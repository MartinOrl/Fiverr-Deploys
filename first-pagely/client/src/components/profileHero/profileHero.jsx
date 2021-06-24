import React, { useState } from 'react'

import { Container, ProfilePicture, ImageBg, Address, NameShadow, SideMenu, SideImage } from './profileHeroStyles'

import copy from '../../assets/copy.png'
import warning from '../../assets/warning.png'
import share from '../../assets/share.png'
import friendAdd from '../../assets/friendAdd.png'

const ProfileHero = ({imgUrl, name, description, shortAddress, fullAddress}) => {
    const [active, setActive] = useState(false)
    const handleClick = () => {
        navigator.clipboard.writeText(fullAddress)
        setActive(true)

        setTimeout(() => {
            setActive(false)
        },300 )
    }
    return (
        <div>
            <Container>
                <ProfilePicture src={imgUrl} alt="profile" />
                <ImageBg />
                <SideMenu>
                    <SideImage>
                        <img src={friendAdd} alt="" />
                        <div></div>
                    </SideImage>
                    <SideImage>
                        <img src={share} alt="" />
                        <div></div>
                    </SideImage>
                    <SideImage>
                        <img src={warning} alt="" />
                        <div></div>
                    </SideImage>
                </SideMenu>
            </Container>
            <Container>
                <h1>{name}</h1>
                <p>{description}</p>
                <Address onClick={handleClick} active={active}  >{shortAddress}<span><img src={copy} alt="" /></span></Address>
                <NameShadow>{name}</NameShadow>
            </Container>
        </div>
    )
}

export default ProfileHero
