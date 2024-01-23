import { Box, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";


export const SearchPanel = ({ isMobile }) => {

    const searchedResults = ['res1', 'res2', 'res3'];
    const [color, setColor] = useState('');
    const { isSearchPanelShown } = useContext(SearchContext);


    document.body.style.overflow = 'hidden';

    return <Box sx={{
        width: isMobile ? '100%' : '400px', backgroundColor: 'white', zIndex: 21, minHeight: isMobile ? '100%' : '50%',
        position: 'fixed', right: 0, top: '70px', marginRight: isMobile ? 0 : '7%', padding: '16px',
        // transition: 'transform 0.5s ease-in-out', transform: isSearchPanelShown ? 'translateX(0)' : 'translateX(100%)'
        //, display: isSearchPanelShown ? '' : 'none'
    }}>

        {searchedResults.map((res, i) => <Box key={i} sx={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', padding: '10px', '&:hover': { backgroundColor: '#b5b7b9' }
        }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}
                // onMouseEnter={() => setColor('white')} onMouseLeave={() => setColor('#7E7E7E')}
                onClick={() => console.log(i)}
            >
                <path d="M17 7L7 17" stroke={'#7E7E7E'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7 7L17 17" stroke={'#7E7E7E'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <Typography sx={{ width: 1, marginLeft: '10px' }}>{res}</Typography>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}
                onClick={() => console.log(i)}
            >
                <path d="M16.3333 16.3333L8 8" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 16.3333V8H16.3333" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </Box>
        )}
    </Box>;
}