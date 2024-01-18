import { Box } from "@mui/material";
import { useState } from "react";


export const ProfileNavigationItem = (pathname) => {

    const condition = pathname === '/profile';
    const [color, setColor] = useState(condition ? 'var(--primary)' : 'var(--light-text)');

    return <Box sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', cursor: 'pointer',
        color: condition ? 'var(--primary)' : 'var(--light-text)', '&:hover': { color: 'var(--primary)' }
    }} onMouseEnter={() => setColor('var(--primary)')} onMouseLeave={() => setColor(condition ? 'var(--primary)' : 'var(--light-text)')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={() => setColor('var(--primary)')} onMouseLeave={() => setColor(condition ? 'var(--primary)' : 'var(--light-text)')}>
            <g clip-path="url(#clip0_10016_507)">
                <path  style={{ stroke: color }} d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="#B6B6B6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_10016_507">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>

        {condition && <span style={{ fontSize: '12px', fontWeight: 500 }}>Profile</span>}
    </Box>
}