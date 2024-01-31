import { Box, Input, InputAdornment, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
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
            borderBottom: '1px solid var(--primary)',
            cursor: 'pointer'
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
            return navigate('/products', {
                state: searchValue
            });

        }
    }

    const onProfileClicked = () => {
        navigate('/profile');
    }

    const onCategoryClicked = (id) => {
        navigate(`../products/${id}`, {
            state: { url: `http://158.176.7.102:3000/products?categoryId=${id}` }
        });
    }
    return <Box component={'header'} sx={{ ...HeaderStyle }} >
        <Box component={'nav'} sx={FlexStyle}>
            <Logo isTablet={isTablet} />
            {categories.map((cat) => <Link key={cat.id} onClick={() => onCategoryClicked(cat.id)} sx={LinkStyle} underline='none'> {cat.name} </Link>)}
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

                <CartMenu></CartMenu>

            </Box>

        </Box>

    </Box>;
}