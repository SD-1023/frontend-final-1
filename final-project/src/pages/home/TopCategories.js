import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Icon,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const TopCategories = ({ topCategories }) => {
  const navigate = useNavigate();
  const handleCardClick = (id) => {
<<<<<<< HEAD

=======
>>>>>>> ea0c7a1ca96da6deed22d8a1ad633745f592f919
    navigate(`../products/${id}`, {
      state: { url: `https://group1.iscovat.bid/products?categoryId=${id}` },
    });
  };
  return (
    // <Box  flexDirection= {"column"} sx={{ display: { xs: 'flex', sm:'flex', md: 'flex', lg: 'none', xl: 'none' } }}>

    <Box
      flexDirection={"column"}
      sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none" } }}
    >
      <Box
        p={2}
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: 14, sm: 14, md: 24 }, fontWeight: 600 }}
        >
          Top Categories{" "}
        </Typography>
      </Box>

      <Grid
        p={2}
        container
        spacing={1}
        sx={{ flexWrap: "nowrap", width: "100%", overflowX: "auto" }}
      >
        {topCategories.map((topCategory) => (
          <Grid
            item
            alignItems="column"
            justifyContent="center"
            xs={6}
            key={topCategory.id}
            onClick={() => handleCardClick(topCategory.id)}
          >
            <Card
              sx={{
                boxShadow: 0,
                cursor: "pointer",
              
                "&:hover": {
             
                  cursor: "pointer",
                },
              }}
            >
              <Box
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#F4F4F4",
                  height: 60,
                  width: 60,
                }}
              >
                <CardMedia
                  component="img"
                  src={`https://group1.iscovat.bid/${topCategory.icon}`}
                  alt={topCategory.name}
                  sx={{
                    borderRadius: 2,
                    height: 58,
                    width: 58,
                    objectFit: "none",
                  }}
                />
              </Box>
              <CardContent sx={{ padding: 0, paddingTop: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "column",
                    width: 60,
                  }}
                >
                  <Typography variant="h5" sx={{ fontSize: 12 }}>
                    {topCategory.name}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
