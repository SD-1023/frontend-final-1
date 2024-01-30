import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export const HomeNavigationItem = ({ currentLink, setCurrentLink }) => {

    const navigate = useNavigate();

    const condition = (currentLink === '' || currentLink === '/');
    const [color, setColor] = useState( (condition) ? 'var(--primary)' : 'var(--light-text)');

    useEffect(() => {
        setColor((condition)  ? 'var(--primary)' : 'var(--light-text)');
    }, [currentLink]);
 
    const onHomeClicked = () => {
        setCurrentLink('/');
        setColor('var(--primary)')
        navigate('/');
    }
    return <Box onClick={onHomeClicked} sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', cursor: 'pointer',
        color: color, '&:hover': { color: 'var(--primary)' }
    }} onMouseEnter={() => setColor('var(--primary)')}
     onMouseLeave={() => setColor( (condition) ? 'var(--primary)' : 'var(--light-text)')}
     >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <g clip-path="url(#clip0_10016_493)">
                <path  style={{ stroke: color }} 
                 d="M14.2495 19.4993V14.9992C14.2495 14.8003 14.1704 14.6095 14.0298 14.4689C13.8891 14.3282 13.6984 14.2492 13.4995 14.2492H10.4995C10.3005 14.2492 10.1098 14.3282 9.96912 14.4689C9.82847 14.6095 9.74945 14.8003 9.74945 14.9992V19.4993C9.74945 19.6982 9.67045 19.889 9.52981 20.0296C9.38918 20.1703 9.19844 20.2493 8.99954 20.2493L4.50009 20.2499C4.40159 20.2499 4.30406 20.2305 4.21305 20.1928C4.12205 20.1551 4.03936 20.0999 3.9697 20.0303C3.90005 19.9606 3.8448 19.8779 3.8071 19.7869C3.7694 19.6959 3.75 19.5984 3.75 19.4999V10.8317C3.75 10.7272 3.77183 10.6239 3.8141 10.5283C3.85637 10.4328 3.91814 10.3471 3.99545 10.2768L11.4949 3.45794C11.633 3.33241 11.8129 3.26285 11.9995 3.26285C12.186 3.26284 12.3659 3.33239 12.504 3.4579L20.0045 10.2768C20.0818 10.3471 20.1436 10.4328 20.1859 10.5284C20.2282 10.6239 20.25 10.7273 20.25 10.8318V19.4999C20.25 19.5984 20.2306 19.6959 20.1929 19.7869C20.1552 19.8779 20.1 19.9606 20.0303 20.0303C19.9606 20.0999 19.878 20.1552 19.7869 20.1928C19.6959 20.2305 19.5984 20.2499 19.4999 20.2499L14.9994 20.2493C14.8005 20.2493 14.6097 20.1703 14.4691 20.0296C14.3285 19.889 14.2494 19.6982 14.2495 19.4993V19.4993Z" stroke="#1B4B66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_10016_493">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>

        { (currentLink === '' || currentLink === '/') && <span style={{ fontSize: '12px', fontWeight: 500 }}>Home</span>}
    </Box>
}


// export const HomeNavigationItem = ({  }) => {
  
//     return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
//             <g clip-path="url(#clip0_10016_493)">
//                 <path d="M14.2495 19.4993V14.9992C14.2495 14.8003 14.1704 14.6095 14.0298 14.4689C13.8891 14.3282 13.6984 14.2492 13.4995 14.2492H10.4995C10.3005 14.2492 10.1098 14.3282 9.96912 14.4689C9.82847 14.6095 9.74945 14.8003 9.74945 14.9992V19.4993C9.74945 19.6982 9.67045 19.889 9.52981 20.0296C9.38918 20.1703 9.19844 20.2493 8.99954 20.2493L4.50009 20.2499C4.40159 20.2499 4.30406 20.2305 4.21305 20.1928C4.12205 20.1551 4.03936 20.0999 3.9697 20.0303C3.90005 19.9606 3.8448 19.8779 3.8071 19.7869C3.7694 19.6959 3.75 19.5984 3.75 19.4999V10.8317C3.75 10.7272 3.77183 10.6239 3.8141 10.5283C3.85637 10.4328 3.91814 10.3471 3.99545 10.2768L11.4949 3.45794C11.633 3.33241 11.8129 3.26285 11.9995 3.26285C12.186 3.26284 12.3659 3.33239 12.504 3.4579L20.0045 10.2768C20.0818 10.3471 20.1436 10.4328 20.1859 10.5284C20.2282 10.6239 20.25 10.7273 20.25 10.8318V19.4999C20.25 19.5984 20.2306 19.6959 20.1929 19.7869C20.1552 19.8779 20.1 19.9606 20.0303 20.0303C19.9606 20.0999 19.878 20.1552 19.7869 20.1928C19.6959 20.2305 19.5984 20.2499 19.4999 20.2499L14.9994 20.2493C14.8005 20.2493 14.6097 20.1703 14.4691 20.0296C14.3285 19.889 14.2494 19.6982 14.2495 19.4993V19.4993Z" stroke="#1B4B66" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//             </g>
//             <defs>
//                 <clipPath id="clip0_10016_493">
//                     <rect width="24" height="24" fill="white" />
//                 </clipPath>
//             </defs>
//         </svg>
// }

