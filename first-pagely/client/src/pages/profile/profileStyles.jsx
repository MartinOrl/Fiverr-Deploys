import styled from "styled-components";

export const ProfileContainer = styled.div`
    padding: 0 0 32px;
    background: white;
    position: relative;
    &>img:first-of-type{
        position: absolute;
        left: 96px;
        top: 450px;
        filter: blur(8px);
    }
    &>img:nth-of-type(2){
        position: absolute;
        right: 144px;
        top: 615px;
    }
`

export const FiltersContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: max-content;
    margin: 0 auto;
`

export const OverflowContainer = styled.div`
    width: 60%;
    overflow-x: scroll;
    margin: 0 auto;
    @media screen and (max-width: 1200px){
        width: 90%;
    }
`

export const FilteredContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    width: 70%;
    margin: 0 auto;
    @media screen and (max-width: 1200px){
        width: 90%;
    }
    @media screen and (max-width: 737px){
        flex-direction: column;
        div{
            margin: 24px auto;
        }
    }
`