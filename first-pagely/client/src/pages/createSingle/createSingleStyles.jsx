import styled, {css} from "styled-components";

const centerStyles = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const PageContainer = styled.div`
    color: #432ba6;
    /* background: linear-gradient(0deg, rgba(250,251,251,0.001), rgb(237,244,255), rgba(250,251,251,.001) ); */
    background: white;
`

export const ColumnDetails = styled.div`
    width: 55%;
    @media screen and (max-width: 1240px){
        width: 80%;
        margin: 16px auto;
    }
    
`

export const ColumnPreview = styled.div`
    width: 42%;
    box-sizing: border-box;
    div{
        border: 6px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,.25);
        background: #f4f7fc;
        padding: 0px 24px 16px;
        border-radius: 16px;
        img{
            width: 100%;
            object-fit: contain;
            border-radius: 16px;
        }
        h1{
            width: 100%;
            margin: 16px 0 24px;
            font-size: 1.7rem;
        }
    }
`

export const PageTitle = styled.h1`
    width: 80%;
    margin: 64px auto 32px;
    @media screen and (max-width: 1240px){
        text-align: center;
    }
`

export const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    background: #ecf2fe;
    color: #434447;
    margin: 16px 0;
    box-sizing: border-box;
    input{
        width: 85%;
        border: none;
        background: none;
        outline: none;
        -webkit-appearance: none;
        -moz-appearance: textfield;
        &:placeholder{
            font-family: Poppins, Roboto, 'Segoe UI'
        }
    }
    &>div{
        position: relative;
        display: flex;
        align-items: center;
        p{
            margin: 0;
            font-weight: bold;
            user-select: none;
        }
        &>p:nth-of-type(2){
            padding: 8px 16px;
            font-size: 16px;
            border-radius: 50%;
            background: linear-gradient(45deg, #4136f1, #8743ff);
            transform-origin: center;
            transform: ${props => props.collapse ? 'rotate(270deg)' : 'rotate(90deg)'};
            transition: 250ms ease-in-out;

            height: max-content;
            color: white;
            text-align: center;
            margin-left: 8px;
            font-weight: bold;
            cursor: pointer;
        }
        div{
            position: absolute;
            transition: 250ms ease-in-out;
            right: 0;
            top: 48px;
            border-radius: 16px;
            width: 80px;
            border-radius: 8px;
            overflow: hidden;
            background: #ecf2fe;
            max-height: ${props => props.collapse ? '164px' : '0px'};
            box-shadow: 0 4px 6px rgba(0,0,0,.2);
        }
    }
`

export const Currency = styled.p`
    padding: 8px;
    transition: 150ms ease-in-out;
    text-align: center;
    cursor: pointer;
    background: ${props => props.active ? '#432ba6' : 'white'};
    color: ${props => props.active ? 'white' : 'black'};
    &:hover{
        background: ${props => props.active ? '#4136f1' : '#f4f7fc'};
    }
`

export const FileUploadContainer = styled.div`
    width: 100%;
    padding: 48px 0;
    border: 3px dashed #432ba6;
    border-radius: 16px;
    ${centerStyles};
    flex-direction: column;
    p{
        font-size: 1.4rem;
        font-weight: bold;
        margin: 0 0 8px;
    }
    input{
        display: none;
    }
    div>p{
        padding: 8px 32px;
        background: linear-gradient(45deg, #4136f1, #8743ff);
        background-size: 130%;
        border-radius: 24px;
        color: white;
        font-size: 1.1rem;
        cursor: pointer;
        font-weight: normal;
    }
`

export const Section = styled.div`
    width: 100%;
    margin: 24px 0 32px;
`

export const SectionDescription = styled.p`
    color: black;
    margin: -8px 0 8px;
`

export const SectionTitle = styled.h1`
    font-size: 24px;
    margin: 0 0 16px;
    span{
        font-size: 16px;
        margin-left: 4px;
        font-weight: normal;
    }
`

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 80%;
    margin: 24px auto;
    @media screen and (max-width: 1240px){
        flex-direction: column;
        justify-content: space-around;

    }
`

export const Selections = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const StyledInput = styled.input`
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    background: #ecf2fe;
    color: #434447;
    font-family: Montserrat;
    font-size: 16px;
    border: none;
    outline: none;
    margin: 4px 0 16px;
    appearance
    &::placeholder{
        opacity: 0.7;
    }
`

export const BonusInfo = styled.div`
    display: flex;
    flex-direction: ${props => props.row ? 'row' : 'column'};
    padding: 0 0 16px;
    border-bottom: 3px dotted rgba(0,0,0,.3);
    margin: 0 0 24px;
    p{
        color: black;
        margin: 8px 0;
        span{
            color: #432ba6;
            font-weight: bold;
        }
    }
`

export const CollectionChoice = styled.div`
    display: flex;
    flex-wrap: wrap;
    div{
        padding: 24px 80px;
        ${centerStyles};
        border: 2px solid #432ba6;
        flex-direction: column;
        margin: 16px 24px 16px 0;
        border-radius: 8px;
        img{
            width: 42px;
            height: 42px;
            margin: 0;
            border-radius: 50%;
            box-sizing: border-box;
        }
        h1{
            color: #432ba6;
            padding: 0px 10px;
            border: 3px solid #432ba6;
            font-size: 24px;
            margin: 0;
            border-radius: 50%;
            height: max-content;
            text-align: center;
            cursor: pointer;
        }
        p{
            margin: 0;
            color: #797979;
            &:first-of-type{
                color: #432ba6;
                font-weight: bold;
                margin: 8px 0 0;
            }
        }
    }
`



export const SectionHeading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Subtext = styled.p`
    color: #9459ff;
    margin: 0;
`

export const CreateButton = styled.p`
    padding: 8px 48px;
    background: linear-gradient(45deg, #4136f1, #8743ff);
    background-size: 130%;
    color: white;
    border-radius: 24px;
`

export const ChangesButton = styled.p`
    padding: 8px 48px;
    background: white;
    background-size: 130%;
    color: black;
    border-radius: 24px;
    margin-left: 32px;
    box-shadow: 0 2px 6px rgba(0,0,0,.25);
`

export const ButtonContainer = styled.div`
    display: flex;
    margin: 16px 0 96px;
    p{
        cursor: pointer;
    }
`