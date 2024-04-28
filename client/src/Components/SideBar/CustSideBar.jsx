import { Grid } from "@mui/material"
import CustButtonGroup from "./ButtonGroups"
import * as Side from './DataButtonGroups'

{/* This section of code handles the buttons displayed on the left sidebar */}

export default function CustSideBar(props) {

const {value} = props


    return(

        <Grid container spacing={4}
      sx={{flexGrow: 1}}>
        <Grid item xs>
        <CustButtonGroup group={Side.ButtonsReport}>Report Options</CustButtonGroup>
        <CustButtonGroup Num={1} value={value} group={Side.ButtonsVulnDatabank}>Vulnerability Options</CustButtonGroup>
        </Grid>


           {props.children} 


        </Grid>
    )
}