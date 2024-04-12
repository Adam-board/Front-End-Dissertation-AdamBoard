//The main imports to ensure everything is treated as React 
import * as React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

//Custom components imported to make everything neater
import HomePage from './Pages/Home';
import Render404 from './Pages/Render404';
import EditorPageVuln from './Pages/EditorPageVuln';
import EditorPageAudit from './Pages/EditorPageAudit';
import EditorPage from './Pages/EditorPage';
//Components related to the ToolBar
import CustToolBarButtons from './Components/ToolBar/CustToolBarButtons';
import CustToolBar from './Components/ToolBar/CustToolBar';
//Components related to the SideBar
import CustButtonGroup from './Components/SideBar/ButtonGroups';
//Components related to the Tabs
import CustTabs from './Components/Tabs/CustTabs';
//Components related to the Editor Page

//Import all buttons used on sidebar
import * as Side from './Components/SideBar/DataButtonGroups'
//Import of all ToolTip Descriptions
import * as Desc from './Language/ToolTipDesc'


//TODO Add EventHandlers that handle adding new sections
//TODO Add EventHandler that allows the title to be edited
//TODO Add Link to CVSS calculator
//TODO Add Method of adding new audit log fields



function App() {  
  const [value, setValue] = React.useState(0);

  const [listHeadings, setHeadings] = React.useState([]);
  const [Vulns, setVulns] = React.useState([]);
  const [audit, setAudit] = React.useState([]);

  const handleChange = (event, newValue) => {setValue(newValue);};

  return(
  <React.Fragment>
<BrowserRouter>
      <CustToolBar Heading ={<Link style={{ textDecoration: 'none', color:"white" }} to="/">Report Writing Tool</Link>}>
        <CustToolBarButtons onClick={null} arrowPlacement='bottom-end' tooltip={Desc.ExportVulnToJira}>Export Vulnerabilities To Jira</CustToolBarButtons>
        <CustToolBarButtons onClick={null} arrowPlacement='bottom-start' tooltip={Desc.ExportReport}>Export Report (Word) </CustToolBarButtons>
      </CustToolBar>
      <CustTabs onChange={handleChange} value={value}/>

    <Grid container spacing={4}
      sx={{flexGrow: 1}}>

{/* This section of code handles the buttons displayed on the left sidebar */}
      <Grid item xs>
        <CustButtonGroup Num={0} value={value} group={Side.ButtonsReport}>Report Options</CustButtonGroup>
        <CustButtonGroup Num={1} value={value} group={Side.ButtonsVulnDatabank}>Vulnerability Options</CustButtonGroup>
        <CustButtonGroup Num={2} value={value} group={Side.AuditLog}>Audit Options</CustButtonGroup>
      </Grid>

{/* This section of code handles the tabs that appear for creating new headings! */} 
      <Routes>
        
        <Route path="/" element={<HomePage value={value}/>} />
        <Route path="/Headingedit" element={<EditorPage />} />
        <Route path="/VulnEdit"  element={<EditorPageVuln />}/>
        <Route path="/AuditEdit" element={<EditorPageAudit />} />
        <Route path="*" element={<Render404 />} />
        
      </Routes>
    </Grid>
     </BrowserRouter>     
  </React.Fragment>
  );}
export default App 