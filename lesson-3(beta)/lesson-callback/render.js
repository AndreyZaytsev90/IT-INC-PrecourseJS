import {data} from './mail.js'
export function render(value, callback) {
    document.body.append(value)
    callback()
}