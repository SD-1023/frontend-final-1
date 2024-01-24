import { createContext, useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";

export const SearchContext = createContext();

const debounceInput = (func) => {
    let timeoutId;
    return function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func, 300);
    };
}
const debouncedDoSomething = debounceInput(() => console.log('f'));


export const SearchProvider = ({ children }) => {

    // const { data, error, loading } = useFetchData('');

    const [searchedResults, setSearchResults] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [isSearchPanelShown, setIsSearchPanelShown] = useState(false);

    const closeSearchPanel = () => {
        setIsSearchPanelShown(false);
        document.body.style.overflow = '';
    }
    const openSearchPanel = () => {
        setIsSearchPanelShown(true);
        document.body.style.overflow = 'hidden';
    }

    useEffect(() => {
        
        console.log(searchValue);
    }, [searchValue]);


    return <SearchContext.Provider value={{ searchValue, setSearchValue, isSearchPanelShown, closeSearchPanel, openSearchPanel }}>

        {children}
    </SearchContext.Provider>

}

