import { Button, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';
import { createUserWithEmailAndPassword, initializedApplication, signInWithEmailAndPassword, signInWithGoogle } from './LoginManager';

const useStyles = makeStyles((theme) => ({
    input: {
        width: '100%',
        margin: '10px'
    },
    grid: {
        padding: theme.spacing(2),
        marginTop: '30px'
    },
    paper: {
        padding: theme.spacing(3)
    },
    formStyle: {
        display: 'flex',
        justifyContent: 'center'
    },
    span: {
        color: 'tomato',
        cursor: 'pointer',
    },
    googleButton: {
        display: 'block',
        margin: '10px auto'
    }
}))

const Login = () => {
    const [loggedUser, setLoggedUser] = useContext(UserContext)
    const classes = useStyles()
    const { register, handleSubmit, errors } = useForm();

    const [showLogin, setShowLogin] = useState(true)
    const [logUserInfo, setLogUserInfo] = useState({ name: '', email: '', success: false, error: '' })
    const [regUserInfo, setRegUserInfo] = useState({ name: '', email: '', success: false, error: '' })
    const [userInfo, setUserInfo] = useState({ name: '', email: '', success: false, error: '' })

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    initializedApplication();

    const onSubmit = data => {
        if (!showLogin) {
            createUserWithEmailAndPassword(data.name, data.email, data.password)
                .then(result => {
                    setRegUserInfo(result)
                })
        }
        else {
            signInWithEmailAndPassword(data.email, data.password)
                .then(result => {
                    setLogUserInfo(result)
                    setUserInfo(result)
                    setLoggedUser(result)
                    history.replace(from);
                })

        }

    }

    const googleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                setUserInfo(res)
                setLoggedUser(res)
                history.replace(from);
            })
    }

    return (
        <div className={classes.formStyle}>
            <Grid container item lg={5} md={8} sm={12} xs={12} justify="center" className={classes.grid}>
                <img src={logo} alt="logo" />
                <Paper className={classes.paper}>
                    <Typography variant="h6">
                        {showLogin ? 'Login Here' : 'Registration'}
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {!showLogin &&
                            <TextField
                                name="name"
                                label="Full Name"
                                className={classes.input}
                                inputRef={register({
                                    required: 'Name is required'
                                })}
                                error={Boolean(errors.name)}
                                helperText={errors.name?.message}
                            />
                        }
                        <TextField
                            name="email"
                            label="Enter Your Email"
                            className={classes.input}
                            inputRef={register({
                                required: 'email is required'
                            })}
                            error={Boolean(errors.email)}
                            helperText={errors.email?.message}
                        />
                        <TextField
                            name="password"
                            label="Enter Your password"
                            className={classes.input}
                            inputRef={register({
                                required: 'password is required'
                            })}
                            error={Boolean(errors.password)}
                            helperText={errors.password?.message}
                            type="password"
                        />
                        {!showLogin &&
                            <TextField
                                name="description"
                                label="Description"
                                className={classes.input}
                                inputRef={register({
                                    required: 'Description is required'
                                })}
                                error={Boolean(errors.description)}
                                helperText={errors.description?.message}
                            />
                        }
                        <Button type="submit" variant="contained" color="primary">
                            {showLogin ? ' Login' : 'Registration'}
                        </Button>
                    </form>
                    <Button variant="contained" color="primary" className={classes.googleButton} onClick={googleSignIn}>
                        Continue WIth Google
                    </Button>
                    <Typography variant="subtitle1" align="center">
                        {showLogin ? "Don't Have any account ?" : "Already Have an account ? "}
                        <strong className={classes.span} onClick={() => setShowLogin(!showLogin)}>
                            {showLogin ? 'Registration Here' : 'Login Here'}
                        </strong>
                    </Typography>
                    <Typography variant="subtitle1" align='center'>
                        {logUserInfo.success && logUserInfo.success && showLogin ? 'User login Successfully' : logUserInfo.error}
                        {regUserInfo.success && regUserInfo.success && !showLogin ? 'User created Successfully' : regUserInfo.error}
                    </Typography>
                </Paper>
            </Grid>
        </div>
    );
};

export default Login;