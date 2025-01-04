//defining htmlcontent
let htmlContent = "";

//TEMPLATE ONE STYLES
// Define styles in a JavaScript variable
const customStyles = `
/*styling body and html*/
body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #A49A91;
}

.simple-info {
    font-weight: bold;
    text-align: center;
}

/*styling the contact*/
#contactSec {
    text-align: center;
    background-color: #7C7368;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    padding: 20px;
}

#contactSec2 {
    display: flex;
    gap: 25px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    border-bottom: solid 1px black;
    margin-bottom: 20px;
}

/*styling education*/
#educationSec {
    display: flex;
    gap: 25px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    flex-direction: column;
    border-bottom: solid 1px black;
    margin-bottom: 20px;
}

/*styling work*/
#workSec {
    display: flex;
    gap: 25px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    flex-direction: column;
    border-bottom: solid 1px black;
    margin-bottom: 20px;
}

/*styling skills sec*/
#skillsSec {
    text-align: center;
    display: grid;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    flex-direction: column;
    border-bottom: solid 1px black;
    margin-bottom: 20px;
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: auto 100px;
}

/*styling summary sec*/
#summarySec {
    text-align: center;
    overflow-wrap: break-word;
    margin: 10px;
}
`;

// TEMPLATE ONE function
function template1() {
    // Define the HTML content
    htmlContent = `
      <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Your Resume</title>
            <link rel="stylesheet" href="style.css">
            <style>
            ${customStyles}
            </style>
        </head>
        <body>
            <!--contact area-->
            <div id="contactSec">
                <h1 id="name" class="text"></h1>
            </div>

            <h2 class="simple-info">Contact</h2>
            
            <div id="contactSec2">
                <h3 id="phonenumber" class="text"></h3>
                <h3 id="email" class="text"></h3>
            </div>

            <!--education area-->
            <h2 class="simple-info">Education</h2>
            <div id="educationSec">
                <h3 id="school" class="text"></h3>
                <h3 id="degree" class="text"></h3>
                <h3 id="graduation" class="text"></h3>
            </div>

            <!--work area-->
            <h2 class="simple-info">Work Experience</h2>
            <div id="workSec">
                <h3 id="jobtitle" class="text"></h3>
                <h3 id="company" class="text"></h3>
                <h3 id="years" class="text"></h3>
            </div>

            <!--Skills area-->
            <h2 class="simple-info">Skills</h2>
            <div id="skillsSec">
                <h3 id="skills" class="text"></h3>
            </div>

            <!--summary area-->
            <h2 class="simple-info">Summary</h2>
            <div id="summarySec" class="text">
                <h3></h3>
            </div>
        </body>
        </html>
    `;

    console.log("HTML content generated!");
}

// Download function
function downloadResume() {
    if (htmlContent) {
        // Create a Blob with the HTML content
        const blob = new Blob([htmlContent], { type: 'text/html' });
  
        // Generate a temporary URL for the Blob
        const url = URL.createObjectURL(blob);
  
        // Create an anchor element to trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'YourResume.html'; // The name of the downloaded file
  
        // Trigger the download by programmatically clicking the anchor
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
  
        // Release the object URL
        URL.revokeObjectURL(url);
        console.log("HTML file downloaded!");
    } else {
    alert("Please select a template.");
    }
}

// Event listeners for images and download button
document.getElementById('downloadBTN').addEventListener('click', () => {
    downloadResume();
});

document.getElementById('templateONE').addEventListener('click', () => {
    template1();
});