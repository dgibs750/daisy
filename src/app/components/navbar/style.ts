"use client";

import styled from "styled-components"
import { color } from "@/styles/theme"
import { Hex2Rgba } from "@/utils/helpers"

export const Header = styled.div`
    padding-top:20px;
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

export const NavSelectionContainer = styled.div`
    display: flex;
    gap: 25px;
`

export const HeaderButtonContainer = styled.div`
    display: flex;
    align-items:center;
    gap: 30px;
`

export const Logo = styled.img`
    width:200px;
`

export const ApplyButton = styled.button`
    background-color: ${color.primary};
    color:${color.white};
    padding:0px 24px;
    height:43px;
    display:flex;
    align-items:center;
    border-radius:8px;
    font-size:16px;
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

export const NavSelection = styled.h4`
    font-weight: 600;
    color:${color.white};
    &:hover{
        color:${color.primary};
    }
`