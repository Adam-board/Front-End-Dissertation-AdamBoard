import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import CustToolBarButtons from '../../ToolBar/CustToolBarButtons';
import { ExportVulnToJira } from '../../../Language/ToolTipDesc';
import  Typography  from '@mui/material/Typography';
import ReportSelectionJira from './ReportSelectionJira';

  
export default function ExportJiraReportModal() {
  const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
      setOpen(false);
  };
  
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    backgroundColor: 'whitesmoke',
    border: '2px solid #000',
    maxHeight: '80vh', // Set maximum height for modal content
    overflowY: 'auto', // Add vertical scrollbar when content exceeds maxHeight
    backgroundColor: 'whitesmoke',
    boxShadow: 24,
    padding: 15
  };
  
  return (
    <div >
      <CustToolBarButtons onClick={handleClickOpen} arrowPlacement='bottom-end' tooltip={ExportVulnToJira}>Export Vulnerabilities To Jira</CustToolBarButtons>
      <Modal
        open={open}
        onClose={handleClose}
       >
        <div style={modalStyle}>
          <Typography variant="h4">{"Chhose a report To export the vulnerabilities from:"}</Typography>
          <ReportSelectionJira handleModalClose={handleClose}/>
        </div>
      </Modal>
    </div>
  );
}


  