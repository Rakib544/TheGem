import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import deliveryImage from '../../images/adult-blur-blurred-background-687824.png';
import chefImage from '../../images/chef-cook-food-33614.png';
import homeDeliveryImage from '../../images/architecture-building-city-2047397.png';

const useStyles = makeStyles(theme => ({
    container: {
        padding: '70px 50px'
    },
    card: {
        boxShadow: '0 0 0 0',
        cursor: 'pointer',
        "&:hover" : {
            boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
        }
    },
    title: {
        margin: '20px 0'
    },
    subtitle: {
        padding: '0 0 20px 0'
    }
}))

const AboutUs = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Typography variant="h4" className={classes.title}>Why you choose us</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
                Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Iste, quis. Ea aut itaque hic odio optio sed deleniti ab eos.
            </Typography>
            <Grid container spacing={3}>
                <Grid item lg={4}>
                    <Card className={classes.card}>
                        <CardActions>
                            <CardMedia>
                                <img src={deliveryImage} alt="ra" style={{ width: '100%', display: 'block', height: '300px' }} />
                            </CardMedia>
                        </CardActions>
                        <div>
                            <CardContent>
                                <Grid container>
                                    <Grid item lg={2}>
                                        <IconButton style={{backgroundColor: 'red', color: '#fff'}}><DriveEtaIcon /></IconButton>
                                    </Grid>
                                    <Grid item lg={10}>
                                        <Typography variant="h5">Fast Delivery</Typography>
                                        <Typography variant="subtitle2">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ad.
                                        </Typography>
                                        <Button endIcon={<ArrowRightAltIcon />}>See more</Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </div>
                    </Card>
                </Grid>
                <Grid item lg={4}>
                    <Card className={classes.card}>
                        <CardActions>
                            <CardMedia>
                                <img src={chefImage} alt="ra" style={{ width: '100%', display: 'block', height: '350px' }} />
                            </CardMedia>
                        </CardActions>
                        <div>
                            <CardContent>
                                <Grid container>
                                    <Grid item lg={2}>
                                        <IconButton style={{backgroundColor: 'red', color: '#fff'}}><NotificationsIcon /></IconButton>
                                    </Grid>
                                    <Grid item lg={10}>
                                        <Typography variant="h5">A Good Auto Responder</Typography>
                                        <Typography variant="subtitle2">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ad.
                                        </Typography>
                                        <Button endIcon={<ArrowRightAltIcon />}>See more</Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </div>
                    </Card>
                </Grid>
                <Grid item lg={4}>
                    <Card className={classes.card}>
                        <CardActions>
                            <CardMedia>
                                <img src={homeDeliveryImage} alt="ra" style={{ width: '100%', display: 'block', height: '300px' }} />
                            </CardMedia>
                        </CardActions>
                        <div>
                            <CardContent>
                                <Grid container>
                                    <Grid item lg={2}>
                                        <IconButton style={{backgroundColor: 'red', color: '#fff'}}><LocalShippingIcon /></IconButton>
                                    </Grid>
                                    <Grid item lg={10}>
                                        <Typography variant="h5">Home Delivery</Typography>
                                        <Typography variant="subtitle2">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ad.
                                        </Typography>
                                        <Button endIcon={<ArrowRightAltIcon />}>See more</Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutUs;