import styled from 'styled-components';


export const HeaderBG = styled.div`
    position: relative;
    @media screen and (max-width: 1140px){
        position: unset;
    }
`

export const Logo = styled.img`
    margin-right: 40px;
    cursor: pointer;
`

export const HowItWorks = styled.div`
    border: 1px solid #563af5;
    border-radius: 40px;
    padding: 0 24px;
    display: flex;
`

export const CustomButton = styled.p`
    
    border-radius: 40px !important;
    background: linear-gradient(-45deg, #8743ff, #4136f1);
    color: white !important;
    
    font-weight: bold;
    cursor: pointer;
`

export const Collapsible = styled.div`
    display: flex;
    align-items: center;
`

export const Burger = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-width: 0;
    span{
        display: block;
        width: 16px;
        height: 3px;
        margin: 3px 0;
        border-radius: 8px;
        background: white;
    }

`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 97%;
    margin: 0 auto;
    border-radius: 16px;
    background: white;
    padding: 8px 24px;
    box-sizing: border-box;
    position: absolute;
    z-index: 5;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    &>div{
        display: flex;
        align-items: center;
        img{
            object-fit: contain;
        }
    }
    p{
        padding: 0 20px;
        margin: 12px 0;
        color: #1d5e6d;
        cursor: pointer;
    }
    ${CustomButton}{
        padding: 12px 40px;
        margin: 0 12px ;
    }
    ${HowItWorks}>p{
        color: #563af5;
        &:first-of-type{
            border-right: 1px solid #563af5;
        }
    }
    @media screen and (max-width: 1420px){
        padding: 12px 24px;
        ${Logo}{
            width: 64px;
            height: auto;
            object-fit: contain;
            margin-right: 24px;
        }
        p{
            padding: 0 12px;
        }
        ${HowItWorks}{
            margin: 0 8px;
            padding: 0 16px;
            p{
                padding: 0 8px;
            }
        }
        ${CustomButton}{
            padding: 12px 32px;
            margin: 0 8px;
        }
    }
    @media screen and (max-width: 1223px){
        &>div:nth-of-type(1)>div:last-of-type{
            input{
                width: 140px !important;
            }
        }
        ${CustomButton}{
            padding: 12px 24px;
        }
        p{
            padding: 0 8px;
        }
    }
    @media screen and (max-width: 1140px){
        padding: 8px 16px;
        &>div:nth-of-type(2){
            order: 1;
            width: 50%;
            
        }
        &>div:nth-of-type(1){
            order: 2;
            width: 50%;
            justify-content: space-between;
            padding-right: 16px;
        }

        ${Collapsible}{
            max-width: ${props => props.collapse ? '100vw' : '0'};
            width: 100vw;
            height: 100vh;
            z-index: 50;
            overflow: hidden;
            position: fixed;
            left: -18px;
            top: -24px;
            background: rgba(102,48,197,.87);
            backdrop-filter: blur(8px);
            padding: 96px 0;
            padding-right: ${props => props.collapse ? '48px' : '0'};
            align-items: unset;

            flex-direction: column;
            transition: 250ms ease-in-out;
            p{
                color: white !important;
                width: max-content;
                margin-left: 64px;
            }
            ${HowItWorks}{
                border: none;
                padding: 0;
                flex-direction: column;
                margin: 0;
            }
            ${CustomButton}{
                margin: 8px  64px;
                padding: 12px 40px;
            }
        }
        ${Burger}{
            max-width: 16px;
            border-radius: 8px;
            padding: 8px 16px;
            background: linear-gradient(-45deg, #8743ff, #4136f1);
            cursor: pointer;
            z-index: 51;
            position: relative;
        }
    }
    @media screen and (max-width: 640px){
        &>div:nth-of-type(1){
            width: 65%;
        }
        &>div:nth-of-type(2){
            width: 35%;
        }
    }
    @media screen and (max-width: 640px){
        &>div:nth-of-type(1){
            width: 50%;
            &>div:last-of-type{
                img:first-of-type{
                    display: none;
                }
                input{
                    display: none;
                }
            }

        }
        &>div:nth-of-type(2){
            width: 50%;
        }
    }
`
