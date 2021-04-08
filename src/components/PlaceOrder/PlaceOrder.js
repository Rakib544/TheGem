import { Button, Container, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../LocalStrogeManager/DatabaseCartmanager';
import SingleCart from './SingleCart';

const useStyles = makeStyles(theme => ({
    input: {
        margin: '10px 5px'
    },
    container: {
        marginTop: '50px'
    }
}))

const PlaceOrder = () => {
    const classes = useStyles();
    const [foods, setFoods] = useState([])
    const [savedItem, setSavedItem] = useState([])
    const [savedItemQuantity, setSavedItemQuantity] = useState([])
    const [savedFoods, setSavedFoods] = useState([])

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const savedCartArray = Object.keys(savedCart)
        const savedCartValue = Object.values(savedCart)
        setSavedItemQuantity(savedCartValue)
        setSavedItem(savedCartArray)
    }, [])

    useEffect(() => {
        fetch('http://localhost:8080/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [savedItem])

    useEffect(() => {
        const addToCartFood = savedItem.map(key => {
            const wantedFood = foods.find(food => food._id === key)
            return wantedFood
        })
        setSavedFoods(addToCartFood)
    }, [foods])

    const subTotal = savedFoods.reduce((sum, foodItem, index) => sum += foodItem.price * savedItemQuantity[index], 0)
    const tax = (subTotal * 0.1).toFixed(2)
    const deliveryFee = 2;
    const total = parseFloat(subTotal + tax + deliveryFee).toFixed(2)
    return (
        <Container maxWidth="md" className={classes.container}>
            <Grid container justify="space-between">
                <Grid item lg={5}>
                    <Typography variant="h5">
                        Edit Delivery Details
                    </Typography>
                    <hr />
                    <form>
                        <TextField fullWidth className={classes.input} variant="standard" label="Delivery Type" />
                        <TextField fullWidth className={classes.input} variant="standard" label="Road Number" />
                        <TextField fullWidth className={classes.input} variant="standard" label="Flat, Suit or Floor" />
                        <TextField fullWidth className={classes.input} variant="standard" label="Business Name" />
                        <TextField fullWidth className={classes.input} variant="standard" label="Add Delivery Instructor" />
                        <Button variant="contained" fullWidth color="secondary">Save and continue</Button>
                    </form>
                </Grid>
                <Grid container item lg={6}>
                    <Grid container lg={12}>
                        {
                            savedFoods && savedFoods.map(food => <SingleCart key={food._id} food={food} />)
                        }
                    </Grid>
                    <Grid container item style={{ padding: '10px 20px' }}>
                        <Grid item lg={7}>
                            <Typography variant="subtitle1">Subtotal - {savedFoods.length} items</Typography>
                            <Typography variant="subtitle1">Tax</Typography>
                            <Typography variant="subtitle1">Delivery Fee</Typography>
                            <Typography variant="h6">Total</Typography>
                        </Grid>
                        <Grid item lg={5}>
                            <Typography align="right" variant="subtitle1">{subTotal.toFixed(2)}</Typography>
                            <Typography align="right" variant="subtitle1">{tax}</Typography>
                            <Typography align="right" variant="subtitle1">{deliveryFee}</Typography>
                            <Typography align="right" variant="h6">{total}</Typography>
                        </Grid>
                    </Grid>
                    <div>
                        <Button variant="contained" color="secondary">Place Order</Button>
                    </div>
                </Grid>

            </Grid>
        </Container>
    );
};

export default PlaceOrder;