import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CustButton from '../../SideBar/CustButton';
import {InsertVulnFromDatabankText} from '../../../Language/ToolTipDesc'
import Typography  from '@mui/material/Typography';
import VulnSelection from './VulnSelection';


export default function InsertVulnFromDatabankModal() {
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
    maxHeight: '80vh', // Set maximum height for modal content
    overflowY: 'auto', // Add vertical scrollbar when content exceeds maxHeight
    backgroundColor: 'whitesmoke',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 15
  };
  
  return (
    <div>
      <CustButton onClick={handleClickOpen} startIcon={<AddCircleOutlineIcon />} tooltip={InsertVulnFromDatabankText} arrowPlacement="right" >Insert Vulnerability From Databank</CustButton>
      <Modal
        open={open}
        onClose={handleClose}
       >
        <div style={modalStyle}>
          <Typography variant="h4">{"Choose a vulnerability to insert into Report:"}</Typography>
          <VulnSelection handleModalClose={handleClose}/>
        </div>
      </Modal>
    </div>
  );
}


  