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

    setUrl('http://158.176.7.102:3000/orders');
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
    </Box>
  );
};
