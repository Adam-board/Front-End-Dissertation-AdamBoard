import React from 'react'
import ReactDOM from 'react-dom';
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Button, Grid } from '@mui/material';


export default function CustRenderEditor() {

const [editorState, setEditorState] = React.useState(EditorState.createEmpty()
);
const handleKeyCommand = (command, editorState) => {
  const newState = RichUtils.handleKeyCommand(editorState, command);

  if (newState) {
    setEditorState(newState);
    return "handled";
  }
  return "not handled";
};

return(

  <Grid item
  sx={{bgcolor: 'whitesmoke', border:1, flexGrow:1, padding:2, marginTop: 1, marginBottom: 2}}>
  <Editor handleKeyCommand={handleKeyCommand} spellCheck={true} placeholder='Please Enter Text Here!' editorState={editorState} onChange={setEditorState} />
  </Grid>
)


}