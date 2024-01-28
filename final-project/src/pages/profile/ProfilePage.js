import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { LogoutButton } from "./LogoutButton";
import { CustomBreadcrumbs } from "./CustomBreadcrumbs";
import { PersonalInformation } from "./PersonalInformation";
import { ProfileNavigation } from "./ProfileNavigation";
import { useFetchData } from "../../hooks/useFetchData";


export const ProfilePage = () => {

    const [currentItem, setCurrentItem] = useState('');

    const [url, setUrl] = useState('');
    const [headers, setHeaders] = useState({});
    const { data, error, loading } = useFetchData(url, headers);

    // console.log(data    )
    const navigate = useNavigate();

    useEffect(() => {

        try {
            let token = localStorage.getItem('token');
            if (!token) {
                navigate('/signin');
            } else {
                token = JSON.parse(token);
                // console.log(token['session_key'])
                setUrl(`http://158.176.7.102:3000/users/${token['user_id']}`);
                setHeaders({ Authorization: token['session_key'] });

            }

        } catch (e) {
            console.log(e);
        }

    }, []);


    return <Box sx={{ margin: { xs: '20px', sm: '20px' }, marginRight: '5%' }}>

       {currentItem === '' && <Typography component={'h1'} sx={{ display: {xs: 'block', sm: 'none'},
            color: 'var(--primary)', fontSize: '20px', fontWeight: 600
        }} >Profile</Typography>}
        <CustomBreadcrumbs />

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '34px', fontWeight: '600', color: '#1B4B66', marginTop: '15px' }}>
                {currentItem}
            </Typography>
            <LogoutButton />
        </Box>

        <Box sx={{ display: 'flex', marginTop: '10px', gap: '20px' }}>

            <ProfileNavigation currentItem={currentItem} setCurrentItem={setCurrentItem} />

            {currentItem === 'Personal Information' && <PersonalInformation currentItem={currentItem} setCurrentItem={setCurrentItem} />}

        </Box>
        {currentItem === '' && <LogoutButton isMobile={true} />}

    </Box>
}