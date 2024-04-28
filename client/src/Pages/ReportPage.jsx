import Grid from '@mui/material/Grid'; // Grid version 1
import React from 'react'
//Components related to the Tabs
import CustTabPanel from '../Components/Tabs/TabPanel';
import CustForm from '../Components/Tabs/CustForm';
//Components related to the Editor Page
import {useParams} from "react-router-dom";
import CustSection from '../Components/Editor/Section';
import CustSectionVuln from '../Components/Editor/SectionVuln';

export default function ReportPage(props) {
const {value} = props

const {ReportID} = useParams();

    return(
    
        <Grid item xs={10}>
        <CustTabPanel value={value} index={0} endpoint={`/api/report/${ReportID}/sections`} topLevelEl="sections" ComponentPass={CustSection}>
           <CustForm heading='Heading' headingTitle="Enter Section Heading" description="SectionDescription" descriptionTitle="Enter brief description of what this section is about." /> 

        </CustTabPanel>

        <CustTabPanel value={value} index={1} endpoint={`/api/report/${ReportID}/vulns`} topLevelEl="vulns" ComponentPass={CustSectionVuln}> 
            <CustForm heading='Vuln' headingTitle="Enter Vulnerability Name" description="VulnDescription" descriptionTitle="Enter brief description of the vulnerability/Security concern." /> 
            
            </CustTabPanel>

        <CustTabPanel value={value} index={2} endpoint={`/api/report/${ReportID}/notes`}topLevelEl="notes" ComponentPass={CustSection}> 
            <CustForm heading='Note' headingTitle="Enter Note Title" description="NoteDescription" descriptionTitle="Enter brief description of what is of note in the current penetration test." /> 
            
        </CustTabPanel>
      </Grid>
    
    
    
    
    )
    
    
    
    }