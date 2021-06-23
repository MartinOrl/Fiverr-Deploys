import React, { useState } from 'react'
import HeaderImg from '../../components/headerImg/headerImg'
import { SpecialToggle, HeadingButtons, PriceContainer, RightHeading, ContentContainer, Imagecontainer, Likes, Description, LeftSide, RightSide, Dropdown } from './userNFTStyles'

import heart from '../../assets/heart.png'
import itemImg from '../../assets/itemImage.png'
import reload from '../../assets/reloadRounded.png'
import share from '../../assets/shareRounded.png'
import dots from '../../assets/dotsRounded.png'
import calendar from '../../assets/calendarRounded.png'
import dotsWhite from '../../assets/dots.png'
import specialBall from '../../assets/3dBall.png'
import trading from '../../assets/trading.png'
import offer from '../../assets/offer.png'

const DropdownContainer = ({children, title, top, bottom}) => {
    const [collapse, setCollapse] = useState(false)
    
    return(

        <Dropdown collapse={collapse ? 'true' : ''} top={top} bottom={bottom}>
            <div>
                <h1>{title}</h1>
                <p onClick={() => setCollapse(!collapse)} >&gt;</p>
            </div>
            <div>
                {
                    children
                }
            </div>
        </Dropdown>
    )
}

const UserNFT = () => {
    const [liked, setLiked] = useState(false)
    return (
        <div>
            <HeaderImg />
            <HeadingButtons>
                <p>Edit</p>
                <p>Sell</p>
            </HeadingButtons>
            <ContentContainer>
                <LeftSide>
                    <Imagecontainer>
                        <div>
                            <h1>The Abandoned Church</h1>
                            <div>
                            
                            <Likes liked={liked} onClick={() => setLiked(!liked)}><span><img src={heart} alt="" /></span> {liked ? 200 +1 : 200}</Likes>
                            <img src={dotsWhite} alt="" />
                            </div>
                        </div>
                        <img src={itemImg} alt="" />
                    </Imagecontainer>
                    <Description>
                        <h1>Description</h1>
                        <p> <span><img src={specialBall} alt="" /></span> Owned by you</p>
                        <DropdownContainer title='About Collections'  bottom="true">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos tenetur mollitia quas sint deleniti adipisci doloremque nobis ipsa, enim blanditiis voluptatibus tempora qui nostrum aut voluptas autem doloribus quod esse saepe nemo optio. Quas.</p>
                        </DropdownContainer>
             
                    </Description>
                </LeftSide>
                <RightSide>
                    <RightHeading>
                        <div>
                            <p>Collections</p>
                    
                            <div>
                                <img src={reload} alt="" />
                                <img src={calendar} alt="" />
                                <img src={share} alt="" />
                                <img src={dots} alt="" />
                            </div>
                        </div>
                        <h1>Name NFT</h1>
                        <div>
                            <p><span><img src={specialBall} alt="" /></span> Owned by you</p>
                            <p>23 views</p>
                        </div>
                    </RightHeading>
                    <PriceContainer>
                        <DropdownContainer title='Price History' top="false">
                            <SpecialToggle>All Time <span>&gt;</span></SpecialToggle>
                            <img src={trading} alt="" />
                        </DropdownContainer>
                        <DropdownContainer title='Listings' top="false">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat dolore amet nostrum cupiditate temporibus!</p>
                        </DropdownContainer>
                        <DropdownContainer title='Offers' top="false">
                            
                            <img src={offer} alt="" />
                            <p>No pffers yet</p>
                        </DropdownContainer>

                        
                    </PriceContainer>

                </RightSide>
            </ContentContainer>
        </div>
    )
}

export default UserNFT
