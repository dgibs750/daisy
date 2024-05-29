'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as C from "./style";
import { Roboto, DM_Sans } from 'next/font/google';
import { faXTwitter, faDiscord, faGit } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { color } from "@/styles/theme";

import { Price, PriceServiceConnection } from"@pythnetwork/price-service-client";
import { useState } from "react";

const dm = DM_Sans({
    weight: '400',
    subsets: ['latin'],
})
    
const Footer = () => {
    // const [livePrice, setLivePrice] = useState<any>();

    // const connection = new PriceServiceConnection("https://hermes.pyth.network", {
    //     priceFeedRequestConfig: {
    //         binary: false,
    //     }
    // });
    // const priceIds = [
    //     "53614f1cb0c031d4af66c04cb9c756234adad0e1cee85303795091499a4084eb"
    // ];

    // connection.subscribePriceFeedUpdates(priceIds, (priceFeed) => {
    //     var priceString = JSON.stringify(priceFeed.getPriceNoOlderThan(60));
    //     console.log(priceString)
    //     var priceObj = JSON.parse(priceString);
    //     var price = (priceObj.price * (10**priceObj.expo))
    //     setLivePrice(price);
    // })

    return (
                <C.Footer>
                    <C.FooterContent className={dm.className}>
                        © 2024 DAISY | All Rights Reserved
                    </C.FooterContent>
                    {/* <C.SeiPrice>
                        SEI • {livePrice}
                    </C.SeiPrice> */}
                    <C.SocialIcons>
                        <Link
                            href={'https://twitter.com/DaisyTools'}
                            target="_blank"
                            style={{ textDecoration: 'none' }}    
                        >
                            <C.Icon src="/images/twitter-x.svg" alt="Twitter" />
                        </Link>
                        <Link
                            href={'https://daisy-7.gitbook.io/daisy/'}
                            target="_blank"
                            style={{ textDecoration: 'none' }}    
                        >
                            <C.Icon src="/images/GitBook_-_Icon_-_Light.svg" alt="Gitbook" />
                        </Link>
                        <Link
                            href={'https://discord.gg/aVDAXQxBtG'}
                            target="_blank"
                            style={{ textDecoration: 'none' }}    
                        >
                            <C.Icon src="/images/discord-mark-white.svg" alt="Discord" />
                        </Link>
                    </C.SocialIcons>
                </C.Footer>
    )
};

export default Footer;