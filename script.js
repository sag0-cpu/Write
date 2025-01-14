document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("start-project-btn"); // Get the start project button
    const container = document.getElementById("project-container"); // The container for project boxes

      // Check if the container was found (Need this otherwise you can't write name) 
    if (container) {
        // Create a new div element to represent the project box
        const projectBox = document.createElement("div");
        projectBox.innerHTML = '<input type="text" placeholder="Enter project name">';
        
        // Append the new project box to the container
        container.appendChild(projectBox);
    } else {
        // Log an error if the container wasn't found
        console.error("The container was not found!");
    }
});


    // When the button is clicked, create a new project box
    button.addEventListener("click", () => {
        // Create the new project box container
        const projectBox = document.createElement("div");
        projectBox.className = "project-box"; // Style the box with 'project-box' class

        // Create the input field for the project name
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Enter project name";

        // Create the save button
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save Name";

        // When save button is clicked, save the project name and disable editing
        saveButton.addEventListener("click", () => {
            const projectName = input.value || "Untitled Project"; // Default if no name is entered
            input.disabled = true; // Disable the input field after saving the name
            projectBox.classList.add("project-box-active"); // Style the box when name is saved
            alert(`Project "${projectName}" saved!`); // Show an alert with the project name
        });

        // Append the input and save button to the project box
        projectBox.appendChild(input);
        projectBox.appendChild(saveButton);

        // Add the new project box to the container
        container.appendChild(projectBox);
    });
});
