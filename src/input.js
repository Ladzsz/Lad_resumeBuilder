//grabbing sections and buttons
const sections = document.querySelectorAll('.form-section');
let currentSectionIndex = 0;

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

//function to update the form
function updateFormSection() {
    sections.forEach((section, index) => {
    section.classList.toggle('active', index === currentSectionIndex);
    });
    prevButton.disabled = currentSectionIndex === 0;

    // If statement to make the buttons class submit when it becomes submit
    if (currentSectionIndex === sections.length - 1) {
        nextButton.textContent = 'Submit';
        nextButton.classList.add('submit');

        // Submit button event listener
        nextButton.addEventListener('click', () => {
            // Clear all items from localStorage
            localStorage.clear();

            // Grabbing inputs

            //contact
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            
            //education
            const school = document.getElementById('school');
            const degree = document.getElementById('degree');
            const graduation = document.getElementById('graduation');

            //work experience
            const jobTitle = document.getElementById('jobTitle');
            const company = document.getElementById('company');
            const years = document.getElementById('years');

            //skills
            const skill = document.getElementById('skill');

            //summary
            const Summary = document.getElementById('Summary');

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
            
        });
    } else {
        nextButton.textContent = 'Next';
        nextButton.classList.remove('submit');
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
    } else {
    // Submit the form
    document.getElementById('resumeForm').submit();
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