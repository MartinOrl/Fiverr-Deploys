import styled from "styled-components";

export const PageContainer = styled.div`
    /* background: linear-gradient(0deg, rgba(250,251,251,0.001), rgb(237,244,255), rgba(250,251,251,.001) ); */
    padding: 0 0 32px;
    position: relative;
    &>img:first-of-type{
        position: absolute;
        left: 96px;
        top: 450px;
        filter: blur(8px);
    }
    &>img:nth-of-type(2){
        position: absolute;
        right: 72px;
        top: 615px;
        z-index: 0;
    }
`

export const CardsHolder = styled.div`
    width: 80%;
    margin: 16px auto;
    &>div{
        margin: 16px;
        margin-left: 0;
    }
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    z-index: 4;
    @media screen and (max-width: 790px){
        flex-direction: column;
        width: max-content;

    }
`

export const InputContainer = styled.div`
    border-radius: 24px;
    padding: 8px 16px;
    width: 60%;
    background: white;
    box-shadow: 0 2px 6px rgba(0,0,0,.15);
    flex-grow: 2;
    img{
        display: inline-block;
        margin-right: 16px;
    }
    input{
        outline: none;
        border: none;
        background: none;
        font-family: Montserrat;
    }
    @media screen and (max-width: 790px){
        width: 100%;
        box-sizing: border-box;
    }
`



export const Dropdown = styled.div`
    width: max-content;
    padding: 8px 24px;
    border-radius: 24px;
    color: white;
    background: linear-gradient(45deg, #8743ff, #4136f1);
    background-size: 130%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    margin-left: 16px;

`

export const FilteringContainer = styled.div`
    width: 80%;
    margin: 16px auto 24px;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 4;
    &>div:last-of-type{
        display: flex;
    };
    @media screen and (max-width: 790px){
        width: 90%;
        justify-content: space-around;
        flex-direction: column;
        &>div:last-of-type{
            width: max-content;
            margin: 16px auto;
        }
    }

`