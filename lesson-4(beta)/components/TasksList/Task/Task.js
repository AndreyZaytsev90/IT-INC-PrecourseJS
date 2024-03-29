import {removeButton} from "./RemoveButton/RemoveButton.js";

export function Task(task) {
    const container = document.createElement('li')
    container.style.display = 'flex'
    const removeButtonElement = removeButton(task.id)
    container.append(task.title,removeButtonElement)
    return container
}