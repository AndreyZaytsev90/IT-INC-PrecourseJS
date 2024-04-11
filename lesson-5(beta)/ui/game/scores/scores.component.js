import {data} from "../../../data/game.data.js";

export function Scores() {
    const containerElement = document.createElement('div')
    containerElement.className = 'scores-container'; // добавить класс

    let currentCatchCount = document.createElement('div')
    currentCatchCount.className = 'currentCatchCountScores'
    let catchTitle = document.createElement('div')
    catchTitle.className = 'catchTitle'
    catchTitle.append('Catch:')
    let catchValue = document.createElement('div')
    catchValue.className = 'catchValue'
    catchValue.append(`${data.score.catchCount}`)

    currentCatchCount.append(catchTitle, catchValue )

    let currentMissCount = document.createElement('div')
    currentMissCount.className = 'currentMissCountScores'
    let missTitle = document.createElement('div')
    missTitle.className = 'MissTitle'
    missTitle.append('Miss:')
    let missValue = document.createElement('div')
    missValue.className = 'missValue'
    missValue.append(`${data.score.missCount}`)

    currentMissCount.append(missTitle, missValue)


    containerElement.append(currentCatchCount, currentMissCount)

    return containerElement
}