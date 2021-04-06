import { Container, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import SingleFoodCart from '../SignleFoodCart/SingleFoodCart';

const useStyles = makeStyles(() => ({
    ul: {
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0'
    },
    li: {
        listStyleType: 'none',
        margin: '10px',
        color: 'red',
        fontWeight: 'bold',
        cursor: 'pointer'
    }
}))

const Home = () => {
    const classes = useStyles()
    const [filteredFoods, setFilteredFoods] = useState([])
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
            filteredFood()
    }, [])

    const filteredFood = (foodType, type="breakfast") => {
        const breakFast = foods.filter(food => food.foodType === (foodType || type))
       setFilteredFoods(breakFast)
    }

    return (
        <div style={{ overflow: 'hidden' }}>
            <Banner />
            <ul className={classes.ul}>
                <li className={classes.li} onClick={() => filteredFood("breakfast")}>BreakFast</li>
                <li className={classes.li} onClick={() => filteredFood("lunch")}>Lunch</li>
                <li className={classes.li} onClick={() => filteredFood("dinner")}>Dinner</li>
            </ul>
            <Container maxWidth="md">
                <Grid container spacing={4}>
                    {
                        filteredFoods && filteredFoods.map(food => <SingleFoodCart key={food._id} food={food} />)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Home;