//All objects related to this project From MUI
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';





export default function CustButton(props) {
    const {startIcon, tooltip, arrowPlacement} = props

return(
<Tooltip title={tooltip} arrow placement={arrowPlacement}>
  <Button startIcon={startIcon}>{props.children}</Button>
  </Tooltip>
  )}