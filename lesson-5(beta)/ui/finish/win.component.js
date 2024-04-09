import {data} from "../../data/game.data.js";

export function Win() {
    const containerElement = document.createElement('div')
    if(data.score.catchCount === data.settings.pointsToWin){
        containerElement.append('WIN')
    }
    return containerElement
}