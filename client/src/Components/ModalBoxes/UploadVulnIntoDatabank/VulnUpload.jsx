import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Button} from '@mui/material';
import useSWR from 'swr';
import CircularProgress from '@mui/material/CircularProgress';
import {useParams} from "react-router-dom";
const fetcher = (url) => fetch(url).then((res) => res.json());



export default function VulnUpload({handleModalClose}) {
  const [SelectedVuln, setSelectedVuln] = useState();

  const {ReportID} = useParams();

  const { data, isLoading } = useSWR(`/api/report/${ReportID}/vulns`, fetcher)

  const handleVulnChange = (event) => {
    setSelectedVuln(event.target.value);
  };


  const handleCreateReport = () => {
    //make sure the name is filled in, as well as the ID Make sure not Blank
    const body = {}
      body.VulnId = SelectedVuln
    fetch(
      `/api/report/${ReportID}/vuln/insertDatabank`, 
      {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }).then(res => res.json()).then(res =>{
        console.log(res)
      handleModalClose()
      })
  };

  if (isLoading) return <CircularProgress />
 
  return (
    <div>
      <FormControl component="fieldset">
        <RadioGroup value={SelectedVuln} onChange={handleVulnChange}>
          {data.vulns.map((Vuln) => (
            <FormControlLabel key={Vuln.id} value={Vuln.id} control={<Radio />} label={Vuln.VulnName} />
          ))}
        </RadioGroup>
      </FormControl>
      <Button onClick={handleCreateReport} disabled={!SelectedVuln}>Upload into Databank</Button>
    </div>
  );
}