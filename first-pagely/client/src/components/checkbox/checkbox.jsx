import React from 'react'
import styled from 'styled-components'

const ToggleSwitch = styled.label`
    position: relative;
    width: 60px;
    height: 34px;
    display: block;
    @media screen and (max-width: 940px){
        height: 28px;
        width: 48px;
    }
    input{
        opacity: 0;
        width: 0;
        height: 0;
    }
    span{
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 34px;
        &:before{
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
            border-radius: 50%;
            @media screen and (max-width: 940px){
                height: 20px;
                width: 20px;
            }
        }
    }
    input:checked + span{
        background: grey;
    }
    input:focus + span{
        box-shadow: 0 0 4px #432ba6;
    }
    input:checked + span:before{
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
        @media screen and (max-width: 940px){
            -webkit-transform: translateX(20px);
            -ms-transform: translateX(20px);
            transform: translateX(20px);
        }
    }
   

`


const Checkbox = () => {
    return (
        <ToggleSwitch>
            <input type="checkbox" name="" id="" />
            <span></span>
        </ToggleSwitch>
    )
}

export default Checkbox
