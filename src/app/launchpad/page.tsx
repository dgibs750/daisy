"use client";

import * as C from "./style";
import { useEffect, useRef, useState } from "react";
import * as db from "@/utils/db-connection";
import CollectionsCard from "@/app/components/collectionsCard";
import NavBar from "@/app/components/navbar";
import { Poppins } from "next/font/google";
import Footer from "@/app/components/footer";
import { useMediaQuery } from "react-responsive";
import MobileNavBar from "@/app/components/mobileNav";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
})

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ pt: 4 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const a11yProps = (index: number) => {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const Launchpad = () => {
    const [currentCollections, setCurrentCollections] = useState([]);
    const [upcomingCollections, setUpcomingCollections] = useState([]);
    const [pastCollections, setPastCollections] = useState([]);
    const [tabValue, setTabValue] = useState(0);

    const hasPageBeenRendered = useRef({ effect1: false });

    const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    useEffect(() => {
        // if (hasPageBeenRendered.current['effect1']) {
            db.getCurrentCollections()
                .then((res: any) => {
                    setCurrentCollections(res[0]);
                })
            db.getUpcomingCollections()
                .then((res: any) => {
                    setUpcomingCollections(res[0]);
                })
            db.getPastCollections()
                .then((res: any) => {
                    setPastCollections(res[0]);
                })
        }
        // hasPageBeenRendered.current['effect1'] = true;
    // }
        , [])

    const scroll = (ref: any, scrollOffset: number) => {
        ref.current.scrollLeft += scrollOffset;
    }

    return (
        <C.Home>
            <C.BgPink />
            <C.BgBlue />
            <C.Container>
                {isMobile ? <MobileNavBar />
                    : <NavBar />
                }
                <C.LaunchContainer>
                    <Box
                        sx={{ bgcolor: 'none', height: 1, width: 1 }}
                    >
                        <Tabs
                            
                            value={tabValue}
                            onChange={handleTabChange}
                            scrollButtons={false}
                            aria-label="mints"
                            sx={[
                                { borderBottom: 1, width: 1, flexGrow: 0 },
                                (theme) => ({
                                    '.MuiButtonBase-root.MuiTab-root.Mui-selected': {
                                        color: "#F8F7FF"
                                    },
                                    '.MuiTabs-indicator': {
                                        backgroundColor: "rgb(0,0,0,0)",
                                    }
                                })
                            ]}
                        >
                            <Tab 
                                label="Live + Upcoming" 
                                {...a11yProps(0)} 
                                sx={{
                                    fontSize: 28, 
                                    color: "#B0B0B0",
                                    fontFamily: 'Inter',
                                    textTransform: 'none',
                                    letterSpacing: -2,
                                }} 
                            />
                            <Tab 
                                label="Past" 
                                {...a11yProps(1)} 
                                sx={{ 
                                    fontSize: 28, 
                                    color: "#B0B0B0",
                                    fontFamily: 'Inter',
                                    textTransform: 'none',
                                    letterSpacing: -2,
                                }} 
                            />
                        </Tabs>
                        <TabPanel value={tabValue} index={0}>
                            <C.LaunchList>
                                {
                                    currentCollections!.map((collection: any, i: any) => <CollectionsCard key={i} config={collection} />)
                                }
                            </C.LaunchList>
                        </TabPanel>
                        {/* <TabPanel value={tabValue} index={1}>
                            <C.LaunchList>
                                {
                                    upcomingCollections!.map((collection: any, i: any) => <CollectionsCard key={i} config={collection} />)
                                }
                            </C.LaunchList>
                        </TabPanel> */}
                        <TabPanel value={tabValue} index={1}>
                            <C.LaunchList>
                                {
                                    pastCollections!.map((collection: any, i: any) => <CollectionsCard key={i} config={collection} />)
                                }
                            </C.LaunchList>
                        </TabPanel>
                    </Box>
                </C.LaunchContainer>
                <Footer />
            </C.Container>
        </C.Home>
    )
};

export default Launchpad;