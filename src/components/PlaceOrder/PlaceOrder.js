import { Box, Button, Container, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { addToDatabaseCart, getDatabaseCart } from '../LocalStrogeManager/DatabaseCartmanager';
import SingleCart from './SingleCart';
import { useForm } from "react-hook-form";

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
    const [quantity, setQuantity] = useState(1)
    const [deliveryDetails, setDeliveryDetails] = useState({})

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const savedCartArray = Object.keys(savedCart)
        const savedCartValue = Object.values(savedCart)
        setSavedItemQuantity(savedCartValue)
        setSavedItem(savedCartArray)
    }, [])

    useEffect(() => {
        fetch('https://morning-lake-88471.herokuapp.com/foods')
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

    //
    const handleIncrementQuantity = (id) => {
        setQuantity(quantity + 1)
        addToDatabaseCart(id, quantity + 1)
        //
        const savedCart = getDatabaseCart();
        const savedCartArray = Object.keys(savedCart)
        const savedCartValue = Object.values(savedCart)
        setSavedItemQuantity(savedCartValue)
        setSavedItem(savedCartArray)
    }

    const handleDecrementQuantity = (id) => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            addToDatabaseCart(id, quantity - 1)
            //
            const savedCart = getDatabaseCart();
            const savedCartArray = Object.keys(savedCart)
            const savedCartValue = Object.values(savedCart)
            setSavedItemQuantity(savedCartValue)
            setSavedItem(savedCartArray)
        }
    }

    const subTotal = savedFoods.reduce((sum, foodItem, index) => sum += foodItem.price * savedItemQuantity[index], 0)
    const tax = (subTotal * 0.1).toFixed(2)
    const deliveryFee = 2;
    const total = parseFloat(subTotal + tax + deliveryFee).toFixed(2)

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        setDeliveryDetails(data)
    }
    return (
        <Container maxWidth="md" className={classes.container}>
            <Grid container justify="space-between">

                <Grid item lg={5}>
                    <Paper component={Box} p={3}>
                        <Typography variant="h5">
                            Edit Delivery Details
                    </Typography>
                        <hr />
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField fullWidth name="deliverType" inputRef={register} className={classes.input} variant="standard" label="Delivery Type" />
                            <TextField fullWidth name="roadNumber" inputRef={register} className={classes.input} variant="standard" label="Road Number" />
                            <TextField fullWidth name="floor" inputRef={register} className={classes.input} variant="standard" label="Flat, Suit or Floor" />
                            <TextField fullWidth name="businessName" inputRef={register} className={classes.input} variant="standard" label="Business Name" />
                            <TextField fullWidth name="direction" inputRef={register} className={classes.input} variant="standard" label="Add Delivery Instructor" />
                            <Button variant="contained" type="submit" fullWidth color="secondary">Save and continue</Button>
                        </form>
                    </Paper>
                </Grid>

                <Grid container item lg={6}>
                    <Grid container lg={12} direction="column" style={{padding: '0 20px'}}>
                        <Typography variant="subtitle1">From Gulshan Plaza Restaurant GPR</Typography>
                        <Typography variant="subtitle2">Arriving in 20-30 minutes</Typography>
                        <Typography variant="subtitle1">{deliveryDetails.floor}</Typography>
                    </Grid>

                    <Grid container lg={12}>
                        {
                            savedFoods && savedFoods.map(food => <SingleCart key={food._id} food={food} handleIncrementQuantity={handleIncrementQuantity} handleDecrementQuantity={handleDecrementQuantity} quantity={quantity} />)
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
                    <div style={{ margin: '0 0 20px 20px' }}>
                        <Button variant="contained" color="secondary" disabled={!deliveryDetails.floor}>Place Order</Button>
                    </div>

                </Grid>

            </Grid>
        </Container>
    );
};

export default PlaceOrder;