import React, { useState, useEffect } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'draft-js/dist/Draft.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Grid } from '@mui/material';

export default function CustRenderEditor({ onDataChange, initialContent }) {
  const [editorState, setEditorState] = useState(() => {
    if (initialContent) {
      try {
        const contentState = convertFromRaw(JSON.parse(initialContent));
        return EditorState.createWithContent(contentState);
      } catch (error) {
        console.error('Error parsing initial content:', error);
      }
    }
    return EditorState.createEmpty();
  });

  useEffect(() => {
    if (initialContent) {
      try {
        const contentState = convertFromRaw(JSON.parse(initialContent));
        setEditorState(EditorState.createWithContent(contentState));
      } catch (error) {
        console.error('Error parsing initial content:', error);
      }
    }
  }, [initialContent]);

  const handleEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    onDataChange(JSON.stringify(convertToRaw(newEditorState.getCurrentContent())));
  };

  return (
    <Grid
      item
      sx={{ bgcolor: 'whitesmoke', border: 1, flexGrow: 1, padding: 2, marginTop: 1, marginBottom: 2 }}
    >
      <Editor
        spellCheck={true}
        placeholder="Please Enter Text Here!"
        editorState={editorState}
        onEditorStateChange={handleEditorStateChange}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
      />
    </Grid>
  );
}
