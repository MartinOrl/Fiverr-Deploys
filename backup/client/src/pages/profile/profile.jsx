import React, { useState } from 'react'

import { ProfileContainer, FiltersContainer, FilteredContainer, OverflowContainer } from './profileStyles'

import profile from '../../assets/profileImg.png'


import ProfileFilter from '../../components/profileFilter/profileFilter'
import NFTCard from '../../components/nft/nft'
import HeaderImg from '../../components/headerImg/headerImg'
import ProfileHero from '../../components/profileHero/profileHero'

import { ProfileFilters, nftsData } from '../../testData'

const Profile = () => {
    const [active, setActive ] = useState('')
    return (
        <ProfileContainer>
            <HeaderImg />

            <ProfileHero imgUrl={profile} name='Satman' description='Activist, Actress, Artist, Bitcoin Supporter' address='0x3401ea5a8d91c...f153' />
            <OverflowContainer>
                <FiltersContainer>
                    {
                        ProfileFilters.map(filter => (
                            <ProfileFilter key={filter.id} name={filter.name} count={filter.count} active={active === filter.filter} action={() => setActive(active === filter.filter ? '' : `${filter.filter}`)} />
                        ))
                    }
                </FiltersContainer>
            </OverflowContainer>
            <FilteredContainer >

            {
                nftsData.map(data => {
                    if(active){
                        if(data.profileCategories.includes(active)){
                            return <NFTCard key={data.id} {...data} />
                        }
                        return ''
                    }
                    return <NFTCard key={data.id} {...data} />
                })
            }
            
            </FilteredContainer>
        </ProfileContainer>
    )
}

export default Profile
