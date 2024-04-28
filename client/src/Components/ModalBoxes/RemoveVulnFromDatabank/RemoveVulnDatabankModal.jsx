import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete'; //Remove Button
import CustButton from '../../SideBar/CustButton';
import {RemoveVulnFromDatabank} from '../../../Language/ToolTipDesc';
import Typography  from '@mui/material/Typography';
import VulnDeletion from './VulnDeletion';

  
export default function RemoveVulnDatabankModal() {
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
    boxShadow: 24,
    padding: 15
  };
  
  return (
    <div >
      <CustButton onClick={handleClickOpen} startIcon={<DeleteIcon/>} tooltip={RemoveVulnFromDatabank} arrowPlacement="right" >Remove Vulnerability from Databank</CustButton>
      <Modal
        open={open}
        onClose={handleClose}
       >
        <div style={modalStyle}>
          <Typography variant="h4">{"Delete a vulnerability from the following databank:"}</Typography>
          <VulnDeletion handleModalClose={handleClose}/>
        </div>
      </Modal>
    </div>
  );
}