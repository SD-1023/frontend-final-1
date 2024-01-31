import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export const CartNavigationItem = ({ currentLink, setCurrentLink }) => {

    // const { pathname } = useLocation();
    const navigate = useNavigate();
    const condition = currentLink === '/cart';
    const [color, setColor] = useState(condition? 'var(--primary)' : 'var(--light-text)');

    useEffect(() => {
        setColor(condition ? 'var(--primary)' : 'var(--light-text)');
    }, [currentLink]);
    

    const onCartClicked = () => {
        navigate('/cart');
        setColor('var(--primary)')
        setCurrentLink('/cart')

    }
    return <Box onClick={onCartClicked} sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', cursor: 'pointer',
        color: color, '&:hover': { color: 'var(--primary)' }
    }} onMouseEnter={() => setColor('var(--primary)')}
        onMouseLeave={() => setColor(condition ? 'var(--primary)' : 'var(--light-text)')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <g clip-path="url(#clip0_10016_512)">
                <path style={{ stroke: color }} d="M19.5787 6.75H4.42122C4.23665 6.75 4.05856 6.81806 3.92103 6.94115C3.7835 7.06425 3.69619 7.23373 3.67581 7.41718L2.34248 19.4172C2.33083 19.522 2.34143 19.6281 2.37357 19.7286C2.40572 19.829 2.4587 19.9216 2.52904 20.0002C2.59939 20.0788 2.68553 20.1417 2.78182 20.1847C2.87812 20.2278 2.98241 20.25 3.08789 20.25H20.912C21.0175 20.25 21.1218 20.2278 21.2181 20.1847C21.3144 20.1417 21.4005 20.0788 21.4708 20.0002C21.5412 19.9216 21.5942 19.829 21.6263 19.7286C21.6585 19.6281 21.6691 19.522 21.6574 19.4172L20.3241 7.41718C20.3037 7.23373 20.2164 7.06425 20.0789 6.94115C19.9413 6.81806 19.7632 6.75 19.5787 6.75Z" stroke="#B6B6B6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path style={{ stroke: color }} d="M8.25 5.75C8.25 4.75544 8.64509 3.80161 9.34835 3.09835C10.0516 2.39509 11.0054 2 12 2C12.9946 2 13.9484 2.39509 14.6517 3.09835C15.3549 3.80161 15.75 4.75544 15.75 5.75" stroke="#B6B6B6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_10016_512">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>

        {currentLink === '/cart' && <span style={{ fontSize: '12px', fontWeight: 500 }}>Cart</span>}


      {condition && (
        <span style={{ fontSize: "12px", fontWeight: 500 }}>Cart</span>
      )}
    </Box>
  );
};
