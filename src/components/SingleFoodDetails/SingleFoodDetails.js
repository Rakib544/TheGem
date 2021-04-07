import { Button, ButtonGroup, Container, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { addToDatabaseCart } from '../LocalStrogeManager/DatabaseCartmanager';

const useStyles = makeStyles(theme => ({
    container: {
        height: '100vh'
    },
    img: {
        width: '100%'
    },
    description: {
        padding: '20px 30px 10px 0'
    },
    buttonGroupContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
    },
    buttonGroup: {
        border: '1px solid gray',
        borderRadius: '30px',
        marginLeft: '30px',
        height: '42px'
    },
    quantity: {
        lineHeight: '40px'
    },
    button: {
        padding: '8px 20px',
        borderRadius: '20px'
    }
}))

const SingleFoodDetails = () => {
    const classes = useStyles()
    const { id } = useParams()

    const [selectedFood, setSelectedFood] = useState({});
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        fetch(`http://localhost:8080/singleFood/${id}`)
            .then(res => res.json())
            .then(data => setSelectedFood(data))
    }, [id])

    const handleDecrementQuantity = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const handleIncrementQuantity = () => {
        setQuantity(quantity + 1)
    }

    const handleAddToCart = () => {
        addToDatabaseCart(id, quantity)
    }

    const { name, price, imageURL, description } = selectedFood;
    return (
        <Container className={classes.container}>
            <Grid container alignItems="center" spacing={3} justify="center">
                <Grid item lg={5}>
                    <Typography variant="h2">
                        {name}
                    </Typography>
                    <Typography variant="subtitle2" className={classes.description}>
                        {description}
                    </Typography>
                    <div className={classes.buttonGroupContainer}>
                        <Typography variant="h5">
                            $ {price}
                        </Typography>
                        <ButtonGroup color="secondary" className={classes.buttonGroup}>
                            <IconButton onClick={handleDecrementQuantity}>
                                <RemoveIcon />
                            </IconButton>
                            <Typography className={classes.quantity} align="center" variant="h6">
                                {quantity}
                            </Typography>
                            <IconButton onClick={handleIncrementQuantity}>
                                <AddIcon />
                            </IconButton>
                        </ButtonGroup>
                    </div>
                    <Button className={classes.button} startIcon={<ShoppingCartIcon />} variant="contained" color="secondary" onClick={handleAddToCart}>
                        Add
                    </Button>
                </Grid>
                <Grid item lg={5}>
                    <img src={imageURL} alt={name} className={classes.img} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default SingleFoodDetails;