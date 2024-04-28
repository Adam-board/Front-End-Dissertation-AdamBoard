
import { Grid, Input, TextField, Button} from '@mui/material';

import React from 'react';
import { useForm, SubmitHandler, Form } from "react-hook-form"

export default function CustForm(props) {
    const {heading, headingTitle, description, descriptionTitle} = props
    const {register, handleSubmit, formState: {errors}} =useForm({defaultValues: ""});

    console.log(errors)
    
    const [sectionList, setSectionList] = React.useState([])

    return(
    <Grid container
    direction={'column'}
    >
        <form noValidate autoComplete='off'
         onSubmit={handleSubmit((data) => {
            console.log(data) 
         })}>
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