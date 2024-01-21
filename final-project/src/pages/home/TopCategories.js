
import { Box, Card, CardContent, CardMedia, Container, Grid, Icon, Typography, useTheme } from "@mui/material";


export const TopCategories = ({ topCategories }) => {
    return(
    // <Box  flexDirection= {"column"} sx={{ display: { xs: 'flex', sm:'flex', md: 'flex', lg: 'none', xl: 'none' } }}>

    <Box  flexDirection= {"column"} sx={{ display: { xs: 'block', sm: 'block',md:'none',lg:'none' } }}>
        <Box p={2} component='div'
            sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', marginTop: 2 }}>
            <Typography variant="h2" sx={{ fontSize: {xs:14,sm:14,md:24}, fontWeight: 600 }}>Top Categories </Typography>
        </Box>

        <Grid p={2} container spacing={1}  sx={{ flexWrap: 'nowrap', width: '100%', overflowX: 'auto' }} >
            {topCategories.map((topCategory) => (
                <Grid item   alignItems= 'column' justifyContent= 'center'  xs={6}  key={topCategory.id}>
                    <Card sx={{ boxShadow: 0}}>
                        <Box sx={{borderRadius:2,backgroundColor:'#F4F4F4', height:60, width:60}}>
                        <CardMedia component='img' src={`http://158.176.7.102:3000/${topCategory.icon}`} alt={topCategory.name} sx={{ borderRadius: 2 ,height:58, width:58, objectFit:'none'}} />
                        </Box>
                        <CardContent  sx={{padding:0,paddingTop:1}}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems:"center", flexDirection: 'column', width:60 }}>
                                <Typography variant="h5" sx={{ fontSize: 12 }}>{topCategory.name}</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
  
    </Box>
    )
}