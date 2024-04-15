import React from 'react'
import {EditorState} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import 'draft-js/dist/Draft.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { Button, Grid } from '@mui/material';


export default function CustRenderEditor() {

const [editorState, setEditorState] = React.useState(EditorState.createEmpty()
);

return(

  <Grid item
  sx={{bgcolor: 'whitesmoke', border:1, flexGrow:1, padding:2, marginTop: 1, marginBottom: 2}}>
  <Editor 
    // handleKeyCommand={handleKeyCommand} 
    spellCheck={true} 
    placeholder='Please Enter Text Here!' 
    editorState={editorState} 
    onEditorStateChange={setEditorState}
     toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName="editorClassName" />
  </Grid>
)


}