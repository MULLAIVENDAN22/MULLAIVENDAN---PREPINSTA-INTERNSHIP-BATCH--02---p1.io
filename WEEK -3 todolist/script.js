// script.js

let taskList = [];

document.getElementById('task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let taskInput = document.getElementById('task-input');
    let task = taskInput.value.trim();
    if (task) {
        taskList.push({ text: task, completed: false });
        taskInput.value = '';
        renderTaskList();
    }
});

document.getElementById('clear-completed-btn').addEventListener('click', () => {
    taskList = taskList.filter((task) =>!task.completed);
    renderTaskList();
});

function renderTaskList() {
    let taskListHTML = '';
    taskList.forEach((task) => {
        taskListHTML += `
            <li ${task.completed? 'class="completed"' : ''}>
                <input type="checkbox" ${task.completed? 'checked' : ''}>
                ${task.text}
            </li>
        `;
    });
    document.getElementById('task-list').innerHTML = taskListHTML;
    addTaskEventListeners();
}

function addTaskEventListeners() {
    let taskListItems = document.getElementById('task-list').children;
    for (let i = 0; i < taskListItems.length; i++) {
        let taskListItem = taskListItems[i];
        let checkbox = taskListItem.children[0];
        checkbox.addEventListener('click', () => {
            let taskIndex = Array.prototype.indexOf.call(taskListItems, taskListItem);
            taskList[taskIndex].completed =!taskList[taskIndex].completed;
            renderTaskList();
        });
    }
}

renderTaskList();







