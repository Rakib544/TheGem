import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    card: {
        boxShadow: '0 0 0 0', 
        "&:hover": {
            boxShadow: '5px 5px 10px rgba(0,0,0,0.1)'
        }
    },
    image: {
        width: '250px',
        height: '250px',
        display: 'block',
        margin: '10px auto',
        objectFit: 'cover'
    }
}))

const SingleFoodCart = ({ food }) => {
    const classes = useStyles()
    const {name, imageURL, price} = food;
    return (
        <Grid item lg={4} md={3} sm={6} xs={12}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia>
                        <img src={imageURL} alt={name} className={classes.image} />
                    </CardMedia>
                    <CardContent>
                        <Typography variant="subtitle1" align="center">
                            {name}
                        </Typography>
                        <Typography variant="h6" align="center">
                            ${price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default SingleFoodCart;