import { ArrowBack, Close } from "@mui/icons-material";
import { IconButton, Box, Typography, Button } from "@mui/material";

import art from "../../images/art.svg";
import { useNavigate, useLocation } from "react-router-dom";
import emptycart from "../../images/emptycart.svg";


export const EmptyCart = () => {
    const navigate = useNavigate();
    const location = useLocation();
  
    const handleclick = () => {
      if (location.pathname === "/") {
        // If already on the home page, close the cart
        navigate(-1);
      } else {
        // Navigate to the home page
        navigate("/");
      }
    };

  return (
    <Box p={2} maxWidth={'300px'}>
      <Box display="flex" justifyContent="flex-start" alignItems="center">
        <IconButton onClick={handleclick}>
          <Close />
        </IconButton>
        <Typography
          sx={{ fontSize: 20, fontWeight: 600, color: "var(--primary)" }}
        >
          My Bag
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={2}
        gap={4}
      >
        <img
          src={emptycart}
          alt=" this is empty"
          style={{ width: 239, height: 239 }}
        />

        <Typography
          sx={{ fontSize: 26, fontWeight: 700, color: "var(--dark)" }}
        >
          Uh Oh...!
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: 14,
            fontWeight: 500,
            textAlign: "center",
            color: "var(--dark)",
          }}
        >
          You haven’t added any any items. Start shopping to make your bag bloom
        </Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{ backgroundColor: "var(--primary)" }}
          onClick={handleclick}
        >
          Continue Shopping
        </Button>
      </Box>
    </Box>
  );
};
