import { Avatar, Box, Button, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { Order } from "./Order";
import { BackArrow } from "../profile/BackArrow";
import { OrderNavigationItem } from "./OrderNavigationItem";
import { OrdersProduct } from "./OrdersProduct";



export const OrderDetails = ({ details, loading, orderNumber, setOrderNumber, currentItem, setCurrentItem, setBreadcrumbsItems, breadcrumbsItems, setUrl, setRequestOptions }) => {

    const [currentNav, setCurrentNav] = useState('Items Ordered');
    const [currentDetails, setCurrentDetails] = useState([]);

    useEffect(() => {

        setCurrentDetails(details);
    }, [details]);

    const editBreadcrumbs = (newVal) => {

        const temp = [...breadcrumbsItems.slice(0, 3)];

        if (newVal) {
            temp.push(newVal);
        }
        setBreadcrumbsItems(temp);
    }

    useEffect(() => {


        editBreadcrumbs({
            title: 'Order#' + orderNumber,
            navTitle: 'Order',
        });

    }, []);

    const fetchData = async (url, method,) => {

        try {
            let token = localStorage.getItem('token');
            token = JSON.parse(token);

            const res = await fetch(url, {
                method,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: token['session_key']
                },
            });
            const d = await res.json();
            setCurrentItem('My Orders');
            editBreadcrumbs();
        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {

        try {
            let token = localStorage.getItem('token');

            token = JSON.parse(token);
            setUrl(`https://group1.iscovat.bid/orders/info/${orderNumber}`);
            setRequestOptions({ headers: { Authorization: token['session_key'] } });

        } catch (e) {
            console.log(e);
        }
    }, []);

    const reorderHandler = () => {

        fetchData(`https://group1.iscovat.bid/orders/reorder/${orderNumber}`, 'POST');

    }

    const cancelOrder = () => {

        fetchData(`https://group1.iscovat.bid/orders/${orderNumber}/cancel`, 'PUT');
    }

    if (loading) {

        return <Box>
            Loading...
        </Box>
    }
    return <Box sx={{
        display: { xs: currentItem === 'Order' ? 'block' : 'none', sm: 'block' },
        width: '100%', zIndex: { xs: '22', sm: '1' }, backgroundColor: 'white',
        height: { xs: '100%', sm: '' }, position: { xs: 'fixed', sm: 'static' }, left: 0, top: 0,
        overflow: 'auto', padding: { xs: '16px', sm: '0' }, //paddingRight: 0
    }}>


        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BackArrow setCurrentItem={() => setCurrentItem('My Orders')} />

            <Typography sx={{ color: { xs: '#1B4B66', sm: '#13101E' }, fontWeight: '600', fontSize: '20px', marginBlock: '6px' }}>
                Order#{orderNumber}
            </Typography>

        </Box>
        <Box sx={{
            display: 'flex', gap: '10px', backgroundColor: '#b6b6b647', justifyContent: { xs: 'space-between', sm: 'flex-start' },
            borderRadius: '8px', paddingBlock: '12px', paddingInline: '16px'
        }}>
            <OrderNavigationItem title={'Items Ordered'} currentNav={currentNav} setCurrentNav={setCurrentNav} />
            <OrderNavigationItem title={'Invoices'} currentNav={currentNav} setCurrentNav={setCurrentNav} />
            {/* <OrderNavigationItem title={'Order Shipment'} currentNav={currentNav} setCurrentNav={setCurrentNav} /> */}
        </Box>
        <Box sx={{ margin: '20px', marginInline: { xs: '0px' } }}>

            <Box sx={{
                display: { xs: 'none', sm: 'flex' }, color: '#626262', fontSize: { sm: '14px', md: '16px' },
                gap: { sm: '40px', md: '90px' }, marginLeft: { sm: '10px', md: '40px' }, justifyContent: 'space-between'
            }}>
                <Typography sx={{ width: '40%' }}> Product Name </Typography>
                <Typography>  Price </Typography>
                <Typography>   Qty  </Typography>
                <Typography>  Subtotal  </Typography>
            </Box>
            <Typography component={'hr'} sx={{ display: { xs: 'none', sm: 'block' }, border: '1px solid #0000001f' }} />
            {currentDetails && currentDetails.products?.length !== undefined && currentDetails.products.map((product) => <OrdersProduct product={product} />)}
        </Box>

        <Box>

            <Typography sx={{ display: { xs: 'none', sm: 'block' }, color: 'black', fontSize: '20px', fontWeight: 700 }}>
                Order Information
            </Typography>
            <Typography component={'hr'} sx={{ display: { xs: 'none', sm: 'block' }, border: '1px solid #0000001f' }} />

            <Box sx={{
                display: 'flex', gap: { xs: '30px', sm: '10px' }, justifyContent: 'space-between', alignItems: { xs: 'center', sm: 'flex-start' },
                flexDirection: { xs: 'column', sm: 'row' }, fontWeight: '600', marginTop: '15px'
            }}>
                <Typography component={'hr'} sx={{ display: { xs: 'block', sm: 'none' }, backgroundColor: '#F1F1F1', height: '10px', width: '100vw', border: '1px solid #F1F1F1' }} />

                <Box sx={{ display: 'flex', flexDirection: 'column', order: { xs: 1, sm: 1 }, width: { xs: '100%', sm: '30%' } }}>
                    <Typography sx={{ color: '#626262', width: '100%' }}>
                        Order Details
                    </Typography>
                    <Box sx={{ color: '#171520', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        Sub Total
                        <Typography>
                            ${currentDetails['total_amount']?.toFixed(2)}
                        </Typography>
                    </Box>
                    <Box sx={{ color: '#171520', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        Discount
                        <Typography>
                            ${currentDetails['total_discount']}
                        </Typography>
                    </Box>
                    <Box sx={{ color: 'black', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        Delivery Fee
                        <Typography>
                            $12.00
                        </Typography>
                    </Box>
                    <Box sx={{ color: '#171520', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        Grand Total
                        <Typography>
                            ${+currentDetails['grand_total']?.toFixed(2) + 12.00}
                        </Typography>
                    </Box>

                </Box>
                <Typography component={'hr'} sx={{ display: { xs: 'block', sm: 'none' }, order: 2, backgroundColor: '#F1F1F1', height: '10px', width: '100vw', border: '1px solid #F1F1F1' }} />

                <Box sx={{ display: 'flex', flexDirection: 'column', order: { xs: 5, sm: 2 }, width: { xs: '100%', sm: '30%' } }}>
                    <Typography sx={{ color: '#626262', width: '100%' }}>
                        Payment Details
                    </Typography>
                    <Box sx={{ color: 'black', width: '100%' }}>
                        {currentDetails['payment_method']}
                    </Box>

                </Box>
                <Typography component={'hr'} sx={{ display: { xs: 'block', sm: 'none' }, order: 4, backgroundColor: '#F1F1F1', height: '10px', width: '100vw', border: '1px solid #F1F1F1' }} />

                <Box sx={{ display: 'flex', flexDirection: 'column', order: { xs: 3, sm: 3 }, width: { xs: '100%', sm: '30%' } }}>
                    <Typography sx={{ color: '#626262', width: '100%' }}>
                        Address Details
                    </Typography>

                    <Box sx={{ color: { xs: '#171520' }, fontSize: { xs: '14px', sm: '16px' }, width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        {currentDetails.addresses?.address} - {currentDetails.addresses?.city}
                    </Box>
                    <Box sx={{ color: { xs: '#626262', sm: '#171520' }, fontSize: { xs: '14px', sm: '16px' }, width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        {currentDetails.addresses?.street}
                    </Box>
                    <Box sx={{ color: { xs: '#626262', sm: '#171520' }, fontSize: { xs: '14px', sm: '16px' }, width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        {currentDetails.addresses ? currentDetails.addresses['mobile'] : ''}
                    </Box>
                    <Box sx={{ color: { xs: '#626262', sm: '#171520' }, fontSize: { xs: '14px', sm: '16px' }, width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        {currentDetails.addresses ? currentDetails.addresses['postal_code'] : ''}
                    </Box>



                </Box>

            </Box>

            <Box sx={{
                display: 'flex', width: 1, flexDirection: 'row-reverse', gap: '15px',
                marginBlock: '15px', justifyContent: { xs: 'center', sm: 'flex-start' }
            }}>

                <Button onClick={cancelOrder} variant="outlined" sx={{
                    display: { xs: 'none', sm: 'block' },
                    textTransform: 'none', height: '38px', color: 'red', border: '2px solid red', '&:hover': { color: '#1B4B66', borderColor: 'red' },
                    paddingBlock: '5px', paddingInline: '20px', fontSize: '16px', fontWeight: 500, borderRadius: '8px',
                }}>
                    Cancel order
                </Button>
                <Button onClick={reorderHandler} variant="outlined" sx={{
                    width: { xs: '80%', sm: '130px' },
                    textTransform: 'none', backgroundColor: '#1B4B66', height: '38px', color: 'white', '&:hover': { color: '#1B4B66', border: '2px solid #1B4B66' },
                    paddingBlock: '5px', paddingInline: '20px', fontWeight: 500, borderRadius: '8px', fontSize: '14px'
                }}>
                    Reorder
                </Button>
            </Box>
        </Box>
    </Box>;
}