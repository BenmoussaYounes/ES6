//* Single Page Application (SPA) with CSS 
// Single page application(SPA) is a page that display different content on the browser with out quiting the HTML page 

//* General Principal
// the different content are all present in the page with ids
// those contents are hided by default and displayed when navigating to them
// link to navigate to those contents <a href="#id">
// window.location="#id";

//* Navigation
// window.location 
// href if changed the document navigate to the new page
// methods : assign(URL) reload() replace(URL)
// location="URL" = location.href="URL" = location.asign("URL")
// Intern navigation when only the # part of the URL change 
// the document does not change, the brower scroll the page to the elemnt with correspoding ID
// this element will take too the peudo class CSS 
// then widnow emit the event hashchange wich take oldURL and new URL