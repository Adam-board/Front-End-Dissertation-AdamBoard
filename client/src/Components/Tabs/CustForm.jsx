
import { Grid, Input, TextField, Button} from '@mui/material';


import {useState} from "react"; 
import { useForm, SubmitHandler } from "react-hook-form"

export default function CustForm(props) {
    const {heading, headingTitle, description, descriptionTitle} = props
    const {register, handleSubmit, formState: {errors}} =useForm({defaultValues: ""});

    console.log(errors)
    

    return(
    <Grid container
    direction={'column'}
    >
        <form noValidate autoComplete='off'
         onSubmit={handleSubmit((data) => {
            console.log(data)
         })}>
            <Grid item md={10}>
            <Input {...register(heading, {required: "A heading is required!"})} placeholder={headingTitle} helperText={errors.heading?.message}  margin="normal"  />
            
            </Grid>

            <Grid item md={5}>
            <TextField {...register(description, {required: "A description is required!"})} placeholder={descriptionTitle} multiline fullWidth variant='outlined' margin="normal"
             helperText={errors.description?.message}/>
            
            </Grid>
            <Grid item>
            <Button type='submit' variant='contained' > Add New</Button>
            </Grid>
        </form>


    </Grid> 
    )



}