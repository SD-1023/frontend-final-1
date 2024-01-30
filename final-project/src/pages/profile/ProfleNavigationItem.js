import { Box, Typography } from "@mui/material";
import { ArrowForwardIos as ArrowIcon } from '@mui/icons-material';

const CustomSVG = () => {

    return <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>
        <svg width="4" height="54" viewBox="0 0 4 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="4" height="54" rx="2" fill="#17494D" />
        </svg>
    </Typography>;
}

export const ProfileNavigationItem = ({ title, currentItem, setCurrentItem }) => {

    const condition = currentItem === title;

    return <Box sx={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', cursor: 'pointer', '&:hover': 'gray', '&:hover': { backgroundColor: '#F1F1F1'},
        paddingBlock: { xs: '15px', sm: condition ? '0' : '15px' }, paddingLeft: { sm: condition ? '0' : '15px' },
    }}
        onClick={() => setCurrentItem(title)}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            {condition && <CustomSVG />}
            <Typography sx={{ color: { xs: 'black', sm: condition ? "#1B4B66" : 'black' }, fontWeight: 500, fontSize: {xs: '16px', sm: '14px', md: '16px'} }}>
                {title}
            </Typography>
        </Box>
        <ArrowIcon sx={{ color: { xs: 'black', sm: condition ? "#1B4B66" : 'black' } }} />


    </Box>;
}