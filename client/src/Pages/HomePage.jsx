import { Grid, Typography } from "@mui/material";


export default function HomePage() {



return (

<Grid container xs={10}
sx={{bgcolor: '#e6e6e6', border:1, margin: 2, marginTop: 5}}>
<Typography variant="h2" sx={{padding: 5}} justifyContent={"center"}>Welcome! This page contains information on how to use the tool:</Typography>
<Typography variant="h3" sx={{paddingLeft: 5}} justifyContent={"center"}>First things first, if you want to create a new report or already have one to load up from using this tool previously, then use the new or load report buttons!</Typography>
<Typography variant="h3" sx={{paddingLeft: 5}} justifyContent={"center"}>Save time by using the integrated vulnerability databank that lets you store descriptions of vulnerabilities for later use. Lastly, please modify the tool as required to meet your organisations (or personal) requirements, Enjoy!</Typography>
      </Grid>


);
}