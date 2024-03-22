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
        const taskElement = document.createElement('li')
        container.append(taskElement[i])
    }
    return container
}