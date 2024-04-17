import CvssV3 from 'cvss-v3.1-react'
import {Typography, Grid} from '@mui/material'

export default function CVSSCalculator() {


const severityVector = "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:N/A:L";

return(

<Grid item>
<Typography variant="h5" sx={{textDecoration: 'underline', fontWeight: "bold"}}> CVSS v3.1 Calculator</Typography>


<CvssV3 severityVector={severityVector} onChange={(data)=>{console.log('data-----------', data);}}/>

</Grid>
)
}