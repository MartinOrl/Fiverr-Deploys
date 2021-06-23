import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { NFTContainer, Image, InfoContainer, Name, Price, ActionButton, Likes, ActionContainer } from './nftStyles'

const NFTCard = ({imgUrl, name, price, likes, count}) => {
    const [liked, setLiked] = useState(false)
    const history = useHistory()
    return (
        <NFTContainer>
            <Image src={imgUrl} alt="" onClick={() => history.push('/nftItem')} />
            <InfoContainer>
                <Name>{name}</Name>
                <Price>From ~<span>{price}</span> {count}</Price>
                <ActionContainer>
                    <ActionButton>Place a bid</ActionButton>
                    <Likes liked={liked ? 'liked' : ''} onClick={() => setLiked(!liked)}><span><img src="https://i.imgur.com/jD1XOMM.png" alt="" liked={liked ? 'liked' : ''} /></span> {liked ? likes+1 : likes}</Likes>
                </ActionContainer>
            </InfoContainer>
        </NFTContainer>
    )
}

export default NFTCard
