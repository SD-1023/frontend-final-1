import { Box, Card, CardContent, CardMedia, Container, Grid, Icon, Typography, useTheme } from "@mui/material";
import CardCover from '@mui/joy/CardCover';
import shoulderGirl from '../../images/shoulderGirl.png';
import blackBag from '../../images/BLACKBAG.png';
import brownBag from '../../images/brownbag.png';
import pinkBag from '../../images/pinkbag.png';
import watch from '../../images/watch.png';
import sunGlass from '../../images/sunglass.png';
import perfume from '../../images/perfume.png';
import biba from '../../images/biba.png';
import zara from '../../images/zara.png';
import dolce from '../../images/dolce.png';
import chanel from '../../images/chanel.png';
import hm from '../../images/hm.png';
import prada from '../../images/prada.png';


import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from '@mui/material/Link';
import { ThemeProvider, styled } from '@mui/material/styles';
import { useState, useEffect } from "react";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ThreeBanners } from "./ThreeBanners";
import { Brands } from "./Brands";
import { CollectionSection } from "./CollectionSection";
import { HeroImage } from "./HeroImage";
import { TopCategories } from "./TopCategories";

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
    const [handpickedCollection, setHandpickedCollection] = useState(null);
    const [shopBrands, setShopBrands] = useState(null);
    const [topCategories, setTopCategories] = useState(null);
    useEffect(() => {

        fetch("http://158.176.7.102:3000/brand")
            .then((response) => response.json())
            .then((data) => {
                setShopBrands(data);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {

        fetch("http://158.176.7.102:3000/category/handpicked")
            .then((response) => response.json())
            .then((data) => {
                setHandpickedCollection(data);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {

        fetch("http://158.176.7.102:3000/category/top")
            .then((response) => response.json())
            .then((data) => {
                setTopCategories(data);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);


    return (
        <ThemeProvider theme={theme}>
            <HeroImage></HeroImage>
            <TopCategories topCategories={topCategories || []}></TopCategories>
       
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
            <CollectionSection collections={handpickedCollection || []} />



            <Brands brands={shopBrands || []}>
            </Brands>

            <ThreeBanners >
            </ThreeBanners>





        </ThemeProvider>


    )



};