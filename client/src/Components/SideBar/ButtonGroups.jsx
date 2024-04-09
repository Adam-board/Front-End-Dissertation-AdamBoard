
//All objects related to this project From MUI

import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; // Grid version 1

export default function CustButtonGroup(props) {
 const {Num,  value, group} = props

return(<Grid item>
    <ButtonGroup 
        disabled={value !==  Num}
        orientation="vertical"
        aria-label="Vertical button group"
        variant="contained"
        disableElevation
        fullWidth>
    
    <Typography variant='h7' margin={1} fontStyle={'italic'} component='div' sx={{ flexGrow: 1}}>{props.children}</Typography>
        {group}
  </ButtonGroup>
</Grid>)
};
