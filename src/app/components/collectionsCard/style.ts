import styled from "styled-components"
import { color } from "@/styles/theme"
import { Hex2Rgba } from "@/utils/helpers"


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
    padding: 20px;
    background: linear-gradient(155.14deg, rgba(0, 0, 0, 0) -2.13%, rgba(255, 255, 255, 0.15) 136.58%);
    border-radius:20px;
    border: 1px solid;
    border-color: rgba(189, 45, 135, 0.15);
    box-shadow: 0px 4px 49px 0px rgba(0, 7, 72, 0.12);

    @media (max-width: 950px) {
        width: 250px;
        height: 400px;
        padding: 20px;
    }
    @media (max-width: 500px) {
        display: flex;
        width: 100%;
        height: 90%;
        padding: 20px; 
    }
`

export const CardContainer = styled.div`
    margin-top:12px;
`

export const NftImage = styled.img`
    width:248px;
    height:281px;
    border-radius: 15px;

    @media (max-width: 950px) {
        width:100%;
        height:60%;
    }
    @media (max-width: 500px) {
        width:30%;
        height:100%;
    }
`

export const Title = styled.div`
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
        font-size: 22px;
        line-height:0px;
        margin-bottom: 5%;
        text-align:center;
        letter-spacing: 0em;
        font-weight:600;
        color:${color.white};
    }
`

export const DetailsRow = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content:space-between;
    width: 248px;
    
    padding: 0px, 3px, 0px, 3px;
    gap: 40px;

    @media (max-width: 950px) {
        display: flex;
        flex-direction: row; 
        justify-content:space-between;
        width: 100%;
        
        padding: 0px, 3px, 0px, 3px;
        gap: 40px;
    }
    @media (max-width: 500px) {
        display: flex;
        flex-direction: row; 
        justify-content:space-between;
        width: 100%;
        
        padding: 0px, 3px, 0px, 3px;
        gap: 20px;
    }
`

export const DetailsColumn = styled.div`
    flex-direction: column; 
    width: 101px;
    color:${color.white};
`

export const LDetails = styled.h1`
    font-weight:600;
    font-size:20px;
    line-height:30px;
    
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
    margin-top:-10px;

    @media (max-width: 500px) {
        padding-left: 30%;
    }
`

export const RDetails = styled.h1`
    text-align:right;
    font-weight:600;
    font-size:20px;
    line-height:30px;
`

export const RDetailFooter = styled.h3`
    text-align:right;
    font-weight:500;
    font-size:14px;
    line-height:21px;
    margin-top:-10px;
`

export const Currency = styled.span`
    font-weight:500;
    font-size:14px;
`