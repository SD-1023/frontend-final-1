import {
  Box,
  Rating,
  CardMedia,
  Grid,
  Icon,
  Button,
  Tabs,
  TableContainer,IconButton
} from "@mui/material";
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Accordian } from "./Accordian";
import { OrderSummary } from "../cart/OrderSummary";
import { OrderItems } from "./OrderItems";
import { useEffect, useState } from "react";
import { useFetchData } from "../../hooks/useFetchData";

export const CheckoutPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [url, setUrl] = useState('');
  const [reqOpts, setReqOpts] = useState();
  const { data, loading, error } = useFetchData(url, reqOpts);
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit');

<<<<<<< HEAD
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(' ');
=======

  const [snackbarOpen, setSnackbarOpen] = useState(true);
  const [snackbarMessage, setSnackbarMessage] = useState('hello ');
>>>>>>> ea0c7a1ca96da6deed22d8a1ad633745f592f919

  const handleSnackbarClose = () => {
      setSnackbarOpen(false);
  };

const handleLinkClick = (event, path, state) => {
  event.preventDefault();
 
  navigate(path, { state });
};



  if (data && !data.error) {
    navigate('/confirmed');
  }

  useEffect(() => {
    let token = localStorage.getItem("token");
    token = JSON.parse(token);
    if (!token) {
      navigate("/signin");
    }
  }, []);

  function handleClick(event, path, state) {
    event.preventDefault();

<<<<<<< HEAD
   
=======
>>>>>>> ea0c7a1ca96da6deed22d8a1ad633745f592f919
    navigate(path, {
      state,
    });
  }

  const makeOrder = () => {

    let token = localStorage.getItem("token");
    token = JSON.parse(token);
    const obj = JSON.stringify({
      order_address: {
        full_name: fullName,
        city,
        phone,
        country,
        postal_code: postalCode,
        street,
      },
      payment_method: paymentMethod,

    })

    setUrl('https://group1.iscovat.bid/orders');
    setReqOpts({
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Authorization': token['session_key']
      },
      body: obj
    });

  }
  useEffect(()=>{
    if (data?.error){
   
        setSnackbarMessage(data.error + "");
        setUrl(null);
        setSnackbarOpen(true);
      }
  },[data])
  

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
          <Accordian setFullName={setFullName} setCity={setCity} setPhone={setPhone}
            setStreet={setStreet} setCountry={setCountry} setPostalCode={setPostalCode} setPaymentMethod={setPaymentMethod} />
          <Box
            mt={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Link to="/" 
              onClick={(event) => handleLinkClick(event, "/")}
              style={{ textDecoration: "none" }}>
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
              onClick={makeOrder}
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
          <OrderItems data={state} />

          <OrderSummary data={state} />
        </Grid>
      </Grid>
      <Snackbar
                open={snackbarOpen}
                autoHideDuration={10000} // Adjust the duration as needed
                onClose={handleSnackbarClose}
            >
                <SnackbarContent
                    message={snackbarMessage}
                    action={(
                        <IconButton size="small" color="inherit" onClick={handleSnackbarClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    )}
                />
            </Snackbar>
    </Box>
  );
};
