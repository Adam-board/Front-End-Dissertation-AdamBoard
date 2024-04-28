import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Button, TextField } from '@mui/material';
import useSWR from 'swr';
import CircularProgress from '@mui/material/CircularProgress';
const fetcher = (url) => fetch(url).then((res) => res.json());



export default function TemplateDeletion({handleModalClose}) {
  const [selectedTemplate, setSelectedTemplate] = useState();
  const [TemplateNameInput, setTemplateNameInput] = useState('');

  const { data, error, isLoading } = useSWR('/api/report/templates', fetcher)


  const handleTemplateChange = (event) => {
    setSelectedTemplate(event.target.value);
  };

  const handleTemplateNameInputChange = (event) => {
    setTemplateNameInput(event.target.value);
  };

  const handleDeleteTemplate = () => {
    if (!selectedTemplate) return; // No Template selected
    if (!TemplateNameInput) return; // No Template name input


    const selectedTemplateData = data.Templates.find(template => template.id === selectedTemplate);

    // Check if the Template name input matches the selected Template name
    if (selectedTemplateData && selectedTemplateData.TemplateName === TemplateNameInput) {
      fetch(`/api/report/templates/${selectedTemplate}/delete`, {
        method: "DELETE",
      })
      .then(res => {
        if (res.ok) {
          return res.json(); // If response is successful, parse JSON data
        } else {
          throw new Error('Failed to delete template'); // Throw an error for unsuccessful response
        }
      })
      .then(res => {
        console.log(res); // Log the deletion response
        // Optionally navigate to a different page or update state
      })
      .catch(error => {
        console.error("Error deleting Template:", error);
        // Handle error as needed
      })
      .finally(() => {
        handleModalClose(); // Close the modal after deletion
      });
    } else {
      console.error("Selected template name does not match input template name");
      // Handle error condition where template name does not match
    }
  };

  if (isLoading) return <CircularProgress />
 
  return (
    <div>
      <TextField
        label="Confirm Template Name"
        value={TemplateNameInput}
        onChange={handleTemplateNameInputChange}
        sx={{ margin: 3 }}
      />
      <FormControl component="fieldset">
        <RadioGroup  value={selectedTemplate} onChange={handleTemplateChange}>
          {data.Templates.map((template) => (
            <FormControlLabel key={template.id} value={template.id} control={<Radio />} label={template.TemplateName} />
          ))}
        </RadioGroup>
      </FormControl>
      <Button onClick={handleDeleteTemplate} disabled={!selectedTemplate}>Delete Template</Button>
    </div>
  );
}
