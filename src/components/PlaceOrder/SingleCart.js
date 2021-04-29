import { ButtonGroup, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove'
import { getDatabaseCart } from '../LocalStrogeManager/DatabaseCartmanager';

const useStyles = makeStyles(theme => ({
    buttonGroup: {
        marginLeft: '30px',
        height: '42px',
        "@media(max-width: 900px)": {
            marginLeft: '10px'
        }
    },
    quantity: {
        lineHeight: '40px'
    },
    grid: {
        padding: '5px',
        backgroundColor: '#f7f7f7',
        margin: '10px',
        borderRadius: '10px'
    }
}))

const SingleCart = ({ food, handleIncrementQuantity, handleDecrementQuantity }) => {
    const classes = useStyles()
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        const localStorageProduct = getDatabaseCart()
        setQuantity(localStorageProduct[food._id])
    }, [])

    const addQuantity = () => {
        const localStorageProduct = getDatabaseCart()
        setQuantity(localStorageProduct[food._id])
    }
    const removeQuantity = () => {
        const localStorageProduct = getDatabaseCart()
        setQuantity(localStorageProduct[food._id])
    }

    return (
        <Grid container item lg={12} spacing={3} className={classes.grid} alignItems="center">
            <Grid item lg={3} md={3} sm={3} xs={3}>
                <img src={food.imageURL} alt={food.name} style={{ width: '100%' }} />
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4}>
                <Typography variant="subtitle2">
                    {food.name}
                </Typography>
                <Typography variant="h6">
                    $ {food.price * quantity}
                </Typography>
            </Grid>
            <Grid item lg={5} md={5} sm={5} xs={5}>
                <ButtonGroup color="secondary" className={classes.buttonGroup}>
                    <IconButton onClick={() => {
                        handleDecrementQuantity(food._id);
                        addQuantity();
                    }} size="small">
                        <RemoveIcon />
                    </IconButton>
                    <Typography className={classes.quantity} align="center" variant="h6">
                        {quantity}
                    </Typography>
                    <IconButton onClick={() => {
                         handleIncrementQuantity(food._id);
                         removeQuantity()
                    }} size="small">
                        <AddIcon />
                    </IconButton>
                </ButtonGroup>
            </Grid>
        </Grid>
    );
};

export default SingleCart;