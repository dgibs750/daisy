import styled from "styled-components"
import { color } from "@/styles/theme"


export const Container = styled.div`
    width: 288px;
    overflow:hidden;

    @media (max-width: 950px) {
        width: 250px;
    }
    @media (max-width: 500px) {
        width: 100%;
    }
`

export const Card = styled.div`
    width: 288px;
    height: 452px;
    margin: 0;
    background: linear-gradient(155.14deg, rgba(0, 0, 0, 0) -2.13%, rgba(255, 255, 255, 0.15) 136.58%);
    border-radius:20px;
    border: 1px solid;
    border-color: rgba(189, 45, 135, 0.15);
    box-shadow: 0px 4px 49px 0px rgba(0, 7, 72, 0.12);

    @media (max-width: 950px) {
        width: 250px;
        height: 400px;
    }
    @media (max-width: 500px) {
        display: flex;
        width: 100%;
        height: 90%;
    }
`

export const CardContainer = styled.div`
    margin-top:12px;
    @media (max-width: 500px) {
        width: 100%;
    }
`

export const NftImage = styled.img`
    object-fit: cover;
    width:100%;
    border-radius: 15px 15px 0px 0px;

    @media (max-width: 950px) {
        width:100%;
        height:60%;
    }
    @media (max-width: 500px) {
        object-fit: cover;
        border-radius: 15px 0px 0px 15px;
        width: calc(100vw - 80%);
        height:100%;
    }
`

export const Title = styled.div`
    margin-left: 20px;
    font-size: 22px;
    line-height:33px;
    text-align:left;
    letter-spacing: 0em;
    font-weight:600;
    color:${color.white};

    @media (max-width: 950px) {
        font-size: 22px;
        line-height:33px;
        text-align:left;
        letter-spacing: 0em;
        font-weight:600;
        color:${color.white};
    }
    @media (max-width: 500px) {
        margin-left: 20px;
        padding-top: 20px;
        font-size: 22px;
        line-height:0px;
        text-align:left;
        letter-spacing: 0em;
        font-weight:600;
        color:${color.white};
    }
`

export const DetailsRow = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    margin-left: 20px;
    width: calc(100% - 40px);
    
    

    @media (max-width: 950px) {
        display: flex;
        flex-direction: row; 
        justify-content:space-between;
        width: calc(100% - 40px);
    }
    @media (max-width: 500px) {
        display: flex;
        flex-direction: row; 
        justify-content:space-between;
        margin-left: 0px;
        padding-right: 20px;
        width: 100%;
    }
`

export const DetailsColumn = styled.div`
    flex-direction: column; 
    color:${color.white};
`

export const LDetails = styled.h1`
    font-weight:600;
    font-size:20px;
    line-height:30px;
    margin-top:-10px;
    
    @media (max-width: 950px) {
        font-weight:600;
        font-size:20px;
        line-height:30px;
    }
    @media (max-width: 500px) {
        padding-left: 30%;
    }
`

export const LDetailFooter = styled.h3`
    font-weight:500;
    font-size:14px;
    line-height:21px;
    margin-top: 25px;

    @media (max-width: 500px) {
        padding-left: 30%;
    }
`

export const RDetails = styled.h1`
    text-align:right;
    font-weight:600;
    font-size:20px;
    line-height:30px;
    margin-top:-10px;

    @media (max-width: 500px) {
        padding-right: 0px;
    }
`

export const RDetailFooter = styled.h3`
    text-align:right;
    font-weight:500;
    font-size:14px;
    line-height:21px;
    margin-top: 25px;

    @media (max-width: 500px) {
        padding-right: 10%;
    }
`

export const Currency = styled.span`
    font-weight:500;
    font-size:14px;
`