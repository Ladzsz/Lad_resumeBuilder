
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

        const summary = document.getElementById('Summary').value;

        // Grabbing dynamic inputs (Education & Experience & Skills)
        const schools = Array.from(document.querySelectorAll('input[name="school[]"]')).map(input => input.value);
        const degrees = Array.from(document.querySelectorAll('input[name="degree[]"]')).map(input => input.value);
        const graduations = Array.from(document.querySelectorAll('input[name="graduation[]"]')).map(input => input.value);

        const jobTitles = Array.from(document.querySelectorAll('input[name="jobTitle[]"]')).map(input => input.value);
        const companies = Array.from(document.querySelectorAll('input[name="company[]"]')).map(input => input.value);
        const years = Array.from(document.querySelectorAll('input[name="years[]"]')).map(input => input.value);

        const skills = Array.from(document.querySelectorAll('input[name="skill[]"]')).map(input => input.value);

        // Putting user data into an object
        const userData = {
            fullName: name,
            userEmail: email,
            phoneNumber: phone,
            userSummary: summary,
            userSkills: skills.map(skill => ({
                skill: skill 
            })),
            userEducation: schools.map((school, index) => ({
                school: school,
                degree: degrees[index] || '',
                graduation: graduations[index] || ''
            })),
            userExperience: jobTitles.map((jobTitle, index) => ({
                jobTitle: jobTitle,
                company: companies[index] || '',
                yearsWorked: years[index] || ''
            }))
        };

        // Storing object as JSON string
        localStorage.setItem('InputData', JSON.stringify(userData));

        // Redirecting to the next page
        window.location.href = 'style.html';
    }

    // Event listener for submit button
    submitButton.addEventListener('click', (event) => {
        // Prevent the form from submitting (if it's inside a form)
        event.preventDefault();

        // Prompt user for confirmation
        const validation = prompt("Submit Info? (yes/no)").trim().toLowerCase();

        //ensure user enters yes or no
        if (validation !== 'yes' && validation !== 'no') {
            alert("Please type 'yes' or 'no'.");
        }

        // Check if the user typed 'yes'
        if (validation === "yes") {
            processInfo();
            console.log("going to next page")
        } else if (validation === "no" || validation === null) {
            // If 'no' or cancelled, just return without doing anything
            console.log("Submission cancelled.");
        }
    });
});
