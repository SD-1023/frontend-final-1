import { Box, Rating,CardMedia, Grid, Icon, Button, Tabs } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useNavigate,useParams } from "react-router-dom";
import brownbag from '../../images/brownbag.png';
import leftArrow from '../../images/chevron-left.svg';
import rightArrow from '../../images/chevron-right.svg';
import blackBag from '../../images/BLACKBAG.png';
import brownBag from '../../images/brownbag.png';
import star from '../../images/Star.svg';
import starEmpty from '../../images/StarEmpty.svg'
import { useFetchData } from "../../hooks/useFetchData";
import { useEffect, useState } from "react";
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';
import QuantityInput from "./QuantityInput";
import FullWidthTabs from "./FullWidthTabs";

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

export const ProductPage = () => {
  const [details,setDetails ]= useState([]);
  const { id } = useParams();
  useEffect(() => {

    fetch(`http://158.176.7.102:3000/products/info/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setDetails(data);
            console.log(data);
           
        })
        .catch((error) => console.log(error));
}, [id]);
 
  console.log(details.reviews)

  const navigate = useNavigate();

  function handleClick(event, path) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
    navigate(path);
  }

  if (!details || !details.images || details.images.length === 0) {
    // Render loading state or handle the absence of details
    return <div>Loading...</div>;
  }
  return (
    <Box p={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link
          underline="hover"
          key="1"
          color="inherit"
          to="./"
          onClick={(event) => handleClick(event, "/")}
        >
          Home
        </Link>
        ,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="./category"
          onClick={(event) => handleClick(event, "/hello")}
        >
          Category
        </Link>
        ,
        <Typography key="3" color="text.primary">
          Label
        </Typography>
        ,
      </Breadcrumbs>

      <Grid container spacing={2} mt={1} >
    
        <Grid  item xs={12} sm={6} >
          <Box component='img' autoHeight src={`http://158.176.7.102:3000/${details.images[0].image_url}`} sx={{ width:'100%', borderRadius:2, objectFit:'cover'}}>

          </Box>  

          <Grid container justifyContent='center' alignItems='center' paddingInline={4} spacing={2} mt={1} >
        
          <Grid item xs={1}  textAlign='center'>
             <Box component='img' src={leftArrow}>
              
             </Box>
            </Grid>
            {products.map((product) => (
            <Grid alignItems='center' item xs={2.5} textAlign='center' >
              <Box component='img' src={product.img}  sx={{height:75, width:75, borderRadius:2}}>

              </Box>
            </Grid>
            ))}

            <Grid item xs={1}>
            <Box component='img' src={rightArrow}>
              
              </Box>
            </Grid>
        
          </Grid>

        
        </Grid>


        <Grid item xs={12} sm={6}  sx={{display:'flex',flexDirection:'column',alignItems:'flex-start', gap:5}} >
       
        <Box>
          <Typography variant="h1"  sx={{fontSize:34, fontWeight:600}}
          >
            {details.details.name}
          </Typography>
          <Typography variant="body2">
          {details.details.description}
          </Typography>
        </Box>

        <Box display={"inline-flex"} gap={2}>
        <Rating name="half-rating-read" precision={0.5} value={details.details.average_rating} readOnly />   
        <Typography variant ='p'  sx={{fontSize:16, fontWeight:400, color:'#B6B6B6', lineHeight:2}}> ({details.details.rating_count}) Ratings</Typography>
        </Box>
        <Box sx={{display:'inline-flex',gap:2, justifyContent:'space-between', alignItems:'center'}}>
        <Typography variant="h3"  sx={{fontSize:40, fontWeight:700}} >  ${details.details.price} </Typography>
        <Typography variant ='p'  sx={{textDecoration:'line-through',textDecorationThickness: 2, fontSize:34, fontWeight:600, color:'#B6B6B6',}}> ${details.details.Discount.percentage} </Typography>
        <Typography variant ='p'  sx={{fontSize:20, fontWeight:600, color:'#FF404B',}}> {details.details.Discount.percentage}% OFF</Typography>

        </Box>

        <Box sx={{display:'inline-flex',gap:2, justifyContent:'space-between', alignItems:'center'}}>
        <Typography variant ='p'  sx={{fontSize:20, fontWeight:600, }}> Quantity</Typography>
      
       <QuantityInput></QuantityInput>

              
        </Box>
        
        <Box sx={{display:'flex',gap:5, justifyContent:'center', alignItems:'center'}}>
        <Button variant='contained' startIcon={<ShoppingBagOutlinedIcon />} sx={{flexGrow:2,width:320, paddingInline : 5,background:'#1B4B66', fontSize:14, fontWeight:600}} >Add to bag</Button>
        <Button  variant="outlined" startIcon={<FavoriteBorderOutlinedIcon />} sx={{flexGrow:1,width:250,color:'#1B4B66', paddingInline :5, fontSize:14, fontWeight:600}} >Add to wishlist</Button>     
       

              
        </Box>
  

        </Grid>
      
      <Grid item xs={12}>

              <FullWidthTabs description={details.details.description } relatedProducts = {details.related_products} reviews={details.reviews}></FullWidthTabs>
              </Grid>
              </Grid>
    </Box>
  );
};
