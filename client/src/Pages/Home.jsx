import Grid from '@mui/material/Grid'; // Grid version 1
import React from 'react'
//Components related to the Tabs
import CustTabPanel from '../Components/Tabs/TabPanel';
import CustForm from '../Components/Tabs/CustForm';
//Components related to the Editor Page
import CustSection from '../Components/Editor/Section';




export default function HomePage(props) {
const {value} = props


const [listHeadings, setHeadings] = React.useState([]);
const [vulns, setVulns] = React.useState([]);
const [notes, setNotes] = React.useState([]);




    return(
    
        <Grid item xs={10}>
        <CustTabPanel value={value} index={0} componentPass={listHeadings}>
           <CustForm heading='Heading' headingTitle="Enter Section Heading" description="SectionDescription" descriptionTitle="Enter brief description of what this section is about." /> 

           
        </CustTabPanel>

        <CustTabPanel value={value} index={1} componentPass={vulns}> 
            <CustForm heading='Vuln' headingTitle="Enter Vulnerability Name" description="VulnDescription" descriptionTitle="Enter brief description of the vulnerability/Security concern." /> 
            
            </CustTabPanel>

        <CustTabPanel value={value} index={2} componentPass={notes}> 
            <CustForm heading='Note' headingTitle="Enter Note Title" description="NoteDescription" descriptionTitle="Enter brief description of what is of note in the current penetration test." /> 
            
        </CustTabPanel>
      </Grid>
    
    
    
    
    )
    
    
    
    }