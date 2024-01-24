import { createContext, useEffect, useRef, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";

export const HomePageContext = createContext();

export const HomePageProvider = ({ children }) => {


    const featuredRef = useRef();
    const brandsRef = useRef();
    const trendyRef = useRef();


    return <HomePageContext.Provider value={{ featuredRef, brandsRef, trendyRef }} >

        {children}
    </HomePageContext.Provider>

}

