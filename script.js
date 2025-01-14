function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    const task = todoInput.value.trim();
    if (task === '') {
        alert('Please enter a task.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.className = 'todo-item';
    

    const taskText = document.createElement('span');
    taskText.textContent = task;

    const buttonContainer = document.createElement('div')
    buttonContainer.style.display = 'flex'
    buttonContainer.style.gap = '5px'


    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    // deleteBtn.style.textAlign = 'left'
    // deleteBtn.style.padding = '3px 5px'
    deleteBtn.onclick = function () {
        todoList.removeChild(listItem);
    };

    const editBtn = document.createElement('button')
    editBtn.textContent = 'Edit'
    // editBtn.style.marginLeft= '10px'
    // editBtn.style.padding = '3px 5px'
    editBtn.onclick = function () {
        const newTask = prompt('Edi your task', taskText.textContent)
        if(newTask !== null && newTask.trim() !== '') {
            taskText.textContent = newTask.trim()
        }
    }

   

    listItem.appendChild(taskText);
    listItem.appendChild(buttonContainer)
    todoList.appendChild(listItem);

    buttonContainer.appendChild(deleteBtn)
    buttonContainer.appendChild(editBtn)

     

    todoInput.value = '';
}

