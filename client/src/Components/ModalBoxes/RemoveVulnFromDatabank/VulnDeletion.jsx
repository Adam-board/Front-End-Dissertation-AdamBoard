import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Button, TextField } from '@mui/material';
import useSWR from 'swr';
import CircularProgress from '@mui/material/CircularProgress';
const fetcher = (url) => fetch(url).then((res) => res.json());



export default function VulnDeletion({handleModalClose}) {
  const [selectedVulnTemplate, setSelectedVulnTemplate] = useState();
  const [VulnNameInput, setVulnNameInput] = useState('');

  const { data, error, isLoading } = useSWR('/api/report/vulnTemplates', fetcher)

  console.log(data)

  const handleVulnChange = (event) => {
    setSelectedVulnTemplate(event.target.value);
  };

  const handleVulnNameInputChange = (event) => {
    setVulnNameInput(event.target.value);
  };

  const handleDeleteVuln = () => {
    if (!selectedVulnTemplate) return; // No Vuln selected
    if (!VulnNameInput) return; // No Vuln name input


    const selectedVulnTemplateData = data.vulnerabilities.find(vulnerabilities => vulnerabilities.id === selectedVulnTemplate);

    // Check if the Vuln name input matches the selected Vuln name
    if (selectedVulnTemplateData && selectedVulnTemplateData.VulnName === VulnNameInput) {
      fetch(`/api/report/vuln/${selectedVulnTemplate}/delete`, {
        method: "DELETE",
      })
      .then(res => {
        if (res.ok) {
          return res.json(); // If response is successful, parse JSON data
        } else {
          throw new Error('Failed to delete Vuln'); // Throw an error for unsuccessful response
        }
      })
      .then(res => {
        console.log(res); // Log the deletion response
        // Optionally navigate to a different page or update state
      })
      .catch(error => {
        console.error("Error deleting Vuln:", error);
        // Handle error as needed
      })
      .finally(() => {
        handleModalClose(); // Close the modal after deletion
      });
    } else {
      console.error("Selected Vuln name does not match input Vuln name");
      // Handle error condition where Vuln name does not match
    }
  };

  if (isLoading) return <CircularProgress />
 
  return (
    <div>
      <TextField
        label="Confirm Vuln Name"
        value={VulnNameInput}
        onChange={handleVulnNameInputChange}
        sx={{ margin: 3 }}
      />
      <FormControl component="fieldset">
        <RadioGroup  value={selectedVulnTemplate} onChange={handleVulnChange}>
          {data.vulnerabilities.map((VulnTemplates) => (
            <FormControlLabel key={VulnTemplates.id} value={VulnTemplates.id} control={<Radio />} label={VulnTemplates.VulnName} />
          ))}
        </RadioGroup>
      </FormControl>
      <Button onClick={handleDeleteVuln} disabled={!selectedVulnTemplate}>Delete Vuln</Button>
    </div>
  );
}
