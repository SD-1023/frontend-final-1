import { Box } from "@mui/material";
import { ProfileNavigationItem } from "./ProfleNavigationItem";

const NavigationItems = ['Personal Information',
    // 'Refer and Earn',
    'My Orders',
    'My Wishlist',
    'My Reviews',
    'My Address Book',
    // 'My Saved Cards'
];

export const ProfileNavigation = ({ currentItem, setCurrentItem }) => {


    return <Box sx={{
        display: { xs: currentItem === '' ? 'flex' : 'none', sm: 'flex' }, flexDirection: 'column', width: { xs: '100%', sm: '35%' }, height: 'fit-content',
        backgroundColor: { xs: 'white', sm: '#F1F1F1' }, borderRadius: '8px', padding: '10px', paddingLeft: '0'
    }}>
        {NavigationItems.map((title) => <ProfileNavigationItem title={title}
            currentItem={currentItem} setCurrentItem={setCurrentItem} />)}
    </Box>
}