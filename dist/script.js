document.addEventListener("DOMContentLoaded", domloaded);
function domloaded() {
    const addButton = document.querySelector("#addbutton");
    const userInput = document.querySelector("#userinput");
    const taskButtons = document.querySelectorAll(".done-btn");
    
    addButton.addEventListener("click", addBtnClick);
    userInput.addEventListener("keyup", function(event) {
        if (event.key == "Enter") {
            addBtnClick();
        }
    });
    
    taskButtons.forEach(button => {
        button.addEventListener("click", removeTask);
    });
}

function addBtnClick() {
    const userInput = document.querySelector("#userinput");
    const userText = userInput.value;

    if (userText.trim() !== "") {
        addTask(userText);
        userInput.value = "";
    }
}

function addTask(userText) {
    const newTask = document.createElement("li");
    const list = document.querySelector("ol");
    const tasks = document.querySelectorAll(".done-btn");
    const lastTask = tasks[tasks.length - 1];
    
    newTask.innerHTML = `<span class="task-text">${userText}</span><button class="done-btn">&#10006;</button>`;
    list.appendChild(newLi);
    lastTask.addEventListener("click", removeTask);
}

function removeTask(event) {
    const task = event.target.parentNode;
    const list = task.parentNode;
    list.removeChild(task);
}

