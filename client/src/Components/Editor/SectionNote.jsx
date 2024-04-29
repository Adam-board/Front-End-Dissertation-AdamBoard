import { Grid, IconButton, Typography, Box, Link } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit'; //Edit Button
import DeleteIcon from '@mui/icons-material/Delete'; //Remove Button
import { EditorState, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'draft-js/dist/Draft.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useNavigate, useParams } from "react-router-dom";

export default function CustSectionNote(props) {
const {Heading, Description, Data, id} = props;

const navigate = useNavigate();
const {ReportID} = useParams();

const handleDeleteNote = () => {
    // Call the API to delete the Note
    fetch(`/api/report/${ReportID}/note/${id}/delete`, {
        method: 'DELETE'
    })
    .then(res => {
        if (res.ok) {
            console.log('Note deleted successfully');
            // Optionally update state or perform any necessary actions
        } else {
            throw new Error('Failed to delete Note');
        }
    })
    .catch(error => {
        console.error('Error deleting Note:', error);
        // Handle error as needed
    });
};

const handleEditNote = () => {
    // Navigate to the editor page with the Note ID
    navigate(`/Note/${id}`);
};


let editorState = EditorState.createEmpty();

try {
    if (Data) {
        const contentState = convertFromRaw(JSON.parse(Data));
        editorState = EditorState.createWithContent(contentState);
    }
} catch (error) {
    console.error('Error parsing JSON data:', error);
    // Handle parsing error as needed, e.g., set default editor state
}

    return(

        <Grid container
            direction={'row'}
            justifyContent={'space-between'}
            sx={{bgcolor: 'whitesmoke', border:1, flexGrow:1, padding:2, marginTop: 1, marginBottom: 2}}>

            <Grid item md={6}>

            {/* Text from adding a new heading will go here */}
                <Typography variant="h5" sx={{textDecoration: 'underline'}}>{Heading}</Typography>
                <Typography variant="h7">{Description}</Typography>

             {/* Render the content with Draft.js Editor */}
             <Box margin={5}>
                    <Editor
                        editorState={editorState}
                        toolbarHidden={true} // Hide toolbar to make it read-only
                        readOnly={true} // Make it read-only
                    />
                </Box>


            </Grid>
            
            <Grid item sx={8} md={0}>
                <IconButton color='error' onClick={handleDeleteNote}><DeleteIcon/> </IconButton>
                <IconButton color='info' onClick={handleEditNote}><EditIcon /></IconButton>
            </Grid>
        </Grid>  
    )
}