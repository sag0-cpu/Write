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

        // Append the input and save button to the project box
        projectBox.appendChild(input);
        projectBox.appendChild(saveButton);

        // When save button is clicked, save the project name and disable editing
saveButton.addEventListener("click", () => {
    const projectName = input.value || "Untitled Project"; // Default if no name is entered
    input.disabled = true; // Disable the input field after saving the name
    projectBox.classList.add("project-box-active"); // Style the box

     // Apply dynamic styles to the project box
    projectBox.style.border = "3px solid #004085"; // Apply a bold border
    projectBox.style.backgroundColor = "#d1ecf1"; // Change background color
    projectBox.style.color = "#004085"; // Change text color
    projectBox.style.fontSize = "1.2em"; // Make text larger
    projectBox.style.padding = "15px"; // Add more padding
    projectBox.style.textAlign = "center"; // Center the text
    projectBox.style.width = "90%"; // Make it span most of the container
    projectBox.style.margin = "0 auto"; // Center the box horizontally
    
    // Remove the input and save button after saving
    projectBox.innerHTML = `<span>${projectName}</span>`;

    // Create a large banner
    const banner = document.createElement("div");
    banner.textContent = `Project "${projectName}" Saved!`; // Display project name
    banner.classList.add("project-banner"); // Add banner styling class

    // Append the banner to the document body
    document.body.appendChild(banner);
    
});


        // Append the project box to the container
        container.appendChild(projectBox);
    });
});
