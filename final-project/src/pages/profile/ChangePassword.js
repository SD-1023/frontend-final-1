import { Box, Typography } from "@mui/material"
import { Input } from "@mui/joy"


export const ChangePassword = () => {


    return <Box sx={{ display: 'flex', width: {xs: '100%', sm:'80%'}, gap: '20px', 
    flexWrap: 'wrap', flexDirection: 'column' }}>

        <Box sx={{ width: { xs: '100%', md: '45%' }, marginTop: '15px' }}>
            <Typography sx={{ fontSize: '16px' }}>
                Current Password
            </Typography>
            <Input
                type={"password"}
                name='pass'
                autoComplete='pass'
                placeholder={'****'} disableUnderline sx={{
                    backgroundColor: '#F1F1F1', width: '100%',
                    paddingBlock: { sm: '8px', md: '12px', lg: '16px' }, paddingInline: { sm: '6px', md: '10px', lg: '12px' }, borderRadius: '4px'
                }}>

            </Input>
        </Box>
        <Box sx={{ width: { xs: '100%', md: '45%' } }}>
            <Typography sx={{ fontSize: '16px' }}>
                New Password

            </Typography>
            <Input
                type={"password"}
                name='pass'
                autoComplete='pass'

                placeholder={'****'} disableUnderline sx={{
                    backgroundColor: '#F1F1F1', width: '100%',
                    paddingBlock: { sm: '8px', md: '12px', lg: '16px' }, paddingInline: { sm: '6px', md: '10px', lg: '12px' }, borderRadius: '4px'
                }}>

            </Input>
        </Box>
        <Box sx={{ width: { xs: '100%', md: '45%' } }}>
            <Typography sx={{ fontSize: '16px' }}>
                Confirm Password
            </Typography>
            <Input
                type={"password"}
                name='pass'
                autoComplete='pass'
                placeholder={'****'} disableUnderline sx={{
                    backgroundColor: '#F1F1F1', width: '100%',
                    paddingBlock: { sm: '8px', md: '12px', lg: '16px' }, paddingInline: { sm: '6px', md: '10px', lg: '12px' }, borderRadius: '4px'
                }}>

            </Input>
        </Box>

    </Box>
}