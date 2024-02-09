//The main import to ensure everything is treated as React 
import * as React from 'react';

//All objects related to buttons within this project
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

//All icons that are being imported for this project
import SaveIcon from '@mui/icons-material/Save'; //Save report
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'; //Load Report
import DescriptionIcon from '@mui/icons-material/Description'; //Set Template & Load Template
import FileDownloadIcon from '@mui/icons-material/FileDownload'; // Export Report

//The variables where all the buttons related to reports are declared 
//and can be interacted with at a later point using keys

//TODO implement functionality into buttons based on their respective keys
const ButtonsReport = [
  <Button key="Export Report" startIcon={<FileDownloadIcon />}>Export Report</Button>,
  <Button key="Set Template" startIcon={<DescriptionIcon />}>Set Template</Button>,
  <Button key="Load Default" startIcon={<DescriptionIcon  />}>Load Template</Button>,
  <Button key="Load Report" startIcon={<DriveFolderUploadIcon />}>Load Report</Button>,
  <Button key="Save Report" startIcon={<SaveIcon />}>Save Report</Button>,
];

const ButtonsVulnDatabank = [
  <Button key="Load Vulns">Click Me!</Button>
]

//TODO Implement all objects required to finish UI in design phase
//TODO Plan out where the layout will go and how it will look
function App() {
  return (
    <>
      <ButtonGroup
        orientation="vertical"
        aria-label="Vertical button group"
        variant="contained"
      >
        {ButtonsReport}
      </ButtonGroup>

      <ButtonGroup
        orientation="vertical"
        aria-label="Vertical button group"
        variant="contained"
      
        >
          {ButtonsVulnDatabank}
        </ButtonGroup>
        </>

  );
}
export default App 