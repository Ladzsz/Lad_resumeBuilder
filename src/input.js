
// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Grabbing sections and buttons
    const sections = document.querySelectorAll('.form-section');
    let currentSectionIndex = 0;

    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const submitButton = document.getElementById('submitButton');

    // Function to update the form section
    function updateFormSection() {
        sections.forEach((section, index) => {
            section.classList.toggle('active', index === currentSectionIndex);
        });
        prevButton.disabled = currentSectionIndex === 0;

        // Show/hide submit and next buttons based on the current section
        if (currentSectionIndex === sections.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'block';
        } else {
            nextButton.style.display = 'block';
            submitButton.style.display = 'none';
        }
    }

    // Event listener for the previous button
    prevButton.addEventListener('click', () => {
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
            updateFormSection();
        }
    });

    // Event listener for the next button
    nextButton.addEventListener('click', () => {
        if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
            updateFormSection();
        }
    });

    // Call updateFormSection initially
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

    // Add dynamic Skills fields
    document.getElementById('addSkills').addEventListener('click', () => {
        const skillsContainer = document.querySelector('.skill-container');
        const newEntry = document.createElement('div');
        newEntry.classList.add('skills-entry');

        newEntry.innerHTML = `
            <label for="Skill">Skills</label><br>
            <input type="text" id="skill" name="skill[]" required /><br><br>
        `;

        skillsContainer.appendChild(newEntry);
    });

    // Submit function
    function processInfo() {
        // Clear all items from localStorage
        localStorage.clear();

        // Grabbing inputs
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        const school = document.getElementById('school').value;
        const degree = document.getElementById('degree').value;
        const graduation = document.getElementById('graduation').value;

        const jobTitle = document.getElementById('jobTitle').value;
        const company = document.getElementById('company').value;
        const years = document.getElementById('years').value;

        const skill = document.getElementById('skill').value;

        const summary = document.getElementById('Summary').value;

        // Putting user data into an object
        const userData = {
            fullName: name,
            userEmail: email,
            phoneNumber: phone,
            userSchool: school,
            userDegree: degree,
            userGraduation: graduation,
            jobName: jobTitle,
            companyName: company,
            yearsWorked: years,
            userSkills: skill,
            userSummary: summary
        };

        // Storing object as JSON string
        localStorage.setItem('InputData', JSON.stringify(userData));

        // Redirecting to the next page
        window.location.href = 'style.html';
    }

    // Event listener for submit button
    submitButton.addEventListener('click', () => {
        let validation = '';

        while (validation !== "yes") {
            validation = prompt("Submit Info? (yes/no)").trim().toLowerCase();

            if (validation === null || validation === "no") {
                return;
            }
        }

        processInfo();
    });
});
