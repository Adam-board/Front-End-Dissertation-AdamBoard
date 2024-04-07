//The main imports to ensure everything is treated as React 
import * as React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1

//All icons that are being imported for this project
import SaveIcon from '@mui/icons-material/Save'; //Save report
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'; //Load Report
import DescriptionIcon from '@mui/icons-material/Description'; //Set Template & Load Template
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; // Add Vulns
import DeleteIcon from '@mui/icons-material/Delete'; //Remove Button
import ImportExportIcon from '@mui/icons-material/ImportExport'; //Import Export Button

//Custom components imported to make everything neater
import CustButtonGroup from './Components/SideBar/ButtonGroups';
import CustButton from './Components/SideBar/CustButton';
import CustTabPanel from './Components/Tabs/TabPanel';
import CustToolBarButtons from './Components/ToolBar/CustToolBarButtons';
import CustToolBar from './Components/ToolBar/CustToolBar';
import CustTabs from './Components/Tabs/CustTabs';
import CustForm from './Components/Tabs/CustForm';

//Contains all imports for Draft.Js
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';


//Import of all ToolTip Descriptions
import * as Desc from './Language/ToolTipDesc'

//TODO implement functionality into buttons based on their respective keys
const ButtonsReport = [
<CustButton  startIcon={<DriveFolderUploadIcon />} tooltip={Desc.NewReport} arrowPlacement="right-start" >New Report</CustButton>,
<CustButton  startIcon={<DriveFolderUploadIcon />} tooltip={Desc.LoadReport} arrowPlacement="right" >Load Report</CustButton>,
<CustButton  startIcon={<SaveIcon/>} tooltip={Desc.SaveReport} arrowPlacement="right" >Save Report</CustButton>,
<CustButton  startIcon={<DriveFolderUploadIcon />} tooltip={Desc.LoadReportTemplate} arrowPlacement="right" >Load Report Template</CustButton>,
<CustButton  startIcon={<SaveIcon/>} tooltip={Desc.SaveReportTemplate} arrowPlacement="right-end" >Save Report Template</CustButton>,
<CustButton  startIcon={<DescriptionIcon/>} tooltip={Desc.SaveDefaultTemplate} arrowPlacement="right-start" >Set Default Report Template</CustButton>
];

const ButtonsVulnDatabank = [
<CustButton  startIcon={<AddCircleOutlineIcon />} tooltip={Desc.InsertVulnFromDatabank} arrowPlacement="right" >Insert Vulnerability From Databank</CustButton>,
<CustButton  startIcon={<DeleteIcon/>} tooltip={Desc.RemoveVulnFromDatabank} arrowPlacement="right" >Remove Vulnerability from Databank</CustButton>,
<CustButton  startIcon={<DriveFolderUploadIcon />} tooltip={Desc.LoadVulnDatabank} arrowPlacement="right" >Load Vulnerability Databank</CustButton>,
<CustButton  startIcon={<SaveIcon />} tooltip={Desc.SaveVulnDatabank} arrowPlacement="right" >Save Vulnerability Databank</CustButton>,
<CustButton  startIcon={<ImportExportIcon />} tooltip={Desc.ImportVulnDatabank} arrowPlacement="right" >Import Vulnerability Databank</CustButton>
];

const AuditLog = [<CustButton  startIcon={<ImportExportIcon />} tooltip={Desc.ImportAuditLog} arrowPlacement="right" >Import Audit Log</CustButton>,];




function App() {  
  const [value, setValue] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);};

  return(
  <React.Fragment>
      <CustToolBar>
        <CustToolBarButtons arrowPlacement='bottom-end' tooltip={Desc.ExportVulnToJira}>Export Vulnerabilities To Jira</CustToolBarButtons>
        <CustToolBarButtons arrowPlacement='bottom-start' tooltip={Desc.ExportReport}>Export Report (Word) </CustToolBarButtons>
      </CustToolBar>
      <CustTabs onChange={handleChange} value={value}></CustTabs>

    <Grid container spacing={4}
      sx={{ 
        flexGrow: 1}}>

{/* This section of code handles the buttons displayed on the left sidebar */}

      <Grid item xs>
        <CustButtonGroup Num={0} value={value} group={ButtonsReport}>Report Options</CustButtonGroup>
        <CustButtonGroup Num={1} value={value} group={ButtonsVulnDatabank}>Vulnerability Options</CustButtonGroup>
        <CustButtonGroup Num={2} value={value} group={AuditLog}>Audit Options</CustButtonGroup>
      </Grid>

{/* This section of code handles the tabs that appear for creating new headings! */}

      <Grid item xs={10}>
        <CustTabPanel value={value} index={0}> <CustForm />  </CustTabPanel>
        <CustTabPanel value={value} index={1}> <CustForm /> </CustTabPanel>
        <CustTabPanel value={value} index={2}> <CustForm /> </CustTabPanel>
      </Grid>

    </Grid>        
  </React.Fragment>
  );}
export default App 