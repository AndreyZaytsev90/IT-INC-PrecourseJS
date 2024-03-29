import {closeAddTaskDialog, openAddTaskDialog} from "../../data/data.js";
import {data} from "../../data/data.js";

export function ButtonsPanel() {
    const container = document.createElement('div')
    const addButtonElement = document.createElement('button')
    addButtonElement.append('+add')
    
    addButtonElement.addEventListener('click', () => {
        data.todolist.isAddTaskDialogOpen ? closeAddTaskDialog() : openAddTaskDialog()
    })
    container.append(addButtonElement)
    return container
}

