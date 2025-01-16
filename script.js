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

document.addEventListener("DOMContentLoaded", () => {
    const startProjectButton = document.getElementById("start-project-btn");
    const projectContainer = document.getElementById("project-container");

    // Load saved projects from localStorage
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    savedProjects.forEach((project) => {
        addProjectToDashboard(project.name, project.id);
    });

    // Function to add a project to the dashboard
    function addProjectToDashboard(projectName, projectId = Date.now()) {
        const projectBox = document.createElement("div");
        projectBox.classList.add("project-box");
        projectBox.dataset.id = projectId; // Save ID for deletion

        // Project name
        const projectTitle = document.createElement("span");
        projectTitle.textContent = projectName || "Untitled Project";

        // View project button
        const viewButton = document.createElement("button");
        viewButton.textContent = "View Project";
        viewButton.addEventListener("click", () => {
            window.location.href = `project-page.html?name=${encodeURIComponent(projectName)}`;
        });

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            deleteProject(projectId, projectBox);
        });

        // Append elements to project box
        projectBox.appendChild(projectTitle);
        projectBox.appendChild(viewButton);
        projectBox.appendChild(deleteButton);
        projectContainer.appendChild(projectBox);
    }

    // Save project to localStorage
    function saveProject(projectName, projectId) {
        const projects = JSON.parse(localStorage.getItem("projects")) || [];
        projects.push({ name: projectName, id: projectId });
        localStorage.setItem("projects", JSON.stringify(projects));
    }

   function deleteProject(projectId) {
  if (confirm("Are you sure you want to delete this project?")) {
    // Proceed with deleting the project
    let projects = getProjects(); // Your array or storage method
    projects = projects.filter(project => project.id !== projectId); // Remove the project
    saveProjects(projects); // Save the updated projects list
    displayProjects(); // Re-render the updated list
  }
}

    // Event listener for "Start New Project" button
    startProjectButton.addEventListener("click", () => {
        const projectName = prompt("Enter project name:") || "Untitled Project";
        const projectId = Date.now(); // Unique ID for each project
        addProjectToDashboard(projectName, projectId);
        saveProject(projectName, projectId);
    });
});

function resetProjects() {
  // Assuming your projects are stored in localStorage
  localStorage.removeItem('projects');  // Removes stored projects from localStorage
  // Or if you're storing it in a JavaScript array, clear the array
  projects = [];  // Resets the array
  displayProjects();  // Function to update the UI with the reset data
}

