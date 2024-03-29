import { Box, Grid, Typography } from '@mui/material';
import { CustomCard } from '../../components/Card';
import { Pagination } from '../../components/Pagination';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetchData } from '../../hooks/useFetchData';


export const CategoriesPage = ({ }) => {

    const { state } = useLocation();
    const { id } = useParams();


    const [currentPage, setCurrentPage] = useState(1);
    let url = `https://group1.iscovat.bid/search?page=${currentPage}&keyword=${state}`;

    if(id){
        url = state.url;
    }

    const { data, loading, error } = useFetchData(url);

    useEffect(() => {

        setCurrentPage(1);
    }, [state]);

    const totalPages = data?.totalPages || 0;


    return (
        <Box sx={{ flexGrow: 1, margin: '20px' }}>
            <Grid container spacing={{ xs: 2, md: 3, lg: 4 }} columns={{ xs: 2, sm: 8, md: 12, lg: 16 }}>
                {loading && <Typography sx={{ margin: 'auto' }}>Loading...</Typography>}
                {error && !loading && <Typography sx={{ margin: 'auto' }}>Something went wrong. Please try again</Typography>}
                {(!data || !data.data?.length) && !loading && !error && <Typography sx={{ margin: 'auto' }}>No result found</Typography>}
                {!loading && !error && data?.data.map((product) => (
                    <Grid item xs={2} sm={4} md={4} key ={product.id}>
                        <CustomCard product={product} state={state} />
                    </Grid>
                ))}
            </Grid>
            <Pagination length={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </Box>
    );
}



