import {data} from "../../data/game.data.js";

export function Lose() {
    const containerElement = document.createElement('div')
    if(data.score.missCount === data.settings.maximumMisses) {
        containerElement.append('LOSE')
    }
    return containerElement
}