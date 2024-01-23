import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext();


export const SearchProvider = ({ children }) => {

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


    return <SearchContext.Provider value={{searchValue, setSearchValue, isSearchPanelShown, closeSearchPanel, openSearchPanel}}>

        {children}
    </SearchContext.Provider>

}

