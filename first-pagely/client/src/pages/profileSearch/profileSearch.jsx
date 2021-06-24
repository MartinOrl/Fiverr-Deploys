import React, {useState} from 'react'

import ProfileHero from '../../components/profileHero/profileHero'
import NFTCard from '../../components/nft/nft'
import HeaderImg from '../../components/headerImg/headerImg'

import testImg from '../../assets/profileImg.png'

import { CardsHolder, InputContainer, FilteringContainer, Dropdown, PageContainer  } from './profileSearchStyles'

import { nftsData } from '../../testData'

import magnifySmall from '../../assets/magnifySmall.png'
import cone from '../../assets/cone.png'
import ball from '../../assets/ball.png'

const ProfileSearch = () => {
    const [search, setSearch] = useState('')
    return (
        <PageContainer>
            <HeaderImg />
            <img src={cone} alt="" />
            <img src={ball} alt="" />
            <ProfileHero imgUrl={testImg} name='Azer' description='Activist, Actress, Artist, Bitcoin Supporter' shortAddress='0x3401ea5a8d91c...f153' fullAddress='0x3401ea5a8d91ca1f89f153' />

            <FilteringContainer>
                <InputContainer>
                    <img src={magnifySmall} alt="" />
                    <input type="text" placeholder='Look for anything' value={search}  onChange={(e) => setSearch(e.target.value)} />
                </InputContainer>
                <div>
                    <Dropdown>All Items</Dropdown>
                    <Dropdown>Connect Wallet</Dropdown>
                </div>
   
            </FilteringContainer>
            <CardsHolder>
                {
                    nftsData.map(nft => {
                        if(nft.name.toLowerCase().includes(search.toLowerCase())){
                            return <NFTCard key={nft.id} {...nft} link={`/nft/${nft.id}`} />
                        }
                        return ''
                    })
                }
            </CardsHolder>
        </PageContainer>
    )
}

export default ProfileSearch
