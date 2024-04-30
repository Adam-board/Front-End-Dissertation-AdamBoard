import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Button } from '@mui/material';
import useSWR from 'swr';
import CircularProgress from '@mui/material/CircularProgress';
const fetcher = (url) => fetch(url).then((res) => res.json());



export default function ReportSelectionWord({handleModalClose}) {
  const [selectedReport, setSelectedReport] = useState();

  const { data, isLoading } = useSWR('/api/report', fetcher)


  const handleReportChange = (event) => {
    setSelectedReport(event.target.value);
  };

  const handleExportReport = () => {
    const body = {}
    body.ReportId = selectedReport
  fetch(
    `/api/report/exportword`, 
    {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }).then(res => res.json()).then(res =>{
      handleModalClose()
    })
};



  if (isLoading) return <CircularProgress />
 
  return (
    <div>
      <FormControl component="fieldset">
        <RadioGroup  value={selectedReport} onChange={handleReportChange}>
          {data.reports.map((Report) => (
            <FormControlLabel key={Report.id} value={Report.id} control={<Radio />} label={Report.Report} />
          ))}
        </RadioGroup>
      </FormControl>
      <Button 
        onClick={handleExportReport} 
        orientation="vertical"
        aria-label="Vertical button group"
        variant="contained"
        disableElevation
        fullWidth 
        disabled={!selectedReport}>Select Report</Button>
    </div>
  );
}