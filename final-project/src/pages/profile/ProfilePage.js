import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { LogoutButton } from "./LogoutButton";
import { CustomBreadcrumbs } from "./CustomBreadcrumbs";
import { PersonalInformation } from "./PersonalInformation";
import { ProfileNavigation } from "./ProfileNavigation";
import { useFetchData } from "../../hooks/useFetchData";
import { SearchInput } from "../orders/SearchInput";
import { OrdersPage } from "../orders/OrdersPage";
import { OrderDetails } from "../orders/OrderDetails";

const items = [
    {
        title: 'Home',
        path: '/',
        color: '#1B4B66'
    },
    {
        title: 'User Profile',
        navTitle: 'Personal Information',
        color: '#626262'
    },
];

export const ProfilePage = () => {

    const [currentItem, setCurrentItem] = useState('');
    const [breadcrumbsItems, setBreadcrumbsItems] = useState(items);
    const [orderNumber, setOrderNumber] = useState(null);
    const [url, setUrl] = useState('');
    const [requestOptions, setRequestOptions] = useState({});
    const { data, error, loading } = useFetchData(url, requestOptions);

    const navigate = useNavigate();

    console.log(requestOptions);
    useEffect(() => {
        const temp = breadcrumbsItems.slice(0, 2);

        setBreadcrumbsItems(temp);
        try {
            let token = localStorage.getItem('token');
            if (!token) {
                navigate('/signin');
            }

        } catch (e) {
            console.log(e);
        }

    }, []);

    useEffect(() => {
        if (typeof data === 'boolean') {
            localStorage.removeItem('token');
            navigate('/signin');
        }
    }, [data]);


    return <Box sx={{ margin: { xs: '20px', sm: '20px' }, marginRight: '5%' }}>

        {currentItem === '' && <Typography component={'h1'} sx={{
            display: { xs: 'block', sm: 'none' },
            color: 'var(--primary)', fontSize: '20px', fontWeight: 600
        }} >Profile</Typography>}
        <CustomBreadcrumbs items={breadcrumbsItems} setCurrentItem={setCurrentItem} />

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '34px', fontWeight: '600', color: '#1B4B66', marginTop: '15px' }}>
                {currentItem} {currentItem === 'Order' && `#${orderNumber}`}
            </Typography>
            {currentItem === 'Personal Information' && <LogoutButton setUrl={setUrl} />}
            {/* {currentItem === 'My Orders' && <SearchInput />} */}
        </Box>

        <Box sx={{ display: 'flex', marginTop: '10px', gap: '20px' }}>

            <ProfileNavigation currentItem={currentItem} setCurrentItem={setCurrentItem} />

            {currentItem === 'Personal Information' && <PersonalInformation info={data || {}} setUrl={setUrl} setRequestOptions={setRequestOptions}
                setBreadcrumbsItems={setBreadcrumbsItems}
                breadcrumbsItems={breadcrumbsItems} currentItem={currentItem} setCurrentItem={setCurrentItem} />}
            {currentItem === 'My Orders' && <OrdersPage orders={data || []} breadcrumbsItems={breadcrumbsItems} setBreadcrumbsItems={setBreadcrumbsItems}
                currentItem={currentItem} setCurrentItem={setCurrentItem} setOrderNumber={setOrderNumber}
                setUrl={setUrl} setRequestOptions={setRequestOptions} />}
            {currentItem === 'Order' && <OrderDetails details={data || {}} loading={loading} orderNumber={orderNumber} setOrderNumber={setOrderNumber} breadcrumbsItems={breadcrumbsItems}
                setBreadcrumbsItems={setBreadcrumbsItems} currentItem={currentItem} setCurrentItem={setCurrentItem} setUrl={setUrl} setRequestOptions={setRequestOptions} />}

        </Box>
        {currentItem === '' && <LogoutButton setUrl={setUrl} isMobile={true} />}

    </Box>
}