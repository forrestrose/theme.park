
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                     __                             ___       __  
  ______              _____ __                  
 /_  __/_______  ___ / ___// /_  ____ _________ 
  / / / ___/ _ \/ _ \\__ \/ __ \/ __ `/ ___/ _ \
 / / / /  /  __/  __/__/ / / / / /_/ / /  /  __/
/_/ /_/   \___/\___/____/_/ /_/\__,_/_/   \___/ 
                                                
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
