import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Button } from '@mui/material';
import useSWR from 'swr';
import CircularProgress from '@mui/material/CircularProgress';
import {useNavigate} from "react-router-dom";
const fetcher = (url) => fetch(url).then((res) => res.json());



export default function ReportSelection({handleModalClose}) {
  const [selectedReport, setSelectedReport] = useState();

  const { data, error, isLoading } = useSWR('/api/report', fetcher)

  const navigate = useNavigate();

  const handleReportChange = (event) => {
    setSelectedReport(event.target.value);
  };

  const handleLoadReport = () => {
    navigate(`Reports/${selectedReport}`)
    handleModalClose()
    
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
      <Button onClick={handleLoadReport} disabled={!selectedReport}>Select Report</Button>
    </div>
  );
}