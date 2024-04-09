import Autocomplete  from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";

export default function CustAutoComplete(props) {

const {Options, value, Num, title } = props



return(


    <Autocomplete
    disablePortal
    hidden={value !==  Num}
    options={Options}
    renderInput={(params) => <TextField {...params} label={title} />} />


)


}