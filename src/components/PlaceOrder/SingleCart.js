import { ButtonGroup, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove'

const useStyles = makeStyles(theme => ({
    buttonGroup: {
        marginLeft: '30px',
        height: '42px',
    },
    quantity: {
        lineHeight: '40px'
    },
    grid: {
        padding: '10px',
        backgroundColor: '#f7f7f7',
        margin: '10px',
        borderRadius: '10px'
    }
}))

const SingleCart = ({ food }) => {
    const classes = useStyles()
    const [quantity, setQuantity] = useState(1)

    const handleDecrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const handleIncrementQuantity = () => {
        setQuantity(quantity + 1)
    }
    return (
        <Grid container item lg={12} spacing={3} className={classes.grid} alignItems="center">
            <Grid item lg={3}>
                <img src={food.imageURL} alt={food.name} style={{ width: '100%' }} />
            </Grid>
            <Grid item lg={4}>
                <Typography variant="subtitle2">
                    {food.name}
                </Typography>
                <Typography variant="h6">
                    $ {food.price * quantity}
                </Typography>
            </Grid>
            <Grid item lg={5}>
                <ButtonGroup color="secondary"  className={classes.buttonGroup}>
                    <IconButton onClick={handleDecrementQuantity} size="small">
                        <RemoveIcon />
                    </IconButton>
                    <Typography className={classes.quantity} align="center" variant="h6">
                        {quantity}
                    </Typography>
                    <IconButton onClick={handleIncrementQuantity} size="small">
                        <AddIcon />
                    </IconButton>
                </ButtonGroup>
            </Grid>
        </Grid>
    );
};

export default SingleCart;