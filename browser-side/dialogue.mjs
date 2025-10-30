//* Dialogue
// Using <dialog> which contain generally a form 
// To open the dialog use showModal() method 
// close the dialog - click the ESC button
// Or click submittion form button, if the form got attribut method="dialog"
// Or if the button got the attribut formmethod="dialog"
// add attribut formnovalidate in submittion button if the dialog must be closed even if the dialog is not valid
// By default button in form is a submittion button <button>
// method close(value)

// When the dialog is closed
// If closed using ESC, cancel event is called first 
// The proprety of returnValue take value of the button clicked or the value of parameter passed on the close method / by default empty
