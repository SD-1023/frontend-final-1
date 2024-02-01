import { Box, Typography, Link } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import DownIcon from '@mui/icons-material/KeyboardArrowDown';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useContext } from "react";
import { HomePageContext } from "../contexts/HomePageContext";

export const Footer = ({ isMobile, isFooterShown, setIsFooterShown, categories }) => {

    const { trendyRef, brandsRef, featuredRef } = useContext(HomePageContext);
    const navigate = useNavigate();

    const onCategoryClicked = (id) => {
        navigate(`../products/${id}`, {
            state: { url: `https://group1.iscovat.bid/products?categoryId=${id}` }
        });
    }
    const FlexStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start'
    }

    const FooterStyle = {
        backgroundColor: 'var(--primary)',
        width: '100%', bottom: 0, left: 0,
        ...FlexStyle, flexDirection: { xs: 'column', sm: 'row' }
    };

    return <>

        {isMobile && <Box sx={{
            paddingInline: '20px', paddingBlock: '5px', width: 1,
            fontWeight: '600', marginBottom: isFooterShown ? '0' : '82px',
            "&:hover": {
                cursor: 'pointer'
            }, ...FlexStyle,
        }}

            onClick={() => setIsFooterShown(s => !s)}>
            <Typography>
                More about CORA'L
            </Typography>
            {
                isFooterShown ? <UpIcon /> : <DownIcon />
            }

        </Box>}

        {(!isMobile || isFooterShown) && <Box component={'footer'} sx={{ marginBottom: isFooterShown ? '82px' : 0, ...FooterStyle }}>

            <Box sx={{ ...FlexStyle, flexDirection: { xs: 'column', sm: 'row' } }}>
                <Box sx={{ ...FlexStyle, flexDirection: 'column', margin: { xs: '25px', sm: '45px' }, gap: '7px' }}>
                    <Typography sx={{ color: 'white', paddingBottom: '5px' }}>
                        Shop by Category
                    </Typography>

                    {categories.map((cat) => (
                        <Link key={cat.id} onClick={() => onCategoryClicked(cat.id)} underline="none" sx={{
                            "&:hover": {
                                color: 'white',
                            }, paddingBottom: '3px',
                            color: 'var(--light-text)'
                        }}>{cat.name}</Link>
                    ))}

                </Box>
                <Box sx={{ ...FlexStyle, flexDirection: 'column', margin: { xs: '25px', sm: '45px' }, gap: '7px' }}>
                    <Typography sx={{ color: 'white', paddingBottom: '5px' }}>
                        Shop by Products
                    </Typography>

                    <Link component={RouterLink} to={'/'} underline="none" onClick={() => featuredRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    })} sx={{
                        "&:hover": {
                            color: 'white',
                        }, paddingBottom: '3px',
                        color: 'var(--light-text)'
                    }}> Featured</Link>


                    <Link component={RouterLink} to={'/'} onClick={() => brandsRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    })} underline="none" sx={{
                        "&:hover": {
                            color: 'white',
                        }, paddingBottom: '3px',
                        color: 'var(--light-text)'
                    }}> Brands</Link>

                    <Link component={RouterLink} to={'/'} underline="none" onClick={() => trendyRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    })} sx={{
                        "&:hover": {
                            color: 'white',
                        }, paddingBottom: '3px',
                        color: 'var(--light-text)'
                    }}> Trendy</Link>

                </Box>
            </Box>

            <Typography component='hr' sx={{ display: { sx: 'block', sm: 'none' }, width: 1, height: '1px', border: 0, backgroundColor: 'var(--light-text)' }} />
            <Box sx={{
                ...FlexStyle, margin: { xs: '25px', sm: '45px' }, marginTop: '49px',
                flexDirection: 'column', alignItems: { xs: 'flex-start', sm: 'flex-end' }
            }}>
                <Box sx={{ '&:hover': { cursor: 'pointer' } }}>
                    <svg width="200" height="38" viewBox="0 0 200 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="19" cy="19" r="19" fill="#639599" />
                        <path d="M12.5087 20.7083H15.3488V32.4004C15.3488 32.6312 15.5358 32.8183 15.7667 32.8183H20.5821C20.8129 32.8183 21 32.6312 21 32.4004V20.7634H24.2648C24.4771 20.7634 24.6557 20.6041 24.68 20.3933L25.1758 16.0888C25.1895 15.9704 25.1519 15.8518 25.0727 15.763C24.9934 15.674 24.8799 15.6231 24.7608 15.6231H21.0001V12.9249C21.0001 12.1115 21.4381 11.6991 22.3019 11.6991C22.425 11.6991 24.7608 11.6991 24.7608 11.6991C24.9916 11.6991 25.1787 11.512 25.1787 11.2812V7.33015C25.1787 7.0993 24.9916 6.91226 24.7608 6.91226H21.3721C21.3482 6.91109 21.2951 6.90916 21.2169 6.90916C20.629 6.90916 18.5852 7.02459 16.9708 8.50976C15.1821 10.1556 15.4308 12.1262 15.4902 12.4678V15.6231H12.5087C12.2779 15.6231 12.0908 15.8101 12.0908 16.0409V20.2904C12.0908 20.5212 12.2779 20.7083 12.5087 20.7083Z" fill="#1B4B66" />
                        <circle cx="73" cy="19" r="19" fill="#639599" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M68.371 8.70395C69.5685 8.64931 69.9508 8.63638 73 8.63638C76.0491 8.63638 76.4315 8.64931 77.6289 8.70395C78.824 8.7585 79.6401 8.94826 80.3543 9.22582C81.0926 9.51274 81.7187 9.89664 82.3428 10.5208C82.967 11.145 83.3509 11.7711 83.6378 12.5094C83.9154 13.2235 84.1051 14.0397 84.1597 15.2347C84.2143 16.4322 84.2272 16.8145 84.2272 19.8637C84.2272 22.9128 84.2143 23.2952 84.1597 24.4926C84.1051 25.6877 83.9154 26.5038 83.6378 27.218C83.3509 27.9563 82.967 28.5824 82.3428 29.2066C81.7187 29.8307 81.0926 30.2146 80.3543 30.5015C79.6401 30.7791 78.824 30.9689 77.6289 31.0234C76.4315 31.078 76.0491 31.0909 73 31.0909C69.9508 31.0909 69.5685 31.078 68.371 31.0234C67.1759 30.9689 66.3598 30.7791 65.6456 30.5015C64.9074 30.2146 64.2812 29.8307 63.6571 29.2066C63.0329 28.5824 62.649 27.9562 62.3621 27.218C62.0845 26.5038 61.8948 25.6877 61.8402 24.4926C61.7856 23.2952 61.7727 22.9128 61.7727 19.8637C61.7727 16.8145 61.7856 16.4322 61.8402 15.2347C61.8948 14.0397 62.0845 13.2235 62.3621 12.5094C62.649 11.7711 63.0329 11.145 63.6571 10.5208C64.2812 9.89664 64.9074 9.51274 65.6456 9.22582C66.3598 8.94826 67.1759 8.7585 68.371 8.70395ZM78.9931 15.2178C79.7372 15.2178 80.3404 14.6146 80.3404 13.8705C80.3404 13.1264 79.7372 12.5233 78.9931 12.5233C78.249 12.5233 77.6458 13.1264 77.6458 13.8705C77.6458 14.6146 78.249 15.2178 78.9931 15.2178ZM78.2394 19.8634C78.2394 22.757 75.8936 25.1028 73 25.1028C70.1064 25.1028 67.7606 22.757 67.7606 19.8634C67.7606 16.9698 70.1064 14.624 73 14.624C75.8936 14.624 78.2394 16.9698 78.2394 19.8634ZM76.4545 19.8637C76.4545 21.7716 74.9079 23.3182 73 23.3182C71.0921 23.3182 69.5454 21.7716 69.5454 19.8637C69.5454 17.9558 71.0921 16.4091 73 16.4091C74.9079 16.4091 76.4545 17.9558 76.4545 19.8637Z" fill="#1B4B66" />
                        <circle cx="127" cy="19" r="19" fill="#639599" />
                        <path d="M139.091 12.69C138.201 13.0846 137.245 13.3513 136.242 13.4712C137.266 12.8572 138.052 11.8849 138.423 10.7264C137.464 11.2949 136.403 11.7078 135.273 11.9304C134.367 10.9662 133.078 10.3636 131.651 10.3636C128.911 10.3636 126.69 12.5849 126.69 15.3247C126.69 15.7135 126.734 16.0922 126.818 16.4553C122.695 16.2484 119.04 14.2733 116.593 11.2718C116.166 12.0045 115.921 12.8567 115.921 13.7659C115.921 15.4871 116.797 17.0056 118.128 17.8953C117.315 17.8695 116.55 17.6464 115.881 17.2748C115.88 17.2955 115.88 17.3163 115.88 17.3372C115.88 19.7409 117.591 21.7461 119.86 22.2018C119.444 22.3152 119.006 22.3758 118.553 22.3758C118.233 22.3758 117.923 22.3448 117.62 22.2868C118.251 24.2579 120.083 25.6922 122.254 25.7323C120.556 27.0629 118.417 27.856 116.093 27.856C115.692 27.856 115.297 27.8326 114.909 27.7867C117.105 29.1944 119.713 30.0156 122.514 30.0156C131.64 30.0156 136.63 22.4559 136.63 15.9C136.63 15.6849 136.625 15.4709 136.615 15.2582C137.585 14.5587 138.426 13.6849 139.091 12.69Z" fill="#1B4B66" />
                        <circle cx="181" cy="19" r="19" fill="#639599" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M191.992 11.686C192.375 12.069 192.652 12.5456 192.793 13.0684C193.608 16.3474 193.42 21.526 192.809 24.9316C192.667 25.4544 192.391 25.931 192.008 26.314C191.625 26.6969 191.148 26.9729 190.625 27.1144C188.71 27.6363 181.003 27.6363 181.003 27.6363C181.003 27.6363 173.296 27.6363 171.382 27.1144C170.859 26.9729 170.382 26.6969 169.999 26.314C169.615 25.931 169.339 25.4544 169.198 24.9316C168.378 21.6668 168.603 16.485 169.182 13.0842C169.323 12.5614 169.6 12.0848 169.983 11.7018C170.366 11.3188 170.843 11.0429 171.366 10.9014C173.281 10.3794 180.988 10.3636 180.988 10.3636C180.988 10.3636 188.694 10.3636 190.609 10.8856C191.132 11.0271 191.609 11.303 191.992 11.686ZM184.701 19L178.533 22.7013V15.2987L184.701 19Z" fill="#1B4B66" />
                    </svg>


                </Box>
                <Box sx={{ color: 'white', ...FlexStyle, alignItems: 'center', marginTop: '26px', gap: '10px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_10188_1595)">
                            <path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_10188_1595">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <Typography>
                        United States
                    </Typography>
                </Box>
                <Box sx={{ color: 'var(--light-text)', marginTop: '5px' }}>
                    &copy; 2021 | Cora Leviene All Rights Reserved
                </Box>
            </Box>
        </Box >}
    </>;
}