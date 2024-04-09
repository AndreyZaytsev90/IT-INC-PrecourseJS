import {data, GAME_STATUSES, startGame} from "../../../data/game.data.js";
import {GridSize} from "./gridSize.component.js";

export function Settings() {
   /* data.gameStatus = GAME_STATUSES.SETTINGS*/
    const containerElement = document.createElement('div')

    const gridSizeSettings = GridSize()
    containerElement.appendChild(gridSizeSettings)
    
    const startGameButton = document.createElement('button')
    startGameButton.append('START GAME')
    startGameButton.addEventListener('click', ()=> startGame())
    
    containerElement.append(startGameButton)
    return containerElement
}


