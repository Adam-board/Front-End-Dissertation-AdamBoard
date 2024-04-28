import Grid from '@mui/material/Grid'; // Grid version 1
import {React, useState} from 'react'
//Components related to the Tabs
import CustTabPanel from '../Components/Tabs/TabPanel';
import CustForm from '../Components/Tabs/CustForm';
//Components related to the Editor Page
import {useParams} from "react-router-dom";
import CustSection from '../Components/Editor/Section';
import CustSectionVuln from '../Components/Editor/SectionVuln';
import CustSectionNote from '../Components/Editor/SectionNote';

export default function ReportPage(props) {
const {value} = props
const {ReportID} = useParams();

const [refreshCustTabPanel, setRefreshCustTabPanel] = useState(false);

const handleRefreshCustTabPanel = () => {
    setRefreshCustTabPanel(!refreshCustTabPanel); // Toggle the state to trigger a refresh
};

    return(
    
        <Grid item xs={10}>
        <CustTabPanel 
            value={value} 
            index={0} 
            endpoint={`/api/report/${ReportID}/sections`} 
            topLevelEl="sections" 
            ComponentPass={CustSection}
            refresh={refreshCustTabPanel}>
                <CustForm 
                    heading='Heading' 
                    headingTitle="Enter Section Heading" 
                    description="Description" 
                    descriptionTitle="Enter brief description of what this section is about." 
                    endpoint={`/api/report/${ReportID}/section/new`}
                    refreshCustTabPanel={handleRefreshCustTabPanel}/> 
        </CustTabPanel>

        <CustTabPanel 
        value={value} 
        index={1} 
        endpoint={`/api/report/${ReportID}/vulns`} 
        topLevelEl="vulns"
        ComponentPass={CustSectionVuln}
        refresh={refreshCustTabPanel}> 
                <CustForm 
                    heading='VulnName' 
                    headingTitle="Enter Vulnerability Name"
                    description="Description" 
                    descriptionTitle="Enter brief description of the vulnerability/Security concern."
                    endpoint={`/api/report/${ReportID}/vuln/new`} 
                    refreshCustTabPanel={handleRefreshCustTabPanel}/> 
        </CustTabPanel>

        <CustTabPanel 
            value={value} 
            index={2} 
            endpoint={`/api/report/${ReportID}/notes`}
            topLevelEl="notes" 
            ComponentPass={CustSectionNote} 
            refresh={refreshCustTabPanel}> 
                <CustForm 
                    heading='Heading'
                    headingTitle="Enter Note Title" 
                    description="Description" 
                    descriptionTitle="Enter brief description of what is of note in the current penetration test."
                    endpoint={`/api/report/${ReportID}/note/new`} 
                    refreshCustTabPanel={handleRefreshCustTabPanel}/> 
        </CustTabPanel>
      </Grid>
    ) 
    }