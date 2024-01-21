
import { Box, Card, CardContent, CardMedia, Container, Grid, Icon, Typography, useTheme } from "@mui/material";


export const TopCategories = ({ topCategories }) => {
    return(
    // <Box  flexDirection= {"column"} sx={{ display: { xs: 'flex', sm:'flex', md: 'flex', lg: 'none', xl: 'none' } }}>

    <Box  flexDirection= {"column"} sx={{ display: { xs: 'block', sm: 'block',md:'none',lg:'none' } }}>
        <Box p={2} component='div'
            sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', marginTop: 2 }}>
            <Typography variant="h2" sx={{ fontSize: 24, fontWeight: 600 }}>Top Categories </Typography>
        </Box>
        <Grid p={2} container spacing={2} >
            {topCategories.map((topCategory) => (
                <Grid item xs={3} key={topCategory.id}>
                    <Card sx={{ boxShadow: 0 }}>
                        <CardMedia component='img' src={`url(http://158.176.7.102:3000/${topCategory.icon})`} alt={topCategory.name} sx={{ borderRadius: 2 }} />
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Typography variant="h5" sx={{ fontSize: 16 }}>{topCategory.name}</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Box>
    )
}