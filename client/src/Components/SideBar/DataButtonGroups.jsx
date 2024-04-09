//All icons that are being imported for this project
import SaveIcon from '@mui/icons-material/Save'; //Save report
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'; //Load Report
import DescriptionIcon from '@mui/icons-material/Description'; //Set Template & Load Template
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; // Add Vulns
import DeleteIcon from '@mui/icons-material/Delete'; //Remove Button
import ImportExportIcon from '@mui/icons-material/ImportExport'; //Import Export Button

import * as Desc from '../../Language/ToolTipDesc'
import CustButton from './CustButton';

export const ButtonsReport = [
<CustButton  startIcon={<DriveFolderUploadIcon />} tooltip={Desc.NewReport} arrowPlacement="right-start" >New Report</CustButton>,
<CustButton  startIcon={<DriveFolderUploadIcon />} tooltip={Desc.LoadReport} arrowPlacement="right" >Load Report</CustButton>,
<CustButton  startIcon={<SaveIcon/>} tooltip={Desc.SaveReport} arrowPlacement="right" >Save Report</CustButton>,
<CustButton  startIcon={<DriveFolderUploadIcon />} tooltip={Desc.LoadReportTemplate} arrowPlacement="right" >Load Report Template</CustButton>,
<CustButton  startIcon={<SaveIcon/>} tooltip={Desc.SaveReportTemplate} arrowPlacement="right-end" >Save Report Template</CustButton>,
<CustButton  startIcon={<DescriptionIcon/>} tooltip={Desc.SaveDefaultTemplate} arrowPlacement="right-start" >Set Default Report Template</CustButton>
];

export const ButtonsVulnDatabank = [
<CustButton  startIcon={<AddCircleOutlineIcon />} tooltip={Desc.InsertVulnFromDatabank} arrowPlacement="right" >Insert Vulnerability From Databank</CustButton>,
<CustButton  startIcon={<DeleteIcon/>} tooltip={Desc.RemoveVulnFromDatabank} arrowPlacement="right" >Remove Vulnerability from Databank</CustButton>,
<CustButton  startIcon={<DriveFolderUploadIcon />} tooltip={Desc.LoadVulnDatabank} arrowPlacement="right" >Load Vulnerability Databank</CustButton>,
<CustButton  startIcon={<SaveIcon />} tooltip={Desc.SaveVulnDatabank} arrowPlacement="right" >Save Vulnerability Databank</CustButton>,
<CustButton  startIcon={<ImportExportIcon />} tooltip={Desc.ImportVulnDatabank} arrowPlacement="right" >Import Vulnerability Databank</CustButton>
];

export const AuditLog = [<CustButton  startIcon={<ImportExportIcon />} tooltip={Desc.ImportAuditLog} arrowPlacement="right" >Import Audit Log</CustButton>,];

