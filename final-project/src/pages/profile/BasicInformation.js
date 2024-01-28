import { Box, Typography, Input, TextField } from "@mui/material"


export const BasicInformation = () => {

    return <Box sx={{ display: 'flex', width: { md: '100%', lg: '80%' }, gap: '20px', flexWrap: 'wrap', flexDirection: 'column' }}>
        <Box sx={{ minWidth: '100%', display: 'flex', justifyContent: 'space-between', 
        flexWrap: { xs: 'wrap', sm: 'nowrap' }, gap: {xs: '20px', sm: ''} }}>
            <Box sx={{ minWidth: { xs: '100%', sm: '40%' } }}>
                <Typography sx={{ fontSize: '16px' }}>
                    First Name
                </Typography>
                <Input placeholder={'Ahmad'} disableUnderline
                    name='fname'
                    autoComplete='fname'
                    sx={{
                        backgroundColor: '#F1F1F1', width: '100%',
                        paddingBlock: { sm: '8px', md: '12px', lg: '16px' }, paddingInline: { sm: '6px', md: '10px', lg: '12px' }, borderRadius: '4px'
                    }}>

                </Input>
            </Box>
            <Box sx={{ minWidth: { xs: '100%', sm: '40%' } }}>

                <Typography sx={{ fontSize: '16px' }}>
                    Last Name
                </Typography>
                <Input placeholder={'Masri'} disableUnderline
                    name='lname'
                    autoComplete='lname'
                    sx={{
                        backgroundColor: '#F1F1F1', width: '100%',
                        paddingBlock: { sm: '8px', md: '12px', lg: '16px' }, paddingInline: { sm: '6px', md: '10px', lg: '12px' }, borderRadius: '4px'
                    }}>

                </Input>
            </Box>
        </Box>
        <Box sx={{ minWidth: '100%' }}>

            <Typography sx={{ fontSize: '16px' }}>
                Email
            </Typography>
            <Input type="email" placeholder={'masri.a7mad@gmail.com'} disableUnderline
                name='email'
                autoComplete='email'
                sx={{
                    backgroundColor: '#F1F1F1', width: '100%',
                    paddingBlock: { sm: '8px', md: '12px', lg: '16px' }, paddingInline: { sm: '6px', md: '10px', lg: '12px' }, borderRadius: '4px'
                }}>

            </Input>
        </Box>
        <Box sx={{ minWidth: '100%' }}>

            <Typography sx={{ fontSize: '16px' }}>
                Mobile Number
            </Typography>
            <Box sx={{ minWidth: '100%', display: 'flex', gap: '10px' }}>
                <Input placeholder={'+970'} disableUnderline sx={{
                    backgroundColor: '#F1F1F1', width: '70px',
                    paddingBlock: { sm: '8px', md: '12px', lg: '16px' }, paddingInline: { sm: '6px', md: '10px', lg: '12px' }, borderRadius: '4px'
                }}>
                </Input>
                <Input type="number"
                    name='phone'
                    autoComplete='phone'
                    placeholder={'59999999'} disableUnderline sx={{
                        '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                            '-webkit-appearance': 'none',
                            margin: 0,
                        },
                        backgroundColor: '#F1F1F1', width: '50%',
                        paddingBlock: { sm: '8px', md: '12px', lg: '16px' }, paddingInline: { sm: '6px', md: '10px', lg: '12px' }, borderRadius: '4px'
                    }}>
                </Input>
            </Box>
        </Box>
        <Box sx={{ minWidth: '100%' }}>

            <Typography sx={{ fontSize: '16px' }}>
                Date of birth
            </Typography>
            <TextField border={0} boxShadow={0} sx={{ backgroundColor: '#F1F1F1', border: 0, width: '50%' }}
                required
                fullWidth
                name="birth_date"
                type="date"
                autoComplete='birth_date'

            />
        </Box>
    </Box>
}