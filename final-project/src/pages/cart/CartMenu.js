import React from 'react';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Backdrop from '@mui/material/Backdrop';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { Paper, Typography, Button, Input, InputAdornment, Box ,Link,Icon} from '@mui/material';
import brownBag from '../../images/brownbag.png';
import QuantityInput from '../product/QuantityInput';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { ReactComponent as CartIconSvg } from '../../images/cartIcon.svg';
export const CartMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  // Replace this data with your actual cart items
  const cartItems = [
    { id: 1, name: 'Item 1', category: 'Category A', image: 'path/to/item1.jpg', quantity: 1 },
    { id: 2, name: 'Item 2', category: 'Category B', image: 'path/to/item2.jpg', quantity: 1 },
    // Add more items as needed
  ];

  return (
    <div>
     <Icon
        size="large"
        aria-label="shopping cart"
        onClick={handleOpen}
        color="inherit"
      >
        <CartIconSvg />
      </Icon>
      <Popover
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
        <Paper sx={{ p: 2, width: 300, height: 600 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button startIcon={<KeyboardBackspaceIcon/>} sx={{width :328,color:'#1B4B66',gap:2,justifyContent:'flex-start'}}>Back</Button>
            
          </div>
          {cartItems.map((item, index) => (
            <Box key={index} style={{ paddingBlock:'16px',marginBottom: '16px', display: 'flex', alignItems: 'center',gap:2,justifyContent:'space-between',borderBottom:'2px solid rgba(0, 0, 0, 0.12)' }}>
              <img
                src={brownBag}
                alt={item.name}
                style={{ width: '75px', height: '80px' }}
              />
              <div>
                <Typography variant="subtitle1">{item.name}</Typography>
                <Typography variant="body2">{item.category}</Typography>
                <QuantityInput size='small'></QuantityInput>

              
              </div>
              <Box display='flex' flexDirection='column' alignItems='flex-end'>
              <IconButton edge="end" color="inherit" onClick={handleClose}>
              <CloseIcon />
            </IconButton>

                <Typography>34.00$</Typography>
              </Box>
           
            </Box>
          ))}
          <Box mt={2}gap={1} display='flex' flexDirection='column'>
          <Box sx={{display:'flex', justifyContent:'space-between'}} >
            <Typography variatn ='p' sx={{fontSize:14}}>Sub Total:</Typography>
            <Typography>12321</Typography>

        </Box>
        <Box sx={{display:'flex', justifyContent:'space-between'}} >
            <Typography variatn ='p' sx={{fontSize:14}}>Tax:</Typography>
            <Typography>12321</Typography>

        </Box>
        <Box sx={{display:'flex', justifyContent:'space-between'}} >
            <Typography variatn ='p' sx={{fontSize:16 , fontWeight:500}}>Total:</Typography>
            <Typography>12321</Typography>

        </Box>
          <Button variant ='contained' size='meduim'   sx={{background:'#1B4B66',fontSize:14, paddingBlock:1, paddingInline:4}}>Place Order</Button>

          </Box>
          <Box mt={2}>
            {/* Add a Link to continue shopping */}
            <Link to="/shop" style={{ textDecoration: 'none' }} onClick={handleClose}>
              <Typography variant="body2" color="#1B4B66" sx={{ cursor: 'pointer', textAlign: 'center',textDecoration: 'underline' }}>Continue Shopping</Typography>
            </Link>
          </Box>
        </Paper>
      </Popover>
      <Backdrop open={open} onClick={handleClose} sx={{ zIndex: 1 }} />
    </div>
  );
};


