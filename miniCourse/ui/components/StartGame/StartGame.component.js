import {startGame} from "../../../core/state-manager.js";

export function StartGameComponent() {
    const element = document.createElement('div')
    
    render(element)

    return {element}
}

async function render(element) {
    const button = document.createElement('button')
    button.append('Start game!')
    button.addEventListener('click', ()=> {
        startGame()
    }) 
    element.append(button)
}