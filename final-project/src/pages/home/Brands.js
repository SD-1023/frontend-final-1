import { Box, Card, CardContent, CardMedia, Container, Grid, Icon, Typography, useTheme } from "@mui/material";
import { makeStyles,createStyles } from '@mui/styles'; 
const useStyles = makeStyles((theme) =>
  createStyles({
    styledTitle :{
        fontSize: '24px !important', fontWeight: '600 !important' ,
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px !important',
            
    },
    },
    brandCard : {
        height: 168,
        width: 168,
        mx: 'auto',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '16px',
        [theme.breakpoints.down('sm')]: {
            height :100,
            width:100,
            
    },
    }

  }),
);

export const Brands =({brands})=>{
    console.log("Brands data:", brands);
    const classes = useStyles();

    return (
        <>
         <Box p={2} sx={{}}>  <Typography variant="h2"  className={classes.styledTitle}>Shop by Brands</Typography>
                <Grid container alignItems={'center'} spacing={2}  mt={0}  >

                    {brands.map((brand) => (
                        <Grid item xs={4} md={4} lg={2}>
                            <Card key={brand.id}
                               className={classes.brandCard}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundImage: `url(${brand.logo})`,
                                        alt: `url(${brand.name})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',


                                    }}
                                />

                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}