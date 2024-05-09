'use client';

import * as C from "./style";
import NavBar from "@/app/components/navbar";
import { Roboto, DM_Sans } from 'next/font/google'
import { useMediaQuery } from 'react-responsive';
import MobileNavBar from "@/app/components/mobileNav";
import Footer from "@/app/components/footer";

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

const dm = DM_Sans({
    weight: '400',
    subsets: ['latin'],
})
    
const Anton = () => {

    const isMobile = useMediaQuery({query: '(max-width: 800px)'})
    const isMobileText = useMediaQuery({query: '(max-width: 500px)'})

    return (
        <C.Home>
            <C.BgPink></C.BgPink>
            <C.BgBlue></C.BgBlue>
            <C.Container>
                {isMobile ? <MobileNavBar/>
                    : <NavBar/>
                }
                <C.CenterContainer>
                    <C.Logo src="/images/Anton-Logos-Full.svg"/>
                    {isMobileText ? 
                        <>
                            <C.Desc className={roboto.className}>He grimly does his work, then he sits motionless until it&apos;s time to work again. We could all take a page from his book.</C.Desc>
                        </>
                        :
                        <>
                            <C.Desc className={roboto.className}>He grimly does his work, then he sits motionless until it&apos;s time to work again.</C.Desc>
                            <C.Desc className={roboto.className}> We could all take a page from his book.</C.Desc>
                        </>
                    }
                    <C.ComingSoon>Coming Soon</C.ComingSoon>
                </C.CenterContainer>
                <Footer />
            </C.Container>
        </C.Home>
    )
};

export default Anton;