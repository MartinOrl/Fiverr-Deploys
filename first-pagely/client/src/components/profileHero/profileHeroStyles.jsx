import styled from "styled-components";

export const ImageBg = styled.div`
    background: white;
    width: 176px;
    height: 176px;
    border-radius: 50%;
    filter: blur(4px);
    box-shadow: 7px 7px 13px rgba(209,217,230,.9), -7px -7px 19px white;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    z-index: 1;
`

export const ProfilePicture = styled.img`
    border-radius: 50%;
    width: 144px;
    height: 144px;
    position: relative;
    z-index: 3;

`

export const SideMenu = styled.div`
    position: absolute;
    right: -96px;
    top: 16px;
    height: 126px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const SideImage = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 17px;
    height: 17px;
    cursor: pointer;
    div{
        background: white;
        z-index: -1;
        width: 17px;
        padding: 16px;
        height: 17px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        filter: blur(4px);
        box-shadow: 7px 7px 13px rgba(209,217,230,.9), -4px -4px 12px white;
    }
`

export const Container = styled.div`
    width: 80%;
    margin: 24px auto 40px;
    text-align: center;
    position: relative;
    color: #1d5e6d;
    h1{
        margin-bottom: 8px;
        margin-top: 16px;
    }
    p:first-of-type{
        margin-top: 0;
    }
    &:first-of-type{
        width: max-content;
        margin-bottom: 56px;
    }
`

export const Address = styled.p`
    display: flex;
    background: ${props => props.active ? '#3f2496' : '#6a3efa'};
    padding: 8px 24px;
    color: white;
    width: max-content;
    border-radius: 24px;
    margin: 24px auto 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    box-shadow: ${props => props.active ? '0 0 8px rgba(0,0,0,.5)' : ''};
    span{
        margin-left: 16px;
        display: flex;
        align-items: center;
    }
    transform: ${props => props.active ? 'scale(1.03)' : ''};
    transition: 250ms ease-in-out;
    user-select: none;
`

export const NameShadow = styled.h1`
    position: absolute;
    top: -56px;
    font-size: 56px;
    opacity: 0.1;
    color: #1d5e6d;
    left: 50%;
    transform: translateX(-50%);
`