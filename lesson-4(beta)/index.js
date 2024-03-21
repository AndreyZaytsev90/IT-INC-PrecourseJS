import {data} from './data/data.js'
import {Todolist} from './components/todolist.js'

const todolist = new Todolist(data.todolist)

const root = document.getElementById('root')

root.append(todolist)