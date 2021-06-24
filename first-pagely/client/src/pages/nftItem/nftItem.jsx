import React, {useState} from 'react'

import { DropDown, Likes, Text, InfoContainer, PageContainer, Container, ImageTitleContainer, SectionContainer, Bids, History , SaleInfo, Details, Tags, Toggle, ToggleableContainer, Toggles, Description, CreatorDetails, CreatorInfo, BidContainer } from './nftItemStyles'
import HeaderImg from '../../components/headerImg/headerImg'
import rainbow from '../../assets/rainbow.png'
import profile from '../../assets/profilePic.png'
import flame from '../../assets/flame.png'
import ball from '../../assets/ball.png'
import cone from '../../assets/cone.png'
import dots from '../../assets/dots.png'
import { useParams } from 'react-router-dom'
import { nftsData } from '../../testData'

const NFTDetails = () => {
    return(
        <Details>
            <img src={profile} alt="" />
            <p>Official NFTFY Collection</p>
        </Details>
    )
}

const NFTBids = ({bids, bonus}) => {
    const date = new Date()
    return(
        <Bids>
            {
                bonus > 0
                ?
                (
                    <InfoContainer>
                        <img src={profile} alt="" />
                        <div>
                            <Text>{bonus} wETH <span>by</span> You</Text>
                            <p>{`${date.getDate()}.${date.getMonth() +1}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`}</p>
                        
                        </div>
                    </InfoContainer>
                )
                :
                ''
            }
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
    const [liked, setLiked] = useState(false)
    const [collapse, setCollapse] = useState(false)
    const [bid, setBid] = useState(0)
    const [inputVal, setInputVal] = useState('')
    const {id} = useParams()
    const [data, setData] = useState(() => {
        console.log(nftsData.filter(item => item.id == id)[0])
        return nftsData.filter(item => item.id === id)[0]
    }) 
    
    const action = () => {
        setBid(inputVal);
        setCollapse(false)
    }

    return (
        data ?
        <PageContainer>
            <HeaderImg />
            <img src={cone} alt="" />
            <Container>
                <SectionContainer>
                    <ImageTitleContainer>
                        <h1>{data.name}</h1>
                        <div>
                            <Likes liked={liked ? 'liked' : ''} onClick={() => setLiked(!liked)}><span><img src="https://i.imgur.com/jD1XOMM.png" alt="" liked={liked ? 'liked' : ''} /></span> {liked ? data.likes+1 : data.likes}</Likes>
                            <img src={dots} alt="" />
                        </div>
                    <div>
                    
                    </div>
                    </ImageTitleContainer>
                    <img src={data.imgUrl} alt="" />
                    <img src={ball} alt="" />
                </SectionContainer>
                <SectionContainer>    
                    <div>
                        <h1>{data.name}</h1>
                        <SaleInfo>Not For Sale - Highest Bid <span>{data.price} wETH</span></SaleInfo>
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
                                        <p>{data.creator}</p>
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
                                filter === 'details' ? <NFTDetails /> : filter === 'bids' ? <NFTBids bids=''  bonus={bid} /> : <NFTHistory />
                            }
                            
                        </ToggleableContainer>
                    </div>
                    <BidContainer>
                        <p>{bid > 0 ? bid : data.price} wETH <strong>$10.46</strong> for 1 edition</p>
                        <p>Highest bid by 
                        {bid > 0 ? <strong> You</strong> : <strong>0xc58a44dea...f0b8</strong> }
                        </p>
                        {
                            !collapse
                            ?
                            (
                                <div>
                                    <p onClick={() => setCollapse(true)}>Place a bid</p>
                                    <p>Share</p>
                                </div>
                            )
                            :
                            (
                                <DropDown>
                                    <input type='number' value={inputVal} placeholder='Your Bid (min 0.001)' min={0.001} onChange={(e) => setInputVal(e.target.value)} />
                                    <p onClick={() => inputVal > 0 ? action() : ''}>Submit</p>
                                </DropDown>
                            )
                        }

                    </BidContainer>
                </SectionContainer>  
                
            </Container>
        </PageContainer>
        : ''
    )
}

export default NFTItem
