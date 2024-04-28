import React, { useState } from 'react';
import {Button, TextField } from '@mui/material';
const fetcher = (url) => fetch(url).then((res) => res.json());



export default function TemplateAddition({ handleModalClose }) {
  const [Title, setReportTitle] = useState(""); // State for the report title


  const handleTitleChange = (event) => {
    setReportTitle(event.target.value); // Update the report title state
  };

  const handleAddTemplateReport = () => {
    // Make sure the title is filled in
    if (!Title) return;

    const body = {};

    body.TemplateName = Title
    body.id = ""
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
  return (
    <div>
       <TextField
        label="Report Title"
        value={Title}
        onChange={handleTitleChange}
        sx={{margin: 3}}
      />
      <Button onClick={handleAddTemplateReport}>Create Template</Button>
    </div>
  );
}
