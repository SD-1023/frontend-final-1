import { Box, Typography, Input, TextField, Grid } from "@mui/material";

export const AddressInfo = ({ setFullName, setCity, setPhone, setStreet, setCountry, setPostalCode, setPaymentMethod }) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Typography sx={{ fontSize: "16px" }}>Full Name</Typography>
        <Input
          placeholder={"Full Name"}
          disableUnderline
          name="fname"
          onChange={(e)=> setFullName(e.target.value)}
          autoComplete="fullname"
          sx={{
            backgroundColor: "#F1F1F1",
            width: "100%",
            paddingBlock: { sm: "8px", md: "12px", lg: "16px" },
            paddingInline: { sm: "6px", md: "10px", lg: "12px" },
            borderRadius: "4px",
          }}
        ></Input>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography sx={{ fontSize: "16px" }}>Mobile Number</Typography>
        <Box sx={{ minWidth: "100%", display: "flex", gap: "10px" }}>
          {/* <Input
            placeholder={"+970"}
            defaultValue={"+970"}
            disableUnderline
            sx={{
              backgroundColor: "#F1F1F1",
              width: "30%",
              paddingBlock: { sm: "8px", md: "12px", lg: "16px" },
              paddingInline: { sm: "6px", md: "10px", lg: "12px" },
              borderRadius: "4px",
            }}
          ></Input> */}
          <Input
            type="number"
            name="phone"
          onChange={(e)=> setPhone(e.target.value)}
            autoComplete="phone"
            placeholder={"59999999"}
            disableUnderline
            sx={{
              "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
              {
                "-webkit-appearance": "none",
                margin: 0,
              },
              backgroundColor: "#F1F1F1",

              paddingBlock: { sm: "8px", md: "12px", lg: "16px" },
              paddingInline: { sm: "6px", md: "10px", lg: "12px" },
              borderRadius: "4px",
            }}
          ></Input>
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography sx={{ fontSize: "16px" }}>Street</Typography>
        <Input
          placeholder={"Street"}
          disableUnderline
          name="street"
          onChange={(e)=> setStreet(e.target.value)}
          autoComplete="street"
          sx={{
            backgroundColor: "#F1F1F1",
            width: "100%",
            paddingBlock: { sm: "8px", md: "12px", lg: "16px" },
            paddingInline: { sm: "6px", md: "10px", lg: "12px" },
            borderRadius: "4px",
          }}
        ></Input>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography sx={{ fontSize: "16px" }}>City</Typography>
        <Input
          placeholder={"City"}
          disableUnderline
          name="city"
          onChange={(e)=> setCity(e.target.value)}
          autoComplete="city"
          sx={{
            backgroundColor: "#F1F1F1",
            width: "100%",
            paddingBlock: { sm: "8px", md: "12px", lg: "16px" },
            paddingInline: { sm: "6px", md: "10px", lg: "12px" },
            borderRadius: "4px",
          }}
        ></Input>
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography sx={{ fontSize: "16px" }}>Country</Typography>
        <Input
          placeholder={"country"}
          disableUnderline
          name="country"
          autoComplete="country"
          onChange={(e)=> setCountry(e.target.value)}
          sx={{
            backgroundColor: "#F1F1F1",
            width: "100%",
            paddingBlock: { sm: "8px", md: "12px", lg: "16px" },
            paddingInline: { sm: "6px", md: "10px", lg: "12px" },
            borderRadius: "4px",
          }}
        ></Input>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography sx={{ fontSize: "16px" }}>Postal Code</Typography>
        <Input
          placeholder={"Postal Code"}
          disableUnderline
          name="pin_code"
          onChange={(e)=> setPostalCode(e.target.value)}
          autoComplete="pin_code"
          sx={{
            backgroundColor: "#F1F1F1",
            width: "100%",
            paddingBlock: { sm: "8px", md: "12px", lg: "16px" },
            paddingInline: { sm: "6px", md: "10px", lg: "12px" },
            borderRadius: "4px",
          }}
        ></Input>
      </Grid>
    </Grid>
  );
};
