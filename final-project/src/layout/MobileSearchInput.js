import { Box, Input, InputAdornment } from "@mui/material"
import { SearchContext } from "../contexts/SearchContext";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";


const debounceInput = (func) => {

    let timeoutId;
    return function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func, 300);
    };
}

export const MobileSearchInput = () => {

    const { searchValue, setSearchValue, closeSearchPanel } = useContext(SearchContext);
    const navigate = useNavigate();
    const searchRef = useRef();


    const SearchStyle = {

        backgroundColor: '#b6b6b647', borderRadius: '5px', padding: '5px', marginLeft: '8px',
        width: 1
    };


    const onPressEnter = (e) => {
        if (!searchValue) {
            return;
        }
        if (e.keyCode == 13) {
            closeSearchPanel();

            setSearchValue('');
            searchRef.current.value = '';
            return navigate('/search', {
                state: searchValue
            });
        }
    }
    const onSearchChange = (e) => {
        setSearchValue(searchRef.current.value);
    }

    return <Box sx={{
        zIndex: 21, position: 'fixed', top: 0, left: 0, width: 1, height: '70px', backgroundColor: 'white',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px'
    }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            onClick={closeSearchPanel} style={{ cursor: 'pointer' }}>
            <g clip-path="url(#clip0_10850_5685)">
                <path d="M15 19.5L7.5 12L15 4.5" stroke="#13101E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_10850_5685">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>

        <Input sx={SearchStyle}
            defaultValue={searchValue}
            inputRef={searchRef}
            onKeyDown={onPressEnter}
            onChange={debounceInput(onSearchChange)}
            disableUnderline={true}
            placeholder={'Search for products or brands.....'}
            endAdornment={
                <InputAdornment position="end">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.875 4C7.07804 4 4 7.07804 4 10.875C4 14.672 7.07804 17.75 10.875 17.75C14.672 17.75 17.75 14.672 17.75 10.875C17.75 7.07804 14.672 4 10.875 4ZM2 10.875C2 5.97347 5.97347 2 10.875 2C15.7765 2 19.75 5.97347 19.75 10.875C19.75 15.7765 15.7765 19.75 10.875 19.75C5.97347 19.75 2 15.7765 2 10.875Z" fill="#13101E" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.736 15.7367C16.1265 15.3462 16.7597 15.3462 17.1502 15.7367L21.7065 20.293C22.0971 20.6836 22.0971 21.3167 21.7065 21.7073C21.316 22.0978 20.6828 22.0978 20.2923 21.7073L15.736 17.151C15.3455 16.7604 15.3455 16.1273 15.736 15.7367Z" fill="#13101E" />
                    </svg>
                </InputAdornment>
            }
        />


    </Box>
}