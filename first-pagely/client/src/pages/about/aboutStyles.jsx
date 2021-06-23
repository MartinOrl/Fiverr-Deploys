import styled from "styled-components";

export const Background = styled.div`
    clip-path: polygon(0% 0%, 50% 15%, 100% 0%, 100% 100%, 0% 100%);
    background: linear-gradient(-180deg, rgba(237,244,255,1), rgba(250,251,251,.001));
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    z-index: -1;
    @media screen and (max-width: 860px){
        clip-path: polygon(0% 0%, 50% 8%, 100% 0%, 100% 100%, 0% 100%);
    }
`

export const AboutContainer = styled.div`
    width: 100%;
    background: white;
    &>div:last-of-type{

        &>h1{
            text-align: center;
            font-size: 40px;
            margin: 48px 0 32px;
            color: #342d50;
            width: 100%;
            @media screen and (max-width: 720px){
                margin: 24px 0 0;
            }
        }
        &>p{
            font-size: 22px;
        }
        h1{
            width: 100%;
        }
        &>div, &>p{
            width: 80%;
            margin: 16px auto;
        }
        &>div:last-of-type{
            width: 100%;
            margin-bottom: 0;
            padding-bottom: 64px;
            &>h1{
                text-align: center;
                width: 100%;
                margin-top: 64px;
            }
            &>div{
                widtH: 80%;
                margin: 16px auto 0;
            }
            &>div:last-of-type{
                width: 100%;
            }
        }
    }

    p{
        color: #808080;
    }
`

export const AboutHeroContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 32px;
    &>div{
        width: 55%;

        h1{
            font-size: 32px;
            font-weight: 600;
            margin-top: 48px;
            @media screen and (max-width: 1336px){
                margin-top: 24px;
            }
        }
        p{
            font-size: 22px;
        }
    }
    img{
        object-fit: contain;
        width: 35%;
        padding: 16px;
        border-radius: 16px;
        border: 8px solid white;
        background: #f4f7fc;
        height: max-content;
    }
    @media screen and (max-width: 1200px){
        flex-direction: column-reverse;
        div>p{
            font-size: 1.1rem;
        }
        h1{
            text-align: center;
        }
        div{
            width: 100%;
            text-align: center;
        }
        img{
            margin: 16px auto;
            display: block;
            width: 400px;
        }
    }
    @media screen and (max-width: 580px){
        img{
            width: 260px;
        }
    }
    @media screen and (max-width: 400px){
        img{
            width: 100%;
            box-sizing: border-box;
        }
    }
    
`

export const TeamMember = styled.div`
    width: 295px;
    box-sizing: border-box;
    padding: 16px 24px;
    border-radius: 16px;
    position: relative;
    border-radius: 24px;
    background: white;
    text-align: center;
    margin: 16px;
    span{
        width: 32px;
        height: 2px;
        background: #0fd2f5;
        margin: 16px auto;
        display: block;
    }
    h1{
        font-size: 1.4rem
    }
    h1,p{
        margin: 8px 0;
    }
    p:last-of-type{
        color: #afafaf;
    }
    img{
        width: 100%;
        height: 200px;
        margin-bottom: 16px;
        border-radius: 16px;
    }
    div:first-of-type{
        position: absolute;
        bottom: -8px;
        width: 80%;
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
        background: rgba(255,255,255,.6);
        z-index: -1;
        border-radius: 16px;
    }
    div:last-of-type{
        width: 105%;
        height: 100%;
        background: #e2e5e9;
        filter: blur(64px);
        position: absolute;
        z-index: -2;
        bottom: -8px;
        left: 0;
    }
`

export const Holder = styled.div`
    width: 90%;
    margin: 0 auto 48px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    
`





export const SectionTitle = styled.h1`
    
`