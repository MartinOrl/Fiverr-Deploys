import React from 'react'

import { WalletContainer, Separator, ImageContainer, Shadow } from './walletCardStyles'

const WalletCard = ({imgUrl, title, text}) => {
    return (
        <WalletContainer>
            <ImageContainer>
                <img src={imgUrl} alt="" />
            </ImageContainer>
            <Separator></Separator>
            <h1>{title}</h1>
            <p>{text}</p>
            <Shadow />

        </WalletContainer>
    )
}

export default WalletCard
