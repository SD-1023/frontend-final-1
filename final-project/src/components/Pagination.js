import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';

const List = styled('ul')({
    listStyle: 'none',
    // padding: '5px',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: '12px',
    width: 'max-content'
});

export const Pagination = ({ length, setCurrentPage }) => {

    const { items, ...pagination } = usePagination({
        count: Math.ceil(length / 9),
    });
    const handleNextClick = () => {
        pagination.onChange(null, pagination.page + 1);
    };

    const changePage = () => {
        console.log('page')
    }

    return (<Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>

        <List>
            {items.map(({ page, type, selected, ...item }, index) => {
                let children = null;

                if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                    children = '…';
                } else if (type === 'page') {
                    children = (
                        <Button
                            sx={{
                                width: { xs: '30px', sm: '54px' },
                                minWidth: '0',
                                borderRadius: '12px',
                                fontWeight: selected ? '500' : undefined,
                                fontSize: { xs: '10px', sm: '12px' },
                                paddingInline: { xs: '0px', sm: '18px' },
                                paddingBlock: { xs: '3px', sm: '6px' },
                                backgroundColor: selected ? '#1B4B66' : '#F1F1F1',
                                color: selected ? 'white' : '#626262'
                            }}
                            {...item}
                        >
                            {page}
                        </Button>
                    );
                } else {
                    return;
                }

                return <Typography component={'li'} sx={{ padding: 0, margin: 0 }} key={index} onClick={() => setCurrentPage(page - 1)}>
                    {children}
                </Typography>;
            })}
        </List>
        <Button onClick={handleNextClick} sx={{
            color: '#626262',
            fontSize: { xs: '10px', sm: '12px' },
            paddingBlock: { xs: '3px', sm: '6px' },
            paddingInline: { xs: '0px', sm: '18px' },
            backgroundColor: '#F1F1F1',
            marginLeft: '10px',
            borderRadius: '12px'
        }} {...items.find(item => item.type === 'next')}>
            Next
        </Button>
    </Box>
    );
}