import { Box, Button, Typography } from "@mui/material"


export const OrderSummary=()=>{

    return(
        <Box>
        <Typography variant='h3' sx={{paddingBottom:1,fontSize:20,fontWeight:600,borderBottom:'2px solid rgba(0, 0, 0, 0.12)'}}>
            Order Summary
        </Typography>
        <Box mt={2} display='flex' flexDirection='column' gap={2}>
        <Box sx={{display:'flex', justifyContent:'space-between'}} >
            <Typography variatn ='p'>Sub Total:</Typography>
            <Typography>12321</Typography>

        </Box>
        <Box sx={{display:'flex', justifyContent:'space-between'}} >
            <Typography variatn ='p'>Discount:</Typography>
            <Typography>12321</Typography>

        </Box>

        <Box sx={{display:'flex', justifyContent:'space-between'}} >
            <Typography variatn ='p'>Delivery Fee:</Typography>
            <Typography>12321</Typography>

        </Box>

        <Box sx={{display:'flex', justifyContent:'space-between'}} >
            <Typography variatn ='p' sx={{fontWeight:600}}>Grand Total:</Typography>
            <Typography>12321</Typography>

        </Box>


    

        </Box>
        <Box display='flex' mt={4} justifyContent='space-between'>
            <Button variant ='contained' size='meduim'   sx={{background:'#1B4B66',fontSize:14, paddingBlock:1, paddingInline:4}}>Place Order</Button>

            <Button  variant="outlined"  size='medium' sx={{color:'#1B4B66',fontSize:14,paddingBlock:1, paddingInline:4}}>Continue Shopping </Button>
        </Box>

        </Box>
    )
}