import React from "react"

import CustToolBar from "../ToolBar/CustToolBar"
import CustToolBarButtons from "../ToolBar/CustToolBarButtons"
import { IconButton } from "@mui/material"
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';


export default function CustRenderEditor(props) {
const {} = props


return(

<React.Fragment>
    <CustToolBar Heading="Executive Summary">
    <IconButton> <ArrowBackIosNewTwoToneIcon/></IconButton>
  </CustToolBar>

</React.Fragment>


)


}