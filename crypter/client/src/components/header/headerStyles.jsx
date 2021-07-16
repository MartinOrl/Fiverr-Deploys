import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ComponentContainer = styled.div`
    padding: 32px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 64px;
`

export const Logo = styled.img`
    height: 48px;
    margin-right: 16px;
`

export const Separator = styled.span`
    width: 2px;
    border-radius: 6px;
    display: block;
    background: #E6E8EC;
    content: '';
    margin: 0 8px 0 16px;
    height: 40px;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: ${props => props.align};
    margin: ${props => props.margin};
`

export const StyledLink = styled(Link)`
    font-size: 16px;
    color: ${props => props.active ? '#23262F' : '#777e98'};
    font-weight: 700;
    display: block;
    margin: 0 16px;
    text-decoration: none;
    font-family: 'DM Sans', 'Poppins', sans-serif;
`

export const SearchIcon = styled.img`
    transition: 400ms ease-in-out;
    display: block;
    transform-origin: center;
`

export const InputContainer = styled.form`
    display: flex;
    align-items: center;
    padding: 8px 20px;

    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23E6E8ECFF' stroke-width='4' stroke-dasharray='6 16' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");
    border-radius: 8px;
    max-width: 260px;
    box-sizing: border-box;
    &:focus-within ${SearchIcon}{
        transform: rotate(90deg);

    };
`

export const StyledInput = styled.input`
    outline: none;
    background: none;
    border: none;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    transition: 250ms ease-in-out;
`

export const SpecialLink = styled(Link)`
    padding: 10px 18px;
    border-radius: 24px;
    background: ${props => props.background};
    border: ${props => props.border ? '3px solid #e6e8ec' : ''};
    color: ${props => props.color ? props.color : 'black'};
    outline: none;
    text-decoration: none;
    margin-left: 24px;
`

export const Notification = styled.div`
    position: relative;
    margin-left: 24px;
    height: 40px;
    width: 40px;
    box-shadow: 2px 3px 8px transparent;
    img{
        object-fit: contain;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
    }
    span{
        position: absolute;
        top: 4px;
        right: 4px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #45B26B;
    }
    border-radius: 8px;
    transition: 250ms ease-in-out;
    cursor: pointer;
    &:hover{
        box-shadow: 2px 3px 8px rgba(0,0,0,.1);
    }
`
