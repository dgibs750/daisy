"use client";

import styled from "styled-components"
import { color } from "@/styles/theme"
import { Hex2Rgba } from "@/utils/helpers"

export const Footer = styled.div`
    bottom:0px;
    padding-top:10px;
    padding-left:10px;
    padding-right:10px;
    display:flex;
    border-top: 1px solid #EAECF029;
    justify-content:space-between;
    align-items: center;
`

export const FooterContent = styled.div`
    margin-top:15px;
    margin-left:5px;
    padding-bottom:10px;
    align-content: center;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;

    @media (max-width: 768px) {
        padding-bottom:5px;
        margin-top:15px;
        margin-left:5px;
        align-content: center;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center;
    }
`

export const TwitterIcon = styled.div`
    font-size:2vw;
    margin-right:5px;
    margin-top:15px;
    padding-bottom:10px;

    @media (max-width: 768px) {
        font-size: 5vw;
        padding-bottom:5px;
    }
    @media (min-width: 1500px) {
        font-size:30px;
    }
`