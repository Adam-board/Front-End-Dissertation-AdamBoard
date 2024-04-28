import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CustButton from '../../SideBar/CustButton';
import { LoadReport } from '../../../Language/ToolTipDesc';
import  Typography  from '@mui/material/Typography';
import ReportSelection from './ReportSelection';

  
export default function LoadReportModal() {
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
      <CustButton onClick={handleClickOpen} startIcon={<DriveFolderUploadIcon />} tooltip={LoadReport} arrowPlacement="right" >Load Report</CustButton>
      <Modal
        open={open}
        onClose={handleClose}
       >
        <div style={modalStyle}>
          <Typography variant="h4">{"Load a report from the following list:"}</Typography>
          <ReportSelection handleModalClose={handleClose}/>
        </div>
      </Modal>
    </div>
  );
}


  