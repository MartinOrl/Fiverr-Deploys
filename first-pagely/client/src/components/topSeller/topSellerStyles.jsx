import styled from "styled-components";

export const ProfileContainer = styled.div`
    background-image: ${props => `url(${props.bgUrl})`};
    width: 260px;
    height: 72px;
    position: relative;
    box-shadow: 0px 4px 8px rgba(89,65,176,.08);
    border-radius: 24px;
    margin: 0 24px;
`

export const SellerPicture = styled.img`
    position: absolute;
    left: 0;
    z-index: 2;
    border-radius: 50%;
    border: 1px solid blue;
    top: 55%;
    transform: translateY(-50%);
`