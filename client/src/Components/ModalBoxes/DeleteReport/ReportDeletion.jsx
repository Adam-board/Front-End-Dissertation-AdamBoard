import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Button, TextField } from '@mui/material';
import useSWR from 'swr';
import CircularProgress from '@mui/material/CircularProgress';
const fetcher = (url) => fetch(url).then((res) => res.json());



export default function ReportDeletion({handleModalClose}) {
  const [selectedReport, setSelectedReport] = useState();
  const [reportNameInput, setReportNameInput] = useState('');

  const { data, error, isLoading } = useSWR('/api/report', fetcher)


  const handleReportChange = (event) => {
    setSelectedReport(event.target.value);
  };

  const handleReportNameInputChange = (event) => {
    setReportNameInput(event.target.value);
  };

  const handleDeleteReport = () => {
    if (!selectedReport) return; // No report selected
    if (!reportNameInput) return; // No report name input


    const selectedReportData = data.reports.find(report => report.id === selectedReport);

    // Check if the report name input matches the selected report name
    if (selectedReportData && selectedReportData.Report === reportNameInput) {
    fetch(`/api/report/${selectedReport}/delete`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(res => {
    })
    .catch(error => {
      console.error("Error deleting report:", error);
      // Handle error as needed
    })
    .finally(() => {
      handleModalClose(); // Close the modal after deletion
    });
  };
}

  if (isLoading) return <CircularProgress />
 
  return (
    <div>
      <TextField
        label="Confirm Report Name"
        value={reportNameInput}
        onChange={handleReportNameInputChange}
        sx={{ margin: 3 }}
      />
      <FormControl component="fieldset">
        <RadioGroup  value={selectedReport} onChange={handleReportChange}>
          {data.reports.map((Report) => (
            <FormControlLabel key={Report.id} value={Report.id} control={<Radio />} label={Report.Report} />
          ))}
        </RadioGroup>
      </FormControl>
      <Button onClick={handleDeleteReport} disabled={!selectedReport}>Delete Report</Button>
    </div>
  );
}
