import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material';

const List = styled('ul')({
    listStyle: 'none',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: '12px',
    width: 'max-content'
});

export const Pagination = ({ length, currentPage, setCurrentPage }) => {

    const { items } = usePagination({
        count: length,
        page: currentPage
    });

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

                return <Typography component={'li'} sx={{ padding: 0, margin: 0 }} key={index} onClick={() => setCurrentPage(page)}>
                    {children}
                </Typography>;
            })}
        </List>
        <Button sx={{
            color: '#626262',
            fontSize: { xs: '10px', sm: '12px' },
            paddingBlock: { xs: '3px', sm: '6px' },
            paddingInline: { xs: '0px', sm: '18px' },
            backgroundColor: '#F1F1F1',
            marginLeft: '10px',
            borderRadius: '12px'
        }} {...items.find(item => item.type === 'next')} onClick={() => setCurrentPage(page => page + 1)}>
            Next
        </Button>
    </Box >
    );
}