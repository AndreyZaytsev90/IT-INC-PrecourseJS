import {data} from "../../../data/data.js";

export function Count() {
    const value = document.createElement('div')
    value.innerHTML = data.clientsCount
    return value
}