import React from 'react'

import PageHeading from '../../components/pageHeading/pageHeading'

import { WalletCards, Disclaimer, Container } from './connectWalletStyles'

import WalletCard from '../../components/walletCard/walletCard'
import HeaderImg from '../../components/headerImg/headerImg'

import { walletsData } from '../../testData'

import patch from '../../assets/patch.png'
import cube from '../../assets/cube.png'
import plane from '../../assets/plane.png'

const ConnectWallet = () => {
    return (
        <Container>
            <HeaderImg />
            <div>
                <PageHeading title='Connect your wallet' text='Connect with one of avaliable wallet providers or create a new wallet. What is a wallet?' />
                <img src={patch} alt="" />
                <img src={cube} alt="" />
            </div>
            <WalletCards>
            {
                walletsData.map(data => (
                    <WalletCard key={data.id} imgUrl={data.imgUrl} title={data.title} text={data.text} />
                ))
            }
                <img src={plane} alt="" />
            </WalletCards>

            <Disclaimer>We do not own your private keys and cannot access your funds without your confirmation.</Disclaimer>


        </Container>
    )
}

export default ConnectWallet
