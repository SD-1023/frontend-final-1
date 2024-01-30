import { Box, Typography } from "@mui/material";
import { ArrowForwardIos as ArrowIcon } from '@mui/icons-material';

export const Order = ({ order, setOrderNumber, setCurrentItem }) => {


    return <Box onClick={() => {
        setCurrentItem('Order')
        setOrderNumber(order['order_id']);
    }}
        sx={{
            display: 'flex', color: '#626262',
            backgroundColor: '#b6b6b647', alignItems: 'center', justifyContent: 'space-between',cursor: 'pointer',
            borderRadius: '8px', margin: { xs: '0', sm: '20px' }, marginInline: { sm: '0px'}, padding: '20px', paddingLeft: {xs: '20px', md: '50px'}
        }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: {xs:'10px', sm: '30px', md: '65px' } }}>
            <Typography sx={{ order: { xs: 2, sm: 1 }, fontSize: { sm: '14px', md: '16px' }, fontWeight: { xs: 600, sm: 500 }, maxWidth: '100px' }}>
                #{order['order_id']}
            </Typography>
            <Typography sx={{ order: { xs: 1, sm: 2 }, fontSize: { xs: '12px', sm: '14px', md: '16px' }, maxWidth: '100px', color: { xs: '#7E7E7E', sm: '' } }}>
                {order['order_date'].slice(0,10)}
            </Typography>
            <Typography sx={{ order: { xs: 3, sm: 3 }, fontSize: { sm: '14px', md: '16px' }, fontWeight: { xs: 600, sm: 500 }, maxWidth: '100px' }}>
                ${order['total_amount']}
            </Typography>
            <Typography sx={{ order: { xs: 4, sm: 4 }, display: { xs: 'none', sm: 'block' }, fontSize: { sm: '14px', md: '16px' }, maxWidth: '100px' }}>
                {order.status}
            </Typography>
        </Box>

        <ArrowIcon sx={{ color: { xs: 'black', sm: "#1B4B66" } }} />
    </Box>;
}