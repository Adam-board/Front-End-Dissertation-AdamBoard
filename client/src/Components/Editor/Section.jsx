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
    <Typography variant="h5" sx={{textDecoration: 'underline'}}>{Heading}</Typography>
    <Typography variant="h7">{SectionDesc}</Typography>

{/* Text From the Editor will go within this box */}
    <Box margin={5}>    
    <Typography variant="body1" marginBottom={3}>{EditorDesc}</Typography>


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