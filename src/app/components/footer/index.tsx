'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as C from "./style";
import { Roboto, DM_Sans } from 'next/font/google';
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { color } from "@/styles/theme";

const dm = DM_Sans({
    weight: '400',
    subsets: ['latin'],
})
    
const Footer = () => {

    return (
                <C.Footer>
                    <C.FooterContent className={dm.className}>
                        © 2024 DAISY | All Rights Reserved
                    </C.FooterContent>
                    <C.TwitterIcon>
                        <Link
                            href={'https://twitter.com/SeiTools'}
                            target="_blank"
                            style={{ textDecoration: 'none' }}    
                        >
                            <FontAwesomeIcon color={color.white} icon={faXTwitter} />
                        </Link>
                    </C.TwitterIcon>
                </C.Footer>
    )
};

export default Footer;