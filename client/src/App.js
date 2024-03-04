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

//TODO implement functionality into buttons based on their respective keys
const ButtonsReport = [
  <Button key="New Report" startIcon={<DriveFolderUploadIcon />}>New Report</Button>,
  <Button key="Load Report" startIcon={<DriveFolderUploadIcon />}>Load Report</Button>,
  <Button key="Save Report" startIcon={<SaveIcon />} >Save Report</Button>,
  <Button key="Load Report Template" startIcon={<DriveFolderUploadIcon  />}>Load Report Template</Button>,
  <Button key="Save Report Template" startIcon={<SaveIcon />} >Save Report Template</Button>,
  <Button key="Set Default Report Template" startIcon={<DescriptionIcon />}>Set Default Report Template</Button>,
];


const SectionHeading = [
 
  <Button key="Add Heading" startIcon={<AddCircleOutlineIcon />}>Add Section Heading</Button>,
  <Button key="Remove Heading" startIcon={<DeleteIcon />} >Remove Section Heading</Button>,
  <Button key="Edit Heading" startIcon={<EditIcon />}>Edit Section Heading</Button>,
  <Button key="Import Heading" startIcon={<ImportExportIcon  />}>Import Section Headings</Button>,
];

const ButtonsVulnDatabank = [
  <Button key="Load Vulns" startIcon={<ImportExportIcon  />}>Import Vulnerability Databank</Button>,
  <Button key="Add Vulns" startIcon={<AddCircleOutlineIcon />}>Add New Vulnerability To Databank</Button>,
  <Button key="Add Vulns" startIcon={<AddCircleOutlineIcon />}>Insert Vulnerability From Databank</Button>,
  <Button key="Load Vuln" startIcon={<DriveFolderUploadIcon />}>Load Vulnerability Databank</Button>,
  <Button key="Save Vuln" startIcon={<SaveIcon />} >Save Vulnerability Databank</Button>
];

const AuditLog = [
  <Button key="Add Audit" startIcon={<AddCircleOutlineIcon />}>Add Audit Entry</Button>,
  <Button key="Remove Audit" startIcon={<DeleteIcon />}>Remove Audit Entry</Button>,
  <Button key="Edit Audit" startIcon={<EditIcon />}>Edit Audit Entry</Button>,
  <Button key="Import Audit" startIcon={<ImportExportIcon />}>Import Audit Log</Button>,
];

const ComplianceFlag = { inputProps: { 'aria-label': 'Checkbox demo' } };

//This handles the tabs which will appear for teach section
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
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
      <Button key="Export Vulns to Jira" startIcon={<FileDownloadIcon />} variant='contained' disableElevation >Export Vulnerabilities To Jira</Button>
      <Button key="Export Report" startIcon={<FileDownloadIcon />} variant='contained' disableElevation >Export Report (PDF)</Button>
      
      </Toolbar>
      </AppBar>
    </Box>
    <Grid container
         margin={1}
         direction={'column'}>

<Grid item>
<Box sx={{ width: '100%', bgcolor: 'background.paper'}}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab icon={<DescriptionIcon />} value={1} label="Report" />
        <Tab icon={<CoronavirusIcon />} value={2} label="Vulnerabilities" />
        <Tab icon={<BookmarksIcon />} value={3} label="Audit Log" />
      </Tabs>
    </Box>
    </Grid>
      <Grid item width={355}>
      <ButtonGroup
          orientation="vertical"
          aria-label="Vertical button group"
          variant="contained"
          disableElevation
          fullWidth>
          
          <Typography variant='h7' margin={1} fontStyle={'italic'} component='div' sx={{ flexGrow: 1}}>Report Options</Typography>
          {ButtonsReport}
        </ButtonGroup>
        </Grid>

        <Grid item width={355}>
        <ButtonGroup
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
<Grid item width={355}>
        <ButtonGroup
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
        <Grid item width={355}> 
        <ButtonGroup
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
          </Grid>
        </React.Fragment>

  );
}
export default App 