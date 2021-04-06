import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import banner from '../../images/banner.jpg';
const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
    },
    div: {
        height: '50vh',
        width: '100vw',
        padding: '100px 0'
    },
    searchParent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px'
    },
    input: {
        padding: '13px 20px',
        width: '40%',
        borderRadius: '15px 0 0 15px',
        border: '0',
        outline: 'none',
        "@media(max-width: 900px)" : {
            width: '90%'
        }
    },
    button: {
        padding: '13px 20px',
        borderRadius: '0 15px 15px 0',
        border: '0',
        outline: 'none',
        backgroundColor: 'red',
        color: '#fff',
        cursor: 'pointer'
    }
}))

const Banner = () => {
    const classes = useStyles()
    return (
        <div className={classes.background}>
            <div className={classes.div}>
               <Typography variant="h3" color="secondary" align="center">
                   Best Things waiting for you
               </Typography>
               <div className={classes.searchParent}>
                   <input className={classes.input} type='search' placeholder="search..." />
                   <button className={classes.button}>Search</button>
               </div>
            </div>
        </div>
    );
};

export default Banner;