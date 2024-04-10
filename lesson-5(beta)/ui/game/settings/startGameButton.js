import {startGame} from "../../../data/game.data.js";


export function StartGameButton() {
    const containerElement = document.createElement("button")
    containerElement.className = 'start-game-button-container'; // добавить класс
    containerElement.append('START GAME')
    containerElement.addEventListener('click', () => startGame())
    return containerElement

}