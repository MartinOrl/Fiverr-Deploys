import styled from "styled-components";

export const NFTContainer = styled.div`
    width: 300px;
    margin: 16px;
    background: white;
    border-radius: 16px;
    transition: 250ms ease-in-out;
    
`

export const Image = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 16px 16px 0 0;
    cursor: pointer;
`

export const InfoContainer = styled.div`
    padding: 16px;
`

export const Name = styled.h1`
    color: #183b56;
    font-size: 1.3rem;
    margin: 0;

`

export const Price = styled.p`
    color: #183b56;
    margin: 8px 0;
`

export const ActionButton = styled.p`
    padding: 8px 24px;
    background: linear-gradient(45deg, #8743ff, #4136f1);
    color: white;
    background-size: 130%;
    margin: 0;
    border-radius: 24px;
`

export const Likes = styled.p`
    padding: 8px;
    background: ${props => props.liked ? '#8743ff' : '#f0e9ff'};
    color: ${props => props.liked ? 'white' : 'black'};
    margin: 0;
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
    min-width: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 150ms ease-in-out;
    img{
        filter: ${props => props.liked ? 'brightness(15)' : ''};
        transition: 150ms ease-in-out;
    }
`

export const ActionContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 16px 0;
`