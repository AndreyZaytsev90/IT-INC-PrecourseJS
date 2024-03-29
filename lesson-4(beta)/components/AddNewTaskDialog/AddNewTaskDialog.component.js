import {addTask, closeAddTaskDialog, data} from "../../data/data.js";

export function AddNewTaskDialog() {
    const container = document.createElement('dialog')
    const headerElement = document.createElement('h4')
    const inputElement = document.createElement('input')
    const saveButtonElement = document.createElement('button')
    saveButtonElement.append("Save")
    
    saveButtonElement.addEventListener('click', ()=> {
        addTask(inputElement.value.trim())
        closeAddTaskDialog()
    }) 
    
    const cancelButtonElement = document.createElement('button')
    cancelButtonElement.append("Cancel")

    cancelButtonElement.addEventListener('click', ()=> {
        closeAddTaskDialog()
    })

    if(data.todolist.isAddTaskDialogOpen){
        container.open = true
    }
    
    container.append(headerElement, inputElement, saveButtonElement, cancelButtonElement )
    return container
}