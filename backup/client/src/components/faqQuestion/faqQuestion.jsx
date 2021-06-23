import React, { useState } from 'react'
import styled from 'styled-components'

const Question = styled.div`
    width: 47%;
    box-sizing: border-box;
    padding: 16px 24px;
    border-radius: 16px;
    background: white;
    display: flex;
    justify-content: space-between;
    margin: 16px 8px;
    max-height: ${props => props.collapsed ? '168px' : '64px'};
    overflow-y: hidden;
    transition: 250ms ease-in-out;
    box-shadow: 0 4px 6px rgba(0,0,0,.2);
    h1{
        font-size: 20px;
        margin: 0;
        cursor: pointer;
        user-select: none;
    }
    &>div:first-of-type>h1{
        margin-right: 24px;
        font-size: 40px;
        height: max-content;
        margin-top: -16px;
        width: 24px;
        color: ${props => props.collapsed ? '#fd5757' : '#1b1139'};
    }
    @media screen and (max-width: 1450px){
        h1{
            font-size: 18px;
        }
        &>div:first-of-type>h1{
            font-size: 32px;
            margin-top: -8px;
        }
    }
    @media screen and (max-width: 1325px){
        max-height: ${props => props.collapsed ? '250px' : '80px'};
    }
    @media screen and (max-width: 996px){
        max-height: ${props => props.collapsed ? '250px' : '64px'};
        width: 90%;
        h1{
            font-size: 20px;
        }
        &>div:first-of-type>h1{
            font-size: 40px;
            margin-top: -16px;
        }
    }
    @media screen and (max-width: 800px){
        h1{
            font-size: 18px;
        }
        &>div:first-of-type>h1{
            font-size: 32px;
            margin-top: -8px;
        }
    }
    @media screen and (max-width: 692px){
        max-height: ${props => props.collapsed ? '350px' : '80px'};
    }
    @media screen and (max-width: 448px){
        max-height: ${props => props.collapsed ? '420px' : '108px'};

    }

`

const FAQQuestion = () => {
    const [collapsed, setCollapsed] = useState(false)
    return(
        <Question collapsed={collapsed}>
            <div onClick={() => setCollapsed(!collapsed)}>
                <h1> {collapsed ? '-' : '+'} </h1>
            </div>
            <div>
                <h1 onClick={() => setCollapsed(!collapsed)} >How long until we deliver your first blog post</h1>
                <p>It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we MUST do before writing your first blog post.</p>
            </div>
        </Question>
)
}

export default FAQQuestion