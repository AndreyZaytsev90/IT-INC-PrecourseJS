import {data} from './data/data.js'
import {Todolist} from './components/todolist.component.js'

console.log(data)
const todolistElement = Todolist(data.todolist)

const rootElement = document.getElementById('root')

rootElement.append(todolistElement)