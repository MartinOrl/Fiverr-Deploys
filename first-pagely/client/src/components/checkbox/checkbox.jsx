import React from 'react'
import styled from 'styled-components'

const ToggleSwitch = styled.label`
    position: relative;
    width: 60px;
    height: 34px;
    display: block;
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
        transform: translateX(26px)
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
