import React from 'react'

import { Container, Row, ProfilePic, ImageContainer, Rank, Text, Images } from './popularSellerStyles'

import diamond from '../../assets/diamond.png'
import profile from '../../assets/profilePictureSmall.png'
import trophy from '../../assets/trophy.png'
import add from '../../assets/add.png'
import arrow from '../../assets/arrow.png'

const PopularSeller = ({rank, imgUrl, name, amount}) => {
    return (
        <Container>
            <Row>
                <Rank>
                    <img src={trophy} alt="" />
                    <p>#{rank}</p>
                </Rank>
                <Images>
                    <img src={add} alt="" />
                    <img src={arrow} alt="" />
                </Images>
            </Row>
            <ImageContainer>
                <ProfilePic src={profile} alt="" />
                <img src={diamond} alt="" />
            </ImageContainer>
            <Text>
                <h1>{name}</h1>
                <p>{amount} <span>ETH</span></p>
            </Text>
        </Container>
    )
}

export default PopularSeller
