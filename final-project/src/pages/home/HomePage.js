import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Icon,
  Typography,
  useTheme,
} from "@mui/material";
import CardCover from "@mui/joy/CardCover";
import shoulderGirl from "../../images/shoulderGirl.png";
import blackBag from "../../images/BLACKBAG.png";
import brownBag from "../../images/brownbag.png";
import pinkBag from "../../images/pinkbag.png";
import watch from "../../images/watch.png";
import sunGlass from "../../images/sunglass.png";
import perfume from "../../images/perfume.png";
import biba from "../../images/biba.png";
import zara from "../../images/zara.png";
import dolce from "../../images/dolce.png";
import chanel from "../../images/chanel.png";
import hm from "../../images/hm.png";
import prada from "../../images/prada.png";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "@mui/material/Link";
// import { ThemeProvider, styled } from '@mui/material/styles';
import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ThreeBanners } from "./ThreeBanners";
import { Brands } from "./Brands";
import { CollectionSection } from "./CollectionSection";
import { HeroImage } from "./HeroImage";
import { TopCategories } from "./TopCategories";
import { NewArrivals } from "./NewArrivals";



export const HomePage = () => {

  const theme = useTheme();
  const [handpickedCollection, setHandpickedCollection] = useState(null);
  const [shopBrands, setShopBrands] = useState(null);
  const [topCategories, setTopCategories] = useState(null);
  const [newArrivals, setNewArrival] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (url, setDataCallback) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDataCallback(data);
      } catch (error) {
        setError(error.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData("http://158.176.7.102:3000/brand/top", setShopBrands);
    fetchData("http://158.176.7.102:3000/category/top", setTopCategories);
    fetchData("http://158.176.7.102:3000/products/new-arrivals", setNewArrival);
    fetchData("http://158.176.7.102:3000/category/handpicked", setHandpickedCollection);
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }


  return (
    <ThemeProvider theme={theme}>
      <HeroImage></HeroImage>

      <TopCategories topCategories={topCategories || []}></TopCategories>
      <NewArrivals newArrival={newArrivals.data }></NewArrivals>

      <CollectionSection collections={handpickedCollection || []} />

      <Brands brands={shopBrands || []}></Brands>
      <ThreeBanners></ThreeBanners>
    </ThemeProvider>
  );
};

       