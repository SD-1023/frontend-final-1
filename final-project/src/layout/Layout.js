
import { useEffect, useState } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { useFetchData } from '../hooks/useFetchData';


export const Layout = ({ children }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
    const [isTablet, setIsTablet] = useState(window.innerWidth < 1240 && window.innerWidth >= 800);

    const [isFooterShown, setIsFooterShown] = useState(false);
    const pathname = window.location.pathname;
    // const { data: categories } = useFetchData('https://coral-jfwb.onrender.com/category');
    const categories = [{ name: 'dfgdggdfh', id: '1' }, { name: 'gsdfhdhg dgdfgdfgfh ggsgs', id: '1' }, { name: 'gsdfh gfsgfs dhgdfh', id: '1' },
    { name: 'gsdfhdhgdfh', id: '1' }, { name: 'gsdfhdhgdfh', id: '1' }, { name: 'gsdfhdhgdfh', id: '1' },
    { name: 'gsdfhdhgdfh', id: '1' }, { name: 'gsdfhdhgdfh', id: '1' }, { name: 'gsdfhdhgdfh', id: '1' },
    { name: 'gsdfhdhgdfh', id: '1' }, { name: 'gsdfhdhgdfh', id: '1' },];
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
        <Footer isMobile={isMobile} setIsFooterShown={setIsFooterShown} isFooterShown={isFooterShown} categories={categories ? categories.slice(0, 7) : []} />
    </>;
}