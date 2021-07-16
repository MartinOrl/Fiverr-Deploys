import styled from "styled-components";


export const Container = styled.div`
    background: #fff;
    border-radius: 16px;
    padding: 16px 24px;
    box-sizing: border-box;
    width: 240px;
    box-shadow: 3px 3px 8px rgba(0,0,0,.15);
    margin: 16px 16px 16px 0;
    cursor: pointer;
    transition: 250ms ease-in-out;
    &:hover{
        transform: scale(1.05);
        transform-origin: top;
        box-shadow: 3px 3px 8px rgba(0,0,0,.3)
    }
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,.1);
`

export const ProfilePic = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: #e4d7cf;
`

export const ImageContainer = styled.div`
    position: relative;
    margin: 16px auto;
    width: max-content;
    img:last-of-type{
        position: absolute;
        right: 0;
        bottom: 0;
    }
`

export const Rank = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    padding: 6px 10px;
    border-radius: 16px;
    color: #fff;
    background: #3772FF;
    img{
        height: 20px;
        margin-right: 4px;
    }
    p{
        margin: 0;
    }
`

export const Text = styled.div`
    text-align: center;
    h1{
        font-size: 18px;
        margin: 0 0 8px;
    }
    p{
        margin: 0;
    }
`

export const Images = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        display: block;
        margin-left: 8px;
    }
    img:last-of-type{
        transform-origin: center;
        transform: rotate(-45deg);
    }
`