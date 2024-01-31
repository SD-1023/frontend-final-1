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
    console.log(details);
    useEffect(() => {


        const temp = [...breadcrumbsItems.slice(0, 3), {
            title: 'Order#' + orderNumber,
            navTitle: 'Order',

        }];
        setBreadcrumbsItems(temp);

    }, []);

    useEffect(() => {

        try {
            let token = localStorage.getItem('token');

            token = JSON.parse(token);
            setUrl(`http://158.176.7.102:3000/orders/info/${orderNumber}`);
            setRequestOptions({ headers: { Authorization: token['session_key'] } });

        } catch (e) {
            console.log(e);
        }
    }, []);

    const reorderHandler = () => {
        //  http://158.176.7.102:3000/orders/reorder/${orderNumber}

        const fetchTopics = async () => {
            try {
                let token = localStorage.getItem('token');
                token = JSON.parse(token);

                const res = await fetch(`http://158.176.7.102:3000/orders/reorder/${orderNumber}`, {
                    method: 'POST',
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: token['session_key']
                    },
                });
                console.log(res);
                const d = await res.json();
                console.log(d);
            } catch (e) {
                console.log(e)
            }
        }

        fetchTopics();

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
                            ${currentDetails['total_amount']}
                        </Typography>
                    </Box>
                    <Box sx={{ color: '#171520', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        Discount
                        <Typography>
                            ${currentDetails['total_discount']}
                        </Typography>
                    </Box>
                    {/* <Box sx={{ color: 'black', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        Delivery Fee
                        <Typography>
                            $119
                        </Typography>
                    </Box> */}
                    <Box sx={{ color: '#171520', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        Grand Total
                        <Typography>
                            ${currentDetails['grand_total']}
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
                        {currentDetails.addresses ? currentDetails.addresses['address_line1'] : ''}
                    </Box>
                    <Box sx={{ color: { xs: '#626262', sm: '#171520' }, fontSize: { xs: '14px', sm: '16px' }, width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        {currentDetails.addresses ? currentDetails.addresses['address_line2'] : ''}
                    </Box>
                    <Box sx={{ color: { xs: '#626262', sm: '#171520' }, fontSize: { xs: '14px', sm: '16px' }, width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                        {currentDetails.addresses?.street}
                    </Box>


                </Box>

            </Box>

            <Box sx={{
                display: 'flex', width: 1, flexDirection: 'row-reverse', gap: '15px',
                marginBlock: '15px', justifyContent: { xs: 'center', sm: 'flex-start' }
            }}>
                {/* 
                <Button variant="outlined" sx={{ display: {xs: 'none', sm: 'block'},
                    textTransform: 'none', height: '38px', color: '#1B4B66', '&:hover': { color: '#1B4B66' }, border: '2px solid #1B4B66',
                    paddingBlock: '5px', paddingInline: '20px', fontSize: '16px', fontWeight: 500, borderRadius: '8px', fontWeight: 600, fontSize: '16px'
                }}>
                    Add Rating
                </Button> */}
                <Button onClick={reorderHandler} variant="outlined" sx={{
                    width: { xs: '80%', sm: '130px' },
                    textTransform: 'none', backgroundColor: '#1B4B66', height: '38px', color: 'white', '&:hover': { color: '#1B4B66', border: '2px solid #1B4B66' },
                    paddingBlock: '5px', paddingInline: '20px', fontSize: '16px', fontWeight: 500, borderRadius: '8px', fontSize: '14px'
                }}>
                    Reorder
                </Button>
            </Box>
        </Box>
    </Box>;
}