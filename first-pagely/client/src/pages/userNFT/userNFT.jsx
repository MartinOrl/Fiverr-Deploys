import React, { useState } from 'react'
import HeaderImg from '../../components/headerImg/headerImg'
import {PriceContainer, RightHeading, ContentContainer, Imagecontainer, Likes, Description, LeftSide, RightSide, Dropdown } from './userNFTStyles'

import heart from '../../assets/heart.png'
import itemImg from '../../assets/itemImage.png'

const DropdownContainer = ({children, title, top, bottom}) => {
    const [collapse, setCollapse] = useState(false)
    return(

        <Dropdown collapse={collapse} top={top} bottom={bottom}>
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
    return (
        <div>
            <HeaderImg />
            <ContentContainer>
                <LeftSide>
                    <Imagecontainer>
                        <div>
                            <h1>The Abandoned Church</h1>
                            <Likes><span><img src={heart} alt="" /></span> 200</Likes>
                        </div>
                        <img src={itemImg} alt="" />
                    </Imagecontainer>
                    <Description>
                        <h1>Description</h1>
                        <p> <span></span> Owned by you</p>
                        <DropdownContainer title='About Collections'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dignissimos tenetur mollitia quas sint deleniti adipisci doloremque nobis ipsa, enim blanditiis voluptatibus tempora qui nostrum aut voluptas autem doloribus quod esse saepe nemo optio. Quas.</p>
                        </DropdownContainer>
             
                    </Description>
                </LeftSide>
                <RightSide>
                    <RightHeading>
                        <div>
                            <p>Collections</p>
                    
                            <div>
                                <p>A</p>
                            </div>
                        </div>
                        <h1>Name NFT</h1>
                        <div>
                            <p><span></span> Owned by you</p>
                            <p>23 views</p>
                        </div>
                    </RightHeading>
                    <PriceContainer>
                        <DropdownContainer title='Price History' top="false">
                            <p>All Time</p>
                        </DropdownContainer>
                        <DropdownContainer title='Listings' top="false">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat dolore amet nostrum cupiditate temporibus!</p>
                        </DropdownContainer>
                        <DropdownContainer title='Offers' top="false">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia odio esse fugit in maiores doloribus aspernatur eius labore molestiae, quidem ratione tempore dignissimos nulla numquam adipisci nihil debitis, nisi aut ad delectus sapiente commodi! Voluptas ea eveniet voluptate minus debitis fugiat veritatis repellendus totam corrupti.</p>
                        </DropdownContainer>

                        
                    </PriceContainer>

                </RightSide>
            </ContentContainer>
        </div>
    )
}

export default UserNFT
