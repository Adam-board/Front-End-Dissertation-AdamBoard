import { Grid, IconButton, Typography, Box, Link } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit'; //Edit Button
import DeleteIcon from '@mui/icons-material/Delete'; //Remove Button
import { useNavigate, useParams } from "react-router-dom";

export default function CustSectionVuln(props) {
  const {VulnName,Severity, Description, Data, id} = props;
  const navigate = useNavigate();
  const { ReportID } = useParams();

  let color;
  // Determine color based on severity
  switch (Severity) {
    case 'Critical':
      color = '#c00000';
      break;
    case 'High':
      color = '#ff0000';
      break;
    case 'Medium':
      color = '#ed7d31';
      break;
    case 'Low':
      color = '#ffc000';
      break;
    default:
      color = 'black';
  }


  const handleDeleteVuln = () => {
    // Call the API to delete the vulnerability
    fetch(`/api/report/${ReportID}/vuln/${id}/delete`, {
        method: 'DELETE'
    })
    .then(res => {
        if (res.ok) {
            console.log('Vulnerability deleted successfully');
            // Optionally update state or perform any necessary actions
        } else {
            throw new Error('Failed to delete vulnerability');
        }
    })
    .catch(error => {
        console.error('Error deleting vulnerability:', error);
        // Handle error as needed
    });
  };

  const handleEditVuln = () => {
    // Navigate to the editor page with the vulnerability ID
    navigate(`/Vuln/${id}`);
  };

    return(

      <Grid container
          direction={'row'}
          justifyContent={'space-between'}
          sx={{bgcolor: 'whitesmoke', border:1, flexGrow:1, padding:2, marginTop: 1, marginBottom: 2}}>

          <Grid item md={6}>

      {/* Text from adding a new heading will go here */}
          <Typography variant="h5" sx={{textDecoration: 'underline'}}>{VulnName}</Typography>
          <Typography variant="h6" style={{color}} >{Severity}</Typography>
          <Typography variant="h7">{Description}</Typography>

      {/* Text From the Editor will go within this box */}
          <Box margin={5}>    
          <Typography variant="body1" marginBottom={3}>{Data}</Typography>

          </Box>

          </Grid>
          


          <Grid item sx={8} md={0}>
          <IconButton color='error' onClick={handleDeleteVuln}><DeleteIcon/> </IconButton>
          <IconButton color='info' onClick={handleEditVuln}><EditIcon /></IconButton>
          </Grid>
      </Grid>      
    )
}