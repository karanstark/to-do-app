const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="complete-btn">✓</button>
    <button class="delete-btn">🗑️</button>
  `;

  // Toggle complete
  li.querySelector(".complete-btn").addEventListener("click", () => {
    li.querySelector(".task-text").classList.toggle("completed");
  });

  // Delete task
  li.querySelector(".delete-btn").addEventListener("click", () => {
    taskList.removeChild(li);
  });

  taskList.appendChild(li);
  taskInput.value = "";
});
