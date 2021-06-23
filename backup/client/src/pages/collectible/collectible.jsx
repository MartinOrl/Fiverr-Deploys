import React from 'react'

import CollectibleCreateCard from '../../components/collectibleCreateCard/collectibleCreateCard'
import PageHeading from '../../components/pageHeading/pageHeading'
import HeaderImg from '../../components/headerImg/headerImg'

import { Container, HeadingContainer, Disclaimer, CardHolder } from './collectibleStyles'

import single from '../../assets/singleCreate.png'
import multiple from '../../assets/multipleCreate.png'

const CollectibleCreate = () => {
    return (
        <Container>
            <HeaderImg />
            <HeadingContainer>
                <PageHeading title='Create Collectible' text='Choose "Single" if you want your collectible to be one of a kind or "Multiple" if you want to sell one collectible multiple times' />
            </HeadingContainer>
            <CardHolder>
                <CollectibleCreateCard type='Single' img={single} timer={true} link='/createSingle' />
                <CollectibleCreateCard type='Multiple' img={multiple} link='/' />
            </CardHolder>
            <div>
                <Disclaimer>We do not own your private keys and cannot access your funds without confirmation</Disclaimer>
            </div>
        </Container>
    )
}

export default CollectibleCreate
