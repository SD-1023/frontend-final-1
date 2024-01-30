import { Breadcrumbs, Link } from "@mui/material"

import { useNavigate, Link as RouterLink } from "react-router-dom";

export const CustomBreadcrumbs = () => {

    return <Breadcrumbs sx={{display: {xs: 'none', sm: 'block'}}} separator="›" aria-label="breadcrumb">
        <Link component={RouterLink} underline="hover" key="1" color="#1B4B66" to={'/'} sx={{ fontSize: '16px' }}>
            Home
        </Link>
        ,
        <Link component={RouterLink} underline="hover" key="2" color="#626262" to={'/profile'} sx={{ fontSize: '16px' }}>
            User Profile
        </Link>
    </Breadcrumbs>

}