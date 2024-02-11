'use client';

import * as C from "@/app/style";
import NavBar from "./components/navbar";
import { Roboto, DM_Sans } from 'next/font/google'
import { useMediaQuery } from 'react-responsive';
import MobileNavBar from "./components/mobileNav";
import Footer from "./components/footer";

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

const dm = DM_Sans({
    weight: '400',
    subsets: ['latin'],
})
    
const Home = () => {

    const isMobile = useMediaQuery({query: '(max-width: 800px)'})

    return (
        <C.Home>
            <C.BgPink></C.BgPink>
            <C.BgBlue></C.BgBlue>
            <C.Container>
                {isMobile ? <MobileNavBar/>
                    : <NavBar/>
                }
                <C.CenterContainer>
                    <C.Logo src="/images/DAISY_White-Logomark-15.svg"/>
                    <C.TitleContainer>
                        <C.Title>
                            <C.GradientText>For Creators,</C.GradientText> By Creators
                            {/* <C.Star src="/images/Star1.svg"></C.Star> */}
                        </C.Title>
                    </C.TitleContainer>
                    <C.Desc className={roboto.className}>Optimized projects from start to finish.</C.Desc>
                    <C.Desc className={roboto.className}>The SEI Network&apos;s all-in-one solution.</C.Desc>
                    <C.ComingSoon>Coming Soon</C.ComingSoon>
                </C.CenterContainer>
                <Footer />
            </C.Container>
        </C.Home>
    )
};

export default Home;