import { Breadcrumbs, Link } from "@mui/material"

import { useNavigate, Link as RouterLink } from "react-router-dom";

export const CustomBreadcrumbs = ({ items, setCurrentItem }) => {

    const navigate = useNavigate();

    const onClickHandler = (item) => {
        if (item.path) {
            navigate(item.path);
        } else {
            setCurrentItem(item.navTitle);
        }
    }

    return <Breadcrumbs sx={{ display: { xs: 'none', sm: 'block' } }} separator="›" aria-label="breadcrumb">

        {items.map((item, i) => (
            <Link component={RouterLink} underline="hover" key={i} onClick={() => onClickHandler(item)}
                sx={{ color: item.color ? item.color : '#626262', fontSize: '16px' }}>
                {item.title}
            </Link>
        ))}

    </Breadcrumbs>

}