document.addEventListener("DOMContentLoaded", function() {
    // Custom Text Header //
    // ACSII slant font

    let custom_text_header = `
    <div class="custom-text-header">
        <pre>                     

  _______                     .       __                          
 '   /    .___    ___    ___  /       |    ___  .___    ___  ____ 
     |    /   \\ .'   ` .'   ` |       |   /   ` /   \\ .'   `    / 
     |    |   ' |----' |----' |  /\   /  |    | |   ' |----'  ,/  
     /    /     `.___, `.___, |,'  \\,'   `.__/| /     `.___, /__.'
                                                             `    
                                                
        </pre>
    </div>
    `;
    document.getElementById("login").innerHTML += custom_text_header;
});
