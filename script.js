// Add an event listener for the "Start New Project" button
document.getElementById("start-project-btn").addEventListener("click", function () {
    // Try to get the container element
    const container = document.getElementById("project-container");

    // Check if the container was found
    if (container) {
        // Create a new div element to represent the project box
        const projectBox = document.createElement("div");
        projectBox.className = "project-box"; // Add a class for styling

        // Add an input element for the project name inside the project box
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Enter project name";
        input.classList.add("project-input"); // Add a class for the blue border

        // Create the save button
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save Name";

        // When save button is clicked, save the project name and style the box
        saveButton.addEventListener("click", () => {
            const projectName = input.value || "Untitled Project"; // Default if no name entered
            input.disabled = true; // Disable the input field
            projectBox.classList.add("project-box-active"); // Add a class to style the box
            alert(`Project "${projectName}" saved!`); // Alert with project name
        });

        // Append the input and save button to the project box
        projectBox.appendChild(input);
        projectBox.appendChild(saveButton);

        // Add the new project box to the container
        container.appendChild(projectBox);
    } else {
        console.error("The container was not found!"); // Log an error if the container doesn't exist
    }
});
