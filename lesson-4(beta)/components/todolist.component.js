import {Header} from "./Header/Header.js";
import {TasksList} from "./TasksList/Task/TasksList.js";
import {ButtonsPanel} from "./ButtonsPanel/ButtonsPanel.js";

export function Todolist(data) {
const container = document.createElement('div')
    
    const headerElement = Header(data.title)
    const tasksListElement = TasksList(data.tasks)
    const buttonElement = ButtonsPanel()
    
    container.append(headerElement, tasksListElement, buttonElement)
    
    return container
}

