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
    min-height:100vh;
    width:100%;
    position:relative;
    z-index:1;
    @media (max-width: 768px) {
        padding: 0 10px;
    }
`

export const LaunchContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 5%;
    padding-right: 0px;
    padding-bottom: 80px;
    padding-left: 0px;
    gap: 66px;
    margin-bottom: 60px;
`

export const LaunchList = styled.div`
    display: flex;
    width: 100%;
    gap: 16px;
    flex-direction: row;
    flex-wrap: wrap;

    @media (max-width: 500px) {
        height: 100%;
        flex-direction: row;
        gap: 0px;
    }
`