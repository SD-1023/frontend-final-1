import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Backdrop from '@mui/material/Backdrop';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { Paper, Typography, Button, Input, InputAdornment, Box, Link, Icon } from '@mui/material';
import brownBag from '../../images/brownbag.png';
import QuantityInput from '../product/QuantityInput';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { ReactComponent as CartIconSvg } from '../../images/cartIcon.svg';
import { useFetchData } from '../../hooks/useFetchData';
import { useNavigate } from 'react-router-dom';
import { EmptyCart } from './EmptyCart';
export const CartMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [quantity, setQuantity] = useState(1);
  const [url, setUrl] = useState('');
  const [reqOpts, setReqOpts] = useState();
  const { data, loading, error } = useFetchData(url, reqOpts);
  const handleOpen = (event) => {
    try {
      let token = localStorage.getItem('token');
      if (!token) {
        return navigate('/signin');
      }
      token = JSON.parse(token);
      setUrl('https://group1.iscovat.bid/shopping-cart');
      setReqOpts({ headers: { Authorization: token['session_key'] } })

    } catch (e) {
      console.log(e);
    }
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setUrl(null);
    setOpen(false);
    setUrl(null);
    setReqOpts(null)
  };

  const moveToCart = () => {

    navigate('/cart');
    handleClose();
  }


  return (
    <div>
      <Icon
        sx={{ cursor: 'pointer' }}
        size="large"
        aria-label="shopping cart"
        onClick={handleOpen}
        color="inherit"
      >
        <CartIconSvg />
      </Icon>

      <Popover
        sx={{ height: 600 }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >

   {(!data || !data?.products || data?.products.length === 0) && <EmptyCart />}
  {data?.products && data.products.length > 0 &&  <Paper sx={{ p: 2, width: 300 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button startIcon={<KeyboardBackspaceIcon />} onClick={handleClose} sx={{ width: 328, color: '#1B4B66', gap: 2, justifyContent: 'flex-start' }}>Back</Button>


          </div>


          {data?.products?.map((item, index) => (
            <Box key={index} style={{ paddingBlock: '16px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'space-between', borderBottom: '2px solid rgba(0, 0, 0, 0.12)' }}>
              <img
                src={`https://group1.iscovat.bid/${item['image_url']}`}
                alt={item.name}
                style={{ width: '75px', height: '80px' }}
              />
              <div>
                <Typography variant="subtitle1">{item.name}</Typography>
                <Typography variant="body2">${item['price']}</Typography>
                <Typography variant="body2">Qty - {item['quantity']}</Typography>
           


              </div>
              <Box display='flex' flexDirection='column' alignItems='flex-end'>
                <IconButton edge="end" color="inherit" onClick={handleClose}>
                  <CloseIcon />
                </IconButton>

                <Typography>${+item['price'].toFixed(2) * item.quantity}</Typography>
              </Box>

            </Box>
          ))}
          {data && data.products.length !== 0 && <Box mt={2} gap={1} display='flex' flexDirection='column'>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
              <Typography variatn='p' sx={{ fontSize: 14 }}>Sub Total:</Typography>
              <Typography>${data.totalPriceBeforeDiscount.toFixed(2)}</Typography>

            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
              <Typography variatn='p' sx={{ fontSize: 14 }}>Tax:</Typography>
              <Typography>$12.00</Typography>

            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
              <Typography variatn='p' sx={{ fontSize: 16, fontWeight: 500 }}>Total:</Typography>
              <Typography>${+data.totalPriceBeforeDiscount.toFixed(2) + +12}</Typography>

            </Box>
            <Button variant='contained' size='meduim' onClick={moveToCart}
              sx={{ background: '#1B4B66', fontSize: 14, paddingBlock: 1, paddingInline: 4 }}>Place Order</Button>

          </Box>}
          <Box mt={2}>
            <Link to="/shop" style={{ textDecoration: 'none' }} onClick={handleClose}>
              <Typography variant="body2" color="#1B4B66" sx={{ cursor: 'pointer', textAlign: 'center', textDecoration: 'underline' }}>Continue Shopping</Typography>
            </Link>
          </Box>
        </Paper>}


      </Popover>
      <Backdrop open={open} onClick={handleClose} sx={{ zIndex: 1 }} />
    </div>
  );
};


