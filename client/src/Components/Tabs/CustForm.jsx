import { Grid, Input, TextField, Button } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";

export default function CustForm(props) {
    const { heading, headingTitle, description, descriptionTitle, endpoint, refreshCustTabPanel } = props;
    const { register, handleSubmit, reset, formState: { errors } } = useForm(); // Destructure the errors object

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
            reset();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <Grid container direction={'column'}>
            <form
                noValidate
                autoComplete='off'
                onSubmit={handleSubmit(onSubmit)}>
                <Grid item md={10}>
                    {/* Add the required attribute for HTML5 validation */}
                    <Input {...register(heading, { required: true })} placeholder={headingTitle} sx={{ Input: { fontWeight: 'bold' } }} margin="normal" />
                    {errors.heading && <span>This field is required</span>} {/* Display error message if field is empty */}
                </Grid>

                <Grid item md={5}>
                    {/* Add the required attribute for HTML5 validation */}
                    <TextField {...register(description, { required: true })} placeholder={descriptionTitle} multiline fullWidth variant='outlined' sx={{ bgcolor: 'white' }} margin="normal" />
                    {errors.description && <span>This field is required</span>} {/* Display error message if field is empty */}
                </Grid>
                <Grid item>
                    <Button type='submit' variant='contained'>Add New</Button>
                </Grid>
            </form>
        </Grid>
    )
}
