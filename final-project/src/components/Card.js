import { Box, CardContent, CardMedia, Rating, Typography, Card } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";


export const CustomCard = ({ product, state }) => {

    const navigate = useNavigate();
    const priceAfterDiscount = (product.price - (product.price * (product.Discount.percentage / 100))).toFixed(2);

    const onCardPressed = () => {

        navigate(`../product/${product.id}`, {
            state
        })
    }
    return (
        <Card sx={{ minWidth: '150px', boxShadow: '0', cursor: 'pointer' }} onClick={onCardPressed} >
            <CardMedia component="img" alt="green iguana" height="140"
                image={'http://158.176.7.102:3000/' + product.ProductImages[0]['image_url']} />
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography gutterBottom variant="h5" sx={{ fontSize: { xs: '12px', md: '16px' }, fontWeight: 500 }}>
                        {product.name}
                    </Typography>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.62519 7.49826 3.01561 6.40635 3.72989 5.53493C4.44416 4.66351 5.4382 4.06636 6.54299 3.84501C7.64778 3.62367 8.79514 3.79179 9.78999 4.32079C10.7848 4.84979 11.5658 5.70702 12 6.74673L12 6.74673C12.4342 5.70702 13.2152 4.84979 14.21 4.32079C15.2049 3.79179 16.3522 3.62367 17.457 3.84501C18.5618 4.06636 19.5558 4.66351 20.2701 5.53493C20.9844 6.40635 21.3748 7.49826 21.375 8.62501C21.375 15 12 20.25 12 20.25Z" stroke="#13101E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </Box>

                <Typography variant="h6" sx={{
                    fontSize: { xs: '12px', md: '16px' }, fontWeightL: 400, color: '#626262', textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                }}>
                    {product['sub_title']}
                </Typography>
                <Box sx={{ fontSize: { xs: '14px', md: '16px' }, fontWeight: 400, display: 'flex', alignItems: 'center' }}>
                    <Rating name="half-rating-read" color="#FF8C4B" defaultValue={product['average_rating']} precision={'0.1'} readOnly />

                    <Typography sx={{ fontSize: { xs: '14px', md: '14px' }, fontWeight: 400, marginLeft: '5px', marginBlock: '8 px' }}>
                        {product['rating_count']} Ratings
                    </Typography>
                </Box>
                <Typography sx={{ fontSize: { xs: '14px', md: '16px' }, fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                    ${priceAfterDiscount}
                    <Typography component={'del'} sx={{ fontSize: { xs: '10px', md: '14px' }, fontWeight: 500, marginLeft: '5px', color: '#626262' }}>{/** price before discount */}
                        ${product.price}
                    </Typography>
                    <Typography component={'span'} sx={{ fontSize: { xs: '10px', md: '14px' }, fontWeight: 500, marginLeft: '5px', color: '#E21D1D' }}>{/**  discount amount  */}
                        {product.Discount.percentage}% OFF
                    </Typography>

                </Typography>
            </CardContent>
        </Card>);
};