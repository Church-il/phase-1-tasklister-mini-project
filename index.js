document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Get the task description
    const newTaskDescription = document.getElementById("new-task-description").value;
    
    if (newTaskDescription.trim() === "") {
      alert("Please enter a task description.");
      return;
    }

    // Create a new list item
    const taskItem = document.createElement("li");
    taskItem.textContent = newTaskDescription;

    // Append the task to the list
    taskList.appendChild(taskItem);

    // Clear the input field
    form.reset();
  });
});
