import { Box, Card, CardContent, CardMedia, Container, Grid, Icon, Typography, useTheme } from "@mui/material";
import { makeStyles, createStyles } from '@mui/styles';
const useStyles = makeStyles((theme) =>
    createStyles({
        styledTitle: {
            fontSize: '24px !important', fontWeight: '600 !important',
            [theme.breakpoints.down('sm')]: {
                fontSize: '14px !important',

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
            [theme.breakpoints.down('sm')]: {
                height: 100,
                width: 100,

            },
        }

    }),
);

export const Brands = ({ brands }) => {

    const classes = useStyles();
    brands = brands.slice(0, 6);
    console.log("Brands data:", brands);

    return (
        <>
            <Box p={2} sx={{}}>  <Typography variant="h2" className={classes.styledTitle}>Shop by Brands</Typography>
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
                                    image={`http://158.176.7.102:3000${brand.logo}`}
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