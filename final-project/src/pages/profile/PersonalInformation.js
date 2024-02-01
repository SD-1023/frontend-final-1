import { Box, Button, IconButton, Input, Snackbar, SnackbarContent, TextField, Typography } from "@mui/material"
import { CustomAvatar } from "./CustomAvatar"
import { BasicInformation } from "./BasicInformation"
import { ChangePassword } from "./ChangePassword"
import { BackArrow } from "./BackArrow"
import { useEffect, useState } from "react"
import { useFetchData } from "../../hooks/useFetchData"
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from '@mui/lab';


export const PersonalInformation = ({ setUrl, setRequestOptions, breadcrumbsItems, setBreadcrumbsItems, currentItem, setCurrentItem, info }) => {

    const [userData, setUserData] = useState(info || {});
    const [localUrl, setLocalUrl] = useState('');
    const [localReqOpts, setLocalReqOpts] = useState({});
    const [currentPassword, setCurrentPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [isChangePasswordReq, setIsChangePasswordReq] = useState(false);
    const { data, error, loading } = useFetchData(localUrl, localReqOpts);
    const [changePasswordStatus, setChangePasswordStatus] = useState(true);
    const [isProfileImageChanged, setIsProfileImageChanged] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        if (info) {
            const mobile = info['mobile'] || [];
            const tempPhoneNumber = mobile?.slice(mobile?.length - 10, mobile?.length);
            const tempCountryCode = mobile?.slice(0, mobile?.length - tempPhoneNumber?.length);
            setUserData({ ...info, phoneNumber: tempPhoneNumber, countryCode: tempCountryCode, 'birth_date': info['birth_date']?.slice(0, 10) });

        }
    }, [info]);

    useEffect(() => {
        const temp = breadcrumbsItems.slice(0, 2);

        setBreadcrumbsItems(temp);

        try {
            let token = localStorage.getItem('token');

            token = JSON.parse(token);
            setUrl(`https://group1.iscovat.bid/users/${token['user_id']}`);
            setRequestOptions({ headers: { Authorization: token['session_key'] } });


        } catch (e) {
            console.log(e);
        }

    }, [isProfileImageChanged]);

    useEffect(() => {

        if (newPassword && confirmPassword) {
            if (newPassword === confirmPassword) {
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                if (passwordRegex.test(confirmPassword) && passwordRegex.test(newPassword)) {
                    setChangePasswordStatus(false);
                } else {
                    setChangePasswordStatus(true);
                }
            } else {
                setChangePasswordStatus(true)
            }
        } else {
            setChangePasswordStatus(true)

        }
    }, [newPassword, confirmPassword]);

    const saveChanges = (isBasicInfo) => {
        let body = {};
        if (isBasicInfo) {
            setIsChangePasswordReq(false);
            body = {
                'first_name': userData['first_name'],
                'last_name': userData['last_name'],
                'birth_date': userData['birth_date'],
                'mobile': userData['countryCode'] + userData['phoneNumber']
            };
        } else {
            setIsChangePasswordReq(true);
            body = {
                currentPassword,
                newPassword
            }
        }
        try {
            let token = localStorage.getItem('token');
            token = JSON.parse(token);


            const tempOpts = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: token['session_key']
                },
                method: "PUT",
                body: JSON.stringify(body)
            }

            setLocalUrl(`https://group1.iscovat.bid/users/${isBasicInfo ? token['user_id'] : 'change-password'}`);
            setLocalReqOpts(tempOpts);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        if (typeof data === 'boolean' && isChangePasswordReq) {
            localStorage.removeItem('token');
            navigate('/signin');
        }
    }, [data]);


    return <Box sx={{
        display: { xs: currentItem === 'Personal Information' ? 'block' : 'none', sm: 'block' },
        width: '100%', zIndex: { xs: '22', sm: '1' }, backgroundColor: 'white',
        height: { xs: '100%', sm: '' }, position: { xs: 'fixed', sm: 'static' }, left: 0, top: 0,
        overflow: 'auto', padding: { xs: '16px', sm: '' }
    }}>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BackArrow setCurrentItem={() => setCurrentItem('')} />

            <Typography sx={{ color: { xs: '#1B4B66', sm: '#13101E' }, fontWeight: '600', fontSize: '20px', marginBlock: '6px' }}>
                Personal Information
            </Typography>

        </Box>
        <Typography component={'hr'} sx={{ display: { xs: 'none', sm: 'block' }, border: '1px solid #0000001f' }} />
        <CustomAvatar info={userData} setIsProfileImageChanged={setIsProfileImageChanged} />

        <BasicInformation info={userData} editUserData={setUserData} />
        <Box sx={{ display: 'flex', width: 1, flexDirection: 'row-reverse', marginBlock: '15px', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
            <LoadingButton loading={loading} loadingIndicator="Loading…" onClick={() => saveChanges(true)} variant="contained" sx={{
                textTransform: 'none', backgroundColor: '#1B4B66', height: '38px', color: 'white',
                paddingBlock: '5px', paddingInline: '20px', fontSize: '16px', fontWeight: 500
            }}>
                Save Changes
            </LoadingButton>
        </Box>
        <Typography sx={{ color: '#13101E', fontWeight: '600', fontSize: '20px', marginTop: '25px' }}>
            Change Password
        </Typography>
        <Typography component={'hr'} sx={{ border: '1px solid #0000001f' }} />

        <ChangePassword error={changePasswordStatus} currentPassword={currentPassword} setCurrentPassword={setCurrentPassword}
            newPassword={newPassword} setNewPassword={setNewPassword}
            confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} />

        <Box sx={{ display: 'flex', width: 1, flexDirection: 'row-reverse', marginBlock: '15px', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
            <Button error disabled={changePasswordStatus} onClick={() => saveChanges(false)} variant="contained" sx={{
                textTransform: 'none', backgroundColor: '#1B4B66', height: '38px', color: 'white',
                paddingBlock: '5px', paddingInline: '20px', fontSize: '16px', fontWeight: 500
            }}>
                Save Changes
            </Button>
        </Box>

    </Box>
}