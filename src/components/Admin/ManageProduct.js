import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SingleProductRow from './SingleProductRow';
// import Spinner from '../../Spinner/Spinner';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const ManageProducts = () => {
    const classes = useStyles()
    const [foods, setFoods] = useState([]);
    // const [showSpinner, setShowSpinner] = useState(true)

    useEffect(() => {
        fetch('https://morning-lake-88471.herokuapp.com/foods')
            .then(res => res.json())
            .then(foods => setFoods(foods))
    }, [])

    // setTimeout(() => {
    //     setShowSpinner(false)
    // }, 10000)
    return (
        <>
            <h3>Manage Products</h3>
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Food Name</TableCell>
                                <TableCell align="center">Category</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                // products.length
                                // ? (
                                //     products.map(product => <SingleProductRow key={product._id} product={product} />)
                                // ): (
                                //     showSpinner ? <Spinner /> : <Typography variant="subtitle1" style={{margin: '20px'}} align="center">No products found to show</Typography>
                                // )
                                foods && foods.map(product => <SingleProductRow key={product._id} product={product} />)
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
};

export default ManageProducts;