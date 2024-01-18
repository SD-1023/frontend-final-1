import { Box } from "@mui/material"


export const Overlay = ({ setIsOverlayShown }) => {

    return <Box sx={{
        width: 1, height: 1, zIndex: 1, position: 'fixed',
        top: 0, left: 0, backgroundColor: '#3d3d3d4f'
    }} onClick={() => setIsOverlayShown(false)}>

    </Box>
}