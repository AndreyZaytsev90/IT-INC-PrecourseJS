import {data} from "../../../data/game.data.js";

export function Scores() {
    const containerElement = document.createElement('div')
    containerElement.className = 'scores-container'; // добавить класс
    
    const scoresCatchElement = document.createElement('div')
    scoresCatchElement.append(`Catch: ${data.score.catchCount}    `) 
    scoresCatchElement.className = 'scores-catch-container'

    const scoresMissElement = document.createElement('div')
    scoresCatchElement.append(`   Miss: ${data.score.missCount}`)
    scoresCatchElement.className = 'scores-miss-container'


    containerElement.append(scoresCatchElement, scoresMissElement)

    return containerElement
}