import {data} from "../../data/game.data.js";

export function Finish() {
    const containerElement = document.createElement('div')
    if(data.score.catchCount === data.settings.pointsToWin){
        containerElement.append('WIN')
    } 
    if(data.score.missCount === data.settings.maximumMisses) {
        containerElement.append('LOSE')
    }
    return containerElement
}