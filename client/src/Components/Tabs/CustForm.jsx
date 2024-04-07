import DeleteIcon from '@mui/icons-material/Delete'; //Remove Button
import EditIcon from '@mui/icons-material/Edit'; //Edit Button
import { Grid, IconButton } from '@mui/material';

import {useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form"

export default function CustForm(props) {
    const {} = props

    return(
    <Grid container>



        <IconButton color='error' ><DeleteIcon /> </IconButton>
        <IconButton color='info' ><EditIcon /></IconButton>
    </Grid> 
    )



}