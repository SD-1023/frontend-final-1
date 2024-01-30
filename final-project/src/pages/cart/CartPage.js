import { Box, Rating, CardMedia, Grid, Icon, Button, Tabs, TableContainer } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { CartTable } from "./CartTable";
import { OrderSummary } from "./OrderSummary";


export const CartPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    function handleClick(event, path, state) {
      event.preventDefault();
  
      console.log('state', state);
      navigate(path, {
        state
      });
    }
  return (
    <Box p={2}  flexDirection='column' display='flex' gap={2}>
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
      
        ,
        <Typography key="3" color="text.primary">
          My Cart
        </Typography>
        ,
      </Breadcrumbs>


      <Typography variant="h2" sx={{color:'#1B4B66', fontSize:34, fontWeight:600}}>My Cart</Typography>

      <Grid container spacing={6}>
        <Grid item xs={7}>

           <CartTable/>

        </Grid>
        <Grid item  xs={5}>
            <OrderSummary/>
            
        </Grid>
      </Grid>
    </Box>
  );
};