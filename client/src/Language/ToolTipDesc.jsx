//This file contains all the tooltip descriptions to understand each button's functionality

//Report Options Button Descriptions
export const NewReport = `Begin a new report with the default template of section headings displayed automatically and ready to edit. 
                  Saving a new default report template will overrite the one that is currently written in when a new report is started. 
                  If you have unsaved changes these will not be saved so be careful as you could lose a lot of work!`

export const LoadReport = `Load a previously worked on report to continue from when it was last saved.`
export const SaveReport = `Save all the hard work put into the report. Make sure to save regularly!`
export const LoadReportTemplate = `Load a template of headings that have been created and saved previously.`
export const SaveReportTemplate = `Save your current template so it can be loaded again for later use!`
export const SaveDefaultTemplate = `Save your currrent template as the default template when "New Report" is pressed!`

//Vulnerability Options Button Descriptions
export const RemoveVulnFromDatabank = `Remove a vulnerability from the databank.`
export const ImportVulnDatabank = `Import a list of already created vulnerability descriptions and severity ratings from one server to another server!`
export const InsertVulnFromDatabank = `Add a vulnerability to the report directly from the databank to speed up the process!`
export const LoadVulnDatabank = `Load a previously written databank that is contained within storage of the server.`
export const SaveVulnDatabank = `Save the currently working vulnerability databank onto the server's storage to be used at a later date.`

//Audit Options Button Descriptions
export const ImportAuditLog = `Import the audit log of another report into the report currently being worked on.`

//Buttons in Toolbar
export const ExportVulnToJira = `Export all of the vulnerabilities into a list of tickets that work inside of a Jira board, this can then be imported into other organisation's Jira boards. Each ticket is categorised by its severity raiting. `
export const ExportReport = `Export all of the sections and vulnerabilities into a PDF that can be reviewed and downloaded by the user. The report will use a default styling for when the report is exported, this will be changed in future!`
