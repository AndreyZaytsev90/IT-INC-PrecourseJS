import {setCallback} from './data/data.js'
import {renderCounter} from './components/counter/renderCounter.js'

renderCounter()

setCallback(renderCounter)