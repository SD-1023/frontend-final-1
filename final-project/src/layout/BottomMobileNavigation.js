import { Box } from "@mui/material";
import { HomeNavigationItem } from "./HomeNavigationItem";
import { ProfileNavigationItem } from "./ProfileNavigationItem";
import { CartNavigationItem } from "./CartNavigationItem";


export const BottomMobileNavigation = ({ pathname }) => {

    return <Box sx={{
        width: '100%', position: 'fixed', bottom: 0, left: 0, backgroundColor: 'var(--bright)',
        display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingBlock: '20px', zIndex: 2
    }}>

        <HomeNavigationItem pathname={pathname}/>
        <ProfileNavigationItem pathname={pathname}/> 
        <CartNavigationItem pathname={pathname}/>
    </Box>
}