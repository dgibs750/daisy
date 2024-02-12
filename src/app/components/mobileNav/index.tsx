'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as C from "./style";
import Link from "next/link";
import { slide as Menu } from 'react-burger-menu';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { color } from "@/styles/theme";

const MobileNavBar = () => {
    const styles = C.burgerStyles;

    return (
        <C.Header>
            <Link
                href={'/'}
                style={{ textDecoration: 'none' }}
            >
                <C.Logo src="/images/DAISY_Wordmark-16.svg" />
            </Link>
            <Menu right styles={ styles } customBurgerIcon={ <FontAwesomeIcon color={color.primary}icon={faBars} /> }>
                <C.NavSelection>Launchpad</C.NavSelection>
                <C.NavSelection>Auctions</C.NavSelection>
                <C.NavSelection>Generator</C.NavSelection>
                {/* <Link
                    href={'/anton'}
                    style={{ textDecoration: 'none' }}
                > */}
                    <C.NavSelection>Anton</C.NavSelection>
                {/* </Link> */}
                <Link href={'https://airtable.com/app7iJdlG5RS4GicU/shrnTwmhJTBJIVHz7'} target="_blank" style={{ textDecoration: 'none' }}>
                    <C.ApplyButton>Apply Here</C.ApplyButton>
                </Link>
            </Menu>
        </C.Header>
    )
}

export default MobileNavBar;