import { Box, Card, CardContent, CardMedia, Container, Grid, Icon, Typography, useTheme } from "@mui/material";

import lifstyle from '../../images/lifestyle.png';
import skincare from '../../images/skincare.png';
import facepacks from '../../images/facepacks.png';
import brightArrow from '../../images/group125.svg';
import blueArrwo from '../../images/bluearrow.svg';
import arrow from '../../images/arrow.svg';
import { makeStyles, createStyles } from '@mui/styles';
import { useContext } from "react";
import { HomePageContext } from "../../contexts/HomePageContext";

import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) =>
    createStyles({
        styledSmallCard: {
            height: 228,
            maxWidth: '100%',
            borderRadius: '8px !important',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            boxShadow: 'none !important',
            cursor: "pointer",
            "&:hover": {
              cursor: "pointer",
            },

            [theme.breakpoints?.down('sm')]: {
                height: 100,

            },
        },
        styledCardContent: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            position: 'absolute',
            top: '50%',
            left: '75%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            textAlign: 'right',
        },
        styledBigCard: {
            height: 400,
            width: '100%',
            borderRadius: '8px !important',
            position: 'relative',
            overflow: 'hidden',
            cursor: "pointer",
            "&:hover": {
              cursor: "pointer",
            },

            [theme.breakpoints?.down('sm')]: {
                height: 132,
            },


        },
        styledCoverImage: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${lifstyle})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
        },
        styledBigcardContent: {


            display: 'flex',
            flexDirection: 'column',
            position: 'absolute', top: 109, left: 0, right: 0, zIndex: 1,
            [theme.breakpoints.down('sm')]: {
                top: 10,

            },


        },
        styledBigCardFirstTitle: {
            fontSize: '36px !important', fontWeight: '400 !important',
            [theme.breakpoints?.down('sm')]: {
                fontSize: '10px  !important'

            },

        },
        styledBigCardSecondTitle: {
            whiteSpace: 'pre-line', fontSize: '52px !important', fontWeight: '700 !important',
            [theme.breakpoints?.down('sm')]: {
                fontSize: '16px  !important'

            },

        },
        styledSmallCardTitle: {
            whiteSpace: 'pre-line',
            fontSize: '40px !important',
            fontWeight: '700 !important',
            [theme.breakpoints?.down('sm')]: {
                fontSize: '14px  !important'

            },
        },
        styledSmallCardImage: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            objectFit: 'unset !important',
            width: '100%',
            height: '100%',

        },
        styledSmallCardIcon: {
            width: 51, height: 51,
            [theme.breakpoints?.down('sm')]: {
                height: 24,
                width: 24
            },
        }
    }),
);




export const ThreeBanners = () => {


    const { trendyRef } = useContext(HomePageContext);

    const classes = useStyles();
    const navigate= useNavigate();
    const handleFirstBanner = () => {
    
        navigate(`../products/discount`, {
          state: { url: `https://group1.iscovat.bid/products/discount-15plus` },
        });
     
      };

      const handleSecondBanner = () => {
    
        navigate(`../products/limited-edition`, {
          state: { url: `https://group1.iscovat.bid/products/limited-edition` },
        });
     
      };

      const handleThirdBanner = () => {
    
        navigate(`../products/popular`, {
          state: { url: `https://group1.iscovat.bid/products/popular` },
        });
     
      };
    return (
        <Box p={2} id={'trendy'} ref={trendyRef}>
            <Typography variant="h2" sx={{display:{xs:'block',sm:'block',md:'none'},fontSize:14 , fontWeight:600}}>Makeup & Skincare</Typography>
            <Grid container spacing={2} mt={1} mb={4} >
                <Grid item xs={12}>
                    <Card className={classes.styledBigCard} onClick={()=>handleFirstBanner()} >
                        <Box
                            className={classes.styledCoverImage}
                        />
                        <CardContent className={classes.styledBigcardContent}>
                            <Typography variant="h3" component="div" color='#97451F ' className={classes.styledBigCardFirstTitle} >
                                LIFESTYLE
                            </Typography>
                            <Typography component='span' variant='body2' color='#97451F' className={classes.styledBigCardSecondTitle}>
                                Makeup Accessories <br />

                                from Top Brands
                            </Typography>

                            <Icon sx={{ display: { xs: 'inline-block', sm: 'inline-block', md: 'none' }, width: 24, height: 26 }}>
                                <img src={arrow} />

                            </Icon>

                        </CardContent>

                    </Card>

                </Grid>
                <Grid item xs={6}>
                    <Card
                        className={classes.styledSmallCard}
                        onClick={()=>handleSecondBanner()}
                    >
                        <CardContent
                            className={classes.styledCardContent}
                        >
                            <Typography
                                component="span"
                                variant="body2"
                                color="#97451F"
                                className={classes.styledSmallCardTitle}
                            >
                                Skincare <br />
                                Essentials
                            </Typography>
                            <Icon className={classes.styledSmallCardIcon}>
                                <img src={brightArrow} />

                            </Icon>
                        </CardContent>
                        <CardMedia
                            component="img"
                            src={skincare}
                            alt="Skincare"
                            className={classes.styledSmallCardImage}
                        />
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card
                        className={classes.styledSmallCard}
                        onClick={()=>handleThirdBanner()}
                    >
                        <CardContent
                            className={classes.styledCardContent}
                        >
                            <Typography
                                component="span"
                                variant="body2"
                                color="#1B4B66"
                                className={classes.styledSmallCardTitle}
                            >
                                Facepacks <br />
                                & Peels
                            </Typography>
                            <Icon className={classes.styledSmallCardIcon}>
                                <img src={blueArrwo} />

                            </Icon>
                        </CardContent>
                        <CardMedia
                            component="img"
                            src={facepacks}
                            alt="Facepacks"
                            className={classes.styledSmallCardImage}
                        />
                    </Card>
                </Grid>
            </Grid>

        </Box>
    )




}