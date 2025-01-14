// script.js

// Select button and project list container
const startProjectBtn = document.getElementById('start-project-btn');
const projectList = document.getElementById('project-list');

// Event listener for "Start New Project" button
startProjectBtn.addEventListener('click', () => {
  // Create a div for the new project
  const projectBox = document.createElement('div');
  projectBox.classList.add('project');

  // Create an input for naming the project
  const projectInput = document.createElement('input');
  projectInput.type = 'text';
  projectInput.classList.add('project-name-input');
  projectInput.placeholder = 'Enter project name...';

  // Add input to projectBox
  projectBox.appendChild(projectInput);

  // Event listener to handle when a name is entered and clicked
  projectInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && projectInput.value.trim() !== '') {
      const projectName = projectInput.value.trim();

      // Turn input into a clickable project box
      projectBox.innerHTML = projectName;

      // Add click functionality to go to a new page
      projectBox.addEventListener('click', () => {
        // Navigate to a new page (for now, it could be a placeholder)
        window.location.href = `project.html?name=${encodeURIComponent(projectName)}`;
      });
    }
  });

  // Add the projectBox to the project list
  projectList.appendChild(projectBox);
});
