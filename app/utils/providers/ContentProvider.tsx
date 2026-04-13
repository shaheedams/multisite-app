/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface siteDataType {
    siteData: any;
}

const ContentProvider = createContext<null | siteDataType>(null);


export const ContentWrapper = ({ children }: { children: ReactNode }) => {
    const [siteData, setSiteData] = useState({});

    // useEffect(()=>{
    //     setSiteData((prev)=>{
    //         return {...prev, brand: 'MultiSite'}
    //     })
    // },[]);


    return (
        <ContentProvider.Provider value={{ siteData }} >
            {children}
        </ContentProvider.Provider>
    )
}

export const useSiteData = () => {
    return useContext(ContentProvider);
}