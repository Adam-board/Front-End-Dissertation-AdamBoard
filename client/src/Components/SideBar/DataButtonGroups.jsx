//Importing all the functionality for each button
import NewReportModal from '../ModalBoxes/NewReport/NewReportModal';
import LoadReportModal from '../ModalBoxes/LoadReport/LoadReportModal';
import DeleteReportModal from '../ModalBoxes/DeleteReport/DeleteReportModal';
import SaveTemplateModal from '../ModalBoxes/SaveReportTemplate/SaveTemplateModal';
import DeleteTemplateModal from '../ModalBoxes/RemoveReportTemplate/DeleteTemplateModal';
import RemoveVulnDatabankModal from '../ModalBoxes/RemoveVulnFromDatabank/RemoveVulnDatabankModal'
import InsertVulnFromDatabankModal from '../ModalBoxes/InsertVulnFromDatabank/InsertVulnDatabankModal';
import UploadVulnToDatabankModal from '../ModalBoxes/UploadVulnIntoDatabank/UploadVulnDatabank';

export const ButtonsReport = [
<NewReportModal/>,
<LoadReportModal/>,
<DeleteReportModal/>,
<SaveTemplateModal/>,
<DeleteTemplateModal/>
];

export const ButtonsVulnDatabank = [
<InsertVulnFromDatabankModal />,
<UploadVulnToDatabankModal />,
<RemoveVulnDatabankModal />
];


