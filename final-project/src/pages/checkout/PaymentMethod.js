import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Box,
  Typography,
} from "@mui/material";

import applepay from "../../images/applepay.png";
import credit from "../../images/credit.png";

export const PaymentMethod = () => {
  const [selectedValue, setSelectedValue] = useState("option1"); // Initialize with your default value

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        row
        aria-label="icon-radio"
        name="icon-radio"
        value={selectedValue}
        onChange={handleChange}
        defaultValue="top"
      >
        <FormControlLabel
          value="credit"
          labelPlacement="bottom"
          sx={{ border: "1px solid #E3E3E3", borderRadius: 2, minWidth: 160 }}
          control={<Radio />}
          label={
            <Box
              display="flex"
              flexDirection="column"
              gap={2}
              alignItems="center"
              p={2}
            >
              <img src={credit} alt="credit" style={{ height: 40 }} />
              <Typography>Credit/Debit Card</Typography>
            </Box>
          }
        />

        <FormControlLabel
          value="applepay"
          labelPlacement="bottom"
          sx={{ border: "1px solid #E3E3E3", borderRadius: 2, minWidth: 160 }}
          control={<Radio />}
          label={
            <Box
              display="flex"
              flexDirection="column"
              gap={2}
              alignItems="center"
              p={2}
            >
              <img
                src={applepay}
                alt="applepay"
                style={{ width: 110, height: 40 }}
              />
              <Typography>Apple Pay</Typography>
            </Box>
          }
        />
      </RadioGroup>
    </FormControl>
  );
};
