import { Box, Input, InputAdornment, Link } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { Logo } from './Logo';
import { useContext, useRef } from 'react';
import { SearchContext } from '../contexts/SearchContext';
import { useNavigate } from "react-router-dom";
import { CartMenu } from '../pages/cart/CartMenu';

const debounceInput = (func) => {

    let timeoutId;
    return function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func, 300);
    };
}

export const WebHeader = ({ categories, isTablet }) => {

    const navigate = useNavigate();
    const { searchValue, setSearchValue, openSearchPanel, closeSearchPanel } = useContext(SearchContext);
    const searchRef = useRef();
    const FlexStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    const LinkStyle = {
        padding: {
            xs: '5px',
            lg: '10px'
        },
        fontWeight: 600,
        color: 'var(--dark)',
        fontSize: {
            xs: '14px',
            lg: '16px'
        },
        "&:hover": {
            borderBottom: '1px solid var(--primary)'
        },
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        maxWidth: isTablet ? '100px' : '150px'
    }

    const HeaderStyle = {
        paddingBlock: '5px',
        paddingInline: '20px',
        height: '70px',
        ...FlexStyle

    }

    const SearchStyle = {

        backgroundColor: '#b6b6b647', borderRadius: '5px', padding: '5px',
        fontSize: { xs: '14px', md: '16px' }, width: isTablet ? '70%' : '362px'
    };

    const onSearchChange = (e) => {
        openSearchPanel();
        setSearchValue(searchRef.current.value);
    }

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

    const onProfileClicked = () => {
        navigate('/profile');
    }
    return <Box component={'header'} sx={{ ...HeaderStyle }} >
        <Box component={'nav'} sx={FlexStyle}>
            <Logo isTablet={isTablet} />
            {categories.map((cat) => <Link key={cat.id} component={RouterLink} sx={LinkStyle} underline='none'> {cat.name} </Link>)}
        </Box>
        <Box sx={{ ...FlexStyle, gap: '15px' }}>

            <Input sx={SearchStyle}
                inputRef={searchRef}
                type='text'
                name='whatever'
                autoComplete='whatever'
                onKeyDown={onPressEnter}
                onChange={debounceInput(onSearchChange)}
                disableUnderline={true}
                placeholder={'Search for products or brands.....'}
                startAdornment={
                    <InputAdornment position="start">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.875 4C7.07804 4 4 7.07804 4 10.875C4 14.672 7.07804 17.75 10.875 17.75C14.672 17.75 17.75 14.672 17.75 10.875C17.75 7.07804 14.672 4 10.875 4ZM2 10.875C2 5.97347 5.97347 2 10.875 2C15.7765 2 19.75 5.97347 19.75 10.875C19.75 15.7765 15.7765 19.75 10.875 19.75C5.97347 19.75 2 15.7765 2 10.875Z" fill="#13101E" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.736 15.7367C16.1265 15.3462 16.7597 15.3462 17.1502 15.7367L21.7065 20.293C22.0971 20.6836 22.0971 21.3167 21.7065 21.7073C21.316 22.0978 20.6828 22.0978 20.2923 21.7073L15.736 17.151C15.3455 16.7604 15.3455 16.1273 15.736 15.7367Z" fill="#13101E" />
                        </svg>
                    </InputAdornment>
                }
            />

            <Box sx={{ ...FlexStyle, gap: '15px' }}>
                <svg style={{ cursor: 'pointer' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z" stroke="#1B4B66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <svg style={{ cursor: 'pointer' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onProfileClicked}>
                    <g clip-path="url(#clip0_10242_4733)">
                        <path d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="#1B4B66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_10242_4733">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>


                <svg style={{ cursor: 'pointer' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_10242_4725)">
                        <path d="M19.5787 6.75H4.42122C4.23665 6.75 4.05856 6.81806 3.92103 6.94115C3.7835 7.06425 3.69619 7.23373 3.67581 7.41718L2.34248 19.4172C2.33083 19.522 2.34143 19.6281 2.37357 19.7286C2.40572 19.829 2.4587 19.9216 2.52904 20.0002C2.59939 20.0788 2.68553 20.1417 2.78182 20.1847C2.87812 20.2278 2.98241 20.25 3.08789 20.25H20.912C21.0175 20.25 21.1218 20.2278 21.2181 20.1847C21.3144 20.1417 21.4005 20.0788 21.4708 20.0002C21.5412 19.9216 21.5942 19.829 21.6263 19.7286C21.6585 19.6281 21.6691 19.522 21.6574 19.4172L20.3241 7.41718C20.3037 7.23373 20.2164 7.06425 20.0789 6.94115C19.9413 6.81806 19.7632 6.75 19.5787 6.75Z" stroke="#1B4B66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.25 5.75C8.25 4.75544 8.64509 3.80161 9.34835 3.09835C10.0516 2.39509 11.0054 2 12 2C12.9946 2 13.9484 2.39509 14.6517 3.09835C15.3549 3.80161 15.75 4.75544 15.75 5.75" stroke="#1B4B66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_10242_4725">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg> */}
                <CartMenu></CartMenu>

            </Box>

        </Box>

    </Box>;
}