import {render} from './render.js'

export const data = 10

render(data, notifyMe)

function notifyMe() {
    alert('ok')
}

setTimeout(notifyMe, 1000)