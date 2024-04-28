import CustRenderEditor from '../Components/Editor/RenderEditor';
import CustSeveritySelect from '../Components/Editor/CustSeveritySelect';
import CVSSCalculator from '../Components/Editor/CVSSCalculator';
import { Grid, Typography, IconButton, Button, Checkbox} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'; //Edit Button
import React from 'react';






export default function EditorPageVuln(props) {
    const {VulnName,Severity, Description, Data} = props;

return(

<Grid item xs={10}
    sx={{bgcolor: '#e6e6e6', border:1, margin: 2, marginTop: 5, padding: 3}}>



    <Grid container direction={'row'}>
        <Typography variant="h4" sx={{textDecoration: 'underline', fontWeight: "bold"}}>{VulnName}</Typography> 
        <IconButton color='info' ><EditIcon /></IconButton>
    </Grid>
        <Typography variant="h5">{Description}</Typography> 
      
    <Grid item>
        <CustSeveritySelect Severity={Severity}/>
    </Grid>

        <CustRenderEditor Data={Data}/>

       <Grid container xs={12} justifyContent={'flex-end'}>
        <Button onClick={null} variant='contained'>Save</Button>
        <Button onClick={null} variant='contained' color="error">Cancel</Button>
        </Grid>

    <CVSSCalculator />
        
    </Grid>




)

}