import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const [first_name, setFirstName] = useState(null);
    const [last_name, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [username, setUserName] = useState(null);
    const [birth_date, setBirthDate] = useState(null);
    const [mobile, setMobile] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "first_name") {
            setFirstName(value);
        }
        if (id === "last_name") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "username") {
            setUserName(value);
        }
        if (id === "birth_date") {
            setBirthDate(value);
        }
        if (id === "mobile") {
            setMobile(value);
        }


    }


    const navigate = useNavigate();
    const handleSubmit = (event) => {
        let obj =JSON.stringify({
            email: email,
            mobile: mobile,
            password: password,
            username: username,
            last_name: last_name,
            birth_date: birth_date,
            first_name: first_name,
            profile_image: "https://example.com/john_doe_profile.jpg"
        })
      
       
        const data = new FormData(event.currentTarget);
    console.log(obj);
        fetch("https://stoplight.io/mocks/final-project-coral/coral/305018974/users/signup", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body:obj
        })
            .then(res => {
                console.log("Response status:", res.status);
                return res.json();
            })
            .then(json => {
                console.log("Server response:", json);

                localStorage.setItem('token', JSON.stringify(json));
                // navigate('/');
            })
            .catch(error => {
                console.error("Error:", error);
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
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange = {(e) => handleInputChange(e)}
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
                                />
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
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
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
        </ThemeProvider>
    );
}