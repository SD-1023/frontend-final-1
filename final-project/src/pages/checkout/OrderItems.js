import { CardMedia, Card, Box, Typography, Button } from "@mui/material";
import brownBag from "../../images/brownbag.png";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),

];

export const OrderItems = () => {
  return (
    <Box display="flex" flexDirection="column" gap={2} mb={3}>
      <Typography
        variant="h3"
        sx={{
          paddingBottom: 1,
          fontSize: 20,
          fontWeight: 600,
          borderBottom: "2px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        Order Summary
      </Typography>
      {rows.map((row) => (
        <Card sx={{ display: "flex", boxShadow: "none" }}>
          <CardMedia image={brownBag} sx={{ height: 80, minWidth: 75 }} />
          <Box sx={{ display: "flex", flexDirection: "column", marginLeft: 2 }}>
            <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
              {row.name}
            </Typography>
            <Typography
              sx={{ fontSize: 16, fontWeight: 500, color: "#626262" }}
            >
              {row.name}
            </Typography>
            <Typography
              sx={{ fontSize: 16, fontWeight: 500, color: "#626262" }}
            >
              {row.name}
            </Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
};
