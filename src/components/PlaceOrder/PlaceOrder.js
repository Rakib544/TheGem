import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../LocalStrogeManager/DatabaseCartmanager';
import SingleCart from './SingleCart';

const PlaceOrder = () => {
    const [savedItem, setSavedItem] = useState([])
    const [savedFoods, setSavedFoods] = useState([])
    let finalItems = [];
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const savedCartArray = Object.keys(savedCart)
        setSavedItem(savedCartArray)
    }, [])

    useEffect(() => {
        savedItem.map(key => {
            return fetch(`http://localhost:8080/singleFood/${key}`)
                .then(res => res.json())
                .then(data => {
                    finalItems.push(data)
                    setSavedFoods(finalItems)
                })
        })
    }, [savedItem])
    return (
        <Container>
            <Grid container>
                <Grid item lg={5}>
                    Shipping form goes here
                </Grid>
                <Grid container item lg={5}>
                    {
                        savedFoods && savedFoods.map(food =>  <SingleCart key={food._id} food={food}/>)
                    }
                </Grid>
            </Grid>
        </Container>
    );
};

export default PlaceOrder;