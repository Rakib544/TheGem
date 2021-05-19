import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import ban from '../../images/slider3.jpg';

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${ban})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
    },
    div: {
        display: 'flex',
        justifyContent: 'center',
        height: '100vh'
    },
    bannerText: {
        width: '40%',
        marginTop: '50px'
    },
    subtitle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: '16px',
        fontWeight: '400',
        letterSpacing: '2px',
        textTransform: 'uppercase'
    },
    title: {
        fontSize: '80px',
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    summary: {
        textAlign: 'center',
        fontSize: '16px',
        color: '#fff',
        letterSpacing: '1px',
        fontWeight: '400',
        padding: '10px 20px'
    },
    bannerBtn: {
        display: 'block',
        margin: '20px auto',
        padding: '20px 30px',
        borderRadius: '5px',
        background: 'transparent',
        outline: 'none',
        textTransform: 'uppercase',
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing:"1px",
        fontSize:'16px',
        cursor: 'pointer',
        border: '2px solid #CA9C5E',
    }
}))

const Banner = () => {
    const classes = useStyles()
    return (
        <div className={classes.background}>
            <NavBar />
            <div className={classes.div}>
                <div className={classes.bannerText}>
                    <Typography variant="h6" className={classes.subtitle}>
                        More Flavor For Test
                    </Typography>
                    <Typography variant="h3" className={classes.title}>
                        Taste The Difference
                    </Typography>
                    <Typography variant="h6" className={classes.summary}>
                        When the going gets tough, the tough get grilling. Bringing heat to your meat. No one can compete with our meat
                    </Typography>
                    <button className={classes.bannerBtn}>Our Menu</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;