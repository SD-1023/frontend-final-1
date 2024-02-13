import { Box, Button, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { Order } from "./Order";
import { BackArrow } from "../profile/BackArrow";
import { OrderNavigationItem } from "./OrderNavigationItem";



export const OrdersPage = ({ orders, currentItem, setCurrentItem, setBreadcrumbsItems, breadcrumbsItems, setUrl, setRequestOptions, setOrderNumber }) => {

    const [currentNav, setCurrentNav] = useState('Completed');
    const [renderedOrders, setRenderedOrders] = useState([]);
    const [isPageLoaded, setIsPageLoaded] = useState(false);



    useEffect(() => {

        const temp = [...breadcrumbsItems.slice(0, 2), {
            title: 'My Orders',
            navTitle: 'My Orders',

        }];
        setBreadcrumbsItems(temp);

    }, []);

    useEffect(() => {

        try {
            let token = localStorage.getItem('token');

            token = JSON.parse(token);
            setUrl(`https://group1.iscovat.bid/orders`);
            setRequestOptions({ headers: { Authorization: token['session_key'] } });
            setIsPageLoaded(true);

        } catch (e) {
            console.log(e);
        }

    }, []);

    useEffect(() => {

        if (orders?.length) {
            const tempOrders = orders.filter((o) => o.status.toLowerCase() === currentNav.toLocaleLowerCase());
            setRenderedOrders(tempOrders);
        }
    }, [orders, currentNav]);

    return <Box sx={{
        display: { xs: currentItem === 'My Orders' ? 'block' : 'none', sm: 'block' },
        width: '100%', zIndex: { xs: '22', sm: '1' }, backgroundColor: 'white',
        height: { xs: '100%', sm: '' }, position: { xs: 'fixed', sm: 'static' }, left: 0, top: 0,
        overflow: 'auto', padding: { xs: '16px', sm: '0' }, //paddingRight: 0
    }}>


        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BackArrow setCurrentItem={() => {

                const temp = breadcrumbsItems.slice(0, 2);
                setBreadcrumbsItems(temp);
                setCurrentItem('');

            }} />

            <Typography sx={{ color: { xs: '#1B4B66', sm: '#13101E' }, fontWeight: '600', fontSize: '20px', marginBlock: '6px' }}>
                My Orders
            </Typography>

        </Box>
        <Box sx={{
            display: 'flex', gap: '10px', backgroundColor: '#b6b6b647', justifyContent: { xs: 'space-between', sm: 'flex-start' },
            borderRadius: '8px', paddingBlock: '12px', paddingInline: '16px'
        }}>
            <OrderNavigationItem title={'Completed'} currentNav={currentNav} setCurrentNav={setCurrentNav} />
            <OrderNavigationItem title={'Processing'} currentNav={currentNav} setCurrentNav={setCurrentNav} />
            <OrderNavigationItem title={'Cancelled'} currentNav={currentNav} setCurrentNav={setCurrentNav} />
        </Box>

        <Box sx={{ margin: '20px', marginInline: { xs: '0px' } }}>

            <Box sx={{
                display: { xs: 'none', sm: 'flex' }, color: '#626262', fontSize: { sm: '14px', md: '16px' },
                gap: { sm: '40px', md: '90px' }, marginLeft: { sm: '10px', md: '40px' }
            }}>
                <Typography> Order ID </Typography>
                <Typography>  Date </Typography>
                <Typography>   Price  </Typography>
                <Typography>  Status  </Typography>
            </Box>
            <Typography component={'hr'} sx={{ display: { xs: 'none', sm: 'block' }, border: '1px solid #0000001f' }} />

            {
                renderedOrders && renderedOrders.length !== undefined && renderedOrders.map((order) => <Order order={order} setOrderNumber={setOrderNumber} setCurrentItem={setCurrentItem} />)
            }

            {
                renderedOrders && renderedOrders.length !== undefined && !renderedOrders.length && <Typography> No {currentNav} orders Found! </Typography>
            }


        </Box>
    </Box>;
}