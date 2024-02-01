import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";


export const SideNavigationBar = ({ setIsOverlayShown, categories }) => {

    const navigate = useNavigate();

    const onCategoryClicked = (id) => {
        navigate(`../products/${id}`, {
            state: { url: `https://group1.iscovat.bid/products?categoryId=${id}` }
        });
    }

    return <Box  sx={{
        width: '40%', height: '100%', position: 'fixed', top: 0, left: 0,
        backgroundColor: '#1B4B66', zIndex: 21
    }}>

        {/* <Box sx={{
            marginLeft: '87%', marginTop: '10px', marginRight: '10px', fontWeight: '600',
            fontSize: '20px', cursor: 'pointer', color: '#b5b7b9', '&:hover': {color: 'white'}
        }} 
            onClick={() => setIsOverlayShown(false)}>
            x
        </Box> */}

        <Box sx={{
            marginTop: '10px', display: 'flex', flexDirection: 'column',
            justifyContent: 'flex-start', alignItems: 'center'
        }}>

            {categories.map((cat) => <Box onClick={() => onCategoryClicked(cat.id)} key={cat.id} sx={{ width: 1, padding: '15px', cursor: 'pointer', color: 'white', '&:hover': { backgroundColor: '#b5b7b9' } }}>
                {cat.name}
            </Box>)}


        </Box>
    </Box>;
}