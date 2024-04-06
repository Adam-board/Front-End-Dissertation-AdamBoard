import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


//This handles the tabs which will appear for each section
export default function CustTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        color='primary'
      >
        {value === index && (
          <Box sx={{ p: 3}}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  