import { Avatar, Box, Button, Typography } from "@mui/material"

export const OrdersProduct = ({ product }) => {


    return <Box sx={{
        display: 'flex', color: '#626262',
        alignItems: 'center', justifyContent: 'space-between',
        borderRadius: '8px', gap: { sm: '40px', md: '90px' }, margin: { xs: '0', sm: '0px' }, marginInline: { sm: '0px', md: '' }, padding: '20px', cursor: 'pointer'
    }}>
        <Typography sx={{ display: 'flex', gap: '10px', width: { xs: '100%', sm: '40%' } }}>
            <Avatar alt={product.name} src={`https://group1.iscovat.bid/${product['image_url']}` }
                sx={{ width: { xs: '120px', sm: '75px' }, height: { xs: '120px', sm: '80px' }, borderRadius: '8px' }} variant="square" />

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    width: '70%',
                }}>
                    {product.name}
                </Typography>
                <Typography sx={{
                    color: '#626262', fontSize: { xs: '12px', sm: '16px' }, textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                }}>
                    {product['sub_title']}
                </Typography>
                <Typography sx={{ display: { xs: 'block', sm: 'none' }, fontWeight: 600, fontSize: '14px' }}>
                    ${product.price}
                </Typography>
                <Typography sx={{ display: { xs: 'block', sm: 'none', fontSize: '12px' } }}>
                    Qty- {product.quantity}
                </Typography>
                {/* <Button variant="outlined" sx={{
                    display: { xs: 'block', sm: 'none' }, width: '151px', height: '34px',
                    textTransform: 'none', height: '38px', color: '#1B4B66', '&:hover': { color: '#1B4B66' }, border: '2px solid #1B4B66',
                    paddingBlock: '5px', paddingInline: '20px', fontSize: '16px', fontWeight: 500, borderRadius: '8px', fontWeight: 600, fontSize: '16px'
                }}>
                    Add to bag
                </Button> */}
            </Box>
        </Typography>

        <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>
            ${product.price}
        </Typography>
        <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>
            {product.quantity}
        </Typography>
        <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>
            ${product['sub_total']?.toFixed(2)}
        </Typography>
    </Box>

}