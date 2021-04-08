import { Button, Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../LocalStrogeManager/DatabaseCartmanager';
import SingleCart from './SingleCart';

const PlaceOrder = () => {
    const [foods, setFoods] = useState([])
    const [savedItem, setSavedItem] = useState([])
    const [savedFoods, setSavedFoods] = useState([])

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const savedCartArray = Object.keys(savedCart)
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

    return (
        <Container>
            <Grid container>
                <Grid item lg={5}>
                    Shipping form goes here
                </Grid>
                <Grid container item lg={5}>
                    <Grid container lg={12}>
                        {
                            savedFoods && savedFoods.map(food => <SingleCart key={food._id} food={food} />)
                        }
                    </Grid>
                    <Grid container item style={{padding: '10px 20px'}}>
                        <Grid item lg={7}>
                            <Typography variant="subtitle1">Subtotal - {savedFoods.length} items</Typography>
                            <Typography variant="subtitle1">Tax</Typography>
                            <Typography variant="subtitle1">Delivery Fee</Typography>
                            <Typography variant="h6">Total</Typography>
                        </Grid>
                        <Grid item lg={5}>
                            <Typography align="right" variant="subtitle1">100</Typography>
                            <Typography align="right" variant="subtitle1">5</Typography>
                            <Typography align="right" variant="subtitle1">2</Typography>
                            <Typography align="right" variant="h6">125</Typography>
                        </Grid>
                    </Grid>
                    <Button fullWidth style={{margin: '20px'}} variant="contained" color="secondary">Place Order</Button>
                </Grid>

            </Grid>
        </Container>
    );
};

export default PlaceOrder;