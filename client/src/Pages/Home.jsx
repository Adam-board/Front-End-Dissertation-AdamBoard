import Grid from '@mui/material/Grid'; // Grid version 1

//Components related to the Tabs
import CustTabPanel from '../Components/Tabs/TabPanel';
import CustForm from '../Components/Tabs/CustForm';
import CustAutoComplete from '../Components/SideBar/AutoComplete';
//Components related to the Editor Page
import CustSection from '../Components/Editor/Section';




export default function HomePage(props) {
const {value} = props

    return(
    
        <Grid item xs={10}>
        <CustTabPanel value={value} index={0}>
           <CustForm heading='Heading' headingTitle="Enter Section Heading" description="SectionDescription" descriptionTitle="Enter brief description of what this section is about" /> 

           <CustSection >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</CustSection> 
           <CustSection />
           <CustSection />
        </CustTabPanel>

        <CustTabPanel value={value} index={1}> 
            <CustForm heading='Vuln' headingTitle="Enter Vulnerability Name" description="VulnDescription" descriptionTitle="Enter brief description of the vulnerability/Security concern" /> 
            <CustSection />
            </CustTabPanel>

        <CustTabPanel value={value} index={2}> 
            <CustForm heading='Audit' headingTitle="Enter Audit Log" description="AuditDescription" descriptionTitle="Enter brief description of what this audit log contains" /> 
            <CustSection />
        </CustTabPanel>
      </Grid>
    
    
    
    
    )
    
    
    
    }