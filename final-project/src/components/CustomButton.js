import { Button } from "@mui/material"


export const Button = ({ text, sx }) => {


    return <Button sx={sx}>

        {text}
    </Button>
}