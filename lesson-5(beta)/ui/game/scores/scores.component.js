import {data} from "../../../data/game.data.js";

export function Scores() {
    const containerElement = document.createElement('div')

    const scoresElement = `Catch: ${data.score.catchCount} Miss: ${data.score.missCount}`

    containerElement.append(scoresElement)

    return containerElement
}