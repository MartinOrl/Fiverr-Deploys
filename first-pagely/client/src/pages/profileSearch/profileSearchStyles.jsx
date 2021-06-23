import styled from "styled-components";

export const PageContainer = styled.div`
    background: linear-gradient(0deg, rgba(250,251,251,0.001), rgb(237,244,255), rgba(250,251,251,.001) );
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
`

export const InputContainer = styled.div`
    border-radius: 24px;
    padding: 8px 16px;
    width: 70%;
    background: white;
    box-shadow: 0 2px 6px rgba(0,0,0,.15);
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
`

export const FilteringContainer = styled.div`
    width: 80%;
    margin: 16px auto 24px;
    display: flex;
    justify-content: space-between;


`

export const Dropdown = styled.div`
    width: 13%;
    border-radius: 24px;
    color: white;
    background: linear-gradient(45deg, #8743ff, #4136f1);
    background-size: 130%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer
`