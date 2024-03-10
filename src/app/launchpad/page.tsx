"use client";

import * as C from "./style";
import { useEffect, useRef, useState } from "react";
import * as db from '@/utils/db-connection';
import CollectionsCard from "@/app/components/collectionsCard";
import NavBar from "../components/navbar";
import { Poppins } from 'next/font/google';
import Footer from "../components/footer";
import { useMediaQuery } from 'react-responsive';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import MobileNavBar from "../components/mobileNav";

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
})
    
const Launchpad = () => {
    const [data, setData] = useState([]);
    const hasPageBeenRendered = useRef({ effect1: false });
    const mintingNowRef = useRef(null);
    const upcomingRef = useRef(null);
    const pastRef = useRef(null);

    const isMobile = useMediaQuery({query: '(max-width: 800px)'});
    const isGrid = useMediaQuery({query: '(max-width: 1350px)'})

    useEffect(() => {
        if (hasPageBeenRendered.current['effect1']) {
            db.getAllCollections()
            .then((res) => {
                setData(res);
            });
        }
        hasPageBeenRendered.current['effect1'] = true;
    }, [])

    const scroll = (ref: any, scrollOffset: number) => {
        ref.current.scrollLeft += scrollOffset;
    }

    return (
        <C.Home>
            <C.BgPink/>
            <C.BgBlue/>
            <C.Container>
                {isMobile ? <MobileNavBar/>
                    : <NavBar/>
                }
                <C.HeaderContainer>
                    <C.TitleContainer>
                        <C.Title><C.GradientText>For Creators,</C.GradientText></C.Title>
                        <C.Title>By Creators</C.Title>
                        <C.Desc className={poppins.className}>The all-in-one hassle-free solution for projects on SEI</C.Desc>
                    </C.TitleContainer>
                    <C.ImageContainer>
                        <C.ThirdHeaderImage src="https://arweave.net/Z5mY5MqAFULsFX_AXbMh_WZ4hgIZAo2mz8b4uzP6-2U/1410.png"/>
                        <C.MainHeaderImage src="https://arweave.net/BLeWHs72ccmVxIPoJSRsW5EUG58KIzPMGRin8H0sLms/2671.png"/>
                        <C.SecondHeaderImage src="https://arweave.net/QKaCU5Wz1ttQzsj02D0vZjO4GVZ8VnmzHwXJUuKaL9o/3077.png"/>
                    </C.ImageContainer>
                </C.HeaderContainer>
                <C.LaunchContainer>
                    <C.LaunchTitle>Minting Now</C.LaunchTitle>
                    <C.LaunchList ref={mintingNowRef}>
                        { isGrid ? <></>
                            : <C.LeftScrollBtn onClick={() => scroll(mintingNowRef, -290)}><FaAngleLeft /></C.LeftScrollBtn>
                        }
                        {
                            data.map((collection, i) => <CollectionsCard key={i} config={collection} />)
                        }
                        { isGrid ? <></>
                            : <C.RightScrollBtn onClick={() => scroll(mintingNowRef, 290)}><FaAngleRight/></C.RightScrollBtn>
                        }
                    </C.LaunchList>                    
                </C.LaunchContainer>
                <C.LaunchContainer>
                    <C.LaunchTitle>Upcoming Launches</C.LaunchTitle>
                    <C.LaunchList ref={upcomingRef}>
                        { isGrid ? <></>
                            : <C.LeftScrollBtn onClick={() => scroll(upcomingRef, -290)}><FaAngleLeft /></C.LeftScrollBtn>
                        }
                        {
                            data.map((collection, i) => <CollectionsCard key={i} config={collection} />)
                        }
                        { isGrid ? <></>
                            : <C.RightScrollBtn onClick={() => scroll(upcomingRef, 290)}><FaAngleRight/></C.RightScrollBtn>
                        }
                    </C.LaunchList>  
                </C.LaunchContainer>
                <C.BottomLaunchContainer>
                    <C.LaunchTitle>Past Launches</C.LaunchTitle>
                    <C.LaunchList ref={pastRef}>
                        { isGrid ? <></>
                            : <C.LeftScrollBtn onClick={() => scroll(pastRef, -290)}><FaAngleLeft /></C.LeftScrollBtn>
                        }
                        {
                            data.map((collection, i) => <CollectionsCard key={i} config={collection} />)
                        }
                        { isGrid ? <></>
                            : <C.RightScrollBtn onClick={() => scroll(pastRef, 290)}><FaAngleRight/></C.RightScrollBtn>
                        }
                    </C.LaunchList>  
                </C.BottomLaunchContainer>
                <Footer />
            </C.Container>
        </C.Home>
    )
};

export default Launchpad;