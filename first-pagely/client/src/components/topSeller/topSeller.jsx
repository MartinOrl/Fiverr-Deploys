import React from 'react'

import { ProfileContainer, SellerPicture } from './topSellerStyles'

const TopSeller = ({data}) => {
    const {profileUrl, backgroundUrl} = data
    return (
        <ProfileContainer bgUrl={backgroundUrl}>
            <SellerPicture src={profileUrl} alt="" />
            
        </ProfileContainer>
    )
}

export default TopSeller
