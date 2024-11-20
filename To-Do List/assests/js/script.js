document.getElementById('addTask').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();
    if (taskValue === '') return;

    const li = document.createElement('li');
    li.textContent = taskValue;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'removeTask';
    removeBtn.onclick = function() {
        li.remove();
    };
    li.appendChild(removeBtn);

    li.onclick = function() {
        li.classList.toggle('done');
    };

    document.getElementById('taskList').appendChild(li);
    taskInput.value = ''; // Clear the input
});