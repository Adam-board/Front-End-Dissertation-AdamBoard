import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const fetcher = (url) => fetch(url).then((res) => res.json());


//This handles the tabs which will appear for each section
export default function CustTabPanel(props) {
    const {value, index, endpoint, ComponentPass, topLevelEl, refresh } = props;
    const [refreshData, setRefreshData] = useState(false);
  
   // Use useEffect to watch for changes in the refresh prop
   useEffect(() => {
    if (refresh) {
        // Toggle the state to trigger a refresh
        setRefreshData(prevRefreshData => !prevRefreshData); 
  }
}, [refresh]);


    const { data, isLoading } = useSWR(endpoint, fetcher)
    if (isLoading) return <CircularProgress />
    return (
      <Grid item
        hidden={value !== index}
        sx={{bgcolor: '#e6e6e6', border:1, margin: 1}}
      >
        {value === index && (
          <Box sx={{ padding: 5}}>
            {props.children}
          
            {data[topLevelEl].map(entry =>
             <ComponentPass {...entry}/>
            )}
          </Box>
        )}
      </Grid>


    );
  }
  