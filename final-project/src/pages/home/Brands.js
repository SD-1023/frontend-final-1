import { Box, Card, CardContent, CardMedia, Container, Grid, Icon, Typography, useTheme } from "@mui/material";
import { makeStyles, createStyles } from '@mui/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Link from '@mui/material/Link';
const useStyles = makeStyles((theme) =>
    createStyles({
        styledTitle: {
            fontSize: '24px !important', fontWeight: '600 !important',
            [theme.breakpoints?.down('sm')]: {
                fontSize: '14px!important',

            },
        },
        brandCard: {
            padding: 8,
            height: 168,
            width: 168,
            mx: 'auto',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '16px !important',
            backgroundColor: '#F4F4F4 !important',
            [theme.breakpoints?.down('sm')]: {
                height: 100,
                width: 100,

            },
        }

    })
);

export const Brands = ({ brands }) => {

    const classes = useStyles();
    brands = brands.slice(0, 6);
    console.log("Brands data:", brands);

    return (
        <>
            <Box p={2} sx={{}}>
                <Box component='div'
                    sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}><Typography variant="h2" className={classes.styledTitle}>Shop by Brands</Typography>
                    <Link variant="label" href="#" underline="none" color='#1B4B66' sx={{ fontSize: { xs: 12, sm: 12, md: 16 }, display: { xs: 'block', sm: 'block', md: 'none' } }}>
                        <span style={{ display: "flex", alignItems: "center" }}>
                            View All
                            <ArrowForwardIosIcon />
                        </span>
                    </Link>
                </Box>
                <Grid container alignItems={'center'} spacing={2} mt={0}   >

                    {brands.map((brand) => (
                        <Grid item xs={4} md={4} lg={2}>
                            <Card key={brand.id}
                                className={classes.brandCard}
                            >
                                <CardMedia
                                    component="img"
                                    alt={brand.name}
                                    height="100%"
                                    image={`http://158.176.7.102:3000/${brand.logo}`}
                                    title={brand.name}
                                    sx={{ objectFit: 'scale-down', }}
                                />


                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}