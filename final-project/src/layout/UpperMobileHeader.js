import { Box, Typography } from "@mui/material"
import { SearchOutlined as SearchIcon } from '@mui/icons-material';
import { useState } from "react";

export const UpperMobileHeader = ({setIsOverlayShown}) => {

    const [path, setPath] = useState('6H14.25');

    return <Box sx={{
        width: '100%', backgroundColor: 'var(--bright)', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', paddingInline: '16px', paddingBlock: '20px'
    }}>

        <Box sx={{ width: '50%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '15px' }}>

            <svg onMouseEnter={() => setPath('6H20.25')} onMouseLeave={() => setPath('6H14.25')} onClick={() => setIsOverlayShown(true)}
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}>
                <path d="M3.75 12H20.25" stroke="#1B4B66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d={"M3.75 " + path} stroke="#1B4B66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.75 18H20.25" stroke="#1B4B66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <Typography sx={{ color: 'var(--primary)', fontWeight: 600 }}>
                Home
            </Typography>

        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <SearchIcon sx={{ color: 'var(--primary)', cursor: 'pointer' }} />

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.26904 9.75C5.2678 8.86051 5.44262 7.97957 5.78343 7.15796C6.12424 6.33635 6.6243 5.59031 7.25477 4.96286C7.88525 4.33541 8.63368 3.83895 9.45693 3.5021C10.2802 3.16525 11.1619 2.99467 12.0514 3.00019C15.7629 3.02778 18.7317 6.11282 18.7317 9.83474V10.5C18.7317 13.8577 19.4342 15.8062 20.0529 16.8711C20.1196 16.9849 20.1551 17.1142 20.1558 17.2461C20.1565 17.378 20.1224 17.5077 20.0569 17.6222C19.9915 17.7367 19.8971 17.8319 19.7831 17.8982C19.6691 17.9646 19.5397 17.9997 19.4078 18H4.59222C4.46034 17.9997 4.33087 17.9645 4.21689 17.8982C4.1029 17.8318 4.00844 17.7366 3.94301 17.6221C3.87759 17.5076 3.84352 17.3778 3.84425 17.2459C3.84498 17.1141 3.88048 16.9847 3.94716 16.8709C4.56622 15.806 5.26904 13.8575 5.26904 10.5L5.26904 9.75Z" stroke="#1B4B66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 18V18.75C9 19.5456 9.31607 20.3087 9.87868 20.8713C10.4413 21.4339 11.2044 21.75 12 21.75C12.7956 21.75 13.5587 21.4339 14.1213 20.8713C14.6839 20.3087 15 19.5456 15 18.75V18" stroke="#1B4B66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </Box>
    </Box>

}