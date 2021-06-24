import React, {useState} from 'react'

import { StyledInput, DropDown, Likes, Text, InfoContainer, PageContainer, Container, ImageTitleContainer, SectionContainer, Bids, History , SaleInfo, Details, Tags, Toggle, ToggleableContainer, Toggles, Description, CreatorDetails, CreatorInfo, BidContainer } from './unlistedStyles'
import HeaderImg from '../../components/headerImg/headerImg'
import SelectableContainer from '../../components/selectableContainer/selectableContainer'

import rainbow from '../../assets/rainbow.png'
import profile from '../../assets/profilePic.png'
import flame from '../../assets/flame.png'
import ball from '../../assets/ball.png'
import cone from '../../assets/cone.png'
import dots from '../../assets/dots.png'
import priceTag from '../../assets/priceTag.png'
import clock from '../../assets/clock.png'
import { useHistory, useParams } from 'react-router-dom'
import { myProfile } from '../../testData'


const UnlistedItem = () => {
    const [liked, setLiked] = useState(false)
    const [tab, setTab] = useState('')
 
    const {id} = useParams()
    const history = useHistory()
    const [data, setData] = useState(() => {
        console.log(myProfile.unlisted.filter(item => item.id == id)[0])
        return myProfile.unlisted.filter(item => item.id === id)[0]
    }) 


    return (
        data ?
        <PageContainer>
            <HeaderImg />
            <img src={cone} alt="" />
            <Container>
                <SectionContainer>
                    <ImageTitleContainer>
                        <h1>{data.name}</h1>
                        {
                            data.likes ?                         
                            <div>
                                <Likes liked={liked ? 'liked' : ''} onClick={() => setLiked(!liked)}><span><img src="https://i.imgur.com/jD1XOMM.png" alt="" liked={liked ? 'liked' : ''} /></span> {liked ? data.likes+1 : data.likes}</Likes>
                                <img src={dots} alt="" />
                            </div>
                            :
                            ''
                        }

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
                    </div>
                    <BidContainer>
                        <div>
                            <SelectableContainer count={2} active={tab === 'price'} action={() => setTab('price')} >
                                <img src={priceTag} alt="" />
                                <p>Fixed Price</p>
                            </SelectableContainer>
                            <SelectableContainer count={2} active={tab === 'auction'} action={() => setTab('auction')} >
                                <img src={clock} alt="" />
                                <p>Timed Auction</p>
                            </SelectableContainer>
                        </div>
                        {
                            tab === 'price'
                            ?
                            (
                                <div>
                                    <h1>Price</h1>
                                    <StyledInput type='number' placeholder='Fixed price min(0.001)' min={0.001} />
                                    <p onClick={() => history.push('/')} >Mint</p>
                                </div>
                            )
                            : ''
                        }
                        {
                            tab === 'auction'
                            ?
                            (
                                <div>
                                    <h1>Start Price</h1>
                                    <StyledInput type='number' placeholder='Fixed price min(0.001)' min={0.001} />
                                    <h1>End Price</h1>
                                    <StyledInput type='number' placeholder='Fixed price min(0.002)' min={0.001} />
                                    <h1>Auction Duration</h1>
                                    <StyledInput type='number' placeholder='4h 15m 0s' min={0.001} />
                                    <p onClick={() => history.push('/')} >Mint</p>
                                </div>
                            )
                            : ''
                        }


                    </BidContainer>
                </SectionContainer>  
                
            </Container>
        </PageContainer>
        : ''
    )
}

export default UnlistedItem
