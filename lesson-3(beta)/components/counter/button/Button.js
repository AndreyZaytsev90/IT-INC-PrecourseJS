import {data} from "../../../data/data.js";

export function Button() {
    const incButton = document.createElement('button')
    incButton.innerHTML = data.button
    return incButton
}