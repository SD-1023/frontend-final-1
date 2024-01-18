
import { Box, Card, CardContent, CardMedia, Container, Grid, Icon, Typography, useTheme } from "@mui/material";

export const CollectionSection =({collections})=>{

    return (
     <Box p={2} sx={{ backgroundColor: '#1B4B66' }}>  <Typography variant="h2" sx={{ fontSize: 24, color: '#fff', fontWeight: 600 }}>Hadpicked Collections</Typography>
        <Grid container spacing={4} mt={0}   >

            {collections.map((collection) => (
                <Grid item xs={6} md={3} >
                    <Card key={collection.id}
                        sx={{
                            height: 280,
                            maxWidth: 377,
                            mx: 'auto',
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '16px',

                            // background: 'linear-gradient(180deg, rgba(196, 196, 196, 0.00) 0%, rgba(3, 24, 26, 0.46) 100%)',

                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundImage: `url(${collection.img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',

                                transition: 'opacity 0.3s ease-in-out', // Smooth transition for hover effect
                                '&:hover': {
                                    opacity: 0.5,
                                }
                            }}
                        />
                        <CardContent sx={{
                            position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2, p: 3,
                            background: 'linear-gradient(180deg, rgba(196, 196, 196, 0.00) 0%, rgba(3, 24, 26, 0.46) 100%)',

                        }}>
                            <Typography variant="h5" component="div" color='#171520' sx={{ fontSize: 24, fontWeight: 600 }}>
                                {collection.title}
                            </Typography>

                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Box>
    );
}