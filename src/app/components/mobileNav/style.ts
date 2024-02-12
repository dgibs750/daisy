"use client";

import styled from "styled-components"
import { color } from "@/styles/theme"
import { Hex2Rgba } from "@/utils/helpers"

export const Header = styled.div`
  padding-top:25px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`

export const Logo = styled.img`
  margin-left:10px;
  width:125px;
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

export const burgerStyles = {
    bmBurgerButton: {
      position: 'absolute',
      width: '36px',
      height: '30px',
      right: '20px',
      top: '25px',
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      top: '0px',
      height: '100%',
    },
    bmMenu: {
      background: 'rgba(17, 9, 41, .9)',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
    },
    bmItem: {
      display: 'block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    }
  }