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
    nextButton.textContent = currentSectionIndex === sections.length - 1 ? 'Submit' : 'Next';
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