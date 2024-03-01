"use client";

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
    background: rgba(5, 0, 255, .35);
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

export const Header = styled.div`
    padding-top:76px;
    display:flex;
    justify-content:space-between;
    align-items:center;

    @media (max-width: 768px) {
        flex-direction:column;
        padding-top:24px;
        &>*:nth-child(2){
            margin:8px 0;
        }
    }
`

export const HeaderButtonContainer = styled.div`
    display: flex;
    gap: 16px;
`

export const Logo = styled.img`
    width:130px;
`

export const ApplyButton = styled.button`
    background-color: transparent;
    color:${color.white};
    border: 1px solid ${color.white};
    padding:0px 24px;
    height:43px;
    display:flex;
    align-items:center;
    border-radius:8px;
    font-size:14px;
    font-weight:500;
    cursor:pointer;
    transition:all .1s ease-in-out;
    &:hover{
        background-color:${Hex2Rgba(color.white, .4)};
    }
    &:active{
        background-color:${Hex2Rgba(color.white, .5)};
    }
`

export const CenterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:85vh;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    font-weight: 700;
    font-size:55px;
    margin-top:-5px;
    margin-bottom:30px;
    text-align: bottom;

    @media (max-width: 800px) {
        font-size:5vw;
        margin-top:0px;
        margin-bottom:-5px;
    }
    @media (max-width: 500px) {
        line-height:100%;
        text-align:center;
        font-size:13vw;
        margin-top:10px;
        margin-bottom:10px;
    }
    @media (min-width: 1500px) {
        font-size:55px;
        margin-top:0px;
        margin-bottom:30px;
    }
`

export const Desc = styled.h3`
    font-weight: 400;
    font-size:22px;
    line-height:100%;
    margin-top:-10px;

    @media (max-width: 800px) {
        font-size:3vw;
        margin-top:10px;
        margin-bottom:-5px;
    }
    @media (max-width: 500px) {
        line-height:100%;
        font-size:4vw;
        margin-top:10px;
    }
    @media (min-width: 1500px) {
        font-size:22px;
        margin-top:-10px;
    }
`

export const ComingSoon = styled.h3`
    font-weight: 600;
    font-size:2vw;

    @media (max-width: 800px) {
        margin-top:20px;
        font-size:4vw;
    }
    @media (max-width: 500px) {
        line-height:100%;
        font-size:5vw;
    }
    @media (min-width: 1500px) {
        font-size:30px;
    }
`

export const Star = styled.img`
    float:top;
    width: 84.49px;
    height: 84.49px;
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