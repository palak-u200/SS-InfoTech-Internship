function addTask() {

    let input = document.getElementById("taskInput");

    if (input.value === "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML =
        input.value +
        '<button onclick="deleteTask(this)">🗑️</button>';

    document.getElementById("taskList")
            .appendChild(li);

    saveTasks();

    input.value = "";
}

function deleteTask(button) {

    button.parentElement.remove();

    saveTasks();
}

function saveTasks() {

    let taskList = document.getElementById("taskList");

    localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {

    let savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        document.getElementById("taskList").innerHTML = savedTasks;
    }
}

window.onload = loadTasks;