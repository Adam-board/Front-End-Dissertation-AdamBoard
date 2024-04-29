import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import CustToolBarButtons from '../../ToolBar/CustToolBarButtons';
import { ExportReport } from '../../../Language/ToolTipDesc';
import  Typography  from '@mui/material/Typography';
import ReportSelectionWord from './ReportSelectionWord';

  
export default function ExportWordReportModal() {
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
      <CustToolBarButtons onClick={handleClickOpen} arrowPlacement='bottom-start' tooltip={ExportReport}>Export Report (Word) </CustToolBarButtons>
      <Modal
        open={open}
        onClose={handleClose}
       >
        <div style={modalStyle}>
          <Typography variant="h4">{"Choose a report from the following list to export:"}</Typography>
          <ReportSelectionWord handleModalClose={handleClose}/>
        </div>
      </Modal>
    </div>
  );
}


  