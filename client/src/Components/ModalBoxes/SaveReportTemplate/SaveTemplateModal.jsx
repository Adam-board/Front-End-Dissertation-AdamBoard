import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import SaveIcon from '@mui/icons-material/Save'; //Save report
import CustButton from '../../SideBar/CustButton';
import { SaveReportTemplate } from '../../../Language/ToolTipDesc';
import  Typography  from '@mui/material/Typography';
import TemplateAddition from './TemplateAddition';

  
export default function SaveTemplateModal() {
  const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
      setOpen(false);
  };
  
  const modalStyle = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    maxHeight: '80vh', // Set maximum height for modal content
    overflowY: 'auto', // Add vertical scrollbar when content exceeds maxHeight
    backgroundColor: 'whitesmoke',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 15
  };
  
  return (
    <div>
      <CustButton onClick={handleClickOpen} startIcon={<SaveIcon/>} tooltip={SaveReportTemplate} arrowPlacement="right-end" >Save Report Template</CustButton>
      <Modal
        open={open}
        onClose={handleClose}
       >
        <div style={modalStyle}>
          <Typography variant="h4">{"Save the Report Template:"}</Typography>
          <TemplateAddition handleModalClose={handleClose}/>
        </div>
      </Modal>
    </div>
  );
}


  