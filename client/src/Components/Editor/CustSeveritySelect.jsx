import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';

export default function CustSeveritySelect(props) {
    const { Severity, setSeverity } = props;

    const handleChange = (event) => {
        setSeverity(event.target.value);
    };

    return (
        <Grid item xs={0.7} sx={{ bgcolor: 'white', marginTop: 2 }}>
            <FormControl fullWidth>
                <InputLabel>Severity</InputLabel>
                <Select
                    value={Severity}
                    onChange={handleChange}
                    variant='filled'
                >
                    <MenuItem sx={{ color: '#c00000' }} value={"Critical"}>Critical</MenuItem>
                    <MenuItem sx={{ color: '#ff0000' }} value={"High"}>High</MenuItem>
                    <MenuItem sx={{ color: '#ed7d31' }} value={"Medium"}>Medium</MenuItem>
                    <MenuItem sx={{ color: '#ffc000' }} value={"Low"}>Low</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    );
}
