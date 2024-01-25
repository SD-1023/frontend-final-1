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
import { NewArrivals } from "./NewArrivals";

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
    const [newArrivals,setNewArrival]= useState([]);
   
    useEffect(() => {

        fetch("http://158.176.7.102:3000/brand")
            .then((response) => response.json())
            .then((data) => {
                setShopBrands(data);
               
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {

        fetch("http://158.176.7.102:3000/products/new-arrivals")
            .then((response) => response.json())
            .then((data) => {
                setNewArrival(data.slice(0,20));
              
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {

        fetch("http://158.176.7.102:3000/category/handpicked")
            .then((response) => response.json())
            .then((data) => {
                setHandpickedCollection(data);
               

            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {

        fetch("http://158.176.7.102:3000/category/top")
            .then((response) => response.json())
            .then((data) => {
                setTopCategories(data);
              
            })
            .catch((error) => console.log(error));
    }, []);
  
                
    //   console.log(newArrivals[0].ProductImages[0].image_url)          

    return (
        <ThemeProvider theme={theme}>
            <HeroImage></HeroImage>

            <TopCategories topCategories={topCategories || []}></TopCategories>
            <NewArrivals newArrival={newArrivals ||[]}></NewArrivals>
         
            <CollectionSection collections={handpickedCollection || []} />



            <Brands brands={shopBrands || []}>
            </Brands>

            <ThreeBanners >
            </ThreeBanners>





        </ThemeProvider>


    )



};