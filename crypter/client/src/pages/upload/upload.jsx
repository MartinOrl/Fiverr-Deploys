import React from 'react'

import { TitleContainer, CardContainer, CardsHolder, Disclaimer, StyledLink } from './uploadStyles'

import single from '../../assets/single.png'
import multiple from '../../assets/multiple.png'




const UploadCard = ({imgUrl, type}) => {
    return(
        <CardContainer>
            <img src={imgUrl} alt="" />
            <StyledLink to='' type={type} >Create {type}</StyledLink>
        </CardContainer>
    )
}


const Upload = () => {
    return (
        <div>
            <TitleContainer>
                <h1>Upload Item</h1>
                <p>Choose <span>"Single"</span> if you want your collectible to be one of a kind or <span>"Multiple"</span> if you want to sell one collectible multiple times</p>
            </TitleContainer>
            <CardsHolder>
                <UploadCard  imgUrl={single} type='Single' />
                <UploadCard  imgUrl={multiple} type='Multiple' />
            </CardsHolder>
            <Disclaimer>We do not own your private keys and cannot access your funds without your confirmation.</Disclaimer>
        </div>
    )
}

export default Upload
