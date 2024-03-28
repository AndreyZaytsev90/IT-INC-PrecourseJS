import {data, subscribe} from './data/data.js'
import {Todolist} from './components/todolist.component.js'

subscribe(refreshUI) //передаем саму функцию

function refreshUI() {
    const todolistElement = Todolist(data.todolist)
    const rootElement = document.getElementById('root')
    rootElement.innerHTML = '' //зачистка старых данных
    rootElement.append(todolistElement)
}

refreshUI() //вызываем функцию
