import React from 'react'
import styled from 'styled-components'
import flame from '../../assets/flame.png'

import Countdown from 'react-countdown'


const TimerText = styled.p`
    padding: 8px 24px;
    color: #8042fe;
    font-weight: bold;
    box-sizing: border-box;
    border: 2px solid #8042fe;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 220px;
    span{
        display: block;
        margin-left: 16px;
    }
`

const renderer = ({hours, minutes, seconds, completed}) => {
    if(completed){
        return <p>Expired</p>
    }
    else{
        return <TimerText>{hours}h {minutes}m {seconds}s left <span><img src={flame} alt="" /></span></TimerText>
    }
}

const Timer = ({seconds}) => {
 

    return (
        <Countdown date={Date.now() + seconds} renderer={renderer} />
    )
}

export default Timer
