import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { googleLogin, LoginFrameWorkInitialized } from './LoginManager';

const Login = () => {
    const [loggedUser, setLoggedUser] = useContext(UserContext)
    LoginFrameWorkInitialized()
    const handleGoogleSingIn = () => {
        googleLogin()
        .then(result => {
            setLoggedUser(result)
        })
    }
    
    return (
        <div>
            <Button variant="contained" color="secondary" onClick={handleGoogleSingIn}>
                Google Sing In
            </Button>
        </div>
    );
};

export default Login;