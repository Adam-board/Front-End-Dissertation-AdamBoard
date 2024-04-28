//The main imports to ensure everything is treated as React 
import * as React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
//Custom components imported to make everything neater
import HomePage from './Pages/HomePage';
import ReportPage from './Pages/ReportPage';
import Render404 from './Pages/Render404';
import EditorPageVuln from './Pages/EditorPageVuln';
import EditorPage from './Pages/EditorPage';
//Components related to the ToolBar
import CustToolBarButtons from './Components/ToolBar/CustToolBarButtons';
import CustToolBar from './Components/ToolBar/CustToolBar';
//Components related to the Tabs
import CustTabs from './Components/Tabs/CustTabs';
//Import all buttons used on sidebar
import CustSideBar from './Components/SideBar/CustSideBar';
//Import of all ToolTip Descriptions
import * as Desc from './Language/ToolTipDesc'

function App() {  
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {setValue(newValue);};

  return(
  <React.Fragment>
<BrowserRouter>
      <CustToolBar Heading ={<Link style={{ textDecoration: 'none', color:"white" }} to="/">Report Writing Tool</Link>}>
        <CustToolBarButtons onClick={null} arrowPlacement='bottom-end' tooltip={Desc.ExportVulnToJira}>Export Vulnerabilities To Jira</CustToolBarButtons>
        <CustToolBarButtons onClick={null} arrowPlacement='bottom-start' tooltip={Desc.ExportReport}>Export Report (Word) </CustToolBarButtons>
      </CustToolBar>
      <CustTabs onChange={handleChange} value={value}/>

{/* This section of code handles switching out the components and passing along the id of both Reports and Editors */} 
      <Routes>
        <Route path="/" element={<CustSideBar value={value}> <HomePage/> </CustSideBar>} />
        <Route path="Reports/:ReportID" element={<CustSideBar value={value}> <ReportPage value={value}/> </CustSideBar>} />
        <Route path="/Heading/:SectionID" element={<CustSideBar value={value}><EditorPage /></CustSideBar>} />
        <Route path="/Vuln/:VulnID"  element={<CustSideBar value={value}><EditorPageVuln /></CustSideBar>}/>
        <Route path="/Note/:NoteID" element={<CustSideBar value={value}><EditorPage /></CustSideBar>} />
        <Route path="*" element={<Render404 />} />
      </Routes>  
     </BrowserRouter>     
  </React.Fragment>
  );}
export default App 