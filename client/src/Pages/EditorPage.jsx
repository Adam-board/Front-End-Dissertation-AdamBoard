import CustRenderEditor from '../Components/Editor/RenderEditor';
import { Grid, Button, TextField } from '@mui/material';
import React, { useCallback, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function EditorPage() {
  const { SectionID } = useParams();
  const navigate = useNavigate();
  const { data, error, mutate } = useSWR(`/api/report/section/${SectionID}`, fetcher);
  const [headingText, setHeadingText] = useState('');
  const [descriptionText, setDescriptionText] = useState('');
  const [modified, setModified] = useState(false);
  const [editorData, setEditorData] = useState(null); // Initialize editorData as null

  useEffect(() => {
    if (data) {
      setHeadingText(data.Section.Heading);
      setDescriptionText(data.Section.Description);
      setEditorData(data.Section.Data); // Set editorData from fetched data
    }
  }, [data]);

  const handleHeadingChange = (event) => {
    setHeadingText(event.target.value);
    setModified(true);
  };

  const handleDescriptionChange = (event) => {
    setDescriptionText(event.target.value);
    setModified(true);
  };

  const handleEditorDataChange = (data) => {
    setModified(true);
    setEditorData(data); // Store the raw JavaScript data from the editor
  };

  const handleSaveSection = useCallback(() => {
    // Check if changes have been made or not
    if (!modified) {
      console.log('No changes made');
      return; // Do nothing if no changes made
    }

    // Make PUT request to update section data
    fetch(`/api/report/section/${SectionID}/save`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Heading: headingText, Description: descriptionText, Data: editorData }),
    })
      .then((res) => {
        if (res.ok) {
          console.log('Section updated successfully');
          mutate();
          navigate(-1);
        } else {
          throw new Error('Failed to update section');
        }
      })
      .catch((error) => console.error('Error updating section:', error));
  }, [SectionID, data, modified, mutate, navigate, headingText, descriptionText, editorData]);

  if (error) return <div>Error loading section data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Grid item xs={10} sx={{ bgcolor: '#e6e6e6', border: 1, margin: 2, marginTop: 5, padding: 3 }}>
      <Grid container direction={'row'} alignItems="center" spacing={2}>
        <TextField
          label="Heading"
          fullWidth
          variant="outlined"
          value={headingText}
          onChange={handleHeadingChange}
          InputProps={{
            readOnly: false,
            sx: { fontWeight: 'bold' },
          }}
        />
      </Grid>
      <TextField
        label="Description"
        fullWidth
        multiline
        variant="outlined"
        value={descriptionText}
        onChange={handleDescriptionChange}
        InputProps={{
          readOnly: false,
          sx: { fontStyle: 'italic' },
        }}
      />
      {/* Pass initialContent as editorData */}
      <CustRenderEditor onDataChange={handleEditorDataChange} initialContent={editorData} />
      <Grid container xs={12} justifyContent={'flex-end'}>
        <Button onClick={handleSaveSection} variant="contained">
          Save
        </Button>
        <Button onClick={() => navigate(-1)} variant="contained" color="error">
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
}
