import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <Grid container style={{ backgroundColor: 'black', color: '#fff' }} spacing={6}>
            <Grid container item justify="space-between">
                    <Grid item>
                        <img src={logo} alt="logo" style={{height: '60px', marginLeft: '10px'}} />
                    </Grid>
                    <Grid item lg={4}>
                        <Typography variant="subtitle1">About online food</Typography>
                        <Typography variant="subtitle1">Read our blog</Typography>
                        <Typography variant="subtitle1">Sign up to deliver</Typography>
                        <Typography variant="subtitle1">Add your restaurant</Typography>
                    </Grid>
                    <Grid item lg={4}>
                        <Typography variant="subtitle1">Get help</Typography>
                        <Typography variant="subtitle1">Read AWS</Typography>
                        <Typography variant="subtitle1">View all cities</Typography>
                        <Typography variant="subtitle1">Restaurant near me</Typography>
                    </Grid>
            </Grid>
            <Grid container item style={{margin: '30px 10px 30px 10px'}}>
                <Grid item lg={6}>
                    Copyright &copy; 2021 online food
                </Grid>
                <Grid item lg={2}>
                    <Typography variant="subtitle2">Privacy Policy</Typography>
                </Grid>
                <Grid item lg={2}>
                    <Typography variant="subtitle2">Terms of use</Typography>
                </Grid>
                <Grid item lg={2}>
                    <Typography variant="subtitle2">Pricing</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Footer;