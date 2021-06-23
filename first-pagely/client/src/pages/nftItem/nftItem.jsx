import React, {useState} from 'react'

import {Text, InfoContainer, PageContainer, Container, ImageTitleContainer, SectionContainer, Bids, History , SaleInfo, Details, Tags, Toggle, ToggleableContainer, Toggles, Description, CreatorDetails, CreatorInfo, BidContainer } from './nftItemStyles'
import HeaderImg from '../../components/headerImg/headerImg'
import itemImage from '../../assets/itemImage.png'
import rainbow from '../../assets/rainbow.png'
import profile from '../../assets/profilePic.png'
import flame from '../../assets/flame.png'

const NFTDetails = () => {
    return(
        <Details>
            <img src={profile} alt="" />
            <p>Official NFTFY Collection</p>
        </Details>
    )
}

const NFTBids = ({bids}) => {
    return(
        <Bids>
            <InfoContainer>
                <img src={profile} alt="" />
                <div>
                    <Text>0.004 wETH <span>by</span> 0xc58a44dea...f0b8</Text>
                    <p>30.5.2021, 16:15</p>
                
                </div>

            </InfoContainer>
            <InfoContainer>
                <img src={profile} alt="" />
                <div>
                    <Text decoration="true" >0.004 wETH <span>by</span> Official NFTFY Collection</Text>
                    <p>30.5.2021, 16:15</p>
                
                </div>

            </InfoContainer>
            <InfoContainer>
                <img src={profile} alt="" />
                <div>
                    <Text decoration="true" >0.004 wETH <span>by</span> HC1</Text>
                    <p>30.5.2021, 16:15</p>
                
                </div>

            </InfoContainer>
        </Bids>
    )
}

const NFTHistory = ({history}) => {
    return(
        <History>
            <InfoContainer>
                <img src={profile} alt="" />
                <div>
                    <Text >Bid <span>accepted 0.025 wETH</span></Text>
                    <p>by <span>Official NFTFY Collection</span> at 30.05.2021, 20:05</p>
                </div>
            </InfoContainer>
            <InfoContainer>
                <img src={profile} alt="" />
                <div>
                    <Text >Bid <span>accepted 0.025 wETH</span></Text>
                    <p>by <span>Official NFTFY Collection</span> at 30.05.2021, 20:05</p>
                </div>
            </InfoContainer>
            <InfoContainer>
                <img src={profile} alt="" />
                <div>
                    <Text >Bid <span>accepted 0.025 wETH</span></Text>
                    <p>by <span>Official NFTFY Collection</span> at 30.05.2021, 20:05</p>
                </div>
            </InfoContainer>
        </History>
    )
}

const NFTItem = () => {
    const [filter, setFilter ] = useState('details')
    return (
        <PageContainer>
            <HeaderImg />
            <Container>
                <SectionContainer>
                    <ImageTitleContainer>
                        <h1>The Abandoned Church</h1>
                        <div>
                        </div>
                    <div>
                    
                    </div>
                    </ImageTitleContainer>
                    <img src={itemImage} alt="" />
                </SectionContainer>
                <SectionContainer>    
                    <div>
                        <h1>The Abandoned Church</h1>
                        <SaleInfo>Not For Sale - Highest Bid <span>0.004 wETH</span></SaleInfo>
                        <Tags>
                            <p><span><img src={rainbow} alt="" /></span> Art</p>
                            <p>Unlockable</p>
                        </Tags>
                        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt distinctio asperiores cumque doloribus culpa consectetur sapiente nam! Quisquam nulla sed at blanditiis a! Delectus veritatis molestiae officiis harum aut. Ducimus rem, molestias distinctio veritatis doloribus a cum vitae quibusdam soluta ad? Ipsum, debitis alias.</Description>
                        <CreatorDetails>
                            <CreatorInfo>
                                <div>
                                    <img src={profile} alt="" />
                                    <div>
                                        <p>Creator</p>
                                        <p>Deftroy</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={profile} alt="" />
                                    <div>
                                        <p>Collection</p>
                                        <p>Pagely</p>
                                    </div>
                                </div>
                            </CreatorInfo>
                            <p><span><img src={flame} alt="" /></span>14% of sales will go to creator</p>
                        </CreatorDetails>
                        <ToggleableContainer>
                            <Toggles>
                                <Toggle active={filter === 'details'} onClick={() => setFilter('details')} >Details</Toggle>
                                <Toggle active={filter === 'bids'} onClick={() => setFilter('bids')} >Bids</Toggle>
                                <Toggle active={filter === 'history'} onClick={() => setFilter('history')} >History</Toggle>
                            </Toggles>
                            {
                                filter === 'details' ? <NFTDetails /> : filter === 'bids' ? <NFTBids bids='' /> : <NFTHistory />
                            }
                            
                        </ToggleableContainer>
                    </div>
                    <BidContainer>
                        <p>0.004 wETH <strong>$10.46</strong> for 1 edition</p>
                        <p>Highest bid by <strong>0xc58a44dea...f0b8</strong> </p>
                        <div>
                            <p>Place a bid</p>
                            <p>Share</p>
                        </div>
                    </BidContainer>
                </SectionContainer>  
                
            </Container>
        </PageContainer>
    )
}

export default NFTItem
