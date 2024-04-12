import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import CoronavirusIcon from '@mui/icons-material/Coronavirus'; //Vuln Tab
import BookmarksIcon from '@mui/icons-material/Bookmarks'; //Bookmarks Tab
import DescriptionIcon from '@mui/icons-material/Description'; //Set Template & Load Template

export default function CustTabs(props){
const {onChange, value} = props


return(
<Tabs value={value} onChange={onChange} centered>
<Tab icon={<DescriptionIcon />} value={0} label="Report"/>
<Tab icon={<CoronavirusIcon />} value={1} label="Vulnerabilities"/>
<Tab icon={<BookmarksIcon />} value={2} label="Audit Log"/>
</Tabs>
)}