import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { NavBar } from '../NavBar/NavBar';
const ban = `https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60`
const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${ban})`,
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
            width: '70%'
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
             <NavBar />
            <div className={classes.div}>
               <Typography variant="h3" style={{color: '#fff'}} align="center">
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