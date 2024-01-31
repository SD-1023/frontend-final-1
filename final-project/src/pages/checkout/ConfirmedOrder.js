import { ArrowBack, Close } from "@mui/icons-material";
import { IconButton, Box, Typography, Button } from "@mui/material";

import art from "../../images/art.svg";
import { useNavigate } from "react-router-dom";

export const ConfirmedOrder = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/");
  };

  return (
    <Box p={2}>
      <Box display="flex" justifyContent="flex-start" alignItems="center">
        <IconButton onClick={handleclick}>
          <Close />
        </IconButton>
        <Typography
          sx={{ fontSize: 20, fontWeight: 600, color: "var(--primary)" }}
        >
          Confirmed
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
          src={art}
          alt=" this is art "
          style={{ width: 239, height: 239 }}
        />

        <Typography
          sx={{ fontSize: 26, fontWeight: 700, color: "var(--dark)" }}
        >
          Cheerio!!
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
          The order has been placed. Thanks for shopping with us. You’ll soon
          recieve the tracking details
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
