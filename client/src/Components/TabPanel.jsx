import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

//This handles the tabs which will appear for each section
export default function CustTabPanel(props) {
    const {value, index} = props;
  
    return (
      <Grid item
        hidden={value !== index}
        sx={{bgcolor: '#e6e6e6', border:1}}
      >
        {value === index && (
          <Box sx={{ padding: 3}}>
            {props.children}
          </Box>
        )}
      </Grid>
    );
  }
  