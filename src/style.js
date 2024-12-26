//grabbing sections and buttons
const sections = document.querySelectorAll('.form-sectionIMG');
let currentSectionIndex = 0;

const prevButton = document.getElementById('prevButton');

//function to update the form
function updateFormSection() {
    sections.forEach((section, index) => {
    section.classList.toggle('active', index === currentSectionIndex);
    });
    prevButton.disabled = currentSectionIndex === 0;
}