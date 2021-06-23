import styled from "styled-components";

export const ProfileContainer = styled.div`
    padding: 0 0 32px;
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