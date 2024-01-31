import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { HomeNavigationItem } from "./HomeNavigationItem";
import { ProfileNavigationItem } from "./ProfileNavigationItem";
import { CartNavigationItem } from "./CartNavigationItem";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export const BottomMobileNavigation = ({ }) => {


    const { pathname } = useLocation();
    const [currentLink, setCurrentLink] = useState(pathname);

    useEffect(() => {
        setCurrentLink(pathname);
    }, [pathname]);

    return <Box sx={{
        width: '100%', position: 'fixed', bottom: 0, left: 0, backgroundColor: 'var(--bright)',
        display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingBlock: '20px', zIndex: 21
    }}>

        <HomeNavigationItem currentLink={currentLink} setCurrentLink={setCurrentLink} />
        <ProfileNavigationItem currentLink={currentLink} setCurrentLink={setCurrentLink} />
        <CartNavigationItem currentLink={currentLink} setCurrentLink={setCurrentLink} />
    </Box>
}