
import { useContext, useEffect, useState } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { useFetchData } from '../hooks/useFetchData';
import { SearchPanel } from './SearchPanel';
import { SearchContext } from '../contexts/SearchContext';
import { MobileSearchInput } from './MobileSearchInput';

export const Layout = ({ children }) => {

    const { isSearchPanelShown } = useContext(SearchContext);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
    const [isTablet, setIsTablet] = useState(window.innerWidth < 1240 && window.innerWidth >= 800);
    const [isFooterShown, setIsFooterShown] = useState(false);
    const pathname = window.location.pathname;
    const { data: categories } = useFetchData('http://158.176.7.102:3000/category');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 800) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
                setIsFooterShown(false);
            }
            if (window.innerWidth < 1240 && window.innerWidth >= 800) {
                setIsTablet(true);
            } else {
                setIsTablet(false);
            }

        }
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);



    return <>
        <Header isMobile={isMobile} categories={categories || []} pathname={pathname} isTablet={isTablet} />
        {children}
        {isMobile && isSearchPanelShown && <MobileSearchInput />}
        {isSearchPanelShown && <SearchPanel isMobile={isMobile} />}

        <Footer isMobile={isMobile} setIsFooterShown={setIsFooterShown} isFooterShown={isFooterShown} categories={categories ? categories.slice(0, 7) : []} />
    </>;
}