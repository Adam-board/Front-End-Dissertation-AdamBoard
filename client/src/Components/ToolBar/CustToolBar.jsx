import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function CustToolBar(props) { 
const {Heading} = props

return(
<AppBar position='sticky'>
<Toolbar variant='dense'>
    <Typography variant='h6' component='div' fontStyle={'italic'} sx={{ flexGrow: 1}}>{Heading}</Typography>
    

    {props.children}

</Toolbar>
</AppBar>
    

)}