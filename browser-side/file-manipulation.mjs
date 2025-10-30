//* File Manipulations

// Blob Data
// Blop (Binary Large Objects)
// an object that contain brut data ( not in js format )
// Blop data can be readed as a text or as a binary data
// text() a string containing a file
// arrayBuffer() a binary table
// Cree un Blop Blop(dataTable)
// dataTable containing ArrayBuffer and Blop

//* File Data 
// File give information about a file and allow to access it 
// File got the following propreties :
// name : name of file 
// size : size in octet
// type : type MIME
// Creating a File - File(dataTable, name, [,options])
// dataTable
// options

//* Reading a local file 
// JS can not read a local file on its own 
// we need to ask the user to be able to read the file using
/*
<input type="file"> select 1 file
<input type="file" multiple> select multiple files

Attribute accept = take a list of : audio/*, viedo/* image/*, media type 
Wich emit change on each changement of selection

DOM element correspond to files propreties
FileList :  pseudo table of object of type File
if only one file is selected means its the first one of the list
*/

//* Accessesing content of Blob/File with FileReader

// we can read the Blob or File asynch using FileReader
// FileReader: const reader= new FileReader();
// Attaching event functions 
// load, error, abort
// reader.onload = fnRapper / reader.addEventListener('load', fnRappel)

// Start the reading of file 
// reader.readAsText
// reader.readAsArrayBuffer(f)
// to abort the lecture we use reader.abort

// if an error occured while ready the FileReader emet an error event
// if the read is aborted fileReader emet abort 
// if the read is succssing the load event is emited and the result contain
// A String if its readed using readAsText
// A Binary table of ArrayBuffer if its readed using readAsArrayBuffer
// Reminder functions can be called using e.target which reference to FileReader

//* Saving a Blob/File
// Use FileSaver github.com/eligrey/FileSaver.js
// charge the file saver in an HTML Page
// save the file saveAs(f, fileName);
// - f is a Blop, File or URL
// no need for the file name if f is already a file with name
// MIME Types are text/plain, Json : application/json