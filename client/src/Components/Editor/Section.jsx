import { Grid, IconButton, Typography, Box, Link } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit'; //Edit Button
import DeleteIcon from '@mui/icons-material/Delete'; //Remove Button


export default function CustSection(props) {
const {Heading, SectionDesc, EditorDesc} = props;

    return(

<Grid container
    direction={'row'}
    justifyContent={'space-between'}
    sx={{bgcolor: 'whitesmoke', border:1, flexGrow:1, padding:2, marginTop: 1, marginBottom: 2}}>

    <Grid item md={6}>

{/* Text from adding a new heading will go here */}
    <Typography variant="h5" sx={{textDecoration: 'underline'}}>Executive Summary</Typography>
    <Typography variant="h7">The section provides a brief overview of the entire report's findings from the penetration test. The language in this section should be aimed towards non-technical users</Typography>


{/* Text From the Editor will go within this box */}
    <Box margin={5}>    
    <Typography variant="body1" marginBottom={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Typography>

    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Typography>

    <Typography variant="body1" marginTop={3}>{props.children}</Typography>

    </Box>

    </Grid>
    


    <Grid item sx={8} md={0}>
    <IconButton color='error' onClick={null}><DeleteIcon/> </IconButton>
    <IconButton color='info' onClick={null}><EditIcon /></IconButton>
    </Grid>



</Grid>


        
    )



}