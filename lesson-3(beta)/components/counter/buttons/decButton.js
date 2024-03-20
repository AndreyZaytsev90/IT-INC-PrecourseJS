import {data, decrementCount} from "../../../data/data.js";

export function DecButton() {
    const decButton = document.createElement('button')
    decButton.innerHTML = data.decButton
    decButton.addEventListener('click', decrementCount)
    return decButton
}




