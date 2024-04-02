import {addTask, closeAddTaskDialog, data} from "../../data/data.js";

export function AddNewTaskDialog() {
    const container = document.createElement('dialog')
    const headerElement = document.createElement('h4')
    const inputElement = document.createElement('input')
    const saveButtonElement = document.createElement('button')
    saveButtonElement.append("Save")
    headerElement.append("Add new task")
    inputElement.addEventListener('input', () => {
        inputElement.style.backgroundColor = 'white'
    });

    saveButtonElement.addEventListener('click', () => {
        if (inputElement.value === '') {
            headerElement.innerHTML = ''
            headerElement.style.color = 'red'
            headerElement.append("Error! You can't add a task without a title!")
            let errorMessage = inputElement.style.backgroundColor = 'red'
            inputElement.append(errorMessage)
        } else {
            headerElement.innerHTML = ''
            headerElement.style.color = 'black'
            headerElement.append("Thanks for adding a task!")
            setTimeout(() => {
                addTask(inputElement.value.trim())
                closeAddTaskDialog()
            }, 1000)
           
        }
    })

    const cancelButtonElement = document.createElement('button')
    cancelButtonElement.append("Cancel")

    cancelButtonElement.addEventListener('click', () => {
        closeAddTaskDialog()
    })

    if (data.todolist.isAddTaskDialogOpen) {
        container.open = true
    }


    container.append(headerElement, inputElement, saveButtonElement, cancelButtonElement)
    return container
}