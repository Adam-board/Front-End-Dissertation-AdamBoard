//The main imports to ensure everything is treated as React 
import * as React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

//Custom components imported to make everything neater
//Components related to the ToolBar
import CustToolBarButtons from './Components/ToolBar/CustToolBarButtons';
import CustToolBar from './Components/ToolBar/CustToolBar';
//Components related to the SideBar
import CustButtonGroup from './Components/SideBar/ButtonGroups';
//Components related to the Tabs
import CustTabPanel from './Components/Tabs/TabPanel';
import CustTabs from './Components/Tabs/CustTabs';
import CustForm from './Components/Tabs/CustForm';
import CustAutoComplete from './Components/SideBar/AutoComplete';
//Components related to the Editor Page
import CustSection from './Components/Editor/Section';
//Import all buttons used on sidebar
import * as Side from './Components/SideBar/DataButtonGroups'
//Import of all ToolTip Descriptions
import * as Desc from './Language/ToolTipDesc'

function App() {  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {setValue(newValue);};

  return(
  <React.Fragment>
      <CustToolBar Heading ="Report Writing Tool">
        <CustToolBarButtons arrowPlacement='bottom-end' tooltip={Desc.ExportVulnToJira}>Export Vulnerabilities To Jira</CustToolBarButtons>
        <CustToolBarButtons arrowPlacement='bottom-start' tooltip={Desc.ExportReport}>Export Report (Word) </CustToolBarButtons>
      </CustToolBar>
      <CustTabs onChange={handleChange} value={value} />

    <Grid container spacing={4}
      sx={{ 
        flexGrow: 1}}>

{/* This section of code handles the buttons displayed on the left sidebar */}
      <Grid item xs>
        <CustButtonGroup Num={0} value={value} group={Side.ButtonsReport}>Report Options</CustButtonGroup>
        <CustButtonGroup Num={1} value={value} group={Side.ButtonsVulnDatabank}>Vulnerability Options</CustButtonGroup>
        <CustButtonGroup Num={2} value={value} group={Side.AuditLog}>Audit Options</CustButtonGroup>
      </Grid>

{/* This section of code handles the tabs that appear for creating new headings! */}
      <Grid item xs={10}>
        <CustTabPanel value={value} index={0}>
           <CustForm heading='Heading' headingTitle="Enter Section Heading" description="SectionDescription" descriptionTitle="Enter brief description of what this section is about" /> 

           <CustSection >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</CustSection> 
           <CustSection />
           <CustSection />
        </CustTabPanel>

        <CustTabPanel value={value} index={1}> 
            <CustForm heading='Vuln' headingTitle="Enter Vulnerability Name" description="VulnDescription" descriptionTitle="Enter brief description of the vulnerability/Security concern" /> 

        </CustTabPanel>

        <CustTabPanel value={value} index={2}> 
            <CustForm heading='Audit' headingTitle="Enter Audit Log" description="AuditDescription" descriptionTitle="Enter brief description of what this audit log contains" /> 

        </CustTabPanel>
      </Grid>
    </Grid>        
  </React.Fragment>
  );}
export default App 