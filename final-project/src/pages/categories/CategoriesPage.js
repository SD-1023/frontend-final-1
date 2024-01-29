import { Box, Grid, Typography } from '@mui/material';
import { CustomCard } from '../../components/Card';
import { Pagination } from '../../components/Pagination';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetchData } from '../../hooks/useFetchData';


export const CategoriesPage = ({ }) => {

    const { state } = useLocation();
    const { data, loading, error } = useFetchData('http://158.176.7.102:3000/search?keyword=' + state);
    const length = data?.length || 0;
    const [currentPage, setCurrentPage] = useState(0);
    console.log(data)

    return (
        <Box sx={{ flexGrow: 1, margin: '20px' }}>
            <Grid container spacing={{ xs: 2, md: 3, lg: 6, xl: 12 }} columns={{ xs: 2, sm: 8, md: 12, lg: 16}}>
            {loading && <Typography sx={{margin: 'auto'}}>Loading...</Typography>}
            {error && !loading && <Typography sx={{margin: 'auto'}}>Something went wrong. Please try again</Typography>}
                {(!data || !data.length) && !loading && !error && <Typography sx={{margin: 'auto'}}>No result found</Typography>}
                {data?.slice(currentPage * 9, (currentPage*9) + 9).map((product) => (
                    <Grid item xs={2} sm={4} md={4}  key={product.id}>
                        <CustomCard product={product} />
                    </Grid>
                ))}
            </Grid>
            <Pagination length={length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </Box>
    );
}



