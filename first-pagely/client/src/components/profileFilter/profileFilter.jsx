import React from 'react'

import { Filter, FilterContainer, Count } from './profileFilterStyles'

const ProfileFilter = ({name, count, active, action}) => {
    return (
        <FilterContainer onClick={action} >
            <Filter active={active}>{name}</Filter>

            {
                count ? (<Count>{count}</Count>) : ''
            }
        </FilterContainer>
    )
}

export default ProfileFilter
