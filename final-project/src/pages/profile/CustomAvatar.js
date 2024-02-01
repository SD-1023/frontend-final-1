import { LoadingButton } from "@mui/lab";
import { Avatar, Box, Button } from "@mui/material"
import { useEffect, useRef, useState } from "react";
import { useFetchData } from "../../hooks/useFetchData";

export const CustomAvatar = ({ info, setIsProfileImageChanged }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [url, setUrl] = useState('');
    const [requestOptions, setRequestOptions] = useState({});
    const { data, loading, error } = useFetchData(url, requestOptions);
    const fileInputRef = useRef(null);
    const [image, setImage] = useState(null)

    useEffect(() => {

        if(data){

            setImage(data);
            setIsProfileImageChanged(s => !s);
            setSelectedFile(null);
        }

    }, [data]);

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const changeProfilePicture = () => {

        setUrl('');
        try {
            let token = localStorage.getItem('token');
            token = JSON.parse(token);
            const formData = new FormData();
            formData.append('profileImage', fileInputRef.current.files[0]);
            const tempOpts = {
                method: 'POST',
                Accept: "application/json",
                "Content-Type": "application/json",
                body: formData,
                headers: { Authorization: token['session_key'] }
            }

            setUrl(`http://158.176.7.102:3000/users/profile-img`);
            setRequestOptions(tempOpts);


        } catch (e) {
            console.log(e);
        }


    }

    return <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '12px', marginBlock: '25px' }}>
        <Avatar sx={{ width: '80px', height: '80px' }} alt={info['first_name']} src={`http://158.176.7.102:3000/${image ? image :info['profile_image'] }`} />
        <LoadingButton loading={loading} onClick={handleButtonClick} variant="contained" sx={{
            textTransform: 'none',
            backgroundColor: '#1B4B66', width: { xs: '100', sm: '136px' }, height: { xs: '30', sm: '38px' }, color: 'white',
            paddingBlock: '5px', paddingInline: '20px', fontSize: '14px', fontWeight: 500
        }}>
            Upload
        </LoadingButton>
        {selectedFile && <Button type="text" sx={{ fontSize: '12px' }} onClick={changeProfilePicture}>
            Confirm change
        </Button>
        }
        <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept="image/*"
            onChange={handleFileChange}
        />
        {/* <Button sx={{ color: '#B00020', width: { xs: '100', sm: '136px' }, height: { xs: '30', sm: '42px' }, textTransform: 'none', border: '3px solid #B00020', fontSize: '14px', fontWeight: 500 }} >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.8333 7.2V6.56C14.8333 5.66392 14.8333 5.21587 14.6517 4.87362C14.4919 4.57256 14.2369 4.32779 13.9233 4.17439C13.5668 4 13.1001 4 12.1667 4H10.8333C9.89991 4 9.4332 4 9.07668 4.17439C8.76308 4.32779 8.50811 4.57256 8.34832 4.87362C8.16667 5.21587 8.16667 5.66392 8.16667 6.56V7.2M9.83333 11.6V15.6M13.1667 11.6V15.6M4 7.2H19M17.3333 7.2V16.16C17.3333 17.5041 17.3333 18.1762 17.0608 18.6896C16.8212 19.1412 16.4387 19.5083 15.9683 19.7384C15.4335 20 14.7335 20 13.3333 20H9.66667C8.26654 20 7.56647 20 7.03169 19.7384C6.56129 19.5083 6.17883 19.1412 5.93915 18.6896C5.66667 18.1762 5.66667 17.5041 5.66667 16.16V7.2" stroke="#B00020" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Delete
        </Button> */}
    </Box>
}