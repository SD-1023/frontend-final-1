import { Box, Card,  CardMedia,  Grid,  Typography } from "@mui/material";
import { makeStyles, createStyles } from '@mui/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";

import Link from '@mui/material/Link';
import { useContext } from "react";
import { HomePageContext } from "../../contexts/HomePageContext";
const useStyles = makeStyles((theme) =>
    createStyles({
        styledTitle: {
            fontSize: '24px !important', fontWeight: '600 !important',
            [theme.breakpoints.down('md')]: {
                fontSize: '12px !important',

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
            cursor: "pointer",
            "&:hover": {
              cursor: "pointer",
            },
            [theme.breakpoints?.down('sm')]: {
                height: 100,
                width: 100,

            },
        }

    })
);

export const Brands = ({ brands }) => {

    const { brandsRef } = useContext(HomePageContext);
    const classes = useStyles();
    const sliceBrands = brands.slice(0, 6);
    const navigate = useNavigate();

    const handleBrandClick=(id)=>{
        navigate(`../products/${id}`, {
            state: { url: `http://158.176.7.102:3000/products?brandId=${id}` },
          });
    }

    const handleAllBrandClick=()=>{
        navigate(`../products/brand`, {
            state: { url: `http://158.176.7.102:3000/brand` },
          });
    }



    return (
        <>
            <Box p={2} sx={{}} ref={brandsRef}>
                <Box component='div'
                    sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}><Typography variant="h2" className={classes.styledTitle}>Shop by Brands</Typography>
                 
                </Box>
                <Grid container alignItems={'center'} spacing={2} mt={0}   >

                    {sliceBrands.map((brand) => (
                        <Grid item xs={4} md={4} lg={2}>
                            <Card key={brand.id}
                                className={classes.brandCard}
                                onClick ={()=>handleBrandClick(brand.id)}
                                
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