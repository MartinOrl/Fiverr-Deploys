import React, { useState } from 'react'

import { Wallet, Row, SideImage, Arrow, ScanContainer, ScanImage } from './connectWalletStyles'

import wallet from '../../assets/wallet.png'
import image from '../../assets/walletConnect.png'
import arrow from '../../assets/arrow.png'
import tick from '../../assets/tick.png'
import barcode from '../../assets/barcode.png'

const ScanSection = () => {
    return(
        <ScanContainer>
            <h1>Scan to connect</h1>
            <p>Powered by UI8.Wallet</p>
            <ScanImage>
                <div>
                    <img src={barcode} alt="" />
                </div>
            </ScanImage>
            <p>Don't have a wallet app?</p>
        </ScanContainer>
    )
}

const ToS = () => {
    return(
        <ScanContainer>
            <h1></h1>
            <p>Please take a few minutes to read and understand <span>Stacks Terms of Service.</span> To continue, you'll need to accept the terms of services by checking the boxes</p>
            <img src={image} alt="" />
            <form action="">
                <input type="checkbox" name="consent" id="consent" />
                <label htmlFor="consent">I am at least 13 years old</label>
            </form>
        </ScanContainer>
    )
}

const ConnectWallet = () => {
    const [walletOption, setWallet] = useState('')

    const checkType = (type) => {
        console.log(type)
        if(walletOption === type){
            setWallet('')
        }
        else{
            setWallet(type)
        }
        return walletOption === type
    }


    return (
        <div>
            <Row align='center'>
                <Arrow src={arrow} alt="" />
                <h1>Connect your Wallet</h1>
            </Row>
            <Row justify='space-between' minHeight='620px'>
                <div>
                    <Wallet background='#9757D7' option={walletOption === 'formatic'} onClick={() => checkType('formatic')} >
                        <img src={wallet} alt="" />
                        <img src={tick} alt="" />
                        <p>Formatic</p>
                    </Wallet>
                    <Wallet background='#3772FF' option={walletOption === 'coinbase'} onClick={() => checkType('coinbase')} >
                        <img src={wallet} alt="" />
                        <img src={tick} alt="" />
                        <p>Coinbase Wallet</p>
                    </Wallet>
                    <Wallet background='#45B26B' option={walletOption === 'myether'} onClick={() => checkType('myether')} >
                        <img src={wallet} alt="" />
                        <img src={tick} alt="" />
                        <p>MyEther Wallet</p>
                    </Wallet>
                    <Wallet background='#EF466F' option={walletOption === 'wallet'} onClick={() => checkType('wallet')} >
                        <img src={wallet} alt="" />
                        <img src={tick} alt="" />
                        <p>Wallet Connect</p>
                    </Wallet>
                </div>
                {
                    walletOption ? <ScanSection /> : (<div><SideImage src={image} alt="" /></div>)
                }
            </Row>
        </div>
    )
}

export default ConnectWallet
