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
    @media screen and (max-width: 1240px){
        width: 80%;
        margin: 16px auto 48px;
    }
`

export const PageTitle = styled.h1`
    width: 80%;
    margin: 64px auto 32px;
    @media screen and (max-width: 1240px){
        text-align: center;
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
    @media screen and (max-width: 1240px){
        margin-bottom: 24px;
    }
`