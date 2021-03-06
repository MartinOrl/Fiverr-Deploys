import React from 'react'
import { useHistory } from 'react-router-dom'
import Timer from '../timer/timer'

import { CardContainer, CreateButton } from './collectibleCreateCardStyles'

const CollectibleCreateCard = ({type, img, timer, link}) => {
    const history = useHistory()
    return (
        <CardContainer>
            <img src={img} alt="" />
            {
                timer ? (<Timer seconds={129000000} />) : ''
            }
            <CreateButton onClick={() => history.push(link)}>{type}</CreateButton>
        </CardContainer>
    )
}

export default CollectibleCreateCard
