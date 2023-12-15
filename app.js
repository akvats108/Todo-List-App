let addTaskBtn = document.getElementById("addTask");
let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

addTaskBtn.addEventListener("click", function() {
    let taskText = taskInput.value;

    if (taskText.trim() !== "") {
        let listItem = document.createElement("li");
        listItem.classList.add("listItem");
        listItem.innerText = taskText;

        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteButton");
        deleteBtn.innerText = "Delete";

        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);

        taskInput.value = "";
    }
});

taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("deleteButton")) {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});
