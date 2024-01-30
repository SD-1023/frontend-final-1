import { Box, Typography } from "@mui/material"


export const LogoutButton = ({ isMobile }) => {



    return <Box sx={{
        display: { xs: 'flex', sm: isMobile ? 'none' : 'flex' }, justifyContent: 'center', alignItems: 'center', // color: '#1B4B66',
        border: '2px #1B4B66 solid', gap: '8px', borderRadius: '8px', paddingBlock: '5px', paddingInline: '15px',
        '&:hover': { backgroundColor: '#a9c9db', color: 'white', cursor: 'pointer' }
    }}>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_11425_2721)">
                <path d="M16.8125 8.0625L20.75 12L16.8125 15.9375" stroke="#1B4B66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.25 12H20.75" stroke="#1B4B66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.25 20.25H5C4.80109 20.25 4.61032 20.171 4.46967 20.0303C4.32902 19.8897 4.25 19.6989 4.25 19.5V4.5C4.25 4.30109 4.32902 4.11032 4.46967 3.96967C4.61032 3.82902 4.80109 3.75 5 3.75H10.25" stroke="#1B4B66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_11425_2721">
                    <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                </clipPath>
            </defs>
        </svg>

        <Typography color={'#1B4B66'}>
            Logout
        </Typography>



    </Box>
}