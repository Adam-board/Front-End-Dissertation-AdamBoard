import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Button, TextField } from '@mui/material';
import useSWR from 'swr';
import CircularProgress from '@mui/material/CircularProgress';
import {useNavigate, useParams} from "react-router-dom";
const fetcher = (url) => fetch(url).then((res) => res.json());



export default function VulnSelection({handleModalClose}) {
  const [selectedVulnTemplate, setSelectedVulnTemplate] = useState();
  const navigate = useNavigate();
  const {ReportID} = useParams();

  const { data, error, isLoading } = useSWR('/api/report/vulnTemplates', fetcher)

  const handleVulnTemplateChange = (event) => {
    setSelectedVulnTemplate(event.target.value);
  };



  const handleCreateReport = () => {
    //make sure the name is filled in, as well as the ID Make sure not Blank
    const body = {}
      body.VulnId = selectedVulnTemplate 
    fetch(
      `/api/report/${ReportID}/vuln/new/Template`, 
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
        <RadioGroup value={selectedVulnTemplate} onChange={handleVulnTemplateChange}>
          {data.vulnerabilities.map((vulnTemplate) => (
            <FormControlLabel key={vulnTemplate.id} value={vulnTemplate.id} control={<Radio />} label={vulnTemplate.VulnName} />
          ))}
        </RadioGroup>
      </FormControl>
      <Button onClick={handleCreateReport} disabled={!selectedVulnTemplate}>Insert Into Report</Button>
    </div>
  );
}