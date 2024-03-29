import {removeTask} from "../../../../data/data.js";


export function removeButton(id) {
    const container = document.createElement('div')
    const removeButtonElement = document.createElement('button')
    removeButtonElement.append("❌")
    removeButtonElement.addEventListener('click', () => removeTask(id))
    container.append(removeButtonElement)
    return container
}