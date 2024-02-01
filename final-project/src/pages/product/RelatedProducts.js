import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "@mui/material/Link";

export const RelatedProducts = ({ relatedProducts }) => {
    return(
        <>
        <Typography variant="h5" sx={{borderBottom:1, borderBottomColor:'#F1F1F1'}}>You may also like</Typography>
  <Grid
    p={2}
    container
    spacing={4}
    sx={{ flexWrap: "nowrap", width: "100%", overflowX: "auto" }}
  >

    {relatedProducts.map((product) => (
      <Grid item xs={4} sm={4} md={3} lg={3} key={product.id}>
        <Card key={product.id} sx={{ boxShadow: 0 ,width:150}}>
          <CardMedia
            component="img"
            image={`https://group1.iscovat.bid/${product.ProductImages[0].image_url}`}
            alt={product.name}
            sx={{ borderRadius: 2 }}
          />
          <CardContent
            justifyContent="space-between"
            sx={{
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
                  maxWidth: { xs: "12ch", sm: "15ch", md: "none" },
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
              {product.price}$
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
  </>
    )
   
};
