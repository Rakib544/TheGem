import { Box, Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
const useStyles = makeStyles(theme => ({
    input: {
        width: '100%',
        marginTop: '15px',
    },
    grid: {
        display: 'block',
        margin: '50px auto',
    },
    button: {
        marginTop: '15px',
        backgroundColor: '#263238',
        color: '#fff',
        "&:hover": {
            backgroundColor: "#263238"
        }
    },
    uploadFile: {
        display: 'none',
    },
    typography: {
        marginTop: '10px'
    },
    uploadButton: {
        backgroundColor: '#263238',
        color: '#fff',
        "&:hover": {
            backgroundColor: "#263238"
        }
    }
}))

const AddFood = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const { register, handleSubmit, control } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const handleImageUpload = e => {
        const imageData = new FormData();
        imageData.set('key', 'd17139582dad6f2a6f60bbc19e0dbd5e');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => setImageURL(res.data.data.display_url))
            .catch(err => console.log(err))
    }
    const onSubmit = data => {
        let productData = { imageURL, ...data }
        fetch('https://morning-lake-88471.herokuapp.com/addFood', {
            method: "POST",
            headers: { "Content-type": 'application/json' },
            body: JSON.stringify(productData)
        })
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container lg={8} className={classes.grid}>
                    <Paper component={Box} p={4}>
                        <Typography
                            variant="h6"
                            color="textPrimary"
                        >
                            Add Food
                        </Typography>
                        <TextField
                            variant="outlined"
                            label="Name"
                            className={classes.input}
                            name="name"
                            inputRef={register}
                        />
                        <Typography
                            variant="subtitle1"
                            className={classes.typography}
                        >
                            Upload Food Image
                        </Typography>
                        <input
                            accept="image/*"
                            className={classes.uploadFile}
                            id="contained-button-file"
                            multiple
                            type="file"
                            onChange={handleImageUpload}
                        />
                        <label htmlFor="contained-button-file">
                            <Button
                                startIcon={<CloudUploadIcon />}
                                variant="contained"
                                className={classes.uploadButton}
                                component="span"
                            >
                                Upload
                            </Button>
                        </label>
                        <TextField
                            variant="outlined"
                            label="Price"
                            className={classes.input}
                            name="price"
                            inputRef={register}
                        />
                        <FormControl className={classes.input}>
                            <InputLabel>Food Type</InputLabel>
                            <Controller
                                as={
                                    <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={open}
                                        onClose={handleClose}
                                        onOpen={handleOpen}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="breakfast">Breakfast</MenuItem>
                                        <MenuItem value="lunch">Lunch</MenuItem>
                                        <MenuItem value="dinner">Dinner</MenuItem>
                                    </Select>
                                }
                                name="foodType"
                                control={control}
                                defaultValue=""
                            ></Controller>
                        </FormControl>
                        <TextField
                            variant="outlined"
                            label="Description"
                            className={classes.input}
                            name="description"
                            inputRef={register}
                        />
                        <Button
                            variant="outlined"
                            className={classes.button}
                            type="submit"
                            disabled={imageURL === null}
                        >
                            Save
                        </Button>
                    </Paper>
                </Grid>
            </form>
        </div>
    );
};

export default AddFood;