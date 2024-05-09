import styled from "styled-components"
import { color } from "@/styles/theme"
import { Hex2Rgba } from "@/utils/helpers"

export const Home = styled.div`
    background-color: ${color.bg};
    min-height:100vh;
    height:100%;
`

export const BgPink = styled.div`
    position:absolute;
    top:0;
    left:-20%;
    z-index:0;
    width:555px;
    height:55%;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    overflow:hidden;
    border-radius: 555px;
    background: rgba(189, 45, 135, .65);
    filter: blur(247px);

    & svg{
        position:absolute;
        top:0;
        height:100%;
        width:100%;
        color:${Hex2Rgba("#DA2284", .32)}
    }

    @media (max-width: 768px) {
        filter: blur(100px);
        width:85%;
        height:50%;
    }
`

export const BgBlue = styled.div`
    position:absolute;
    top:35%;
    left:10%;
    z-index:0;
    width:555px;
    height:55%;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    overflow:hidden;
    border-radius: 555px;
    background: rgba(5, 0, 255, .45);
    filter: blur(247px);

    & svg{
        position:absolute;
        top:0;
        height:100%;
        width:100%;
        color:${Hex2Rgba("#DA2284", .32)}
    }

    @media (max-width: 768px) {
        filter: blur(100px);
        width:85%;
        height:50%;
    }
`

export const Container = styled.div`
    max-width: 1255px;
    margin: 0 auto;
    padding: 0 20px;
    height:100%;
    width:100%;
    position:relative;
    z-index:1;
    @media (max-width: 768px) {
        padding: 0 10px;
    }
`

export const HeaderContainer = styled.div`
    width: 100%;
    height: 692.62px;
    padding-top: 24px;
    padding-right: 0px;
    padding-bottom: 24px;
    padding-left: 0px;
    margin-bottom: 100px;
    gap: 10px;
    display:flex;
    justify-content:space-between;

    @media (max-width: 950px) {
        flex-direction:column;
        padding-top:24px;  
        margin-bottom: 350px;   
    }
    @media (max-width: 500px) {
        flex-direction:column;
        padding-top:24px;  
        margin-bottom: 50px;   
    }
`
export const TitleContainer = styled.div`
    width: 60%;
    display:flex;
    flex-direction:column;

    @media (max-width: 950px) {
        width: 100%;
    }
`

export const Title = styled.h1`
    font-size: 100px;
    font-weight: 800;
    line-height: 82px;
    letter-spacing: -0.035em;
    text-align: left;
    margin-bottom: -70px;

    @media (max-width: 950px) {
        font-family: Inter;
        font-size: 100px;
        font-weight: 800;
        line-height: 58px;
        letter-spacing: -0.035em;
        text-align: center;
        margin-bottom: -40px;
    }
    @media (max-width: 500px) {
        font-family: Inter;
        font-size: 60px;
        font-weight: 800;
        line-height: 58px;
        letter-spacing: -0.035em;
        text-align: center;
        margin-bottom: -40px;
    }
`

export const GradientText = styled.span`
    background-color: BD2D87;
    background-image: linear-gradient(180deg, #BD2D87 0%, #5B40FF 100%);
    background-clip:text;
    text-fill-color:transparent;
    background-size:100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
`

export const Desc = styled.h3`
    margin-top: 120px;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;

    @media (max-width: 950px) {
        margin-top: 100px;
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: center;
    }
    @media (max-width: 500px) {
        margin-top: 70px;
        margin-left: 10%;
        margin-right: 10%;
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: center;
    }
`

export const ImageContainer = styled.div`
    margin-top: 100px;
    margin-right: 60px;
    position: relative;
    height: 100%;

    @media (max-width: 950px) {
        margin-top: 50px;
        margin-left: 25%;
        margin-right: 10%;
        position: relative;
        height: 100%;
    }
    @media (max-width: 500px) {
        margin-top: 50px;
        margin-right: 10%;
        margin-left: 10%;
        position: relative;
        height: 100%;
    }
`

export const MainHeaderImage = styled.img`
    margin: auto;
    width: 388px;
    height: 463px;
    border-radius: 24px;
    z-index: 2;

    @media (max-width: 950px) {
        margin: auto;
        width: 463px;
        height: 463px;
        border-radius: 24px;
        z-index: 2;
    }
    @media (max-width: 500px) {
        margin: auto;
        width: 299.17px;
        height: 283px;
        border-radius: 24px;
        z-index: 2;
    }
`

export const SecondHeaderImage = styled.img`
    position: absolute;
    width: 366.81px;
    height: 437.44px;
    top: -48.29px;
    left: -79.62px;
    border-radius: 24px;
    opacity: 0.4;
    z-index: -1;

    @media (max-width: 950px) {
        position: absolute;
        width: 437.44px;
        height: 437.44px;
        top: -48.29px;
        left: -79.62px;
        border-radius: 24px;
        opacity: 0.4;
        z-index: -1;
    }
    @media (max-width: 500px) {
        position: absolute;
        width: 263px;
        height: 249.14px;
        top: -39.52px;
        left: -31.37px;
        border-radius: 24px;
        opacity: 0.4;
        z-index: -1;
    }
`

export const ThirdHeaderImage = styled.img`
    position: absolute;
    width: 341.21px;
    height: 407.61px;
    top: 115.04px;
    left: 103.79px;
    border-radius: 24px;
    opacity: 0.6;
    z-index: -2;

    @media (max-width: 950px) {
        position: absolute;
        width: 407.61px;
        height: 407.61px;
        top: 115.04px;
        left: 103.79px;
        border-radius: 24px;
        opacity: 0.6;
        z-index: -2;
    }
    @media (max-width: 500px) {
        position: absolute;
        width: 263px;
        height: 249.14px;
        top: 70.32px;
        left: 80px;
        border-radius: 24px;
        opacity: 0.6;
        z-index: -2;
    }
`

export const LaunchContainer = styled.div`
    position: relative;
    width: 100%;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 80px;
    padding-left: 0px;
    gap: 66px;
    margin-bottom: 60px;
    border-bottom: 1px solid #EAECF029;
`

export const BottomLaunchContainer = styled.div`
    position: relative;
    width: 100%;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 10px;
    padding-left: 0px;
    gap: 66px;
    margin-bottom: 60px;
`

export const LaunchTitle = styled.h1`
    font-family: Inter;
    font-size: 48px;
    font-weight: 800;
    line-height: 90px;
    letter-spacing: -2px;
    text-align: center;
    padding-top: 0px;

    @media (max-width: 950px) {
        font-family: Inter;
        font-size: 48px;
        font-weight: 800;
        line-height: 50px;
        letter-spacing: -2px;
        text-align: center;
        padding-top: 0px;
    }
    @media (max-width: 500px) {
        font-family: Inter;
        font-size: 48px;
        font-weight: 800;
        line-height: 50px;
        letter-spacing: -2px;
        text-align: center;
        padding-top: 0px;
    }
`

export const LaunchList = styled.div`
    display: -webkit-box;
    width: 100%;
    gap: 10px;
    scroll-behaviorL smooth;
    justify-content: center;
    flex-wrap: nowrap;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    -webkit-scrollbar {
        display: none;
    }

    @media (max-width: 1315px) {
        width: 100%;
        gap: 10px;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    @media (max-width: 500px) {
        width: 100%;
        gap: 10px;
        justify-content: center;
        flex-direction: column;
    }
`

export const LeftScrollBtn = styled.button`
    position: absolute;
    top: 50%;
    left: -60px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    line-height: 0px;
    font-size: 50px;
    background-color: rgba(255,255,255,0);
    color: ${color.primary};
    border: none;
`

export const RightScrollBtn = styled.button`
    position: absolute;
    top: 50%;
    right: -50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    line-height: 0px;
    font-size: 50px;
    background-color: rgba(255,255,255,0);
    color: ${color.primary};
    border: none;
`