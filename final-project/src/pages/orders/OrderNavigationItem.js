import { Button } from "@mui/material"


export const OrderNavigationItem = ({ currentNav, setCurrentNav, title }) => {

    return <Button onClick={() => setCurrentNav(title)} sx={{
        color: (currentNav === title) ? 'white' : 'black', textTransform: 'none',
        backgroundColor: (currentNav === title) ? '#1B4B66' : ''
    }}>
        {title}
    </Button>

}