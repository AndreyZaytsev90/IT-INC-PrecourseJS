export function Todolist(data) {
const container = document.createElement('div')
    
    const headerElement = Headers(data.title)
    const tasksListElement = TasksList(data.tasks)
    const buttonElement = ButtonsPanel()
    
    container.append(headerElement, tasksListElement, buttonElement)
    
    return container
}

function Headers(title) {
    const container = document.createElement('h1')
    container.append(title)
    return container
}

function TasksList(tasks) {
    const container = document.createElement('ol')

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i]
        const taskElement = Task(task)
        container.append(taskElement)
    }
    return container
}

function Task(task) {
    const container = document.createElement('li')
    container.append(task.title)
    return container
}

function ButtonsPanel() {
    const container = document.createElement('div')
    const addButtonElement = document.createElement('button')
    addButtonElement.innerHTML = "+add"
    container.append(addButtonElement)
    return container
}