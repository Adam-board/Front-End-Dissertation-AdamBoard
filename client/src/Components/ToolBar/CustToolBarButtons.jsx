import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import FileDownloadIcon from '@mui/icons-material/FileDownload'; // Export Report

export default function CustToolBarButtons(props) {
    const { arrowPlacement, tooltip, onClick} = props;

return(
    <Tooltip title={tooltip} arrow placement={arrowPlacement}>
         <Button onClick={onClick} startIcon={<FileDownloadIcon />} variant='contained' disableElevation >{props.children}</Button>
    </Tooltip>)
}