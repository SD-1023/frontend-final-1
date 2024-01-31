import { Box, Button, Typography } from "@mui/material";

export const OrderSummary = ({ data }) => {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          paddingBottom: 1,
          fontSize: 20,
          fontWeight: 600,
          borderBottom: "2px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        Order Details
      </Typography>
      <Box mt={2} display="flex" flexDirection="column" gap={2}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variatn="p">Sub Total:</Typography>
          <Typography>${data?.totalPriceBeforeDiscount?.toFixed(2)}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variatn="p">Discount:</Typography>
          <Typography>-${data?.totalDiscount?.toFixed(2)}</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variatn="p">Delivery Fee:</Typography>
          <Typography>+$12.00</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variatn="p" sx={{ fontWeight: 600 }}>
            Grand Total:
          </Typography>
          <Typography>${+data?.totalDiscountedPrice?.toFixed(2) + 12}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
