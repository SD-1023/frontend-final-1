import { Box, Card, CardContent, CardMedia, Container, Grid, Icon, Typography, useTheme } from "@mui/material";
import CardCover from '@mui/joy/CardCover';
import shoulderGirl from '../images/shoulderGirl.png';
import blackBag from '../images/BLACKBAG.png';
import brownBag from '../images/brownbag.png';
import pinkBag from '../images/pinkbag.png';
import watch from '../images/watch.png';
import sunGlass from '../images/sunglass.png';
import perfume from '../images/perfume.png';
import biba from '../images/biba.png';
import zara from '../images/zara.png';
import dolce from '../images/dolce.png';
import chanel from '../images/chanel.png';
import hm from '../images/hm.png';
import prada from '../images/prada.png';
import lifstyle from '../images/lifestyle.png';
import skincare from '../images/skincare.png';
import facepacks from '../images/facepacks.png';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';


import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

let products = [{
    "id": "1",
    "img": blackBag,
    "title": "Grande",
    "price": "$33.33"
},
{
    "id": "2",
    "img": brownBag,
    "title": "Coach",
    "price": "$88.33"
},
{
    "id": "3",
    "img": blackBag,
    "title": "Remus",
    "price": "$23.33"
},
{
    "id": "4",
    "img": brownBag,
    "title": "Boujee",
    "price": "$44.33"
}];
let collections = [{
    "id": "1",
    "img": sunGlass,
    "title": "Sun Glasses",

},
{
    "id": "2",
    "img": watch,
    "title": "Wrist Watch",

},
{
    "id": "3",
    "img": pinkBag,
    "title": "Hand Bag",

},
{
    "id": "4",
    "img": perfume,
    "title": "Personal Care",

}];
let brands = [{
    "id": "1",
    "img": prada,


},
{
    "id": "2",
    "img": dolce,


},
{
    "id": "3",
    "img": hm,


},
{
    "id": "4",
    "img": chanel,

},
{
    "id": "5",
    "img": biba,

},
{
    "id": "6",
    "img": zara,

}
];


export const HomePage = () => {
    const theme = useTheme();

    return (
        <>
            <Box p={1} component='img'
                src={shoulderGirl}
                alt='Shoulder Girl'
                sx={{ display: 'flex', justifyContent: 'center', width: '100%', borderRadius: 10, marginTop: 2, height: 333 }}>
            </Box>
            <Box p={2} component='div'
                sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', marginTop: 3 }}>
                <Typography variant="h2" sx={{ fontSize: 24, fontWeight: 600 }}>New Arrivals</Typography>
                <Link variant="label" href="#" underline="none" color='#1B4B66'>
                    <span style={{ display: "flex", alignItems: "center" }}>
                        View All
                        <ArrowForwardIosIcon />
                    </span>
                </Link>


            </Box>

            <Grid p={2} container spacing={4} mt={1}>
                {products.map((product) => (
                    <Grid item xs={3}>
                        <Card key={product.id} sx={{ boxShadow: 0 }} >
                            <CardMedia component='img' src={product.img} alt={product.img} sx={{ borderRadius: 2 }} />
                            <CardContent >
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Typography variant="h5" sx={{ fontSize: 16 }}>{product.title}</Typography>
                                    <FavoriteBorderIcon></FavoriteBorderIcon>
                                </Box>
                                <Typography variant="p" sx={{ fontWeight: 400, fontSize: 14, color: '#626262' }}>Blossom Pouch</Typography>
                                <Typography sx={{ fontSize: 16, fontWeight: 500 }}>{product.price}</Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                ))}

            </Grid>
            <Box p={2} sx={{ backgroundColor: '#1B4B66' }}>  <Typography variant="h2" sx={{ fontSize: 24, color: '#fff', fontWeight: 600 }}>Hadpicked Collections</Typography>
                <Grid container spacing={4} mt={0}  >

                    {collections.map((collection) => (
                        <Grid item xs={3}>
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



            <Box p={2} sx={{}}>  <Typography variant="h2" sx={{ fontSize: 24, fontWeight: 600 }}>Shop by Brands</Typography>
                <Grid container spacing={2} mt={0}  >

                    {brands.map((brand) => (
                        <Grid item xs={2}>
                            <Card key={brand.id}
                                sx={{
                                    height: 168,
                                    maxWidth: 168,
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
                                        backgroundImage: `url(${brand.img})`,
                                        alt: `url(${brand.img})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',


                                    }}
                                />

                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box sx={{
                height: 400,
                maxWidth: '100%',
                borderRadius: 10,
                position: 'relative',
                overflow: 'hidden',
            }}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${lifstyle})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                    }}
                />
                <CardContent sx={{
                    position: 'absolute', top: 109, left: 0, right: 0, zIndex: 2,

                }}>
                    <Typography variant="h3" component="div" color='#97451F' sx={{ fontSize: 36, fontWeight: 400 }}>
                        LIFESTYLE
                    </Typography>
                    <Typography component='span' variant='body2' color='#97451F' sx={{ whiteSpace: 'pre-line', fontSize: 52, fontWeight: 700, }}>
                        Makeup Accessories <br />

                        from Top Brands
                    </Typography>

                </CardContent>

            </Box>

            <Grid container spacing={2} mt={1}>
                <Grid item xs={6}>
                    <Card
                        sx={{
                            height: 228,
                            maxWidth: '100%',
                            borderRadius: 10,
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <CardContent
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '75%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 2,
                                textAlign: 'right',
                            }}
                        >
                            <Typography
                                component="span"
                                variant="body2"
                                color="#97451F"
                                sx={{
                                    whiteSpace: 'pre-line',
                                    fontSize: 40,
                                    fontWeight: 700,
                                }}
                            >
                                Skincare <br />
                                Essentials
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            src={skincare}
                            alt="Skincare"
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card
                        sx={{
                            height: 228,
                            maxWidth: '100%',
                            borderRadius: 10,
                            position: 'relative',
                            overflow: 'hidden',
                           
                        }}
                    >
                        <CardContent
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '75%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 2,
                                textAlign: 'right',
                            }}
                        >
                            <Typography
                                component="span"
                                variant="body2"
                                color="#97451F"
                                sx={{
                                    whiteSpace: 'pre-line',
                                    fontSize: 40,
                                    fontWeight: 700,
                                }}
                            >
                                Skincare <br />
                                Essentials
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            src={facepacks}
                            alt="Facepacks"
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </Card>
                </Grid>
            </Grid>




        </>


    )



};