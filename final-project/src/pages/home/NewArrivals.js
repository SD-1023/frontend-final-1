
import { useNavigate } from "react-router-dom";

import { Box, Card, CardContent, CardMedia, Grid, Typography, requirePropFactory } from "@mui/material";


import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "@mui/material/Link";

export const NewArrivals = ({ newArrival }) => {
   const  allNewArrival = newArrival ? newArrival :[];
  const arrivalsSliced = newArrival ? newArrival.slice(0, 6) : [];
  const navigate = useNavigate();
  const handleSliceNewArrivalClick = (id) => {
    navigate(`../product/${id}`, {
      state: { url: `/products/handpicked?categoryId=${id}` },
    });
 
  };
  const handleViewAllClick =()=>{
    

    navigate(`../products/new-arrivals`, {
        state: { url: `http://158.176.7.102:3000/products/new-arrivals` },
      });
}
  return (
    <Box>
      {" "}
      <Box
        p={2}
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: 14, md: 24 }, fontWeight: 600 }}
        >
          New Arrivals
        </Typography>
      
        <Link
        onClick={() => handleViewAllClick()} 
          variant="label"
         
          underline="none"
          color="#1B4B66"
          sx={{ fontSize: { xs: 12, sm: 12, md: 16 } }}
        >
          <span style={{ display: "flex", alignItems: "center" }}>
            View All
            <ArrowForwardIosIcon />
          </span>
        </Link>
 
      </Box>
      <Grid
        p={2}
        container
        spacing={4}
        sx={{ flexWrap: "nowrap",  overflowX: "auto" }}
      >
        {arrivalsSliced.map((product) => (
          <Grid item xs={4} sm={4} md={3} lg={3} key={product.id} >
            <Card onClick={()=>{handleSliceNewArrivalClick(product.id)}}
              key={product.id}
              sx={{
              
                // Set your desired minimum height
               display:'flex',
                boxShadow: 0,
                cursor: "pointer",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
                   <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
              <CardMedia
                component="img"
                image={`http://158.176.7.102:3000/${product.ProductImages[0].image_url}`}
                alt={product.name}
                sx={{ borderRadius: 2 , height: "100%" }}
              />
              <CardContent
                justifyContent="space-between"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1, 
                   
                  padding: 0,
                  paddingTop: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                 
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: 12, sm: 12, md: 16 },
                      maxWidth: { xs: "12ch", sm: "15ch", md: "15ch" },
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      fontWeight: 600,
                    }}
                  >
                    {product.name}
                  </Typography>
                  <FavoriteBorderIcon
                    sx={{ width: 20, height: 20 }}
                  ></FavoriteBorderIcon>
                </Box>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: 400,
                    fontSize: { xs: 12, sm: 12, md: 16 },
                    color: "#626262",
                  }}
                >
                  {product.sub_title}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: 12, sm: 12, md: 16 }, fontWeight: 600 }}
                >
                  {product.price} $
                </Typography>
              </CardContent>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
