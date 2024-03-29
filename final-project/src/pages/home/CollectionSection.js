
import { Box, Card, CardContent, CardMedia, Container, Grid, Icon, Typography, useTheme } from "@mui/material";

import { makeStyles, createStyles } from '@mui/styles';
import { HomePageContext } from "../../contexts/HomePageContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) =>
    createStyles({
        collectionCard: {
            height: 280,
            maxWidth: 377,
            mx: 'auto',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '16px !important',
            [theme.breakpoints.down('sm')]: {
                width: 181,
                height: 180,
                borderRadius: '8px',


            },
        },
        collectionCardContent: {
            position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 1, p: 3,
            background: 'linear-gradient(180deg, rgba(196, 196, 196, 0.00) 0%, rgba(3, 24, 26, 0.46) 100%)',

            [theme.breakpoints.down('sm')]: {
                background: 'linear-gradient(180deg, rgba(196, 196, 196, 0.00) 0%, rgba(3, 24, 26, 0.23) 100%)',


            },
        },
        collectionCardTitle: {
            fontSize: 24,
            fontWeight: '600 !important',


            [theme.breakpoints.down('md')]: {
                fontSize: '16px !important',
                fontWeight: 500,
               

            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '12px !important',
                fontWeight: 500,
                color: '#171520'

            },
        }

    }),
);

export const CollectionSection = ({ collections }) => {
    const classes = useStyles();
    const { featuredRef } = useContext(HomePageContext);

    const navigate = useNavigate(); 

    const handleCardClick = (id) => {
        navigate(`../products/${id}`, {
            state: { url: `https://group1.iscovat.bid/products/handpicked?categoryId=${id}` }
        });
    }
   


    return (
        <Box ref={featuredRef} p={2} sx={{ backgroundColor: '#1B4B66' }}>  <Typography variant="h2" sx={{ fontSize: {xs:14,sm:14,md:24}, color: '#fff', fontWeight: 600 }}>Handpicked Collections</Typography>
            <Grid container spacing={4} mt={0} ml={{ xs: '-39px', sm: '-34px', md: '-35px', lg: '-30px', }} >
                {collections.map((collection) => (
                    <Grid item xs={6} md={3} >
                        <Card key={collection.id}
                            className={classes.collectionCard}
                            onClick={() => handleCardClick(collection.id)}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundImage: `url(https://group1.iscovat.bid/${collection.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',

                                    transition: 'opacity 0.3s ease-in-out', // Smooth transition for hover effect
                                    '&:hover': {
                                        opacity: 0.5,
                                    }
                                }}
                            />
                            <CardContent className={classes.collectionCardContent} >
                                <Typography variant="h5" component="div" color='#171520' className={classes.collectionCardTitle}>
                                    {collection.name}
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}