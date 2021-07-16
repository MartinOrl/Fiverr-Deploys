import styled, {keyframes} from 'styled-components'
import { Link } from 'react-router-dom'


const slide = keyframes`
    0%{
        transform: translate(-50%, -50%);
    }
    49%{
        transform: translate(150%, -50%);
        opacity: 1;
    }
    50%{
        opacity: 0;

    }
    51%{
        transform: translate(-250%, -50%);
    }
    52%{
        opacity: 1;
        transform: translate(-250%, -50%);
    }
    100%{
        transform: translate(-50%, -50%);
    }
`

export const Logo = styled.img`
    height: 40px;
`

export const Heading = styled.p`
    margin: 0 0 40px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
    color: #23262f;
`

export const Description = styled.p`
    font-size: 24px;
    line-height: 32px;
    max-width: 260px;
`

export const StyledLink = styled(Link)`
    font-size: 16px;
    color: #777e90;
    font-weight: 700;
    display: block;
    margin-bottom: 24px;
    text-decoration: none;
    font-family: 'DM Sans', 'Poppins', sans-serif;
`

export const InputContainer = styled.form`
    display: flex;
    align-items: center;
    padding: 8px 16px 8px 24px;
    border-radius: 32px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='32' ry='32' stroke='%23E6E8ECFF' stroke-width='4' stroke-dasharray='8 16' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");
    width: 100%;
    box-sizing: border-box;

`

export const AcceptButton = styled(Link)`
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    color:#3772FF;
    margin-left: 16px;
    text-decoration: none;
    outline: none;
`

export const NewsletterText = styled.p`
    max-width: 386px;
`

export const StyledInput = styled.input`
    outline: none;
    background: none;
    border: none;
    width: 280px;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    transition: 250ms ease-in-out;
    &:focus-within{
        transform: translateY(-2px);
    }
`

export const SendButton = styled.button`
    background: #3772FF;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    box-sizing: border-box;
    border: none;
    transition: 250ms ease-in-out;
    cursor: pointer;
    position: relative;
    img{
        filter: brightness(1000);
        width: 18px;
        position: absolute;
        top: 50%;
        left: 50%;

        animation: ${slide} 300ms cubic-bezier(.66,0,.58,1);
        animation-play-state: ${props => props.clicked ? 'running' : 'paused'};
        animation-iteration-count: infinite;
    }


    &:hover{
        background: #1a3677;
    }
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: ${props => props.align};
    margin: ${props => props.margin};

`

export const Copyright = styled.p`
    color: #777E90;
    font-size: 16px;
`