import CustRenderEditor from '../Components/Editor/RenderEditor';


import { Grid, Typography, IconButton, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'; //Edit Button
import React from 'react';

export default function EditorPage(props) {
const {} = props

return(


<Grid item xs={10}
    sx={{bgcolor: '#e6e6e6', border:1, margin: 2, marginTop: 5, padding: 3}}>



    <Grid container direction={'row'}>
        <Typography variant="h4" sx={{textDecoration: 'underline', fontWeight: "bold"}}>Executive Summary</Typography> 
        {/* <IconButton color='info' ><EditIcon /></IconButton> */}
    </Grid>
        <Typography variant="h5">This section provides a brief overview of the entire report's findings from the penetration test. The language in this section should be aimed towards non-technical users </Typography> 
    
       <CustRenderEditor />

       <Grid container xs={12} justifyContent={'flex-end'}>
        <Button onClick={null} variant='contained'>Save</Button>
        <Button onClick={null} variant='contained' color="error">Cancel</Button>
        </Grid>
    </Grid>


)



}