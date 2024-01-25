import { createContext, useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {


    // const [searchedResults, setSearchResults] = useState(null);
    const [URL, setURL] = useState('');
    const { data: searchedResults, error, loading } = useFetchData(URL);
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
        if (!searchValue) {
            closeSearchPanel();
            return;
        }
        setURL('http://158.176.7.102:3000/search/suggestions?keyword=' + searchValue);
    }, [searchValue]);


    return <SearchContext.Provider value={{
        searchValue, setSearchValue, isSearchPanelShown,
        closeSearchPanel, openSearchPanel, searchedResults: searchValue ? searchedResults : []
    }}>

        {children}
    </SearchContext.Provider>

}

