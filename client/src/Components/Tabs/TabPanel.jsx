import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import useSWR from 'swr';
import CircularProgress from '@mui/material/CircularProgress';

const fetcher = (url) => fetch(url).then((res) => res.json());


//This handles the tabs which will appear for each section
export default function CustTabPanel(props) {
    const {value, index, endpoint, ComponentPass, topLevelEl} = props;
  
    const { data, error, isLoading } = useSWR(endpoint, fetcher)
    //setup useswr on the enpoint variable, endpoint must return standard list
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
  