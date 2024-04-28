import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Button, TextField } from '@mui/material';
import useSWR from 'swr';
import CircularProgress from '@mui/material/CircularProgress';
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function TemplateAddition({ handleModalClose }) {
  const [selectedReport, setSelectedReport] = useState();
  const [Title, setReportTitle] = useState(""); // State for the report title

  const handleTitleChange = (event) => {
    setReportTitle(event.target.value); // Update the report title state
  };

  const { data, error, isLoading } = useSWR('/api/report', fetcher)

  const handleReportChange = (event) => {
    setSelectedReport(event.target.value);
  };

  const handleAddTemplateReport = () => {

    if (!Title) return;
    const body = {};

    body.id = selectedReport
    body.TemplateName = Title
    fetch(
      `/api/report/templates/new`, 
      {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
      .then(res => res.json())
      .then(res =>{
        console.log(res); // Log the response
        handleModalClose();
      })
      .catch(error => {
        console.error("Error adding template:", error);
        // Handle error as needed
      });
  };

  if (isLoading) return <CircularProgress />

  return (
    <div>
        <TextField
        label="Report Title"
        value={Title}
        onChange={handleTitleChange}
        sx={{margin: 3}}
      />
      <FormControl component="fieldset">
        <RadioGroup  value={selectedReport} onChange={handleReportChange}>
          {data.reports.map((Report) => (
            <FormControlLabel key={Report.id} value={Report.id} control={<Radio />} label={Report.Report} />
          ))}
        </RadioGroup>
      </FormControl>
      <Button onClick={handleAddTemplateReport} disabled={!Title}>Create Template</Button>
    </div>
  );
}
