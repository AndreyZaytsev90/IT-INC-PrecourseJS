import {playAgain} from "../../data/game.data.js";


export function playAgainButton() {
    const containerElement = document.createElement("button")
    containerElement.className = 'play-again-button-container'; // добавить класс
    containerElement.append('PLAY AGAIN')
    containerElement.addEventListener('click', () => playAgain())
    return containerElement

}