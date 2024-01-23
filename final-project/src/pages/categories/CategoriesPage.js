import { experimentalStyled as styled } from '@mui/material/styles';
import { Box, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, Paper, Rating } from '@mui/material';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export const CategoriesPage = () => {


    return (
        <Box sx={{ flexGrow: 1, margin: '20px' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Card sx={{ minWidth: '150px' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={''}
                            />
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography gutterBottom variant="h5" sx={{ fontSize: '16px', fontWeight: 500 }}>
                                        Lizard
                                    </Typography>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z" stroke="#13101E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </Box>

                                <Typography variant="h6" sx={{
                                    fontSize: '14px', fontWeightL: 400, color: '#626262', textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                }}>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                                <Rating
                                    name="simple-controlled"
                                />
                                <Typography sx={{ fontSize: '16px', fontWeight: 500, display: 'flex', alignItems: 'center' }}>
                                    $39.5
                                    <Typography component={'del'} sx={{ fontSize: '14px', fontWeight: 400, marginLeft: '5px', color: '#626262' }}>{/** price before discount */}
                                        $79.00
                                    </Typography>
                                    <Typography component={'span'} sx={{ fontSize: '16px', fontWeight: 400, marginLeft: '5px', color: '#E21D1D' }}>{/**  discount amount  */}
                                        50% OFF
                                    </Typography>

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}



