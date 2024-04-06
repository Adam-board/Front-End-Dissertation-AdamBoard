
//If making a comment inside of the React Fragment, use this {/* */}

//The main imports to ensure everything is treated as React 
import * as React from 'react';

//All objects related to this project From MUI
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid'; // Grid version 1

//Objects that handle the different tabs which exist
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


//All icons that are being imported for this project
import SaveIcon from '@mui/icons-material/Save'; //Save report
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'; //Load Report
import DescriptionIcon from '@mui/icons-material/Description'; //Set Template & Load Template
import FileDownloadIcon from '@mui/icons-material/FileDownload'; // Export Report
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; // Add Vulns
import DeleteIcon from '@mui/icons-material/Delete'; //Remove Button
import EditIcon from '@mui/icons-material/Edit'; //Edit Button
import ImportExportIcon from '@mui/icons-material/ImportExport'; //Import Export Button
import CoronavirusIcon from '@mui/icons-material/Coronavirus'; //Vuln Tab
import BookmarksIcon from '@mui/icons-material/Bookmarks'; //Bookmarks Tab


//Custom components imported to make everything neater
import CustButtonGroup from './Components/ButtonGroups' ;
import CustButton from './Components/CustButton';
import CustTabPanel from './Components/TabPanel';
import CustToolBarButtons from './Components/CustToolBarButtons';
import CustToolBar from './Components/CustToolBar';
import CustTabs from './Components/CustTabs';

//Contains all imports for Draft.Js
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';


//This section contains all the tool tips to understand what each button and tab does

//Report Options Button Descriptions
const NewReport = `Begin a new report with the default template of section headings displayed automatically and ready to edit. 
                  Saving a new default report template will overrite the one that is currently written in when a new report is started. 
                  If you have unsaved changes these will not be saved so be careful as you could lose a lot of work!`

const LoadReport = `Load a previously worked on report to continue from when it was last saved.`
const SaveReport = `Save all the hard work put into the report. Make sure to save regularly!`
const LoadReportTemplate = `Load a template of headings that have been created and saved previously.`
const SaveReportTemplate = `Save your current template so it can be loaded again for later use!`
const SaveDefaultTemplate = `Save your currrent template as the default template when "New Report" is pressed!`

//Vulnerability Options Button Descriptions
const RemoveVulnFromDatabank = `Remove a vulnerability from the databank.`
const ImportVulnDatabank = `Import a list of already created vulnerability descriptions and severity ratings from one server to another server!`
const InsertVulnFromDatabank = `Add a vulnerability to the report directly from the databank to speed up the process!`
const LoadVulnDatabank = `Load a previously written databank that is contained within storage of the server.`
const SaveVulnDatabank = `Save the currently working vulnerability databank onto the server's storage to be used at a later date.`

//Audit Options Button Descriptions
const ImportAuditLog = `Import the audit log of another report into the report currently being worked on.`

//Buttons in Toolbar
const ExportVulnToJira = `Export all of the vulnerabilities into a list of tickets that work inside of a Jira board, this can then be imported into other organisation's Jira boards. Each ticket is categorised by its severity raiting. `
const ExportReport = `Export all of the sections and vulnerabilities into a PDF that can be reviewed and downloaded by the user. The report will use a default styling for when the report is exported, this will be changed in future!`


//TODO implement functionality into buttons based on their respective keys
const ButtonsReport = [
<CustButton  startIcon={<DriveFolderUploadIcon />} tooltip={NewReport} arrowPlacement="right-start" >New Report</CustButton>,
<CustButton  startIcon={<DriveFolderUploadIcon />} tooltip={LoadReport} arrowPlacement="right" >Load Report</CustButton>,
<CustButton  startIcon={<SaveIcon/>} tooltip={SaveReport} arrowPlacement="right" >Save Report</CustButton>,
<CustButton  startIcon={<DriveFolderUploadIcon />} tooltip={LoadReportTemplate} arrowPlacement="right" >Load Report Template</CustButton>,
<CustButton  startIcon={<SaveIcon/>} tooltip={SaveReportTemplate} arrowPlacement="right-end" >Save Report Template</CustButton>,
<CustButton  startIcon={<DescriptionIcon/>} tooltip={SaveDefaultTemplate} arrowPlacement="right-start" >Set Default Report Template</CustButton>
];

const ButtonsVulnDatabank = [
<CustButton  startIcon={<AddCircleOutlineIcon />} tooltip={InsertVulnFromDatabank} arrowPlacement="right" >Insert Vulnerability From Databank</CustButton>,
<CustButton  startIcon={<DeleteIcon/>} tooltip={RemoveVulnFromDatabank} arrowPlacement="right" >Remove Vulnerability from Databank</CustButton>,
<CustButton  startIcon={<DriveFolderUploadIcon />} tooltip={LoadVulnDatabank} arrowPlacement="right" >Load Vulnerability Databank</CustButton>,
<CustButton  startIcon={<SaveIcon />} tooltip={SaveVulnDatabank} arrowPlacement="right" >Save Vulnerability Databank</CustButton>,
<CustButton  startIcon={<ImportExportIcon />} tooltip={ImportVulnDatabank} arrowPlacement="right" >Import Vulnerability Databank</CustButton>
];

const AuditLog = [<CustButton  startIcon={<ImportExportIcon />} tooltip={ImportAuditLog} arrowPlacement="right" >Import Audit Log</CustButton>,];


//<IconButton aria-label='delete' color='error' ><DeleteIcon /> </IconButton>


//Checkbox for Marking Stuff
//const ComplianceFlag = { inputProps: { 'aria-label': 'Checkbox demo' } };

//TODO Implement all objects required to finish UI in design phase
function App() {
  
  const [value, setValue] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <CustToolBar>
      <CustToolBarButtons arrowPlacement='bottom-end' tooltip={ExportVulnToJira}>Export Vulnerabilities To Jira</CustToolBarButtons>
      <CustToolBarButtons arrowPlacement='bottom-start' tooltip={ExportReport}>Export Report (Word) </CustToolBarButtons>
      </CustToolBar>
      <CustTabs onChange={handleChange} value={value}></CustTabs>


<Grid container>

     
<Box sx={{display: 'inline-flex', flexDirection: 'row', alignContent: 'stretch' , justifyContent: 'flex-start', flexWrap: 'nowrap', width: '100%'}}>

{/* This section of code handles the buttons displayed on the left sidebar */}

  <Grid item>
  <CustButtonGroup Num={0} value={value} group={ButtonsReport}>Report Options</CustButtonGroup>
  <CustButtonGroup Num={1} value={value} group={ButtonsVulnDatabank}>Vulnerability Options</CustButtonGroup>
  <CustButtonGroup Num={2} value={value} group={AuditLog}>Audit Options</CustButtonGroup>
</Grid>


        
     <Box sx={{bgcolor: '#e6e6e6', border:1, width: '84%', height: '100%', marginLeft: 1}}>

     <CustTabPanel value={value} index={0}>

     <Grid container
         margin={1}
         direction={'column'}
         marginLeft={"40%"}>
    

    <Grid item>
     <Box
        component='form'
        sx={{  '& > :not(style)': { m: 1, width: '50' },}}
        noValidate
        autoComplete="off"
        alignContent="center">

        <TextField id="Heading" label="Heading" variant='outlined' />
        
        <Fab color="primary" aria-label="add" marginLeft={"40%"} Type="submit">
        <AddCircleOutlineIcon />
      </Fab>

        </Box>

        </Grid>
       
      </Grid>     

      

      </CustTabPanel>
      


      <CustTabPanel value={value} index={1}>

      <Grid container
         margin={1}
         direction={'column'}
         marginLeft={"40%"}>
    

    <Grid item>
     <Box
        component='form'
        sx={{  '& > :not(style)': { m: 1, width: '50' },}}
        noValidate
        autoComplete="off"
        alignContent="center">

        <TextField id="Vulnerability" label="Vulnerability" variant='outlined' />
        
        

        </Box>

        </Grid>
        <Grid item marginLeft={"5%"}>
        <Fab color="primary" aria-label="add" marginLeft={"40%"}>
        <AddCircleOutlineIcon />
      </Fab>
      </Grid>     

      </Grid>
      </CustTabPanel>
     
     <CustTabPanel value={value} index={2}>


     <Grid container
         margin={1}
         direction={'column'}
         marginLeft={"40%"}>
    

    <Grid item>
     <Box
        component='form'
        sx={{  '& > :not(style)': { m: 1, width: '50' },}}
        noValidate
        autoComplete="off"
        alignContent="center">

        <TextField id="AuditEntry" label="Audit Entry" variant='outlined' />

        
        
        

        </Box>

        </Grid>
        <Grid item marginLeft={"5%"}>
        <Fab color="primary" aria-label="add" marginLeft={"40%"}>
        <AddCircleOutlineIcon />
      </Fab>
      </Grid>     

      </Grid>
      </CustTabPanel>

      </Box>
        </Box>
          </Grid>
          


          
        </React.Fragment>

  );
}

export default App 