import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Button, TextField } from '@mui/material';
import useSWR from 'swr';
import CircularProgress from '@mui/material/CircularProgress';
import {useNavigate} from "react-router-dom";
const fetcher = (url) => fetch(url).then((res) => res.json());



export default function TemplateSelection({handleModalClose}) {
  const [selectedTemplate, setSelectedTemplate] = useState("blank");
  const [Title, setReportTitle] = useState(""); // State for the report title

  const { data, isLoading } = useSWR('/api/report/templates', fetcher)

  const navigate = useNavigate();

  const handleTemplateChange = (event) => {
    setSelectedTemplate(event.target.value);
  };

  const handleTitleChange = (event) => {
    setReportTitle(event.target.value); // Update the report title state
  };

  const handleCreateReport = () => {
    //make sure the name is filled in, as well as the ID Make sure not Blank
    const body = {}
    body.title = Title
    if (selectedTemplate !== "blank"){
      body.templateId = selectedTemplate
    }
    if (body.title === ""){ delete body.title} 
    fetch(
      "/api/report/new", 
      {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }).then(res => res.json()).then(res =>{
      navigate(`../../Reports/${res.ReportID}`)
      handleModalClose()
      })
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
        <RadioGroup defaultValue="blank" value={selectedTemplate} onChange={handleTemplateChange}>
          <FormControlLabel key="blank" value="blank" control={<Radio />} label="Blank Report" />
          {data.Templates.map((template) => (
            <FormControlLabel key={template.id} value={template.id} control={<Radio />} label={template.TemplateName} />
          ))}
        </RadioGroup>
      </FormControl>
      <Button onClick={handleCreateReport} disabled={!selectedTemplate}>Create Report</Button>
    </div>
  );
}