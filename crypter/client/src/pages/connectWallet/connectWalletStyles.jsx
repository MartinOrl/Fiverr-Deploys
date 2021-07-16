import styled from "styled-components";

export const Wallet = styled.div`
    display: flex;
    width: max-content;
    align-items: center;
    position: relative;
    cursor: pointer;
    padding: 32px 64px 32px 24px;
    width: 420px;
    img{
        background: ${props => props.background ? props.background : '#fff'};
        border-radius: 50%;
        padding: 16px 16px;
        object-fit: contain;
        margin-right: 32px;
        transform: ${props => props.option ? 'rotateY(90deg)' : 'rotateY(0deg)'};
        transition: 250ms ease-in-out;
    }
    img:nth-of-type(2){
        position: absolute;
        left: 24px;
        top: 32px;
        background: #fff;
        padding: 18px 15px;
        border: 3px solid #3772ff;
        transform: ${props => props.option ? 'rotateY(0deg)' : 'rotateY(90deg)'};
    }
    p{
       font-weight: 600;
       font-size: 24px;
       color: #23262F;
       margin: 0;
       user-select: none;
    }
    border-radius: 16px;
    border: ${props => props.option ? '2px solid #e6e8fc' : '2px solid transparent'};
`

export const Row = styled.div`
    display: flex;
    justify-content: ${props => props.justify ? props.justify : ''};
    align-items: ${props => props.align ? props.align : ''};
    min-height: ${props => props.minHeight ? props.minHeight : ''};
    &>div{
        width: max-content;
    }
`

export const SideImage = styled.img`
    border-radius: 16px;
    transition: 250ms ease-in-out;
`

export const Arrow = styled.img`
    height: 14px;
    margin-right: 32px;
    transform: rotate(180deg);
    transform-origin: center;
    filter: brightness(0);
`

export const ScanContainer = styled.div`
    h1{
        margin: 0 0 16px;
        color: #23262f;
        font-size: 40px;
    }
    p:first-of-type{
        color: #777e90;
        margin: 0 0 24px;
    }
    p:nth-of-type(2){
        color: #23262f;
        padding: 8px 16px;
        border-radius: 16px;
        border: 2px solid #e6e8ec;
        width: max-content;
        transition: 250ms ease-in-out;
        box-sizing: border-box;
        cursor: pointer;
        &:hover{
            background: #23262f;
            color: #f4f5f6;
            border-color: transparent;
        }
    }
`

export const ScanImage = styled.div`
    padding: 56px;
    border-radius: 16px;
    background: #f4f5f6;
    width: max-content;
    div{
        padding: 80px;
        border-radius: 16px;
        background: #fcfcfd;
        border: 1px solid #e6e8ec;
        box-shadow: 0 64px 64px -48px rgba(31,47,70,.12);
        width: max-content;
    }

    

`