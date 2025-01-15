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

        // Create the view project button
        const viewButton = document.createElement("button");
        viewButton.textContent = "View Project";
        viewButton.style.marginLeft = "10px";

        // Add functionality to the save button
        saveButton.addEventListener("click", () => {
            const projectName = input.value || "Untitled Project"; // Default name
            input.disabled = true; // Disable editing after saving
            projectBox.classList.add("project-box-active");

            // Remove input and save button after saving
            projectBox.innerHTML = `<span>${projectName}</span>`;
            projectBox.appendChild(viewButton);
        });

        // Add functionality to the view project button
        viewButton.addEventListener("click", () => {
            window.location.href = "project.html"; // Redirect to the new screen
        });

        // Append input and save button to the project box
        projectBox.appendChild(input);
        projectBox.appendChild(saveButton);

        // Append the project box to the container
        container.appendChild(projectBox);
    });
});
