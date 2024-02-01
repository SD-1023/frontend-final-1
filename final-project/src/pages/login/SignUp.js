import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="./">
                CORA'L
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



const defaultTheme = createTheme();

export const SignUp = () => {
    const [first_name, setFirstName] = useState({ value: null, error: '' });
    const [last_name, setLastName] = useState({ value: null, error: '' });
    const [email, setEmail] = useState({ value: null, error: '' });
    const [password, setPassword] = useState({ value: null, error: '' });
    const [username, setUserName] = useState({ value: null, error: '' });
    const [birth_date, setBirthDate] = useState({ value: null, error: '' });
    const [mobile, setMobile] = useState({ value: null, error: '' });
    const [eye, setEye] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };
    const handleEye = () => {
        setEye(!eye)
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;

        if (id === "first_name") {
            setFirstName({ value, error: value ? '' : 'First Name is required' });
        }
        if (id === "last_name") {
            setLastName({ value, error: value ? '' : 'Last Name is required' });
        }
        if (id === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value || !emailRegex.test(value)) {
                setEmail({ value, error: 'Please enter a valid email address' });
            } else {
                setEmail({ value, error: '' });
            }
        }
        if (id === "password") {
            if (id === "password") {

                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

                setPassword({ value, error: '' });

                if (!value || !passwordRegex.test(value)) {
                    setPassword({ value, error: 'Password should consist of at least 8 characters including uppercase, lowercase, numbers, and special characters' });
                } else {
                    setPassword({ value, error: '' });
                }
            }
        }
        if (id === "username") {
            setUserName({ value, error: value ? '' : 'User name is required' });
        }
        if (id === "birth_date") {
            setBirthDate({ value, error: value ? '' : 'Birth date is required' });
        }
        if (id === "mobile") {
            setMobile({ value, error: value ? '' : 'Mobile is required' });
        }

    }


    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        let obj = JSON.stringify({
            email: email.value,
            mobile: mobile.value,
            password: password.value,
            username: username.value,
            last_name: last_name.value,
            birth_date: birth_date.value,
            first_name: first_name.value,
        
        })
        if (
            first_name.error ||
            last_name.error ||
            email.error ||
            password.error ||
            username.error ||
            birth_date.error ||
            mobile.error
        ) {

            setSnackbarMessage('Please fill in all required fields correctly.');
            setSnackbarOpen(true);
            return;
        }


   

        fetch("https://group1.iscovat.bid/users/signup", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: obj
        })
            .then(res => {

                return res.json();
            })
            .then(json => {

                if (json.error) {
                    throw new Error(json.error);
                }
            
                setSnackbarMessage('Signup successfully!');
                setSnackbarOpen(true);

                localStorage.setItem('token', JSON.stringify(json));
                navigate('/');
            })
            .catch(error => {
                setSnackbarMessage(error + "");
                setSnackbarOpen(true);
           
            });


    };



    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="first_name"
                                    required
                                    fullWidth
                                    id="first_name"
                                    label="First Name"
                                    autoFocus
                                    onChange={(e) => handleInputChange(e)}
                                    error={!!first_name.error}
                                    helperText={first_name.error}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="last_name"
                                    label="Last Name"
                                    name="last_name"
                                    autoComplete="family-name"
                                    onChange={(e) => handleInputChange(e)}
                                    error={!!last_name.error}
                                    helperText={last_name.error}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="username"
                                    label="username"
                                    type="username"
                                    id="username"
                                    autoComplete="user-name"
                                    onChange={(e) => handleInputChange(e)}

                                    error={!!username.error}

                                    helperText={username.error}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={(e) => handleInputChange(e)}
                                    error={!!email.error}
                                    helperText={email.error}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Enter Password"
                                    type={eye ? 'text' : 'password'}
                                    id="password"
                                    // helperText='Password should consists of uppercase & lowercase letters, numbers, and special characters(@#$%!...etc)'
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <IconButton onClick={handleEye}>
                                                    {eye ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                    onChange={(e) => handleInputChange(e)}
                                    error={!!password.error}
                                    helperText={password.error}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="mobile"
                                    label="Mobile Number"
                                    type="tel"
                                    id="mobile"
                                    onChange={(e) => handleInputChange(e)}
                                    error={!!mobile.error}
                                    helperText={mobile.error}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="birth_date"
                                    type="date"
                                    id="birth_date"
                                    autoComplete='birth_date'
                                    onChange={(e) => handleInputChange(e)}
                                    error={!!birth_date.error}
                                    helperText={birth_date.error}
                                />

                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="./signin" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000} // Adjust the duration as needed
                onClose={handleSnackbarClose}
            >
                <SnackbarContent
                    message={snackbarMessage}
                    action={(
                        <IconButton size="small" color="inherit" onClick={handleSnackbarClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    )}
                />
            </Snackbar>
        </ThemeProvider>
    );
}