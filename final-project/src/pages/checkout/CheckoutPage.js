import {
  Box,
  Rating,
  CardMedia,
  Grid,
  Icon,
  Button,
  Tabs,
  TableContainer,
} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Accordian } from "./Accordian";
import { OrderSummary } from "../cart/OrderSummary";
import { OrderItems } from "./OrderItems";
import { useEffect } from "react";

export const CheckoutPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
//   useEffect (()=>{
//     let token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/signin");
//     }else{
//         //fetch cart 

//     }
// },[])
  
  function handleClick(event, path, state) {
    event.preventDefault();

    console.log("state", state);
    navigate(path, {
      state,
    });
  }

  return (
    <Box p={2} flexDirection="column" display="flex" gap={2}>
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
        , ,
        <Typography key="3" color="text.primary">
          Checkout
        </Typography>
        ,
      </Breadcrumbs>

      <Typography
        variant="h2"
        sx={{ color: "#1B4B66", fontSize: 34, fontWeight: 600 }}
      >
        My Cart
      </Typography>

      <Grid container spacing={6} flexDirection={{ xs: "column-reverse", md: "row" }}>
        <Grid
          item
          xs={12} md={7}
          justifyContent="center"
          display="flex"
          flexDirection="column"
        >
          <Accordian />
          <Box
            mt={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link to="/shop" style={{ textDecoration: "none" }}>
              <Typography
                variant="body2"
                color="#1B4B66"
                sx={{
                  cursor: "pointer",
                  textAlign: "center",
                  textDecoration: "underline",
                }}
              >
                Continue Shopping
              </Typography>
            </Link>
            <Button
              variant="contained"
              size="meduim"
              sx={{
                background: "#1B4B66",
                fontSize: 14,
                paddingBlock: 1,
                paddingInline: 4,
              }}
            >
              Place Order
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <OrderItems />

          <OrderSummary />
        </Grid>
      </Grid>
    </Box>
  );
};