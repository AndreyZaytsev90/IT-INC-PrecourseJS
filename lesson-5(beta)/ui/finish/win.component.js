import {data} from "../../data/game.data.js";
import {playAgainButton} from "./playAgainButton.js";

export function Win() {
    const containerElement = document.createElement('div')
    if(data.score.catchCount === data.settings.pointsToWin){
        containerElement.append('WIN')
    }
    
    const playAgainButton = playAgainButton()
    
    containerElement.append(playAgainButton)
    
    return containerElement
}