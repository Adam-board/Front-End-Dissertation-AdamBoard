import CvssV3 from 'cvss-v3.1-react'
import {Typography, Grid} from '@mui/material'

export default function CVSSCalculator() {


const severityVector = "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:N/A:L";

return(
<Grid item>
<Typography variant="h5" sx={{textDecoration: 'underline', fontWeight: "bold"}}> CVSS v3.1 Calculator</Typography>
{/* pass the variable data.severityRating.name to the backend to update the severity based on the rating rather than manually choosing the rating */}
<CvssV3 severityVector={severityVector} onChange={(data)=>{console.log('data-----------', data);}}/>



</Grid>
)
}