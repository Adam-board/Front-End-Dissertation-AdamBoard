import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Button, TextField } from '@mui/material';
import useSWR from 'swr';
import CircularProgress from '@mui/material/CircularProgress';
import {useNavigate} from "react-router-dom";
const fetcher = (url) => fetch(url).then((res) => res.json());



export default function VulnUpload({handleModalClose}) {
  const [SelectedVuln, setSelectedVuln] = useState();

  const { data, error, isLoading } = useSWR('/api/report/templates', fetcher)

  const navigate = useNavigate();

  const handleTemplateChange = (event) => {
    setSelectedVuln(event.target.value);
  };


  const handleCreateReport = () => {
    //make sure the name is filled in, as well as the ID Make sure not Blank
    const body = {}
      body.templateId = SelectedVuln
    fetch(
      "/api/report/new", 
      {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }).then(res => res.json()).then(res =>{
      navigate(`Reports/${res.ReportID}`)
      handleModalClose()
      })
  };

  if (isLoading) return <CircularProgress />
 
  return (
    <div>
      <FormControl component="fieldset">
        <RadioGroup defaultValue="blank" value={SelectedVuln} onChange={handleTemplateChange}>
          {data.Templates.map((template) => (
            <FormControlLabel key={template.id} value={template.id} control={<Radio />} label={template.TemplateName} />
          ))}
        </RadioGroup>
      </FormControl>
      <Button onClick={handleCreateReport} disabled={!SelectedVuln}>Upload into Databank</Button>
    </div>
  );
}