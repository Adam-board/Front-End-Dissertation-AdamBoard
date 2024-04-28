//All icons that are being imported for this project
import SaveIcon from '@mui/icons-material/Save'; //Save report
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'; //Load Report
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; // Add Vulns
import DeleteIcon from '@mui/icons-material/Delete'; //Remove Button

import * as Desc from '../../Language/ToolTipDesc'
import CustButton from './CustButton';

//Importing all the functionality for each button
import NewReportModal from '../ModalBoxes/NewReport/NewReportModal';
import LoadReportModal from '../ModalBoxes/LoadReport/LoadReportModal';
import DeleteReportModal from '../ModalBoxes/DeleteReport/DeleteReportModal';
import SaveTemplateModal from '../ModalBoxes/SaveReportTemplate/SaveTemplateModal'



export const ButtonsReport = [
<NewReportModal/>,
<LoadReportModal/>,
<DeleteReportModal/>,
<SaveTemplateModal/>,
<CustButton onClick={null} startIcon={<DeleteIcon/>} tooltip={Desc.RemoveReportTemplate} arrowPlacement="right" >Remove Report Template</CustButton>,
];

export const ButtonsVulnDatabank = [
<CustButton onClick={null} startIcon={<AddCircleOutlineIcon />} tooltip={Desc.InsertVulnFromDatabank} arrowPlacement="right" >Insert Vulnerability From Databank</CustButton>,
<CustButton onClick={null} startIcon={<DriveFolderUploadIcon />} tooltip={Desc.UploadVulnToDatabank} arrowPlacement="right" >Upload vulnerability into Databank</CustButton>,
<CustButton onClick={null} startIcon={<DeleteIcon/>} tooltip={Desc.RemoveVulnFromDatabank} arrowPlacement="right" >Remove Vulnerability from Databank</CustButton>,
];


