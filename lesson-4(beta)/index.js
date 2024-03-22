import {data} from './data/data.js'
import {Todolist} from './components/todolist.component.js'

const todolistElement = Todolist(data.todolist)

const rootElement = document.getElementById('root')

rootElement.append(todolistElement)