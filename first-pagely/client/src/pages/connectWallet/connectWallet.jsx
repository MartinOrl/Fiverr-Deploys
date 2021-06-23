import React from 'react'

import PageHeading from '../../components/pageHeading/pageHeading'

import { WalletCards, Disclaimer } from './connectWalletStyles'

import WalletCard from '../../components/walletCard/walletCard'
import HeaderImg from '../../components/headerImg/headerImg'

import { walletsData } from '../../testData'

const ConnectWallet = () => {
    return (
        <div>
            <HeaderImg />
            <div>
                <PageHeading title='Connect your wallet' text='Connect with one of avaliable wallet providers or create a new wallet. What is a wallet?' />
            </div>
            <WalletCards>
            {
                walletsData.map(data => (
                    <WalletCard key={data.id} imgUrl={data.imgUrl} title={data.title} text={data.text} />
                ))
            }
            </WalletCards>

            <Disclaimer>We do not own your private keys and cannot access your funds without your confirmation.</Disclaimer>


        </div>
    )
}

export default ConnectWallet
