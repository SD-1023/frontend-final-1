import { Box, Grid } from '@mui/material';
import { CustomCard } from '../../components/Card';
import { Pagination } from '../../components/Pagination';


export const CategoriesPage = () => {


    return (
        <Box sx={{ flexGrow: 1, margin: '20px' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <CustomCard />
                    </Grid>
                ))}
            </Grid>
            <Pagination/> 
        </Box>
    );
}



