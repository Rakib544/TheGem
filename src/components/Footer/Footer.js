import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import logo from '../../images/logo.png';

const useStyles = makeStyles({
    margin: {
        margin: '50px 30px'
    },
    mt: {
        marginTop: '30px',
    },
    cursorPointer: {
        cursor: 'pointer'
    }
})

const Footer = () => {
    const classes = useStyles();
    return (
        <Grid container style={{ backgroundColor: '#0B1517', color: '#fff' }} spacing={3}>
            <Grid container item justify="space-between" spacing={5} className={classes.margin}>
                <Grid item lg={3} md={4} sm={12} xs={12} className={classes.mt}>
                    <img src={logo} alt="logo" style={{ width: '150px' }} />
                    <Typography variant="subtitle2" style={{marginTop: '10px', fontWeight: '400'}}>Dolor church-key veniam, fap Bushwick mumblecore irure Vice consectetur 3 wolf moon sapiente literally quinoa.</Typography>
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <h3>Overview</h3>
                    <Typography variant="subtitle2" className={classes.cursorPointer}>About online food</Typography>
                    <Typography variant="subtitle2" className={classes.cursorPointer}>Read our blog</Typography>
                    <Typography variant="subtitle2" className={classes.cursorPointer}>Sign up to deliver</Typography>
                    <Typography variant="subtitle2" className={classes.cursorPointer}>Add your restaurant</Typography>
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <h3>Resources</h3>
                    <Typography variant="subtitle2" className={classes.cursorPointer}>Get help</Typography>
                    <Typography variant="subtitle2" className={classes.cursorPointer}>Read AWS</Typography>
                    <Typography variant="subtitle2" className={classes.cursorPointer}>View all cities</Typography>
                    <Typography variant="subtitle2" className={classes.cursorPointer}>Restaurant near me</Typography>
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <h3>Contact Info</h3>
                    <Typography variant="subtitle2">+8801786542643</Typography>
                    <Typography variant="subtitle2">dev.rakib01@gmail.com</Typography>
                    <Typography variant="subtitle2">Dhaka, Bangladesh</Typography>
                </Grid>
            </Grid>
            <div style={{margin: '30px 0', textAlign: 'center', width: '100%', borderTop: '1px solid #fff', padding: '20px 0 0'}}>
                <Typography variant="subtitle2" align="center">Copyright &copy; 2021 online food</Typography>
            </div>
        </Grid>
    );
};

export default Footer;