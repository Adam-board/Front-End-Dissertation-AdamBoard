import CustRenderEditor from '../Components/Editor/RenderEditor';
import CustSeveritySelect from '../Components/Editor/CustSeveritySelect';
import CVSSCalculator from '../Components/Editor/CVSSCalculator';
import { Grid, TextField, Button } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function EditorPageVuln() {
    const { VulnID } = useParams();
    const navigate = useNavigate();
    const [vulnData, setVulnData] = useState(null);
    const [headingText, setHeadingText] = useState('');
    const [descriptionText, setDescriptionText] = useState('');
    const [modified, setModified] = useState(false);

    // Fetch vuln data using useSWR
    const { data, mutate } = useSWR(`/api/report/vuln/${VulnID}`, fetcher);

    useEffect(() => {
        if (data) {
            setVulnData(data.vuln);
            setHeadingText(data.vuln.VulnName);
            setDescriptionText(data.vuln.Description);
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

    const handleVulnDataChange = (data) => {
        setModified(true);
        setVulnData(data); // Update vulnData state with the new editor data
    };

    // Function to handle saving vuln
    const handleSaveVuln = useCallback(() => {
        // Check if changes have been made or not
        if (!modified) {
            console.log('No changes made');
            return; // Do nothing if no changes made
        }

        // Make PUT request to update vuln data
        fetch(`/api/report/vuln/${VulnID}/save`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...vulnData, VulnName: headingText, Description: descriptionText })
        })
            .then(res => {
                if (res.ok) {
                    console.log('Vuln updated successfully');
                    // Revalidate vuln data after update
                    mutate();
                    // Navigate back to previous page after successful save
                    navigate(-1);
                } else {
                    throw new Error('Failed to update vuln');
                }
            })
            .catch(error => {
                console.error('Error updating vuln:', error);
            });
    }, [VulnID, vulnData, mutate, navigate, headingText, descriptionText, modified]);

    if (!vulnData) return <div>Loading...</div>;

    return (
        <Grid item xs={10} sx={{ bgcolor: '#e6e6e6', border: 1, margin: 2, marginTop: 5, padding: 3 }}>
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
            <Grid item>
                <CustSeveritySelect Severity={vulnData.Severity} setSeverity={(severity) => setVulnData(prevData => ({ ...prevData, Severity: severity }))} />
            </Grid>
            {/* Pass onDataChange and initialContent props to CustRenderEditor */}
            <CustRenderEditor onDataChange={handleVulnDataChange} initialContent={vulnData.Data} />
            <Grid container xs={12} justifyContent={'flex-end'}>
                <Button onClick={handleSaveVuln} variant='contained'>Save</Button>
                <Button onClick={() => navigate(-1)} variant='contained' color="error">Cancel</Button>
            </Grid>
            <CVSSCalculator />
        </Grid>
    );
}
