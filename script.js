document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("start-project-btn");
    const container = document.createElement("div");
    container.id = "project-container";
    document.body.appendChild(container);

    button.addEventListener("click", () => {
        // Create a new project box container
        const projectBox = document.createElement("div");
        projectBox.className = "project-box";

        // Add an input field to name the project
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Enter project name";

        // Add a button to save the project name
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save Name";

        // Event listener for the save button
        saveButton.addEventListener("click", () => {
            const projectName = input.value || "Untitled Project";
            input.disabled = true; // Disable editing after saving
            projectBox.classList.add("project-box-active"); // Highlight the project box
            alert(`Project "${projectName}" saved!`);
        });

        // Append the input and button to the project box
        projectBox.appendChild(input);
        projectBox.appendChild(saveButton);

        // Add the project box to the container
        container.appendChild(projectBox);
    });
});
