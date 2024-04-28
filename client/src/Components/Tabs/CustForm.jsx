
import { Grid, Input, TextField, Button} from '@mui/material';

import React from 'react';
import { useForm} from "react-hook-form"

export default function CustForm(props) {
    const {heading, headingTitle, description, descriptionTitle, endpoint, refreshCustTabPanel} = props
    const {register, handleSubmit, reset} =useForm();

    const onSubmit = async (formData) => {
        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data); // Log the response from the backend
            refreshCustTabPanel();
            reset()
        } catch (error) {
            console.error("Error:", error);
        }
    };


    return(
    <Grid container
    direction={'column'}
    >
        <form 
            noValidate 
            autoComplete='off'
            onSubmit={handleSubmit(onSubmit)}>
                <Grid item md={10}>
                    <Input {...register(heading)} placeholder={headingTitle} sx={{Input : {fontWeight: 'bold'}}} margin="normal"  />
                
                </Grid>

                <Grid item md={5}>
                    <TextField {...register(description)} placeholder={descriptionTitle} multiline fullWidth variant='outlined' sx={{bgcolor: 'white'}} margin="normal"/>
                
                </Grid>
                <Grid item>
                    <Button type='submit' variant='contained'> Add New</Button>
                </Grid>
        </form>


    </Grid> 
    )
}