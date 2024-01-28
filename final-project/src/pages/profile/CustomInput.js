import { Input, Typography } from "@mui/material"


export const CustomInput = ({title}) => {


    return <>
        <Typography>
            {title}
        </Typography>
        <Input placeholder={title}>

        </Input>
    </>
}