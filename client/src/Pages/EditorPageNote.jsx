import CustRenderEditor from '../Components/Editor/RenderEditor';
import { Grid, TextField, Button } from '@mui/material';
import React, { useCallback, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function EditorPageNote() {
    const { NoteID } = useParams();
    const navigate = useNavigate();
    const { data, mutate } = useSWR(`/api/report/note/${NoteID}`, fetcher);
    const [headingText, setHeadingText] = useState('');
    const [descriptionText, setDescriptionText] = useState('');
    const [modified, setModified] = useState(false);

    useEffect(() => {
        if (data) {
            setHeadingText(data.Note.Heading);
            setDescriptionText(data.Note.Description); // Set default value only if descriptionText is empty
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

    const handleSaveNote = useCallback(() => {
        // Check if changes have been made or not
        if (!modified) {
            console.log('No changes made');
            return; // Do nothing if no changes made
        }

        fetch(`/api/report/note/${NoteID}/save`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Heading: headingText, Description: descriptionText, Data: data.Data })
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
    }, [NoteID, data, mutate, navigate, headingText, descriptionText, modified]);

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
            {/* Render the editor component */}
            <CustRenderEditor onDataChange={(data) => {}} Data={data.Data} />
            <Grid container xs={12} justifyContent={'flex-end'}>
                <Button onClick={handleSaveNote} variant='contained'>Save</Button>
                <Button onClick={() => navigate(-1)} variant='contained' color="error">Cancel</Button>
            </Grid>
        </Grid>
    );
}
