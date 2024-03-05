
//If making a comment inside of React Fragment, use this {/* */}


//The main imports to ensure everything is treated as React 
import * as React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1

//All objects related to this project
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';

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



//The variables where all the buttons related to reports are declared 
//and can be interacted with at a later point using keys

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


//This section contains all the tool tips to understand what each button and tab does


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
  const [value, setValue] = React.useState(0);


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

<Box sx={{bgcolor: 'ActiveCaption', justifyContent: 'center', alignItems: 'center'}}>
      
      
      
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
        
        
     <Box sx={{bgcolor: 'ButtonHighlight', justifyContent: 'center', alignItems: 'center',  width: '85%', marginLeft: 1}}>
     <CustomTabPanel value={value} index={0}>
      This Section allows the user to write up sections of the report 
      
      </CustomTabPanel>
      
      <CustomTabPanel value={value} index={1}>
        This section allows the user to insert Vulnerabilities from either the vulnerability databank or write the vulnerabilities new themselves
      </CustomTabPanel>
     
     <CustomTabPanel value={value} index={2}>
        This section is an audit log that can be attached to the vulnerabilities so an external user could see the tools used to discover the vulnerability
      </CustomTabPanel>

      </Box>
        </Box>
          </Grid>
          
        </React.Fragment>

  );
}
export default App 