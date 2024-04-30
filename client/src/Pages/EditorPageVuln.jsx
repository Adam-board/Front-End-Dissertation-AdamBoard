import CustRenderEditor from '../Components/Editor/RenderEditor';
import CustSeveritySelect from '../Components/Editor/CustSeveritySelect';
import CVSSCalculator from '../Components/Editor/CVSSCalculator';
import { Grid, TextField, Button, Typography } from '@mui/material';
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
    const [severity, setSeverity] = useState(); // State for severity
    const [modified, setModified] = useState(false);

    // Fetch vuln data using useSWR
    const { data, mutate } = useSWR(`/api/report/vuln/${VulnID}`, fetcher);

    useEffect(() => {
        if (data) {
            setVulnData(data.vuln);
            setHeadingText(data.vuln.VulnName);
            setDescriptionText(data.vuln.Description);
            setSeverity(data.vuln.Severity); // Set severity from fetched data
        }
    }, [data]);

    const handleHeadingChange = (event) => {
        setHeadingText(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescriptionText(event.target.value);
    };

    const handleSeverityChange = (severity) => {
        setSeverity(severity); // Update severity when it changes
    };

    const handleVulnDataChange = (data) => {
        console.log("New editor data:", data);
        setModified(true);
        setVulnData(data);
    };

    const handleSaveVuln = useCallback(() => {
        if (!modified) {
            console.log('No changes made');
            return;
        }
    
        console.log("Saving vuln data:", vulnData);
    
        const requestData = {
            VulnName: headingText,
            Description: descriptionText,
            Data: vulnData,
            Severity: severity // Include severity in the request body
        };
    
        fetch(`/api/report/vuln/${VulnID}/save`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
            .then(res => {
                if (res.ok) {
                    console.log('Vuln updated successfully');
                    mutate();
                    navigate(-1);
                } else {
                    throw new Error('Failed to update vuln');
                }
            })
            .catch(error => {
                console.error('Error updating vuln:', error);
            });
    }, [VulnID, vulnData, mutate, navigate, headingText, descriptionText, severity, modified]);
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
                <CustSeveritySelect Severity={severity} setSeverity={handleSeverityChange} /> {/* Pass handleSeverityChange as prop */}
            </Grid>
            <Typography>Click on the editor below before pressing the save button to confirm your changes</Typography>
            <CustRenderEditor onDataChange={handleVulnDataChange} initialContent={vulnData.Data} />
            <Grid container xs={12} justifyContent={'flex-end'}>
                <Button onClick={handleSaveVuln} variant='contained'>Save</Button>
                <Button onClick={() => navigate(-1)} variant='contained' color="error">Cancel</Button>
            </Grid>
            <CVSSCalculator />
        </Grid>
    );
}
