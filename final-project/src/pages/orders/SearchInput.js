import { Box, Input } from "@mui/material";

export const SearchInput = () => {
    const SearchStyle = {

        backgroundColor: '#b6b6b647', borderRadius: '5px', padding: '5px',
        fontSize: { xs: '14px', md: '16px' }, width: '296px'
    };
    return <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
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
        <Input sx={SearchStyle}
            type='text'
            name='order'
            placeholder="Search"
            autoComplete='order'
            disableUnderline={true}
        />
    </Box>;
}