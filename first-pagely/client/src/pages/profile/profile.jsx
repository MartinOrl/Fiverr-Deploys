import React, { useState } from 'react'

import { ProfileContainer, FiltersContainer, FilteredContainer, OverflowContainer } from './profileStyles'


import ProfileFilter from '../../components/profileFilter/profileFilter'
import NFTCard from '../../components/nft/nft'
import HeaderImg from '../../components/headerImg/headerImg'
import ProfileHero from '../../components/profileHero/profileHero'

import cone from '../../assets/cone.png'
import ball from '../../assets/ball.png'


import { ProfileFilters, myProfile } from '../../testData'

const Profile = () => {
    const [active, setActive ] = useState('')
    return (
        <ProfileContainer>
            <HeaderImg />
            <img src={cone} alt="" />
            <img src={ball} alt="" />
            <ProfileHero imgUrl={myProfile.profileUrl} name={myProfile.name} description={myProfile.description} shortAddress={myProfile.shortAddress} fullAddress={myProfile.address} />
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
                myProfile.nfts.map(data => {
                    if(active){
                        if(data.profileCategories.includes(active)){
                            return <NFTCard key={data.id} {...data} link={`/nft/${data.id}`} />
                        }
                        return ''
                    }
                    return <NFTCard key={data.id} {...data} link={`/nft/${data.id}`} />
                })
            }
            
            </FilteredContainer>
            <h1>Unlisted Items</h1>
            <FilteredContainer>
                {
                    myProfile.unlisted.map(item => (
                        <NFTCard key={item.id} {...item} link={`/unlisted/${item.id}`} />
                    ))
                }
            </FilteredContainer>
        </ProfileContainer>
    )
}

export default Profile
