import React, { useState } from 'react'

import { Container, ProfilePicture, ImageBg, Address, NameShadow } from './profileHeroStyles'

import copy from '../../assets/copy.png'

const ProfileHero = ({imgUrl, name, description, address}) => {
    const [active, setActive] = useState(false)
    const handleClick = () => {
        navigator.clipboard.writeText(address)
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
                <div>
                
                </div>
                </Container>
            <Container>
                <h1>{name}</h1>
                <p>{description}</p>
                <Address onClick={handleClick} active={active}  >{address}<span><img src={copy} alt="" /></span></Address>
                <NameShadow>{name}</NameShadow>
            </Container>
        </div>
    )
}

export default ProfileHero
