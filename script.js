document.addEventListener("DOMContentLoaded", () => {
    // Get the start project button and container for project boxes
    const button = document.getElementById("start-project-btn");
    const container = document.getElementById("project-container");

    // Check if both elements exist
    if (!button || !container) {
        console.error("Button or container not found in the DOM!");
        return; // Exit if elements are not found
    }

    // Add a click event listener to the button
    button.addEventListener("click", () => {
        // Create the new project box container
        const projectBox = document.createElement("div");
        projectBox.className = "project-box"; // Add class for styling

        // Create the input field for the project name
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Enter project name";
        input.classList.add("project-input");

        // Create the save button
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save Name";

        // Add functionality to the save button
        saveButton.addEventListener("click", () => {
            const projectName = input.value || "Untitled Project"; // Default if no name is entered
            input.disabled = true; // Disable the input field after saving the name
            projectBox.classList.add("project-box-active"); // Style the box

            // Apply dynamic styles to the project box
            projectBox.style.border = "3px solid #004085";
            projectBox.style.backgroundColor = "#d1ecf1";
            projectBox.style.color = "#004085";
            projectBox.style.fontSize = "1.2em";
            projectBox.style.padding = "15px";
            projectBox.style.textAlign = "center";
            projectBox.style.width = "90%";
            projectBox.style.margin = "0 auto";

            // Remove the input and save button after saving
            projectBox.innerHTML = `<span>${projectName}</span>`;  // Set the project name

            // Create the "View Project" link dynamically
            const viewProjectLink = document.createElement("a");
            viewProjectLink.href = `project-page.html?name=${encodeURIComponent(projectName)}`;  // Link to the project details page
            viewProjectLink.textContent = "View Project";
            viewProjectLink.classList.add("view-project-link");

            // Append the "View Project" link to the project box
            projectBox.appendChild(viewProjectLink);

            // (Optional) Create a banner for feedback
            const banner = document.createElement("div");
            banner.textContent = `Project "${projectName}" Saved!`; // Display project name
            banner.classList.add("project-banner");
            document.body.appendChild(banner);

            // Optionally, set a timeout to remove the banner after a few seconds
            setTimeout(() => {
                banner.remove();
            }, 3000);
        });

        // Append input and save button to the project box
        projectBox.appendChild(input);
        projectBox.appendChild(saveButton);

        // Append the project box to the container
        container.appendChild(projectBox);
    });
});

// project-page.html
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const projectName = params.get("name") || "Untitled Project"; // Default if no name

    const projectTitle = document.getElementById("project-title");
    if (projectTitle) {
        projectTitle.textContent = `Project: ${projectName}`;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Get all the checkboxes
    const researchCheckbox = document.getElementById("research");
    const planCheckbox = document.getElementById("plan");
    const writeCheckbox = document.getElementById("write");

    // Load saved state from localStorage
    if (localStorage.getItem("research")) {
        researchCheckbox.checked = JSON.parse(localStorage.getItem("research"));
    }
    if (localStorage.getItem("plan")) {
        planCheckbox.checked = JSON.parse(localStorage.getItem("plan"));
    }
    if (localStorage.getItem("write")) {
        writeCheckbox.checked = JSON.parse(localStorage.getItem("write"));
    }

    // Save the state to localStorage when the checkboxes are changed
    researchCheckbox.addEventListener("change", () => {
        localStorage.setItem("research", researchCheckbox.checked);
    });

    planCheckbox.addEventListener("change", () => {
        localStorage.setItem("plan", planCheckbox.checked);
    });

    writeCheckbox.addEventListener("change", () => {
        localStorage.setItem("write", writeCheckbox.checked);
    });
});

let projects = [];  // Array to store projects

// Function to start a new project
document.getElementById('start-project-btn').addEventListener('click', () => {
  const projectName = prompt("Enter project name:");  // Prompt to enter the project name
  if (projectName) {
    const newProject = {
      id: Date.now().toString(),  // Unique ID for the project based on timestamp
      name: projectName
    };
    projects.push(newProject);  // Add the new project to the array
    saveProjects(projects);  // Save the updated list of projects to localStorage
    displayProjects();  // Re-render the project list
  }
});

// Function to save projects to localStorage
function saveProjects(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
}

// Function to display all projects in the container
function displayProjects() {
  const projectContainer = document.getElementById('project-container');
  projectContainer.innerHTML = '';  // Clear existing projects

  projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-item');
    projectDiv.innerHTML = `
      <p>${project.name}</p>
      <button onclick="deleteProject('${project.id}')">Delete Project</button>
    `;
    projectContainer.appendChild(projectDiv);  // Append the project to the container
  });
}

// Function to delete a project by ID
function deleteProject(projectId) {
  // Filter out the project by its ID
  projects = projects.filter(project => project.id !== projectId);

  // Save the updated project list and re-render the projects
  saveProjects(projects);
  displayProjects();
}

// Load projects from localStorage when the page loads
window.onload = function() {
  const savedProjects = JSON.parse(localStorage.getItem('projects'));
  if (savedProjects) {
    projects = savedProjects;  // Restore projects from localStorage
    displayProjects();  // Display the restored projects
  }
};
