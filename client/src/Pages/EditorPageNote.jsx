import CustRenderEditor from '../Components/Editor/RenderEditor';
import { Grid, TextField, Button, Typography } from '@mui/material';
import React, { useCallback, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function EditorPageNote() {
    const { NoteID } = useParams();
    const navigate = useNavigate();
    const [headingText, setHeadingText] = useState('');
    const [descriptionText, setDescriptionText] = useState('');
    const [editorData, setEditorData] = useState(null);
    const [modified, setModified] = useState(false);

    const { data, mutate } = useSWR(`/api/report/note/${NoteID}`, fetcher);

    useEffect(() => {
        if (data) {
            setHeadingText(data.Note.Heading);
            setDescriptionText(data.Note.Description);
            setEditorData(data.Note); // Set editorData from fetched data
        }
    }, [data]);

    const handleHeadingChange = (event) => {
        setHeadingText(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescriptionText(event.target.value);
    };

    const handleEditorDataChange = (data) => {
        console.log("New editor data:", data);
        setModified(true);
        setEditorData(data);
    };
    

    const handleSaveNote = useCallback(() => {
        if (!modified) {
            console.log('No changes made');
            return;
        }

        console.log("Saving note data:", editorData);

        fetch(`/api/report/note/${NoteID}/save`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Heading: headingText, Description: descriptionText, Data: editorData})
        })
        .then(res => {
            if (res.ok) {
                console.log('Note updated successfully');
                mutate();
                navigate(-1);
            } else {
                throw new Error('Failed to update note');
            }
        })
        .catch(error => console.error('Error updating note:', error));
    }, [NoteID, editorData, modified, mutate, navigate, headingText, descriptionText]);

    if (!editorData) return <div>Loading...</div>;

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
                        sx: { fontWeight: 'bold' }
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
                    sx: { fontStyle: 'italic' }
                }}
            />
            <Typography>Click on the editor below before pressing the save button to confirm your changes</Typography>
            <CustRenderEditor onDataChange={handleEditorDataChange} initialContent={editorData.Data} />
            <Grid container xs={12} justifyContent={'flex-end'}>
                <Button onClick={handleSaveNote} variant='contained'>Save</Button>
                <Button onClick={() => navigate(-1)} variant='contained' color="error">Cancel</Button>
            </Grid>
        </Grid>
    );
}
