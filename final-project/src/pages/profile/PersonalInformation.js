import { Box, Button, Input, TextField, Typography } from "@mui/material"
import { CustomAvatar } from "./CustomAvatar"
import { BasicInformation } from "./BasicInformation"
import { ChangePassword } from "./ChangePassword"

const Arrow = ({ setCurrentItem }) => {

    return <Typography sx={{ cursor: 'pointer', marginTop: '6px', display: { xs: 'block', sm: 'none' } }} onClick={() => setCurrentItem('')}>

        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_11548_8028)">
                <path d="M15 19.5L7.5 12L15 4.5" stroke="#1B4B66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_11548_8028">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>

    </Typography>
}

export const PersonalInformation = ({ currentItem, setCurrentItem }) => {

    return <Box sx={{
        display: { xs: currentItem === 'Personal Information' ? 'block' : 'none', sm: 'block' },
        width: '100%', zIndex: { xs: '22', sm: '1' }, backgroundColor: 'white',
        height: { xs: '100%', sm: '' }, position: { xs: 'fixed', sm: 'static'}, left: 0, top: 0,
        overflow : 'auto', padding: {xs: '16px', sm: ''} 
    }}>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Arrow setCurrentItem={() => setCurrentItem('')} />

            <Typography sx={{ color: { xs: '#1B4B66', sm: '#13101E' }, fontWeight: '600', fontSize: '20px', marginBlock: '6px' }}>
                Personal Information
            </Typography>

        </Box>
        <Typography component={'hr'} sx={{ display: { xs: 'none', sm: 'block' }, border: '1px solid #0000001f' }} />
        <CustomAvatar />

        <BasicInformation />

        <Typography sx={{ color: '#13101E', fontWeight: '600', fontSize: '20px', marginTop: '25px' }}>
            Change Password
        </Typography>
        <Typography component={'hr'} sx={{ border: '1px solid #0000001f' }} />

        <ChangePassword />

        <Box sx={{ display: 'flex', width: 1, flexDirection: 'row-reverse', marginBlock: '15px', justifyContent: {xs: 'center', sm: 'flex-start'} }}>
            <Button variant="contained" sx={{
                textTransform: 'none', backgroundColor: '#1B4B66', height: '38px', color: 'white',
                paddingBlock: '5px', paddingInline: '20px', fontSize: '16px', fontWeight: 500
            }}>
                Save Changes
            </Button>
        </Box>

    </Box>
}