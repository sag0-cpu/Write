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

        //Updated logic for save button
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
    projectBox.innerHTML = `<span>${projectName}</span>`;

    // Create the "View Project" button dynamically
    const viewButton = document.createElement("button");
    viewButton.className = "view-project-btn";
    viewButton.textContent = "View Project";
    viewButton.onclick = () => openProject(projectName); // Call openProject with the project name

    // Append the "View Project" button to the project box
    projectBox.appendChild(viewButton);

    // (Optional) Create a banner for feedback
    const banner = document.createElement("div");
    banner.textContent = `Project "${projectName}" Saved!`; // Display project name
    banner.classList.add("project-banner");
    document.body.appendChild(banner);
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
