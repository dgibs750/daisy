'use client';

import * as C from "@/app/style";
import NavBar from "./components/navbar";
import { Roboto, DM_Sans, Poppins } from 'next/font/google'
import { useMediaQuery } from 'react-responsive';
import MobileNavBar from "./components/mobileNav";
import Footer from "./components/footer";
import Link from "next/link";


const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

const dm = DM_Sans({
    weight: '400',
    subsets: ['latin'],
})

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
})

const Home = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 800px)' })

    return (
        <C.Home>
            <C.BgPink></C.BgPink>
            <C.BgBlue></C.BgBlue>
            <C.Container>
                {isMobile ? <MobileNavBar />
                    : <NavBar />
                }
                <C.HeaderContainer>
                    <C.TitleContainer>
                        <C.Title><C.GradientText>For Creators,</C.GradientText></C.Title>
                        <C.Title>By Creators</C.Title>
                        <C.Desc className={poppins.className}>The all-in-one no-code solution for projects on SEI</C.Desc>
                        <C.ButtonRow>
                            <Link href={'/launchpad'} style={{ textDecoration: 'none' }}>
                                <C.ExploreButton>Explore</C.ExploreButton>
                            </Link>
                            <Link href={'https://airtable.com/app7iJdlG5RS4GicU/shrnTwmhJTBJIVHz7'} target="_blank" style={{ textDecoration: 'none' }}>
                                <C.ApplyButton>Create</C.ApplyButton>
                            </Link>
                        </C.ButtonRow>
                    </C.TitleContainer>
                    <C.ImageContainer>
                        <C.ThirdHeaderImage src="https://yrxz5lg7dimie7vqrlfbli36kwtynewjpcoa3wofm5zkbejw4bqq.arweave.net/xG-erN8aGIJ-sIrKFaN-VaeGksl4nA3ZxWdyoJE24GE/147.png" />
                        <C.MainHeaderImage src="https://yrxz5lg7dimie7vqrlfbli36kwtynewjpcoa3wofm5zkbejw4bqq.arweave.net/xG-erN8aGIJ-sIrKFaN-VaeGksl4nA3ZxWdyoJE24GE/43.png" />
                        <C.SecondHeaderImage src="https://yrxz5lg7dimie7vqrlfbli36kwtynewjpcoa3wofm5zkbejw4bqq.arweave.net/xG-erN8aGIJ-sIrKFaN-VaeGksl4nA3ZxWdyoJE24GE/2.png" />
                    </C.ImageContainer>
                </C.HeaderContainer>
                <Footer />
            </C.Container>
        </C.Home>
    )
};

export default Home;