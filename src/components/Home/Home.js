import { Container, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
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
        fetch('https://morning-lake-88471.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => {
                setFoods(data)
                setFilteredFoods(data)
            })
    }, [])

    const showAllFood = () => {
        setFilteredFoods(foods);
    }

    const filteredFood = foodType => {
        const filterFoods = foods.filter(food => food.foodType === foodType)
        setFilteredFoods(filterFoods)
    }
    return (
        <div style={{ overflow: 'hidden' }}>
            <Banner />
            <ul className={classes.ul}>
                <li className={classes.li} onClick={showAllFood}>All</li>
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
            <AboutUs />
            <Footer />
        </div>
    );
};

export default Home;