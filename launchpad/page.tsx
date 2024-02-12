"use client";

import * as C from "./style";
import { useEffect, useState } from "react";
import * as db from '@/utils/db-connection';
import CollectionsCard from "@/app/components/collectionsCard";
import Link from "next/link";
import NavBar from "@/app/components/navbar";
    
const Launchpad = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        db.getAllCollections()
        .then((res) => {
            console.log(res);
            setData(res);
        });
    }, [])

    return (
        <C.Home>
            <C.BgPink/>
            <C.BgBlue/>
            <C.Container>
                <NavBar/>
                Current Collections
                {
                    data.map(collection => CollectionsCard(collection))
                }
            </C.Container>
        </C.Home>
    )
};

export default Launchpad;