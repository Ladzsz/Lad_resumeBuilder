//grabbing sections and buttons
const sections = document.querySelectorAll('.form-section');
let currentSectionIndex = 0;

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const submitButton = document.getElementById('submitButton')

//function to update the form
function updateFormSection() {
    sections.forEach((section, index) => {
    section.classList.toggle('active', index === currentSectionIndex);
    });
    prevButton.disabled = currentSectionIndex === 0;

    // If statement to make the submit button appear
    if (currentSectionIndex === sections.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'block'
    } else {
        nextButton.style.display = 'block';
        submitButton.style.display = 'none';
    }
}

//event listener for previous button
prevButton.addEventListener('click', () => {
    if (currentSectionIndex > 0) {
    currentSectionIndex--;
    updateFormSection();
    }
});

//event listener for next button
nextButton.addEventListener('click', () => {
    if (currentSectionIndex < sections.length - 1) {
    currentSectionIndex++;
    updateFormSection();
    }
});

//calling update forms
updateFormSection();

// Add dynamic Education fields
document.getElementById('addEducation').addEventListener('click', () => {
    const educationContainer = document.querySelector('.education-container');
    const newEntry = document.createElement('div');
    newEntry.classList.add('education-entry');

    newEntry.innerHTML = `
        <label for="school">School/University</label><br>
        <input type="text" name="school[]" required /><br><br>
        <label for="degree">Degree</label><br>
        <input type="text" name="degree[]" required /><br><br>
        <label for="graduation">Graduation Year</label><br>
        <input type="text" name="graduation[]" required /><br><br>
    `;

    educationContainer.appendChild(newEntry);
});

// Add dynamic Experience fields
document.getElementById('addExperience').addEventListener('click', () => {
    const experienceContainer = document.querySelector('.experience-container');
    const newEntry = document.createElement('div');
    newEntry.classList.add('experience-entry');

    newEntry.innerHTML = `
        <label for="jobTitle">Job Title</label><br>
        <input type="text" name="jobTitle[]" required /><br><br>
        <label for="company">Company</label><br>
        <input type="text" name="company[]" required /><br><br>
        <label for="years">Years of Experience</label><br>
        <input type="text" name="years[]" required /><br><br>
    `;

    experienceContainer.appendChild(newEntry);
});

// Add dynamic skills fields
document.getElementById('addSkills').addEventListener('click', () => {
    const skillsContainer = document.querySelector('.skill-container');
    const newEntry = document.createElement('div');
    newEntry.classList.add('skills-entry');

    newEntry.innerHTML = `
        <label for="Skills">Skills</label><br>
        <input type="text" id="skill" name="skill[]" required /><br><br>
    `;

    skillsContainer.appendChild(newEntry);
});

//submit function
function proccessInfo() {
    // Clear all items from localStorage
    localStorage.clear();

    // Grabbing inputs

    //contact
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    //education
    const school = document.getElementById('school').value;
    const degree = document.getElementById('degree').value;
    const graduation = document.getElementById('graduation').value;

    //work experience
    const jobTitle = document.getElementById('jobTitle').value;
    const company = document.getElementById('company').value;
    const years = document.getElementById('years').value;

    //skills
    const skill = document.getElementById('skill').value;

    //summary
    const Summary = document.getElementById('Summary').value;

    // Putting the user data into an object
    const Userdata = {
        Fullname: name,
        UserEmail: email,
        PhoneNumber: phone,
        UserSchool: school,
        UserDegree: degree,
        UserGraduation: graduation,
        JobName: jobTitle,
        CompanyName: company,
        YearsWorked: years,
        UserSkills: skill,
        UserSummary: Summary
    };

    // Storing object as json string
    localStorage.setItem('InputData', JSON.stringify(Userdata));

    //Linking to next page
    window.location.href = 'style.html';
}

// Event listener for submit button
document.getElementById('submitButton').addEventListener('click', () => {
    let validation = '';

    // Keep prompting until user types 'yes'
    while (validation !== "yes") {
        validation = prompt("Submit Info? (yes/no)").trim().toLowerCase();

        // If user cancels the prompt break out of the loop
        if (validation === null) {
            return null;
        }

        // If user enters no break out of loop and cancel
        if (validation === "no") {
            return null;
        }
    }

    // If the user typed "yes" proceed to process the info
    proccessInfo();
});