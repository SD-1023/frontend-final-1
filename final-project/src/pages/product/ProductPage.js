import { Box } from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";






export const ProductPage=()=>{

  const navigate = useNavigate();

    function handleClick(event,path) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
     navigate(path);
    
      }

return(
<Box p ={2}>
<Breadcrumbs separator="›" aria-label="breadcrumb">
<Link underline="hover" key="1" color="inherit" to="./" onClick={(event) => handleClick(event, "/")}>
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="./category"
      onClick={(event) => handleClick(event, "/hello")}
    >
      Category
    </Link>,
    <Typography key="3" color="text.primary">
      Label
    </Typography>,
      </Breadcrumbs>



    

</Box>



);

}