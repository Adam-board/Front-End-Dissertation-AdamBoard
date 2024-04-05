
//If making a comment inside of the React Fragment, use this {/* */}

//The main imports to ensure everything is treated as React 
import * as React from 'react';

//All objects related to this project From MUI
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
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
import SendIcon from '@mui/icons-material/Send'; //submit button
import EditIcon from '@mui/icons-material/Edit'; //Edit Button
import ImportExportIcon from '@mui/icons-material/ImportExport'; //Import Export Button
import CoronavirusIcon from '@mui/icons-material/Coronavirus'; //Vuln Tab
import BookmarksIcon from '@mui/icons-material/Bookmarks'; //Bookmarks Tab


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

//Section Options Button Descriptions
const AddSectionHeading = `Add a new section heading into the report. This includes main headings such as Executive summary or any subsections that may be wanted by the user!`
const RemoveSectionHeading = `Remove an existing section heading.`
const EditSectionHeading = `Edit the name of the heading as well as the type of heading (main-heading or sub-heading).`

//Vulnerability Options Button Descriptions
const AddVulnToReport = `Add a new vulnerability to the report, make sure to fill in the description, severity, steps to reproduce, and mitigation.`
const RemoveVulnFromReport = `Remove a vulnerability from a report.`
const RemoveVulnFromDatabank = `Remove a vulnerability from the databank.`
const ImportVulnDatabank = `Import a list of already created vulnerability descriptions and severity ratings from one server to another server!`
const AddVulnToDatabank = `Add a new vulnerability to the databank by filling in the required fields that pop-up.`
const InsertVulnFromDatabank = `Add a vulnerability to the report directly from the databank to speed up the process!`
const LoadVulnDatabank = `Load a previously written databank that is contained within storage of the server.`
const SaveVulnDatabank = `Save the currently working vulnerability databank onto the server's storage to be used at a later date.`

//Audit Options Button Descriptions
const AddAuditEntry = `Add an entry of the tool that was used to discover a specific vulnerability and link it to a vulnerability that is inside of the report currently.`
const RemoveAuditEntry = `Remove an audit entry.`
const EditAuditEntry = `Edit an audit entry.`
const ImportAuditLog = `Import the audit log of another report into the report currently being worked on.`

//Buttons in Toolbar
const ExportVulnToJira = `Export all of the vulnerabilities into a list of tickets that work inside of a Jira board, this can then be imported into other organisation's Jira boards. Each ticket is categorised by its severity raiting. `
const ExportReport = `Export all of the sections and vulnerabilities into a PDF that can be reviewed and downloaded by the user. The report will use a default styling for when the report is exported, this will be changed in future!`




//The buttongroups and all objects/variables related to buttons.
const ButtonWidth = 370

//TODO implement functionality into buttons based on their respective keys
const ButtonsReport = [
  <Tooltip title={NewReport} arrow placement='right-start'>
  <Button key="New Report" startIcon={<DriveFolderUploadIcon />}>New Report</Button>
  </Tooltip>,
  <Tooltip title={LoadReport} arrow placement='right'>
  <Button key="Load Report" startIcon={<DriveFolderUploadIcon />}>Load Report</Button> 
  </Tooltip>,
  <Tooltip title={SaveReport} arrow placement='right'>
  <Button key="Save Report" startIcon={<SaveIcon />} >Save Report</Button>
  </Tooltip>,
  <Tooltip title={LoadReportTemplate} arrow placement='right'>
  <Button key="Load Report Template" startIcon={<DriveFolderUploadIcon  />}>Load Report Template</Button>
  </Tooltip>,
  <Tooltip title={SaveReportTemplate} arrow placement='right'>
  <Button key="Save Report Template" startIcon={<SaveIcon />} >Save Report Template</Button>
  </Tooltip>,
  <Tooltip title={SaveDefaultTemplate} arrow placement='right-end'>
  <Button key="Set Default Report Template" startIcon={<DescriptionIcon />}>Set Default Report Template</Button> 
  </Tooltip>,
];


const SectionHeading = [
  <Tooltip title={AddSectionHeading} arrow placement='right'>
  <Button key="Add Heading" startIcon={<AddCircleOutlineIcon />}>Add Section Heading</Button>
  </Tooltip>,
  <Tooltip title={RemoveSectionHeading} arrow placement='right'>
  <Button key="Remove Heading" startIcon={<DeleteIcon />} >Remove Section Heading</Button>
  </Tooltip>,
  <Tooltip title={EditSectionHeading} arrow placement='right'>
  <Button key="Edit Heading" startIcon={<EditIcon />}>Edit Section Heading</Button>
  </Tooltip>,
];

const ButtonsVulnDatabank = [
  <Tooltip title={AddVulnToReport} arrow placement='right'>
  <Button key="Add Vulns To Report" startIcon={<AddCircleOutlineIcon />}>Add Vulnerability To Report</Button>
  </Tooltip>,
  <Tooltip title={RemoveVulnFromReport} arrow placement='right'>
  <Button key="Remove Vuln" startIcon={<DeleteIcon />}>Remove Vulnerability From Report</Button>
  </Tooltip>,
  <Tooltip title={AddVulnToDatabank} arrow placement='right'>
  <Button key="Add Vuln to Databank" startIcon={<AddCircleOutlineIcon />}>Add New Vulnerability To Databank</Button>
  </Tooltip>,
  <Tooltip title={InsertVulnFromDatabank} arrow placement='right'>
  <Button key="Insert Vulns From Databank" startIcon={<AddCircleOutlineIcon />}>Insert Vulnerability From Databank</Button>
  </Tooltip>,
  <Tooltip title={RemoveVulnFromDatabank} arrow placement='right'>
  <Button key="Remove Vuln From Databank" startIcon={<DeleteIcon />}>Remove Vulnerability From Databank</Button>
  </Tooltip>,
  <Tooltip title={LoadVulnDatabank} arrow placement='right'>
  <Button key="Load Vuln" startIcon={<DriveFolderUploadIcon />}>Load Vulnerability Databank</Button>
  </Tooltip>,
  <Tooltip title={SaveVulnDatabank} arrow placement='right'>
  <Button key="Save Vuln" startIcon={<SaveIcon />} >Save Vulnerability Databank</Button>
  </Tooltip>,
  
   <Tooltip title={ImportVulnDatabank} arrow placement='right'>
  <Button key="Load Vulns" startIcon={<ImportExportIcon  />}>Import Vulnerability Databank</Button>
  </Tooltip>,
];

const AuditLog = [
  <Tooltip title={AddAuditEntry} arrow placement='right'>
  <Button key="Add Audit" startIcon={<AddCircleOutlineIcon />}>Add Audit Entry</Button>
  </Tooltip>,
  <Tooltip title={RemoveAuditEntry} arrow placement='right'>
  <Button key="Remove Audit" startIcon={<DeleteIcon />}>Remove Audit Entry</Button>
  </Tooltip>,
  <Tooltip title={EditAuditEntry} arrow placement='right'>
  <Button key="Edit Audit" startIcon={<EditIcon />}>Edit Audit Entry</Button>
  </Tooltip>,
  <Tooltip title={ImportAuditLog} arrow placement='right'>
  <Button key="Import Audit" startIcon={<ImportExportIcon />}>Import Audit Log</Button>
  </Tooltip>,
];


//<IconButton aria-label='delete' color='error' ><DeleteIcon /> </IconButton>


//<Editor editorState={editorState} onChange={setEditorState}/>
        


//Checkbox for Marking Stuff
//const ComplianceFlag = { inputProps: { 'aria-label': 'Checkbox demo' } };

//This handles the tabs which will appear for each section
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      color='primary'
    >
      {value === index && (
        <Box sx={{ p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



//TODO Implement all objects required to finish UI in design phase
//TODO Plan out where the layout will go and how it will look
function App() {


 // Creates a new editor instance of DraftJS. (Use for each section that is added into the report to allow as much customisability as possible!)
 //const [editorState, setEditorState] = React.useState(
  //() => EditorState.createEmpty(), );
 

  const [value, setValue] = React.useState(0);

  //These will create a new entry everytime it is created through clicking the appropriate button (e.g. Add Section Heading will open a popup, fill out details and press save, it will then display and can be written to)
  const [HeadingEntry, setHeadingEntry] = React.useState('');
  const [VulnEntry, setVulnEntry] = React.useState('');
  const [AuditEntry, setAuditEntry] = React.useState('');


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <React.Fragment>
    <Box marginBottom={1}  sx={{ flexGrow: 1 }}>
      <AppBar position='sticky'>
      <Toolbar variant='dense'>
      <Typography variant='h6' component='div' fontStyle={'italic'} sx={{ flexGrow: 1}}>Report Writing Tool</Typography>


      |<Tooltip title={ExportVulnToJira} arrow placement='bottom-end'>
      <Button key="Export Vulns to Jira" startIcon={<FileDownloadIcon />} variant='contained' disableElevation >Export Vulnerabilities To Jira</Button>
      </Tooltip>

      <Tooltip title={ExportReport} arrow placement='bottom-start'>
      <Button key="Export Report" startIcon={<FileDownloadIcon />} variant='contained' disableElevation >Export Report (PDF)</Button>
      </Tooltip>


      </Toolbar>
      </AppBar>
    </Box>
    <Grid container
         margin={1}
         direction={'column'}>

<Grid item>
<Box sx={{ width: '100%', bgcolor: 'background.paper'}}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab icon={<DescriptionIcon />} value={0} label="Report" />
        <Tab icon={<CoronavirusIcon />} value={1} label="Vulnerabilities" />
        <Tab icon={<BookmarksIcon />} value={2} label="Audit Log" />
      </Tabs>
    </Box>
    </Grid>
<Box sx={{bgcolor: 'background.paper', display: 'inline-flex', flexDirection: 'row', alignContent: 'stretch' , justifyContent: 'flex-start', flexWrap: 'nowrap', width: '100%'}}>

<Box sx={{justifyContent: 'center', alignItems: 'center'}}>
      
      
      
      <Grid item width={ButtonWidth}>
      <ButtonGroup 
          onChange={handleChange}
          disabled={value !==  0}
          orientation="vertical"
          aria-label="Vertical button group"
          variant="contained"
          disableElevation
          fullWidth
          >
          
          <Typography variant='h7' margin={1} fontStyle={'italic'} component='div' sx={{ flexGrow: 1}}>Report Options</Typography>
          {ButtonsReport}
        </ButtonGroup>
        </Grid>




        <Grid item width={ButtonWidth}>
        <ButtonGroup
          onChange={handleChange}
          disabled={value  !== 0}
          orientation="vertical"
          aria-label="Vertical button group"
          variant="contained"
          disableElevation
          fullWidth
      >
          <Typography variant='h7' margin={1} fontStyle={'italic'} component='div' sx={{ flexGrow: 1}}>Section Options</Typography>
          {SectionHeading}
          
        </ButtonGroup>
</Grid>
<Grid item width={ButtonWidth}>
        <ButtonGroup
          onChange={handleChange}
          disabled={value !== 1}
          orientation="vertical"
          aria-label="Vertical button group"
          variant="contained"
          disableElevation
          fullWidth
      >
          <Typography variant='h7' component='div' fontStyle={'italic'}  margin={1} sx={{ flexGrow: 1}}>Vulnerability options</Typography>
          {ButtonsVulnDatabank}
  
        </ButtonGroup>
        </Grid>



        <Grid item width={ButtonWidth}> 
        <ButtonGroup
          onChange={handleChange}
          disabled={value !== 2}
          orientation="vertical"
          aria-label="Vertical button group"
          variant="contained"
          disableElevation
          fullWidth
      >
          <Typography variant='h7' margin={1} fontStyle={'italic'} component='div' sx={{ flexGrow: 1}}>Audit Options</Typography>
          {AuditLog}   
        </ButtonGroup>
        </Grid>
        </Box>
        
        
     <Box sx={{bgcolor: '#e6e6e6', border:1, width: '84%', height: '100%', marginLeft: 1}}>

     <CustomTabPanel value={value} index={0}>

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

      

      </CustomTabPanel>
      


      <CustomTabPanel value={value} index={1}>

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
      </CustomTabPanel>
     
     <CustomTabPanel value={value} index={2}>


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
      </CustomTabPanel>

      </Box>
        </Box>
          </Grid>
          


          
        </React.Fragment>

  );
}

export default App 