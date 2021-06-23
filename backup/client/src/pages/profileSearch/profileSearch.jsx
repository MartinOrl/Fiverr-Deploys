import React, {useState} from 'react'

import ProfileHero from '../../components/profileHero/profileHero'
import NFTCard from '../../components/nft/nft'
import HeaderImg from '../../components/headerImg/headerImg'

import testImg from '../../assets/profileImg.png'

import { CardsHolder, InputContainer, FilteringContainer, Dropdown, PageContainer  } from './profileSearchStyles'

import { nftsData } from '../../testData'

import magnifySmall from '../../assets/magnifySmall.png'

const ProfileSearch = () => {
    const [search, setSearch] = useState('')
    return (
        <PageContainer>
            <HeaderImg />
            <ProfileHero imgUrl={testImg} name='Azer' description='Activist, Actress, Artist, Bitcoin Supporter' address='0x3401ea5a8d91c...f153' />

            <FilteringContainer>
                <InputContainer>
                    <img src={magnifySmall} alt="" />
                    <input type="text" placeholder='Look for anything' value={search}  onChange={(e) => setSearch(e.target.value)} />
                </InputContainer>
                <Dropdown>All Items</Dropdown>
                <Dropdown>Connect Wallet</Dropdown>
            </FilteringContainer>
            <CardsHolder>
                {
                    nftsData.map(nft => {
                        if(nft.name.includes(search)){
                            return <NFTCard {...nft} />
                        }
                        return ''
                    })
                }
            </CardsHolder>
        </PageContainer>
    )
}

export default ProfileSearch
