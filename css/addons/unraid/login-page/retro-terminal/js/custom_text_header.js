document.addEventListener("DOMContentLoaded", function() {
    // Custom Text Header //
    // ACSII slant font

    let custom_text_header = `
    <div class="custom-text-header">
        <pre>                     

  ______             _       __                   
 /_  __/_______  ___| |     / /___ _________  ____
  / / / ___/ _ \\/ _ \\ | /| / / __ \`/ ___/ _ \\/_  /
 / / / /  /  __/  __/ |/ |/ / /_/ / /  /  __/ / /_
/_/ /_/   \\___/\\___/|__/|__/\\__,_/_/   \\___/ /___/
                                                
        </pre>
    </div>
    `;
    document.getElementById("login").innerHTML += custom_text_header;
});
