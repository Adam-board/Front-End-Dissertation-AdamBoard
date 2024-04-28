import { Grid, IconButton, Typography, Box, Link } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit'; //Edit Button
import DeleteIcon from '@mui/icons-material/Delete'; //Remove Button
import { useNavigate, useParams } from "react-router-dom";

export default function CustSection(props) {
const {Heading, Description, Data, id} = props;

const navigate = useNavigate();
const {ReportID} = useParams();

const handleDeleteSection = () => {
    // Call the API to delete the section
    fetch(`/api/report/${ReportID}/section/${id}/delete`, {
        method: 'DELETE'
    })
    .then(res => {
        if (res.ok) {
            console.log('Section deleted successfully');
            // Optionally update state or perform any necessary actions
        } else {
            throw new Error('Failed to delete section');
        }
    })
    .catch(error => {
        console.error('Error deleting section:', error);
        // Handle error as needed
    });
};

const handleEditSection = () => {
    // Navigate to the editor page with the section ID
    navigate(`/Heading/${id}`);
};

    return(

        <Grid container
            direction={'row'}
            justifyContent={'space-between'}
            sx={{bgcolor: 'whitesmoke', border:1, flexGrow:1, padding:2, marginTop: 1, marginBottom: 2}}>

            <Grid item md={6}>

            {/* Text from adding a new heading will go here */}
                <Typography variant="h5" sx={{textDecoration: 'underline'}}>{Heading}</Typography>
                <Typography variant="h7">{Description}</Typography>

            {/* Text From the Editor will go within this box */}
                <Box margin={5}>    
                    <Typography variant="body1" marginBottom={3}>{Data}</Typography>
                </Box>

            </Grid>
            
            <Grid item sx={8} md={0}>
                <IconButton color='error' onClick={handleDeleteSection}><DeleteIcon/> </IconButton>
                <IconButton color='info' onClick={handleEditSection}><EditIcon /></IconButton>
            </Grid>
        </Grid>  
    )
}