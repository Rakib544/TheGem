import { Button, Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import logo from '../../images/logo.png'
import AppsIcon from '@material-ui/icons/Apps';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import AddFood from './AddFood';
import ManageProduct from './ManageProduct';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router';
import EditPage from './EditPage';

const useStyles = makeStyles(theme => ({
    leftSide: {
        backgroundColor: '#263238',
        height: '100vh',
        "@media(max-width: 900px)": {
            height: '30vh'
        }
    },
    logo: {
        height: '60px',
        display: 'block',
        margin: 'auto'
    },
    button: {
        color: '#fff'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: '60px',
        marginTop: '20px',
    }
}))

const Admin = () => {
    const classes = useStyles();
    let { path, url } = useRouteMatch();
    const history = useHistory()
    const goToManagePage = () => {
        history.push(`${url}/manageProducts`)
    }
    const goToAddProductPage = () => {
        history.push(`${url}/addProducts`)
    }
    const goToEditProductPage = () => {
        history.push(`${url}/editProducts`)
    }
    return (
        <div>
            <Grid container>
                <Grid item lg={3} md={3} sm={12} xs={12} className={classes.leftSide}>
                    <div>
                        <img src={logo} alt="logo" className={classes.logo} />
                    </div>
                    <div className={classes.buttonContainer}>
                        <Button onClick={goToManagePage} startIcon={<AppsIcon />} className={classes.button}>Manage Product</Button>
                        <Button onClick={goToAddProductPage} startIcon={<AddIcon />} className={classes.button}>Add Product</Button>
                        <Button onClick={goToEditProductPage} startIcon={<EditIcon />} className={classes.button}>Edit Product</Button>
                    </div>
                </Grid>
                <Grid item lg={9} md={9} xsm={12} xs={12}>
                <Container>
                        <Switch>
                            <Route exact path={path}>
                               <ManageProduct />
                            </Route>
                            <Route path={`${path}/addProducts`}>
                                <AddFood />
                            </Route>
                            <Route path={`${path}/manageProducts`}>
                                <ManageProduct />
                            </Route>
                            <Route path={`${path}/editProducts`}>
                               <EditPage />
                            </Route>
                        </Switch>
                    </Container>
                </Grid>
            </Grid>

           
        </div>
    );
};

export default Admin;